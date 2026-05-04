import Navigation from "../../src/components/Navigation";
import Card from "../../src/components/ui/Card";
import Button from "../../src/components/ui/Button";

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
          <div className="text-center mb-16">
            <div 
              className="inline-block px-8 py-3 mb-6 rounded-full"
              style={{
                background: '#E0E5EC',
                boxShadow: 'inset 4px 4px 8px rgb(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.4)',
              }}
            >
              <span className="text-sm font-body font-medium text-[#6C63FF] tracking-wider uppercase">
                Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#3D4852] mb-4">
              Services & Pricing
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto font-body">
              Professional web development services tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {services.map((service) => (
              <Card
                key={service.title}
                className="relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span 
                      className="px-4 py-1.5 text-white text-xs font-body font-medium rounded-full"
                      style={{
                        background: '#6C63FF',
                        boxShadow: '3px 3px 6px rgb(163,177,198,0.4), -3px -3px 6px rgba(255,255,255,0.3)',
                      }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-[#3D4852] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm mb-6 font-body">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-2xl font-display font-bold text-[#3D4852]">
                      {service.price}
                    </span>
                    <p className="text-xs text-[#6B7280] mt-1 font-body">
                      {service.priceNote}
                    </p>
                  </div>

                  {/* Features - Neumorphic Inset */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: '#6C63FF' }}
                        />
                        <span className="text-[#6B7280] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={service.popular ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#3D4852] mb-4">
                My Process
              </h2>
              <p className="text-[#6B7280] font-body">
                A streamlined approach to delivering exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((item, i) => (
                <Card key={i} className="text-center">
                  <div className="p-6">
                    {/* Step Number - Neumorphic Inset */}
                    <div 
                      className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center text-lg font-display font-bold"
                      style={{
                        background: '#E0E5EC',
                        boxShadow: 'inset 4px 4px 8px rgb(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.4)',
                        color: '#6C63FF',
                      }}
                    >
                      {item.step}
                    </div>
                    <h4 className="font-display font-bold text-[#3D4852] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#6B7280] text-sm font-body">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="text-center">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#3D4852] mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-[#6B7280] mb-8 max-w-xl mx-auto font-body">
                Get a free quote for your project. I respond within 24 hours with a detailed proposal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary" size="lg">
                  Get a Free Quote
                </Button>
                <Button href="/projects" variant="secondary" size="lg">
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