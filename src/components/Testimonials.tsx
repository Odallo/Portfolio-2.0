"use client";

import { useEffect, useState } from "react";
import Card from "./ui/Card";
import { colors, typography } from "../lib/design-tokens";

const testimonials = [
  {
    quote:
      "Odallo built our online store from scratch and it changed how we do business. Customers can now browse our catalogue and order directly, while our team manages everything from a private admin panel. The M-Pesa checkout and order tracking work exactly as promised professional, fast and reliable.",
    name: "Alphonse Otieno",
    role: "Owner, Pulse Diagnostics — Nairobi",
  },
];

export default function Testimonials({
  showForm = true,
  reveal = true,
  sectionNumber = "05",
  heading = "What Clients Say",
}: {
  showForm?: boolean;
  reveal?: boolean;
  sectionNumber?: string;
  heading?: string;
} = {}) {
  const [visible, setVisible] = useState(!reveal);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "true") {
      window.history.replaceState({}, "", "/testimonials");
      setTimeout(() => setSubmitted(true), 0);
    }
  }, []);

  useEffect(() => {
    if (!reveal) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById("testimonials");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [reveal]);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: colors.surface,
    color: colors.text,
    border: `1px solid ${colors.border}`,
    outline: "none",
    fontSize: "16px",
    fontFamily: typography.body.fontFamily,
    transition: "border-color 0.2s",
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.accent }}
          >
            {sectionNumber}
          </span>
          <span className="w-12 h-px" style={{ background: colors.border }} />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            Testimonials
          </span>
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: typography.display.fontFamily }}
        >
          {heading}
        </h1>
        <p
          className="text-base mb-16 max-w-xl"
          style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
        >
          Real feedback from the people I have built for. I keep every project
          honest, on time and built to last here is what that looks like from
          the other side.
        </p>

        <div className="grid gap-6 max-w-3xl">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full flex flex-col">
                <div className="flex items-start gap-3 mb-6">
                  <span
                    className="text-3xl leading-none"
                    style={{ color: colors.accent, fontFamily: typography.display.fontFamily }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="text-base leading-relaxed"
                    style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                  >
                    {item.quote}
                  </p>
                </div>

                <div className="mt-auto pt-6 flex items-center gap-4">
                  <div
                    className="w-11 h-11 flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      fontFamily: typography.display.fontFamily,
                      background: `${colors.accent}15`,
                      color: colors.accent,
                      border: `1px solid ${colors.accent}30`,
                    }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ fontFamily: typography.body.fontFamily, color: colors.text }}
                    >
                      {item.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                    >
                      {item.role}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Write a testimonial */}
        {showForm && (
        <Card className="mt-16">
          <div className="max-w-2xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ fontFamily: typography.display.fontFamily }}
            >
              Worked with me? Leave a testimonial
            </h2>
            <p
              className="text-sm mb-8"
              style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
            >
              Share your experience and it may appear here. Submissions are
              reviewed before they are published.
            </p>

            {submitted ? (
              <div className="text-center py-10">
                <span className="text-4xl block mb-4" style={{ color: colors.green }}>✓</span>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: typography.display.fontFamily }}
                >
                  Thank you!
                </h3>
                <p
                  className="text-sm"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                >
                  Your testimonial has been received and will be reviewed shortly.
                </p>
              </div>
            ) : (
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="access_key" value="579158ed-1c67-41cf-a05a-90581cbb8e95" />
                <input type="hidden" name="subject" value="New Testimonial Submission" />
                <input type="hidden" name="from_name" value="Odallo Eugine Portfolio" />
                <input type="hidden" name="redirect" value="https://odallo-portfolio.vercel.app/testimonials?submitted=true" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label
                      htmlFor="t-name"
                      className="text-xs uppercase tracking-wider"
                      style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                    >
                      Name *
                    </label>
                    <input type="text" id="t-name" name="name" required placeholder="Your name" style={inputStyle} />
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="t-role"
                      className="text-xs uppercase tracking-wider"
                      style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                    >
                      Role / Organisation
                    </label>
                    <input type="text" id="t-role" name="role" placeholder="e.g. Owner, Pulse Diagnostics" style={inputStyle} />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="t-project"
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                  >
                    Project / Company
                  </label>
                  <input type="text" id="t-project" name="project" placeholder="What did we work on together?" style={inputStyle} />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="t-message"
                    className="text-xs uppercase tracking-wider"
                    style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                  >
                    Testimonial *
                  </label>
                  <textarea
                    id="t-message"
                    name="message"
                    required
                    placeholder="Tell others about your experience..."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" as const }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200"
                  style={{ fontFamily: typography.display.fontFamily, background: colors.accent, color: colors.bg }}
                >
                  Submit Testimonial
                </button>
              </form>
            )}
          </div>
        </Card>
        )}
      </div>
    </section>
  );
}
