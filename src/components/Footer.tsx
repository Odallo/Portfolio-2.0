"use client";

import Link from "next/link";
import { colors, typography } from "../lib/design-tokens";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t"
      style={{ borderColor: colors.border }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="text-xs"
          style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
        >
          &copy; {new Date().getFullYear()} Odallo Eugine
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-xs transition-colors duration-200"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = colors.muted)}
          >
            Privacy Policy
          </Link>
          <a
            href="https://github.com/Odallo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors duration-200"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = colors.muted)}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
