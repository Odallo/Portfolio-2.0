import AnimateIn from "./AnimateIn";

const projects = [
  {
    title: "Weather Application",
    description: `
    A decoupled weather application built with a Next.js frontend and a Laravel
    backend. The project focuses on clean separation of concerns, predictable
    data flow, and reliable API integration using the OpenWeatherMap API.
    `,
    highlights: [
      "Designed a clear frontend–backend contract using REST APIs",
      "Handled asynchronous data loading and error states gracefully",
      "Improved understanding of decoupled architecture and API-driven systems",
    ],
    tech: ["Next.js", "TypeScript", "Laravel", "REST APIs"],
  },
  {
    title: "Hotel Management System",
    description: `
    A management system designed to support reservations, customer records,
    and basic reporting. The project emphasized data modeling, system flow,
    and building features around real operational needs.
    `,
    highlights: [
      "Translated real-world processes into system logic",
      "Designed database-backed features with consistency in mind",
      "Strengthened fundamentals in structured application development",
    ],
    tech: ["Java", "Databases", "System Design"],
  },
  {
    title: "CLI Goal Tracker",
    description: `
    A local-first command-line application for tracking personal goals and
    monthly progress. Built to be simple, fast, and future-ready for cloud
    synchronization.
    `,
    highlights: [
      "Implemented persistent storage using SQLite",
      "Focused on clear CLI UX and predictable commands",
      "Reinforced habits around building small but complete tools",
    ],
    tech: ["Node.js", "TypeScript", "SQLite"],
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

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm px-3 py-1 bg-tan text-olive rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
