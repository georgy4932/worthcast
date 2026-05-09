type VideoCardProps = {
  href: string;
  title: string;
  category: string;
  author: string;
  views: string;
  duration: string;
  emoji: string;
  theme: string;
  avatar: string;
  avatarClass: string;
  thumbnailUrl?: string | null;
};

export default function VideoCard({
  href,
  title,
  category,
  author,
  views,
  duration,
  emoji,
  theme,
  avatar,
  avatarClass,
  thumbnailUrl,
}: VideoCardProps) {
  return (
    <a href={href} className="video-card">
      <div className="video-thumb">
        {thumbnailUrl ? (
          <div
            className="thumb-bg"
            aria-hidden="true"
            style={{
              background: `url(${thumbnailUrl}) center/cover no-repeat`,
            }}
          />
        ) : (
          <div className={`thumb-bg ${theme}`} aria-hidden="true">
            {emoji}
          </div>
        )}

        <div className="thumb-overlay" aria-hidden="true">
          <div className="thumb-play">▶</div>
        </div>

        <span className="thumb-duration">{duration}</span>
      </div>

      <div className="video-info">
        <p className="video-cat">{category}</p>
        <h3 className="video-title">{title}</h3>

        <div className="video-meta">
          <span className="video-author">
            <span className={`avatar avatar--sm ${avatarClass}`} aria-hidden="true">
              {avatar}
            </span>
            {author}
          </span>
          <span>{views}</span>
        </div>
      </div>
    </a>
  );
}
