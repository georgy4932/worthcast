import { NextResponse } from "next/server";
import Mux from "@mux/mux-node";

export const maxDuration = 60;

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID!,
  tokenSecret: process.env.MUX_TOKEN_SECRET!,
});

type CreateUploadBody = {
  title?: string;
  description?: string | null;
  categoryId?: string | null;
};

export async function POST(request: Request) {
  try {
    if (!process.env.MUX_TOKEN_ID || !process.env.MUX_TOKEN_SECRET) {
      return NextResponse.json(
        { error: "Mux environment variables are missing." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as CreateUploadBody;

    const title = body.title?.trim();
    const description = body.description?.trim() || null;
    const categoryId = body.categoryId?.trim() || null;

    if (!title) {
      return NextResponse.json(
        { error: "Title is required." },
        { status: 400 }
      );
    }

    const upload = await mux.video.uploads.create({
      cors_origin: "*",
      new_asset_settings: {
        playback_policy: ["public"],
        encoding_tier: "baseline",
        passthrough: JSON.stringify({
          title,
          description,
          categoryId,
        }),
      },
    });

    return NextResponse.json({
      uploadId: upload.id,
      uploadUrl: upload.url,
    });
  } catch (error) {
    console.error("Mux upload error:", error);

    return NextResponse.json(
      { error: "Failed to create upload." },
      { status: 500 }
    );
  }
}
