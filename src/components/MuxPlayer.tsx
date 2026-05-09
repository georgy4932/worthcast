"use client";

type Props = {
  playbackId: string;
  title?: string;
};

export default function MuxPlayer({
  playbackId,
  title,
}: Props) {
  return (
    <div className="mux-player-shell">
      <iframe
        src={`https://player.mux.com/${playbackId}`}
        title={title}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className="mux-player-frame"
      />
    </div>
  );
}
