import About from "../../src/components/About";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Odallo Eugine's background, skills, and passion for building clean, scalable software with React, Next.js, and Python.",
  openGraph: {
    title: "About Odallo Eugine — Software Developer",
    description: "Learn about Odallo Eugine's background, skills, and passion for building clean, scalable software.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <About />
      <Footer />
    </main>
  );
}
