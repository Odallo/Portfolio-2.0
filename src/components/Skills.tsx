export default function Skills() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Skills & Current Focus
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Technical Skills
            </h3>
            <ul className="space-y-2 text-cream/85">
              <li>JavaScript / TypeScript</li>
              <li>Python & Java</li>
              <li>Next.js & Node.js</li>
              <li>REST APIs & Databases</li>
              <li>Git, Linux, CLI tooling</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              What I'm Actively Improving
            </h3>
            <ul className="space-y-2 text-cream/85">
              <li>Writing clearer, more maintainable code</li>
              <li>Backend architecture and data flow</li>
              <li>Understanding real-world system trade-offs</li>
              <li>Building complete, deployable projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
