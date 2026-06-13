"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";


type Run = {
  id: number;
  name: string;
  date: string;
  distance_km: number;
  duration: string;
  pace: string;
  elevation_m: number;
  strava_url: string;
};

type Month = {
  key: string;
  label: string;
  runs: Run[];
  distance_km: number;
  duration: string;
};

type StravaData = {
  ytd: { runs: number; distance_km: number };
  months: Month[];
};

interface StravaPopupProps {
  data: StravaData | null;
  onClose: () => void;
}

const sfStyle = { fontFamily: "var(--font-inter), sans-serif" };

export function StravaPopup({ data, onClose }: StravaPopupProps) {
  const [monthIndex, setMonthIndex] = React.useState(0);

  // ESC to close
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Guard against error responses from API
  const safeData = data && Array.isArray((data as { months?: unknown }).months) ? data : null;
  const month = safeData?.months[monthIndex];

  return (
    <>
      {/* Full-page backdrop — click outside closes */}
      <div className="fixed inset-0 z-10" onClick={onClose} />

      <motion.div
        className="absolute -top-3 -left-3 -right-3 -bottom-16 z-20 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full bg-white overflow-y-auto rounded-2xl border border-black/8 shadow-xl">

          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#FC4C02]">
                <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
              </svg>
              <span className="text-sm font-semibold text-black/70" style={sfStyle}>strava-maxxing</span>
            </div>
            <button onClick={onClose} className="text-black/30 hover:text-black/60 transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Month selector */}
          <div className="flex items-center justify-between px-4 pb-3">
            <button
              onClick={() => setMonthIndex(i => Math.min(i + 1, (data?.months.length ?? 1) - 1))}
              disabled={monthIndex >= (safeData?.months.length ?? 1) - 1}
              className="p-1 hover:text-black/60 transition-colors disabled:opacity-25 text-black/35"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm font-medium text-black/50" style={sfStyle}>
              {month?.label ?? "—"}
            </span>
            <button
              onClick={() => setMonthIndex(i => Math.max(i - 1, 0))}
              disabled={monthIndex === 0}
              className="p-1 hover:text-black/60 transition-colors disabled:opacity-25 text-black/35"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Month stats */}
          <div className="grid grid-cols-3 gap-2 px-4 mb-4">
            {[
              { value: month?.distance_km != null ? `${month.distance_km}` : "—", unit: "km" },
              { value: month?.duration ?? "—", unit: "time" },
              { value: month?.runs?.length != null ? `${month.runs.length}` : "—", unit: "runs" },
            ].map(({ value, unit }) => (
              <div key={unit} className="rounded-xl bg-black/4 px-3 py-2.5 text-center">
                <div className="text-base font-bold text-black/75 leading-none mb-0.5" style={sfStyle}>{value}</div>
                <div className="text-[10px] text-black/35 uppercase tracking-wide" style={sfStyle}>{unit}</div>
              </div>
            ))}
          </div>

          {/* Runs list */}
          <div className="px-4 pb-4">
            <div className="text-[10px] text-black/35 uppercase tracking-wide mb-2" style={sfStyle}>runs</div>
            <div className="space-y-1.5">
              {(month?.runs ?? []).filter(Boolean).map((run) => (
                <a
                  key={run.id}
                  href={run.strava_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl bg-black/3 hover:bg-black/6 transition-colors px-3 py-2.5 group"
                >
                  <div>
                    <div className="text-xs text-black/40 leading-none mb-1" style={sfStyle}>
                      {new Date(run.date).toLocaleDateString("en", { weekday: "short", day: "numeric", month: "short" })}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm font-semibold text-black/75" style={sfStyle}>{run.distance_km} km</span>
                      <span className="text-xs text-black/40" style={sfStyle}>{run.pace} /km</span>
                    </div>
                  </div>
                  <ExternalLink className="h-3 w-3 text-black/20 group-hover:text-black/45 transition-colors" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </>
  );
}
