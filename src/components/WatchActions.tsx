"use client";

type Props = {
  title: string;
  shareUrl: string;
};

export default function WatchActions({ title, shareUrl }: Props) {
  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied");
      }
    } catch {
      // User cancelled share
    }
  }

  return (
    <div className="watch-actions">
      <button type="button" className="watch-action-btn">
        Like
      </button>

      <button type="button" className="watch-action-btn">
        Save
      </button>

      <button type="button" className="watch-action-btn" onClick={handleShare}>
        Share
      </button>
    </div>
  );
}
