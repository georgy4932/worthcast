import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const upcomingEvents = [
  {
    id: "sunday-service-grace-church",
    title: "Sunday Morning Service",
    ministry: "Grace Community Church",
    date: "Sunday, 18 May 2026",
    time: "10:00 AM GMT",
    category: "Church Service",
    avatar: "G",
    avatarClass: "avatar--gold",
  },
  {
    id: "worship-night-elevation",
    title: "Worship Night Live",
    ministry: "Elevation Worship",
    date: "Friday, 16 May 2026",
    time: "7:00 PM GMT",
    category: "Worship",
    avatar: "E",
    avatarClass: "avatar--teal",
  },
  {
    id: "bible-study-wednesday",
    title: "Wednesday Bible Study — Romans 8",
    ministry: "Truth & Life Ministries",
    date: "Wednesday, 14 May 2026",
    time: "6:30 PM GMT",
    category: "Bible Teaching",
    avatar: "T",
    avatarClass: "avatar--green",
  },
  {
    id: "prayer-morning",
    title: "Morning Prayer & Intercession",
    ministry: "Global Prayer Network",
    date: "Daily",
    time: "6:00 AM GMT",
    category: "Prayer",
    avatar: "P",
    avatarClass: "avatar--coral",
  },
];

const recentReplays = [
  {
    id: "replay-1",
    title: "Easter Sunday Service 2026",
    ministry: "Kings Church International",
    duration: "1h 42m",
    viewers: "12.4K",
    theme: "thumb-faith",
  },
  {
    id: "replay-2",
    title: "Conference Session — The Power of the Word",
    ministry: "Faith Conference 2026",
    duration: "58m",
    viewers: "8.1K",
    theme: "thumb-documentary",
  },
  {
    id: "replay-3",
    title: "Live Worship — Spontaneous Set",
    ministry: "Bethel Music",
    duration: "1h 12m",
    viewers: "21K",
    theme: "thumb-education",
  },
];

export default function LivePage() {
  return (
    <>
      <Navbar />

      <main className="live-page">
        <section className="live-hero" aria-labelledby="live-heading">
          <div className="container">
            <div className="live-badge">
              <span className="live-dot" aria-hidden="true" />
              Live Streaming
            </div>

            <h1 id="live-heading" className="live-title">
              Live on<br />
              <span className="text-gold">WorthCast</span>
            </h1>

            <p className="live-copy">
              Watch church services, worship nights, Bible studies, conferences,
              and prayer gatherings live — from ministries and churches around the world.
            </p>
          </div>
        </section>

        <section className="page-section" aria-labelledby="live-now-heading">
          <div className="container">
            <div className="empty-live-card">
              <div className="empty-live-icon" aria-hidden="true">📡</div>
              <h2 id="live-now-heading">No Live Streams Right Now</h2>
              <p>Check back during scheduled service times or browse upcoming events below.</p>
              <a href="/upload" className="btn btn-primary btn-lg">
                Schedule a Live Event
              </a>
            </div>

            <div className="live-section-block">
              <p className="section-label">Coming Soon</p>
              <h2 className="section-title">Upcoming Events</h2>

              <ul className="live-grid" role="list">
                {upcomingEvents.map((event) => (
                  <li key={event.id} className="event-card">
                    <span className={`avatar avatar--md ${event.avatarClass}`} aria-hidden="true">
                      {event.avatar}
                    </span>

                    <div className="event-info">
                      <p className="video-cat">{event.category}</p>
                      <h3>{event.title}</h3>
                      <p>{event.ministry}</p>
                      <span>{event.date} · {event.time}</span>
                    </div>

                    <button type="button" className="btn btn-ghost btn-sm">
                      Remind Me
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="live-section-block">
              <p className="section-label">Watch Again</p>
              <h2 className="section-title">Recent Replays</h2>

              <ul className="replay-grid" role="list">
                {recentReplays.map((replay) => (
                  <li key={replay.id}>
                    <a href={`/watch/${replay.id}`} className="video-card">
                      <div className="video-thumb">
                        <div className={`thumb-bg ${replay.theme}`} aria-hidden="true">
                          <span className="thumb-play">▶</span>
                        </div>

                        <span className="replay-badge">Replay</span>
                        <span className="thumb-duration">{replay.duration}</span>
                      </div>

                      <div className="video-info">
                        <h3 className="video-title">{replay.title}</h3>
                        <p className="video-meta">
                          {replay.ministry} · {replay.viewers} viewers
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
