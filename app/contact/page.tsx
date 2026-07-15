import Contact from "../../src/components/Contact";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Odallo Eugine for web development projects, consulting, or collaboration opportunities.",
  openGraph: {
    title: "Contact Odallo Eugine",
    description: "Get in touch with Odallo Eugine for web development projects, consulting, or collaboration opportunities.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <Contact />
      <Footer />
    </main>
  );
}
