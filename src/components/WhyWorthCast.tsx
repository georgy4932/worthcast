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
    <section className="page-section section-bg-dark" aria-labelledby="why-heading">
      <div className="section-header">
        <div>
          <p className="section-label">Our Standard</p>
          <h2 id="why-heading" className="section-title">
            Why WorthCast
          </h2>
        </div>
      </div>

      <ul className="why-grid" role="list">
        {features.map((feature) => (
          <li key={feature.title} className="why-card">
            <div className="why-icon" aria-hidden="true">
              {feature.icon}
            </div>

            <h3 className="why-title">{feature.title}</h3>

            <p className="why-desc">{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
