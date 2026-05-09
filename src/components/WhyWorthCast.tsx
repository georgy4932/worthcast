const features = [
  {
    icon: "✝️",
    title: "Christian Standards First",
    description:
      "Every piece of content on WorthCast is reviewed against Christian values. No compromises, no uncomfortable surprises — just content your family can trust.",
  },
  {
    icon: "⛪",
    title: "Built for Churches & Ministries",
    description:
      "Upload sermons, worship sets, and teaching series. WorthCast gives churches and ministries a professional streaming home without the tech overhead.",
  },
  {
    icon: "🎬",
    title: "Christian Films & Documentaries",
    description:
      "From independent Christian filmmakers to full-length features — discover stories that inspire, challenge, and reflect your faith.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family-Safe by Design",
    description:
      "WorthCast is built so families can browse freely. Every category, every creator, and every video is held to a family-safe standard.",
  },
  {
    icon: "📡",
    title: "Live Streaming for the Church",
    description:
      "Stream Sunday services, conferences, prayer nights, and live worship events to your congregation and beyond — anywhere in the world.",
  },
  {
    icon: "🌍",
    title: "Global Ministry Reach",
    description:
      "Reach believers across the globe. WorthCast connects Christian creators and ministries with audiences who are actively seeking faith content.",
  },
];

export default function WhyWorthCast() {
  return (
    <section
      aria-labelledby="why-heading"
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .why-card {
          padding: 48px 40px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .why-card:nth-child(3n) {
          border-right: none;
        }
        .why-card:nth-child(4),
        .why-card:nth-child(5),
        .why-card:nth-child(6) {
          border-bottom: none;
        }
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .why-card:nth-child(2n) { border-right: none; }
          .why-card:nth-child(3n) { border-right: 1px solid var(--border); }
          .why-card:nth-child(5),
          .why-card:nth-child(6) { border-bottom: none; }
          .why-card:nth-child(4) { border-bottom: 1px solid var(--border); }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr; }
          .why-card { border-right: none !important; }
          .why-card:last-child { border-bottom: none; }
          .why-card:nth-child(4) { border-bottom: 1px solid var(--border) !important; }
          .why-card:nth-child(5) { border-bottom: 1px solid var(--border) !important; }
        }
      `}</style>

      {/* Header */}
      <div
        style={{
          padding: "80px 80px 60px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <p style={{
          fontSize: "11px",
          color: "var(--gold)",
          textTransform: "uppercase",
          letterSpacing: "2px",
          fontWeight: 600,
          marginBottom: "12px",
        }}>
          Our Standard
        </p>
        <h2
          id="why-heading"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 56px)",
            letterSpacing: "1px",
            lineHeight: 1,
            color: "var(--white)",
            maxWidth: "600px",
          }}
        >
          WHY WORTHCAST
        </h2>
      </div>

      {/* Grid */}
      <div className="why-grid">
        {features.map((f) => (
          <div key={f.title} className="why-card">
            <span
              aria-hidden="true"
              style={{
                fontSize: "32px",
                display: "block",
                marginBottom: "20px",
              }}
            >
              {f.icon}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                letterSpacing: "0.5px",
                color: "var(--white)",
                marginBottom: "12px",
                lineHeight: 1.2,
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "var(--muted)",
                lineHeight: 1.75,
              }}
            >
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
