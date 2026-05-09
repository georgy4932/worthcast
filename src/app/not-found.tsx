import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>

        <p className="not-found-text">
          This page doesn&apos;t exist.
        </p>

        <Link href="/" className="not-found-link">
          ← Back to WorthCast
        </Link>
      </div>
    </main>
  );
}
