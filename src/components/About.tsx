import Image from "next/image";
import Card from "./ui/Card";
import { colors, typography } from "../lib/design-tokens";

export default function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <span
              className="text-xs uppercase tracking-widest block mb-4"
              style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
            >
              01 / About
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
            >
              About Me
            </h2>
            <div className="w-16 h-px mb-6" style={{ background: colors.accent }} />
            <p
              className="text-lg max-w-2xl"
              style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
            >
              Passionate software developer crafting digital experiences with clean code and modern technologies
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Profile Card */}
            <Card className="md:col-span-1 p-8">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <Image
                    src="/WhatsApp Image 2026-01-27 at 23.26.06.jpeg"
                    alt="Profile"
                    width={160}
                    height={160}
                    className="grayscale"
                  />
                </div>

                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
                >
                  Odallo Eugine
                </h3>
                <p
                  className="mb-6"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                >
                  Software Developer
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {['React', 'Next.js', 'TypeScript'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs uppercase tracking-wider"
                      style={{
                        fontFamily: typography.body.fontFamily,
                        color: colors.accent,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* About Content */}
            <div className="md:col-span-2 space-y-6">
              <Card className="p-8">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
                >
                  My Journey
                </h3>
                <p
                  className="leading-relaxed mb-4"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted, lineHeight: '1.8' }}
                >
                  I&apos;m a passionate software developer specializing in building reliable, scalable,
                  and human-centered digital solutions. My journey in web development began with
                  a curiosity about how things work on the internet, and has evolved into a
                  career focused on creating exceptional user experiences.
                </p>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted, lineHeight: '1.8' }}
                >
                  I specialize in modern JavaScript frameworks, particularly React and Next.js,
                  and have a strong foundation in both frontend and backend development.
                  My approach combines technical expertise with a keen eye for design and user experience.
                </p>
              </Card>

              <Card className="p-8">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
                >
                  Design Philosophy
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'User-Centered Approach', desc: 'Every line of code serves the user experience' },
                    { title: 'Clean Architecture', desc: 'Maintainable code that scales with your business' },
                    { title: 'Performance First', desc: 'Fast, responsive applications that delight users' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div
                        className="w-5 h-5 flex-shrink-0 mt-1 flex items-center justify-center"
                        style={{ border: `1px solid ${colors.accent}` }}
                      >
                        <div className="w-2 h-2" style={{ background: colors.accent }} />
                      </div>
                      <p style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}>
                        <strong style={{ color: colors.text }}>{item.title}:</strong> {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="text-center p-12">
            <p
              className="text-xl leading-relaxed font-medium mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: typography.body.fontFamily, color: colors.text }}
            >
              I&apos;m currently seeking opportunities where I can learn from experienced developers,
              work on real problems, and continue developing strong engineering fundamentals.
            </p>
            <div className="flex justify-center gap-4">
              {['Frontend', 'Backend', 'Full Stack'].map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 text-sm uppercase tracking-wider"
                  style={{
                    fontFamily: typography.body.fontFamily,
                    color: colors.accent,
                    border: `1px solid ${colors.accent}`,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
