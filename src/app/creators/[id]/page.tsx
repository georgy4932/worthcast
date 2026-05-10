import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Creator = {
  name: string;
  type: string;
  bio: string;
  longBio: string;
  avatar: string;
  avatarBg: string;
  followers: string;
  videos: number;
  verified: boolean;
  location?: string;
  founded?: string;
  scripture?: string;
};

type Video = {
  id: string;
  title: string;
  mux_playback_id: string | null;
  duration: number | null;
  view_count: number | null;
};

const creators: Record<string, Creator> = {
  "grace-community-church": {
    name: "Grace Community Church",
    type: "Church",
    bio: "Weekly sermons, Bible studies, and worship from Grace Community Church.",
    longBio:
      "Grace Community Church is a gospel-centered congregation committed to expository preaching, discipleship, and community. Our services, Bible studies, and worship sessions are now available on WorthCast for believers everywhere.",
    avatar: "G",
    avatarBg: "#C9A84C",
    followers: "24.1K",
    videos: 312,
    verified: true,
    location: "United States",
    founded: "1987",
    scripture:
      "Preach the word; be ready in season and out of season. — 2 Timothy 4:2",
  },
  "elevation-worship": {
    name: "Elevation Worship",
    type: "Worship",
    bio: "Original worship music and live sessions.",
    longBio:
      "Elevation Worship creates original music that helps people encounter the presence of God. From live worship nights to studio recordings, their mission is to glorify God and help the Church sing new songs of praise.",
    avatar: "E",
    avatarBg: "#4ECDC4",
    followers: "891K",
    videos: 204,
    verified: true,
    location: "Charlotte, NC",
    scripture: "Sing to the Lord a new song. — Psalm 96:1",
  },
  "called-back-films": {
    name: "Called Back Films",
    type: "Christian Film",
    bio: "Independent Christian films about faith, redemption, and purpose.",
    longBio:
      "Called Back Films is an independent Christian production company dedicated to telling stories that reflect the grace, redemption, and purpose found in Jesus Christ.",
    avatar: "C",
    avatarBg: "#FF6B6B",
    followers: "18.3K",
    videos: 24,
    verified: false,
    location: "United Kingdom",
    scripture:
      "I can do all things through Christ who strengthens me. — Philippians 4:13",
  },
};

const themes = [
  "thumb-faith",
  "thumb-documentary",
  "thumb-education",
  "thumb-wellbeing",
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

async function getCreatorVideos(): Promise<Video[]> {
  const { data, error } = await supabase
    .from("videos")
    .select("id,title,mux_playback_id,duration,view_count")
    .eq("status", "ready")
    .eq("visibility", "public")
    .order("created_at", { ascending: false })
    .limit(12);

  if (error) {
    console.error("Creator videos fetch error:", error);
    return [];
  }

  return data || [];
}

export default async function CreatorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const creator = creators[id];

  if (!creator) {
    notFound();
  }

  const videos = await getCreatorVideos();

  return (
    <>
      <Navbar />

      <main className="creator-profile-page">
        <section
          className="creator-profile-banner"
          style={{
            background: `linear-gradient(135deg, ${creator.avatarBg}22 0%, #080808 100%)`,
          }}
        />

        <section className="creator-profile-header">
          <div className="container creator-profile-header-inner">
            <div className="creator-profile-main">
              <div
                className="creator-profile-avatar"
                style={{ background: creator.avatarBg }}
              >
                {creator.avatar}

                {creator.verified && (
                  <span className="creator-profile-verified">✓</span>
                )}
              </div>

              <div>
                <div className="creator-profile-title-row">
                  <h1>{creator.name}</h1>

                  {creator.verified && (
                    <span className="creator-profile-badge">
                      Verified {creator.type}
                    </span>
                  )}
                </div>

                <p className="creator-profile-meta">
                  {creator.followers} followers · {creator.videos} videos
                  {creator.location ? ` · ${creator.location}` : ""}
                </p>

                <p className="creator-profile-bio">{creator.bio}</p>
              </div>
            </div>

            <button type="button" className="btn btn-primary">
              + Follow
            </button>
          </div>
        </section>

        <section className="creator-profile-content">
          <div className="container">
            <div className="creator-profile-about-grid">
              <div>
                <p className="creator-profile-longbio">{creator.longBio}</p>

                {creator.scripture && (
                  <div className="creator-profile-scripture">
                    <p>{creator.scripture}</p>
                  </div>
                )}
              </div>

              <aside className="creator-profile-about-card">
                <p className="section-label">About</p>

                <CreatorFact label="Type" value={creator.type} />
                <CreatorFact label="Followers" value={creator.followers} />
                <CreatorFact label="Videos" value={`${creator.videos}`} />

                {creator.location && (
                  <CreatorFact label="Location" value={creator.location} />
                )}

                {creator.founded && (
                  <CreatorFact label="Founded" value={creator.founded} />
                )}
              </aside>
            </div>

            <div className="creator-profile-videos-head">
              <h2>Videos</h2>
              <span>
                {videos.length} video{videos.length === 1 ? "" : "s"}
              </span>
            </div>

            {videos.length === 0 ? (
              <div className="creator-profile-empty">
                <p>No videos yet.</p>
              </div>
            ) : (
              <ul className="creator-profile-grid">
                {videos.map((video, index) => {
                  const thumbnailUrl = video.mux_playback_id
                    ? `https://image.mux.com/${video.mux_playback_id}/thumbnail.jpg?time=0`
                    : null;

                  return (
                    <li key={video.id}>
                      <VideoCard
                        href={`/watch/${video.id}`}
                        title={video.title}
                        category={creator.type}
                        author={creator.name}
                        views={formatViews(video.view_count)}
                        duration={formatDuration(video.duration)}
                        emoji="🎬"
                        theme={themes[index % themes.length]}
                        avatar={creator.avatar}
                        avatarClass="avatar--gold"
                        thumbnailUrl={thumbnailUrl}
                      />
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

function CreatorFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="creator-profile-fact">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
