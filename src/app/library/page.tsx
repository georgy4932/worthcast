"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";

type Video = {
  id: string;
  title: string;
  mux_playback_id: string | null;
  duration: number | null;
  view_count: number | null;
  created_at: string;
};

type Tab = "history" | "saved" | "following";

const tabs: { key: Tab; label: string }[] = [
  { key: "history", label: "Watch History" },
  { key: "saved", label: "Saved" },
  { key: "following", label: "Following" },
];

function formatDuration(seconds: number | null) {
  if (!seconds) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function formatViews(count: number | null) {
  if (!count) return "0 views";
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M views`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(0)}K views`;

  return `${count} views`;
}

function getThumbnailUrl(playbackId: string | null) {
  if (!playbackId) return null;
  return `https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`;
}

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<Tab>("history");
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    async function loadLibrary() {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUserEmail(user?.email ?? null);

      const { data, error } = await supabase
        .from("videos")
        .select("id,title,mux_playback_id,duration,view_count,created_at")
        .eq("status", "ready")
        .eq("visibility", "public")
        .order("created_at", { ascending: false })
        .limit(12);

      if (error) {
        console.error("Library fetch error:", error);
        setVideos([]);
      } else {
        setVideos(data || []);
      }

      setLoading(false);
    }

    loadLibrary();
  }, []);

  return (
    <>
      <Navbar />

      <main className="library-page">
        <section className="library-hero">
          <div className="container">
            <p className="section-label">Your Library</p>

            <h1 className="library-title">
              {userEmail ? "Welcome Back" : "Your Library"}
            </h1>

            {userEmail && <p className="library-email">{userEmail}</p>}

            <div className="library-tabs" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`library-tab ${
                    activeTab === tab.key ? "is-active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="library-content">
          <div className="container">
            {activeTab === "history" && (
              <>
                {!userEmail ? (
                  <LibraryPrompt
                    icon="🔐"
                    title="Sign in to see your watch history"
                    description="Your watched videos will appear here once you sign in."
                    primaryHref="/signin"
                    primaryLabel="Sign In"
                    secondaryHref="/join"
                    secondaryLabel="Create Account"
                  />
                ) : loading ? (
                  <LibraryLoading />
                ) : videos.length === 0 ? (
                  <LibraryPrompt
                    icon="📺"
                    title="No watch history yet"
                    description="Videos you watch will appear here."
                    primaryHref="/browse"
                    primaryLabel="Browse Content"
                  />
                ) : (
                  <>
                    <p className="library-count">
                      {videos.length} recently watched video
                      {videos.length === 1 ? "" : "s"}
                    </p>

                    <ul className="library-grid">
                      {videos.map((video) => (
                        <LibraryVideoCard key={video.id} video={video} />
                      ))}
                    </ul>
                  </>
                )}
              </>
            )}

            {activeTab === "saved" && (
              <LibraryPrompt
                icon={userEmail ? "🔖" : "🔐"}
                title={
                  userEmail
                    ? "No saved videos yet"
                    : "Sign in to see your saved videos"
                }
                description={
                  userEmail
                    ? "Tap Save on any video to add it to your library."
                    : "Save videos to watch later and they will appear here."
                }
                primaryHref={userEmail ? "/browse" : "/signin"}
                primaryLabel={userEmail ? "Browse Content" : "Sign In"}
              />
            )}

            {activeTab === "following" && (
              <LibraryPrompt
                icon={userEmail ? "⛪" : "🔐"}
                title={
                  userEmail
                    ? "Not following anyone yet"
                    : "Sign in to see who you follow"
                }
                description={
                  userEmail
                    ? "Follow churches, ministries, and creators to see their latest content."
                    : "Your followed creators will appear here once you sign in."
                }
                primaryHref={userEmail ? "/creators" : "/signin"}
                primaryLabel={userEmail ? "Browse Creators" : "Sign In"}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
}

function LibraryVideoCard({ video }: { video: Video }) {
  const thumbnailUrl = getThumbnailUrl(video.mux_playback_id);

  return (
    <li>
      <Link href={`/watch/${video.id}`} className="library-card">
        <div
          className="library-card-thumb"
          style={
            thumbnailUrl
              ? { backgroundImage: `url(${thumbnailUrl})` }
              : undefined
          }
        >
          {!thumbnailUrl && <span className="library-card-icon">🎬</span>}

          <span className="library-duration">
            {formatDuration(video.duration)}
          </span>
        </div>

        <div className="library-card-body">
          <h2>{video.title}</h2>

          <div className="library-card-meta">
            <span>{formatViews(video.view_count)}</span>
            <span>
              {new Date(video.created_at).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

function LibraryPrompt({
  icon,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  icon: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="library-empty">
      <div className="library-empty-icon">{icon}</div>

      <h2>{title}</h2>
      <p>{description}</p>

      <div className="library-empty-actions">
        <Link href={primaryHref} className="btn btn-primary">
          {primaryLabel}
        </Link>

        {secondaryHref && secondaryLabel && (
          <Link href={secondaryHref} className="btn btn-ghost">
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

function LibraryLoading() {
  return (
    <div className="library-loading">
      <p>Loading your library…</p>
    </div>
  );
}
