import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/kalam/700.css";
import "@fontsource/patrick-hand/400.css";

const SITE_URL = "https://odallo-portfolio.vercel.app"; // 🔁 Replace with your actual Vercel URL

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Odallo Eugine | Software Developer",
    template: "%s | Odallo Eugine",
  },
  description:
    "Software Developer specializing in building reliable, scalable, and human-centered digital solutions using modern web technologies.",
  keywords: [
    "Odallo Eugine",
    "software developer",
    "web developer",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "Kenya developer",
    "portfolio",
  ],
  authors: [{ name: "Odallo Eugine" }],
  creator: "Odallo Eugine",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Odallo Eugine | Software Developer",
    title: "Odallo Eugine | Software Developer",
    description:
      "Software Developer specializing in building reliable, scalable, and human-centered digital solutions using modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odallo Eugine | Software Developer",
    description:
      "Software Developer specializing in building reliable, scalable, and human-centered digital solutions.",
    creator: "@odallo_eugine", // 🔁 Replace with your actual Twitter/X handle if you have one
  },
  alternates: {
    canonical: SITE_URL,
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
        className="antialiased"
        style={{
          backgroundImage: 'radial-gradient(#e5e0d8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          backgroundColor: '#fdfbf7',
          fontFamily: 'Patrick Hand, cursive',
        }}
      >
        {children}
      </body>
    </html>
  );
}
