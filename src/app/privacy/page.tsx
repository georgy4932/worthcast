import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="policy-page">
        <section className="policy-hero">
          <div className="container">
            <p className="section-label">Legal</p>

            <h1 className="policy-title">
              Privacy <span>Policy</span>
            </h1>

            <p className="policy-updated">
              Last updated: May 2026
            </p>
          </div>
        </section>

        <section className="policy-section">
          <div className="container">
            <div className="policy-content">
              <p>
                WorthCast ("we", "us", or "our") is committed to
                protecting your privacy. This Privacy Policy explains
                how we collect, use, and safeguard your information
                when you use the WorthCast platform.
              </p>

              <h2>Information We Collect</h2>

              <p>
                We collect information you provide directly to us,
                including:
              </p>

              <ul>
                <li>
                  Account information such as name, email address,
                  and password
                </li>

                <li>
                  Profile information including display name, bio,
                  and avatar
                </li>

                <li>
                  Content uploads including videos, titles,
                  descriptions, and metadata
                </li>

                <li>
                  Messages and communications submitted through our
                  contact forms
                </li>
              </ul>

              <p>
                We also collect certain information automatically
                when you use WorthCast:
              </p>

              <ul>
                <li>
                  Usage activity such as videos watched, searches,
                  and browsing behaviour
                </li>

                <li>
                  Device information including browser type,
                  operating system, and IP address
                </li>

                <li>
                  Cookies and similar tracking technologies
                </li>
              </ul>

              <h2>How We Use Information</h2>

              <p>
                We use collected information to:
              </p>

              <ul>
                <li>
                  Operate, maintain, and improve WorthCast
                </li>

                <li>
                  Authenticate users and secure accounts
                </li>

                <li>
                  Respond to enquiries and support requests
                </li>

                <li>
                  Enforce platform and Christian content standards
                </li>

                <li>
                  Analyse platform performance and user experience
                </li>
              </ul>

              <h2>Information Sharing</h2>

              <p>
                We do not sell personal information to third
                parties.
              </p>

              <p>
                We may share information with trusted providers that
                help operate WorthCast, including:
              </p>

              <ul>
                <li>Supabase — authentication and database</li>
                <li>Mux — video processing and streaming</li>
                <li>Vercel — hosting and deployment</li>
              </ul>

              <p>
                These providers may only use your information to
                deliver services related to WorthCast.
              </p>

              <h2>Data Security</h2>

              <p>
                We implement technical and organisational safeguards
                designed to protect personal information from
                unauthorised access, misuse, or disclosure.
              </p>

              <p>
                However, no internet-based system can be guaranteed
                completely secure.
              </p>

              <h2>Your Rights</h2>

              <p>You may request to:</p>

              <ul>
                <li>Access the personal data we hold about you</li>

                <li>Correct inaccurate information</li>

                <li>Delete your account and associated data</li>

                <li>
                  Withdraw consent where processing is based on
                  consent
                </li>
              </ul>

              <p>
                To exercise these rights, contact us through the{" "}
                <a href="/contact">contact page</a>.
              </p>

              <h2>Cookies</h2>

              <p>
                WorthCast uses cookies and related technologies to
                maintain sessions, remember preferences, and improve
                platform performance.
              </p>

              <p>
                Disabling cookies may affect parts of the platform.
              </p>

              <h2>Children's Privacy</h2>

              <p>
                We do not knowingly collect personal information
                from children under 13 without parental consent.
              </p>

              <p>
                If you believe such information has been submitted,
                please contact us immediately.
              </p>

              <h2>Changes to This Policy</h2>

              <p>
                We may update this Privacy Policy periodically.
                Continued use of WorthCast after updates
                constitutes acceptance of the revised policy.
              </p>

              <h2>Contact</h2>

              <p>
                If you have questions about this Privacy Policy,
                please contact us through our{" "}
                <a href="/contact">contact page</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
