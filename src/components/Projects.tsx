import AnimateIn from "./AnimateIn";
import ProjectCard from "./ui/ProjectCard";

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
    demo: undefined,
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
    demo: undefined,
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
    demo: undefined,
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
    demo: undefined,
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
    demo: undefined,
  },
];

export default function Projects() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-6xl font-bold text-[#2d2d2d] mb-4"
              style={{ fontFamily: 'Kalam, cursive' }}
            >
              Selected Projects
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#ff4d4d]"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimateIn key={project.title} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
