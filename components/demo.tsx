"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { SiteBackground } from "@/components/ui/site-background"
import { BlurTextEffect } from "@/components/ui/blur-text-effect"
import { Tabs, TabsList, TabsTab, TabsPanel } from "@/components/ui/tabs"
import { ChevronRight, Headphones } from "lucide-react"
import { ProductHighlightCard } from "@/components/ui/product-card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BlurFade } from "@/components/ui/blur-fade"
import HeroBadge from "@/components/ui/hero-badge"
import { TestimonialCarousel } from "@/components/ui/testimonial"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { DestinationCard } from "@/components/ui/card-21"
import { LinkCard } from "@/components/ui/card-26"


const PersonHoverName = ({ name, photo, fallback, linkedin }: { name: string; photo: string; fallback: string; linkedin: string }) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 z-50"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Avatar className="h-7 w-7 rounded-full ring-1 ring-black/10 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <AvatarImage src={photo} alt={name} />
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
          </motion.div>
        )}
      </AnimatePresence>
      <span
        className="underline decoration-black/20 underline-offset-2 transition-colors"
        style={{ color: hovered ? "rgba(0,0,0,0.55)" : "inherit" }}
      >{name}</span>
    </a>
  )
}

const ErikHoverName = () => <PersonHoverName name="Erik" photo="/erik foto.jpeg" fallback="E" linkedin="https://www.linkedin.com/in/erikmuttersbach/" />
const FabianHoverName = () => <PersonHoverName name="Fabian" photo="/fabian foto .jpeg" fallback="F" linkedin="https://www.linkedin.com/in/dr-fabian-struck-6b5b74146/" />
const AlexHoverName = () => <PersonHoverName name="Alex" photo="/alex foto.jpeg" fallback="A" linkedin="https://www.linkedin.com/in/alexkrass/" />
const PhilipHoverName = () => <PersonHoverName name="Philip" photo="/philip foto.jpeg" fallback="P" linkedin="https://www.linkedin.com/in/philipnag/" />

const CiaranHoverName = () => {
  const [hovered, setHovered] = React.useState(false)
  const containerRef = React.useRef<HTMLSpanElement>(null)

  React.useLayoutEffect(() => {
    if (!containerRef.current) return
    const chars = containerRef.current.querySelectorAll('span.char')
    gsap.set(chars, { opacity: 0, y: 6 })
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
      stagger: 0.02,
      delay: 8 * 0.02,
    })
  }, [])

  return (
    <a
      href="https://www.linkedin.com/in/ciaran-norris/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 z-50"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Avatar className="h-10 w-10 rounded-full ring-1 ring-black/10 shadow-sm">
              <AvatarImage src="/profil.png" alt="Ciaran" />
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
          </motion.div>
        )}
      </AnimatePresence>
      <span
        ref={containerRef}
        className="text-3xl md:text-5xl font-bold inline-block"
        style={{ color: hovered ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0.75)", fontFamily: "var(--font-inter), sans-serif", letterSpacing: "-0.03em" }}
      >
        {"ciaran.".split('').map((char, i) => (
          <span key={i} className="char inline-block" style={{ whiteSpace: 'pre' }}>
            {char}
          </span>
        ))}
      </span>
    </a>
  )
}

const interStyle = { fontFamily: "var(--font-inter), sans-serif" }
const headingStyle = { fontFamily: "var(--font-inter), sans-serif", letterSpacing: "-0.03em" }

