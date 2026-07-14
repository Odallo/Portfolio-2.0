"use client";

import Card from "./Card";
import { colors, shadows, typography, radius } from "../../lib/design-tokens";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "JavaScript", "HTML/CSS"],
    accent: colors.accent,
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Laravel", "REST APIs", "GraphQL", "PostgreSQL"],
    accent: colors['accent-purple'],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "VS Code", "Docker", "AWS", "Vercel", "Figma"],
    accent: colors['accent-teal'],
  },
];

const projects = [
  { name: "MiniRDBMS", desc: "Lightweight relational database engine" },
  { name: "Weather App", desc: "Full-stack weather application" },
  { name: "CLI Goal Tracker", desc: "Command-line productivity tool" },
  { name: "Hotel Management System", desc: "Complete booking platform" },
  { name: "Ayoayo Game", desc: "Traditional African board game" },
];

export default function Skills() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-6 py-2.5 mb-6 backdrop-blur-sm rounded-full"
            style={{
              background: colors.surface,
              boxShadow: shadows.innerHighlight,
              border: `1px solid ${colors['border-default']}`,
            }}
          >
            <span
              className="text-sm font-body font-medium uppercase tracking-wide"
              style={{ color: colors.accent }}
            >
              Expertise
            </span>
          </div>
          <h2
            className={`${typography.h2.size} ${typography.h2.weight} mb-4`}
            style={{ color: colors['foreground-secondary'] }}
          >
            Skills & Expertise
          </h2>
          <p
            className={`${typography.body.size} max-w-2xl mx-auto font-body`}
            style={{ color: colors['foreground-muted'] }}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} variant="default" className="p-6">
              <h3
                className={`text-lg font-display font-bold mb-6`}
                style={{ color: colors['foreground-secondary'] }}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm font-body font-medium rounded-xl transition-all duration-200 hover:scale-105"
                    style={{
                      background: colors.surface,
                      color: colors['foreground-muted'],
                      boxShadow: `0 0 0 1px ${colors['border-default']}`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* What I've Built */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3
              className={`${typography.h3.size} ${typography.h3.weight} mb-4`}
              style={{ color: colors['foreground-secondary'] }}
            >
              What I've Built
            </h3>
            <p className="font-body" style={{ color: colors['foreground-muted'] }}>
              Projects that showcase my skills and experience
            </p>
          </div>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                    style={{
                      background: `rgba(16,185,129,0.15)`,
                      boxShadow: shadows.innerHighlight,
                    }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      style={{ color: colors.success }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1" style={{ color: colors['foreground-secondary'] }}>
                      {project.name}
                    </h4>
                    <p className="text-sm" style={{ color: colors['foreground-muted'] }}>
                      {project.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Currently Learning */}
        <Card variant="gradient" className="text-center">
          <div className="p-8">
            <h3
              className={`${typography.h3.size} ${typography.h3.weight} mb-4`}
              style={{ color: colors['foreground-secondary'] }}
            >
              Currently Exploring
            </h3>
            <p
              className="mb-6 max-w-2xl mx-auto font-body"
              style={{ color: colors['foreground-muted'] }}
            >
              I'm always learning and improving my skills. Currently diving deeper into
              system design, cloud architecture, and performance optimization.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {["Advanced TypeScript", "System Design", "Cloud Architecture", "Performance Optimization"].map(
                (topic, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-body font-medium rounded-xl transition-all duration-200 hover:scale-105"
                    style={{
                      background: colors.surface,
                      color: colors.accent,
                      boxShadow: `0 0 0 1px ${colors['border-accent']}`,
                    }}
                  >
                    {topic}
                  </span>
                )
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}