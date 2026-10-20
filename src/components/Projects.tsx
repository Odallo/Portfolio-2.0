"use client";

import { useEffect, useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import BrowserFrame from "./ui/BrowserFrame";
import { colors, typography } from "../lib/design-tokens";
import { projects } from "../lib/projects";

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
          Real products, shipped and running. Pulse Diagnostics is live with paying
          customers — the rest are builds where I worked through the harder parts of
          the stack: database engines, API design, and operational tooling.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card className="group">
                {/* Screenshot */}
                {project.image && (
                  <div className="mb-8">
                    <BrowserFrame
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      url={project.website}
                      ratio="wide"
                    />
                  </div>
                )}

                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Left: Project info */}
                  <div className="md:col-span-5">
                    <span
                      className="text-xs mb-2 block"
                      style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                    >
                      {project.year} · {project.subtitle}
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

                    <div className="flex flex-wrap gap-3">
                      {project.website ? (
                        <>
                          <Button href={project.website} variant="primary">
                            Visit live site →
                          </Button>
                          <Button href={project.github} variant="secondary">
                            View code
                          </Button>
                        </>
                      ) : (
                        <Button href={project.github} variant="secondary">
                          View on GitHub →
                        </Button>
                      )}
                    </div>
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

        <div className="mt-12">
          <p className="text-sm mb-4" style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}>
            Older experiments and open-source work live on GitHub.
          </p>
          <Button href="https://github.com/Odallo" variant="ghost">
            Browse all repositories →
          </Button>
        </div>
      </div>
    </section>
  );
}
