import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const gradients = [
  "linear-gradient(135deg,#1a1a2e,#2d1b4e)",
  "linear-gradient(135deg,#0d2137,#1a4a6e)",
  "linear-gradient(135deg,#1e1200,#3d2800)",
  "linear-gradient(135deg,#0a1f0a,#1a3d1a)",
];

function formatDuration(seconds: number | null) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatViews(count: number) {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M views`;
  if (count >= 1000) return `${(count / 1000).toFixed(0)}K views`;
  return `${count} views`;
}

async function getVideos() {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .eq("status", "ready")
    .eq("visibility", "public")
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) {
    console.error("Error fetching videos:", error);
    return [];
  }

  return data || [];
}

export default async function VideoGrid() {
  const videos = await getVideos();

  if (videos.length === 0) {
    return (
      <section
        aria-labelledby="trending-heading"
        style={{ padding: "80px", background: "var(--black)" }}
      >
        <div style={{ marginBottom: "40px" }}>
          <p style={{
            fontSize: "11px",
            color: "var(--gold)",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: 600,
            marginBottom: "8px",
          }}>
            ↑ Rising Fast
          </p>
          <h2
            id="trending-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "42px",
              letterSpacing: "1px",
              lineHeight: 1,
              color: "var(--white)",
            }}
          >
            Trending Videos
          </h2>
        </div>
        <div style={{
          textAlign: "center",
          padding: "60px 24px",
          border: "1px dashed var(--border)",
          borderRadius: "12px",
        }}>
          <p style={{ color: "var(--muted)", fontSize: "15px" }}>
            No videos yet.{" "}
            <a href="/upload" style={{ color: "var(--gold)", textDecoration: "none" }}>
              Upload the first one →
            </a>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="trending-heading"
      style={{ padding: "80px", background: "var(--black)" }}
    >
      <style>{`
        .video-grid-home {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1200px) {
          .video-grid-home { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .video-grid-home { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .video-grid-home { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: "40px",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        <div>
          <p style={{
            fontSize: "11px",
            color: "var(--gold)",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: 600,
            marginBottom: "8px",
          }}>
            ↑ Rising Fast
          </p>
          <h2
            id="trending-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "42px",
              letterSpacing: "1px",
              lineHeight: 1,
              color: "var(--white)",
            }}
          >
            Trending Videos
          </h2>
        </div>
        <a href="/browse" style={{
          color: "var(--gold)",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}>
          See all trending →
        </a>
      </div>

      {/* Grid */}
      <ul className="video-grid-home" role="list" style={{ listStyle: "none" }}>
        {videos.map((video, index) => {
          const duration = formatDuration(video.duration);
          const thumb = video.mux_playback_id
            ? `https://image.mux.com/${video.mux_playback_id}/thumbnail.jpg?time=0`
            : null;

          return (
            <li key={video.id}>
              <a
                href={`/watch/${video.id}`}
                style={{
                  display: "block",
                  background: "var(--card)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {/* Thumbnail */}
                <div style={{
                  aspectRatio: "16/9",
                  background: thumb
                    ? `url(${thumb}) center/cover no-repeat`
                    : gradients[index % gradients.length],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  fontSize: "32px",
                }}>
                  {!thumb && "🎬"}
                  {duration && (
                    <span style={{
                      position: "absolute",
                      bottom: "8px",
                      right: "8px",
                      background: "rgba(0,0,0,0.8)",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "2px 7px",
                      borderRadius: "3px",
                    }}>
                      {duration}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: "14px 16px 16px" }}>
                  <h3 style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--white)",
                    lineHeight: 1.4,
                    marginBottom: "10px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: "hidden",
                  }}>
                    {video.title}
                  </h3>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    color: "var(--muted)",
                  }}>
                    <span>{formatViews(video.view_count || 0)}</span>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
