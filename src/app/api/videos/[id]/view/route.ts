import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const { data: video } = await supabase
      .from("videos")
      .select("view_count")
      .eq("id", id)
      .single();

    if (!video) {
      return NextResponse.json(
        { error: "Video not found" },
        { status: 404 }
      );
    }

    const currentViews = video.view_count || 0;

    const { error } = await supabase
      .from("videos")
      .update({
        view_count: currentViews + 1,
      })
      .eq("id", id);

    if (error) {
      return NextResponse.json(
        { error: "Failed to update views" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("View count error:", error);

    return NextResponse.json(
      { error: "Failed to increment views" },
      { status: 500 }
    );
  }
}
