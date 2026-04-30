"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SiteBackground } from "@/components/ui/site-background"
import { GradualSpacing } from "@/components/ui/gradual-spacing"
import { BlurTextEffect } from "@/components/ui/blur-text-effect"
import HoverPlayCard from "@/components/ui/hover-play-card"
import { Tabs, TabsList, TabsTab, TabsPanel } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BlurFade } from "@/components/ui/blur-fade"
import HeroBadge from "@/components/ui/hero-badge"
import { TestimonialCarousel } from "@/components/ui/testimonial"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import BlogCard from "@/components/ui/blog-cards"


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

const interStyle = { fontFamily: "var(--font-inter), sans-serif" }

const CompanyLink = ({ name, id, onOpen }: { name: string; id: string; onOpen: (id: string) => void }) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <span
      onClick={() => onOpen(id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer underline decoration-black/30 underline-offset-2 transition-all"
      style={{ opacity: hovered ? 0.7 : 1 }}
    >
      {name}
    </span>
  )
}

const StoryContent = ({ onOpenExperience }: { onOpenExperience: (id: string) => void }) => {
  const storyLines: (string | React.ReactNode)[] = [
    <>I grew up near Münster, tryharding in <HoverPlayCard src="/fußball goat.mov" /> and enjoying life as a teenager. One day, during my final year at school, I came across a YouTube video about making money online.</>,
    "So I dug into web design and ended up closing several craft businesses and scaling my agency to a solid amount of money for a 17 year old.",
    <>After a boring 9 to 5 in my gap year, I went to Mannheim to study business and really got into startups through <CompanyLink name="Q-Summit" id="qsummit" onOpen={onOpenExperience} />. I interned at <CompanyLink name="Mercanis" id="mercanis" onOpen={onOpenExperience} />, <CompanyLink name="inca" id="inca" onOpen={onOpenExperience} />, and <CompanyLink name="Zauber" id="zauber" onOpen={onOpenExperience} /> will be my next station.</>,
    "These times are super exciting, and the opportunity cost of being stuck in uni instead of building at the hottest startups scares me. So lets get out there and build. LFG!",
  ]

  return (
    <div className="flex flex-col gap-3">
      <h1 className="mb-8 text-left" style={interStyle}>
        <BlurTextEffect className="text-3xl md:text-5xl font-bold text-black">
          quick intro
        </BlurTextEffect>
      </h1>
      <div className="flex flex-col gap-3">
        {storyLines.map((line, i) => (
          <motion.p
            key={i}
            className="text-base md:text-xl text-black/80 leading-relaxed"
            style={interStyle}
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
      <>I&apos;m joining as a Founder&apos;s Associate Intern, working directly with <ErikHoverName />, <FabianHoverName />, and <AlexHoverName />. The company is very early, so my role is to help figure out how Zauber goes to market, build the processes that don&apos;t exist yet, and get the product into the hands of the right customers.</>,
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
      <>I took over as Head of Startup and Venture Capital, leading a 15-member division. I upsold existing partners and cold acquired new ones like Lovable, Trade Republic, OpenAI, and Anthropic. Over 90K in funding acquired, full sales funnel owned from outreach to close.</>,
      <>My year organised our largest conference ever with a record number of partners. ROI of my free time was insane, literally would never be in the place where I am right now without the network, experience and vision. Thanks to the whole team!</>,
    ],
    sidebar: (
      <TestimonialCarousel
        showArrows={false}
        testimonials={[
          { id: 1, name: "", avatar: "/minion arme.JPG", description: "" },
          { id: 2, name: "", avatar: "/conference.webp", description: "" },
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
      <>I scraped leads from Google Maps, cold called them, and eventually closed my first client, which led to referrals and more. Afternoons after school were spent acquiring, weekends were spent building. Occasionally hungover, as you&apos;d expect at 18.</>,
      <>It taught me a lot about sales and customer success. But eventually I realised that websites for tradesmen isn&apos;t a great niche to build something scalable in.</>,
    ],
  },
]

const ExperienceTitle = React.memo(() => (
  <h1 className="mb-8 text-left" style={interStyle}>
    <BlurTextEffect className="text-3xl md:text-5xl font-bold text-black">
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
    <div className="flex flex-col gap-3">
      <ExperienceTitle />
      <div className="relative flex flex-col w-full space-y-2" style={{ minHeight: `${experiences.length * 72}px` }}>
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


const blogPosts = [
  { title: "Coming soon", date: "2025", description: "Stay tuned." },
]

const BlogContent = () => (
  <div className="flex flex-col">
    <h1 className="mb-8 text-left" style={interStyle}>
      <BlurTextEffect className="text-3xl md:text-5xl font-bold text-black">
        blog
      </BlurTextEffect>
    </h1>
    <div className="flex flex-col -mx-4">
      {blogPosts.map((post, i) => (
        <BlogCard key={i} title={post.title} date={post.date} description={post.description} />
      ))}
    </div>
  </div>
)

const tabStyle = {
  fontFamily: "var(--font-inter), sans-serif",
  fontWeight: 500,
}

const DemoOne = () => {
  const [phase, setPhase] = useState<"hero" | "story">("hero")
  const [activeTab, setActiveTab] = useState("story")
  const [openId, setOpenId] = useState<string | null>(null)

  const handleOpenExperience = (id: string) => {
    setActiveTab("experience")
    setOpenId(id)
  }

  useEffect(() => {
    const t = setTimeout(() => setPhase("story"), 2500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const images = ["/minion arme.JPG", "/conference.webp", "/pitchbattle.webp"]
    images.forEach(src => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SiteBackground />

      <AnimatePresence>
        {phase === "hero" && (
          <motion.div
            key="hero"
            className="absolute inset-0 z-10 flex items-center justify-center"
            exit={{ y: -80, opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          >
            <div className="md:hidden flex flex-col items-center">
              <GradualSpacing
                text="Ciaran"
                duration={0.8}
                delayMultiple={0.06}
                className="text-6xl font-bold leading-none text-black block"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              />
              <GradualSpacing
                text="Norris"
                duration={0.8}
                delayMultiple={0.06}
                className="text-6xl font-bold leading-none text-black block"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              />
            </div>
            <div className="hidden md:block">
              <GradualSpacing
                text="Ciaran Norris"
                duration={0.8}
                delayMultiple={0.06}
                className="text-9xl font-bold leading-none text-black"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              onValueChange={(val) => { if (val === activeTab && val === "experience") { setOpenId(null); } else { setActiveTab(val); setOpenId(null); } }}
              orientation="vertical"
            >
              {/* Side nav — desktop only */}
              <div className="hidden md:flex absolute left-0 top-0 bottom-0 items-center px-8 py-16 z-50">
                <TabsList variant="underline" className="gap-6 [&_[data-slot=tabs-tab]]:text-black [&_[data-slot=tabs-tab]]:hover:bg-transparent [&_[data-slot=tabs-tab]]:hover:text-black/55 [&_[data-slot=tabs-tab]]:transition-colors">
                  <TabsTab value="story" style={tabStyle}>intro</TabsTab>
                  <TabsTab value="experience" style={tabStyle}>experience</TabsTab>
                  <TabsTab value="blog" style={tabStyle}>blog</TabsTab>
                </TabsList>
              </div>

              {/* Content — centered in full viewport */}
              <div className="w-full h-full flex items-center justify-center px-6 md:px-16 md:py-16 pt-16 pb-[80px] overflow-y-auto overflow-x-hidden md:overflow-x-auto">
                <div className="w-full max-w-3xl">
                  <TabsPanel value="story"><StoryContent onOpenExperience={handleOpenExperience} /></TabsPanel>
                  <TabsPanel value="experience"><ExperienceContent openId={openId} setOpenId={setOpenId} /></TabsPanel>
                  <TabsPanel value="blog"><BlogContent /></TabsPanel>
                </div>
              </div>
            </Tabs>
            {/* Mobile bottom nav — plain buttons, outside Tabs */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center gap-8 pb-6">
              {["story", "experience", "blog"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => { if (tab === activeTab && tab === "experience") { setOpenId(null); } else { setActiveTab(tab); setOpenId(null); } }}
                  className="cursor-pointer transition-colors text-base font-medium"
                  style={{
                    ...tabStyle,
                    color: activeTab === tab ? "black" : "rgba(0,0,0,0.4)",
                    borderBottom: activeTab === tab ? "1.5px solid black" : "none",
                    paddingBottom: 2,
                  }}
                >
                  {tab === "story" ? "intro" : tab}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { DemoOne }
