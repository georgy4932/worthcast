 const videos = [
  {
    id: "silence-spiritual-practice",
    title: "Why Silence Is the Most Powerful Spiritual Practice",
    category: "Faith",
    author: "Rev. Marcus Cole",
    views: "1.2M views",
    duration: "18:42",
    emoji: "🕊️",
    bg: "linear-gradient(135deg,#1a1a2e,#2d1b4e)",
    avatar: "R",
    avatarBg: "var(--gold)",
  },
  {
    id: "rivers-of-memory",
    title: "Rivers of Memory: Indigenous Communities and Their Sacred Waters",
    category: "Documentary",
    author: "EarthFilms",
    views: "890K views",
    duration: "44:10",
    emoji: "🌊",
    bg: "linear-gradient(135deg,#0d2137,#1a4a6e)",
    avatar: "E",
    avatarBg: "#4ECDC4",
  },
  {
    id: "50-classic-books",
    title: "Reading 50 Classic Books Changed How I Think About Everything",
    category: "Education",
    author: "Sophia Reads",
    views: "654K views",
    duration: "31:05",
    emoji: "📖",
    bg: "linear-gradient(135deg,#1e1200,#3d2800)",
    avatar: "S",
    avatarBg: "#FF6B6B",
  },
  {
    id: "ancient-art-of-fasting",
    title: "The Ancient Art of Fasting: What Modern Science Now Confirms",
    category: "Wellbeing",
    author: "Dr. Nadia Wells",
    views: "2.1M views",
    duration: "22:18",
    emoji: "🌿",
    bg: "linear-gradient(135deg,#0a1f0a,#1a3d1a)",
    avatar: "D",
    avatarBg: "#95E77E",
  },
];

export default function TrendingVideos() {
  return (
    <section
      aria-labelledby="trending-heading"
      style={{
        padding: "80px",
        background: "var(--black)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "40px",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            aria-hidden="true"
            style={{
              fontSize: "11px",
              color: "var(--gold)",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
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
        <a
          href="/browse?sort=trending"
          style={{
            color: "var(--gold)",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          See all trending →
        </a>
      </div>

      {/* Grid */}
      {/* [DATA: replace with real videos from API] */}
      <ul
        role="list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          listStyle: "none",
        }}
      >
        {videos.map((video) => (
          <li key={video.id}>
            <a
              href={`/watch/${video.id}`}
              aria-label={`${video.title}, ${video.duration}, ${video.views}`}
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
              <div
                style={{
                  aspectRatio: "16/9",
                  background: video.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  position: "relative",
                }}
              >
                {video.emoji}
                <span
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    background: "rgba(0,0,0,0.8)",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "2px 7px",
                    borderRadius: "3px",
                  }}
                >
                  {video.duration}
                </span>
              </div>

              {/* Info */}
              <div style={{ padding: "14px 16px 16px" }}>
                <p
                  style={{
                    fontSize: "10px",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    fontWeight: 600,
                    marginBottom: "5px",
                  }}
                >
                  {video.category}
                </p>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--white)",
                    lineHeight: 1.4,
                    marginBottom: "10px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: "hidden",
                  }}
                >
                  {video.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    color: "var(--muted)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: video.avatarBg,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "var(--black)",
                        flexShrink: 0,
                      }}
                    >
                      {video.avatar}
                    </span>
                    {video.author}
                  </span>
                  <span>{video.views}</span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
