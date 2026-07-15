import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://odallo-portfolio.vercel.app";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Odallo Eugine — Software Developer",
    description: "Software developer building reliable, scalable digital solutions with React, Next.js, TypeScript, and Python.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body style={{ background: '#0A0A0A', color: '#F5F5F5' }}>
        {children}
      </body>
    </html>
  );
}
