"use client";

import Card from "./Card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "JavaScript", "HTML/CSS"],
      color: "#5E6AD2"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Laravel", "REST APIs", "GraphQL", "PostgreSQL"],
      color: "#8b92e8"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "VS Code", "Docker", "AWS", "Vercel", "Figma"],
      color: "#6872D9"
    }
  ];

  const projects = [
    { name: "MiniRDBMS", desc: "Lightweight relational database engine" },
    { name: "Weather App", desc: "Full-stack weather application" },
    { name: "CLI Goal Tracker", desc: "Command-line productivity tool" },
    { name: "Hotel Management System", desc: "Complete booking platform" },
    { name: "Ayoayo Game", desc: "Traditional African board game" }
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-[#8A8F98] max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} variant="default" spotlight>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#EDEDEF] mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-[#8A8F98] hover:text-[#EDEDEF] hover:border-white/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* What I've Built */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold gradient-text-accent mb-4">
              What I've Built
            </h3>
            <p className="text-[#8A8F98]">
              Projects that showcase my skills and experience
            </p>
          </div>

          <Card variant="glass">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#5E6AD2] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-[#EDEDEF] mb-1">
                        {project.name}
                      </h4>
                      <p className="text-sm text-[#8A8F98]">{project.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Currently Learning */}
        <Card variant="gradient" className="text-center">
          <div className="p-8">
            <h3 className="text-xl font-semibold text-[#EDEDEF] mb-4">
              Currently Exploring
            </h3>
            <p className="text-[#8A8F98] mb-6 max-w-2xl mx-auto">
              I'm always learning and improving my skills. Currently diving deeper into 
              system design, cloud architecture, and performance optimization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {["Advanced TypeScript", "System Design", "Cloud Architecture", "Performance Optimization"].map((topic, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#5E6AD2]/20 text-[#5E6AD2] rounded-lg text-sm font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
