import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import Mux from "@mux/mux-node";

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID!,
  tokenSecret: process.env.MUX_TOKEN_SECRET!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

type MuxPassthrough = {
  title?: string;
  description?: string | null;
  categoryId?: string | null;
};

function parsePassthrough(passthrough?: string | null): MuxPassthrough {
  if (!passthrough) return {};

  try {
    return JSON.parse(passthrough) as MuxPassthrough;
  } catch {
    return {};
  }
}

export async function POST(request: Request) {
  try {
    if (!process.env.MUX_WEBHOOK_SECRET) {
      return NextResponse.json(
        { error: "Mux webhook secret is missing." },
        { status: 500 }
      );
    }

    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: "Supabase service role key is missing." },
        { status: 500 }
      );
    }

    const rawBody = await request.text();
    const signature = request.headers.get("mux-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing Mux signature." },
        { status: 400 }
      );
    }

    const event = mux.webhooks.unwrap(
      rawBody,
      { "mux-signature": signature },
      process.env.MUX_WEBHOOK_SECRET
    );

    if (event.type !== "video.asset.ready") {
      return NextResponse.json({ received: true });
    }

    const asset = event.data;
    const playbackId = asset.playback_ids?.[0]?.id;

    if (!playbackId) {
      return NextResponse.json(
        { error: "No playback ID found." },
        { status: 400 }
      );
    }

    const meta = parsePassthrough(asset.passthrough);

    const title = meta.title?.trim() || "Untitled Video";
    const description = meta.description?.trim() || null;
    const categoryId = meta.categoryId || null;
    const duration = Math.round(asset.duration || 0);

    const { error } = await supabase.from("videos").upsert(
      {
        title,
        description,
        category_id: categoryId,
        mux_asset_id: asset.id,
        mux_playback_id: playbackId,
        duration,
        status: "ready",
        visibility: "public",
        published_at: new Date().toISOString(),
      },
      {
        onConflict: "mux_asset_id",
      }
    );

    if (error) {
      console.error("Supabase upsert error:", error);

      return NextResponse.json(
        { error: "Failed to save video." },
        { status: 500 }
      );
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Mux webhook error:", error);

    return NextResponse.json(
      { error: "Webhook failed." },
      { status: 500 }
    );
  }
}
