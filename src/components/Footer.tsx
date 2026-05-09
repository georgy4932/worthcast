const footerSections = [
  {
    title: "Watch",
    links: [
      ["Browse All", "/browse"],
      ["Sermons", "/categories/sermons"],
      ["Worship", "/categories/worship"],
      ["Christian Films", "/categories/films"],
      ["Kids & Family", "/categories/kids-family"],
      ["Live Church", "/categories/live"],
      ["Devotionals", "/categories/devotionals"],
    ],
  },
  {
    title: "Creators",
    links: [
      ["Upload Video", "/upload"],
      ["Creator Studio", "/studio"],
      ["Ministry Accounts", "/ministries"],
      ["Church Streaming", "/churches"],
      ["Monetization", "/monetization"],
      ["Content Standards", "/standards"],
      ["Verification", "/verify"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About WorthCast", "/about"],
      ["Our Standards", "/standards"],
      ["Trust & Safety", "/trust"],
      ["Press", "/press"],
      ["Contact", "/contact"],
      ["Privacy Policy", "/privacy"],
      ["Terms of Service", "/terms"],
    ],
  },
];

const bottomLinks = [
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Standards", "/standards"],
];

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="/" className="logo" aria-label="WorthCast home">
            <span className="logo-icon" aria-hidden="true" />
            <span className="logo-text">
              Worth<span>Cast</span>
            </span>
          </a>

          <p>
            Christian streaming for viewers, families, churches, and ministries.
            Faith-filled content curated to the standard your faith deserves.
          </p>

          <p className="footer-verse">
            “Whatever is true, whatever is noble, whatever is right… think about
            such things.” — Philippians 4:8
          </p>
        </div>

        {footerSections.map((section) => (
          <nav key={section.title} className="footer-col" aria-label={section.title}>
            <h4>{section.title}</h4>

            <ul>
              {section.links.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="footer-bottom">
        <p>© 2026 WorthCast. All rights reserved. Christian streaming, curated with care.</p>

        <nav className="footer-legal" aria-label="Legal links">
          {bottomLinks.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
