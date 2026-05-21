"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Bot, User, Loader2, Globe, GraduationCap, Ticket, Briefcase } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const INITIAL: Msg[] = [
  {
    role: "assistant",
    content: "👋 Hi! I'm your GreenPassage AI Coach. I'm here to help you plan your move abroad — whether that's finding scholarships, navigating visa processes, or figuring out which country is right for you.\n\nWhat would you like help with today?",
  },
];

const quickPrompts = [
  { icon: GraduationCap, label: "Find scholarships for me", prompt: "Can you help me find scholarships that match my profile? I have a Bachelor's degree in Engineering." },
  { icon: Ticket, label: "How to enter DV Lottery", prompt: "Walk me through how to enter the US Diversity Visa Lottery 2027 step by step." },
  { icon: Globe, label: "Best country for nurses", prompt: "I'm a qualified nurse from Nigeria. Which country has the best immigration pathway for healthcare workers?" },
  { icon: Briefcase, label: "Canada Express Entry", prompt: "Explain how the Canada Express Entry system works and what score I need to get invited." },
];

const RESPONSES: Record<string, string> = {
  default: "That's a great question! Based on what you've shared, here's what I recommend:\n\n**Key points to consider:**\n- Check the official government website for the most current requirements\n- Start preparing your documents at least 3–6 months in advance\n- Consider getting a professional assessment for your credentials\n\nWould you like me to go deeper into any specific aspect of your migration journey?",
  scholarship: "Great — let me find the best scholarship matches for an Engineering graduate! 🎓\n\n**Top Scholarships for You:**\n\n1. **DAAD Scholarship (Germany)** — Fully funded Masters/PhD. Deadline: Nov 15, 2026. Perfect for STEM fields.\n\n2. **Chevening (UK)** — Full fees + living stipend for a 1-year Masters. Deadline: Nov 7, 2026.\n\n3. **Fulbright Program (USA)** — Prestigious fully funded award. Deadline: Feb 2027.\n\n4. **Erasmus Mundus (Europe)** — €1,400/month for joint Masters across EU universities.\n\n**My recommendation:** Apply to DAAD first — Germany is the most accessible for engineers and the deadline is coming up soon.\n\nWould you like a step-by-step application guide for any of these?",
  lottery: "Here's your complete DV Lottery 2027 guide! 🎯\n\n**Step-by-Step:**\n\n**Step 1 — Check eligibility**\nMost African, Asian, and European countries qualify. Go to dvlottery.state.gov to confirm.\n\n**Step 2 — Prepare your photo**\nThis is the #1 reason for disqualification. Requirements:\n- Recent, in colour\n- 2×2 inches (51×51mm)\n- White background\n- Face must take up 50–69% of the frame\n\n**Step 3 — Complete the free form**\nOnly at: dvlottery.state.gov — IT'S FREE. Never pay a third party.\n\n**Step 4 — Save your confirmation number**\nYou will not get an email. The confirmation number is your ONLY proof of entry.\n\n**Step 5 — Check results in May 2027**\nOnly at dvlottery.state.gov — results are not sent by email.\n\n⚠️ **Warning:** Avoid websites charging money to enter the lottery. The official process is completely free.\n\nWant me to explain what happens after you win?",
  nurse: "Excellent timing! Healthcare workers are in massive global demand right now 🏥\n\n**Best Countries for Nigerian Nurses:**\n\n🇬🇧 **UK — #1 Recommendation**\n- Nursing is on the Shortage Occupation List\n- Skilled Worker Visa: employer sponsors you\n- Average salary: £28,000–£40,000\n- Path to ILR (permanent residency) in 5 years\n- NMC registration required (OSCE exam)\n\n🇦🇺 **Australia — #2**\n- Nursing Subclass 190/189 available\n- Average salary: AUD $75,000\n- AHPRA registration required\n- Excellent quality of life\n\n🇨🇦 **Canada — #3**\n- High demand across all provinces\n- NCLEX-RN exam required\n- Average salary: CAD $75,000\n- Fast PR pathway via Express Entry\n\n**My advice:** Start with the UK — they have an official NHS international recruitment pathway specifically for Nigerian nurses with a structured support process.\n\nShall I walk you through the UK Skilled Worker Visa process for nurses?",
  canada: "Canada's Express Entry is one of the world's best immigration systems! 🍁\n\n**How it works:**\n\n1. **Create a profile** — you enter your age, education, language scores, and work experience\n\n2. **Get a CRS score** — the system assigns you a Comprehensive Ranking System score (max 1,200)\n\n3. **Enter the pool** — you join a pool with thousands of other candidates\n\n4. **Wait for an ITA** — every 2 weeks, Canada invites the highest-scoring candidates\n\n5. **Apply within 60 days** — once invited, you have 60 days to submit your full application\n\n**What score do I need?**\nRecent draws have invited candidates scoring 470–510. But:\n- Category-based draws (healthcare, STEM, French) often invite at lower scores\n- Each province has its own stream (PNP) which can boost your score by 600 points\n\n**How to improve your score:**\n- Higher IELTS score (CLB 9+ gives maximum language points)\n- A job offer adds 50–200 points\n- Getting a Provincial Nomination adds 600 points\n- More years of Canadian work experience helps\n\nWould you like me to estimate your CRS score based on your profile?",
};

