import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odallo Eugine — Software Developer",
  description: "Portfolio of Odallo Eugine, a software developer building reliable, scalable digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: '#0A0A0A', color: '#F5F5F5' }}>
        {children}
      </body>
    </html>
  );
}
