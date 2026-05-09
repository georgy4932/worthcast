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
      style={{
        minHeight: "100vh",
        paddingTop: "68px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "var(--black)",
      }}
    >
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          flex: 1;
          position: relative;
          z-index: 2;
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px 80px 80px;
        }
        .hero-right {
          display: flex;
          align-items: center;
          padding: 80px 80px 80px 40px;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 56px;
          padding-top: 40px;
          border-top: 1px solid var(--border);
        }
        .hero-cta {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(201,168,76,0.14);
          border: 1px solid rgba(201,168,76,0.28);
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 500;
          color: var(--gold);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 32px;
          width: fit-content;
          white-space: nowrap;
        }
        .hero-feature-card {
          width: 100%;
          background: var(--card);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
          text-decoration: none;
          color: inherit;
          display: block;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 60px 100px rgba(0,0,0,0.7);
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
          .hero-left { padding: 40px 24px 60px !important; }
          .hero-stats { grid-template-columns: 1fr 1fr; gap: 20px; }
        }
      `}</style>

      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="hero-grid">

        {/* Left */}
        <div className="hero-left">

          {/* Badge */}
          <div className="hero-badge">
            <span
              aria-hidden="true"
              style={{
                width: "6px",
                height: "6px",
                background: "var(--gold)",
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />
            Christian Streaming Platform
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 7vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "2px",
              color: "var(--white)",
              marginBottom: "20px",
            }}
          >
            FAITH.<br />FILM.<br />
            <span style={{ color: "var(--gold)" }}>TRUTH.</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(18px, 2.5vw, 22px)",
              color: "var(--muted)",
              marginBottom: "20px",
              lineHeight: 1.5,
            }}
          >
            Faith-filled streaming for viewers, families, churches, and ministries.
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "16px",
              color: "var(--muted)",
              maxWidth: "460px",
              lineHeight: 1.8,
              marginBottom: "36px",
            }}
          >
            Sermons, worship, Bible teaching, Christian films, testimonies, and devotionals — curated to the standard your faith deserves.
          </p>

          {/* CTAs */}
          <div className="hero-cta">
            <a
              href="/browse"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--gold)",
                color: "var(--black)",
                padding: "14px 28px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Start Watching
            </a>
            <a
              href="/join"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--white)",
                fontSize: "15px",
                textDecoration: "none",
                padding: "14px 0",
                whiteSpace: "nowrap",
              }}
            >
              Join Free →
            </a>
          </div>

          {/* Trust stats */}
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
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(24px, 3vw, 32px)",
                    color: "var(--gold)",
                    letterSpacing: "1px",
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — featured video */}
        <div aria-hidden="true" className="hero-right">
          <a
            href={video ? `/watch/${video.id}` : "/browse"}
            className="hero-feature-card"
          >
            {/* Thumbnail */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16/10",
                background: thumb
                  ? `url(${thumb}) center/cover no-repeat`
                  : "linear-gradient(135deg,#1a1a2e 0%,#16213e 40%,#0f3460 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
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
              {/* Play button */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: "rgba(201,168,76,0.92)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 2,
                  boxShadow: "0 8px 32px rgba(201,168,76,0.4)",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24"
                  fill="var(--black)" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>

              {/* Live/Now streaming badge */}
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

            {/* Card info */}
            <div style={{ padding: "20px 24px 24px" }}>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "20px",
                  color: "var(--white)",
                  lineHeight: 1.3,
                  marginBottom: "10px",
                  fontWeight: 700,
                }}
              >
                {video ? video.title : "Christian content for every season of faith."}
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
                    WebkitBoxOrient: "vertical" as const,
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
