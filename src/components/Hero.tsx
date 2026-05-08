export default function Hero() {
  return (
    <main
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          flex: 1,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 60px 80px 80px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(201,168,76,0.14)",
              border: "1px solid rgba(201,168,76,0.28)",
              padding: "6px 14px",
              borderRadius: "100px",
              fontSize: "12px",
              fontWeight: 500,
              color: "var(--gold)",
              letterSpacing: "1px",
              textTransform: "uppercase" as const,
              marginBottom: "32px",
              width: "fit-content",
            }}
          >
            Values-Aligned Streaming
          </div>

          <h1
            id="hero-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(64px, 7vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "2px",
              color: "var(--white)",
              marginBottom: "8px",
            }}
          >
            STREAM
            <br />
            WHAT
            <br />
            <span style={{ color: "var(--gold)" }}>MATTERS.</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "22px",
              color: "var(--muted)",
              marginBottom: "28px",
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
              marginBottom: "44px",
            }}
          >
            WorthCast is the open streaming platform for creators and viewers
            who believe the content you watch shapes the person you become.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              flexWrap: "wrap" as const,
            }}
          >
            <a
              href="/browse"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--gold)",
                color: "var(--black)",
                padding: "14px 36px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
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
              }}
            >
              Watch Trailer
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap" as const,
              marginTop: "56px",
              paddingTop: "40px",
              borderTop: "1px solid var(--border)",
            }}
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
                    fontSize: "36px",
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
                    textTransform: "uppercase" as const,
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

        {/* Right — decorative */}
        <div
          aria-hidden="true"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "80px 80px 80px 40px",
          }}
        >
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="var(--black)"
                  aria-hidden="true"
                >
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
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--muted)",
                  marginTop: "8px",
                }}
              >
                24.8K watching · 1h 24m
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
