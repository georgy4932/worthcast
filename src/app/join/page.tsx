"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function JoinPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function handleJoin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError(null);

    const cleanName = name.trim();
    const cleanEmail = email.trim();

    if (!cleanName) {
      setError("Please enter your name.");
      setLoading(false);
      return;
    }

    if (!cleanEmail) {
      setError("Please enter your email.");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: cleanEmail,
      password,
      options: {
        data: { display_name: cleanName },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) setError(error.message);
    else setDone(true);

    setLoading(false);
  }

  async function handleGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/`,
      },
    });
  }

  return (
    <main className="auth-page auth-page--wide">
      <div className="auth-shell auth-shell--wide">
        <a href="/" className="logo auth-logo" aria-label="WorthCast homepage">
          <span className="logo-icon" aria-hidden="true" />
          <span className="logo-text">
            Worth<span>Cast</span>
          </span>
        </a>

        {done ? (
          <section className="auth-card auth-success-card">
            <div className="auth-success-icon">✝️</div>

            <h1>Welcome to WorthCast</h1>

            <p className="auth-subtitle auth-success-copy">
              Check your email to confirm your account. Once confirmed, you can
              start watching sermons, worship, Bible teaching, and more.
            </p>

            <a href="/browse" className="btn btn-gold btn-lg">
              Browse Content
            </a>
          </section>
        ) : (
          <section className="auth-card">
            <p className="section-label">Free Account</p>

            <h1>Join WorthCast</h1>

            <p className="auth-subtitle">
              Christian streaming for viewers, families, churches, and ministries.
            </p>

            <button type="button" onClick={handleGoogle} className="google-btn">
              Continue with Google
            </button>

            <div className="auth-divider">
              <span />
              <p>or</p>
              <span />
            </div>

            <form onSubmit={handleJoin}>
              <label className="auth-field">
                <span>Full Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="auth-field">
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label className="auth-field">
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  minLength={8}
                  required
                />
              </label>

              {error && <p className="auth-message error">{error}</p>}

              <button type="submit" disabled={loading} className="btn btn-gold auth-submit">
                {loading ? "Creating account…" : "Create Free Account"}
              </button>
            </form>

            <p className="auth-note">
              By joining you agree to our content standards — Christian-first,
              family-safe, and trusted.
            </p>

            <p className="auth-toggle">
              Already have an account? <a href="/signin">Sign in</a>
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
