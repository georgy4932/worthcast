export default function Home() {
  return (
    <main>
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "24px",
        textAlign: "center",
        padding: "40px",
      }}>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(64px, 10vw, 120px)",
          lineHeight: 0.95,
          letterSpacing: "2px",
          color: "var(--white)",
        }}>
          WORTH<span style={{ color: "var(--gold)" }}>CAST</span>
        </h1>
        <p style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "22px",
          color: "var(--muted)",
        }}>
          Stream What Matters
        </p>
        <a
          href="/browse"
          style={{
            background: "var(--gold)",
            color: "var(--black)",
            padding: "14px 36px",
            borderRadius: "6px",
            fontWeight: 700,
            fontSize: "15px",
            textDecoration: "none",
            marginTop: "16px",
          }}
        >
          Explore WorthCast
        </a>
      </section>
    </main>
  );
}
