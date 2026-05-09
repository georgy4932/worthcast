import { createClient } from "@supabase/supabase-js";
import VideoCard from "@/components/VideoCard";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function formatDuration(seconds: number | null) {
  if (!seconds) return "0:00";

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatViews(count: number) {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M views`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(0)}K views`;

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

  return (
    <section className="page-section" aria-labelledby="trending-heading">
      <div className="section-header">
        <div>
          <p className="section-label">↑ Rising Fast</p>
          <h2 id="trending-heading" className="section-title">
            Trending Videos
          </h2>
        </div>

        <a href="/browse" className="see-all">
          See all trending →
        </a>
      </div>

      {videos.length === 0 ? (
        <div className="browse-empty-card">
          <p style={{ color: "var(--muted)" }}>
            No videos yet.{" "}
            <a href="/upload" className="text-gold">
              Upload the first one →
            </a>
          </p>
        </div>
      ) : (
        <ul className="video-grid" role="list">
          {videos.map((video, index) => (
            <li key={video.id}>
              <VideoCard
                href={`/watch/${video.id}`}
                title={video.title}
                category="WorthCast"
                author="WorthCast Creator"
                views={formatViews(video.view_count || 0)}
                duration={formatDuration(video.duration)}
                emoji="🎬"
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
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
