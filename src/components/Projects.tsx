import AnimateIn from "./AnimateIn";

const projects = [
  {
    title: "Weather Application (Decoupled Architecture)",
    description: `
    A production-style weather application with a Next.js + TypeScript frontend
    and a Laravel backend. Designed to consume external APIs reliably while
    keeping concerns clearly separated.
    `,
    highlights: [
      "Implemented API-driven frontend using OpenWeatherMap",
      "Designed clean separation between UI and backend logic",
      "Handled async states, errors, and user input predictably",
    ],
    tech: ["Next.js", "TypeScript", "Laravel", "REST APIs"],
  },
  {
    title: "CLI Goal Tracker",
    description: `
    A local-first command-line application for tracking personal goals and monthly
    progress. Built with future cloud synchronization in mind.
    `,
    highlights: [
      "Designed a simple but extensible SQLite data model",
      "Built a clear CLI interface with predictable commands",
      "Focused on persistence, correctness, and usability",
    ],
    tech: ["Node.js", "TypeScript", "SQLite"],
  },
  {
    title: "Hotel Management System",
    description: `
    A system for managing reservations, customer records, and reporting.
    The focus was on translating real-world workflows into reliable software.
    `,
    highlights: [
      "Modeled real operational processes into application logic",
      "Designed database-backed features with consistency in mind",
      "Strengthened system design and structured programming skills",
    ],
    tech: ["Java", "Databases", "System Design"],
  },
  {
    title: "Rock–Paper–Scissors Game",
    description: `
    A browser-based game built to reinforce JavaScript fundamentals,
    game logic flow, and clean UI updates.
    `,
    highlights: [
      "Implemented deterministic game logic",
      "Focused on state handling and user feedback",
      "Practiced clean separation between logic and UI",
    ],
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Android Calculator App",
    description: `
    A native Android calculator application built to understand mobile UI,
    event handling, and application lifecycle fundamentals.
    `,
    highlights: [
      "Implemented core arithmetic logic",
      "Worked with Android layouts and user interaction",
      "Learned basics of mobile application structure",
    ],
    tech: ["Java", "Android Studio"],
  },
  {
    title: "Ayoayo Game (Take-Home Assignment)",
    description: `
    A JavaScript implementation of the traditional Ayoayo game,
    adapted from an original Java design.
    `,
    highlights: [
      "Translated object-oriented logic into JavaScript",
      "Implemented turn-based game rules accurately",
      "Improved problem-solving under assignment constraints",
    ],
    tech: ["JavaScript", "Game Logic"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-olive/90">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Selected Projects
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimateIn key={project.title} delay={index * 0.1}>
              <div className="border border-cream/20 rounded-2xl p-6 hover:bg-olive/70 transition">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-cream/80 mb-4 whitespace-pre-line">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-tan mr-2 text-sm">•</span>
                      <span className="text-sm text-cream/70">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm px-3 py-1 bg-tan text-olive rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
