import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://odallo-portfolio.vercel.app";

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
    creator: "@odallo_eugine",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "g1fllu5m9n9gCJz97112Zg8BPGcg4T-6Ic8eOF8czMM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#E0E5EC]">
        {children}
      </body>
    </html>
  );
}