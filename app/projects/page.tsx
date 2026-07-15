import Projects from "../../src/components/Projects";
import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Odallo Eugine including MiniRDBMS, Weather App, CLI Goal Tracker, and Hotel Management System.",
  openGraph: {
    title: "Projects | Odallo Eugine",
    description: "Selected projects by Odallo Eugine including MiniRDBMS, Weather App, CLI Goal Tracker, and Hotel Management System.",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <Navigation />
      <Projects />
      <Footer />
    </main>
  );
}
