import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    slug: "sermons",
    name: "Sermons",
    icon: "🎙️",
    description: "Sunday messages, expository preaching, and gospel proclamation from churches and pastors worldwide.",
    count: "12,400+",
    theme: "thumb-faith",
  },
  {
    slug: "worship",
    name: "Worship",
    icon: "🎵",
    description: "Live worship sessions, original music, hymns, and praise from worship collectives and artists.",
    count: "8,200+",
    theme: "thumb-documentary",
  },
  {
    slug: "bible-teaching",
    name: "Bible Teaching",
    icon: "📖",
    description: "Verse by verse exposition, topical studies, and deep dives into Scripture for serious students of the Word.",
    count: "21,000+",
    theme: "thumb-education",
  },
  {
    slug: "films",
    name: "Christian Films",
    icon: "🎬",
    description: "Full-length Christian films, short films, and documentaries from independent and established filmmakers.",
    count: "1,800+",
    theme: "thumb-wellbeing",
  },
  {
    slug: "testimonies",
    name: "Testimonies",
    icon: "🕊️",
    description: "Real stories of faith, transformation, healing, and redemption from believers around the world.",
    count: "5,600+",
    theme: "thumb-music",
  },
  {
    slug: "devotionals",
    name: "Devotionals",
    icon: "🙏",
    description: "Daily devotionals, morning reflections, and Scripture-based encouragement for every day of the year.",
    count: "9,100+",
    theme: "thumb-leadership",
  },
  {
    slug: "kids-family",
    name: "Kids & Family",
    icon: "👨‍👩‍👧",
    description: "Bible stories, Christian cartoons, worship for kids, and family-safe entertainment for all ages.",
    count: "4,300+",
    theme: "thumb-editor",
  },
  {
    slug: "conferences",
    name: "Conferences",
    icon: "🏛️",
    description: "Full sessions from Christian conferences, summits, and events — including keynotes and breakout sessions.",
    count: "2,900+",
    theme: "thumb-documentary",
  },
  {
    slug: "apologetics",
    name: "Apologetics",
    icon: "✝️",
    description: "Defending the faith with reason, evidence, and Scripture. Debates, lectures, and worldview content.",
    count: "3,400+",
    theme: "thumb-wellbeing",
  },
  {
    slug: "prayer",
    name: "Prayer",
    icon: "🕯️",
    description: "Guided prayer sessions, intercession, prayer walks, and teaching on the practice of prayer.",
    count: "6,700+",
    theme: "thumb-education",
  },
  {
    slug: "ministries",
    name: "Ministries",
    icon: "⛪",
    description: "Channels from established Christian ministries — including discipleship, outreach, and mission content.",
    count: "7,800+",
    theme: "thumb-faith",
  },
  {
    slug: "live",
    name: "Live Church",
    icon: "📡",
    description: "Live and replay Sunday services, midweek gatherings, prayer nights, and special church events.",
    count: "1,200+",
    theme: "thumb-music",
  },
];

export default function CategoriesPage() {
  return (
    <>
      <Navbar />

      <main className="categories-page">
        <section className="categories-hero" aria-labelledby="categories-heading">
          <div className="container">
            <p className="section-label">Browse by Category</p>

            <h1 id="categories-heading" className="categories-title">
              What are you<br />
              <span className="text-gold">looking for?</span>
            </h1>

            <p className="categories-copy">
              Sermons, worship, Bible teaching, Christian films, testimonies,
              devotionals, kids content, and more — all in one place.
            </p>
          </div>
        </section>

        <section className="page-section">
          <div className="container">
            <ul className="category-directory-grid" role="list">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <a href={`/categories/${cat.slug}`} className="category-directory-card">
                    <div className={`category-directory-art ${cat.theme}`} aria-hidden="true">
                      <span>{cat.icon}</span>
                    </div>

                    <div className="category-directory-info">
                      <div className="category-directory-head">
                        <h2>{cat.name}</h2>
                        <span>{cat.count}</span>
                      </div>

                      <p>{cat.description}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
