"use client";

import { useState } from "react";
import Input from "./ui/Input";
import Card from "./ui/Card";
import { colors, shadows, typography } from "../lib/design-tokens";

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
    background: colors['background-subtle'],
    color: colors['foreground-secondary'],
    boxShadow: `inset 0 1px 2px rgba(0,0,0,0.3), 0 0 0 1px ${colors['border-default']}`,
    border: 'none' as const,
    outline: 'none' as const,
    transition: 'all 300ms ease-out',
    cursor: 'pointer' as const,
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-block px-6 py-2.5 mb-6 backdrop-blur-sm rounded-full"
            style={{
              background: colors.surface,
              boxShadow: shadows.innerHighlight,
              border: `1px solid ${colors['border-default']}`,
            }}
          >
            <span
              className="text-sm font-body font-medium uppercase tracking-wide"
              style={{ color: colors.accent }}
            >
              Contact
            </span>
          </div>
          <h2
            className={`${typography.h2.size} ${typography.h2.weight} mb-4`}
            style={{ color: colors['foreground-secondary'] }}
          >
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <Card variant="default" className="p-8 mb-8">
              <p
                className="mb-8 text-lg leading-relaxed font-body"
                style={{ color: colors['foreground-muted'] }}
              >
                Ready to start your project? I respond within 24 hours and offer
                free consultations to discuss your needs.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3
                    className="text-lg font-display font-bold mb-2"
                    style={{ color: colors['foreground-secondary'] }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:odalloeugine@gmail.com"
                    className="text-lg transition-colors font-body"
                    style={{ color: colors.accent }}
                  >
                    odalloeugine@gmail.com
                  </a>
                </div>

                <div>
                  <h3
                    className="text-lg font-display font-bold mb-2"
                    style={{ color: colors['foreground-secondary'] }}
                  >
                    Response Time
                  </h3>
                  <p className="text-lg font-body" style={{ color: colors['foreground-muted'] }}>
                    Within 24 hours
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-display font-bold mb-3"
                    style={{ color: colors['foreground-secondary'] }}
                  >
                    Available For
                  </h3>
                  <ul className="space-y-2 text-lg font-body" style={{ color: colors['foreground-muted'] }}>
                    {[
                      "Custom Website Development",
                      "Web Application Projects",
                      "E-commerce Solutions",
                      "Consulting & Code Review"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: colors.accent }}
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
                  className="px-6 py-3 text-center text-base font-body font-medium rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: colors['background-elevated'],
                    color: colors['foreground-muted'],
                    boxShadow: shadows.card,
                    border: `1px solid ${colors['border-default']}`,
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
                  className="px-6 py-3 text-center text-base font-body font-medium rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: colors['background-elevated'],
                    color: colors['foreground-muted'],
                    boxShadow: shadows.card,
                    border: `1px solid ${colors['border-default']}`,
                  }}
                >
                  LinkedIn
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card variant="default" className="p-8">
            <h3
              className={`${typography.h3.size} ${typography.h3.weight} mb-6`}
              style={{ color: colors['foreground-secondary'] }}
            >
              Quick Quote Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="text"
                name="name"
                label="Name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />

              <Input
                type="email"
                name="email"
                label="Email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />

              <div className="space-y-2">
                <label
                  className="text-sm font-body font-medium ml-1"
                  style={{ color: colors['foreground-muted'] }}
                >
                  Project Type <span style={{ color: colors.accent }}>*</span>
                </label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base rounded-xl outline-none transition-all duration-300 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_0_0_2px_#6366F1]"
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
                    className="text-sm font-body font-medium ml-1"
                    style={{ color: colors['foreground-muted'] }}
                  >
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-base rounded-xl outline-none transition-all duration-300 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_0_0_2px_#6366F1]"
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
                    className="text-sm font-body font-medium ml-1"
                    style={{ color: colors['foreground-muted'] }}
                  >
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-base rounded-xl outline-none transition-all duration-300 focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_0_0_2px_#6366F1]"
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
                type="textarea"
                name="message"
                label="Project Details"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-body font-medium text-white rounded-2xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: colors.accent,
                  boxShadow: shadows.accentGlow,
                }}
              >
                {isSubmitting ? 'Opening Email Client...' : 'Send Project Inquiry'}
              </button>
            </form>

            <div className="mt-4 text-sm" style={{ color: colors['foreground-muted'] }}>
              <p>Clicking &quot;Send Project Inquiry&quot; will open your default email client with the form details pre-filled.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}