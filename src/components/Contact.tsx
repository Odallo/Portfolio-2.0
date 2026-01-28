"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Project Inquiry from Portfolio");
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Message:
${formData.message}
    `);
    window.location.href = `mailto:odaloeugine@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-olive/90">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-cream/85 mb-8">
              Ready to start your project? I respond within 24 hours and offer 
              free consultations to discuss your needs.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:odalloeugine@gmail.com" className="text-cream/80 hover:text-cream">
                  odalloeugine@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Response Time</h3>
                <p className="text-cream/80">Within 24 hours</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Available For</h3>
                <ul className="text-cream/80 space-y-1">
                  <li>• Custom Website Development</li>
                  <li>• Web Application Projects</li>
                  <li>• E-commerce Solutions</li>
                  <li>• Consulting & Code Review</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Odallo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-cream rounded-xl"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/odallo-eugine/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-cream rounded-xl"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-olive/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Quick Quote Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-olive/50 border border-cream/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-tan"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-olive/50 border border-cream/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-tan"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Type *</label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-olive/50 border border-cream/20 rounded-lg text-cream focus:outline-none focus:border-tan"
                >
                  <option value="">Select a service</option>
                  <option value="Custom Website">Custom Website</option>
                  <option value="Web Application">Web Application</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-olive/50 border border-cream/20 rounded-lg text-cream focus:outline-none focus:border-tan"
                  >
                    <option value="">Select budget</option>
                    <option value="KES 25,000-50,000">KES 25,000-50,000</option>
                    <option value="KES 50,000-100,000">KES 50,000-100,000</option>
                    <option value="KES 100,000-200,000">KES 100,000-200,000</option>
                    <option value="KES 200,000+">KES 200,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-olive/50 border border-cream/20 rounded-lg text-cream focus:outline-none focus:border-tan"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="2-4 weeks">2-4 weeks</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-olive/50 border border-cream/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-tan"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-tan text-olive font-semibold rounded-lg hover:bg-cream transition"
              >
                Send Project Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
