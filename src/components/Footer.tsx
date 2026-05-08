export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="/" className="logo">
            <div className="logo-icon" aria-hidden="true" />
            <span className="logo-text">Worth<span>Cast</span></span>
          </a>
          <p>The open streaming platform for creators and viewers who believe what you watch shapes who you become.</p>
        </div>

        <div className="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="/browse">Browse Videos</a></li>
            <li><a href="/live">Live Streams</a></li>
            <li><a href="/creators">Creators</a></li>
            <li><a href="/categories">Categories</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Creators</h4>
          <ul>
            <li><a href="/upload">Upload Video</a></li>
            <li><a href="/studio">Creator Studio</a></li>
            <li><a href="/studio/monetization">Monetization</a></li>
            <li><a href="/studio/analytics">Analytics</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/standards">Our Standards</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 WorthCast. All rights reserved.</span>
        <div className="footer-legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/standards">Content Standards</a>
          <a href="/cookies">Cookies</a>
        </div>
        <span className="footer-tagline">STREAM WHAT MATTERS</span>
      </div>
    </footer>
  );
}
