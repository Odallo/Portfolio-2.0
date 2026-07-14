"use client";

import Card from "./ui/Card";
import Button from "./ui/Button";
import { colors, typography } from "../lib/design-tokens";

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
        <div className="mb-16">
          <span
            className="text-xs uppercase tracking-widest block mb-4"
            style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
          >
            02 / Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
          >
            Selected Projects
          </h2>
          <div className="w-16 h-px mb-6" style={{ background: colors.accent }} />
          <p
            className="text-lg max-w-2xl"
            style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
          >
            A collection of projects that showcase my skills and passion for building
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="p-6 h-full">
              <div className="h-full flex flex-col">
                {/* Project Number */}
                <span
                  className="text-xs uppercase tracking-widest mb-4 block"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                >
                  Project {String(index + 1).padStart(2, '0')}
                </span>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm mb-5 leading-relaxed flex-grow"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                >
                  {project.description.trim()}
                </p>

                {/* Highlights */}
                <div className="p-4 mb-5" style={{ border: `1px solid ${colors.border}` }}>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: colors.textMuted }}>
                        <div
                          className="w-1.5 h-1.5 mt-1.5 flex-shrink-0"
                          style={{ background: colors.accent }}
                        />
                        <span style={{ fontFamily: typography.body.fontFamily }}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs uppercase tracking-wider"
                      style={{
                        fontFamily: typography.body.fontFamily,
                        color: colors.textMuted,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <Button href={project.github} variant="secondary">
                    GitHub
                  </Button>
                  {project.demo && (
                    <Button href={project.demo} variant="primary">
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
