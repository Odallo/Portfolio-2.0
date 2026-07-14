import Image from "next/image";
import Card from "./ui/Card";

export default function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div 
              className="inline-block px-6 py-2.5 mb-6 backdrop-blur-sm rounded-full"
              style={{
                background: '#0A0A0A',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.08), inset 4px 4px 8px rgba(163,177,198,0.5)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <span className="text-sm font-body font-medium text-[#6366F1] tracking-wider uppercase tracking-wide">
                About Me
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto font-body">
              Passionate software developer crafting digital experiences with clean code and modern technologies
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Profile Card */}
            <Card className="md:col-span-1 p-8">
              <div className="text-center">
                {/* Profile Image */}
                <div className="relative inline-block mb-6">
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: '#0A0A0A',
                      boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 4px 4px 8px rgba(163,177,198,0.4)',
                    }}
                  />
                  <Image
                    src="/WhatsApp Image 2026-01-27 at 23.26.06.jpeg"
                    alt="Profile"
                    width={160}
                    height={160}
                    className="relative rounded-full border-4 border-[#0A0A0A]"
                    style={{
                      boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.2)',
                    }}
                  />
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Odallo Eugine
                </h3>
                <p className="text-[#9CA3AF] mb-6 font-body">
                  Software Developer
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {['React', 'Next.js', 'TypeScript'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 text-xs font-body font-medium text-[#6366F1] rounded-full transition-all duration-300 hover:scale-105"
                      style={{
                        background: '#0A0A0A',
                        boxShadow: '4px 4px 8px rgba(163,177,198,0.4), -4px -4px 8px rgba(255,255,255,0.02)',
                        border: '1px solid rgba(99,102,241,0.2)',
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
              {/* My Journey Card */}
              <Card className="p-8">
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  My Journey
                </h3>
                <p className="text-[#9CA3AF] leading-relaxed mb-4 font-body">
                  I'm a passionate software developer specializing in building reliable, scalable, 
                  and human-centered digital solutions. My journey in web development began with 
                  a curiosity about how things work on the internet, and has evolved into a 
                  career focused on creating exceptional user experiences.
                </p>
                <p className="text-[#9CA3AF] leading-relaxed font-body">
                  I specialize in modern JavaScript frameworks, particularly React and Next.js, 
                  and have a strong foundation in both frontend and backend development. 
                  My approach combines technical expertise with a keen eye for design and user experience.
                </p>
              </Card>

              {/* Design Philosophy Card */}
              <Card className="p-8">
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Design Philosophy
                </h3>
                <div className="space-y-4">
                  {
                    [
                      { title: 'User-Centered Approach', desc: 'Every line of code serves the user experience' },
                      { title: 'Clean Architecture', desc: 'Maintainable code that scales with your business' },
                      { title: 'Performance First', desc: 'Fast, responsive applications that delight users' },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4">
                        {/* Check Icon */}
                        <div 
                          className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5"
                          style={{
                            background: '#0A0A0A',
                            boxShadow: 'inset 2px 2px 4px rgba(163,177,198,0.4), inset -2px -2px 4px rgba(255,255,255,0.02)',
                          }}
                        >
                          <svg 
                            className="w-full h-full p-1" 
                            style={{ color: '#10B981' }}
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-[#9CA3AF] font-body">
                          <strong className="text-white">{item.title}:</strong> {item.desc}
                        </p>
                      </div>
                    ))
                  }
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div 
            className="text-center py-12 rounded-2xl backdrop-blur-sm"
            style={{
              background: '#0A0A0A',
              boxShadow: '0 0 0 1px rgba(99,102,241,0.2), 0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.15)',
              border: '1px solid rgba(99,102,241,0.25)',
            }}
          >
            <p className="text-xl text-white leading-relaxed font-body font-medium mb-8 max-w-2xl mx-auto">
              I'm currently seeking opportunities where I can learn from experienced developers, 
              work on real problems, and continue developing strong engineering fundamentals.
            </p>

            {/* Decorative Elements */}
            <div className="flex justify-center gap-6">
              {['#6366F1', '#14B8A6', '#A855F7'].map((color, i) => (
                <div 
                  key={i}
                  className="w-12 h-12 rounded-full animate-float"
                  style={{
                    background: '#0A0A0A',
                    boxShadow: '4px 4px 8px rgba(163,177,198,0.4), -4px -4px 8px rgba(255,255,255,0.02)',
                    animationDelay: `${i * 0.5}s`,
                  }}
                >
                  <div 
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{
                      boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.2)',
                    }}
                  >
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}