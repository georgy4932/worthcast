import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: "💰",
    title: "Creator Revenue Share",
    description:
      "WorthCast is building a fair revenue share model for creators. When ads or subscriptions are introduced, creators will receive a meaningful share of the revenue their content generates.",
  },
  {
    icon: "🎁",
    title: "Ministry Donations",
    description:
      "Allow supporters and congregations to give directly through your WorthCast channel with ministry-focused donation tools.",
  },
  {
    icon: "🔐",
    title: "Premium Content",
    description:
      "Offer conferences, teaching series, worship albums, and courses through premium access experiences.",
  },
  {
    icon: "📅",
    title: "Ticketed Live Events",
    description:
      "Host paid live events including conferences, worship nights, concerts, and special broadcasts.",
  },
  {
    icon: "👥",
    title: "Channel Memberships",
    description:
      "Build a deeper community through supporter memberships and exclusive ministry content.",
  },
  {
    icon: "⛪",
    title: "Church & Ministry Plans",
    description:
      "Dedicated solutions for churches and ministries with advanced tools, branding, and support.",
  },
];

export default function MonetizationPage() {
  return (
    <>
      <Navbar />

      <main className="monetization-page">
        {/* Hero */}
        <section className="monetization-hero">
          <div className="container">
            <p className="section-label">Creator Monetization</p>

            <h1 className="monetization-title">
              Earn From <span>Your Ministry</span>
            </h1>

            <p className="monetization-copy">
              WorthCast is building a sustainable, mission-first monetization
              system for Christian creators, churches, and ministries — one
              designed around trust, stewardship, and long-term impact.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="monetization-section">
          <div className="container">
            <div className="monetization-grid">
              {features.map((feature) => (
                <div key={feature.title} className="monetization-card">
                  <span className="monetization-icon">
                    {feature.icon}
                  </span>

                  <h2>{feature.title}</h2>

                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="monetization-cta-section">
          <div className="container">
            <div className="monetization-cta">
              <p className="section-label">Coming Soon</p>

              <h2>
                Monetization built for faith-based creators.
              </h2>

              <p>
                We are carefully building monetization tools that support
                ministries and creators without compromising the integrity of
                the platform or exploiting audiences.
              </p>

              <div className="monetization-actions">
                <a href="/join" className="btn btn-primary">
                  Join WorthCast Free
                </a>

                <a href="/studio" className="btn btn-secondary">
                  Creator Studio
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
