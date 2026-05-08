import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Use service role for webhook — bypasses RLS
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, data } = body;

    // Only handle asset ready events
    if (type !== "video.asset.ready") {
      return NextResponse.json({ received: true });
    }

    const asset = data;
    const playbackId = asset.playback_ids?.[0]?.id;
    const duration = Math.round(asset.duration || 0);

    // Parse metadata passed during upload
    let title = "Untitled Video";
    let description = null;
    let categoryId = null;

    if (asset.passthrough) {
      try {
        const meta = JSON.parse(asset.passthrough);
        title = meta.title || title;
        description = meta.description || null;
        categoryId = meta.categoryId || null;
      } catch {
        // passthrough not JSON
      }
    }

    if (!playbackId) {
      return NextResponse.json({ error: "No playback ID" }, { status: 400 });
    }

    // Save video to Supabase
    const { error } = await supabase.from("videos").insert({
      title,
      description,
      category_id: categoryId,
      mux_asset_id: asset.id,
      mux_playback_id: playbackId,
      duration,
      status: "ready",
      visibility: "public",
      published_at: new Date().toISOString(),
      // creator_id will be null until auth is fully wired
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Video saved to Supabase:", title, playbackId);
    return NextResponse.json({ received: true });

  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook failed" },
      { status: 500 }
    );
  }
}