function getResponse(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("scholarship") || m.includes("daad") || m.includes("chevening")) return RESPONSES.scholarship;
  if (m.includes("lottery") || m.includes("dv") || m.includes("green card")) return RESPONSES.lottery;
  if (m.includes("nurse") || m.includes("healthcare") || m.includes("health")) return RESPONSES.nurse;
  if (m.includes("canada") || m.includes("express entry") || m.includes("crs")) return RESPONSES.canada;
  return RESPONSES.default;
}

function MessageBubble({ msg }: { msg: Msg }) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${isUser ? "bg-teal-500" : "bg-navy-700 border border-teal-500/20"}`}>
        {isUser ? <User className="w-4 h-4 text-navy-900" /> : <Bot className="w-4 h-4 text-teal-400" />}
      </div>
      <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
        isUser ? "bg-teal-500 text-navy-900 rounded-tr-sm font-medium" : "card-glass text-teal-100/90 rounded-tl-sm"
      }`}>
        {msg.content}
      </div>
    </div>
  );
}

export default function AICoachPage() {
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const send = (text?: string) => {
    const content = text ?? input.trim();
    if (!content) return;
    setInput("");
    const userMsg: Msg = { role: "user", content };
    setMessages(p => [...p, userMsg]);
    setLoading(true);
    setTimeout(() => {
      setMessages(p => [...p, { role: "assistant", content: getResponse(content) }]);
      setLoading(false);
    }, 1400);
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-teal-500/10">
        <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-teal-400" />
        </div>
        <div>
          <h1 className="font-bold text-white">GreenPassage AI Coach</h1>
          <p className="text-xs text-teal-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Online · Powered by Claude AI
          </p>
        </div>
        <div className="ml-auto text-xs text-teal-100/40 hidden sm:block">
          Ask anything about scholarships, visas, and migration
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-thin space-y-4 py-2">
        {messages.map((m, i) => <MessageBubble key={i} msg={m} />)}
        {loading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-xl bg-navy-700 border border-teal-500/20 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-teal-400" />
            </div>
            <div className="card-glass rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
              <Loader2 className="w-4 h-4 text-teal-400 animate-spin" />
              <span className="text-sm text-teal-100/60">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick prompts — shown only at start */}
      {messages.length <= 1 && (
        <div className="py-3">
          <p className="text-xs text-teal-100/40 mb-2 text-center">Quick starts</p>
          <div className="grid grid-cols-2 gap-2">
            {quickPrompts.map(q => {
              const Icon = q.icon;
              return (
                <button key={q.label} onClick={() => send(q.prompt)}
                  className="flex items-center gap-2 p-3 rounded-xl card-glass hover:border-teal-500/30 text-left text-sm text-teal-100/70 hover:text-white transition-all">
                  <Icon className="w-4 h-4 text-teal-400 shrink-0" />
                  {q.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="pt-3 border-t border-teal-500/10">
        <div className="flex gap-3">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()}
            placeholder="Ask about scholarships, visas, countries..."
            className="flex-1 bg-navy-800 border border-teal-500/20 rounded-xl px-4 py-3 text-white placeholder-teal-100/30 focus:outline-none focus:border-teal-500/50 transition-colors text-sm"
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || loading}
            className="px-4 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-40 text-navy-900 font-bold transition-all glow-teal-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-center text-xs text-teal-100/20 mt-2">
          AI responses are for guidance only. Always verify with official government sources.
        </p>
      </div>
    </div>
  );
}
