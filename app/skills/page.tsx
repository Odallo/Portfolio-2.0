import Skills from "../../src/components/ui/Skills";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and tools used by Odallo Eugine: React, Next.js, TypeScript, Python, Node.js, Laravel, and more.",
  openGraph: {
    title: "Skills | Odallo Eugine",
    description: "Technical skills and tools used by Odallo Eugine: React, Next.js, TypeScript, Python, Node.js, Laravel, and more.",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsPage() {
  return (
    <main>
      <Navigation />
      <Skills />
      <Footer />
    </main>
  );
}
