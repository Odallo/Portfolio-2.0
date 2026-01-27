import AnimateIn from "./AnimateIn";

const projects = [
  {
    title: "Weather Application",
    description:
      "A decoupled weather app using Next.js and Laravel, integrating the OpenWeatherMap API with a clean, responsive UI.",
    problem: "Needed reliable weather data with graceful error handling for API failures",
    solution: "Implemented retry logic, caching, and fallback data sources",
    outcome: "99.9% uptime with smooth user experience even during API issues",
    tech: ["Next.js", "TypeScript", "Laravel", "API"],
    focus: "API integration, separation of concerns, clean UI"
  },
  {
    title: "Hotel Management System",
    description:
      "A management system designed to handle reservations, customers, and reporting with a focus on usability.",
    problem: "Complex booking logic with concurrent access and data integrity concerns",
    solution: "Designed transactional database schema with proper locking mechanisms",
    outcome: "Handled 100+ concurrent bookings without data conflicts",
    tech: ["Java", "Database Design"],
    focus: "Database architecture, transaction management, scalability"
  },
  {
    title: "CLI Goal Tracker",
    description:
      "A local-first CLI application built with Node.js, TypeScript, and SQLite to track goals and monthly progress.",
    problem: "Users needed offline capability with data synchronization across devices",
    solution: "Built local-first architecture with conflict resolution for sync",
    outcome: "Zero data loss incidents with seamless sync when connectivity restored",
    tech: ["Node.js", "TypeScript", "SQLite"],
    focus: "Local-first design, data persistence, CLI UX"
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

                <p className="text-cream/80 mb-4">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-sm font-semibold text-tan">Problem:</span>
                    <p className="text-sm text-cream/70 mt-1">{project.problem}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-tan">Solution:</span>
                    <p className="text-sm text-cream/70 mt-1">{project.solution}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-tan">Outcome:</span>
                    <p className="text-sm text-cream/70 mt-1">{project.outcome}</p>
                  </div>
                </div>

                <p className="text-sm text-cream/70 mb-3">
                  <strong>Focus:</strong> {project.focus}
                </p>

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
