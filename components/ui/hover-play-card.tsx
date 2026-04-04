"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type HoverPlayCardProps = {
  src: string;
  poster?: string;
  className?: string;
  loop?: boolean;
};

export default function HoverPlayCard({
  src,
  poster,
  className,
  loop = true,
}: HoverPlayCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isHovering) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isHovering]);

  return (
    <span
      className="relative inline-block cursor-default"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ width: 200 }}
          >
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              loop={loop}
              muted
              playsInline
              className={cn("w-full h-full object-cover", className)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="underline decoration-black/20 underline-offset-2">football</span>
    </span>
  );
}
