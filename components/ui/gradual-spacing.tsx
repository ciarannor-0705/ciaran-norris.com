"use client";

import React from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  style?: React.CSSProperties;
}

function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  },
  className,
  style,
}: GradualSpacingProps) {
  return (
    <div className="flex justify-center -space-x-0.5">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{
              delay: i * delayMultiple,
              type: "spring",
              stiffness: 300,
              damping: 22,
              mass: 0.5,
            }}
            className={cn("inline-block drop-shadow-sm", className)}
            style={style}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

export { GradualSpacing };
