import Hero from "../src/components/Hero";
import HomeWork from "../src/components/HomeWork";
import HomeServices from "../src/components/HomeServices";
import Testimonials from "../src/components/Testimonials";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <HomeWork />
      <HomeServices />
      <Testimonials showForm={false} reveal={false} sectionNumber="03" heading="What clients say" />
      <Footer />
    </main>
  );
}
