import * as React from "react";
import { cn } from "@/lib/utils";

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location?: string;
  href?: string;
  themeColor: string;
  showOverlay?: boolean;
  noGlow?: boolean;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  ({ className, imageUrl, location, href = "#", themeColor, showOverlay = true, noGlow = false, onClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{ "--theme-color": themeColor } as React.CSSProperties}
        className={cn("group w-full cursor-pointer", className)}
        onClick={onClick}
        {...props}
      >
        <div
          className="relative block w-full h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out group-hover:scale-[1.02] bg-black/80"
          style={{ boxShadow: noGlow ? "none" : `0 0 40px -15px hsl(var(--theme-color) / 0.5)` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          {showOverlay && (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, hsl(var(--theme-color) / 0.9), hsl(var(--theme-color) / 0.5) 40%, transparent 70%)`,
              }}
            />
          )}
          {location && (
            <div className="relative flex flex-col justify-start h-full px-5 pt-[68%] text-white">
              <h3 className="text-xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                {location}
              </h3>
            </div>
          )}
        </div>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
