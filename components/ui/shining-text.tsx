"use client"

import * as React from "react"
import { motion } from "motion/react"

interface ShiningTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export function ShiningText({ text, className, style }: ShiningTextProps) {
  return (
    <motion.span
      className={`bg-[linear-gradient(110deg,#111,30%,#aaa,45%,#fff,50%,#aaa,55%,#111,75%,#111)] bg-[length:300%_100%] bg-clip-text text-transparent font-bold inline ${className}`}
      style={style}
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  )
}
