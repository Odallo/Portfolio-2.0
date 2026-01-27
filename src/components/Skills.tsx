import AnimateIn from "./AnimateIn";

export default function Skills() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Skills & Focus
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimateIn delay={0.1}>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-tan">
                What I'm currently working on:
              </h3>
              <ul className="space-y-3 text-cream/85">
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  Writing cleaner TypeScript with proper type safety
                </li>
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  Understanding backend architecture patterns
                </li>
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  Building production-ready projects with testing
                </li>
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  Learning system design fundamentals
                </li>
              </ul>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-tan">
                Technical toolkit:
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-semibold text-cream/70">Frontend:</span>
                  <p className="text-cream/85">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-cream/70">Backend:</span>
                  <p className="text-cream/85">Node.js, Java, REST APIs, Database Design</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-cream/70">Tools:</span>
                  <p className="text-cream/85">Git, Docker, Testing, CLI Development</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.3}>
          <div className="mt-12 p-6 border border-cream/20 rounded-2xl bg-olive/50">
            <p className="text-cream/90 text-center">
              <strong className="text-tan">Why I'll be valuable to your team:</strong> I learn quickly, 
              ask good questions, and care deeply about writing code that other developers can understand and maintain.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