const CompanyLink = ({ name, id, onOpen }: { name: string; id: string; onOpen: (id: string) => void }) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <span
      onClick={() => onOpen(id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer transition-all underline decoration-black/20 underline-offset-2"
      style={{ color: hovered ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.88)" }}
    >
      {name}
    </span>
  )
}

const StoryContent = ({ onOpenExperience }: { onOpenExperience: (id: string) => void }) => {
  const storyLines: (string | React.ReactNode)[] = [
    "I had my first touchpoint with entrepreneurship during high school, when I came across videos on how to make money online by developing a cool skill.",
    "I always liked being creative, so I dug into web design, cold-called local craft businesses, and closed my first clients. It was a pretty exciting experience, but also showed me that I needed more experienced entrepreneurs around me to build something real.",
    "My first intuition was to do a gap year at a German hidden champion, but inputting receipts into SAP turned out didn't really help me found a company. I quit and moved to Mannheim to study business.",
    <>Thankfully, I joined <CompanyLink name="Q-Summit" id="qsummit" onOpen={onOpenExperience} />, which really sparked my interest in startups. Besides hosting a large startup conference, I also did internships in commercial functions at <CompanyLink name="Mercanis" id="mercanis" onOpen={onOpenExperience} />, <CompanyLink name="inca" id="inca" onOpen={onOpenExperience} />, and <CompanyLink name="Zauber" id="zauber" onOpen={onOpenExperience} />.</>,
    "These last two years of my studies have really sharpened my vision to found my own company in the next 12-16 months, and given me way more ideas than I can build.",
  ]

  return (
    <div className="flex flex-col gap-3 h-full md:h-auto min-h-0">
      <h1 className="mb-4 text-left shrink-0" style={headingStyle}>
        <BlurTextEffect className="text-3xl md:text-5xl font-bold text-black/75">{"hi, i'm "}</BlurTextEffect>
        <CiaranHoverName />
      </h1>
      <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-y-auto md:flex-none md:overflow-visible pb-16 md:pb-0">
        {storyLines.map((line, i) => (
          <motion.p
            key={i}
            className="text-base text-black/80 leading-relaxed"
            style={{ ...interStyle, fontWeight: 500 }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut", delay: i * 0.05 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  )
}

type Experience = {
  id: string
  title: string
  logo: string
  fullLogo: string
  content: string
  contentNodes?: React.ReactNode[]
  sidebar?: React.ReactNode
  popupStyle?: React.CSSProperties
}


const experiences: Experience[] = [
  {
    id: "zauber",
    title: "Founders Associate Intern",
    logo: "/zauber icon logo.png",
    fullLogo: "/Zauber full logo.png",
    content: "",
    contentNodes: [
      <>Zauber is building AI agents for sea and air freight forwarders. The industry still runs on complex SOPs, Outlook threads, and thousands of operators doing repetitive work. AI is finally ready to automate that.</>,
      <>The company was founded in 2024 by Erik, co-founder of Forto, a German logistics unicorn that raised over 500M in capital, and is backed by Point Nine.</>,
      <>I joined as a Founder&apos;s Associate Intern, working directly with <ErikHoverName />, <FabianHoverName />, and <AlexHoverName />. I owned marketing, from LinkedIn content to lead generation and sales automations. I also organized events like AI dinners and poker nights, and jumped on anything else that was on fire.</>,
    ],
  },
  {
    id: "inca",
    title: "Founders Associate Intern",
    logo: "/inca logo icon.png",
    fullLogo: "/inca full logo.png",
    content: "",
    contentNodes: [
      <>inca is an AI-native TPA automating end-to-end insurance claims handling. Founded in 2025 by three former BCG Project Leaders, backed by London-based VC FuturePresent.</>,
      <>I joined as one of the first interns alongside <PhilipHoverName />, working on sales operations, ABM execution, and building pipeline from scratch. When I noticed our GTM team wasn&apos;t leveraging AI, I owned the project of changing that: identifying high-impact workflows, building a unified client database, and connecting Claude Code and n8n to create custom skills the team could use autonomously.</>,
      <>This is where I learned to automate what moves the needle and developed the sense to point AI in the right direction.</>,
    ],
  },
  {
    id: "mercanis",
    title: "GTM Intern",
    logo: "/mercanis logo.png",
    fullLogo: "/mercanis full logo.png",
    content: "",
    contentNodes: [
      <>Mercanis is a Series A B2B SaaS company building procurement software for German enterprises, unifying SRM, tenders, and sourcing into one platform.</>,
      <>I joined as a GTM Intern, owning outbound pipeline from cold calls to qualification. In three months I generated over 700K in demo pipeline while also helping execute inbound channels like events and webinars.</>,
      <>This was where I first learned what execution in a fast-growing startup looks like, and where I started using AI tools to enable a sales team.</>,
    ],
  },
  {
    id: "qsummit",
    title: "Head of Startup and VC",
    logo: "/q-summit icon logo.png",
    fullLogo: "/Q-Summit full logo.png",
    content: "",
    contentNodes: [
      <>Q-Summit is Germany&apos;s largest student-run startup conference with over 1500 participants at the University of Mannheim, connecting top talent with leading startups and VCs.</>,
      <>I took over as Head of Startup and Venture Capital, leading a 15-member division. I upsold existing partners and cold acquired new ones like Lovable, Trade Republic, OpenAI, and Anthropic. Over 45K in funding acquired, full sales funnel owned from outreach to close.</>,
      <>My year organised our largest conference ever with a record number of partners. ROI of my free time was insane, literally would never be in the place where I am right now without the network, experience and vision. Thanks to the whole team!</>,
    ],
    sidebar: (
      <TestimonialCarousel
        showArrows={false}
        testimonials={[
          { id: 1, name: "", avatar: "/minion arme.JPG", description: "" },
          { id: 2, name: "", avatar: "/Mainstage.jpg", description: "" },
          { id: 3, name: "", avatar: "/pitchbattle.webp", description: "" },
        ]}
        className="w-full h-full"
      />
    ),
  },
  {
    id: "agency",
    title: "Founder & CEO",
    logo: "/agency logo.png",
    fullLogo: "/agency logo.png",
    content: "",
    contentNodes: [
      <>At 17 I started my own agency, selling websites to local trades and craftsmen. SEO and paid ads were tailored to help them attract new employees and customers through their online presence.</>,
      <>I scraped leads from Google Maps, cold called them, and eventually closed my first client, which led to referrals and more.</>,
      <>Taught me a lot about sales and had fun.</>,
    ],
  },
]

const ExperienceTitle = React.memo(() => (
  <h1 className="mb-4 text-left" style={headingStyle}>
    <BlurTextEffect className="text-3xl md:text-5xl font-bold text-black/75">
      experience
    </BlurTextEffect>
  </h1>
))
ExperienceTitle.displayName = "ExperienceTitle"

const ExperienceContent = ({ openId, setOpenId }: { openId: string | null; setOpenId: (id: string | null) => void }) => {
  const activeExp = experiences.find((e) => e.id === openId)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenId(null) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [setOpenId])

  return (
    <div className="flex flex-col gap-3 pb-24 md:pb-0">
      <ExperienceTitle />
      <div className="relative flex flex-col w-full space-y-2 min-h-[min(60dvh,560px)] md:min-h-[360px]">
        {experiences.map((exp, i) => (
          <motion.div key={exp.id} className="flex items-center justify-between w-full border border-black/10 hover:border-black/30 rounded-lg px-4 py-4 cursor-pointer transition-colors" onClick={() => setOpenId(exp.id)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: i * 0.04 }}
          >
            <HeroBadge
              text={exp.title}
              icon={
                // eslint-disable-next-line @next/next/no-img-element
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  {exp.logo ? <img src={exp.logo} alt="" className="h-5 w-auto object-contain" /> : null}
                </div>
              }
              variant="default"
              size="md"
              className="!p-0 font-medium text-black text-base"
              style={interStyle}
            />
            <ChevronRight className="size-4 text-black/50 shrink-0" strokeWidth={1.5} />
          </motion.div>
        ))}

        <AnimatePresence>
          {openId && activeExp && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setOpenId(null)} />
              <motion.div
                className="absolute inset-0 bg-white rounded-lg border border-black/10 shadow-lg z-50 px-6 pt-5 pb-4 flex flex-col"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ type: "spring", bounce: 0.1, duration: 0.35 }}
              >
                <button
                  onClick={() => setOpenId(null)}
                  className="absolute top-3 right-4 text-black/30 hover:text-black transition-colors text-sm cursor-pointer"
                >
                  ✕
                </button>
                <BlurFade delay={0} duration={0.35}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={activeExp.fullLogo} alt={activeExp.title} className="h-8 w-auto object-contain mb-4 mt-1 self-start" />
                </BlurFade>
                <ScrollArea className="flex-1">
                  <div className="flex flex-col gap-3 pr-4 min-h-full justify-center">
                    {(activeExp.contentNodes
                      ? activeExp.contentNodes
                      : activeExp.content.split("\n\n")
                    ).map((para, i) => (
                      <BlurFade key={i} delay={i * 0.08} duration={0.35}>
                        {typeof para === "string"
                          ? <p className="text-base text-black/70 leading-relaxed text-left" style={interStyle}>{para}</p>
                          : <div className="text-base text-black/70" style={interStyle}>{para}</div>
                        }
                      </BlurFade>
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
              {/* Sidebar cards — float to the right of the popup */}
              {activeExp.sidebar && (
                <motion.div
                  className="hidden md:flex absolute top-0 bottom-0 left-full ml-5 z-50 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { type: "spring", bounce: 0.15, duration: 0.5, delay: 0.25 } }}
                  exit={{ opacity: 0, y: 20, transition: { type: "spring", bounce: 0.1, duration: 0.35 } }}
                  style={{ width: 240 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div style={{ width: 240, height: 260, paddingBottom: 20 }}>
                    {activeExp.sidebar}
                  </div>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}



const StuffContent = () => {
  return (
    <div className="flex flex-col">
      <h1
        className="mb-8 text-left"
        style={{ ...headingStyle, fontVariantLigatures: "none", fontFeatureSettings: '"liga" 0, "calt" 0' }}
      >
        <BlurTextEffect className="text-3xl md:text-5xl font-bold text-black/75">
          stuff
        </BlurTextEffect>
      </h1>

      <div className="relative grid grid-cols-3 gap-3 w-full">
        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.10 }}
        >
          <LinkCard
            title="tech stack"
            description="claude code, n8n, vercel, cursor, and too many tabs."
            imageUrl="/second foto.png"
            href="#"
            target="_self"
            rel=""
            onClick={(e) => e.preventDefault()}
            className="cursor-default"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
        >
          <LinkCard
            title="music-maxxing"
            description="always has something playing. mostly techno and house."
            imageUrl="/third foto.png"
            href="#"
            target="_self"
            rel=""
            onClick={(e) => e.preventDefault()}
            className="cursor-default"
          />
        </motion.div>

      </div>
    </div>
  )
}

const tabStyle = {
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 500,
}

const DemoOne = () => {
  const phase = "story" as const
  const [activeTab, setActiveTab] = useState("story")
  const [openId, setOpenId] = useState<string | null>(null)

  const handleOpenExperience = (id: string) => {
    setActiveTab("experience")
    setOpenId(id)
  }

  const handleTabChange = (val: string) => {
    if (val === activeTab && val === "experience") {
      setOpenId(null)
    } else {
      setActiveTab(val)
      setOpenId(null)
    }
  }

  useEffect(() => {
    const images = ["/minion arme.JPG", "/Mainstage.jpg", "/pitchbattle.webp"]
    images.forEach(src => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SiteBackground />

      <AnimatePresence>
        {phase === "story" && (
          <motion.div
            key="story"
            className="absolute inset-0 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }}
          >
            <Tabs
              className="w-full h-full flex-row relative"
              value={activeTab}
              onValueChange={handleTabChange}
              orientation="vertical"
            >
              {/* Side nav — desktop only */}
              <div className="hidden md:flex absolute left-0 top-0 bottom-0 items-center px-8 py-16 z-50">
                <TabsList variant="underline" className="gap-6 [&_[data-slot=tabs-tab]]:text-black/80 [&_[data-slot=tabs-tab]]:!text-base [&_[data-slot=tabs-tab]]:hover:bg-transparent [&_[data-slot=tabs-tab]]:hover:text-black/65 [&_[data-slot=tabs-tab]]:transition-colors [&_[data-slot=tab-indicator]]:bg-black/75">
                  <TabsTab value="story" style={tabStyle}>about</TabsTab>
                  <TabsTab value="experience" style={tabStyle} onClick={() => setOpenId(null)}>experience</TabsTab>
                </TabsList>
              </div>

              {/* Content — centered in full viewport */}
              <div className="w-full h-full flex flex-col items-stretch justify-start overflow-hidden md:flex-row md:items-center md:justify-center px-6 md:px-16 md:py-16 pt-16 pb-6 md:pb-[80px] overflow-x-hidden md:overflow-x-auto">
                <div className="w-full max-w-3xl h-full md:h-auto min-h-0 overflow-y-auto md:overflow-visible">
                  <TabsPanel value="story" className="h-full md:h-auto"><StoryContent onOpenExperience={handleOpenExperience} /></TabsPanel>
                  <TabsPanel value="experience"><ExperienceContent openId={openId} setOpenId={setOpenId} /></TabsPanel>
                  <TabsPanel value="stuff"><StuffContent /></TabsPanel>
                </div>
              </div>
            </Tabs>
            {/* Mobile bottom nav — plain buttons, outside Tabs */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
              <div className="h-20 bg-gradient-to-t from-white to-transparent" />
              <div
                className="flex justify-center gap-8 bg-white pb-6 pt-1"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.12) 1.5px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              >
                {["story", "experience"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => { handleTabChange(tab); if (tab === "experience") setOpenId(null); }}
                    className="cursor-pointer transition-colors text-base font-medium"
                    style={{
                      ...tabStyle,
                      color: activeTab === tab ? "black" : "rgba(0,0,0,0.4)",
                      borderBottom: activeTab === tab ? "1.5px solid black" : "none",
                      paddingBottom: 2,
                    }}
                  >
                    {tab === "story" ? "about" : tab}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { DemoOne }
