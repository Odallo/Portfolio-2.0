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
    default: "Odallo Eugine — Web Developer in Nairobi",
    template: "%s | Odallo Eugine",
  },
  description: "Nairobi web developer building fast, accessible websites and web apps with M-Pesa payments, online registration and admin dashboards. Next.js, TypeScript, Supabase. Available for freelance projects and full-time roles.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Odallo Eugine — Web Developer",
    title: "Odallo Eugine — Web Developer in Nairobi",
    description: "Fast, accessible websites and web apps with M-Pesa payments, online registration and admin dashboards.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Odallo Eugine — web developer in Nairobi, Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odallo Eugine — Web Developer in Nairobi",
    description: "Fast, accessible websites and web apps with M-Pesa payments, online registration and admin dashboards.",
    images: [`${siteUrl}/og-image.png`],
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
