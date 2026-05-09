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
    <section className="page-section" aria-labelledby="trending-heading">
      <div className="section-header">
        <div>
          <p className="section-label" aria-hidden="true">
            ↑ Rising Fast
          </p>
          <h2 id="trending-heading" className="section-title">
            Trending Videos
          </h2>
        </div>

        <a href="/browse?sort=trending" className="see-all">
          See all trending →
        </a>
      </div>

      <ul className="video-grid" role="list">
        {videos.map((video) => (
          <li key={video.id}>
            <a
              href={`/watch/${video.id}`}
              className="video-card"
              aria-label={`${video.title}, ${video.duration}, ${video.views}`}
            >
              <div className="video-thumb">
                <div
                  className="thumb-bg"
                  style={{ background: video.bg }}
                  aria-hidden="true"
                >
                  {video.emoji}
                </div>

                <span className="thumb-duration">{video.duration}</span>
              </div>

              <div className="video-info">
                <p className="video-cat">{video.category}</p>

                <h3 className="video-title">{video.title}</h3>

                <div className="video-meta">
                  <span className="video-author">
                    <span
                      className="avatar avatar--sm"
                      style={{ background: video.avatarBg }}
                      aria-hidden="true"
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
