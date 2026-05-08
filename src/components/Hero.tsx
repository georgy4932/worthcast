 export default function Hero() {
  return (
    <section
      className="hero"
      aria-labelledby="hero-heading"
      style={{
        minHeight: "100vh",
        paddingTop: "68px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(224,60,47,0.04) 0%, transparent 60%),
            var(--black)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Grid */}
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
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--gold-dim)",
              border: "1px solid var(--gold-border)",
              padding: "6px 14px",
              borderRadius: "100px",
              fontSize: "12px",
              fontWeight: 500,
              color: "var(--gold)",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "32px",
              width: "fit-content",
            }}
          >
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

          {/* Heading */}
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
            STREAM<br />WHAT<br />
            <span style={{ color: "var(--gold)" }}>MATTERS.</span>
          </h1>

          {/* Subtitle */}
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

          {/* Description */}
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

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              flexWrap: "wrap",
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
                border: "none",
                padding: "14px 36px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 700,
                fontFamily: "var(--font-body)",
                textDecoration: "none",
                letterSpacing: "0.3px",
              }}
            >
              Explore WorthCast
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/about#trailer"
              aria-label="Watch the WorthCast trailer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "none",
                border: "none",
                color: "var(--white)",
                fontSize: "15px",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
                padding: "14px 0",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "42px",
                  height: "42px",
                  border: "1.5px solid currentColor",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24"
                  fill="currentColor" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </span>
              Watch Trailer
            </a>
          </div>

          {/* Stats */}
          {/* [DATA: replace with live counts once platform launches] */}
          <div
            aria-label="WorthCast platform highlights"
            style={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
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

        {/* Right — decorative featured card */}
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
            {/* Thumb */}
            <div
              style={{
                width: "100%",
                aspectRatio: "16/10",
                background: "linear-gradient(135deg,#1a1a2e 0%,#16213e 40%,#0f3460 100%)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
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
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `
                    linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 50%),
                    linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%)
                  `,
                }}
              />
              {/* Live badge */}
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  background: "var(--red)",
                  color: "#fff",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1.2px",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  textTransform: "uppercase",
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    background: "#fff",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                Live Now
              </span>
              {/* Decorative play */}
              <div
                role="presentation"
                style={{
                  width: "72px",
                  height: "72px",
                  background: "rgba(201,168,76,0.9)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24"
                  fill="var(--black)" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: "20px 24px" }}>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                ✦ Documentary
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "20px",
                  color: "var(--white)",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                The Architecture of Virtue: How Ancient Wisdom Shapes Modern Life
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  fontSize: "13px",
                  color: "var(--muted)",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  24.8K watching
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <svg width="13" height="13" viewBox="0​​​​​​​​​​​​​​​​
