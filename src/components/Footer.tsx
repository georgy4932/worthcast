export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--dark)",
        borderTop: "1px solid var(--border)",
        padding: "64px 80px 40px",
      }}
    >
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 64px;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr; }
          footer { padding: 48px 24px 32px !important; }
        }
      `}</style>

      <div className="footer-grid">

        {/* Brand */}
        <div>
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                width: "32px",
                height: "32px",
                background: "var(--gold)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--black)">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                letterSpacing: "2px",
                color: "var(--white)",
              }}
            >
              Worth<span style={{ color: "var(--gold)" }}>Cast</span>
            </span>
          </a>
          <p
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              lineHeight: 1.75,
              maxWidth: "300px",
              marginBottom: "24px",
            }}
          >
            Christian streaming for viewers, families, churches, and ministries. Faith-filled content curated to the standard your faith deserves.
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "var(--muted)",
              fontStyle: "italic",
            }}
          >
            "Whatever is true, whatever is noble, whatever is right… think about such things." — Philippians 4:8
          </p>
        </div>

        {/* Watch */}
        <div>
          <p style={{
            fontSize: "11px",
            color: "var(--gold)",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: 600,
            marginBottom: "20px",
          }}>
            Watch
          </p>
          <ul style={{ listStyle: "none" }}>
            {[
              { label: "Browse All", href: "/browse" },
              { label: "Sermons", href: "/categories/sermons" },
              { label: "Worship", href: "/categories/worship" },
              { label: "Christian Films", href: "/categories/films" },
              { label: "Kids & Family", href: "/categories/kids-family" },
              { label: "Live Church", href: "/categories/live" },
              { label: "Devotionals", href: "/categories/devotionals" },
            ].map((link) => (
              <li key={link.href} style={{ marginBottom: "10px" }}>
                <a
                  href={link.href}
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Creators */}
        <div>
          <p style={{
            fontSize: "11px",
            color: "var(--gold)",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: 600,
            marginBottom: "20px",
          }}>
            Creators
          </p>
          <ul style={{ listStyle: "none" }}>
            {[
              { label: "Upload Video", href: "/upload" },
              { label: "Creator Studio", href: "/studio" },
              { label: "Ministry Accounts", href: "/ministries" },
              { label: "Church Streaming", href: "/churches" },
              { label: "Monetization", href: "/monetization" },
              { label: "Content Standards", href: "/standards" },
              { label: "Verification", href: "/verify" },
            ].map((link) => (
              <li key={link.href} style={{ marginBottom: "10px" }}>
                <a
                  href={link.href}
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p style={{
            fontSize: "11px",
            color: "var(--gold)",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: 600,
            marginBottom: "20px",
          }}>
            Company
          </p>
          <ul style={{ listStyle: "none" }}>
            {[
              { label: "About WorthCast", href: "/about" },
              { label: "Our Standards", href: "/standards" },
              { label: "Trust & Safety", href: "/trust" },
              { label: "Press", href: "/press" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((link) => (
              <li key={link.href} style={{ marginBottom: "10px" }}>
                <a
                  href={link.href}
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <p style={{ fontSize: "13px", color: "var(--muted)" }}>
          © 2026 WorthCast. All rights reserved. Christian streaming, curated with care.
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Standards", href: "/standards" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
