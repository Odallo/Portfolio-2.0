"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { colors, typography } from "../../lib/design-tokens";

type BrowserFrameProps = {
  src?: string;
  /** Looping launch video shown instead of the image; `src` becomes its poster. */
  video?: string;
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
  video,
  alt,
  url,
  width = 1440,
  height = 900,
  sizes = "(max-width: 768px) 100vw, 1100px",
  priority = false,
  ratio = "natural",
}: BrowserFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  // Respect reduced-motion: don't start a looping video unprompted.
  // `onPause` below keeps the button in sync, so no setState here.
  useEffect(() => {
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, [video]);

  function toggle() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
  }

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
        <div className="ml-auto flex items-center gap-3 flex-shrink-0">
          {video && (
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pause video" : "Play video"}
              className="text-[10px] uppercase tracking-wider transition-colors"
              style={{ fontFamily: typography.mono.fontFamily, color: colors.muted }}
            >
              {playing ? "❚❚ Pause" : "▶ Play"}
            </button>
          )}
          <span
            className="text-[10px] uppercase tracking-wider"
            style={{ fontFamily: typography.mono.fontFamily, color: colors.green }}
          >
            ● {url ? "Live" : "Demo"}
          </span>
        </div>
      </div>
      {video ? (
        <video
          ref={videoRef}
          className="block w-full h-auto"
          src={video}
          poster={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      ) : ratio === "wide" ? (
        <div className="relative w-full aspect-[2.4/1]">
          <Image
            src={src!}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        </div>
      ) : (
        <Image
          src={src!}
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
