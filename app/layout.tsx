import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Test D Tech — Media Kit",
  description:
    "Official media kit for Test D Tech — tech content creator specializing in reviews, peripherals, and gear. Partner with us.",
  openGraph: {
    title: "Test D Tech — Media Kit",
    description: "Partner with Test D Tech for authentic tech content.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} h-full`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
