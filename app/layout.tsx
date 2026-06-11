import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orixen Digital — Designing Solutions. Creating Impact.",
  description:
    "Orixen Digital crafts world-class websites, study materials, digital menu cards, portfolios, video edits and tech support. Futuristic digital experiences engineered to impress.",
  keywords: [
    "Orixen Digital",
    "web design",
    "websites",
    "digital menu cards",
    "study materials",
    "portfolios",
    "video editing",
    "tech support",
  ],
  openGraph: {
    title: "Orixen Digital — Designing Solutions. Creating Impact.",
    description:
      "World-class websites, digital products and creative services with a futuristic edge.",
    type: "website",
    siteName: "Orixen Digital",
  },
};

export const viewport: Viewport = {
  themeColor: "#030308",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="lenis">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-void noise cursor-none-desktop`}
      >
        {children}
      </body>
    </html>
  );
}
