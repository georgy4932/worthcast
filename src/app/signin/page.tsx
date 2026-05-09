"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  async function handleSubmit() {
    setLoading(true);
    setError(null);

    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) setError(error.message);
      else {
        const params = new URLSearchParams(window.location.search);
        const redirect = params.get("redirect") || "/";
        window.location.href = redirect;
      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) setError(error.message);
      else setError("Check your email to confirm your account.");
    }

    setLoading(false);
  }

  async function handleGoogle() {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect") || "/";
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${redirect}`,
      },
    });
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--black)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px" }}>

        {/* Logo */}
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            marginBottom: "48px",
          }}
        >
          <span
            style={{
              width: "36px",
              height: "36px",
              background: "var(--gold)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--black)">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              letterSpacing: "2px",
              color: "var(--white)",
            }}
          >
            Worth<span style={{ color: "var(--gold)" }}>Cast</span>
          </span>
        </a>

        {/* Card */}
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "40px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "32px",
              letterSpacing: "1px",
              color: "var(--white)",
              marginBottom: "8px",
            }}
          >
            {mode === "signin" ? "Sign In" : "Create Account"}
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              marginBottom: "32px",
            }}
          >
            {mode === "signin"
              ? "Welcome back to WorthCast."
              : "Join WorthCast. Stream what matters."}
          </p>

          {/* Google button */}
          <button
            onClick={handleGoogle}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              background: "#fff",
              color: "#1a1a1a",
              border: "none",
              borderRadius: "6px",
              padding: "12px",
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "var(--font-body)",
              cursor: "pointer",
              marginBottom: "16px",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            <span style={{ fontSize: "12px", color: "var(--muted)" }}>or</span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "16px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: "13px",
                color: "var(--muted)",
                marginBottom: "8px",
                fontWeight: 500,
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                width: "100%",
                background: "var(--dark)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "11px 14px",
                color: "var(--white)",
                fontSize: "14px",
                fontFamily: "var(--font-body)",
                outline: "none",
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "24px" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "13px",
                color: "var(--muted)",
                marginBottom: "8px",
                fontWeight: 500,
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: "100%",
                background: "var(--dark)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "11px 14px",
                color: "var(--white)",
                fontSize: "14px",
                fontFamily: "var(--font-body)",
                outline: "none",
              }}
            />
          </div>

          {/* Error */}
          {error && (
            <p
              style={{
                fontSize: "13px",
                color: error.includes("Check your email")
                  ? "var(--gold)"
                  : "var(--red)",
                marginBottom: "20px",
                lineHeight: 1.5,
              }}
            >
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%",
              background: "var(--gold)",
              color: "var(--black)",
              border: "none",
              borderRadius: "6px",
              padding: "13px",
              fontSize: "15px",
              fontWeight: 700,
              fontFamily: "var(--font-body)",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              marginBottom: "20px",
            }}
          >
            {loading
              ? "Please wait…"
              : mode === "signin"
              ? "Sign In"
              : "Create Account"}
          </button>

          {/* Toggle */}
          <p
            style={{
              fontSize: "13px",
              color: "var(--muted)",
              textAlign: "center",
            }}
          >
            {mode === "signin"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              onClick={() => {
                setMode(mode === "signin" ? "signup" : "signin");
                setError(null);
              }}
              style={{
                background: "none",
                border: "none",
                color: "var(--gold)",
                cursor: "pointer",
                fontSize: "13px",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
              }}
            >
              {mode === "signin" ? "Create one" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}
