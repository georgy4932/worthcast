export default function Navbar() {
  const links = [
    { label: "Browse", href: "/browse" },
    { label: "Live", href: "/live" },
    { label: "Creators", href: "/creators" },
    { label: "Categories", href: "/categories" },
  ];

  return (
    <header className="site-header">
      <a href="/" className="logo" aria-label="WorthCast — go to homepage">
        <span className="logo-icon" aria-hidden="true" />
        <span className="logo-text">
          Worth<span>Cast</span>
        </span>
      </a>

      <div className="nav-search" role="search">
        <label htmlFor="site-search" className="sr-only">
          Search WorthCast
        </label>

        <svg
          className="nav-search-icon"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <input
          id="site-search"
          type="search"
          placeholder="Search videos, creators, topics…"
          autoComplete="off"
        />
      </div>

      <nav className="site-nav" aria-label="Primary navigation">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-right">
        <a href="/upload" className="btn-upload" aria-label="Upload a video">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Upload
        </a>

        <a href="/signin" className="btn btn-ghost btn-sm">
          Sign In
        </a>

        <a href="/join" className="btn btn-gold btn-sm">
          Start Free
        </a>
      </div>

      <button
        className="nav-mobile-toggle"
        type="button"
        aria-label="Open navigation menu"
        aria-expanded="false"
      >
        ☰
      </button>
    </header>
  );
}
