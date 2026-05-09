const categories = [
  { name: "Sermons", icon: "🎙️", href: "/categories/sermons" },
  { name: "Worship", icon: "🎵", href: "/categories/worship" },
  { name: "Bible Teaching", icon: "📖", href: "/categories/bible-teaching" },
  { name: "Christian Films", icon: "🎬", href: "/categories/films" },
  { name: "Testimonies", icon: "🕊️", href: "/categories/testimonies" },
  { name: "Devotionals", icon: "🙏", href: "/categories/devotionals" },
  { name: "Kids & Family", icon: "👨‍👩‍👧", href: "/categories/kids-family" },
  { name: "Conferences", icon: "🏛️", href: "/categories/conferences" },
  { name: "Apologetics", icon: "✝️", href: "/categories/apologetics" },
  { name: "Prayer", icon: "🕯️", href: "/categories/prayer" },
  { name: "Ministries", icon: "⛪", href: "/categories/ministries" },
  { name: "Live Church", icon: "📡", href: "/categories/live" },
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
          .categories-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 600px) {
          .categories-grid { grid-template-columns: repeat(3, 1fr); }
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
          Browse by Category
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
          What Are You Looking For?
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
                padding: "20px 16px",
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontSize: "24px",
                  display: "block",
                  marginBottom: "8px",
                  lineHeight: 1,
                }}
              >
                {cat.icon}
              </span>
              <span style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--white)",
                lineHeight: 1.3,
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
