 const categories = [
  { name: "Faith", icon: "✝️", count: "4,210 videos", href: "/categories/faith" },
  { name: "Film", icon: "🎬", count: "1,830 videos", href: "/categories/film" },
  { name: "Education", icon: "📚", count: "3,540 videos", href: "/categories/education" },
  { name: "Family", icon: "👨‍👩‍👧", count: "2,100 videos", href: "/categories/family" },
  { name: "Culture", icon: "🌍", count: "1,290 videos", href: "/categories/culture" },
  { name: "Wellbeing", icon: "🩺", count: "980 videos", href: "/categories/wellbeing" },
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
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "40px",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <p
            aria-hidden="true"
            style={{
              fontSize: "11px",
              color: "var(--gold)",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
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
      </div>

      {/* [DATA: categories and counts from CMS] */}
      <ul
        role="list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gap: "16px",
          listStyle: "none",
        }}
      >
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
              <span
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--white)",
                  marginBottom: "4px",
                }}
              >
                {cat.name}
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "11px",
                  color: "var(--muted)",
                }}
              >
                {cat.count}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
