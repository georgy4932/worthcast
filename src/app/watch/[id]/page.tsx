import Navbar from "@/components/Navbar";
import MuxPlayer from "@/components/MuxPlayer";
import ViewTracker from "@/components/ViewTracker";
import WatchActions from "@/components/WatchActions";
import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

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
    .eq("id", id)
    .eq("status", "ready")
    .eq("visibility", "public")
    .maybeSingle();

  return data;
}

async function getRelatedVideos(currentId: string): Promise<Video[]> {
  const { data } = await supabase
    .from("videos")
    .select("*")
    .eq("status", "ready")
    .eq("visibility", "public")
    .neq("id", currentId)
    .order("created_at", { ascending: false })
    .limit(6);

  return data || [];
}

function formatDuration(seconds: number | null) {
  if (!seconds) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function formatViews(count: number | null) {
  if (!count) return "0 views";
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M views`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(0)}K views`;
  return `${count} views`;
}

export default async function WatchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = await getVideo(id);

  if (!video) {
    notFound();
  }

  const relatedVideos = await getRelatedVideos(video.id);
  const duration = formatDuration(video.duration);

  const publishedAt = new Date(video.created_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const shareUrl = `https://worthcast.vercel.app/watch/${video.id}`;

  return (
    <>
      <Navbar />

      <main className="watch-page">
        <ViewTracker videoId={video.id} />

        <div className="watch-layout">
          <section className="watch-main">
            {video.mux_playback_id ? (
              <MuxPlayer playbackId={video.mux_playback_id} title={video.title} />
            ) : (
              <div className="watch-player-placeholder">
                Video unavailable
              </div>
            )}

            <div className="watch-info">
              <h1>{video.title}</h1>

              <div className="watch-top-row">
                <div className="watch-meta">
                  <span>{formatViews(video.view_count)}</span>
                  <span>•</span>
                  <span>{publishedAt}</span>
                  <span>•</span>
                  <span>{duration}</span>
                </div>

                <WatchActions title={video.title} shareUrl={shareUrl} />
              </div>

              <div className="watch-creator-card">
                <div className="watch-creator-left">
                  <div className="watch-avatar">W</div>
                  <div>
                    <p className="watch-creator-name">WorthCast Creator</p>
                    <p className="watch-creator-subtitle">
                      Faith & Biblical Storytelling
                    </p>
                  </div>
                </div>

                <button type="button" className="btn btn-primary btn-sm">
                  + Follow
                </button>
              </div>

              <div className="watch-description-card">
                <p className="watch-description">
                  {video.description || "No description provided."}
                </p>
              </div>

              <div className="watch-standard-card">
                <p>✝️ Christian Content</p>
                <span>
                  This video is part of WorthCast’s Christian-first streaming
                  library.
                </span>
              </div>
            </div>
          </section>

          <aside className="watch-sidebar">
            <h2>Up Next</h2>

            {relatedVideos.length === 0 ? (
              <p className="watch-sidebar-empty">
                No other videos yet. Upload more content to build the library.
              </p>
            ) : (
              <div className="watch-related-list">
                {relatedVideos.map((related) => {
                  const thumbnailUrl = related.mux_playback_id
                    ? `https://image.mux.com/${related.mux_playback_id}/thumbnail.jpg?time=0`
                    : null;

                  return (
                    <a
                      key={related.id}
                      href={`/watch/${related.id}`}
                      className="watch-related-card"
                    >
                      <div
                        className="watch-related-thumb"
                        style={{
                          background: thumbnailUrl
                            ? `url(${thumbnailUrl}) center/cover no-repeat`
                            : "linear-gradient(135deg,#1a1a2e,#2d1b4e)",
                        }}
                      >
                        {!thumbnailUrl && "🎬"}

                        <span>{formatDuration(related.duration)}</span>
                      </div>

                      <div className="watch-related-info">
                        <h3>{related.title}</h3>
                        <p>WorthCast Creator</p>
                        <p>{formatViews(related.view_count)}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </aside>
        </div>
      </main>
    </>
  );
}
