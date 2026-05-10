"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ContactType =
  | "general"
  | "report"
  | "verification"
  | "creator"
  | "technical";

const contactTypes: { value: ContactType; label: string; icon: string }[] = [
  { value: "general", label: "General Enquiry", icon: "💬" },
  { value: "report", label: "Report Content", icon: "🚨" },
  { value: "verification", label: "Ministry Verification", icon: "✅" },
  { value: "creator", label: "Creator Support", icon: "🎬" },
  { value: "technical", label: "Technical Issue", icon: "🔧" },
];

const responseTimes = [
  { label: "General Enquiry", time: "2-3 business days" },
  { label: "Content Reports", time: "24-48 hours" },
  { label: "Ministry Verification", time: "5-7 business days" },
  { label: "Creator Support", time: "2-3 business days" },
  { label: "Technical Issues", time: "24-48 hours" },
];

export default function ContactPage() {
  const [type, setType] = useState<ContactType>("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = name.trim() && email.trim() && message.trim();

  function getPlaceholder() {
    if (type === "report") {
      return "Please describe the content you are reporting and provide the video URL if possible.";
    }

    if (type === "verification") {
      return "Tell us about your church or ministry — name, location, website, and denomination if applicable.";
    }

    return "How can we help you?";
  }

  function handleSubmit() {
    if (!canSubmit) return;

    // Temporary frontend-only success state.
    // Later, connect this to an API route or email service.
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-hero">
          <div className="container">
            <p className="section-label">Get in Touch</p>

            <h1 className="contact-title">
              Contact <span>WorthCast</span>
            </h1>

            <p className="contact-copy">
              Whether you have a question, want to report content, apply for
              ministry verification, or need creator support — we are here to
              help.
            </p>
          </div>
        </section>

        <section className="contact-content">
          <div className="container">
            {submitted ? (
              <ContactSuccess />
            ) : (
              <div className="contact-grid">
                <form className="contact-form">
                  <div className="contact-field-group">
                    <p className="contact-field-label">
                      What can we help you with?
                    </p>

                    <div className="contact-type-list">
                      {contactTypes.map((contactType) => (
                        <button
                          key={contactType.value}
                          type="button"
                          className={`contact-type-btn ${
                            type === contactType.value ? "is-active" : ""
                          }`}
                          onClick={() => setType(contactType.value)}
                        >
                          <span>{contactType.icon}</span>
                          {contactType.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <ContactInput
                    label="Full Name *"
                    value={name}
                    onChange={setName}
                    placeholder="Your name or ministry name"
                  />

                  <ContactInput
                    label="Email Address *"
                    value={email}
                    onChange={setEmail}
                    placeholder="you@example.com"
                    type="email"
                  />

                  <label className="contact-field">
                    <span>Message *</span>
                    <textarea
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder={getPlaceholder()}
                      rows={6}
                    />
                  </label>

                  <button
                    type="button"
                    className="btn btn-primary contact-submit"
                    disabled={!canSubmit}
                    onClick={handleSubmit}
                  >
                    Send Message
                  </button>
                </form>

                <aside className="contact-sidebar">
                  <div className="contact-info-card">
                    <p className="section-label">Response Times</p>

                    {responseTimes.map((item) => (
                      <div key={item.label} className="contact-info-row">
                        <span>{item.label}</span>
                        <strong>{item.time}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="contact-scripture-card">
                    <p>
                      “Let your conversation be always full of grace, seasoned
                      with salt, so that you may know how to answer everyone.”
                    </p>
                    <span>Colossians 4:6</span>
                  </div>

                  <div className="contact-note-card">
                    <p>
                      WorthCast is committed to maintaining a trustworthy,
                      family-safe Christian platform. Reports and enquiries are
                      handled with care and confidentiality.
                    </p>
                  </div>
                </aside>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ContactInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="contact-field">
      <span>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}

function ContactSuccess() {
  return (
    <div className="contact-success">
      <div className="contact-success-icon">✝️</div>

      <h2>Message Received</h2>

      <p>
        Thank you for reaching out to WorthCast. We will respond to your message
        within 2-3 business days.
      </p>

      <a href="/" className="btn btn-primary">
        Back to WorthCast
      </a>
    </div>
  );
}
