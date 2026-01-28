import Navigation from "../../src/components/Navigation";

export default function ServicesPage() {
  return (
    <main>
      <Navigation />
      <section className="py-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Services & Pricing
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border border-cream/20 rounded-2xl p-8 hover:bg-olive/70 transition">
              <h3 className="text-2xl font-semibold mb-4">Custom Websites</h3>
              <p className="text-cream/80 mb-6">
                Professional, responsive websites tailored to your brand and goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  <span className="text-cream/70">Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  <span className="text-cream/70">SEO Optimized</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  <span className="text-cream/70">Fast Loading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  <span className="text-cream/70">CMS Integration</span>
                </li>
              </ul>
              <div className="text-3xl font-bold text-tan mb-2">KES 35,000 - 45,000</div>
              <p className="text-cream/60 text-sm">Perfect for small businesses</p>
            </div>

            <div className="border border-cream/20 rounded-2xl p-8 hover:bg-olive/70 transition">
              <h3 className="text-2xl font-semibold mb-4">Web Applications</h3>
              <p className="text-cream/80 mb-6">
                Interactive web apps with advanced functionality and user management.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  <span className="text-cream/70">User Authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  <span className="text-cream/70">Database Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  <span className="text-cream/70">API Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  <span className="text-cream/70">Real-time Features</span>
                </li>
              </ul>
              <div className="text-3xl font-bold text-tan mb-2">KES 60,000 - 120,000</div>
              <p className="text-cream/60 text-sm">For dynamic business needs</p>
            </div>

            <div className="border border-cream/20 rounded-2xl p-8 hover:bg-olive/70 transition">
              <h3 className="text-2xl font-semibold mb-4">E-commerce</h3>
              <p className="text-cream/80 mb-6">
                Complete online stores with payment processing and inventory management.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  <span className="text-cream/70">Payment Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  <span className="text-cream/70">Product Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  <span className="text-cream/70">Shopping Cart</span>
                </li>
                <li className="flex items-start">
                  <span className="text-tan mr-2">•</span>
                  <span className="text-cream/70">Order Tracking</span>
                </li>
              </ul>
              <div className="text-3xl font-bold text-tan mb-2">KES 100,000 - 200,000</div>
              <p className="text-cream/60 text-sm">Full e-commerce solution</p>
            </div>
          </div>

          <div className="bg-olive/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">My Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-tan rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-olive">1</span>
                </div>
                <h4 className="font-semibold mb-2">Discovery</h4>
                <p className="text-cream/70 text-sm">Understanding your goals and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tan rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-olive">2</span>
                </div>
                <h4 className="font-semibold mb-2">Design</h4>
                <p className="text-cream/70 text-sm">Creating mockups and wireframes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tan rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-olive">3</span>
                </div>
                <h4 className="font-semibold mb-2">Development</h4>
                <p className="text-cream/70 text-sm">Building and testing your solution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tan rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-olive">4</span>
                </div>
                <h4 className="font-semibold mb-2">Launch</h4>
                <p className="text-cream/70 text-sm">Deployment and ongoing support</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-cream/80 mb-8">
              Get a free quote for your project. I respond within 24 hours.
            </p>
            <a
              href="/contact"
              className="px-8 py-4 bg-tan text-olive font-semibold rounded-xl text-lg hover:bg-cream transition"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
