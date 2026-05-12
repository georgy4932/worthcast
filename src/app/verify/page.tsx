import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Sign up for a free WorthCast account and upload at least three pieces of content to your channel.",
  },
  {
    number: "02",
    title: "Submit Your Application",
    description:
      "Complete the verification application with your ministry details, website, and supporting information.",
  },
  {
    number: "03",
    title: "Review Process",
    description:
      "Our team carefully reviews your application and supporting documents. Reviews usually take 5–7 business days.",
  },
  {
    number: "04",
    title: "Receive Verification",
    description:
      "Approved churches and ministries receive a gold verification badge visible across WorthCast.",
  },
];

const benefits = [
  {
    icon: "✓",
    title: "Gold Verified Badge",
    description:
      "A visible trust badge displayed on your channel and content.",
  },
  {
    icon: "📈",
    title: "Priority Discovery",
    description:
      "Verified ministries receive stronger placement across search and recommendations.",
  },
  {
    icon: "🛡️",
    title: "Trust & Credibility",
    description:
      "Verification helps viewers identify legitimate churches and ministries.",
  },
];

export default function VerifyPage() {
  return (
    <>
      <Navbar />

      <main className="verify-page">
        {/* Hero */}
        <section className="verify-hero">
          <div className="container">
            <p className="section-label">Ministry Verification</p>

            <h1 className="verify-title">
              Get <span>Verified</span>
            </h1>

            <p className="verify-copy">
              Verification on WorthCast helps viewers recognise trusted
              churches, ministries, and Christian organisations committed to
              biblical integrity and accountability.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="verify-section">
          <div className="container">
            <div className="verify-benefits-grid">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="verify-benefit-card">
                  <div className="verify-benefit-icon">
                    {benefit.icon}
                  </div>

                  <h2>{benefit.title}</h2>

                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="verify-section verify-steps-section">
          <div className="container">
            <div className="verify-steps-header">
              <p className="section-label">Process</p>

              <h2>How Verification Works</h2>
            </div>

            <div className="verify-steps">
              {steps.map((step) => (
                <div key={step.number} className="verify-step-card">
                  <span className="verify-step-number">
                    {step.number}
                  </span>

                  <div>
                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="verify-cta-section">
          <div className="container">
            <div className="verify-cta">
              <p className="section-label">Apply Today</p>

              <h2>
                Build trust with your audience on WorthCast.
              </h2>

              <p>
                Verification strengthens credibility, improves discoverability,
                and helps viewers confidently engage with your ministry.
              </p>

              <a href="/contact" className="btn btn-primary">
                Apply for Verification
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
