"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import { colors, typography } from "../../lib/design-tokens";

const skillCategories = [
  {
    title: "Frontend",
    icon: "◆",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: "◆",
    skills: ["Node.js", "Python", "Laravel", "REST APIs", "GraphQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: "◆",
    skills: ["Git", "VS Code", "Docker", "AWS", "Vercel", "Figma"],
  },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('skills');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.accent }}
          >
            03
          </span>
          <span className="w-12 h-px" style={{ background: colors.border }} />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            Skills
          </span>
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: typography.display.fontFamily }}
        >
          What I Work With
        </h2>
        <p
          className="text-base mb-16 max-w-xl"
          style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
        >
          Technologies and tools I use regularly to build and ship products.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card>
                <div className="flex items-center gap-3 mb-5">
                  <span style={{ color: colors.accent, fontSize: '8px' }}>{category.icon}</span>
                  <h3
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ fontFamily: typography.display.fontFamily }}
                  >
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm"
                      style={{
                        fontFamily: typography.body.fontFamily,
                        color: colors.muted,
                        background: colors.surface,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Currently learning */}
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.35s' }}
        >
          <Card hover={false}>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: typography.display.fontFamily }}
                >
                  Currently Exploring
                </h3>
                <p
                  className="text-sm"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                >
                  Always learning, always improving. Here&apos;s what I&apos;m focused on right now.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['System Design', 'Cloud Architecture', 'Performance Optimization'].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 text-sm"
                    style={{
                      fontFamily: typography.mono.fontFamily,
                      color: colors.accent,
                      border: `1px solid ${colors.accent}40`,
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
