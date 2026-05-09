import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Video = {
  id: string;
  title: string;
  mux_playback_id: string | null;
  duration: number | null;
  view_count: number;
  created_at: string;
};

type Props = {
  title: string;
  label?: string;
  category?: string;
  limit?: number;
  browseHref?: string;
};

function formatDuration(seconds: number | null) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const gradients = [
  "linear-gradient(135deg,#1a1a2e,#2d1b4e)",
  "linear-gradient(135deg,#0d2137,#1a4a6e)",
  "linear-gradient(135deg,#1e1200,#3d2800)",
  "linear-gradient(135deg,#0a1f0a,#1a3d1a)",
  "linear-gradient(135deg,#1f0a0a,#4a1a1a)",
  "linear-gradient(135deg,#001a1f,#003d4a)",
];

async function getVideos(category?: string, limit = 6) {
  let query = supabase
    .from("videos")
    .select("*")
    .eq("status", "ready")
    .eq("visibility", "public")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (category) {
    query = query.ilike("title", `%${category}%`);
  }

  const { data } = await query;
  return data || [];
}

export default async function ContentRail({
  title,
  label,
  category,
  limit = 6,
  browseHref = "/browse",
}: Props) {
  const videos = await getVideos(category, limit);

  if (videos.length === 0) return null;

  return (
    <section
      aria-labelledby={`rail-${title.replace(/\s+/g, "-").toLowerCase()}`}
      style={{
        padding: "48px 80px",
        background: "var(--black)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <style>{`
        .rail-scroll-${title.replace(/\s+/g, "-").toLowerCase()} {
          display: grid;
          grid-template-columns: repeat(${limit}, 1fr);
          gap: 16px;
        }
        @media (max-width: 1200px) {
          .rail-scroll-${title.replace(/\s+/g, "-").toLowerCase()} {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media (max-width: 900px) {
          .rail-scroll-${title.replace(/\s+/g, "-").toLowerCase()} {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 500px) {
          .rail-scroll-${title.replace(/\s+/g, "-").toLowerCase()} {
            grid-template-columns: 1fr;
          }
        }
        .rail-pad { padding: 48px 80px !important; }
        @media (max-width: 768px) {
          .rail-pad { padding: 40px 24px !important; }
        }
      `}</style>

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "24px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>
          {label && (
            <p style={{
              fontSize: "11px",
              color: "var(--gold)",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: 600,
              marginBottom: "4px",
            }}>
              {label}
            </p>
          )}
          <h2
            id={`rail-${title.replace(/\s+/g, "-").toLowerCase()}`}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              letterSpacing: "1px",
              lineHeight: 1,
              color: "var(--white)",
            }}
          >
            {title}
          </h2>
        </div>
        <a
          href={browseHref}
          style={{
            color: "var(--gold)",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          See all →
        </a>
      </div>

      {/* Cards */}
      <ul
        className={`rail-scroll-${title.replace(/\s+/g, "-").toLowerCase()}`}
        role="list"
        style={{ listStyle: "none" }}
      >
        {videos.map((video: Video, index: number) => {
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
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    aspectRatio: "16/9",
                    background: thumb
                      ? `url(${thumb}) center/cover no-repeat`
                      : gradients[index % gradients.length],
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                  }}
                >
                  {!thumb && "🎬"}
                  {duration && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "6px",
                        right: "6px",
                        background: "rgba(0,0,0,0.85)",
                        color: "#fff",
                        fontSize: "10px",
                        fontWeight: 600,
                        padding: "2px 6px",
                        borderRadius: "3px",
                      }}
                    >
                      {duration}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: "12px 14px 14px" }}>
                  <h3
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--white)",
                      lineHeight: 1.4,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical" as const,
                      overflow: "hidden",
                    }}
                  >
                    {video.title}
                  </h3>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
