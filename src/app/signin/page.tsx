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
      });
      if (error) setError(error.message);
      else setError("Check your email to confirm your account.");
    }

    setLoading(false);
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
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
        }}
      >
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
