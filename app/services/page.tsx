"use client";

import { useEffect, useRef, useState } from "react";
import Navigation from "../../src/components/Navigation";
import Card from "../../src/components/ui/Card";
import Button from "../../src/components/ui/Button";
import Footer from "../../src/components/Footer";
import { colors, typography } from "../../src/lib/design-tokens";

const services = [
  {
    title: "Starter Website",
    description: "Professional, responsive websites for small businesses and personal brands.",
    features: [
      "Up to 5 pages",
      "Responsive Design",
      "Contact Form",
      "Basic SEO",
      "2 Revision Rounds",
      "1 Month Support"
    ],
    price: "KES 25,000",
    priceNote: "Small business · 2–3 weeks",
    popular: false
  },
  {
    title: "Business Website",
    description: "Advanced websites with custom admin dashboards, user management, and database integration for growing businesses.",
    features: [
      "Up to 10 pages",
      "Admin Dashboard",
      "User Authentication",
      "Database Integration",
      "3 Revision Rounds",
      "2 Months Support"
    ],
    price: "KES 50,000",
    priceNote: "Most popular for growing teams",
    popular: true
  },
  {
    title: "E-commerce",
    description: "Complete online stores with M-Pesa and card payment processing, plus inventory management.",
    features: [
      "Product Catalog",
      "M-Pesa & Card Payments (Daraja API)",
      "Shopping Cart",
      "Order Management",
      "Admin Panel",
      "3 Months Support"
    ],
    price: "KES 90,000",
    priceNote: "Includes M-Pesa checkout",
    popular: false
  },
  {
    title: "Community / NGO",
    description: "Websites for community organisations, schools, churches and non-profits — built at a friendly rate because the work matters.",
    features: [
      "Up to 6 pages",
      "Programs & registration forms",
      "M-Pesa / donation integration",
      "Volunteer & partner forms",
      "1 Month Support"
    ],
    price: "KES 60,000",
    priceNote: "Discounted for registered non-profits",
    popular: false
  }
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
  { step: "02", title: "Design", desc: "Creating mockups and wireframes" },
  { step: "03", title: "Development", desc: "Building and testing your solution" },
  { step: "04", title: "Launch", desc: "Deployment and ongoing support" }
];

export default function ServicesPage() {
  const [visible, setVisible] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      requestAnimationFrame(() => setVisible(true));
    }
  }, []);

  return (
    <main>
      <Navigation />
      <section className="py-24 md:py-32 min-h-screen px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <span
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-6"
              style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
            >
              <span className="w-8 h-px" style={{ background: colors.accent }} />
              Services
            </span>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontFamily: typography.display.fontFamily }}
            >
              Services & Pricing
            </h1>
            <p
              className={`text-base max-w-xl transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontFamily: typography.body.fontFamily, color: colors.muted, transitionDelay: '0.1s' }}
            >
              Custom-built websites and web applications — not templates. From small
              business sites to e-commerce with M-Pesa payments and admin dashboards,
              I build what AI website builders can&apos;t: code you own, features that
              fit your workflow, and support after launch.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`transition-all duration-700 h-full ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${0.15 + index * 0.1}s` }}
              >
                <Card className={`relative h-full flex flex-col ${service.popular ? 'border-[#F59E0B]' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-6">
                      <span
                        className="px-3 py-1 text-xs font-medium uppercase tracking-wider"
                        style={{ background: colors.accent, color: colors.bg, fontFamily: typography.mono.fontFamily }}
                      >
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="p-2 flex flex-col h-full">
                    <h2
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: typography.display.fontFamily }}
                    >
                      {service.title}
                    </h2>

                    <div className="mb-5">
                      <span
                        className="text-[11px] uppercase tracking-wider block mb-1"
                        style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                      >
                        Starting from
                      </span>
                      <span
                        className="text-2xl font-bold whitespace-nowrap"
                        style={{ fontFamily: typography.display.fontFamily, color: colors.accent }}
                      >
                        {service.price}
                      </span>
                      <p
                        className="text-xs mt-1 min-h-8"
                        style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                      >
                        {service.priceNote}
                      </p>
                    </div>

                    <p
                      className="text-sm mb-6 min-h-24"
                      style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                    >
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 flex-shrink-0" style={{ background: colors.green }} />
                          <span
                            className="text-sm"
                            style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <Button
                        href="/contact"
                        variant={service.popular ? 'primary' : 'secondary'}
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <p
            className="text-xs mb-24 max-w-2xl"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            Starting prices, not final ones — you get a fixed quote before any work
            begins. Domain, hosting and Safaricom/Daraja fees are billed at cost and
            paid directly by you, so nothing is marked up.
          </p>

          {/* Maintenance Retainer */}
          <div className="mb-24">
            <Card>
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs uppercase tracking-widest"
                      style={{ fontFamily: typography.mono.fontFamily, color: colors.accent }}
                    >
                      Ongoing
                    </span>
                    <span className="w-12 h-px" style={{ background: colors.border }} />
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold"
                    style={{ fontFamily: typography.display.fontFamily }}
                  >
                    Maintenance &amp; Support
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                  >
                    Websites need care after launch. A monthly retainer keeps your site
                    fast, secure, and up to date — so you never worry about updates,
                    downtime, or small fixes piling up.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 pt-2">
                    {[
                      "Security & core updates",
                      "Uptime monitoring",
                      "Content & copy edits",
                      "Monthly backups",
                      "Performance checks",
                      "Priority support",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1 h-1 flex-shrink-0" style={{ background: colors.green }} />
                        <span
                          className="text-sm"
                          style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-left md:text-right space-y-4">
                  <div>
                    <span
                      className="text-2xl font-bold block"
                      style={{ fontFamily: typography.display.fontFamily, color: colors.accent }}
                    >
                      From KES 6,000
                    </span>
                    <span
                      className="text-xs"
                      style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                    >
                      per month · no lock-in
                    </span>
                  </div>
                  <Button href="/contact" variant="secondary">
                    Get Started
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Process */}
          <div className="mb-24">
            <h2
              className="text-2xl md:text-3xl font-bold mb-12"
              style={{ fontFamily: typography.display.fontFamily }}
            >
              My Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((item, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
                >
                  <Card>
                    <div className="p-4">
                      <span
                        className="text-3xl font-bold block mb-3"
                        style={{ fontFamily: typography.display.fontFamily, color: colors.accent }}
                      >
                        {item.step}
                      </span>
                      <h3
                        className="font-bold mb-1"
                        style={{ fontFamily: typography.display.fontFamily }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card>
            <div className="p-8 md:p-12 text-center">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: typography.display.fontFamily }}
              >
                Ready to Get Started?
              </h2>
              <p
                className="mb-8 max-w-xl mx-auto"
                style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
              >
                Get a free quote for your project. I respond within 24 hours with a detailed proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary">Get a Free Quote</Button>
                <Button href="/projects" variant="secondary">View My Work</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
