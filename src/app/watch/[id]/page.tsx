import Navbar from "@/components/Navbar";
import MuxPlayer from "@/components/MuxPlayer";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const relatedVideos = [
  {
    id: "rivers-of-memory",
    title: "Rivers of Memory: Indigenous Communities and Their Sacred Waters",
    category: "Documentary",
    duration: "44:10",
    views: "890K",
    emoji: "🌊",
    bg: "linear-gradient(135deg,#0d2137,#1a4a6e)",
    creator: "EarthFilms",
  },
  {
    id: "ancient-art-of-fasting",
    title: "The Ancient Art of Fasting: What Modern Science Now Confirms",
    category: "Wellbeing",
    duration: "22:18",
    views: "2.1M",
    emoji: "🌿",
    bg: "linear-gradient(135deg,#0a1f0a,#1a3d1a)",
    creator: "Dr. Nadia Wells",
  },
  {
    id: "servant-leadership",
    title: "Servant Leadership: The Most Radical Idea That Actually Works",
    category: "Leadership",
    duration: "38:55",
    views: "1.5M",
    emoji: "🧭",
    bg: "linear-gradient(135deg,#001a1f,#003d4a)",
    creator: "ThinkDeep",
  },
  {
    id: "50-classic-books",
    title: "Reading 50 Classic Books Changed How I Think About Everything",
    category: "Education",
    duration: "31:05",
    views: "654K",
    emoji: "📖",
    bg: "linear-gradient(135deg,#1e1200,#3d2800)",
    creator: "Sophia Reads",
  },
];

async function getVideo(id: string) {
  // Try Supabase first by UUID
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .eq("id", id)
    .single();

  if (!error && data) return data;

  // Try by mux_playback_id
  const { data: data2, error: error2 } = await supabase
    .from("videos")
    .select("*")
    .eq("mux_playback_id", id)
    .single();

  if (!error2 && data2) return data2;

  return null;
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

  // Fallback mock for slug-based URLs not in DB yet
  const mockFallback = {
    title: "WorthCast Video",
    description: null,
    mux_playback_id: null,
    view_count: 0,
    created_at: new Date().toISOString(),
    duration: null,
    category_id: null,
  };

  const v = video || mockFallback;
  const playbackId = v.mux_playback_id;
  const duration = formatDuration(v.duration);
  const publishedAt = new Date(v.created_at).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: "0",
            maxWidth: "1600px",
            margin: "0 auto",
          }}
        >
          {/* LEFT — Player + Info */}
          <div style={{ borderRight: "1px solid var(--border)" }}>

            {/* Video Player */}
            {playbackId ? (
              <MuxPlayer
                playbackId={playbackId}
                title={v.title}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  background:
                    "linear-gradient(135deg,#1a1a2e 0%,#16213e 40%,#0f3460 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "var(--gold)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--black)">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
                  Video not available yet
                </p>
              </div>
            )}

            {/* Video Info */}
            <div style={{ padding: "32px 40px" }}>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "28px",
                  lineHeight: 1.3,
                  color: "var(--white)",
                  marginBottom: "16px",
                  fontWeight: 700,
                }}
              >
                {v.title}
              </h1>

              {/* Meta */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  fontSize: "13px",
                  color: "var(--muted)",
                  marginBottom: "28px",
                  flexWrap: "wrap",
                }}
              >
                <span>{v.view_count?.toLocaleString() || 0} views</span>
                <span>·</span>
                <span>{publishedAt}</span>
                {duration && (
                  <>
                    <span>·</span>
                    <span>{duration}</span>
                  </>
                )}
              </div>

              {/* Description */}
              {v.description && (
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--muted)",
                    lineHeight: 1.75,
                    marginBottom: "28px",
                    paddingTop: "20px",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  {v.description}
                </p>
              )}
            </div>
          </div>

          {/* RIGHT — Related Videos */}
          <div style={{ padding: "24px 20px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                letterSpacing: "1px",
                color: "var(--white)",
                marginBottom: "20px",
              }}
            >
              Up Next
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {relatedVideos.map((rv) => (
                <a
                  key={rv.id}
                  href={`/watch/${rv.id}`}
                  style={{
                    display: "flex",
                    gap: "12px",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      width: "140px",
                      aspectRatio: "16/9",
                      background: rv.bg,
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      flexShrink: 0,
                      position: "relative",
                    }}
                  >
                    {rv.emoji}
                    <span
                      style={{
                        position: "absolute",
                        bottom: "4px",
                        right: "4px",
                        background: "rgba(0,0,0,0.8)",
                        color: "#fff",
                        fontSize: "10px",
                        fontWeight: 600,
                        padding: "1px 5px",
                        borderRadius: "3px",
                      }}
                    >
                      {rv.duration}
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "var(--gold)",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontWeight: 600,
                        marginBottom: "4px",
                      }}
                    >
                      {rv.category}
                    </p>
                    <h3
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "var(--white)",
                        lineHeight: 1.4,
                        marginBottom: "6px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical" as const,
                        overflow: "hidden",
                      }}
                    >
                      {rv.title}
                    </h3>
                    <p style={{ fontSize: "12px", color: "var(--muted)" }}>
                      {rv.creator} · {rv.views} views
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
