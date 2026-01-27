import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
