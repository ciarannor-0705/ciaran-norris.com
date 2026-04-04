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

const FILL_DURATION = 0.45;

function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
  style,
}: GradualSpacingProps) {
  return (
    <div className="flex justify-center -space-x-0.5">
      <AnimatePresence>
        {text.split("").map((char, i) => {
          const staggerDelay = i * delayMultiple;
          const fillDelay = staggerDelay + 0.1;
          const outlineFadeDelay = fillDelay + FILL_DURATION;

          return (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={framerProps}
              transition={{ duration, delay: staggerDelay }}
              className={cn("relative inline-block drop-shadow-sm", className)}
              style={style}
            >
              {/* invisible spacer to hold dimensions */}
              <span style={{ visibility: "hidden", userSelect: "none" }}>
                {char === " " ? "\u00A0" : char}
              </span>

              {/* outline layer — rendered on top, fades out after fill */}
              <motion.span
                aria-hidden
                className="absolute inset-0"
                style={{
                  WebkitTextStroke: "1.5px black",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: outlineFadeDelay, ease: "easeIn" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>

              {/* fill layer — floods in from bottom to top */}
              <motion.span
                aria-hidden
                className="absolute inset-0"
                style={{ WebkitTextFillColor: "black" }}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: FILL_DURATION, delay: fillDelay, ease: "easeInOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </motion.span>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export { GradualSpacing };
