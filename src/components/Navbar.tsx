"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

const navLinks = [
  { label: "Browse", href: "/browse" },
  { label: "Live", href: "/live" },
  { label: "Creators", href: "/creators" },
  { label: "Categories", href: "/categories" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;

    const value = e.currentTarget.value.trim();

    if (value) {
      window.location.href = `/search?q=${encodeURIComponent(value)}`;
    }
  }

  return (
    <>
      <header className="site-header" role="banner">
        <a href="/" className="logo" aria-label="WorthCast — go to homepage">
          <span className="logo-icon" aria-hidden="true" />
          <span className="logo-text">
            Worth<span>Cast</span>
          </span>
        </a>

        <div className="nav-search" role="search">
          <label htmlFor="site-search" className="sr-only">
            Search WorthCast
          </label>

          <svg
            className="nav-search-icon"
            aria-hidden="true"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>

          <input
            id="site-search"
            type="search"
            placeholder="Search videos, creators, topics…"
            autoComplete="off"
            onKeyDown={handleSearch}
          />
        </div>

        <nav className="site-nav" aria-label="Primary navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <a href="/upload" className="btn-upload" aria-label="Upload a video">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Upload
          </a>

          {user ? (
            <>
              <span className="nav-user-email">{user.email}</span>
              <button
                type="button"
                onClick={handleSignOut}
                className="btn btn-ghost btn-sm"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <a href="/signin" className="btn btn-ghost btn-sm">
                Sign In
              </a>
              <a href="/join" className="btn btn-gold btn-sm">
                Start Free
              </a>
            </>
          )}
        </div>

        <button
          type="button"
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-drawer">
          {[...navLinks, { label: "Upload", href: "/upload" }].map((link) => (
            <a key={link.href} href={link.href} className="mobile-drawer-link">
              {link.label}
            </a>
          ))}

          <div className="mobile-drawer-actions">
            {user ? (
              <button
                type="button"
                onClick={handleSignOut}
                className="btn btn-ghost btn-lg"
              >
                Sign Out
              </button>
            ) : (
              <>
                <a href="/signin" className="btn btn-ghost btn-lg">
                  Sign In
                </a>
                <a href="/join" className="btn btn-gold btn-lg">
                  Start Free
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
