"use client";

type Props = {
  playbackId: string;
  title?: string;
};

export default function MuxPlayer({ playbackId, title }: Props) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        background: "#000",
      }}
    >
      <iframe
        src={`https://player.mux.com/${playbackId}`}
        title={title}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
      />
    </div>
  );
}
