export default function Contact() {
  return (
    <section className="py-24 bg-olive/90">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="max-w-2xl text-cream/85 mb-10">
          If you're looking for a motivated developer who learns fast,
          communicates clearly, and cares about code quality, I'd be glad
          to connect.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:odaloeugine@gmail.com"
            className="px-6 py-3 bg-tan text-olive font-semibold rounded-xl"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Odallo"
            target="_blank"
            className="px-6 py-3 border border-cream rounded-xl"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/odallo-eugine/"
            target="_blank"
            className="px-6 py-3 border border-cream rounded-xl"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
