"use client"

import * as React from "react"
import { motion, MotionConfig, type Transition } from "framer-motion"
import { Input } from "@/components/ui/input"
import { MessageSquare, X, Send } from "lucide-react"

const N8N_WEBHOOK_URL = "/api/chat"

const transition: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.3,
}

type Message = {
  role: "user" | "ai"
  text: string
}

export default function MinimalChatBox() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([])
  const [input, setInput] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const bottomRef = React.useRef<HTMLDivElement>(null)
  const sessionId = React.useRef(`session-${Math.random().toString(36).slice(2)}`)

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  const handleSend = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput("")
    setMessages((prev) => [...prev, { role: "user", text }])
    setLoading(true)
    try {
      console.log("[Chat] Sending to n8n:", text)
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId: sessionId.current }),
      })
      console.log("[Chat] Response status:", res.status)
      const raw = await res.text()
      console.log("[Chat] Raw response:", raw)
      const data = JSON.parse(raw)
      const reply = data.output ?? data.text ?? data.message ?? data.response ?? "..."
      setMessages((prev) => [...prev, { role: "ai", text: reply }])
    } catch (err) {
      console.error("[Chat] Error:", err)
      setMessages((prev) => [...prev, { role: "ai", text: "Something went wrong. Please try again." }])
    } finally {
      setLoading(false)
    }
  }

  const interStyle = { fontFamily: "var(--font-inter), sans-serif" }

  return (
    <MotionConfig transition={transition}>
      <div className="fixed bottom-6 right-6 z-50" style={interStyle}>
        <motion.div
          animate={{
            height: isOpen ? "400px" : "46px",
            width: isOpen ? "300px" : "46px",
          }}
          initial={false}
          className="flex flex-col overflow-hidden bg-white rounded-lg border border-black/10 shadow-sm"
        >
          {/* Header */}
          <div className={`flex items-center ${isOpen ? "justify-between px-4" : "justify-center"} py-3 border-b border-black/10`}>
            {isOpen && (
              <span className="text-sm font-medium text-black">Chat</span>
            )}
            <div
              className="flex items-center justify-center w-5 h-5 cursor-pointer text-black/40 hover:text-black transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={16} /> : <MessageSquare size={16} />}
            </div>
          </div>

          {/* Messages */}
          {isOpen && (
            <div className="flex-1 px-4 py-3 overflow-y-auto flex flex-col gap-2">
              {messages.length === 0 && !loading ? (
                <span className="text-black/30 text-sm">Ask me anything...</span>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`text-sm px-3 py-2 rounded-lg max-w-[85%] ${
                      msg.role === "user"
                        ? "self-end bg-black text-white"
                        : "self-start bg-black/5 text-black/80"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))
              )}
              {loading && (
                <div className="self-start bg-black/5 px-3 py-2 rounded-lg flex gap-1 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-black/30 animate-bounce [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-black/30 animate-bounce [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-black/30 animate-bounce" />
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          )}

          {/* Input */}
          {isOpen && (
            <div className="flex items-center gap-2 px-3 py-3 border-t border-black/10">
              <Input
                className="flex-1 h-9 rounded-lg border border-black/10 bg-white text-sm text-black placeholder:text-black/30 focus-visible:ring-1 focus-visible:ring-black/20 focus-visible:border-black/30 shadow-none"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                style={interStyle}
                disabled={loading}
              />
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-black cursor-pointer hover:bg-black/80 transition-colors shrink-0"
                onClick={handleSend}
              >
                <Send size={15} className="text-white" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </MotionConfig>
  )
}
