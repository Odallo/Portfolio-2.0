export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-cream">
          Software Developer
        </h1>

        <p className="mt-6 text-lg text-cream/80">
          I build reliable, scalable, and human-centered digital solutions
          using modern web technologies.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-tan text-olive font-semibold rounded-xl"
          >
            View Projects
          </a>

          <a
            href="public/resume_eugene_odallo_wakho (1).pdf"
            className="px-6 py-3 border border-cream rounded-xl"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
