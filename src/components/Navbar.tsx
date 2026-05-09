"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        role="banner"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: "68px",
          background: "rgba(8,8,8,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid #2a2a2a",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="WorthCast — go to homepage"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            flexShrink: 0,
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
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--black)">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "26px",
              letterSpacing: "2px",
              color: "var(--white)",
            }}
          >
            Worth<span style={{ color: "var(--gold)" }}>Cast</span>
          </span>
        </a>

        {/* Search — hidden on mobile */}
        <div
          className="nav-search-wrap"
          style={{
            flex: 1,
            maxWidth: "400px",
            position: "relative",
            margin: "0 24px",
          }}
        >
          <label htmlFor="site-search" style={{
            position: "absolute",
            width: "1px", height: "1px",
            padding: 0, margin: "-1px",
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
            border: 0,
          }}>
            Search WorthCast
          </label>
          <svg
            aria-hidden="true"
            width="15" height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--muted)"
            strokeWidth="2"
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            id="site-search"
            type="search"
            placeholder="Search videos, creators, topics…"
            autoComplete="off"
            style={{
              width: "100%",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: "9px 16px 9px 40px",
              color: "var(--white)",
              fontSize: "14px",
              fontFamily: "var(--font-body)",
              outline: "none",
            }}
          />
        </div>

        {/* Desktop nav links */}
        <nav aria-label="Primary navigation" className="nav-links-wrap">
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              listStyle: "none",
            }}
          >
            {[
              { label: "Browse", href: "/browse" },
              { label: "Live", href: "/live" },
              { label: "Creators", href: "/creators" },
              { label: "Categories", href: "/categories" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop right actions */}
        <div
          className="nav-right-wrap"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          <a
            href="/upload"
            aria-label="Upload a video"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "transparent",
              border: "1px solid var(--border)",
              color: "var(--muted)",
              borderRadius: "6px",
              fontSize: "13px",
              fontFamily: "var(--font-body)",
              padding: "8px 14px",
              textDecoration: "none",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Upload
          </a>
          <a
            href="/signin"
            style={{
              background: "transparent",
              color: "var(--white)",
              border: "1px solid var(--border)",
              padding: "7px 16px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Sign In
          </a>
          <a
            href="/join"
            style={{
              background: "var(--gold)",
              color: "var(--black)",
              padding: "7px 16px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Start Free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            color: "var(--white)",
            padding: "8px 12px",
            cursor: "pointer",
            fontSize: "18px",
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(8,8,8,0.98)",
            zIndex: 99,
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            overflowY: "auto",
          }}
        >
          {[
            { label: "Browse", href: "/browse" },
            { label: "Live", href: "/live" },
            { label: "Creators", href: "/creators" },
            { label: "Categories", href: "/categories" },
            { label: "Upload", href: "/upload" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "var(--white)",
                textDecoration: "none",
                fontSize: "28px",
                fontFamily: "var(--font-display)",
                letterSpacing: "1px",
                padding: "12px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
            <a
              href="/signin"
              style={{
                flex: 1,
                textAlign: "center",
                background: "transparent",
                color: "var(--white)",
                border: "1px solid var(--border)",
                padding: "12px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign In
            </a>
            <a
              href="/join"
              style={{
                flex: 1,
                textAlign: "center",
                background: "var(--gold)",
                color: "var(--black)",
                padding: "12px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Start Free
            </a>
          </div>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .nav-search-wrap { display: none !important; }
          .nav-links-wrap { display: none !important; }
          .nav-right-wrap { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
