import AnimateIn from "./AnimateIn";

const projects = [
  {
    title: "MiniRDBMS – PesaPal Junior Dev Challenge 2026",
    description: `
    A lightweight relational database management system implemented from scratch
    using Python. The system supports SQL-like commands and demonstrates core
    database engine concepts such as parsing, execution, storage, and indexing.
    `,
    highlights: [
      "Implemented SQL-like syntax: CREATE, INSERT, SELECT, UPDATE, DELETE, JOIN",
      "Designed JSON-based persistent storage with primary key indexing",
      "Built a layered architecture: parser → engine → storage → REPL",
      "Included an interactive CLI and a demo Flask web interface",
    ],
    tech: ["Python", "Flask", "Data Structures", "System Design"],
    github: "https://github.com/Odallo/Pesa-Pal",
    demo: null,
  },
  {
    title: "Weather Application (Decoupled Architecture)",
    description: `
    A production-style weather application with a Next.js + TypeScript frontend
    and a Laravel backend, focused on clean separation of concerns and reliable
    API integration.
    `,
    highlights: [
      "Consumed OpenWeatherMap API through a clean REST interface",
      "Handled async data loading, errors, and user input gracefully",
      "Applied decoupled frontend–backend architecture principles",
    ],
    tech: ["Next.js", "TypeScript", "Laravel", "REST APIs"],
    github: "https://github.com/Odallo/weather-app",
    demo: null,
  },
  {
    title: "CLI Goal Tracker",
    description: `
    A local-first command-line application for tracking goals and monthly progress,
    designed to be simple, fast, and future cloud-ready.
    `,
    highlights: [
      "Implemented persistent storage using SQLite",
      "Designed a clear and predictable CLI interface",
      "Focused on correctness and usability over complexity",
    ],
    tech: ["Node.js", "TypeScript", "SQLite"],
    github: "https://github.com/Odallo/goaltrack",
    demo: null,
  },
  {
    title: "Hotel Management System",
    description: `
    A system for managing reservations, customer records, and reporting, built
    around real-world operational workflows.
    `,
    highlights: [
      "Translated business processes into application logic",
      "Designed database-backed features with consistency",
      "Strengthened structured system design fundamentals",
    ],
    tech: ["Java", "Databases"],
    github: "https://github.com/Odallo/hotel-management-system",
    demo: null,
  },
  {
    title: "Ayoayo Game (JavaScript)",
    description: `
    A JavaScript implementation of the traditional Ayoayo game, adapted from an
    original Java design as part of a take-home assignment.
    `,
    highlights: [
      "Converted object-oriented game logic to JavaScript",
      "Implemented accurate turn-based rules",
      "Improved problem-solving under assignment constraints",
    ],
    tech: ["JavaScript", "Game Logic"],
    github: "https://github.com/Odallo/ayoayo-game",
    demo: null,
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

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm px-3 py-1 bg-tan text-olive rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-cream rounded-lg text-sm hover:bg-cream hover:text-olive transition"
                    >
                      View Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-tan text-olive rounded-lg text-sm font-semibold"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
