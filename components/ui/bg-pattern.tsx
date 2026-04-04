"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface BGPatternProps {
  variant?: "dots" | "grid" | "lines"
  mask?: "none" | "fade" | "radial"
  size?: number
  fill?: string
  className?: string
}

export function BGPattern({
  variant = "dots",
  mask = "none",
  size = 28,
  fill = "#d1d1d1",
  className,
}: BGPatternProps) {
  const id = React.useId()

  const maskStyle =
    mask === "fade"
      ? { WebkitMaskImage: "linear-gradient(to bottom, black, transparent)", maskImage: "linear-gradient(to bottom, black, transparent)" }
      : mask === "radial"
      ? { WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)", maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)" }
      : {}

  return (
    <svg
      className={cn("absolute inset-0 h-full w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
      style={maskStyle}
      aria-hidden="true"
    >
      <defs>
        {variant === "dots" && (
          <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
            <circle cx={size / 2} cy={size / 2} r="1" fill={fill} />
          </pattern>
        )}
        {variant === "grid" && (
          <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
            <path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke={fill} strokeWidth="0.5" />
          </pattern>
        )}
        {variant === "lines" && (
          <pattern id={id} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
            <line x1="0" y1={size / 2} x2={size} y2={size / 2} stroke={fill} strokeWidth="0.5" />
          </pattern>
        )}
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
