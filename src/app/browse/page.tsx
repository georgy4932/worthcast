import Navbar from "@/components/Navbar";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function getVideos() {
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .eq("status", "ready")
    .eq("visibility", "public")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching videos:", error);
    return [];
  }

  return data || [];
}

function formatDuration(seconds: number | null) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function getThumbColor(index: number) {
  const colors = [
    "linear-gradient(135deg,#1a1a2e,#2d1b4e)",
    "linear-gradient(135deg,#0d2137,#1a4a6e)",
    "linear-gradient(135deg,#1e1200,#3d2800)",
    "linear-gradient(135deg,#0a1f0a,#1a3d1a)",
    "linear-gradient(135deg,#1a0a2e,#2d1b4e,#4a2d6e)",
    "linear-gradient(135deg,#1f1000,#4a2800)",
    "linear-gradient(135deg,#001a1f,#003d4a)",
  ];
  return colors[index % colors.length];
}

export default async function BrowsePage() {
  const videos = await getVideos();

  return (
    <>
      <Navbar />
      <main
        style={{
          paddingTop: "68px",
          minHeight: "100vh",
          background: "var(--black)",
        }}
      >
        <style>{`
          .browse-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          @media (max-width: 1200px) {
            .browse-grid { grid-template-columns: repeat(3, 1fr); }
          }
          @media (max-width: 900px) {
            .browse-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 500px) {
            .browse-grid { grid-template-columns: 1fr; }
          }
        `}</style>

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 40px" }}>

          {/* Header */}
          <div style={{ marginBottom: "48px" }}>
            <p style={{
              fontSize: "11px",
              color: "var(--gold)",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: 600,
              marginBottom: "12px",
            }}>
              All Content
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "1px",
              color: "var(--white)",
              marginBottom: "12px",
            }}>
              Browse Videos
            </h1>
            <p style={{ fontSize: "15px", color: "var(--muted)" }}>
              {videos.length > 0
                ? `${videos.length} video${videos.length === 1 ? "" : "s"} available`
                : "No videos yet — be the first to upload."}
            </p>
          </div>

          {/* Video Grid */}
          {videos.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: "80px 24px",
              border: "1px dashed var(--border)",
              borderRadius: "12px",
            }}>
              <div style={{ fontSize: "48px", marginBottom: "20px" }}>🎬</div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                color: "var(--white)",
                marginBottom: "12px",
              }}>
                No Videos Yet
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: "28px" }}>
                Be the first creator to upload content to WorthCast.
              </p>
              <a href="/upload" style={{
                display: "inline-flex",
                background: "var(--gold)",
                color: "var(--black)",
                padding: "12px 28px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
              }}>
                Upload a Video
              </a>
            </div>
          ) : (
            <ul className="browse-grid" role="list" style={{ listStyle: "none" }}>
              {videos.map((video, index) => {
                const duration = formatDuration(video.duration);
                const publishedAt = new Date(video.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                });

                return (
                  <li key={video.id}>
                    <a
                      href={`/watch/${video.id}`}
                      aria-label={`${video.title}${duration ? `, ${duration}` : ""}`}
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
                        background: video.mux_playback_id
                          ? `url(https://image.mux.com/${video.mux_playback_id}/thumbnail.jpg?time=0) center/cover no-repeat`
                          : getThumbColor(index),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        fontSize: "32px",
                      }}>
                        {!video.mux_playback_id && "🎬"}
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
                        <h2 style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "var(--white)",
                          lineHeight: 1.4,
                          marginBottom: "10px",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical" as const,
                          overflow: "hidden",
                        }}>
                          {video.title}
                        </h2>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "12px",
                          color: "var(--muted)",
                        }}>
                          <span>{video.view_count?.toLocaleString() || 0} views</span>
                          <span>{publishedAt}</span>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
 
