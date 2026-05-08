"use client";

import MuxPlayerReact from "@mux/mux-player-react";

type Props = {
  playbackId: string;
  title?: string;
  accentColor?: string;
};

export default function MuxPlayer({ playbackId, title, accentColor = "#C9A84C" }: Props) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        background: "#000",
        position: "relative",
      }}
    >
      <MuxPlayerReact
        playbackId={playbackId}
        metadata={{
          video_title: title,
          player_name: "WorthCast Player",
        }}
        accentColor={accentColor}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
