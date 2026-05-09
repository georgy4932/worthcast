export default function CTABanner() {
  return (
    <section className="cta-banner" aria-labelledby="cta-heading">
      <div className="cta-inner">
        <p className="section-label">Join the Community</p>

        <h2 id="cta-heading">
          YOUR MINISTRY
          <br />
          <span className="text-gold">HAS A HOME.</span>
        </h2>

        <p className="cta-lead">
          Churches, ministries, creators, and speakers are already sharing their message on WorthCast.
        </p>

        <p className="cta-copy">
          Upload sermons, worship sets, Bible teaching, testimonies, and Christian films.
          Start free — no credit card needed.
        </p>

        <div className="cta-actions">
          <a href="/join" className="btn btn-primary btn-lg">
            Start Creating Free →
          </a>

          <a href="/browse" className="btn btn-ghost btn-lg">
            Browse Content
          </a>
        </div>
      </div>
    </section>
  );
}
