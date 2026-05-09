import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const creators = [
  {
    id: "grace-community-church",
    name: "Grace Community Church",
    type: "Church",
    bio: "Weekly sermons, Bible studies, and worship from Grace Community Church — proclaiming the gospel since 1987.",
    avatar: "G",
    avatarClass: "avatar--gold",
    followers: "24.1K",
    videos: 312,
    verified: true,
  },
  {
    id: "elevation-worship",
    name: "Elevation Worship",
    type: "Worship",
    bio: "Original worship music and live sessions from Elevation Church. Helping people become who God created them to be.",
    avatar: "E",
    avatarClass: "avatar--teal",
    followers: "891K",
    videos: 204,
    verified: true,
  },
  {
    id: "truth-life-ministries",
    name: "Truth & Life Ministries",
    type: "Ministry",
    bio: "Expository Bible teaching for the serious student of Scripture. Verse by verse through the Word of God.",
    avatar: "T",
    avatarClass: "avatar--green",
    followers: "142K",
    videos: 876,
    verified: true,
  },
  {
    id: "called-back-films",
    name: "Called Back Films",
    type: "Christian Film",
    bio: "Independent Christian film production bringing stories of faith, redemption, and purpose to the screen.",
    avatar: "C",
    avatarClass: "avatar--coral",
    followers: "18.3K",
    videos: 24,
    verified: false,
  },
  {
    id: "daily-devotional",
    name: "Daily Devotional",
    type: "Devotional",
    bio: "Short daily devotionals to start your morning in the Word. New video every day at 6am.",
    avatar: "D",
    avatarClass: "avatar--gold",
    followers: "67.4K",
    videos: 1240,
    verified: true,
  },
  {
    id: "kids-bible-club",
    name: "Kids Bible Club",
    type: "Kids & Family",
    bio: "Fun, engaging Bible stories and worship songs for children aged 3-12. Safe, trusted, and family-approved.",
    avatar: "K",
    avatarClass: "avatar--amber",
    followers: "203K",
    videos: 418,
    verified: true,
  },
  {
    id: "apologetics-academy",
    name: "Apologetics Academy",
    type: "Apologetics",
    bio: "Equipping Christians to defend the faith with evidence, reason, and Scripture. Debates, lectures, and interviews.",
    avatar: "A",
    avatarClass: "avatar--blue",
    followers: "89.2K",
    videos: 567,
    verified: true,
  },
  {
    id: "global-prayer-network",
    name: "Global Prayer Network",
    type: "Prayer",
    bio: "Uniting believers in prayer across nations. Live prayer sessions, intercession guides, and prayer resources.",
    avatar: "P",
    avatarClass: "avatar--teal",
    followers: "31.7K",
    videos: 892,
    verified: true,
  },
];

const types = [
  "All",
  "Church",
  "Ministry",
  "Worship",
  "Christian Film",
  "Devotional",
  "Kids & Family",
  "Apologetics",
  "Prayer",
];

export default function CreatorsPage() {
  return (
    <>
      <Navbar />

      <main className="creators-page">
        <section className="creators-hero" aria-labelledby="creators-heading">
          <div className="container">
            <p className="section-label">Creator & Ministry Directory</p>

            <h1 id="creators-heading" className="creators-title">
              Creators &<br />
              <span className="text-gold">Ministries</span>
            </h1>

            <p className="creators-copy">
              Discover churches, ministries, worship collectives, Christian filmmakers,
              speakers, and creators sharing their faith on WorthCast.
            </p>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <div className="creator-filters" aria-label="Creator type filters">
              {types.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={type === "All" ? "filter-pill filter-pill--active" : "filter-pill"}
                >
                  {type}
                </button>
              ))}
            </div>

            <ul className="directory-grid" role="list">
              {creators.map((creator) => (
                <li key={creator.id}>
                  <article className="directory-card">
                    <a href={`/creators/${creator.id}`} className="directory-card-link">
                      <span className={`avatar avatar--lg ${creator.avatarClass} directory-avatar`}>
                        {creator.avatar}

                        {creator.verified && (
                          <span className="verified-badge" title="Verified">
                            ✓
                          </span>
                        )}
                      </span>

                      <p className="video-cat">{creator.type}</p>

                      <h2 className="directory-name">{creator.name}</h2>

                      <p className="directory-bio">{creator.bio}</p>

                      <div className="directory-stats">
                        <span>{creator.followers} followers</span>
                        <span>·</span>
                        <span>{creator.videos} videos</span>
                      </div>
                    </a>

                    <button type="button" className="btn btn-ghost btn-sm directory-follow">
                      + Follow
                    </button>
                  </article>
                </li>
              ))}
            </ul>

            <div className="creator-cta-card">
              <h2>Are You a Creator or Ministry?</h2>
              <p>
                Join thousands of churches, ministries, and Christian creators sharing
                their message on WorthCast. Start free — no credit card needed.
              </p>

              <div className="creator-cta-actions">
                <a href="/join" className="btn btn-primary btn-lg">
                  Create Your Channel
                </a>
                <a href="/upload" className="btn btn-ghost btn-lg">
                  Upload a Video
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
