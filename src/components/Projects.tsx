const projects = [
  {
    title: "Weather Application",
    description:
      "A decoupled weather app using Next.js and Laravel, integrating the OpenWeatherMap API with a clean, responsive UI.",
    tech: ["Next.js", "TypeScript", "Laravel", "API"],
  },
  {
    title: "Hotel Management System",
    description:
      "A management system designed to handle reservations, customers, and reporting with a focus on usability.",
    tech: ["Java", "Database Design"],
  },
  {
    title: "CLI Goal Tracker",
    description:
      "A local-first CLI application built with Node.js, TypeScript, and SQLite to track goals and monthly progress.",
    tech: ["Node.js", "TypeScript", "SQLite"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-olive/90">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-cream/20 rounded-2xl p-6 hover:bg-olive/70 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-cream/80 mb-4">
                {project.description}
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
          ))}
        </div>
      </div>
    </section>
  );
}
