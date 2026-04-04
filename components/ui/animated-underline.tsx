"use client";

import { cn } from "@/lib/utils";

export const AnimatedUnderline = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "relative inline-flex items-baseline gap-1 after:absolute after:bg-black after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
        className,
      )}
    >
      {children}
    </span>
  );
};
