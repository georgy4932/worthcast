import { createClient } from "@supabase/supabase-js";
import Hero from "./Hero";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function getLatestVideo() {
  const { data } = await supabase
    .from("videos")
    .select("*")
    .eq("status", "ready")
    .eq("visibility", "public")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  return data || null;
}

export default async function HeroFeatured() {
  const video = await getLatestVideo();
  return <Hero featuredVideo={video} />;
}
