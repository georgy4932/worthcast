import Navbar from "@/components/Navbar";
import MuxPlayer from "@/components/MuxPlayer";
import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Video = {
  id: string;
  title: string;
  description: string | null;
  mux_playback_id: string | null;
  duration: number | null;
  view_count: number | null;
  created_at: string;
};

async function getVideo(id: string): Promise<Video | null> {
  const { data } = await supabase
    .from("videos")
    .select("*")
    .or(`id.eq.${id},mux_playback_id.eq.${id}`)
    .maybeSingle();

  return data;
}

function formatDuration(seconds: number | null) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default async function WatchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = await getVideo(id);

  if (!video) notFound();

  const duration = formatDuration(video.duration);

  const publishedAt = new Date(video.created_at).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Navbar />

      <main className="watch-page">
        <div className="watch-layout">
          <section className="watch-main">
            {video.mux_playback_id ? (
              <MuxPlayer playbackId={video.mux_playback_id} title={video.title} />
            ) : (
              <div className="watch-player-placeholder">
                <div className="watch-play-icon">▶</div>
                <p>Video not available yet</p>
              </div>
            )}

            <div className="watch-info">
              <h1>{video.title}</h1>

              <div className="watch-meta">
                <span>{video.view_count?.toLocaleString() || 0} views</span>
                <span>·</span>
                <span>{publishedAt}</span>
                {duration && (
                  <>
                    <span>·</span>
                    <span>{duration}</span>
                  </>
                )}
              </div>

              {video.description && (
                <p className="watch-description">{video.description}</p>
              )}
            </div>
          </section>

          <aside className="watch-sidebar">
            <h2>Up Next</h2>
            <p className="watch-sidebar-empty">
              Related videos will appear here once recommendations are connected.
            </p>
          </aside>
        </div>
      </main>
    </>
  );
}
