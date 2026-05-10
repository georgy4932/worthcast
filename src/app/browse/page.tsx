import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Video = {
  id: string;
  title: string;
  mux_playback_id: string | null;
  duration: number | null;
  view_count: number | null;
  created_at: string;
};

type SortOption = "newest" | "trending" | "most_viewed";
type CategoryOption =
  | "all"
  | "sermons"
  | "worship"
  | "bible-teaching"
  | "films"
  | "testimonies"
  | "devotionals"
  | "kids-family"
  | "live";

const categories: { slug: CategoryOption; label: string }[] = [
  { slug: "all", label: "All" },
  { slug: "sermons", label: "Sermons" },
  { slug: "worship", label: "Worship" },
  { slug: "bible-teaching", label: "Bible Teaching" },
  { slug: "films", label: "Christian Films" },
  { slug: "testimonies", label: "Testimonies" },
  { slug: "devotionals", label: "Devotionals" },
  { slug: "kids-family", label: "Kids & Family" },
  { slug: "live", label: "Live Church" },
];

const sortOptions: { slug: SortOption; label: string }[] = [
  { slug: "newest", label: "Newest" },
  { slug: "trending", label: "Trending" },
  { slug: "most_viewed", label: "Most Viewed" },
];

const themes = [
  "thumb-faith",
  "thumb-documentary",
  "thumb-education",
  "thumb-wellbeing",
];

function isSortOption(value?: string): value is SortOption {
  return value === "newest" || value === "trending" || value === "most_viewed";
}

function isCategoryOption(value?: string): value is CategoryOption {
  return categories.some((category) => category.slug === value);
}

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

function getCategorySearchTerm(category: CategoryOption) {
  return category.replace("-", " ");
}

async function getVideos(sort: SortOption, category: CategoryOption) {
  let query = supabase
    .from("videos")
    .select("*")
    .eq("status", "ready")
    .eq("visibility", "public");

  if (category !== "all") {
    query = query.ilike("title", `%${getCategorySearchTerm(category)}%`);
  }

  if (sort === "newest") {
    query = query.order("created_at", { ascending: false });
  } else {
    query = query.order("view_count", { ascending: false });
  }

  const { data, error } = await query.limit(48);

  if (error) {
    console.error("Browse fetch error:", error);
    return [];
  }

  return data || [];
}

export default async function BrowsePage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string; category?: string }>;
}) {
  const params = await searchParams;

  const sort: SortOption = isSortOption(params.sort) ? params.sort : "newest";
  const category: CategoryOption = isCategoryOption(params.category)
    ? params.category
    : "all";

  const videos = await getVideos(sort, category);
  const activeCategoryLabel =
    categories.find((item) => item.slug === category)?.label || "All";

  return (
    <>
      <Navbar />

      <main className="browse-page">
        <section className="browse-hero">
          <div className="container">
            <p className="section-label">Christian Streaming</p>

            <h1 className="browse-title">Browse WorthCast</h1>

            <p className="browse-copy">
              Sermons, worship, Bible teaching, Christian films, testimonies,
              and devotionals — all in one place.
            </p>

            <div className="browse-filters" aria-label="Browse categories">
              {categories.map((item) => (
                <a
                  key={item.slug}
                  href={`/browse?sort=${sort}&category=${item.slug}`}
                  className={`browse-filter ${
                    category === item.slug ? "is-active" : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="browse-toolbar">
              <p className="browse-count">
                {videos.length} video{videos.length === 1 ? "" : "s"}
                {category !== "all" ? ` in ${activeCategoryLabel}` : ""}
              </p>

              <div className="browse-sort" aria-label="Sort videos">
                {sortOptions.map((item) => (
                  <a
                    key={item.slug}
                    href={`/browse?sort=${item.slug}&category=${category}`}
                    className={`browse-sort-link ${
                      sort === item.slug ? "is-active" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          {videos.length === 0 ? (
            <div className="browse-empty-card">
              <div className="browse-empty-icon">🎬</div>

              <h2>No Videos Yet</h2>

              <p>
                {category !== "all"
                  ? "No videos in this category yet. Try another category or browse all."
                  : "Be the first to upload Christian content to WorthCast."}
              </p>

              <div className="browse-empty-actions">
                {category !== "all" && (
                  <a href="/browse" className="btn btn-ghost">
                    Browse All
                  </a>
                )}

                <a href="/upload" className="btn btn-primary">
                  Upload a Video
                </a>
              </div>
            </div>
          ) : (
            <ul className="browse-grid" role="list">
              {videos.map((video: Video, index: number) => {
                const thumbnailUrl = video.mux_playback_id
                  ? `https://image.mux.com/${video.mux_playback_id}/thumbnail.jpg?time=0`
                  : null;

                return (
                  <li key={video.id}>
                    <VideoCard
                      href={`/watch/${video.id}`}
                      title={video.title}
                      category="WorthCast"
                      author="WorthCast Creator"
                      views={formatViews(video.view_count)}
                      duration={formatDuration(video.duration)}
                      emoji="🎬"
                      theme={themes[index % themes.length]}
                      avatar="W"
                      avatarClass="avatar--gold"
                      thumbnailUrl={thumbnailUrl}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
