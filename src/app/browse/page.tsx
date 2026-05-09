import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

type Video = {
  id: string;
  title: string;
  mux_playback_id: string | null;
  duration: number | null;
  view_count: number | null;
  created_at: string;
};

async function getVideos(): Promise<Video[]> {
  const { data, error } = await supabase
    .from("videos")
    .select("id,title,mux_playback_id,duration,view_count,created_at")
    .eq("status", "ready")
    .eq("visibility", "public")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching videos:", error);
    return [];
  }

  return data || [];
}

function formatDuration(seconds: number | null) {
  if (!seconds) return null;

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return `${m}:${s.toString().padStart(2, "0")}`;
}

const themes = [
  "thumb-faith",
  "thumb-documentary",
  "thumb-education",
  "thumb-wellbeing",
  "thumb-editor",
  "thumb-music",
  "thumb-leadership",
];

export default async function BrowsePage() {
  const videos = await getVideos();

  return (
    <>
      <Navbar />

      <main className="browse-page">
        <section className="browse-hero">
          <div className="container">
            <p className="section-label">All Content</p>

            <h1 className="browse-title">Browse Videos</h1>

            <p className="browse-copy">
              {videos.length > 0
                ? `${videos.length} video${videos.length === 1 ? "" : "s"} available`
                : "No videos yet — be the first to upload."}
            </p>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            {videos.length === 0 ? (
              <div className="browse-empty-card">
                <div className="browse-empty-icon">🎬</div>
                <h2>No Videos Yet</h2>
                <p>Be the first creator to upload content to WorthCast.</p>
                <a href="/upload" className="btn btn-gold">
                  Upload a Video
                </a>
              </div>
            ) : (
              <ul className="browse-grid" role="list">
                {videos.map((video, index) => {
                  const duration = formatDuration(video.duration);
                  const publishedAt = new Date(video.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  });

                  const thumb = video.mux_playback_id
                    ? `https://image.mux.com/${video.mux_playback_id}/thumbnail.jpg?time=0`
                    : null;

                  return (
                    <li key={video.id}>
                      <a
                        href={`/watch/${video.id}`}
                        className="video-card"
                        aria-label={`${video.title}${duration ? `, ${duration}` : ""}`}
                      >
                        <div className="video-thumb">
                          {thumb ? (
                            <div
                              className="thumb-bg"
                              style={{ background: `url(${thumb}) center/cover no-repeat` }}
                            />
                          ) : (
                            <div className={`thumb-bg ${themes[index % themes.length]}`}>
                              🎬
                            </div>
                          )}

                          {duration && <span className="thumb-duration">{duration}</span>}
                        </div>

                        <div className="video-info">
                          <h2 className="video-title">{video.title}</h2>

                          <div className="video-meta">
                            <span>{video.view_count?.toLocaleString() || 0} views</span>
                            <span>{publishedAt}</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
