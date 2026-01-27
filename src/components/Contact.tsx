import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section className="py-24 bg-olive/90">
      <div className="max-w-4xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Let's Connect
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="text-center mb-12">
            <p className="text-lg text-cream/90 leading-relaxed">
              If you're looking for a motivated developer who learns fast, 
              asks good questions, and cares about code quality — let's talk.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 bg-tan text-olive font-semibold rounded-xl text-center hover:bg-cream transition-colors"
            >
              Email Me
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cream text-cream font-semibold rounded-xl text-center hover:bg-cream hover:text-olive transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cream text-cream font-semibold rounded-xl text-center hover:bg-cream hover:text-olive transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-sm text-cream/70">
              Open to opportunities and meaningful conversations about building great software.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
