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
  const [hovered, setHovered] = useState(false);

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
      className="relative inline-block"
      onMouseEnter={() => { setIsHovering(true); setHovered(true); }}
      onMouseLeave={() => { setIsHovering(false); setHovered(false); }}
    >
      <video src={src} muted playsInline preload="auto" style={{ display: "none" }} />

      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="absolute z-50 rounded-xl overflow-hidden shadow-lg"
            style={{ width: 200, left: 80, bottom: "calc(100% + 8px)" }}
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
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

      <span
        className="cursor-pointer transition-all"
        style={{ color: hovered ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.88)", fontStyle: "italic" }}
      >football</span>
    </span>
  );
}
