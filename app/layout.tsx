import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://odallo-portfolio.vercel.app";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Odallo Eugine — Software Developer",
    template: "%s | Odallo Eugine",
  },
  description: "Software developer building reliable, scalable digital solutions with React, Next.js, TypeScript, and Python. Available for freelance and full-time opportunities.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Odallo Eugine — Software Developer",
    title: "Odallo Eugine — Software Developer",
    description: "Software developer building reliable, scalable digital solutions with React, Next.js, TypeScript, and Python.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Odallo Eugine — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odallo Eugine — Software Developer",
    description: "Software developer building reliable, scalable digital solutions with React, Next.js, TypeScript, and Python.",
    images: [`${siteUrl}/og-image.svg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
        style={{ background: '#0A0A0A', color: '#F5F5F5' }}
      >
        {children}
      </body>
    </html>
  );
}
