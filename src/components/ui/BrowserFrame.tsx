"use client";

import Image from "next/image";
import { colors, typography } from "../../lib/design-tokens";

type BrowserFrameProps = {
  src: string;
  alt: string;
  url?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  /** "natural" keeps the full screenshot; "wide" crops to a 2.4:1 banner. */
  ratio?: "natural" | "wide";
};

export default function BrowserFrame({
  src,
  alt,
  url,
  width = 1440,
  height = 900,
  sizes = "(max-width: 768px) 100vw, 1100px",
  priority = false,
  ratio = "natural",
}: BrowserFrameProps) {
  return (
    <div
      className="overflow-hidden"
      style={{ border: `1px solid ${colors.border}`, background: colors.surface }}
    >
      <div
        className="flex items-center gap-3 px-4 py-2.5"
        style={{ borderBottom: `1px solid ${colors.border}` }}
      >
        <div className="flex gap-1.5 flex-shrink-0">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-2 h-2 rounded-full" style={{ background: colors['border-hover'] }} />
          ))}
        </div>
        {url && (
          <span
            className="text-[11px] truncate"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
          >
            {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        )}
        <span
          className="ml-auto text-[10px] uppercase tracking-wider flex-shrink-0"
          style={{ fontFamily: typography.mono.fontFamily, color: colors.green }}
        >
          ● {url ? "Live" : "Demo"}
        </span>
      </div>
      {ratio === "wide" ? (
        <div className="relative w-full aspect-[2.4/1]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="w-full h-auto"
        />
      )}
    </div>
  );
}
