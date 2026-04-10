import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/kalam/700.css";
import "@fontsource/patrick-hand/400.css";

export const metadata: Metadata = {
  title: "Odallo Eugine",
  description: "Software Developer - Building reliable, scalable, and human-centered digital solutions",
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
