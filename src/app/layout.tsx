import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Playfair_Display } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "WorthCast — Christian Streaming Platform",
  description:
    "WorthCast is the Christian streaming platform for viewers, families, churches, and ministries. Watch sermons, worship, Bible teaching, Christian films, testimonies, and devotionals.",
  openGraph: {
    title: "WorthCast — Christian Streaming Platform",
    description:
      "Faith-filled streaming for viewers, families, churches, and ministries. Sermons, worship, Bible teaching, Christian films, and devotionals — curated to the standard your faith deserves.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
