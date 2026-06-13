"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LinkCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  imageClassName?: string;
}

const LinkCard = React.forwardRef<HTMLAnchorElement, LinkCardProps>(
  ({ className, title, description, imageUrl, href, imageClassName, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const motionProps = props as any;

    const cardVariants = {
      initial: { scale: 1, y: 0 },
      hover: {
        scale: 1.03,
        y: -5,
        transition: { type: "spring" as const, stiffness: 300, damping: 15 },
      },
    };

    return (
      <motion.a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative flex h-64 w-full flex-col justify-start overflow-hidden",
          "rounded-2xl border border-black/8 bg-white p-5 shadow-sm",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className
        )}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        aria-label={`Link to ${title}`}
        {...motionProps}
      >
        <div className="z-10 relative">
          <h3
            className="mb-1.5 text-xl font-bold tracking-tight text-black/75"
            style={{ fontFamily: "var(--font-inter), sans-serif", letterSpacing: "-0.03em" }}
          >
            {title}
          </h3>
          <p
            className="max-w-[65%] text-sm text-black/45 leading-snug"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {description}
          </p>
        </div>

        <div className={cn("absolute bottom-0 right-0 h-44 w-44 translate-x-1/4 translate-y-1/4", imageClassName)}>
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-110"
          />
        </div>
      </motion.a>
    );
  }
);

LinkCard.displayName = "LinkCard";

export { LinkCard };
