import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const dynamic = "force-dynamic";

type CategoryMeta = {
  name: string;
  icon: string;
  description: string;
  color: string;
  keywords: string[];
};

type Video = {
  id: string;
  title: string;
  mux_playback_id: string | null;
  duration: number | null;
  view_count: number | null;
  created_at: string;
};

const categoryMeta: Record<string, CategoryMeta> = {
  sermons: {
    name: "Sermons",
    icon: "🎙️",
    description:
      "Sunday messages, expository preaching, and gospel proclamation from churches and pastors worldwide.",
    color: "linear-gradient(135deg,#1a1a2e,#2d1b4e)",
    keywords: ["sermon", "preaching", "message", "gospel", "church"],
  },
  worship: {
    name: "Worship",
    icon: "🎵",
    description:
      "Live worship sessions, original music, hymns, and praise from worship collectives and artists.",
    color: "linear-gradient(135deg,#0d2137,#1a4a6e)",
    keywords: ["worship", "praise", "hymn", "music", "song"],
  },
  "bible-teaching": {
    name: "Bible Teaching",
    icon: "📖",
    description:
      "Verse-by-verse exposition, topical studies, and deep dives into Scripture.",
    color: "linear-gradient(135deg,#1e1200,#3d2800)",
    keywords: ["bible", "teaching", "scripture", "study", "exposition"],
  },
  films: {
    name: "Christian Films",
    icon: "🎬",
    description:
      "Full-length Christian films, short films, and documentaries from independent filmmakers.",
    color: "linear-gradient(135deg,#0a1f0a,#1a3d1a)",
    keywords: ["film", "movie", "documentary", "christian film", "finished"],
  },
  testimonies: {
    name: "Testimonies",
    icon: "🕊️",
    description:
      "Real stories of faith, transformation, healing, and redemption.",
    color: "linear-gradient(135deg,#1f0a0a,#4a1a1a)",
    keywords: ["testimony", "story", "healing", "redemption", "faith"],
  },
  devotionals: {
    name: "Devotionals",
    icon: "🙏",
    description:
      "Daily devotionals, morning reflections, and Scripture-based encouragement.",
    color: "linear-gradient(135deg,#001a1f,#003d4a)",
    keywords: ["devotional", "devotion", "morning", "daily", "reflection"],
  },
  "kids-family": {
    name: "Kids & Family",
    icon: "👨‍👩‍👧",
    description:
      "Bible stories, Christian cartoons, worship for kids, and family-safe entertainment.",
    color: "linear-gradient(135deg,#1a1200,#3d2d00)",
    keywords: ["kids", "children", "family", "bible story", "youth"],
  },
  conferences: {
    name: "Conferences",
    icon: "🏛️",
    description:
      "Full sessions from Christian conferences, summits, and events.",
    color: "linear-gradient(135deg,#0a001f,#1a0050)",
    keywords: ["conference", "summit", "event", "session", "speaker"],
  },
  apologetics: {
    name: "Apologetics",
    icon: "✝️",
    description: "Defending the faith with reason, evidence, and Scripture.",
    color: "linear-gradient(135deg,#001a0a,#004a1a)",
    keywords: ["apologetics", "debate", "evidence", "worldview", "defense"],
  },
  prayer: {
    name: "Prayer",
    icon: "🕯️",
    description: "Guided prayer sessions, intercession, and teaching on prayer.",
    color: "linear-gradient(135deg,#1a0a00,#4a2800)",
    keywords: ["prayer", "intercession", "worship", "devotion"],
  },
  ministries: {
    name: "Ministries",
    icon: "⛪",
    description: "Channels from established Christian ministries.",
    color: "linear-gradient(135deg,#00001a,#00004a)",
    keywords: ["ministry", "church", "mission", "outreach"],
  },
  live: {
    name: "Live Church",
    icon: "📡",
    description: "Live and replay Sunday services and church events.",
    color: "linear-gradient(135deg,#1a0000,#4a0000)",
    keywords: ["live", "church", "service", "sunday", "stream"],
  },
};

function formatDuration(seconds: number | null) {
  if (!seconds) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
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

async function getCategoryVideos(keywords: string[]): Promise<Video[]> {
  const orConditions = keywords.map((word) => `title.ilike.%${word}%`).join(",");

  const { data } = await supabase
    .from("videos")
    .select("*")
    .eq("status", "ready")
    .eq("visibility", "public")
    .or(orConditions)
    .order("created_at", { ascending: false })
    .limit(24);

  return data || [];
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = categoryMeta[slug];

  if (!meta) {
    notFound();
  }

  const videos = await getCategoryVideos(meta.keywords);

  return (
    <>
      <Navbar />

      <main className="category-detail-page">
        <section className="category-detail-hero" style={{ background: meta.color }}>
          <div className="container category-detail-hero-inner">
            <span className="category-detail-icon">{meta.icon}</span>

            <div>
              <p className="section-label">Category</p>
              <h1 className="category-detail-title">{meta.name}</h1>
            </div>
          </div>
        </section>

        <section className="category-detail-intro">
          <div className="container">
            <div className="category-breadcrumb">
              <a href="/categories">Categories</a>
              <span>→</span>
              <span>{meta.name}</span>
            </div>

            <p className="category-detail-copy">{meta.description}</p>
          </div>
        </section>

        <section className="category-detail-content">
          <div className="container">
            <div className="category-detail-toolbar">
              <p>
                {videos.length} video{videos.length === 1 ? "" : "s"}
              </p>

              <a href="/browse">Browse all content →</a>
            </div>

            {videos.length === 0 ? (
              <div className="browse-empty-card">
                <div className="browse-empty-icon">{meta.icon}</div>

                <h2>No {meta.name} Yet</h2>

                <p>
                  Be the first to upload {meta.name.toLowerCase()} content to
                  WorthCast.
                </p>

                <div className="browse-empty-actions">
                  <a href="/upload" className="btn btn-primary">
                    Upload Content
                  </a>
                </div>
              </div>
            ) : (
              <ul className="video-grid" role="list">
                {videos.map((video, index) => {
                  const thumbnailUrl = video.mux_playback_id
                    ? `https://image.mux.com/${video.mux_playback_id}/thumbnail.jpg?time=0`
                    : null;

                  return (
                    <li key={video.id}>
                      <VideoCard
                        href={`/watch/${video.id}`}
                        title={video.title}
                        category={meta.name}
                        author="WorthCast Creator"
                        views={formatViews(video.view_count)}
                        duration={formatDuration(video.duration)}
                        emoji={meta.icon}
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
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>

        <section className="category-other-section">
          <div className="container">
            <p>Browse other categories:</p>

            <div className="category-other-list">
              {Object.entries(categoryMeta)
                .filter(([categorySlug]) => categorySlug !== slug)
                .slice(0, 8)
                .map(([categorySlug, category]) => (
                  <a key={categorySlug} href={`/categories/${categorySlug}`}>
                    <span>{category.icon}</span>
                    {category.name}
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
} 
