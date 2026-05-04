"use client";

import { useState } from "react";
import Input from "./ui/Input";
import Card from "./ui/Card";
import Button from "./ui/Button";

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

  const selectClassName = `
    w-full bg-[#E0E5EC] text-[#3D4852] rounded-2xl px-5 py-4 text-base
    shadow-[inset_6px_6px_12px_rgb(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)]
    transition-all duration-300 ease-out
    focus:shadow-[inset_10px_10px_20px_rgb(163,177,198,0.7),inset_-10px_-10px_20px_rgba(255,255,255,0.6),0_0_0_2px_#6C63FF]
    border-none outline-none cursor-pointer
  `;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div 
            className="inline-block px-8 py-3 mb-6 rounded-full"
            style={{
              background: '#E0E5EC',
              boxShadow: 'inset 4px 4px 8px rgb(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.4)',
            }}
          >
            <span className="text-sm font-body font-medium text-[#6C63FF] tracking-wider uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-[#3D4852] mb-4">
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info - Neumorphic Card */}
          <div>
            <Card className="p-8 mb-8">
              <p className="text-[#6B7280] mb-8 text-lg leading-relaxed font-body">
                Ready to start your project? I respond within 24 hours and offer 
                free consultations to discuss your needs.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-display font-bold text-[#3D4852] mb-2">
                    Email
                  </h3>
                  <a 
                    href="mailto:odalloeugine@gmail.com" 
                    className="text-[#6C63FF] text-lg hover:text-[#8B84FF] transition-colors font-body"
                  >
                    odalloeugine@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-[#3D4852] mb-2">
                    Response Time
                  </h3>
                  <p className="text-[#6B7280] text-lg font-body">Within 24 hours</p>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-[#3D4852] mb-3">
                    Available For
                  </h3>
                  <ul className="text-[#6B7280] space-y-2 text-lg font-body">
                    {[
                      "Custom Website Development",
                      "Web Application Projects",
                      "E-commerce Solutions",
                      "Consulting & Code Review"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div 
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: '#6C63FF' }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Social Links - Neumorphic Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Odallo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <div 
                  className="px-6 py-3 text-center text-base font-body font-medium text-[#3D4852] rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: '#E0E5EC',
                    boxShadow: '5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '8px 8px 16px rgb(163,177,198,0.7), -8px -8px 16px rgba(255,255,255,0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)';
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
                  className="px-6 py-3 text-center text-base font-body font-medium text-[#3D4852] rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: '#E0E5EC',
                    boxShadow: '5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '8px 8px 16px rgb(163,177,198,0.7), -8px -8px 16px rgba(255,255,255,0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255,0.5)';
                  }}
                >
                  LinkedIn
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form - Neumorphic Card */}
          <Card className="p-8">
            <h3 className="text-2xl font-display font-bold text-[#3D4852] mb-6">
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

              <div className="space-y-3">
                <label className="text-sm font-body font-medium text-[#3D4852] ml-1">
                  Project Type <span className="text-[#6C63FF]">*</span>
                </label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className={selectClassName}
                >
                  <option value="">Select a service</option>
                  <option value="Custom Website">Custom Website</option>
                  <option value="Web Application">Web Application</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="text-sm font-body font-medium text-[#3D4852] ml-1">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={selectClassName}
                  >
                    <option value="">Select budget</option>
                    <option value="KES 25,000-50,000">KES 25,000-50,000</option>
                    <option value="KES 50,000-100,000">KES 50,000-100,000</option>
                    <option value="KES 100,000-200,000">KES 100,000-200,000</option>
                    <option value="KES 200,000+">KES 200,000+</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-body font-medium text-[#3D4852] ml-1">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={selectClassName}
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
                  background: '#6C63FF',
                  boxShadow: '5px 5px 10px rgb(163,177,198,0.4), -5px -5px 10px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = '#8B84FF';
                    e.currentTarget.style.boxShadow = '8px 8px 16px rgb(163,177,198,0.5), -8px -8px 16px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = '#6C63FF';
                    e.currentTarget.style.boxShadow = '5px 5px 10px rgb(163,177,198,0.4), -5px -5px 10px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.2)';
                  }
                }}
              >
                {isSubmitting ? 'Opening Email Client...' : 'Send Project Inquiry'}
              </button>
            </form>

            <div className="mt-4 text-sm text-[#6B7280]">
              <p>Clicking "Send Project Inquiry" will open your default email client with the form details pre-filled.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}