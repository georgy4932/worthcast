export default function Navbar() {
  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "68px",
        background: "rgba(8,8,8,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid #2a2a2a",
        gap: "16px",
      }}
    >
      {/* Logo */}
      <a
        href="/"
        aria-label="WorthCast — go to homepage"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            width: "36px",
            height: "36px",
            background: "var(--gold)",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--black)">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "26px",
            letterSpacing: "2px",
            color: "var(--white)",
          }}
        >
          Worth<span style={{ color: "var(--gold)" }}>Cast</span>
        </span>
      </a>

      {/* Search */}
      <div
        role="search"
        style={{
          flex: 1,
          maxWidth: "400px",
          position: "relative",
          margin: "0 40px",
        }}
      >
        <label htmlFor="site-search" className="sr-only">
          Search WorthCast
        </label>
        <svg
          aria-hidden="true"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--muted)"
          strokeWidth="2"
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          id="site-search"
          type="search"
          placeholder="Search videos, creators, topics…"
          autoComplete="off"
          style={{
            width: "100%",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            padding: "9px 16px 9px 40px",
            color: "var(--white)",
            fontSize: "14px",
            fontFamily: "var(--font-body)",
            outline: "none",
          }}
        />
      </div>

      {/* Nav links */}
      <nav aria-label="Primary navigation">
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            listStyle: "none",
          }}
        >
          {[
            { label: "Browse", href: "/browse" },
            { label: "Live", href: "/live" },
            { label: "Creators", href: "/creators" },
            { label: "Categories", href: "/categories" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: "var(--muted)",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
        <a
          href="/upload"
          aria-label="Upload a video"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            background: "transparent",
            border: "1px solid var(--border)",
            color: "var(--muted)",
            borderRadius: "6px",
            fontSize: "13px",
            fontFamily: "var(--font-body)",
            padding: "8px 16px",
            textDecoration: "none",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Upload
        </a>
        <a
          href="/signin"
          style={{
            background: "transparent",
            color: "var(--white)",
            border: "1px solid var(--border)",
            padding: "7px 16px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Sign In
        </a>
        <a
          href="/join"
          style={{
            background: "var(--gold)",
            color: "var(--black)",
            border: "none",
            padding: "7px 16px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Start Free
        </a>
      </div>
    </header>
  );
}
