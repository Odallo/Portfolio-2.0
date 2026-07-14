"use client";

import { useState } from "react";
import Input from "./ui/Input";
import Card from "./ui/Card";
import { colors, typography } from "../lib/design-tokens";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.projectType) {
      alert("Please fill in all required fields (Name, Email, and Project Type).");
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project Type: ${formData.projectType}\n` +
      `Budget: ${formData.budget || 'Not specified'}\n` +
      `Timeline: ${formData.timeline || 'Not specified'}\n\n` +
      `Message:\n${formData.message || 'No additional message'}\n\n` +
      `---\n` +
      `Sent from portfolio website`
    );

    window.location.href = `mailto:odalloeugine@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectStyle = {
    width: '100%',
    background: 'transparent',
    color: colors.text,
    border: `1px solid ${colors.border}`,
    outline: 'none' as const,
    transition: 'border-color 200ms ease',
    cursor: 'pointer' as const,
    fontFamily: typography.body.fontFamily,
    padding: '12px 16px',
    fontSize: '16px',
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span
            className="text-xs uppercase tracking-widest block mb-4"
            style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
          >
            04 / Contact
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
          >
            Get In Touch
          </h2>
          <div className="w-16 h-px mb-6" style={{ background: colors.accent }} />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <Card className="p-8 mb-8">
              <p
                className="mb-8 text-lg leading-relaxed"
                style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
              >
                Ready to start your project? I respond within 24 hours and offer
                free consultations to discuss your needs.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:odalloeugine@gmail.com"
                    className="text-lg transition-colors"
                    style={{ fontFamily: typography.body.fontFamily, color: colors.accent }}
                  >
                    odalloeugine@gmail.com
                  </a>
                </div>

                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
                  >
                    Response Time
                  </h3>
                  <p
                    className="text-lg"
                    style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                  >
                    Within 24 hours
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
                  >
                    Available For
                  </h3>
                  <ul
                    className="space-y-2 text-lg"
                    style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                  >
                    {[
                      "Custom Website Development",
                      "Web Application Projects",
                      "E-commerce Solutions",
                      "Consulting & Code Review"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div
                          className="w-2 h-2 flex-shrink-0"
                          style={{ background: colors.accent }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Odallo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <div
                  className="px-6 py-3 text-center text-base font-medium transition-colors duration-200"
                  style={{
                    fontFamily: typography.body.fontFamily,
                    color: colors.textMuted,
                    border: `1px solid ${colors.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.accent;
                    e.currentTarget.style.color = colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.color = colors.textMuted;
                  }}
                >
                  GitHub
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/odallo-eugine/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <div
                  className="px-6 py-3 text-center text-base font-medium transition-colors duration-200"
                  style={{
                    fontFamily: typography.body.fontFamily,
                    color: colors.textMuted,
                    border: `1px solid ${colors.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.accent;
                    e.currentTarget.style.color = colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.color = colors.textMuted;
                  }}
                >
                  LinkedIn
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h3
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
            >
              Quick Quote Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />

              <Input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />

              <div className="space-y-2">
                <label
                  className="text-sm font-medium ml-1"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                >
                  Project Type <span style={{ color: colors.accent }}>*</span>
                </label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  style={selectStyle}
                >
                  <option value="">Select a service</option>
                  <option value="Custom Website">Custom Website</option>
                  <option value="Web Application">Web Application</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium ml-1"
                    style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                  >
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={selectStyle}
                  >
                    <option value="">Select budget</option>
                    <option value="KES 25,000-50,000">KES 25,000-50,000</option>
                    <option value="KES 50,000-100,000">KES 50,000-100,000</option>
                    <option value="KES 100,000-200,000">KES 100,000-200,000</option>
                    <option value="KES 200,000+">KES 200,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium ml-1"
                    style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                  >
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    style={selectStyle}
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

              <Input
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-medium text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: typography.body.fontFamily,
                  background: colors.accent,
                }}
              >
                {isSubmitting ? 'Opening Email Client...' : 'Send Project Inquiry'}
              </button>
            </form>

            <div className="mt-4 text-sm" style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}>
              <p>Clicking &quot;Send Project Inquiry&quot; will open your default email client with the form details pre-filled.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
