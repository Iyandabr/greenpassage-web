"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ExternalLink, Send, Loader2, Sparkles, DollarSign, Clock, AlertTriangle, CheckCircle, Bot, User } from "lucide-react";
import { getCountry, getCountryStub } from "@/lib/countries-data";

type Msg = { role: "user" | "assistant"; content: string };

function getAIResponse(slug: string, question: string): string {
  const q = question.toLowerCase();
  const country = slug.charAt(0).toUpperCase() + slug.slice(1);

  if (q.includes("salary") || q.includes("earn") || q.includes("pay") || q.includes("wage")) {
    return `Salaries in ${country} are competitive. For skilled workers:\n\n• Software engineers typically earn $80K–$150K equivalent per year\n• Healthcare professionals: $60K–$100K\n• Engineers and trades: $55K–$90K\n\nActual pay depends on your experience, employer, and city. Major cities pay more but also cost more to live in.\n\nWould you like me to compare the cost of living with the salary to show you take-home purchasing power?`;
  }
  if (q.includes("how long") || q.includes("timeline") || q.includes("process") || q.includes("time")) {
    return `The typical timeline for ${country} immigration:\n\n1. **Preparation** (3–6 months): credential assessment, language test, gathering documents\n2. **Application** (1–6 months): submitting your visa application and waiting for a decision\n3. **Travel & settle** (1–3 months): finding accommodation, registering locally\n\n**Total: roughly 6–12 months from start to arrival**\n\nSome fast-track pathways (like the UK Health and Care Worker Visa) can be done in 6–8 weeks.\n\nWant a personalised timeline based on your specific situation?`;
  }
  if (q.includes("document") || q.includes("require") || q.includes("need")) {
    return `Core documents you'll need for ${country}:\n\n📄 **Identity:** Valid passport (6+ months remaining)\n🎓 **Education:** Original degree certificates + official translations\n💼 **Work:** Employment letters, payslips, reference letters\n🗣️ **Language:** IELTS/TOEFL/equivalent test results\n💰 **Financial:** Bank statements (3–6 months), proof of funds\n🏥 **Medical:** Health exam from approved doctor\n👮 **Police:** Clearance certificate from every country you've lived in 5+ years\n\nI'll generate a personalised checklist once you complete the eligibility quiz. Would you like to do that now?`;
  }
  if (q.includes("job") || q.includes("work") || q.includes("employ") || q.includes("find")) {
    return `Finding a job in ${country} before you arrive:\n\n🔍 **Job boards to use:**\n• LinkedIn — filter by "willing to sponsor" or "visa sponsorship"\n• Indeed ${country} — set location and keyword to your field\n• Official government job board (linked above)\n• Industry-specific boards (e.g. NHS Jobs for UK healthcare)\n\n💡 **Tips that actually work:**\n• Connect with the diaspora community from your country already there\n• Target employers on the official sponsor list\n• Use a local CV format — UK, Canada, and Australia all have different expectations\n• Apply 3–6 months before your planned move date\n\nShall I search for current visa-sponsored openings in your field?`;
  }
  if (q.includes("cost") || q.includes("live") || q.includes("afford") || q.includes("cheap") || q.includes("expensive")) {
    return `Cost of living in ${country} varies by city:\n\n**Budget estimate for a single person:**\n• Rent: $800–$2,500/month (outside city centre is much cheaper)\n• Food & groceries: $300–$600/month\n• Transport: $80–$200/month pass\n• Utilities: $100–$200/month\n• **Total: ~$1,500–$4,000/month**\n\n💡 Most skilled migrants earn 2–4x this amount, so net savings are realistic. Many people send money back home while saving locally.\n\nWould you like a city-by-city breakdown?`;
  }
  return `Great question about ${country}! Here's what you should know:\n\n${country} is one of the top destinations for skilled migrants and offers multiple pathways depending on your background — work visas, study permits, family sponsorship, and in some cases lottery-based immigration.\n\nThe key steps are:\n1. Check your eligibility (use our free checker above)\n2. Get your documents in order — especially credential recognition and language tests\n3. Apply through the official government portal (linked in the Official Links section)\n\nWhat specifically would you like to know? I can help with salaries, timelines, documents, job searching, or cost of living.`;
}

