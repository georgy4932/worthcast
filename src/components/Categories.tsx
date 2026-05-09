const categories = [
  { name: "Faith", icon: "✝️", href: "/categories/faith" },
  { name: "Film", icon: "🎬", href: "/categories/film" },
  { name: "Education", icon: "📚", href: "/categories/education" },
  { name: "Family", icon: "👨‍👩‍👧", href: "/categories/family" },
  { name: "Culture", icon: "🌍", href: "/categories/culture" },
  { name: "Wellbeing", icon: "🩺", href: "/categories/wellbeing" },
];

export default function Categories() {
  return (
    <section
      aria-labelledby="categories-heading"
      style={{
        padding: "80px",
        background: "var(--dark)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <style>{`
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }
        @media (max-width: 1000px) {
          .categories-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 600px) {
          .categories-grid { grid-template-columns: repeat(2, 1fr); }
          .categories-section { padding: 60px 24px !important; }
        }
      `}</style>

      <div style={{ marginBottom: "40px" }}>
        <p style={{
          fontSize: "11px",
          color: "var(--gold)",
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontWeight: 600,
          marginBottom: "8px",
        }}>
          Explore
        </p>
        <h2
          id="categories-heading"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "42px",
            letterSpacing: "1px",
            lineHeight: 1,
            color: "var(--white)",
          }}
        >
          Browse by Category
        </h2>
      </div>

      <ul className="categories-grid" role="list" style={{ listStyle: "none" }}>
        {categories.map((cat) => (
          <li key={cat.href}>
            <a
              href={cat.href}
              style={{
                display: "block",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "24px 20px",
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontSize: "28px",
                  display: "block",
                  marginBottom: "10px",
                  lineHeight: 1,
                }}
              >
                {cat.icon}
              </span>
              <span style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--white)",
              }}>
                {cat.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
