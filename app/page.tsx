import Hero from "../src/components/Hero";
import Testimonials from "../src/components/Testimonials";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Testimonials />
      <Footer />
    </main>
  );
}
