"use client"

import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number | string
  name: string
  avatar: string
  description: string
}

interface TestimonialCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<HTMLDivElement, TestimonialCarouselProps>(
  ({ className, testimonials, showArrows = true, showDots = true, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)

    const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (Math.abs(info.offset.x) > 60) {
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          setExitX(0)
        }, 200)
      }
    }

    return (
      <div ref={ref} className={cn("flex items-center justify-center", className)} {...props}>
        <div className="relative w-full h-full">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            const isPrevCard = index === (currentIndex + 1) % testimonials.length
            const isNextCard = index === (currentIndex + 2) % testimonials.length

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className="absolute w-full h-full rounded-xl cursor-grab active:cursor-grabbing overflow-hidden"
                style={{ zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", willChange: "transform" }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                onClick={isCurrentCard ? () => setCurrentIndex((prev) => (prev + 1) % testimonials.length) : undefined}
                initial={{ scale: 0.95, opacity: 0, y: isCurrentCard ? 0 : isPrevCard ? 6 : 12, rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4 }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.5 : 0.3,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 6 : 12,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.avatar}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ imageRendering: "auto", transform: "translateZ(0)" }}
                />
              </motion.div>
            )
          })}
          {showDots && (
            <div className="absolute -bottom-5 left-0 right-0 flex justify-center gap-1.5 z-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-colors",
                    index === currentIndex ? "bg-black/60" : "bg-black/20",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial }
