import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const standards = [
  {
    icon: "✝️",
    title: "Christian Content First",
    description:
      "Every piece of content on WorthCast must align with Christian values and beliefs. Content that contradicts or undermines core Christian doctrine will not be permitted on the platform.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family-Safe by Design",
    description:
      "WorthCast is built so families can browse freely. All content must be suitable for family viewing. Mature themes must be handled with care, context, and pastoral sensitivity.",
  },
  {
    icon: "📖",
    title: "Biblically Grounded",
    description:
      "Teaching content must be grounded in Scripture. We encourage expository, Christ-centred teaching that handles the Word of God with accuracy and reverence.",
  },
  {
    icon: "⛪",
    title: "Ministry Integrity",
    description:
      "Churches and ministries on WorthCast are expected to operate with transparency, doctrinal integrity, and accountability.",
  },
  {
    icon: "🚫",
    title: "What Is Not Allowed",
    description:
      "Content that promotes false doctrine, sexual immorality, violence, hatred, racism, occultism, or exploitation will be removed.",
  },
  {
    icon: "🔍",
    title: "Content Review",
    description:
      "All uploaded content is subject to review. WorthCast may remove content that does not meet our Christian content standards.",
  },
];

const creatorStandards = [
  "Your content must reflect Christian values in theme, tone, and message.",
  "You must have the legal right to upload all content, including music, footage, and images.",
  "Sermons and teaching must accurately represent Scripture without manipulation.",
  "Worship content must be original or properly licensed.",
  "You must not misrepresent your ministry, church, or credentials.",
  "Live streams must follow the same standards as uploaded videos.",
  "You must not solicit funds without transparency about their use.",
  "Content involving minors must be appropriate, safe, and properly authorised.",
];

export default function StandardsPage() {
  return (
    <>
      <Navbar />

      <main className="standards-page">
        <section className="standards-hero">
          <div className="container">
            <p className="section-label">Trust & Safety</p>

            <h1 className="standards-title">
              Content <span>Standards</span>
            </h1>

            <p className="standards-copy">
              WorthCast is a Christian-first streaming platform. Every piece of
              content is held to a standard that reflects our commitment to
              faith, family, and truth.
            </p>

            <div className="standards-scripture">
              <p>
                “Whatever is true, whatever is noble, whatever is right,
                whatever is pure, whatever is lovely, whatever is admirable —
                think about such things.”
              </p>
              <span>Philippians 4:8 — The WorthCast Standard</span>
            </div>
          </div>
        </section>

        <section className="standards-content">
          <div className="container">
            <p className="section-label">Platform Standards</p>

            <div className="standards-grid">
              {standards.map((standard) => (
                <article key={standard.title} className="standard-card">
                  <span className="standard-icon">{standard.icon}</span>
                  <h2>{standard.title}</h2>
                  <p>{standard.description}</p>
                </article>
              ))}
            </div>

            <section className="creator-standards-card">
              <p className="section-label">Creator & Ministry Standards</p>

              <h2>What We Expect From Creators</h2>

              <ul>
                {creatorStandards.map((standard) => (
                  <li key={standard}>
                    <span>✓</span>
                    {standard}
                  </li>
                ))}
              </ul>
            </section>

            <div className="standards-action-grid">
              <StandardsActionCard
                icon="🚨"
                title="Report Content"
                description="If you see content that violates our Christian content standards, please report it. We review reports and act as needed."
                href="/contact"
                label="Report Content"
                variant="primary"
              />

              <StandardsActionCard
                icon="✅"
                title="Ministry Verification"
                description="Churches and ministries can apply for verified status. Verification gives your channel a trust badge visible to viewers."
                href="/contact"
                label="Apply for Verification"
                variant="ghost"
              />
            </div>

            <section className="standards-cta-card">
              <h2>Questions About Our Standards?</h2>

              <p>
                We are committed to maintaining a trustworthy, faith-filled
                platform. If you have questions about our standards, reach out.
              </p>

              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function StandardsActionCard({
  icon,
  title,
  description,
  href,
  label,
  variant,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  label: string;
  variant: "primary" | "ghost";
}) {
  return (
    <article className="standards-action-card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <a
        href={href}
        className={variant === "primary" ? "btn btn-primary" : "btn btn-ghost"}
      >
        {label}
      </a>
    </article>
  );
}
