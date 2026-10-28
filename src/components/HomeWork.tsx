import Link from "next/link";
import Card from "./ui/Card";
import Button from "./ui/Button";
import BrowserFrame from "./ui/BrowserFrame";
import { colors, typography } from "../lib/design-tokens";
import { projects } from "../lib/projects";

const featured = projects.find((p) => p.slug === "pulse-diagnostics")!;
const secondary = projects.filter((p) => ["minirdbms", "weather-app"].includes(p.slug));

export default function HomeWork() {
  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.accent }}
          >
            01
          </span>
          <span className="w-12 h-px" style={{ background: colors.border }} />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            Selected work
          </span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold max-w-lg"
            style={{ fontFamily: typography.display.fontFamily }}
          >
            A real store, live and taking orders.
          </h2>
          <p
            className="text-sm max-w-sm"
            style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
          >
            Built end to end — storefront, M-Pesa checkout, and an admin panel the
            owner runs without me.
          </p>
        </div>

        {/* Featured */}
        <div className="grid md:grid-cols-12 gap-8 items-center mb-16">
          <div className="md:col-span-7">
            <BrowserFrame
              src={featured.image!}
              alt={featured.imageAlt!}
              url={featured.website}
              priority
            />
          </div>
          <div className="md:col-span-5">
            <span
              className="text-xs mb-3 block"
              style={{ fontFamily: typography.mono.fontFamily, color: colors.accent }}
            >
              {featured.year} · {featured.subtitle}
            </span>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: typography.display.fontFamily }}
            >
              {featured.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
            >
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs"
                  style={{
                    fontFamily: typography.mono.fontFamily,
                    color: colors.accent,
                    background: `${colors.accent}10`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <Button href={featured.website!} variant="primary">
              Visit live site →
            </Button>
          </div>
        </div>

        {/* Secondary */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {secondary.map((project) => (
            <Card key={project.slug}>
              <div className="p-1">
                <div
                  className="flex items-center justify-between mb-5 px-3 py-2"
                  style={{ border: `1px solid ${colors.border}`, background: colors.surface }}
                >
                  <span
                    className="text-[11px] uppercase tracking-wider"
                    style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
                  >
                    {project.tech.join(" · ")}
                  </span>
                  <span
                    className="text-[11px]"
                    style={{ fontFamily: typography.mono.fontFamily, color: colors.accent }}
                  >
                    {project.year}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: typography.display.fontFamily }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ fontFamily: typography.body.fontFamily, color: colors.muted }}
                >
                  {project.description}
                </p>
                <Link
                  href={project.github!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors"
                  style={{ fontFamily: typography.mono.fontFamily, color: colors.accent }}
                >
                  View on GitHub →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
        >
          View all projects <span style={{ color: colors.accent }}>→</span>
        </Link>
      </div>
    </section>
  );
}
