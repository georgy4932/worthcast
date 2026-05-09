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

  async function handleJoin() {
    setLoading(true);
    setError(null);

    if (!name.trim()) { setError("Please enter your name."); setLoading(false); return; }
    if (!email.trim()) { setError("Please enter your email."); setLoading(false); return; }
    if (password.length < 8) { setError("Password must be at least 8 characters."); setLoading(false); return; }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: name },
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
    <main
      style={{
        minHeight: "100vh",
        background: "var(--black)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ width: "100%", maxWidth: "480px", position: "relative", zIndex: 2 }}>

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

        {done ? (
          /* Success state */
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "20px" }}>✝️</div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "36px",
                color: "var(--white)",
                marginBottom: "12px",
                letterSpacing: "1px",
              }}
            >
              Welcome to WorthCast
            </h1>
            <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "32px" }}>
              Check your email to confirm your account. Once confirmed you can start watching sermons, worship, Bible teaching, and more.
            </p>
            <a
              href="/browse"
              style={{
                display: "inline-flex",
                background: "var(--gold)",
                color: "var(--black)",
                padding: "13px 32px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Browse Content
            </a>
          </div>
        ) : (
          /* Join form */
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "40px",
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: "32px" }}>
              <p style={{
                fontSize: "11px",
                color: "var(--gold)",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: 600,
                marginBottom: "8px",
              }}>
                Free Account
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "36px",
                  letterSpacing: "1px",
                  color: "var(--white)",
                  marginBottom: "8px",
                }}
              >
                Join WorthCast
              </h1>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>
                Christian streaming for viewers, families, churches, and ministries.
              </p>
            </div>

            {/* Google */}
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
                marginBottom: "20px",
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
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              <span style={{ fontSize: "12px", color: "var(--muted)" }}>or</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            </div>

            {/* Name */}
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="name" style={{
                display: "block",
                fontSize: "13px",
                color: "var(--muted)",
                marginBottom: "8px",
                fontWeight: 500,
              }}>
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
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

            {/* Email */}
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="email" style={{
                display: "block",
                fontSize: "13px",
                color: "var(--muted)",
                marginBottom: "8px",
                fontWeight: 500,
              }}>
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
              <label htmlFor="password" style={{
                display: "block",
                fontSize: "13px",
                color: "var(--muted)",
                marginBottom: "8px",
                fontWeight: 500,
              }}>
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 characters"
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
              <p style={{
                fontSize: "13px",
                color: "var(--red, #ff6b6b)",
                marginBottom: "20px",
                lineHeight: 1.5,
              }}>
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              onClick={handleJoin}
              disabled={loading}
              style={{
                width: "100%",
                background: "var(--gold)",
                color: "var(--black)",
                border: "none",
                borderRadius: "6px",
                padding: "14px",
                fontSize: "15px",
                fontWeight: 700,
                fontFamily: "var(--font-body)",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
                marginBottom: "20px",
              }}
            >
              {loading ? "Creating account…" : "Create Free Account"}
            </button>

            {/* Trust note */}
            <p style={{
              fontSize: "12px",
              color: "var(--muted)",
              textAlign: "center",
              lineHeight: 1.6,
              marginBottom: "16px",
            }}>
              By joining you agree to our content standards — Christian-first, family-safe, and trusted.
            </p>

            {/* Sign in link */}
            <p style={{
              fontSize: "13px",
              color: "var(--muted)",
              textAlign: "center",
            }}>
              Already have an account?{" "}
              <a href="/signin" style={{
                color: "var(--gold)",
                textDecoration: "none",
                fontWeight: 500,
              }}>
                Sign in
              </a>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
