const categories = [
  { name: "Sermons", icon: "🎙️", href: "/categories/sermons" },
  { name: "Worship", icon: "🎵", href: "/categories/worship" },
  { name: "Bible Teaching", icon: "📖", href: "/categories/bible-teaching" },
  { name: "Christian Films", icon: "🎬", href: "/categories/films" },
  { name: "Testimonies", icon: "🕊️", href: "/categories/testimonies" },
  { name: "Devotionals", icon: "🙏", href: "/categories/devotionals" },
  { name: "Kids & Family", icon: "👨‍👩‍👧", href: "/categories/kids-family" },
  { name: "Conferences", icon: "🏛️", href: "/categories/conferences" },
  { name: "Apologetics", icon: "✝️", href: "/categories/apologetics" },
  { name: "Prayer", icon: "🕯️", href: "/categories/prayer" },
  { name: "Ministries", icon: "⛪", href: "/categories/ministries" },
  { name: "Live Church", icon: "📡", href: "/categories/live" },
];

export default function Categories() {
  return (
    <section
      className="page-section section-bg-dark"
      aria-labelledby="categories-heading"
    >
      <div className="section-header">
        <div>
          <p className="section-label">Browse by Category</p>

          <h2 id="categories-heading" className="section-title">
            What Are You Looking For?
          </h2>
        </div>
      </div>

      <ul className="categories-grid" role="list">
        {categories.map((category) => (
          <li key={category.href}>
            <a
              href={category.href}
              className="category-card"
            >
              <span
                aria-hidden="true"
                className="cat-icon"
              >
                {category.icon}
              </span>

              <span className="cat-name">
                {category.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
