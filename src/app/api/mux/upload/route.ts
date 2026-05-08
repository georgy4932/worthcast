import { NextResponse } from "next/server";
import Mux from "@mux/mux-node";

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID!,
  tokenSecret: process.env.MUX_TOKEN_SECRET!,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, categoryId } = body;

    const upload = await mux.video.uploads.create({
      cors_origin: "*",
      new_asset_settings: {
        playback_policy: ["public"],
        encoding_tier: "baseline",
        passthrough: JSON.stringify({ title, description, categoryId }),
      },
    });

    return NextResponse.json({
      uploadId: upload.id,
      uploadUrl: upload.url,
    });
  } catch (error) {
    console.error("Mux upload error:", error);
    return NextResponse.json(
      { error: "Failed to create upload" },
      { status: 500 }
    );
  }
}
