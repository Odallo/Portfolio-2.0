import Navigation from "../../src/components/Navigation";
import ServiceCard from "../../src/components/ui/ServiceCard";

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
      variant: 'primary' as const,
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
      variant: 'secondary' as const,
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
      variant: 'accent' as const,
      popular: false
    }
  ];

  return (
    <main>
      <Navigation />
      <section className="py-20 min-h-screen relative">
        {/* Decorative elements */}
        <div className="hidden md:block absolute top-20 left-20 w-12 h-12 bg-[#2d5da1] animate-bounce"
          style={{
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
            boxShadow: '4px 4px 0px 0px #2d2d2d',
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h1 className="text-4xl md:text-6xl font-bold text-[#2d2d2d] mb-8"
                style={{ fontFamily: 'Kalam, cursive' }}
              >
                Services & Pricing
              </h1>
              <div className="absolute -bottom-4 left-0 right-0 h-3 bg-[#ff4d4d]"
                style={{
                  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                }}
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-white border-4 border-[#2d2d2d] p-8 mb-16 relative"
            style={{
              borderRadius: '255px 35px 225px 35px / 35px 225px 35px 255px',
              boxShadow: '8px 8px 0px 0px #2d2d2d',
            }}
          >
            {/* Tape decoration */}
            <div 
              className="absolute top-0 left-1/2 w-32 h-8 bg-gray-300 opacity-60"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                transform: 'translateX(-50%) translateY(-50%) rotate(-2deg)',
                boxShadow: '2px 2px 0px 0px rgba(45, 45, 45, 0.2)',
              }}
            />

            <h2 className="text-3xl font-bold mb-8 text-center text-[#2d2d2d]"
              style={{ fontFamily: 'Kalam, cursive' }}
            >
              My Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Discovery", desc: "Understanding your goals and requirements" },
                { step: "2", title: "Design", desc: "Creating mockups and wireframes" },
                { step: "3", title: "Development", desc: "Building and testing your solution" },
                { step: "4", title: "Launch", desc: "Deployment and ongoing support" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div 
                    className="w-16 h-16 bg-[#2d5da1] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold hover:rotate-1 transition-transform duration-100"
                    style={{
                      borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                      boxShadow: '4px 4px 0px 0px #2d2d2d',
                    }}
                  >
                    {item.step}
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-[#2d2d2d]"
                    style={{ fontFamily: 'Kalam, cursive' }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[#2d2d2d] text-lg">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Connecting line */}
            <div className="hidden md:block absolute top-32 left-1/4 right-1/4 h-1">
              <svg width="100%" height="20" viewBox="0 0 400 20" className="animate-pulse">
                <path 
                  d="M 0 10 Q 100 0, 200 10 T 400 10" 
                  stroke="#ff4d4d" 
                  strokeWidth="3" 
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white border-4 border-[#2d2d2d] p-12 text-center relative"
            style={{
              borderRadius: '255px 35px 225px 35px / 35px 225px 35px 255px',
              boxShadow: '8px 8px 0px 0px #2d2d2d',
              transform: 'rotate(-0.5deg)',
            }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#2d2d2d]"
              style={{ fontFamily: 'Kalam, cursive' }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#2d2d2d] mb-8">
              Get a free quote for your project. I respond within 24 hours.
            </p>
            
            <a
              href="/contact"
              className="inline-block"
            >
              <div 
                className="bg-[#ff4d4d] text-white px-8 py-4 text-xl font-bold"
                style={{
                  borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                  boxShadow: '4px 4px 0px 0px #2d2d2d',
                }}
              >
                Get a Free Quote
              </div>
            </a>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#2d5da1] animate-bounce"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                boxShadow: '2px 2px 0px 0px #2d2d2d',
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
