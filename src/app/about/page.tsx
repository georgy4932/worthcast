import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: "✝️",
    title: "Christ-Centred",
    description:
      "WorthCast is built from the foundation up on the truth of the gospel — centred on Jesus Christ, his life, his teaching, his death, and his resurrection.",
  },
  {
    icon: "📖",
    title: "Scripture-Grounded",
    description:
      "We believe the Bible is the inspired, authoritative Word of God. Content on WorthCast must honour Scripture with accuracy, reverence, and love.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family-Safe",
    description:
      "Families should be able to open WorthCast without fear. That standard shapes every content decision we make.",
  },
  {
    icon: "⛪",
    title: "Church-Serving",
    description:
      "WorthCast exists to serve churches and ministries by giving them a professional, trusted home for their content.",
  },
  {
    icon: "🌍",
    title: "Globally Minded",
    description:
      "The Great Commission is global. WorthCast is built to connect Christian content with believers everywhere.",
  },
  {
    icon: "🎬",
    title: "Excellence in Craft",
    description:
      "Christian content should be excellent. Faith and quality are not opposites — the message deserves our best.",
  },
];

const team = [
  {
    name: "George Odeh",
    role: "Founder & Creative Director",
    bio: "George is a filmmaker, technologist, and Christian creator. He founded WorthCast to give Christian creators and ministries a platform that truly serves their mission.",
    avatar: "G",
    avatarBg: "#C9A84C",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-hero">
          <div className="container">
            <p className="section-label">Our Story</p>

            <h1 className="about-title">
              About <span>WorthCast</span>
            </h1>

            <p className="about-scripture">
              “Whatever is true, whatever is noble, whatever is right, whatever
              is pure, whatever is lovely — think about such things.”
            </p>

            <p className="about-scripture-ref">Philippians 4:8</p>
          </div>
        </section>

        <section className="about-content">
          <div className="container">
            <section className="about-mission">
              <p className="section-label">Our Mission</p>

              <h2>A Christian Home for Christian Content</h2>

              <p>
                WorthCast was built because Christian creators, churches, and
                ministries deserve better than mainstream platforms that were
                never designed with faith in mind.
              </p>

              <p>
                YouTube is a powerful tool — but it is built around engagement,
                not edification. Its algorithms reward controversy, and its
                recommendations can lead viewers away from faith content into
                whatever maximises watch time.
              </p>

              <p>
                WorthCast is different. It is a streaming platform built from
                the ground up with Christian values, Christian content
                standards, and a deep commitment to serving the Church — not
                exploiting it.
              </p>
            </section>

            <section className="about-section">
              <p className="section-label">What We Believe</p>
              <h2 className="about-section-title">Our Values</h2>

              <div className="about-values-grid">
                {values.map((value) => (
                  <article key={value.title} className="about-value-card">
                    <span>{value.icon}</span>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="about-section">
              <p className="section-label">The People</p>
              <h2 className="about-section-title">Who We Are</h2>

              <div className="about-team-grid">
                {team.map((member) => (
                  <article key={member.name} className="about-team-card">
                    <div
                      className="about-team-avatar"
                      style={{ background: member.avatarBg }}
                    >
                      {member.avatar}
                    </div>

                    <h3>{member.name}</h3>
                    <p className="about-team-role">{member.role}</p>
                    <p className="about-team-bio">{member.bio}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="about-cta-card">
              <h2>Join the Mission</h2>

              <p>
                Whether you are a viewer, a creator, a church, or a ministry —
                there is a place for you on WorthCast.
              </p>

              <div className="about-cta-actions">
                <a href="/join" className="btn btn-primary">
                  Join WorthCast
                </a>

                <a href="/browse" className="btn btn-ghost">
                  Browse Content
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
