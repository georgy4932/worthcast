import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Database types
export type Profile = {
  id: string;
  username: string;
  display_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  website: string | null;
  is_creator: boolean;
  created_at: string;
};

export type Video = {
  id: string;
  creator_id: string;
  title: string;
  description: string | null;
  category_id: number | null;
  mux_asset_id: string | null;
  mux_playback_id: string | null;
  mux_upload_id: string | null;
  thumbnail_url: string | null;
  duration: number | null;
  status: "processing" | "ready" | "error";
  visibility: "public" | "private" | "unlisted";
  view_count: number;
  created_at: string;
  published_at: string | null;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  icon: string | null;
  description: string | null;
};

export type Follow = {
  follower_id: string;
  following_id: string;
  created_at: string;
};
