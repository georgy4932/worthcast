const items = [
  ["⚡", "Creator-First Revenue", "Earn from subscriptions, tips, and ad revenue. WorthCast is designed to put more money back into the hands of creators."],
  ["🛡️", "Values-Aligned by Design", "No algorithm designed to outrage. No content that degrades. WorthCast is built around content that builds people up."],
  ["🌐", "Open to All Creators", "Faith, film, education, culture, family — any creator with something worth saying has a home here."],
  ["🎬", "Cinema-Grade Player", "Adaptive streaming, 4K support, and an immersive viewing experience built for long-form content."],
  ["🤝", "Real Community", "Follow creators you trust. Build an audience that shares your values."],
  ["📱", "Watch Anywhere", "iOS, Android, Smart TV, desktop — WorthCast goes with you."],
];

export default function WhyWorthCast() {
  return (
    <section className="page-section section-bg-dark" aria-labelledby="why-heading">
      <div className="section-header">
        <div>
          <p className="section-label">Our Standard</p>
          <h2 id="why-heading" className="section-title">Why WorthCast</h2>
        </div>
      </div>

      <div className="why-grid">
        {items.map(([icon, title, desc]) => (
          <div className="why-card" key={title}>
            <div className="why-icon" aria-hidden="true">{icon}</div>
            <h3 className="why-title">{title}</h3>
            <p className="why-desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
