"use client";

import MuxPlayerReact from "@mux/mux-player-react";

type Props = {
  playbackId: string;
  title?: string;
};

export default function MuxPlayer({
  playbackId,
  title,
}: Props) {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "#000",
      }}
    >
      <MuxPlayerReact
        playbackId={playbackId}
        metadata={{
          video_title: title || "WorthCast Video",
        }}
        accentColor="#C9A84C"
        streamType="on-demand"
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          display: "block",
        }}
      />
    </div>
  );
}
