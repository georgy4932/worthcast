export default function CTABanner() {
  return (
    <section className="cta-banner" aria-labelledby="cta-heading">
      <h2 id="cta-heading">
        YOUR CONTENT<br />
        HAS <span className="text-gold">WORTH.</span>
      </h2>

      <p>
        Join a growing community of creators building audiences around content that actually matters.
        Start free — no credit card needed.
      </p>

      <div className="cta-actions">
        <a href="/join" className="btn btn-primary btn-lg">Start Creating Free →</a>
        <a href="/browse" className="btn btn-ghost btn-lg">Browse as Viewer</a>
      </div>
    </section>
  );
}
