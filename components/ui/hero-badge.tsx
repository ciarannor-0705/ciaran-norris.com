"use client";

import { motion, useAnimation, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface HeroBadgeProps {
  text: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const badgeVariants: Record<string, string> = {
  default: "bg-transparent",
  outline: "border-2 hover:bg-muted",
  ghost: "hover:bg-muted/50",
};

const sizeVariants: Record<string, string> = {
  sm: "px-3 py-1 text-xs gap-1.5",
  md: "px-4 py-1.5 text-sm gap-2",
  lg: "px-5 py-2 text-base gap-2.5",
};

const iconAnimationVariants: Variants = {
  initial: { rotate: 0 },
  hover: { rotate: -10 },
};

export default function HeroBadge({
  text,
  icon,
  endIcon,
  variant = "ghost",
  size = "md",
  className,
  style,
  onClick,
}: HeroBadgeProps) {
  const controls = useAnimation();

  return (
    <motion.button
      onClick={onClick}
      className="group flex items-center cursor-pointer"
      onHoverStart={() => controls.start("hover")}
      onHoverEnd={() => controls.start("initial")}
    >
      <motion.div
        className={cn(
          "flex items-center transition-colors",
          badgeVariants[variant],
          sizeVariants[size],
          className
        )}
        style={style}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease }}
      >
        {icon && (
          <motion.div
            className="transition-colors"
            variants={iconAnimationVariants}
            initial="initial"
            animate={controls}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {icon}
          </motion.div>
        )}
        <span>{text}</span>
        {endIcon && <motion.div>{endIcon}</motion.div>}
      </motion.div>
    </motion.button>
  );
}
