"use client";

import { useState, useEffect } from "react";
import Card from "./ui/Card";
import { colors, typography } from "../lib/design-tokens";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "true") {
      window.history.replaceState({}, "", "/contact");
      setTimeout(() => setSubmitted(true), 0);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById('contact');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

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

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: colors.surface,
    color: colors.text,
    border: `1px solid ${colors.border}`,
    outline: 'none',
    fontSize: '16px',
    fontFamily: typography.body.fontFamily,
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
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

        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: typography.display.fontFamily }}
        >
          Let&apos;s Work Together
        </h1>
        <p
          className="text-base mb-16 max-w-xl"
          style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
        >
          Have a project in mind? Tell me about it. Whether you need a custom website,
          a web application, or an e-commerce solution, I can help bring your vision to
          life. I respond within 24 hours with a detailed proposal.
        </p>

        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-6">
            <Card>
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
              <a href="https://github.com/Odallo" target="_blank" rel="noopener noreferrer" className="flex-1">
                <div
                  className="px-4 py-3 text-center text-sm font-medium transition-all duration-200"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.muted, border: `1px solid ${colors.border}` }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.color = colors.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.muted; }}
                >
                  GitHub
                </div>
              </a>
              <a href="https://www.linkedin.com/in/odallo-eugine/" target="_blank" rel="noopener noreferrer" className="flex-1">
                <div
                  className="px-4 py-3 text-center text-sm font-medium transition-all duration-200"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.muted, border: `1px solid ${colors.border}` }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.color = colors.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.muted; }}
                >
                  LinkedIn
                </div>
              </a>
            </div>
          </div>

          <Card>
            {submitted ? (
              <div className="text-center py-12">
                <span className="text-4xl block mb-4" style={{ color: colors.green }}>✓</span>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: typography.display.fontFamily }}>
                  Message Sent!
                </h3>
                <p className="text-sm mb-6" style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm underline transition-colors duration-200"
                  style={{ fontFamily: typography.mono.fontFamily, color: colors.accent }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="access_key" value="579158ed-1c67-41cf-a05a-90581cbb8e95" />
                <input type="hidden" name="subject" value="New Contact Message from Portfolio" />
                <input type="hidden" name="from_name" value="Odallo Eugine Portfolio" />
                <input type="hidden" name="redirect" value="https://odallo-portfolio.vercel.app/contact?submitted=true" />

                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider" style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}>
                    Name *
                  </label>
                  <input type="text" id="name" name="name" required placeholder="Your name" style={inputStyle} />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider" style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}>
                    Email *
                  </label>
                  <input type="email" id="email" name="email" required placeholder="your@email.com" style={inputStyle} />
                </div>
                <div className="space-y-1">
                  <label htmlFor="projectType" className="text-xs uppercase tracking-wider" style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}>
                    Project Type *
                  </label>
                  <select id="projectType" name="projectType" required style={selectStyle}>
                    <option value="">Select a service</option>
                    <option value="Custom Website">Custom Website</option>
                    <option value="Web Application">Web Application</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="budget" className="text-xs uppercase tracking-wider" style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}>
                      Budget
                    </label>
                    <select id="budget" name="budget" style={selectStyle}>
                      <option value="">Select</option>
                      <option value="KES 45,000-55,000">KES 45k-55k</option>
                      <option value="KES 85,000-130,000">KES 85k-130k</option>
                      <option value="KES 150,000-250,000">KES 150k-250k</option>
                      <option value="KES 250,000+">KES 250k+</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="timeline" className="text-xs uppercase tracking-wider" style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}>
                      Timeline
                    </label>
                    <select id="timeline" name="timeline" style={selectStyle}>
                      <option value="">Select</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="2-4 weeks">2-4 weeks</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs uppercase tracking-wider" style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}>
                    Message
                  </label>
                  <textarea id="message" name="message" placeholder="Tell me about your project..." rows={4} style={{ ...inputStyle, resize: 'vertical' as const }} />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200"
                  style={{ fontFamily: typography.display.fontFamily, background: colors.accent, color: colors.bg }}
                >
                  Send Message
                </button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
