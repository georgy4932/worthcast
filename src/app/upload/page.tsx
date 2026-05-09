"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

type UploadStatus =
  | "idle"
  | "requesting"
  | "uploading"
  | "processing"
  | "done"
  | "error";

export default function UploadPage() {
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isBusy =
    status === "requesting" ||
    status === "uploading" ||
    status === "processing";

  function resetForm() {
    setStatus("idle");
    setProgress(0);
    setTitle("");
    setDescription("");
    setFile(null);
    setError(null);
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (!selected.type.startsWith("video/")) {
      setError("Please select a video file.");
      return;
    }

    setFile(selected);
    setError(null);
  }

  async function handleUpload() {
    if (!file) {
      setError("Please select a video file.");
      return;
    }

    if (!title.trim()) {
      setError("Please enter a title.");
      return;
    }

    setStatus("requesting");
    setError(null);
    setProgress(0);

    try {
      const res = await fetch("/api/mux/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim() || null,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create upload URL.");
      }

      const { uploadUrl } = await res.json();

      if (!uploadUrl) {
        throw new Error("No upload URL returned.");
      }

      setStatus("uploading");

      await new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener("progress", (e) => {
          if (e.lengthComputable) {
            setProgress(Math.round((e.loaded / e.total) * 100));
          }
        });

        xhr.addEventListener("load", () => {
          if (xhr.status >= 200 && xhr.status < 300) resolve();
          else reject(new Error("Upload failed."));
        });

        xhr.addEventListener("error", () => {
          reject(new Error("Upload failed."));
        });

        xhr.open("PUT", uploadUrl);
        xhr.send(file);
      });

      setProgress(100);
      setStatus("processing");
    } catch (err) {
      console.error("Upload error:", err);
      setError("Upload failed. Please try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />

      <main className="upload-page">
        <section className="upload-shell">
          <div className="upload-header">
            <p className="section-label">Creator Studio</p>
            <h1 className="upload-title">Upload Video</h1>
            <p className="upload-copy">
              Share your sermons, worship, teaching, films, and testimonies with
              the WorthCast community.
            </p>
          </div>

          {status === "done" ? (
            <div className="upload-card upload-success">
              <div className="upload-success-icon">✓</div>
              <h2>Upload Complete</h2>
              <p>
                Your video is being processed by Mux. It will appear once the
                webhook saves it to WorthCast.
              </p>
              <button className="btn btn-primary" onClick={resetForm}>
                Upload Another
              </button>
            </div>
          ) : (
            <div className="upload-card">
              <div className={`upload-dropzone ${file ? "has-file" : ""}`}>
                {file ? (
                  <>
                    <p className="upload-file-name">{file.name}</p>
                    <p className="upload-file-size">
                      {(file.size / 1024 / 1024).toFixed(1)} MB
                    </p>
                    <button
                      type="button"
                      className="upload-remove"
                      onClick={() => setFile(null)}
                      disabled={isBusy}
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  <>
                    <div className="upload-drop-icon">🎬</div>
                    <p className="upload-drop-title">Select your video file</p>
                    <p className="upload-drop-copy">MP4, MOV, MKV — up to 10GB</p>

                    <label htmlFor="video-file" className="btn btn-primary">
                      Browse Files
                    </label>

                    <input
                      id="video-file"
                      type="file"
                      accept="video/*"
                      onChange={handleFileSelect}
                      hidden
                    />
                  </>
                )}
              </div>

              <label className="upload-field" htmlFor="title">
                <span>Title *</span>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Give your video a compelling title"
                  disabled={isBusy}
                />
              </label>

              <label className="upload-field" htmlFor="description">
                <span>Description</span>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell viewers what this video is about"
                  rows={4}
                  disabled={isBusy}
                />
              </label>

              {status === "uploading" && (
                <div className="upload-progress">
                  <div className="upload-progress-head">
                    <span>Uploading…</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="upload-progress-track">
                    <div
                      className="upload-progress-bar"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {status === "processing" && (
                <p className="upload-message success">
                  ✓ Upload complete — Mux is processing your video. It will show
                  on WorthCast after the webhook finishes.
                </p>
              )}

              {error && <p className="upload-message error">{error}</p>}

              <button
                type="button"
                className="btn btn-primary upload-submit"
                onClick={handleUpload}
                disabled={isBusy}
              >
                {status === "requesting"
                  ? "Preparing upload…"
                  : status === "uploading"
                    ? `Uploading ${progress}%`
                    : status === "processing"
                      ? "Processing…"
                      : "Upload Video"}
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
