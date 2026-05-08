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
    if (!file) { setError("Please select a video file."); return; }
    if (!title.trim()) { setError("Please enter a title."); return; }

    setStatus("requesting");
    setError(null);

    try {
      // Step 1 — Get Mux upload URL
      const res = await fetch("/api/mux/upload", { method: "POST" });
      const { uploadUrl, uploadId } = await res.json();

      if (!uploadUrl) throw new Error("Failed to get upload URL");

      // Step 2 — Upload file directly to Mux
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
          else reject(new Error("Upload failed"));
        });
        xhr.addEventListener("error", () => reject(new Error("Upload failed")));
        xhr.open("PUT", uploadUrl);
        xhr.send(file);
      });

      setStatus("processing");
      console.log("Mux upload ID:", uploadId);

      // Step 3 — Done
      setTimeout(() => setStatus("done"), 2000);

    } catch (err) {
      console.error(err);
      setError("Upload failed. Please try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />
      <main
        style={{
          paddingTop: "68px",
          minHeight: "100vh",
          background: "var(--black)",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "60px 24px",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "48px" }}>
            <p
              style={{
                fontSize: "11px",
                color: "var(--gold)",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              Creator Studio
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "48px",
                letterSpacing: "1px",
                color: "var(--white)",
                marginBottom: "12px",
              }}
            >
              Upload Video
            </h1>
            <p style={{ fontSize: "15px", color: "var(--muted)" }}>
              Share your content with the WorthCast community.
            </p>
          </div>

          {status === "done" ? (
            // Success state
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "48px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  background: "var(--gold-dim)",
                  border: "1px solid var(--gold-border)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: "28px",
                }}
              >
                ✓
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "32px",
                  color: "var(--white)",
                  marginBottom: "12px",
                }}
              >
                Upload Complete
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--muted)",
                  marginBottom: "32px",
                }}
              >
                Your video is being processed by Mux. It will be ready
                to stream shortly.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setFile(null);
                  setTitle("");
                  setDescription("");
                  setProgress(0);
                }}
                style={{
                  background: "var(--gold)",
                  color: "var(--black)",
                  border: "none",
                  borderRadius: "6px",
                  padding: "12px 28px",
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                  cursor: "pointer",
                }}
              >
                Upload Another
              </button>
            </div>
          ) : (
            // Upload form
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "40px",
              }}
            >
              {/* File drop zone */}
              <div
                style={{
                  border: "2px dashed var(--border)",
                  borderRadius: "10px",
                  padding: "48px 24px",
                  textAlign: "center",
                  marginBottom: "32px",
                  background: file ? "rgba(201,168,76,0.04)" : "transparent",
                  borderColor: file ? "var(--gold)" : "var(--border)",
                }}
              >
                {file ? (
                  <div>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "var(--white)",
                        fontWeight: 500,
                        marginBottom: "8px",
                      }}
                    >
                      {file.name}
                    </p>
                    <p style={{ fontSize: "13px", color: "var(--muted)" }}>
                      {(file.size / 1024 / 1024).toFixed(1)} MB
                    </p>
                    <button
                      onClick={() => setFile(null)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--muted)",
                        fontSize: "13px",
                        cursor: "pointer",
                        marginTop: "12px",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <div
                      style={{
                        fontSize: "40px",
                        marginBottom: "16px",
                      }}
                    >
                      🎬
                    </div>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "var(--white)",
                        marginBottom: "8px",
                        fontWeight: 500,
                      }}
                    >
                      Select your video file
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--muted)",
                        marginBottom: "20px",
                      }}
                    >
                      MP4, MOV, MKV — up to 10GB
                    </p>
                    <label
                      htmlFor="video-file"
                      style={{
                        display: "inline-block",
                        background: "var(--gold)",
                        color: "var(--black)",
                        borderRadius: "6px",
                        padding: "10px 24px",
                        fontSize: "14px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Browse Files
                    </label>
                    <input
                      id="video-file"
                      type="file"
                      accept="video/*"
                      onChange={handleFileSelect}
                      style={{ display: "none" }}
                    />
                  </div>
                )}
              </div>

              {/* Title */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="title"
                  style={{
                    display: "block",
                    fontSize: "13px",
                    color: "var(--muted)",
                    marginBottom: "8px",
                    fontWeight: 500,
                  }}
                >
                  Title *
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Give your video a compelling title"
                  style={{
                    width: "100%",
                    background: "var(--dark)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "11px 14px",
                    color: "var(--white)",
                    fontSize: "14px",
                    fontFamily: "var(--font-body)",
                    outline: "none",
                  }}
                />
              </div>

              {/* Description */}
              <div style={{ marginBottom: "32px" }}>
                <label
                  htmlFor="description"
                  style={{
                    display: "block",
                    fontSize: "13px",
                    color: "var(--muted)",
                    marginBottom: "8px",
                    fontWeight: 500,
                  }}
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell viewers what this video is about"
                  rows={4}
                  style={{
                    width: "100%",
                    background: "var(--dark)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "11px 14px",
                    color: "var(--white)",
                    fontSize: "14px",
                    fontFamily: "var(--font-body)",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* Progress bar */}
              {status === "uploading" && (
                <div style={{ marginBottom: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "13px",
                      color: "var(--muted)",
                      marginBottom: "8px",
                    }}
                  >
                    <span>Uploading…</span>
                    <span>{progress}%</span>
                  </div>
                  <div
                    style={{
                      height: "4px",
                      background: "var(--border)",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${progress}%`,
                        background: "var(--gold)",
                        borderRadius: "2px",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </div>
                </div>
              )}

              {status === "processing" && (
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--gold)",
                    marginBottom: "24px",
                  }}
                >
                  ✓ Upload complete — Mux is processing your video…
                </p>
              )}

              {/* Error */}
              {error && (
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--red)",
                    marginBottom: "20px",
                  }}
                >
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                onClick={handleUpload}
                disabled={status !== "idle" && status !== "error"}
                style={{
                  width: "100%",
                  background: "var(--gold)",
                  color: "var(--black)",
                  border: "none",
                  borderRadius: "6px",
                  padding: "14px",
                  fontSize: "15px",
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                  cursor:
                    status !== "idle" && status !== "error"
                      ? "not-allowed"
                      : "pointer",
                  opacity:
                    status !== "idle" && status !== "error" ? 0.7 : 1,
                }}
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
        </div>
      </main>
    </>
  );
}
