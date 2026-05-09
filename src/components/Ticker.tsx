const items = [
  "Sermons",
  "Worship",
  "Bible Teaching",
  "Christian Films",
  "Testimonies",
  "Devotionals",
  "Kids & Family",
  "Conferences",
  "Ministries",
  "Live Church",
  "Apologetics",
  "Prayer",
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="ticker"
    >
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="ticker-item"
          >
            {item}

            <span className="ticker-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
