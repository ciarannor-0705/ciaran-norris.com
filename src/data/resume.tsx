import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Ciaran Norris",
  initials: "CN",
  url: "https://ciaran-norris.com",
  location: "Mannheim, Germany",
  locationLink: "https://www.google.com/maps/place/Mannheim",
  description:
    "Business student, startup operator and future entrepreneur. I love building things and diving into the unknown.",
  summary:
    "In summer 2024, I quit my corporate 9-5 and moved to Mannheim to study business. I had the pleasure of joining a startup initiative and gaining experience in GTM, marketing and hiring at stellar startups in Berlin.\n\nI am very excited about AI and the future that lies ahead of us, and I enjoy putting my mind to how I can excel in an ever-changing world. I like reading, but building side projects and ideas is what sparks the entrepreneurial spirit in me.",
  avatarUrl: "/me.jpg",
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ciaran-norris/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Zauber",
      badges: [],
      title: "Founders Associate Intern",
      logoUrl: "/zauber.png",
      start: "June 2026",
      end: "September 2026",
      description:
        "Zauber builds AI agents for freight forwarders, backed by Point Nine. I worked with the CEO and CCO, build their LinkedIn motion from scratch and build sales and lead generation automations. Also organized events like an executive AI dinner, and jumped on anything else on fire.",
    },
    {
      company: "inca",
      badges: [],
      title: "Founders Associate Intern",
      logoUrl: "/inca.png",
      start: "January 2026",
      end: "March 2026",
      description:
        "inca is an AI-native TPA automating e2e insurance claims handling. I joined as one of the first interns and worked with the CEO on operations, ABM execution, and building pipeline through content and campaigns. Also discovered Claude Code and burned a lot of tokens.",
    },
    {
      company: "Mercanis",
      badges: [],
      title: "GTM Intern",
      logoUrl: "/mercanis.png",
      start: "June 2025",
      end: "September 2025",
      description:
        "Mercanis builds an AI procurement platform for industrial enterprises, from source to pay. I joined the GTM team and owned outbound (cold calls, emails) and generated over 700K in demo pipeline. Also helped execute inbound channels like events and webinars.",
    },
    {
      company: "Q-Summit",
      href: "https://q-summit.com",
      badges: [],
      title: "Head of Startup and VC",
      logoUrl: "/qsummit.png",
      start: "May 2025",
      end: "April 2026",
      description:
        "Q-Summit is Germany's largest student-run startup conference, with over 1500 participants and 90+ partners. I led the 12-member startup division and owned the full sales funnel from cold outreach, closing and upselling. Acquired 45k in funding and had a really cool conference.",
    },
  ],
  education: [
    {
      school: "University of Mannheim",
      degree: "Business Administration",
      logoUrl: "/uni-mannheim.png",
      start: "2024",
      end: "2027",
    },
  ],
} as const;
