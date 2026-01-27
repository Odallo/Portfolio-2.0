export default function Contact() {
  return (
    <section className="py-24 bg-olive/90">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="max-w-2xl text-cream/85 mb-8">
          If you're looking for a motivated developer who learns fast,
          communicates clearly, and cares about code quality, I'd be happy
          to connect.
        </p>

        <div className="space-y-3">
          <p>
            📧 Email:{" "}
            <a href="mailto:odaloeugine@gmail.com" className="underline">
              odaloeugine@gmail.com
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a href="https://github.com/Odallo" className="underline">
              https://github.com/Odallo
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/odallo-eugine/" className="underline">
              https://www.linkedin.com/in/odallo-eugine/
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
