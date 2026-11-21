import { cn } from "@/lib/utils";

export function DotBackground({
  className,
  fade = "to bottom",
}: {
  className?: string;
  fade?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none [--dot:rgba(0,0,0,0.12)] dark:[--dot:rgba(255,255,255,0.14)]",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, var(--dot) 1.5px, transparent 0)",
        backgroundSize: "22px 22px",
        maskImage: `linear-gradient(${fade}, black, transparent)`,
        WebkitMaskImage: `linear-gradient(${fade}, black, transparent)`,
      }}
    />
  );
}
