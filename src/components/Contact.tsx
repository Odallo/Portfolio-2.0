"use client";

import { useState, useEffect } from "react";
import Input from "./ui/Input";
import Card from "./ui/Card";
import { colors, typography } from "../lib/design-tokens";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('contact');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectType) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget || 'Not specified'}\nTimeline: ${formData.timeline || 'Not specified'}\n\nMessage:\n${formData.message || 'No additional message'}`
    );
    window.location.href = `mailto:odalloeugine@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectStyle = {
    width: '100%',
    background: colors.surface,
    color: colors.text,
    border: `1px solid ${colors.border}`,
    outline: 'none' as const,
    padding: '12px 16px',
    fontSize: '14px',
    fontFamily: typography.body.fontFamily,
    cursor: 'pointer' as const,
    transition: 'border-color 200ms',
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.accent }}
          >
            04
          </span>
          <span className="w-12 h-px" style={{ background: colors.border }} />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            Contact
          </span>
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: typography.display.fontFamily }}
        >
          Let&apos;s Work Together
        </h2>
        <p
          className="text-base mb-16 max-w-xl"
          style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
        >
          Have a project in mind? I&apos;d love to hear about it. I respond within 24 hours.
        </p>

        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Contact Info */}
          <div className="space-y-6">
            <Card hover={false}>
              <h3
                className="text-lg font-bold mb-4"
                style={{ fontFamily: typography.display.fontFamily }}
              >
                Get in touch
              </h3>
              <div className="space-y-4">
                <div>
                  <span
                    className="text-xs uppercase tracking-wider block mb-1"
                    style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                  >
                    Email
                  </span>
                  <a
                    href="mailto:odalloeugine@gmail.com"
                    className="text-sm transition-colors"
                    style={{ fontFamily: typography.body.fontFamily, color: colors.accent }}
                  >
                    odalloeugine@gmail.com
                  </a>
                </div>
                <div>
                  <span
                    className="text-xs uppercase tracking-wider block mb-1"
                    style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                  >
                    Response Time
                  </span>
                  <span
                    className="text-sm"
                    style={{ fontFamily: typography.body.fontFamily, color: colors.text }}
                  >
                    Within 24 hours
                  </span>
                </div>
                <div>
                  <span
                    className="text-xs uppercase tracking-wider block mb-1"
                    style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                  >
                    Available For
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {["Web Development", "E-commerce", "Consulting"].map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 text-xs"
                        style={{
                          fontFamily: typography.mono.fontFamily,
                          color: colors.muted,
                          background: colors.surface,
                          border: `1px solid ${colors.border}`,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex gap-3">
              <a
                href="https://github.com/Odallo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <div
                  className="px-4 py-3 text-center text-sm font-medium transition-all duration-200"
                  style={{
                    fontFamily: typography.body.fontFamily,
                    color: colors.muted,
                    border: `1px solid ${colors.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.accent;
                    e.currentTarget.style.color = colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.color = colors.muted;
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
                  className="px-4 py-3 text-center text-sm font-medium transition-all duration-200"
                  style={{
                    fontFamily: typography.body.fontFamily,
                    color: colors.muted,
                    border: `1px solid ${colors.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.accent;
                    e.currentTarget.style.color = colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.color = colors.muted;
                  }}
                >
                  LinkedIn
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <Card hover={false}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              <Input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
              <div className="space-y-1">
                <label
                  className="text-xs uppercase tracking-wider"
                  style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                >
                  Project Type *
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
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                  >
                    Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={selectStyle}
                  >
                    <option value="">Select</option>
                    <option value="KES 25,000-50,000">KES 25k-50k</option>
                    <option value="KES 50,000-100,000">KES 50k-100k</option>
                    <option value="KES 100,000-200,000">KES 100k-200k</option>
                    <option value="KES 200,000+">KES 200k+</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                  >
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    style={selectStyle}
                  >
                    <option value="">Select</option>
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
                className="w-full py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200 disabled:opacity-50"
                style={{
                  fontFamily: typography.display.fontFamily,
                  background: colors.accent,
                  color: colors.bg,
                }}
              >
                {isSubmitting ? 'Opening Email...' : 'Send Message'}
              </button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
