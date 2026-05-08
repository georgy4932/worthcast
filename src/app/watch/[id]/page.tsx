import Navbar from "@/components/Navbar";
import MuxPlayer from "@/components/MuxPlayer";

// [DATA: replace with real video data from Supabase]
const mockVideo = {
  id: "silence-spiritual-practice",
  title: "Why Silence Is the Most Powerful Spiritual Practice",
  description:
    "In this profound exploration, Rev. Marcus Cole takes us through the ancient tradition of contemplative silence — from the Desert Fathers to modern neuroscience. Discover why the most transformative spiritual discipline may be the one that requires doing nothing at all.",
  category: "Faith",
  duration: "18:42",
  views: "1.2M",
  publishedAt: "March 2026",
  muxPlaybackId: "F004U1wgUs2Rihfo015IXb02UjBcGohLFWLpYJxWHAW7Yk" as string | null,
  creator: {
    name: "Rev. Marcus Cole",
    username: "revmarcuscole",
    avatar: "R",
    avatarBg: "#C9A84C",
    followers: "214K",
    bio: "Pastor, theologian, and contemplative teacher.",
  },
  tags: ["Faith", "Spirituality", "Contemplation", "Prayer"],
};

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

export default function WatchPage() {
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
            {mockVideo.muxPlaybackId ? (
              <MuxPlayer
                playbackId={mockVideo.muxPlaybackId}
                title={mockVideo.title}
              />
            ) : (
              // Placeholder — shows until real video is uploaded
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
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="var(--black)"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "14px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Upload a video to see it play here
                </p>
                <span
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    right: "16px",
                    background: "rgba(0,0,0,0.8)",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {mockVideo.duration}
                </span>
              </div>
            )}

            {/* Video Info */}
            <div style={{ padding: "32px 40px" }}>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                {mockVideo.category}
              </p>
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
                {mockVideo.title}
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
                <span>{mockVideo.views} views</span>
                <span>·</span>
                <span>{mockVideo.publishedAt}</span>
                <span>·</span>
                <span>{mockVideo.duration}</span>
              </div>

              {/* Creator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 0",
                  borderTop: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                  marginBottom: "28px",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <span
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: mockVideo.creator.avatarBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--black)",
                      flexShrink: 0,
                    }}
                  >
                    {mockVideo.creator.avatar}
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--white)",
                        marginBottom: "2px",
                      }}
                    >
                      {mockVideo.creator.name}
                    </p>
                    <p style={{ fontSize: "13px", color: "var(--muted)" }}>
                      {mockVideo.creator.followers} followers
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  style={{
                    background: "var(--gold)",
                    color: "var(--black)",
                    border: "none",
                    borderRadius: "100px",
                    padding: "9px 24px",
                    fontSize: "13px",
                    fontWeight: 700,
                    fontFamily: "var(--font-body)",
                    cursor: "pointer",
                  }}
                >
                  + Follow
                </button>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  marginBottom: "28px",
                }}
              >
                {mockVideo.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {mockVideo.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "100px",
                      padding: "5px 14px",
                      fontSize: "12px",
                      color: "var(--muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
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

            {/* [DATA: replace with real related videos from Supabase] */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {relatedVideos.map((video) => (
                <a
                  key={video.id}
                  href={`/watch/${video.id}`}
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
                      background: video.bg,
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      flexShrink: 0,
                      position: "relative",
                    }}
                  >
                    {video.emoji}
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
                      {video.duration}
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
                      {video.category}
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
                      {video.title}
                    </h3>
                    <p style={{ fontSize: "12px", color: "var(--muted)" }}>
                      {video.creator} · {video.views} views
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
