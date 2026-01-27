export default function About() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h2>

        <div className="max-w-3xl space-y-6 text-cream/85">
          <p className="text-lg leading-relaxed">
            I'm a software developer who cares about how systems behave beyond the happy path — 
            under real usage, changing requirements, and imperfect conditions.
          </p>

          <p className="text-lg leading-relaxed">
            I enjoy working across the stack, from shaping clean user interfaces to designing 
            APIs and data models that are easy to reason about. I'm especially interested in 
            backend systems, application architecture, and writing code that other developers 
            can confidently build on.
          </p>

          <p className="text-lg leading-relaxed">
            My approach to learning is hands-on: I build, break things, reflect, and improve. 
            I value clarity over cleverness, and I'm focused on growing into an engineer who 
            ships reliable software and contributes meaningfully to a team.
          </p>

          <p className="text-lg leading-relaxed">
            I'm currently seeking opportunities where I can learn from experienced developers, 
            work on real problems, and continue developing strong engineering fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
}
