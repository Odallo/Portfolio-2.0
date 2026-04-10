export default function Skills() {
  const skills = {
    frontend: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "React/Next.js", level: 80 },
      { name: "TailwindCSS", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 70 },
      { name: "Laravel", level: 65 },
      { name: "REST APIs", level: 80 }
    ],
    tools: [
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Linux/CLI", level: 75 },
      { name: "SQLite/MySQL", level: 70 }
    ]
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-6xl font-bold text-[#2d2d2d] mb-4"
              style={{ fontFamily: 'Kalam, cursive' }}
            >
              Skills & Expertise
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#2d5da1]"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white border-4 border-[#2d2d2d] p-8 hover:rotate-1 transition-transform duration-100 relative"
            style={{
              borderRadius: '255px 35px 225px 35px / 35px 225px 35px 255px',
              boxShadow: '8px 8px 0px 0px #2d2d2d',
              transform: 'rotate(-1deg)',
            }}
          >
            {/* Tape decoration */}
            <div 
              className="absolute top-0 left-1/2 w-24 h-6 bg-[#ff4d4d] opacity-60"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                transform: 'translateX(-50%) translateY(-50%) rotate(-2deg)',
                boxShadow: '2px 2px 0px 0px rgba(45, 45, 45, 0.2)',
              }}
            />
            
            <h3 className="text-2xl font-bold mb-6 text-[#2d2d2d]"
              style={{ fontFamily: 'Kalam, cursive' }}
            >
              Frontend
            </h3>
            
            <div className="space-y-4">
              {skills.frontend.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#2d2d2d] font-bold">{skill.name}</span>
                    <span className="text-[#2d2d2d]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#e5e0d8] h-4 relative"
                    style={{
                      borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                      border: '2px solid #2d2d2d',
                    }}
                  >
                    <div 
                      className="bg-[#ff4d4d] h-full"
                      style={{
                        width: `${skill.level}%`,
                        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white border-4 border-[#2d2d2d] p-8 hover:-rotate-1 transition-transform duration-100 relative"
            style={{
              borderRadius: '255px 35px 225px 35px / 35px 225px 35px 255px',
              boxShadow: '8px 8px 0px 0px #2d2d2d',
              transform: 'rotate(1deg)',
            }}
          >
            {/* Tape decoration */}
            <div 
              className="absolute top-0 left-1/2 w-24 h-6 bg-[#2d5da1] opacity-60"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                transform: 'translateX(-50%) translateY(-50%) rotate(2deg)',
                boxShadow: '2px 2px 0px 0px rgba(45, 45, 45, 0.2)',
              }}
            />
            
            <h3 className="text-2xl font-bold mb-6 text-[#2d2d2d]"
              style={{ fontFamily: 'Kalam, cursive' }}
            >
              Backend
            </h3>
            
            <div className="space-y-4">
              {skills.backend.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#2d2d2d] font-bold">{skill.name}</span>
                    <span className="text-[#2d2d2d]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#e5e0d8] h-4 relative"
                    style={{
                      borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                      border: '2px solid #2d2d2d',
                    }}
                  >
                    <div 
                      className="bg-[#2d5da1] h-full"
                      style={{
                        width: `${skill.level}%`,
                        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Skills */}
          <div className="bg-[#fff9c4] border-4 border-[#2d2d2d] p-8 hover:rotate-1 transition-transform duration-100 relative"
            style={{
              borderRadius: '255px 35px 225px 35px / 35px 225px 35px 255px',
              boxShadow: '8px 8px 0px 0px #2d2d2d',
              transform: 'rotate(-0.5deg)',
            }}
          >
            {/* Sticky note decoration */}
            <div className="absolute top-2 right-2 text-xs text-[#2d2d2d] opacity-60 font-bold">
              TOOLS
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-[#2d2d2d]"
              style={{ fontFamily: 'Kalam, cursive' }}
            >
              Tools & Other
            </h3>
            
            <div className="space-y-4">
              {skills.tools.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#2d2d2d] font-bold">{skill.name}</span>
                    <span className="text-[#2d2d2d]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white h-4 relative"
                    style={{
                      borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                      border: '2px solid #2d2d2d',
                    }}
                  >
                    <div 
                      className="bg-[#2d2d2d] h-full"
                      style={{
                        width: `${skill.level}%`,
                        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Section */}
        <div className="bg-white border-4 border-[#2d2d2d] p-8 mt-12 relative"
          style={{
            borderRadius: '255px 35px 225px 35px / 35px 225px 35px 255px',
            boxShadow: '8px 8px 0px 0px #2d2d2d',
          }}
        >
          {/* Tape decoration */}
          <div 
            className="absolute top-0 left-1/2 w-32 h-8 bg-gray-300 opacity-60"
            style={{
              borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
              transform: 'translateX(-50%) translateY(-50%) rotate(-2deg)',
              boxShadow: '2px 2px 0px 0px rgba(45, 45, 45, 0.2)',
            }}
          />

          <h3 className="text-2xl font-bold mb-6 text-center text-[#2d2d2d]"
            style={{ fontFamily: 'Kalam, cursive' }}
          >
            Currently Learning
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Advanced TypeScript", 
              "System Design", 
              "Cloud Architecture", 
              "Performance Optimization"
            ].map((topic, i) => (
              <span
                key={i}
                className="text-lg px-4 py-2 bg-[#e5e0d8] text-[#2d2d2d] font-bold hover:rotate-1 transition-transform duration-100"
                style={{
                  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                  border: '2px solid #2d2d2d',
                  boxShadow: '2px 2px 0px 0px #2d2d2d',
                }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
