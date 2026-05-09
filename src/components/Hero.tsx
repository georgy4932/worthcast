import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function getLatestVideo() {
  const { data } = await supabase
    .from("videos")
    .select("*")
    .eq("status", "ready")
    .eq("visibility", "public")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  return data || null;
}

export default async function Hero() {
  const video = await getLatestVideo();

  const thumb = video?.mux_playback_id
    ? `https://image.mux.com/${video.mux_playback_id}/thumbnail.jpg?time=0`
    : null;

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="hero-bg"
      />

      <div className="hero-grid">

        {/* Left */}
        <div className="hero-left">

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Christian Streaming Platform
          </div>

          <h1
            id="hero-heading"
            className="hero-title"
          >
            FAITH.<br />
            FILM.<br />
            <span className="text-gold">TRUTH.</span>
          </h1>

          <p className="hero-subtitle">
            Faith-filled streaming for viewers, families,
            churches, and ministries.
          </p>

          <p className="hero-desc">
            Sermons, worship, Bible teaching, Christian films,
            testimonies, and devotionals — curated to the
            standard your faith deserves.
          </p>

          <div className="hero-cta">
            <a href="/browse" className="btn btn-primary">
              Start Watching
            </a>

            <a href="/join" className="btn-play">
              <span className="play-circle">
                →
              </span>
              Join Free
            </a>
          </div>

          <div
            className="hero-stats"
            aria-label="WorthCast platform highlights"
          >
            {[
              { num: "Christian", label: "Content Only" },
              { num: "Free", label: "To Join" },
              { num: "Family", label: "Safe & Trusted" },
              { num: "Global", label: "Ministry Reach" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="stat-num">
                  {stat.num}
                </div>

                <div className="stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div
          aria-hidden="true"
          className="hero-right"
        >
          <a
            href={video ? `/watch/${video.id}` : "/browse"}
            className="featured-card hero-feature-card"
          >
            <div
              className="featured-thumb"
              style={{
                background: thumb
                  ? `url(${thumb}) center/cover no-repeat`
                  : undefined,
              }}
            >
              {!thumb && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 40px,
                      rgba(201,168,76,0.03) 40px,
                      rgba(201,168,76,0.03) 41px
                    )`,
                  }}
                />
              )}

              <button className="play-btn-large">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="var(--black)"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>

              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "rgba(0,0,0,0.75)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: "100px",
                  padding: "4px 12px",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "var(--gold)",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                ✦ Now Streaming
              </div>
            </div>

            <div className="featured-info">
              <p className="featured-title">
                {video
                  ? video.title
                  : "Christian content for every season of faith."}
              </p>

              {video?.description && (
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--muted)",
                    lineHeight: 1.5,
                    marginBottom: "12px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {video.description}
                </p>
              )}

              <span
                style={{
                  fontSize: "13px",
                  color: "var(--gold)",
                  fontWeight: 600,
                }}
              >
                {video ? "Watch now →" : "Browse all content →"}
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
