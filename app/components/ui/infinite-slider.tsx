"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface InfiniteSliderProps {
  children: React.ReactNode;
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  className?: string;
  reverse?: boolean;
}

export function InfiniteSlider({
  children,
  speed = 30,
  speedOnHover,
  gap = 48,
  className,
  reverse = false,
}: InfiniteSliderProps) {
  const hoverDuration = speedOnHover
    ? `${(speed * speed) / speedOnHover}s`
    : undefined;

  return (
    <div className={cn("group overflow-hidden", className)}>
      <div
        className="flex w-max animate-infinite-scroll"
        style={
          {
            "--scroll-duration": `${speed}s`,
            gap: `${gap}px`,
            animationDirection: reverse ? "reverse" : "normal",
            ...(hoverDuration && {
              "--hover-duration": hoverDuration,
            }),
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          if (hoverDuration) {
            e.currentTarget.style.animationDuration = hoverDuration;
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationDuration = `${speed}s`;
        }}
      >
        <div className="flex shrink-0 items-center" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </div>
    </div>
  );
}
