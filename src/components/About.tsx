import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>
        </AnimateIn>

        <div className="max-w-3xl space-y-6 text-cream/85">
          <AnimateIn delay={0.1}>
            <p className="text-lg leading-relaxed">
              I'm a software developer who cares about how systems behave in the real world — 
              under load, under change, and under imperfect conditions.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-lg leading-relaxed">
              I enjoy building applications end-to-end, from designing clean interfaces to 
              structuring APIs and data models that scale. I'm especially interested in 
              backend systems, distributed thinking, and writing code that other developers 
              can understand and trust.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <p className="text-lg leading-relaxed">
              I'm currently focused on sharpening my fundamentals, contributing to real 
              projects, and growing into an engineer who ships reliable software.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
