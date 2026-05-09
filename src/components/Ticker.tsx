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
      style={{
        background: "var(--gold)",
        padding: "10px 0",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-inner {
          display: flex;
          white-space: nowrap;
          animation: ticker 32s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-inner { animation: none; }
        }
      `}</style>
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              padding: "0 40px",
              fontFamily: "var(--font-display)",
              fontSize: "13px",
              letterSpacing: "2px",
              color: "var(--black)",
            }}
          >
            {item}
            <span
              style={{
                width: "4px",
                height: "4px",
                background: "var(--black)",
                borderRadius: "50%",
                opacity: 0.4,
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
