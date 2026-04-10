"use client";

import { useState } from "react";

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
    
    // Validation
    if (!formData.name || !formData.email || !formData.projectType) {
      alert("Please fill in all required fields (Name, Email, and Project Type).");
      return;
    }

    setIsSubmitting(true);

    // Create properly formatted email content
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

    // Open email client
    window.location.href = `mailto:odalloeugine@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-6xl font-bold text-[#2d2d2d] mb-4"
              style={{ fontFamily: 'Kalam, cursive' }}
            >
              Get In Touch
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#2d5da1]"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white border-4 border-[#2d2d2d] p-8 mb-8 relative"
              style={{
                borderRadius: '255px 35px 225px 35px / 35px 225px 35px 255px',
                boxShadow: '8px 8px 0px 0px #2d2d2d',
                transform: 'rotate(-1deg)',
              }}
            >
              {/* Tape decoration */}
              <div 
                className="absolute top-0 left-1/2 w-24 h-6 bg-gray-300 opacity-60"
                style={{
                  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                  transform: 'translateX(-50%) translateY(-50%) rotate(-2deg)',
                  boxShadow: '2px 2px 0px 0px rgba(45, 45, 45, 0.2)',
                }}
              />

              <p className="text-[#2d2d2d] mb-8 text-lg leading-relaxed">
                Ready to start your project? I respond within 24 hours and offer 
                free consultations to discuss your needs.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#2d2d2d]"
                    style={{ fontFamily: 'Kalam, cursive' }}
                  >
                    Email
                  </h3>
                  <a href="mailto:odalloeugine@gmail.com" className="text-[#2d5da1] text-lg hover:text-[#ff4d4d] transition-colors">
                    odalloeugine@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#2d2d2d]"
                    style={{ fontFamily: 'Kalam, cursive' }}
                  >
                    Response Time
                  </h3>
                  <p className="text-[#2d2d2d] text-lg">Within 24 hours</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#2d2d2d]"
                    style={{ fontFamily: 'Kalam, cursive' }}
                  >
                    Available For
                  </h3>
                  <ul className="text-[#2d2d2d] space-y-1 text-lg">
                    <li className="flex items-start">
                      <span className="text-[#ff4d4d] mr-2 font-bold">~</span>
                      <span>Custom Website Development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff4d4d] mr-2 font-bold">~</span>
                      <span>Web Application Projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff4d4d] mr-2 font-bold">~</span>
                      <span>E-commerce Solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff4d4d] mr-2 font-bold">~</span>
                      <span>Consulting & Code Review</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Odallo"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <div 
                  className="bg-white border-[3px] border-[#2d2d2d] px-6 py-3 text-center text-lg font-bold text-[#2d2d2d] transition-all duration-100 group-hover:bg-[#2d5da1] group-hover:text-white"
                  style={{
                    borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                    boxShadow: '4px 4px 0px 0px #2d2d2d',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '2px 2px 0px 0px #2d2d2d';
                    e.currentTarget.style.transform = 'translateX(2px) translateY(2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '4px 4px 0px 0px #2d2d2d';
                    e.currentTarget.style.transform = 'translateX(0) translateY(0)';
                  }}
                >
                  GitHub
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/odallo-eugine/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <div 
                  className="bg-white border-[3px] border-[#2d2d2d] px-6 py-3 text-center text-lg font-bold text-[#2d2d2d] transition-all duration-100 group-hover:bg-[#2d5da1] group-hover:text-white"
                  style={{
                    borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                    boxShadow: '4px 4px 0px 0px #2d2d2d',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '2px 2px 0px 0px #2d2d2d';
                    e.currentTarget.style.transform = 'translateX(2px) translateY(2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '4px 4px 0px 0px #2d2d2d';
                    e.currentTarget.style.transform = 'translateX(0) translateY(0)';
                  }}
                >
                  LinkedIn
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#fff9c4] border-4 border-[#2d2d2d] p-8 relative"
            style={{
              borderRadius: '255px 35px 225px 35px / 35px 225px 35px 255px',
              boxShadow: '8px 8px 0px 0px #2d2d2d',
              transform: 'rotate(1deg)',
            }}
          >
            {/* Sticky note decoration */}
            <div className="absolute top-2 right-2 text-xs text-[#2d2d2d] opacity-60 font-bold">
              PROJECT FORM
            </div>

            <h3 className="text-2xl font-bold mb-6 text-[#2d2d2d]"
              style={{ fontFamily: 'Kalam, cursive' }}
            >
              Quick Quote Form
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-lg font-bold mb-2 text-[#2d2d2d]">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-[#2d2d2d] text-[#2d2d2d] placeholder-[#2d2d2d]/40 text-lg"
                  placeholder="Your Name"
                  style={{
                    borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                    boxShadow: '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
                  }}
                />
              </div>

              <div>
                <label className="block text-lg font-bold mb-2 text-[#2d2d2d]">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-[#2d2d2d] text-[#2d2d2d] placeholder-[#2d2d2d]/40 text-lg"
                  placeholder="your@email.com"
                  style={{
                    borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                    boxShadow: '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
                  }}
                />
              </div>

              <div>
                <label className="block text-lg font-bold mb-2 text-[#2d2d2d]">
                  Project Type *
                </label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-[#2d2d2d] text-[#2d2d2d] text-lg"
                  style={{
                    borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                    boxShadow: '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="Custom Website">Custom Website</option>
                  <option value="Web Application">Web Application</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-bold mb-2 text-[#2d2d2d]">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-[#2d2d2d] text-[#2d2d2d] text-lg"
                    style={{
                      borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                      boxShadow: '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
                    }}
                  >
                    <option value="">Select budget</option>
                    <option value="KES 25,000-50,000">KES 25,000-50,000</option>
                    <option value="KES 50,000-100,000">KES 50,000-100,000</option>
                    <option value="KES 100,000-200,000">KES 100,000-200,000</option>
                    <option value="KES 200,000+">KES 200,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-bold mb-2 text-[#2d2d2d]">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-[#2d2d2d] text-[#2d2d2d] text-lg"
                    style={{
                      borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                      boxShadow: '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
                    }}
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

              <div>
                <label className="block text-lg font-bold mb-2 text-[#2d2d2d]">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-[#2d2d2d] text-[#2d2d2d] placeholder-[#2d2d2d]/40 text-lg"
                  placeholder="Tell me about your project..."
                  style={{
                    borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                    boxShadow: '3px 3px 0px 0px rgba(45, 45, 45, 0.1)',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ff4d4d] text-white px-6 py-4 text-xl font-bold transition-all duration-100 hover:bg-[#2d2d2d] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
                  boxShadow: '4px 4px 0px 0px #2d2d2d',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.boxShadow = '2px 2px 0px 0px #2d2d2d';
                    e.currentTarget.style.transform = 'translateX(2px) translateY(2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.boxShadow = '4px 4px 0px 0px #2d2d2d';
                    e.currentTarget.style.transform = 'translateX(0) translateY(0)';
                  }
                }}
              >
                {isSubmitting ? 'Opening Email Client...' : 'Send Project Inquiry'}
              </button>
            </form>

            {/* Help text */}
            <div className="mt-4 text-sm text-[#2d2d2d] opacity-70">
              <p>Clicking "Send Project Inquiry" will open your default email client with the form details pre-filled.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
