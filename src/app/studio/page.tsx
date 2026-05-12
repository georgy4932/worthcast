import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const studioFeatures = [
  {
    title: "Upload & Publish",
    description:
      "Upload sermons, films, devotionals, worship sessions, and ministry content directly to WorthCast.",
    icon: "📤",
  },
  {
    title: "Video Analytics",
    description:
      "Track views, engagement, audience growth, and performance across your content library.",
    icon: "📊",
  },
  {
    title: "Creator Growth",
    description:
      "Build your audience, grow your ministry reach, and connect with viewers worldwide.",
    icon: "🌍",
  },
];

export default function StudioPage() {
  return (
    <>
      <Navbar />

      <main className="studio-page">
        <section className="studio-hero">
          <div className="container">
            <p className="section-label">Creator Studio</p>

            <h1 className="studio-title">
              Your <span>Studio</span>
            </h1>

            <p className="studio-copy">
              Manage your videos, track performance, and grow your audience on
              WorthCast. A complete creator studio built for Christian creators
              and ministries.
            </p>

            <div className="studio-actions">
              <a href="/upload" className="btn btn-primary">
                Upload a Video
              </a>

              <a href="/browse" className="btn btn-secondary">
                Browse Content
              </a>
            </div>
          </div>
        </section>

        <section className="studio-features-section">
          <div className="container">
            <div className="studio-features-grid">
              {studioFeatures.map((feature) => (
                <div key={feature.title} className="studio-feature-card">
                  <span className="studio-feature-icon">
                    {feature.icon}
                  </span>

                  <h2>{feature.title}</h2>

                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="studio-coming-section">
          <div className="container">
            <div className="studio-coming-card">
              <p className="section-label">Coming Soon</p>

              <h2>Professional Creator Tools</h2>

              <p>
                WorthCast Studio will soon include advanced analytics, audience
                insights, monetisation tools, playlist management, livestream
                controls, and ministry verification features.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
