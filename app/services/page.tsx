import Navigation from "../../src/components/Navigation";
import Card from "../../src/components/ui/Card";
import Button from "../../src/components/ui/Button";
import { colors, typography } from "../../src/lib/design-tokens";

export default function ServicesPage() {
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
      price: "KES 35,000 - 45,000",
      priceNote: "Perfect for small businesses",
      popular: false
    },
    {
      title: "Business Website",
      description: "Advanced websites with dynamic features for growing businesses.",
      features: [
        "Up to 10 pages",
        "Admin Dashboard",
        "User Authentication",
        "Database Integration",
        "3 Revision Rounds",
        "2 Months Support"
      ],
      price: "KES 60,000 - 120,000",
      priceNote: "For dynamic business needs",
      popular: true
    },
    {
      title: "E-commerce",
      description: "Complete online stores with payment processing and inventory management.",
      features: [
        "Product Catalog",
        "Payment Integration",
        "Shopping Cart",
        "Order Management",
        "Admin Panel",
        "3 Months Support"
      ],
      price: "KES 100,000 - 200,000",
      priceNote: "Full e-commerce solution",
      popular: false
    }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
    { step: "02", title: "Design", desc: "Creating mockups and wireframes" },
    { step: "03", title: "Development", desc: "Building and testing your solution" },
    { step: "04", title: "Launch", desc: "Deployment and ongoing support" }
  ];

  return (
    <main>
      <Navigation />
      <section className="py-24 md:py-32 min-h-screen relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="mb-16">
            <span
              className="text-xs uppercase tracking-widest block mb-4"
              style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
            >
              Services
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
            >
              Services & Pricing
            </h1>
            <div className="w-16 h-px mb-6" style={{ background: colors.accent }} />
            <p
              className="text-lg max-w-2xl"
              style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
            >
              Professional web development services tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {services.map((service) => (
              <Card key={service.title} className="relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className="px-4 py-1.5 text-white text-xs font-medium uppercase tracking-wider"
                      style={{ background: colors.accent }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm mb-6"
                    style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                  >
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <span
                      className="text-2xl font-bold"
                      style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
                    >
                      {service.price}
                    </span>
                    <p
                      className="text-xs mt-1"
                      style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                    >
                      {service.priceNote}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 mt-2 flex-shrink-0"
                          style={{ background: colors.accent }}
                        />
                        <span
                          className="text-sm"
                          style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={service.popular ? 'primary' : 'secondary'}
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-24">
            <div className="mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
              >
                My Process
              </h2>
              <p style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}>
                A streamlined approach to delivering exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((item, i) => (
                <Card key={i} className="text-center">
                  <div className="p-6">
                    <div
                      className="w-14 h-14 mx-auto mb-4 flex items-center justify-center text-lg font-bold"
                      style={{
                        border: `1px solid ${colors.border}`,
                        fontFamily: typography.display.fontFamily,
                        color: colors.accent,
                      }}
                    >
                      {item.step}
                    </div>
                    <h4
                      className="font-bold mb-2"
                      style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-sm"
                      style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="text-center">
            <div className="p-8 md:p-12">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: typography.display.fontFamily, color: colors.text }}
              >
                Ready to Get Started?
              </h2>
              <p
                className="mb-8 max-w-xl mx-auto"
                style={{ fontFamily: typography.body.fontFamily, color: colors.textMuted }}
              >
                Get a free quote for your project. I respond within 24 hours with a detailed proposal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary">
                  Get a Free Quote
                </Button>
                <Button href="/projects" variant="secondary">
                  View My Work
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
