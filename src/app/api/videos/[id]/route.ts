import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .eq("id", id)
      .eq("status", "ready")
      .eq("visibility", "public")
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Video not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Video fetch error:", error);

    return NextResponse.json(
      { error: "Failed to fetch video" },
      { status: 500 }
    );
  }
}
