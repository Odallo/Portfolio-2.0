export default function TechStack() {
  const frontendSkills = [
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "TailwindCSS", level: "Advanced" },
    { name: "HTML/CSS", level: "Expert" },
    { name: "JavaScript", level: "Expert" },
    { name: "Framer Motion", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "Node.js", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "Laravel", level: "Intermediate" },
    { name: "REST APIs", level: "Advanced" },
    { name: "SQLite", level: "Advanced" },
    { name: "Flask", level: "Intermediate" },
  ];

  const otherSkills = [
    { name: "Git/GitHub", level: "Advanced" },
    { name: "Data Structures", level: "Advanced" },
    { name: "System Design", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "Android Studio", level: "Beginner" },
  ];

  const SkillBar = ({ level }: { level: string }) => {
    const getWidth = () => {
      switch (level) {
        case "Expert": return "100%";
        case "Advanced": return "85%";
        case "Intermediate": return "70%";
        case "Beginner": return "50%";
        default: return "60%";
      }
    };

    const getColor = () => {
      switch (level) {
        case "Expert": return "bg-tan";
        case "Advanced": return "bg-tan/80";
        case "Intermediate": return "bg-tan/60";
        case "Beginner": return "bg-tan/40";
        default: return "bg-tan/50";
      }
    };

    return (
      <div className="w-full bg-olive/30 rounded-full h-2">
        <div 
          className={`${getColor()} h-2 rounded-full transition-all duration-500`}
          style={{ width: getWidth() }}
        />
      </div>
    );
  };

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-olive/20 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend</h3>
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-cream/90">{skill.name}</span>
                    <span className="text-tan text-sm">{skill.level}</span>
                  </div>
                  <SkillBar level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-olive/20 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Backend</h3>
            <div className="space-y-4">
              {backendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-cream/90">{skill.name}</span>
                    <span className="text-tan text-sm">{skill.level}</span>
                  </div>
                  <SkillBar level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-olive/20 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Tools & Other</h3>
            <div className="space-y-4">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-cream/90">{skill.name}</span>
                    <span className="text-tan text-sm">{skill.level}</span>
                  </div>
                  <SkillBar level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-olive/20 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Development Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Next.js", "TypeScript", "Node.js", 
              "Python", "TailwindCSS", "Git", "REST APIs",
              "SQLite", "Laravel", "Framer Motion"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-tan text-olive rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
