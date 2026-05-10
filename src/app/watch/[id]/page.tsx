import Navbar from "@/components/Navbar";
import MuxPlayer from "@/components/MuxPlayer";
import VideoCard from "@/components/VideoCard";
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
    .eq("id", id)
    .maybeSingle();

  return data;
}

async function getRelatedVideos(currentId: string) {
  const { data } = await supabase
    .from("videos")
    .select("*")
    .eq("status", "ready")
    .eq("visibility", "public")
    .neq("id", currentId)
    .order("created_at", { ascending: false })
    .limit(4);

  return data || [];
}

function formatDuration(seconds: number | null) {
  if (!seconds) return "0:00";

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatViews(count: number | null) {
  if (!count) return "0 views";

  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1)}M views`;
  }

  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(0)}K views`;
  }

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

  const publishedAt = new Date(video.created_at).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <>
      <Navbar />

      <main
        style={{
          background: "var(--black)",
          minHeight: "100vh",
          paddingTop: "100px",
          paddingBottom: "80px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) 360px",
            gap: "32px",
          }}
        >
          {/* Main */}
          <section>
            {video.mux_playback_id ? (
              <MuxPlayer
                playbackId={video.mux_playback_id}
                title={video.title}
              />
            ) : (
              <div
                style={{
                  aspectRatio: "16 / 9",
                  borderRadius: "16px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--muted)",
                }}
              >
                Video unavailable
              </div>
            )}

            <div
              style={{
                marginTop: "28px",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "28px",
              }}
            >
              <h1
                style={{
                  fontSize: "34px",
                  lineHeight: 1.15,
                  color: "var(--white)",
                  marginBottom: "16px",
                  fontWeight: 700,
                }}
              >
                {video.title}
              </h1>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                  color: "var(--muted)",
                  fontSize: "14px",
                  marginBottom: "24px",
                }}
              >
                <span>{formatViews(video.view_count)}</span>
                <span>•</span>
                <span>{publishedAt}</span>
                <span>•</span>
                <span>{duration}</span>
              </div>

              {video.description && (
                <p
                  style={{
                    color: "var(--muted)",
                    lineHeight: 1.8,
                    fontSize: "15px",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {video.description}
                </p>
              )}
            </div>
          </section>

          {/* Sidebar */}
          <aside>
            <h2
              style={{
                color: "var(--white)",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              Up Next
            </h2>

            <div
              style={{
                display: "grid",
                gap: "16px",
              }}
            >
              {relatedVideos.map((related, index) => {
                const thumbnailUrl = related.mux_playback_id
                  ? `https://image.mux.com/${related.mux_playback_id}/thumbnail.jpg?time=0`
                  : null;

                return (
                  <VideoCard
                    key={related.id}
                    href={`/watch/${related.id}`}
                    title={related.title}
                    category="WorthCast"
                    author="WorthCast Creator"
                    views={formatViews(related.view_count)}
                    duration={formatDuration(related.duration)}
                    emoji="🎬"
                    theme={
                      [
                        "thumb-faith",
                        "thumb-documentary",
                        "thumb-education",
                        "thumb-wellbeing",
                      ][index % 4]
                    }
                    avatar="W"
                    avatarClass="avatar--gold"
                    thumbnailUrl={thumbnailUrl}
                  />
                );
              })}
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
