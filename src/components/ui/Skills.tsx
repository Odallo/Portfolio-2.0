"use client";

import Card from "./Card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "JavaScript", "HTML/CSS"],
      color: "#6C63FF"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Laravel", "REST APIs", "GraphQL", "PostgreSQL"],
      color: "#8B84FF"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "VS Code", "Docker", "AWS", "Vercel", "Figma"],
      color: "#38B2AC"
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
          <div 
            className="inline-block px-8 py-3 mb-6 rounded-full"
            style={{
              background: '#E0E5EC',
              boxShadow: 'inset 4px 4px 8px rgb(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.4)',
            }}
          >
            <span className="text-sm font-body font-medium text-[#6C63FF] tracking-wider uppercase">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#3D4852] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto font-body">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-display font-bold text-[#3D4852] mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 text-sm font-body font-medium text-[#6B7280] rounded-xl transition-all duration-200 hover:text-[#3D4852]"
                    style={{
                      background: '#E0E5EC',
                      boxShadow: '4px 4px 8px rgb(163,177,198,0.5), -4px -4px 8px rgba(255,255,255,0.4)',
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
            <h3 className="text-2xl md:text-3xl font-display font-bold text-[#3D4852] mb-4">
              What I've Built
            </h3>
            <p className="text-[#6B7280] font-body">
              Projects that showcase my skills and experience
            </p>
          </div>

          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Neumorphic Check */}
                  <div 
                    className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5"
                    style={{
                      background: '#E0E5EC',
                      boxShadow: 'inset 2px 2px 4px rgb(163,177,198,0.5), inset -2px -2px 4px rgba(255,255,255,0.4)',
                    }}
                  >
                    <svg 
                      className="w-full h-full p-1 text-[#6C63FF]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#3D4852] mb-1">
                      {project.name}
                    </h4>
                    <p className="text-sm text-[#6B7280]">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Currently Learning */}
        <Card className="text-center">
          <div className="p-8">
            <h3 className="text-xl font-display font-bold text-[#3D4852] mb-4">
              Currently Exploring
            </h3>
            <p className="text-[#6B7280] mb-6 max-w-2xl mx-auto font-body">
              I'm always learning and improving my skills. Currently diving deeper into 
              system design, cloud architecture, and performance optimization.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {["Advanced TypeScript", "System Design", "Cloud Architecture", "Performance Optimization"].map((topic, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 text-sm font-body font-medium text-[#6C63FF] rounded-xl"
                  style={{
                    background: '#E0E5EC',
                    boxShadow: '4px 4px 8px rgb(163,177,198,0.5), -4px -4px 8px rgba(255,255,255,0.4)',
                  }}
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