const difficultyStyle: Record<string, { bg: string; text: string }> = {
  Easy:   { bg: "rgba(34,197,94,0.12)",  text: "#22C55E" },
  Medium: { bg: "rgba(245,158,11,0.12)", text: "#F59E0B" },
  Hard:   { bg: "rgba(239,68,68,0.12)",  text: "#EF4444" },
};

export default function CountryPage() {
  const { slug } = useParams() as { slug: string };
  const country = getCountry(slug);
  const stub = getCountryStub(slug);

  const [messages, setMessages] = useState<Msg[]>([{
    role: "assistant",
    content: `Hi! 👋 I'm your AI guide for ${country?.name ?? slug}. Ask me anything — visa requirements, salaries, job hunting, cost of living, timelines — I've got you covered.`,
  }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMsg = (text?: string) => {
    const content = text ?? input.trim();
    if (!content || loading) return;
    setInput("");
    setMessages(p => [...p, { role: "user", content }]);
    setLoading(true);
    setTimeout(() => {
      setMessages(p => [...p, { role: "assistant", content: getAIResponse(slug, content) }]);
      setLoading(false);
    }, 1200);
  };

  if (!country) {
    const info = stub;
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-6xl mb-4">{info?.flag ?? "🌍"}</p>
          <h1 className="text-3xl font-black text-white mb-3">{info?.name ?? slug} Guide</h1>
          <p style={{ color: "rgba(255,255,255,0.5)" }} className="mb-6">
            Detailed guide for {info?.name ?? slug} is coming soon. In the meantime, our AI Coach can answer your specific questions.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/ai-coach" className="px-5 py-2.5 rounded-xl font-bold text-sm" style={{ background: "#00D4FF", color: "#07111D" }}>
              Ask AI Coach
            </Link>
            <Link href="/countries" className="px-5 py-2.5 rounded-xl font-semibold text-sm" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}>
              All Countries
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#07111D" }} className="min-h-screen">

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 70% 50%, ${country.color}18 0%, transparent 65%)` }} />
        <div className="max-w-7xl mx-auto px-6 py-14 relative">
          <Link href="/countries" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
            style={{ color: "rgba(255,255,255,0.4)" }}>
            <ArrowLeft className="w-4 h-4" /> All Countries
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-6xl">{country.flag}</span>
                <div>
                  <h1 className="display-sm text-white">{country.name}</h1>
                  <p style={{ color: country.color }} className="font-semibold mt-1">{country.tagline}</p>
                </div>
              </div>
              <p className="text-xl font-bold" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "520px", lineHeight: 1.5 }}>
                {country.heroLine}
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/checker" className="px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all"
                style={{ background: "#00D4FF", color: "#07111D" }}>
                <Sparkles className="w-4 h-4" /> Check My Eligibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">

        {/* ── Main content ── */}
        <div className="lg:col-span-2 space-y-8">

          {/* Overview */}
          <div className="glass rounded-2xl p-7">
            <h2 className="text-xl font-black text-white mb-4">Overview</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>{country.overview}</p>
          </div>

          {/* Official Government Links */}
          <div className="glass rounded-2xl p-7">
            <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" style={{ color: "#00D4FF" }} />
              Official Government Links
            </h2>
            <div className="space-y-3">
              {country.officialLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl transition-all group"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = country.color + "40")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: country.color + "15" }}>
                    <ExternalLink className="w-4 h-4" style={{ color: country.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white text-sm group-hover:text-[#00D4FF] transition-colors">{link.label}</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{link.description}</p>
                    <p className="text-xs mt-1.5 truncate" style={{ color: "rgba(255,255,255,0.25)" }}>{link.url}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#00D4FF" }} />
                </a>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-2 p-3 rounded-xl" style={{ background: "rgba(245,197,66,0.08)", border: "1px solid rgba(245,197,66,0.15)" }}>
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#F5C542" }} />
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
                Always use official government links above. Avoid third-party sites charging fees for free government services.
              </p>
            </div>
          </div>

          {/* Visa Types */}
          <div className="glass rounded-2xl p-7">
            <h2 className="text-xl font-black text-white mb-5">Visa & Immigration Pathways</h2>
            <div className="space-y-3">
              {country.visaTypes.map((v, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-white text-sm">{v.name}</h3>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: difficultyStyle[v.difficulty].bg, color: difficultyStyle[v.difficulty].text }}>
                      {v.difficulty}
                    </span>
                  </div>
                  <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>For: {v.for}</p>
                  <div className="flex flex-wrap gap-4 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {v.processing}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> {v.cost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="glass rounded-2xl p-7">
            <h2 className="text-xl font-black text-white mb-5">Key Requirements</h2>
            <div className="space-y-3">
              {country.requirements.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: country.color + "20", border: `1px solid ${country.color}40` }}>
                    <span className="text-xs font-black" style={{ color: country.color }}>{i + 1}</span>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{r}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Salaries */}
          <div className="glass rounded-2xl p-7">
            <h2 className="text-xl font-black text-white mb-5 flex items-center gap-2">
              <DollarSign className="w-5 h-5" style={{ color: "#00D4FF" }} /> Average Salaries
            </h2>
            <div className="space-y-2">
              {country.salaries.map((s, i) => (
                <div key={i} className="flex justify-between items-center py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="text-sm font-medium text-white">{s.role}</span>
                  <span className="text-sm font-bold" style={{ color: "#00D4FF" }}>{s.avg}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cost of living */}
          <div className="glass rounded-2xl p-7">
            <h2 className="text-xl font-black text-white mb-5">Cost of Living</h2>
            <div className="space-y-3">
              {country.costOfLiving.map((c, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="font-bold text-white mb-2">{c.city}</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div><p style={{ color: "rgba(255,255,255,0.4)" }}>Rent</p><p className="text-white font-medium mt-0.5">{c.rent}</p></div>
                    <div><p style={{ color: "rgba(255,255,255,0.4)" }}>Food</p><p className="text-white font-medium mt-0.5">{c.food}</p></div>
                    <div><p style={{ color: "rgba(255,255,255,0.4)" }}>Transport</p><p className="text-white font-medium mt-0.5">{c.transport}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Sidebar — AI Chat ── */}
        <div className="space-y-5">
          {/* AI Chat */}
          <div className="glass rounded-2xl overflow-hidden sticky top-20">
            <div className="px-5 py-4 flex items-center gap-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                <Sparkles className="w-4 h-4" style={{ color: "#00D4FF" }} />
              </div>
              <div>
                <p className="font-bold text-white text-sm">{country.name} AI Guide</p>
                <p className="text-xs flex items-center gap-1" style={{ color: "#00D4FF" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Online
                </p>
              </div>
            </div>

            {/* Quick prompts */}
            <div className="px-4 py-3 flex flex-wrap gap-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              {["Salary ranges", "How long does it take?", "Documents needed", "How to find a job"].map(q => (
                <button key={q} onClick={() => sendMsg(q)}
                  className="text-xs px-3 py-1.5 rounded-full transition-all"
                  style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)", color: "rgba(255,255,255,0.7)" }}>
                  {q}
                </button>
              ))}
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${m.role === "user" ? "" : ""}`}
                    style={{ background: m.role === "user" ? "#00D4FF" : "rgba(255,255,255,0.06)" }}>
                    {m.role === "user"
                      ? <User className="w-3 h-3" style={{ color: "#07111D" }} />
                      : <Bot className="w-3 h-3" style={{ color: "#00D4FF" }} />}
                  </div>
                  <div className={`max-w-[85%] text-xs rounded-xl px-3 py-2.5 whitespace-pre-wrap leading-relaxed ${
                    m.role === "user" ? "rounded-tr-sm" : "rounded-tl-sm"
                  }`}
                    style={{
                      background: m.role === "user" ? "#00D4FF" : "rgba(255,255,255,0.04)",
                      color: m.role === "user" ? "#07111D" : "rgba(255,255,255,0.75)",
                    }}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <Bot className="w-3 h-3" style={{ color: "#00D4FF" }} />
                  </div>
                  <div className="px-3 py-2.5 rounded-xl rounded-tl-sm" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <Loader2 className="w-3 h-3 animate-spin" style={{ color: "#00D4FF" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 flex gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMsg()}
                placeholder={`Ask about ${country.name}...`}
                className="flex-1 text-xs rounded-xl px-3 py-2.5 outline-none transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }} />
              <button onClick={() => sendMsg()} disabled={!input.trim() || loading}
                className="px-3 py-2.5 rounded-xl transition-all disabled:opacity-30"
                style={{ background: "#00D4FF", color: "#07111D" }}>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Fun facts */}
          <div className="glass rounded-2xl p-5">
            <h3 className="font-bold text-white mb-4 text-sm">Good to Know</h3>
            <div className="space-y-3">
              {country.funFacts.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span style={{ color: country.color }} className="text-sm shrink-0">→</span>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
