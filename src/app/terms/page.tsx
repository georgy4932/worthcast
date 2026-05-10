import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="policy-page">
        <section className="policy-hero">
          <div className="container">
            <p className="section-label">Legal</p>

            <h1 className="policy-title">
              Terms of <span>Service</span>
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
                Welcome to WorthCast. By accessing or using the
                WorthCast platform, you agree to be bound by these
                Terms of Service. Please read them carefully before
                using the platform.
              </p>

              <h2>Acceptance of Terms</h2>

              <p>
                By creating an account or using WorthCast, you
                confirm that you are at least 13 years old and agree
                to these Terms of Service and our Privacy Policy.
              </p>

              <p>
                If you are under 18, you must have parental or legal
                guardian permission to use the platform.
              </p>

              <h2>Christian Content Standards</h2>

              <p>
                WorthCast is a Christian-first streaming platform.
                All uploaded content must comply with our Christian
                Content Standards.
              </p>

              <p>You agree not to upload content that:</p>

              <ul>
                <li>
                  Contradicts or undermines core Christian doctrine
                </li>

                <li>
                  Is sexually explicit, violent, abusive, or harmful
                </li>

                <li>
                  Promotes occultism, hate, exploitation, or unlawful
                  activity
                </li>

                <li>
                  Violates intellectual property or copyright laws
                </li>

                <li>
                  Harms or exploits vulnerable individuals
                </li>
              </ul>

              <h2>User Accounts</h2>

              <p>
                You are responsible for maintaining the security and
                confidentiality of your account credentials.
              </p>

              <p>
                You agree to notify us immediately of any
                unauthorised access or suspicious activity involving
                your account.
              </p>

              <h2>Content Ownership</h2>

              <p>
                You retain ownership of content uploaded to
                WorthCast.
              </p>

              <p>
                By uploading content, you grant WorthCast a
                non-exclusive, royalty-free licence to host, stream,
                display, distribute, and promote your content on the
                platform.
              </p>

              <p>
                You confirm that you have the legal right to upload
                all submitted material including video, audio,
                footage, images, and music.
              </p>

              <h2>Content Moderation</h2>

              <p>
                WorthCast reserves the right to review, restrict, or
                remove content that violates these Terms or our
                Christian Content Standards.
              </p>

              <p>
                Accounts that repeatedly violate platform standards
                may be suspended or permanently removed.
              </p>

              <h2>Ministry & Church Accounts</h2>

              <p>
                Churches and ministries using WorthCast agree to
                represent themselves honestly and operate with
                transparency and integrity.
              </p>

              <p>
                Verified ministries may lose verification status if
                they violate platform standards.
              </p>

              <h2>Prohibited Uses</h2>

              <p>You agree not to:</p>

              <ul>
                <li>
                  Use WorthCast for unlawful purposes
                </li>

                <li>
                  Attempt to gain unauthorised access to the platform
                </li>

                <li>
                  Upload malicious software or harmful code
                </li>

                <li>
                  Harass, abuse, or threaten other users
                </li>

                <li>
                  Scrape or harvest platform data without permission
                </li>

                <li>
                  Impersonate another individual, church, or ministry
                </li>
              </ul>

              <h2>Disclaimers</h2>

              <p>
                WorthCast is provided on an “as is” and “as
                available” basis without warranties of any kind.
              </p>

              <p>
                We do not guarantee uninterrupted platform access or
                error-free service.
              </p>

              <p>
                Content uploaded by creators reflects the views of
                individual creators and not necessarily the views of
                WorthCast.
              </p>

              <h2>Limitation of Liability</h2>

              <p>
                To the fullest extent permitted by law, WorthCast
                shall not be liable for indirect, incidental,
                consequential, or special damages arising from use of
                the platform.
              </p>

              <h2>Changes to Terms</h2>

              <p>
                We may update these Terms periodically. Continued use
                of WorthCast after updates constitutes acceptance of
                the revised Terms.
              </p>

              <h2>Governing Law</h2>

              <p>
                These Terms are governed by the laws of the United
                Kingdom. Any disputes shall be subject to the
                jurisdiction of the courts of England and Wales.
              </p>

              <h2>Contact</h2>

              <p>
                If you have questions regarding these Terms of
                Service, please contact us through our{" "}
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
