"use client";

type Props = {
  playbackId: string;
  title?: string;
};

export default function MuxPlayer({ playbackId, title }: Props) {
  const src = `https://stream.mux.com/${playbackId}.m3u8`;

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        background: "#000",
        position: "relative",
      }}
    >
      <video
        controls
        autoPlay={false}
        playsInline
        title={title}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          accentColor: "#C9A84C",
        }}
      >
        <source src={src} type="application/x-mpegURL" />
        Your browser does not support video playback.
      </video>
    </div>
  );
}
