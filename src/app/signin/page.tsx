"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  const isSuccess = message?.includes("Check your email");

  function getRedirect() {
    const params = new URLSearchParams(window.location.search);
    return params.get("redirect") || "/";
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage(null);

    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) setMessage(error.message);
      else window.location.href = getRedirect();
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) setMessage(error.message);
      else setMessage("Check your email to confirm your account.");
    }

    setLoading(false);
  }

  async function handleGoogle() {
    const redirect = getRedirect();

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${redirect}`,
      },
    });
  }

  return (
    <main className="auth-page">
      <div className="auth-shell">
        <a href="/" className="logo auth-logo" aria-label="WorthCast homepage">
          <span className="logo-icon" aria-hidden="true" />
          <span className="logo-text">
            Worth<span>Cast</span>
          </span>
        </a>

        <section className="auth-card">
          <h1>{mode === "signin" ? "Sign In" : "Create Account"}</h1>

          <p className="auth-subtitle">
            {mode === "signin"
              ? "Welcome back to WorthCast."
              : "Join WorthCast. Stream what matters."}
          </p>

          <button type="button" onClick={handleGoogle} className="google-btn">
            Continue with Google
          </button>

          <div className="auth-divider">
            <span />
            <p>or</p>
            <span />
          </div>

          <form onSubmit={handleSubmit}>
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
                placeholder="••••••••"
                required
              />
            </label>

            {message && (
              <p className={isSuccess ? "auth-message success" : "auth-message error"}>
                {message}
              </p>
            )}

            <button type="submit" disabled={loading} className="btn btn-gold auth-submit">
              {loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="auth-toggle">
            {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => {
                setMode(mode === "signin" ? "signup" : "signin");
                setMessage(null);
              }}
            >
              {mode === "signin" ? "Create one" : "Sign in"}
            </button>
          </p>
        </section>
      </div>
    </main>
  );
}
