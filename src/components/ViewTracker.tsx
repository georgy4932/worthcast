"use client";

import { useEffect } from "react";

type Props = {
  videoId: string;
};

export default function ViewTracker({ videoId }: Props) {
  useEffect(() => {
    fetch(`/api/videos/${videoId}/view`, {
      method: "POST",
    }).catch(console.error);
  }, [videoId]);

  return null;
}
