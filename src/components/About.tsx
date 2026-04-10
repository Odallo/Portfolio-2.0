import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header with decoration */}
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-6xl font-bold text-[#2d2d2d] mb-4"
                style={{ fontFamily: 'Kalam, cursive' }}
              >
                About Me
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#2d5da1]"
                style={{
                  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                }}
              />
            </div>
          </div>

          {/* Main content card */}
          <div className="bg-white border-4 border-[#2d2d2d] p-8 md:p-12 mb-8 relative"
            style={{
              borderRadius: '255px 35px 225px 35px / 35px 225px 35px 255px',
              boxShadow: '8px 8px 0px 0px #2d2d2d',
              transform: 'rotate(-0.5deg)',
            }}
          >
            {/* Profile Picture Section */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="bg-white border-4 border-[#2d2d2d] p-2"
                  style={{
                    borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                    boxShadow: '4px 4px 0px 0px #2d2d2d',
                    transform: 'rotate(2deg)',
                  }}
                >
                  <Image 
                    src="/WhatsApp Image 2026-01-27 at 23.26.06.jpeg" 
                    alt="Profile" 
                    width={160}
                    height={160}
                    className="rounded-full"
                    style={{
                      borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                    }}
                  />
                </div>
                {/* Thumbtack decoration */}
                <div 
                  className="absolute -top-2 left-1/2 w-6 h-6 bg-red-500 rounded-full border-2 border-[#2d2d2d]"
                  style={{
                    transform: 'translateX(-50%)',
                  }}
                />
              </div>
            </div>
            
            <div className="text-center md:text-left mb-8">
              <p className="text-xl md:text-2xl text-[#2d2d2d] leading-relaxed font-bold mb-4">
                I&apos;m a software developer who cares about how systems behave but also 
                under real usage, changing requirements, and imperfect conditions.
              </p>
              <div className="bg-[#fff9c4] border-4 border-[#2d2d2d] p-4 relative"
                style={{
                  borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                  boxShadow: '4px 4px 0px 0px #2d2d2d',
                  transform: 'rotate(1deg)',
                }}
              >
                <p className="text-lg text-[#2d2d2d] leading-relaxed font-bold">
                  I&apos;ve built systems ranging from web applications to a miniature relational
                  database engine, which helped me deeply understand how software behaves under the hood.
                </p>
                {/* Sticky note decoration */}
                <div className="absolute top-2 right-2 text-xs text-[#2d2d2d] opacity-60">
                  POST-IT
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-4 border-[#2d2d2d] p-6 hover:rotate-1 transition-transform duration-100"
                style={{
                  borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                  boxShadow: '4px 4px 0px 0px #2d2d2d',
                }}
              >
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-4 border-b-4 border-[#ff4d4d] pb-2"
                  style={{ fontFamily: 'Kalam, cursive' }}
                >
                  Design Philosophy
                </h3>
                <p className="text-[#2d2d2d] leading-relaxed text-lg">
                  I enjoy working across the stack, from shaping clean user interfaces to designing 
                  APIs and data models that are easy to reason about. I&apos;m especially interested in 
                  backend systems, application architecture, and writing code that other developers 
                  can confidently build on.
                </p>
              </div>

              <div className="bg-white border-4 border-[#2d2d2d] p-6 hover:-rotate-1 transition-transform duration-100"
                style={{
                  borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                  boxShadow: '4px 4px 0px 0px #2d2d2d',
                }}
              >
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-4 border-b-4 border-[#2d5da1] pb-2"
                  style={{ fontFamily: 'Kalam, cursive' }}
                >
                  Learning Approach
                </h3>
                <p className="text-[#2d2d2d] leading-relaxed text-lg">
                  My approach to learning is hands-on: I build, break things, reflect, and improve. 
                  I value clarity over cleverness, and I&apos;m focused on growing into an engineer who 
                  ships reliable software and contributes meaningfully to a team.
                </p>
              </div>
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
