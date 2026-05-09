export default function Hero() {
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
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
          .hero-left { padding: 40px 24px 60px !important; }
          .hero-stats { grid-template-columns: 1fr 1fr; gap: 20px; }
        }
        @media (max-width: 480px) {
          .hero-badge { white-space: normal; font-size: 10px; }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="hero-grid">

        {/* Left */}
        <div className="hero-left">

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
            Values-Aligned Streaming
          </div>

          <h1
            id="hero-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 7vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "2px",
              color: "var(--white)",
              marginBottom: "8px",
            }}
          >
            STREAM<br />WHAT<br />
            <span style={{ color: "var(--gold)" }}>MATTERS.</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(18px, 2.5vw, 22px)",
              color: "var(--muted)",
              marginBottom: "20px",
            }}
          >
            Content worth your time. Creators worth following.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "var(--muted)",
              maxWidth: "460px",
              lineHeight: 1.75,
              marginBottom: "36px",
            }}
          >
            WorthCast is the open streaming platform for creators and viewers
            who believe the content you watch shapes the person you become.
          </p>

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
              Explore WorthCast
            </a>
            <a
              href="/about#trailer"
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
              Watch Trailer
            </a>
          </div>

          {/* Stats */}
          {/* [DATA: replace with live counts once platform launches] */}
          <div
            className="hero-stats"
            aria-label="WorthCast platform highlights"
          >
            {[
              { num: "Open", label: "To Creators" },
              { num: "Free", label: "To Join" },
              { num: "Global", label: "Audience" },
              { num: "Fair", label: "Creator Pay" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 3vw, 36px)",
                    color: "var(--gold)",
                    letterSpacing: "1px",
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: "12px",
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

        {/* Right — decorative, hidden on mobile */}
        <div aria-hidden="true" className="hero-right">
          <div
            style={{
              width: "100%",
              background: "var(--card)",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "16/10",
                background:
                  "linear-gradient(135deg,#1a1a2e 0%,#16213e 40%,#0f3460 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: "rgba(201,168,76,0.9)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24"
                  fill="var(--black)" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
            <div style={{ padding: "20px 24px" }}>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "18px",
                  color: "var(--white)",
                  lineHeight: 1.3,
                }}
              >
                The Architecture of Virtue: How Ancient Wisdom Shapes Modern Life
              </p>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "8px" }}>
                24.8K watching · 1h 24m
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
