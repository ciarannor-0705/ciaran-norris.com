"use client";

import { MessageCircle, User, Briefcase } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const NavOptions = [
  {
    icon: <User className="h-4 w-4" />,
    tooltip: "About",
    section: "about",
  },
  {
    icon: <Briefcase className="h-4 w-4" />,
    tooltip: "Work",
    section: "work",
  },
  {
    icon: <MessageCircle className="h-4 w-4" />,
    tooltip: "Contact",
    section: "contact",
  },
];

function NavPill({ onNavigate }: { onNavigate: (section: string) => void }) {
  return (
    <div className="flex gap-2 justify-center items-center text-black border border-black bg-white/80 backdrop-blur-sm rounded-xl px-2 py-1.5 shadow-sm">
      {NavOptions.map((option) => (
        <button
          key={option.tooltip}
          onClick={() => onNavigate(option.section)}
          className="relative p-1 group hover:bg-black/5 rounded-full cursor-pointer flex flex-col items-center justify-center transition-colors"
        >
          {option.icon}
          <p className="text-xs absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white border border-black/10 px-1.5 py-0.5 rounded-md text-center whitespace-nowrap shadow-sm">
            {option.tooltip}
          </p>
        </button>
      ))}
    </div>
  );
}

export function QuickNav({ onNavigate }: { onNavigate: (section: string) => void }) {
  return (
    <TooltipProvider>
      <NavPill onNavigate={onNavigate} />
    </TooltipProvider>
  );
}
