"use client";

import Card from "./Card";
import { colors, typography } from "../../lib/design-tokens";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Laravel", "REST APIs", "GraphQL", "PostgreSQL"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "VS Code", "Docker", "AWS", "Vercel", "Figma"],
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
        <div className="mb-16">
          <span
            className="text-xs uppercase tracking-widest block mb-4"
            style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
          >
            03 / Skills
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
          >
            Skills & Expertise
          </h2>
          <div className="w-16 h-px mb-6" style={{ background: colors.accent }} />
          <p
            className="text-lg max-w-2xl"
            style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <h3
                className="text-lg font-bold mb-6"
                style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm uppercase tracking-wider"
                    style={{
                      fontFamily: typography.body.fontFamily,
                      color: colors.textMuted,
                      border: `1px solid ${colors.border}`,
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
          <div className="mb-12">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
            >
              What I&apos;ve Built
            </h3>
            <p style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}>
              Projects that showcase my skills and experience
            </p>
          </div>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className="w-5 h-5 flex-shrink-0 mt-1 flex items-center justify-center"
                    style={{ border: `1px solid ${colors.accent}` }}
                  >
                    <div className="w-2 h-2" style={{ background: colors.accent }} />
                  </div>
                  <div>
                    <h4
                      className="font-bold mb-1"
                      style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
                    >
                      {project.name}
                    </h4>
                    <p
                      className="text-sm"
                      style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                    >
                      {project.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Currently Learning */}
        <Card className="text-center p-8">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
          >
            Currently Exploring
          </h3>
          <p
            className="mb-6 max-w-2xl mx-auto"
            style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
          >
            I&apos;m always learning and improving my skills. Currently diving deeper into
            system design, cloud architecture, and performance optimization.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {["Advanced TypeScript", "System Design", "Cloud Architecture", "Performance Optimization"].map(
              (topic, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm uppercase tracking-wider"
                  style={{
                    fontFamily: typography.body.fontFamily,
                    color: colors.accent,
                    border: `1px solid ${colors.accent}`,
                  }}
                >
                  {topic}
                </span>
              )
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}
