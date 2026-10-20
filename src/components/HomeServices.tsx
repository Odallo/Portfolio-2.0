import Link from "next/link";
import Card from "./ui/Card";
import { colors, typography } from "../lib/design-tokens";

const offerings = [
  {
    title: "Business website",
    price: "From KES 50,000",
    description:
      "A fast, mobile-first site with the pages you need, plus a dashboard to edit content yourself.",
    includes: ["Up to 10 pages", "Admin dashboard", "SEO basics", "2 months support"],
  },
  {
    title: "Online store",
    price: "From KES 90,000",
    description:
      "Catalogue, cart, checkout and Lipa na M-Pesa — with an admin panel for products and orders.",
    includes: ["M-Pesa checkout", "Order management", "Stock control", "3 months support"],
  },
  {
    title: "Non-profit & community",
    price: "From KES 60,000",
    description:
      "Programmes, schedules, registrations and volunteer forms — at a discounted rate for mission-led organisations.",
    includes: ["Programme pages", "Online registration", "Volunteer forms", "1 month support"],
  },
];

export default function HomeServices() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.accent }}
          >
            02
          </span>
          <span className="w-12 h-px" style={{ background: colors.border }} />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            What I build
          </span>
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold mb-4 max-w-xl"
          style={{ fontFamily: typography.display.fontFamily }}
        >
          Websites that do a job, not just sit there.
        </h2>
        <p
          className="text-base mb-14 max-w-xl"
          style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
        >
          Fixed-scope projects, quoted up front. You own the code and the domain —
          no lock-in, no monthly ransom to keep your own site online.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((item) => (
            <Card key={item.title} className="flex">
              <div className="flex flex-col h-full w-full">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: typography.display.fontFamily }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                >
                  {item.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {item.includes.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 flex-shrink-0" style={{ background: colors.green }} />
                      <span
                        className="text-sm"
                        style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <span
                    className="text-lg font-bold block mb-4"
                    style={{ fontFamily: typography.display.fontFamily, color: colors.accent }}
                  >
                    {item.price}
                  </span>
                  <Link
                    href="/services"
                    className="text-sm transition-colors"
                    style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                  >
                    See what&apos;s included →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <p
          className="mt-8 text-sm"
          style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
        >
          Care plans from KES 6,000/month · hosting, updates and small edits handled.
        </p>
      </div>
    </section>
  );
}
