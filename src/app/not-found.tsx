export default function NotFound() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "16px",
      textAlign: "center",
      padding: "40px",
    }}>
      <h1 style={{
        fontFamily: "var(--font-display)",
        fontSize: "120px",
        lineHeight: 1,
        color: "var(--gold)",
        letterSpacing: "2px",
      }}>
        404
      </h1>
      <p style={{
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: "22px",
        color: "var(--muted)",
      }}>
        This page doesn't exist.
      </p>
      <a
        href="/"
        style={{
          color: "var(--gold)",
          fontSize: "15px",
          textDecoration: "none",
          marginTop: "8px",
          fontWeight: 500,
        }}
      >
        ← Back to WorthCast
      </a>
    </main>
  );
}
