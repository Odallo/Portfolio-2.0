import Image from "next/image";
import Card from "./ui/Card";

export default function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold gradient-text mb-4">
              About Me
            </h2>
            <p className="text-lg text-[#8A8F98] max-w-2xl mx-auto">
              Passionate software developer crafting digital experiences with clean code and modern technologies
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Profile Card */}
            <Card variant="glass" spotlight className="md:col-span-1">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-[#5E6AD2]/20 rounded-full blur-xl" />
                  <Image 
                    src="/WhatsApp Image 2026-01-27 at 23.26.06.jpeg" 
                    alt="Profile" 
                    width={160}
                    height={160}
                    className="relative rounded-full border-2 border-white/10"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-[#EDEDEF] mb-2">
                  Odallo Eugine
                </h3>
                <p className="text-[#8A8F98] mb-4">
                  Software Developer
                </p>
                
                <div className="flex justify-center gap-2">
                  <span className="px-3 py-1 bg-[#5E6AD2]/20 text-[#5E6AD2] rounded-full text-xs font-medium">
                    React
                  </span>
                  <span className="px-3 py-1 bg-[#5E6AD2]/20 text-[#5E6AD2] rounded-full text-xs font-medium">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-[#5E6AD2]/20 text-[#5E6AD2] rounded-full text-xs font-medium">
                    TypeScript
                  </span>
                </div>
              </div>
            </Card>

            {/* About Content */}
            <div className="md:col-span-2 space-y-6">
              <Card variant="default" spotlight>
                <h3 className="text-xl font-semibold text-[#EDEDEF] mb-4">
                  My Journey
                </h3>
                <p className="text-[#8A8F98] leading-relaxed mb-4">
                  I'm a passionate software developer specializing in building reliable, scalable, 
                  and human-centered digital solutions. My journey in web development began with 
                  a curiosity about how things work on the internet, and has evolved into a 
                  career focused on creating exceptional user experiences.
                </p>
                <p className="text-[#8A8F98] leading-relaxed">
                  I specialize in modern JavaScript frameworks, particularly React and Next.js, 
                  and have a strong foundation in both frontend and backend development. 
                  My approach combines technical expertise with a keen eye for design and user experience.
                </p>
              </Card>

              <Card variant="default" spotlight>
                <h3 className="text-xl font-semibold text-[#EDEDEF] mb-4">
                  Design Philosophy
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#5E6AD2] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#8A8F98]">
                      <strong className="text-[#EDEDEF]">User-Centered Approach:</strong> Every line of code serves the user experience
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#5E6AD2] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#8A8F98]">
                      <strong className="text-[#EDEDEF]">Clean Architecture:</strong> Maintainable code that scales with your business
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#5E6AD2] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-[#8A8F98]">
                      <strong className="text-[#EDEDEF]">Performance First:</strong> Fast, responsive applications that delight users
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center pt-8 border-t-4 border-dashed border-[#2d2d2d]">
              <p className="text-xl text-[#2d2d2d] leading-relaxed font-bold mb-6">
                I&apos;m currently seeking opportunities where I can learn from experienced developers, 
                work on real problems, and continue developing strong engineering fundamentals.
              </p>
              
              {/* Decorative elements */}
              <div className="flex justify-center gap-4">
                <div className="w-8 h-8 bg-[#ff4d4d] rounded-full animate-bounce"
                  style={{
                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                    boxShadow: '2px 2px 0px 0px #2d2d2d',
                  }}
                />
                <div className="w-8 h-8 bg-[#2d5da1] rounded-full animate-bounce"
                  style={{
                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                    boxShadow: '2px 2px 0px 0px #2d2d2d',
                    animationDelay: '0.5s',
                  }}
                />
                <div className="w-8 h-8 bg-[#e5e0d8] rounded-full animate-bounce"
                  style={{
                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                    boxShadow: '2px 2px 0px 0px #2d2d2d',
                    animationDelay: '1s',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Footer quote card */}
          <div className="bg-white border-4 border-[#2d2d2d] p-6 text-center relative"
            style={{
              borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
              boxShadow: '8px 8px 0px 0px #2d2d2d',
              transform: 'rotate(1deg)',
            }}
          >
            {/* Tape decoration */}
            <div 
              className="absolute top-0 left-1/2 w-24 h-6 bg-gray-300 opacity-60"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                transform: 'translateX(-50%) translateY(-50%) rotate(-2deg)',
                boxShadow: '2px 2px 0px 0px rgba(45, 45, 45, 0.2)',
              }}
            />
            
            <p className="text-2xl text-[#2d2d2d] italic font-bold"
              style={{ fontFamily: 'Kalam, cursive' }}
            >
              &quot;Crafting digital experiences with timeless principles&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
