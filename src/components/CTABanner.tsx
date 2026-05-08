export default function CTABanner() {
  return (
    <section className="cta-banner" aria-labelledby="cta-heading">
      <div className="cta-inner">
        <p className="section-label">Start Streaming</p>

        <h2 id="cta-heading">
          Your content<br />
          has <span className="text-gold">worth.</span>
        </h2>

        <p className="cta-copy">
          Join a growing community of creators building audiences around content that actually matters.
          Start free — no credit card needed.
        </p>

        <div className="cta-actions">
          <a href="/join" className="btn btn-primary btn-lg">
            Start Creating Free →
          </a>
          <a href="/browse" className="btn btn-ghost btn-lg">
            Browse as Viewer
          </a>
        </div>
      </div>
    </section>
  );
}
