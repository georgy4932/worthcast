export default function CTABanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      style={{
        padding: "120px 40px",
        background: "var(--black)",
        textAlign: "center",
        borderTop: "1px solid var(--border)",
      }}
    >
      <p
        style={{
          fontSize: "11px",
          color: "var(--gold)",
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontWeight: 600,
          marginBottom: "20px",
        }}
      >
        Join the Community
      </p>
      <h2
        id="cta-heading"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(40px, 6vw, 72px)",
          letterSpacing: "1px",
          lineHeight: 1,
          color: "var(--white)",
          marginBottom: "12px",
        }}
      >
        YOUR MINISTRY
        <br />
        <span style={{ color: "var(--gold)" }}>HAS A HOME.</span>
      </h2>

      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "var(--muted)",
          marginBottom: "16px",
          maxWidth: "560px",
          margin: "0 auto 16px",
          lineHeight: 1.6,
        }}
      >
        Churches, ministries, creators, and speakers are already sharing their message on WorthCast.
      </p>

      <p
        style={{
          fontSize: "15px",
          color: "var(--muted)",
          maxWidth: "500px",
          margin: "0 auto 48px",
          lineHeight: 1.75,
        }}
      >
        Upload sermons, worship sets, Bible teaching, testimonies, and Christian films. Start free — no credit card needed.
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/join"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--gold)",
            color: "var(--black)",
            padding: "16px 36px",
            borderRadius: "6px",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Start Creating Free →
        </a>
        <a
          href="/browse"
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "transparent",
            color: "var(--white)",
            border: "1px solid var(--border)",
            padding: "16px 36px",
            borderRadius: "6px",
            fontSize: "15px",
            fontWeight: 600,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Browse Content
        </a>
      </div>
    </section>
  );
}
