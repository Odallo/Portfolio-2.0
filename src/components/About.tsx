export default function About() {
  return (
    <section className="py-24 relative">
      {/* Vintage-inspired background element */}
      <div className="absolute inset-0 bg-gradient-to-br from-olive/30 via-tan/20 to-cream/10"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Vintage-style header with decorative element */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4 relative">
                <span className="relative z-10">About Me</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-tan/60"></div>
              </h2>
            </div>

          {/* Main content with vintage card styling */}
          <div className="bg-olive/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-tan/30">
            <div className="space-y-8">
              {/* Profile Picture Section */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img 
                    src="/WhatsApp Image 2026-01-27 at 23.26.06.jpeg" 
                    alt="Profile" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-tan/50 shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-tan rounded-full border-2 border-olive/30"></div>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl text-cream/95 leading-relaxed font-light">
                  I'm a software developer who cares about how systems behave but also 
                  under real usage, changing requirements, and imperfect conditions.
                </p>
                <p className="text-lg text-cream/85 leading-relaxed mt-4">
                  I've built systems ranging from web applications to a miniature relational
                  database engine, which helped me deeply understand how software behaves under the hood.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-tan border-b border-tan/40 pb-2">
                    Design Philosophy
                  </h3>
                  <p className="text-cream/85 leading-relaxed">
                    I enjoy working across the stack, from shaping clean user interfaces to designing 
                    APIs and data models that are easy to reason about. I'm especially interested in 
                    backend systems, application architecture, and writing code that other developers 
                    can confidently build on.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-tan border-b border-tan/40 pb-2">
                    Learning Approach
                  </h3>
                  <p className="text-cream/85 leading-relaxed">
                    My approach to learning is hands-on: I build, break things, reflect, and improve. 
                    I value clarity over cleverness, and I'm focused on growing into an engineer who 
                    ships reliable software and contributes meaningfully to a team.
                  </p>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-tan/20">
                <p className="text-lg text-cream/90 leading-relaxed">
                  I'm currently seeking opportunities where I can learn from experienced developers, 
                  work on real problems, and continue developing strong engineering fundamentals.
                </p>
                
                {/* Vintage-style decorative element */}
                <div className="mt-6 flex justify-center">
                  <div className="w-20 h-1 bg-tan/60"></div>
                  <div className="w-2 h-2 bg-tan rounded-full mx-2"></div>
                  <div className="w-20 h-1 bg-tan/60"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Vintage-inspired footer quote */}
          <div className="mt-12 text-center">
            <p className="text-tan/70 italic text-sm">
              "Crafting digital experiences with timeless principles"
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
