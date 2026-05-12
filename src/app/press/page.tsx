import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pressFacts = [
  {
    label: "Founded",
    value: "2026",
  },
  {
    label: "Headquarters",
    value: "United Kingdom",
  },
  {
    label: "Platform",
    value: "Christian streaming platform",
  },
  {
    label: "Content Types",
    value: "Sermons, worship, films, testimonies, devotionals",
  },
  {
    label: "Audience",
    value: "Viewers, families, churches, and ministries",
  },
];

const mediaResources = [
  {
    title: "Brand Assets",
    description:
      "Official WorthCast logos, branding, colours, and media resources.",
    icon: "🎨",
  },
  {
    title: "Press Enquiries",
    description:
      "Interview requests, speaking opportunities, and media communication.",
    icon: "📰",
  },
  {
    title: "Platform Overview",
    description:
      "Information about the mission, vision, and growth of WorthCast.",
    icon: "📺",
  },
];

export default function PressPage() {
  return (
    <>
      <Navbar />

      <main className="press-page">
        <section className="press-hero">
          <div className="container">
            <p className="section-label">Press & Media</p>

            <h1 className="press-title">
              Press <span>Room</span>
            </h1>

            <p className="press-copy">
              WorthCast is the Christian-first streaming platform built for
              viewers, families, churches, and ministries. For interviews,
              media enquiries, partnerships, or brand assets, please get in
              touch with our team.
            </p>

            <div className="press-actions">
              <a href="/contact" className="btn btn-primary">
                Press Enquiry
              </a>
            </div>
          </div>
        </section>

        <section className="press-content-section">
          <div className="container press-grid">
            <div className="press-card">
              <p className="section-label">Company Overview</p>

              <h2>Key Facts</h2>

              <div className="press-facts-list">
                {pressFacts.map((fact) => (
                  <div key={fact.label} className="press-fact-row">
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="press-card">
              <p className="section-label">Media Resources</p>

              <div className="press-resource-list">
                {mediaResources.map((resource) => (
                  <div
                    key={resource.title}
                    className="press-resource-item"
                  >
                    <span>{resource.icon}</span>

                    <div>
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="press-mission-section">
          <div className="container">
            <div className="press-mission-card">
              <p className="section-label">Our Mission</p>

              <h2>
                Building a trusted home for Christian content online.
              </h2>

              <p>
                WorthCast exists to serve Christian creators, ministries,
                churches, and viewers with a streaming platform built around
                truth, excellence, and faith-based values rather than
                algorithmic controversy and entertainment culture.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
