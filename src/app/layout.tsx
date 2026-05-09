import type { Metadata } from "next";
import {
  Bebas_Neue,
  DM_Sans,
  Playfair_Display,
} from "next/font/google";

import AuthProvider from "@/components/AuthProvider";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
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
  metadataBase: new URL("https://worthcast.com"),

  title: {
    default: "WorthCast",
    template: "%s • WorthCast",
  },

  description:
    "Christian streaming for viewers, families, churches, and ministries. Watch sermons, worship, Bible teaching, testimonies, devotionals, and Christian films.",

  keywords: [
    "Christian streaming",
    "sermons",
    "Bible teaching",
    "worship",
    "Christian films",
    "devotionals",
    "WorthCast",
  ],

  openGraph: {
    title: "WorthCast",
    description:
      "Faith-filled streaming for viewers, families, churches, and ministries.",
    url: "https://worthcast.com",
    siteName: "WorthCast",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "WorthCast",
    description:
      "Christian streaming for viewers, families, churches, and ministries.",
  },

  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[
        bebasNeue.variable,
        dmSans.variable,
        playfairDisplay.variable,
      ].join(" ")}
      suppressHydrationWarning
    >
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
