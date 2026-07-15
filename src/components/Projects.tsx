"use client";

import { useEffect, useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { colors, typography } from "../lib/design-tokens";

const projects = [
  {
    title: "MiniRDBMS",
    subtitle: "PesaPal Junior Dev Challenge 2026",
    description: "A lightweight relational database management system from scratch in Python. Supports SQL-like commands and demonstrates core database engine concepts — parsing, execution, storage, and indexing.",
    highlights: [
      "SQL-like syntax: CREATE, INSERT, SELECT, UPDATE, DELETE, JOIN",
      "JSON-based persistent storage with primary key indexing",
      "Layered architecture: parser → engine → storage → REPL",
      "Interactive CLI and demo Flask web interface",
    ],
    tech: ["Python", "Flask", "Data Structures"],
    github: "https://github.com/Odallo/Pesa-Pal",
  },
  {
    title: "Weather App",
    subtitle: "Decoupled Architecture",
    description: "A production-style weather application with a Next.js + TypeScript frontend and a Laravel backend. Focused on clean separation of concerns and reliable API integration.",
    highlights: [
      "OpenWeatherMap API through a clean REST interface",
      "Async data loading with graceful error handling",
      "Decoupled frontend–backend architecture",
    ],
    tech: ["Next.js", "TypeScript", "Laravel"],
    github: "https://github.com/Odallo",
  },
  {
    title: "CLI Goal Tracker",
    subtitle: "Local-first Productivity",
    description: "A command-line application for tracking goals and monthly progress. Simple, fast, and future cloud-ready.",
    highlights: [
      "Persistent storage using SQLite",
      "Clear and predictable CLI interface",
      "Correctness and usability over complexity",
    ],
    tech: ["Node.js", "TypeScript", "SQLite"],
    github: "https://github.com/Odallo/Personal-Goal-Tracker-2025",
  },
  {
    title: "Hotel Management System",
    subtitle: "Operations Platform",
    description: "A system for managing reservations, customer records, and reporting, built around real-world operational workflows.",
    highlights: [
      "Business processes translated into application logic",
      "Database-backed features with consistency",
      "Structured system design fundamentals",
    ],
    tech: ["PHP", "Laravel", "Databases"],
    github: "https://github.com/Odallo/Management-System",
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    const el = document.getElementById('projects');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.accent }}
          >
            02
          </span>
          <span className="w-12 h-px" style={{ background: colors.border }} />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            Work
          </span>
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: typography.display.fontFamily }}
        >
          Selected Projects
        </h1>
        <p
          className="text-base mb-16 max-w-xl"
          style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
        >
          A selection of projects that showcase problem-solving and technical skills.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card className="group">
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Left: Project info */}
                  <div className="md:col-span-5">
                    <span
                      className="text-xs mb-2 block"
                      style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                    >
                      {project.subtitle}
                    </span>
                    <h3
                      className="text-xl md:text-2xl font-bold mb-3"
                      style={{ fontFamily: typography.display.fontFamily }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm mb-4 leading-relaxed"
                      style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs"
                          style={{
                            fontFamily: typography.mono.fontFamily,
                            color: colors.accent,
                            background: `${colors.accent}10`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Button href={project.github} variant="secondary">
                      View on GitHub →
                    </Button>
                  </div>

                  {/* Right: Highlights */}
                  <div className="md:col-span-7">
                    <div
                      className="p-5 h-full"
                      style={{ background: colors.surface, border: `1px solid ${colors.border}` }}
                    >
                      <span
                        className="text-xs uppercase tracking-wider mb-4 block"
                        style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                      >
                        Key Features
                      </span>
                      <ul className="space-y-3">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="mt-1.5 w-1.5 h-1.5 flex-shrink-0"
                              style={{ background: colors.green }}
                            />
                            <span
                              className="text-sm"
                              style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                            >
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
