import Navigation from "../../src/components/Navigation";
import Footer from "../../src/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Odallo Eugine's portfolio website. Learn how your data is handled when you visit or contact through this site.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navigation />
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-sm mb-8"
            style={{ fontFamily: "var(--font-body), sans-serif", color: "#A1A1AA" }}
          >
            Last updated: July 2026
          </p>

          <div
            className="space-y-6 text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif", color: "#A1A1AA" }}
          >
            <div>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ fontFamily: "var(--font-display), sans-serif", color: "#F5F5F5" }}
              >
                1. Information I Collect
              </h2>
              <p>
                This portfolio website is a personal website. When you visit this site, no personal data is collected automatically. If you contact me through the contact form, I will receive your name, email address, and any information you provide in your message.
              </p>
            </div>

            <div>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ fontFamily: "var(--font-display), sans-serif", color: "#F5F5F5" }}
              >
                2. How I Use Your Information
              </h2>
              <p>
                Information you provide through the contact form is used solely to respond to your inquiry. I do not sell, trade, or share your personal information with third parties.
              </p>
            </div>

            <div>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ fontFamily: "var(--font-display), sans-serif", color: "#F5F5F5" }}
              >
                3. Third-Party Services
              </h2>
              <p>
                This website is hosted on Vercel and uses Google Fonts for typography. These services may collect anonymous usage data as described in their respective privacy policies.
              </p>
            </div>

            <div>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ fontFamily: "var(--font-display), sans-serif", color: "#F5F5F5" }}
              >
                4. Cookies
              </h2>
              <p>
                This website does not use tracking cookies. Vercel may use essential cookies for hosting purposes.
              </p>
            </div>

            <div>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ fontFamily: "var(--font-display), sans-serif", color: "#F5F5F5" }}
              >
                5. Data Retention
              </h2>
              <p>
                I retain contact form messages only as long as necessary to respond to your inquiry. No data is stored long-term.
              </p>
            </div>

            <div>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ fontFamily: "var(--font-display), sans-serif", color: "#F5F5F5" }}
              >
                6. Changes to This Policy
              </h2>
              <p>
                I may update this privacy policy from time to time. Changes will be posted on this page with an updated date.
              </p>
            </div>

            <div>
              <h2
                className="text-lg font-semibold mb-3"
                style={{ fontFamily: "var(--font-display), sans-serif", color: "#F5F5F5" }}
              >
                7. Contact
              </h2>
              <p>
                If you have questions about this privacy policy, you can reach me at{" "}
                <a
                  href="mailto:odalloeugine@gmail.com"
                  style={{ color: "#F59E0B" }}
                >
                  odalloeugine@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
