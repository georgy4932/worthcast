import { supabase } from "@/lib/supabase";

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

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

const gradients = [
  "linear-gradient(135deg,#1a1a2e,#2d1b4e)",
  "linear-gradient(135deg,#0d2137,#1a4a6e)",
  "linear-gradient(135deg,#1e1200,#3d2800)",
  "linear-gradient(135deg,#0a1f0a,#1a3d1a)",
  "linear-gradient(135deg,#1f0a0a,#4a1a1a)",
  "linear-gradient(135deg,#001a1f,#003d4a)",
];

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

async function getVideos(category?: string, limit = 6) {
  let query = supabase
    .from("videos")
    .select("id,title,mux_playback_id,duration,view_count,created_at")
    .eq("status", "ready")
    .eq("visibility", "public")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (category) {
    query = query.ilike("title", `%${category}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error("ContentRail fetch error:", error);
    return [];
  }

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

  const headingId = `rail-${slugify(title)}`;

  return (
    <section className="content-rail" aria-labelledby={headingId}>
      <div className="section-header content-rail-header">
        <div>
          {label && <p className="section-label">{label}</p>}

          <h2 id={headingId} className="content-rail-title">
            {title}
          </h2>
        </div>

        <a href={browseHref} className="see-all">
          See all →
        </a>
      </div>

      <ul className="content-rail-grid" role="list">
        {videos.map((video: Video, index: number) => {
          const duration = formatDuration(video.duration);

          const thumbnail = video.mux_playback_id
            ? `https://image.mux.com/${video.mux_playback_id}/thumbnail.jpg?time=0`
            : null;

          return (
            <li key={video.id}>
              <a href={`/watch/${video.id}`} className="video-card">
                <div
                  className="video-thumb"
                  style={{
                    background: thumbnail
                      ? `url(${thumbnail}) center/cover no-repeat`
                      : gradients[index % gradients.length],
                  }}
                >
                  {!thumbnail && <span aria-hidden="true">🎬</span>}

                  {duration && (
                    <span className="thumb-duration">{duration}</span>
                  )}
                </div>

                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
