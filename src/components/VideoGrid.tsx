import VideoCard from "./VideoCard";

const videos = [
  {
    href: "/watch/silence-spiritual-practice",
    title: "Why Silence Is the Most Powerful Spiritual Practice",
    category: "Faith",
    author: "Rev. Marcus Cole",
    views: "1.2M views",
    duration: "18:42",
    emoji: "🕊️",
    theme: "thumb-faith",
    avatar: "R",
    avatarClass: "avatar--gold",
  },
  {
    href: "/watch/rivers-of-memory",
    title: "Rivers of Memory: Indigenous Communities and Their Sacred Waters",
    category: "Documentary",
    author: "EarthFilms",
    views: "890K views",
    duration: "44:10",
    emoji: "🌊",
    theme: "thumb-documentary",
    avatar: "E",
    avatarClass: "avatar--teal",
  },
  {
    href: "/watch/50-classic-books",
    title: "Reading 50 Classic Books Changed How I Think About Everything",
    category: "Education",
    author: "Sophia Reads",
    views: "654K views",
    duration: "31:05",
    emoji: "📖",
    theme: "thumb-education",
    avatar: "S",
    avatarClass: "avatar--coral",
  },
  {
    href: "/watch/ancient-art-of-fasting",
    title: "The Ancient Art of Fasting: What Modern Science Now Confirms",
    category: "Wellbeing",
    author: "Dr. Nadia Wells",
    views: "2.1M views",
    duration: "22:18",
    emoji: "🌿",
    theme: "thumb-wellbeing",
    avatar: "D",
    avatarClass: "avatar--green",
  },
];

export default function VideoGrid() {
  return (
    <section className="page-section" aria-labelledby="trending-heading">
      <div className="section-header">
        <div>
          <p className="section-label">↑ Rising Fast</p>
          <h2 id="trending-heading" className="section-title">Trending Videos</h2>
        </div>
        <a href="/browse?sort=trending" className="see-all">See all trending →</a>
      </div>

      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.href} {...video} />
        ))}
      </div>
    </section>
  );
}
