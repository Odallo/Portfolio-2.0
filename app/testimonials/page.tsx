import Testimonials from "../../src/components/Testimonials";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients say about working with Odallo Eugine — and leave your own testimonial.",
  openGraph: {
    title: "Testimonials | Odallo Eugine",
    description: "What clients say about working with Odallo Eugine — and leave your own testimonial.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <main>
      <Navigation />
      <Testimonials />
      <Footer />
    </main>
  );
}
