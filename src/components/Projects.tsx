import Card from "./ui/Card";
import Button from "./ui/Button";

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
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold gradient-text mb-4">
            Selected Projects
          </h2>
          <p className="text-lg text-[#8A8F98] max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for building
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              variant={index === 0 ? 'gradient' : 'default'}
              spotlight
              className="h-full"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-semibold text-[#EDEDEF] mb-3">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#8A8F98] text-sm mb-4 leading-relaxed flex-grow">
                  {project.description.trim()}
                </p>
                
                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#5E6AD2] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#8A8F98]">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-[#8A8F98]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <Button 
                    href={project.github} 
                    variant="secondary" 
                    size="sm"
                    className="flex-1"
                  >
                    GitHub
                  </Button>
                  {project.demo && (
                    <Button 
                      href={project.demo} 
                      variant="primary" 
                      size="sm"
                      className="flex-1"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
