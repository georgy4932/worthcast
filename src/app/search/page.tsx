"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

type Video = {
  id: string;
  title: string;
  description: string | null;
  mux_playback_id: string | null;
  duration: number | null;
  view_count: number;
  created_at: string;
};

function formatDuration(seconds: number | null) {
  if (!seconds) return null;

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return `${m}:${s.toString().padStart(2, "0")}`;
}

const suggestions = [
  "Sermons on faith",
  "Worship music",
  "Bible teaching",
  "Christian films",
  "Testimonies",
  "Prayer",
  "Devotionals",
  "Kids Bible stories",
  "Apologetics",
  "Romans",
  "John 3:16",
  "Healing",
  "Marriage",
  "Anxiety and faith",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const search = useCallback(async (q: string) => {
    if (!q.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }

    setLoading(true);
    setSearched(true);

    const { data } = await supabase
      .from("videos")
      .select("*")
      .eq("status", "ready")
      .eq("visibility", "public")
      .or(`title.ilike.%${q}%,description.ilike.%${q}%`)
      .order("created_at", { ascending: false })
      .limit(24);

    setResults(data || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length >= 2) {
        search(query);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query, search]);

  return (
    <>
      <Navbar />

      <main className="search-page">
        <section className="search-hero">
          <div className="container">
            <p className="section-label">Search WorthCast</p>

            <div className="search-input-wrap">
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="search-icon"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>

              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sermons, worship, Bible teaching, films…"
                autoFocus
                className="search-input"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="search-clear"
                >
                  ✕
                </button>
              )}
            </div>

            {searched && !loading && (
              <p className="search-stats">
                {results.length > 0
                  ? `${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`
                  : `No results found for "${query}"`}
              </p>
            )}
          </div>
        </section>

        <section className="page-section">
          <div className="container">

            {!query && (
              <>
                <p className="section-label">Popular Searches</p>

                <div className="search-suggestions">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => setQuery(s)}
                      className="search-pill"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </>
            )}

            {loading && (
              <div className="search-empty">
                <p>Searching…</p>
              </div>
            )}

            {searched && !loading && results.length === 0 && (
              <div className="search-empty-card">
                <div className="search-empty-icon">🔍</div>

                <h2>No Results Found</h2>

                <p>
                  Try a different search term or browse by category.
                </p>

                <a href="/categories" className="btn btn-gold">
                  Browse Categories
                </a>
              </div>
            )}

            {!loading && results.length > 0 && (
              <ul className="search-grid" role="list">
                {results.map((video, index) => {
                  const duration = formatDuration(video.duration);

                  const thumb = video.mux_playback_id
                    ? `https://image.mux.com/${video.mux_playback_id}/thumbnail.jpg?time=0`
                    : null;

                  const gradients = [
                    "thumb-faith",
                    "thumb-documentary",
                    "thumb-education",
                    "thumb-wellbeing",
                  ];

                  return (
                    <li key={video.id}>
                      <a
                        href={`/watch/${video.id}`}
                        className="video-card"
                      >
                        <div className="video-thumb">
                          {thumb ? (
                            <div
                              className="thumb-bg"
                              style={{
                                background: `url(${thumb}) center/cover no-repeat`,
                              }}
                            />
                          ) : (
                            <div className={`thumb-bg ${gradients[index % gradients.length]}`}>
                              🎬
                            </div>
                          )}

                          {duration && (
                            <span className="thumb-duration">
                              {duration}
                            </span>
                          )}
                        </div>

                        <div className="video-info">
                          <h3 className="video-title">
                            {video.title}
                          </h3>

                          <div className="video-meta">
                            <span>{video.view_count || 0} views</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
