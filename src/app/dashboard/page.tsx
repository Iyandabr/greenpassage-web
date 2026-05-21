import Link from "next/link";
import { Sparkles, GraduationCap, Ticket, Globe, Bell, TrendingUp, CheckCircle, ArrowRight, Briefcase, Clock, Zap, ChevronRight, Check } from "lucide-react";

const matchedCountries = [
  { flag: "🇨🇦", name: "Canada",    score: 94, path: "Express Entry",    color: "#EF4444" },
  { flag: "🇩🇪", name: "Germany",   score: 91, path: "Opportunity Card", color: "#F59E0B" },
  { flag: "🇦🇺", name: "Australia", score: 88, path: "SkillSelect",      color: "#22C55E" },
  { flag: "🇬🇧", name: "UK",        score: 84, path: "Skilled Worker",   color: "#8B5CF6" },
  { flag: "🇮🇪", name: "Ireland",   score: 79, path: "Critical Skills",  color: "#00D4FF" },
];

const scholarships = [
  { name: "DAAD Scholarship",    country: "🇩🇪 Germany",     deadline: "Nov 15, 2026", match: 94 },
  { name: "Chevening",           country: "🇬🇧 UK",          deadline: "Nov 7, 2026",  match: 88 },
  { name: "Fulbright",           country: "🇺🇸 USA",         deadline: "Feb 2, 2027",  match: 82 },
  { name: "Holland Scholarship", country: "🇳🇱 Netherlands", deadline: "Feb 1, 2027",  match: 79 },
];

const journey = [
  { label: "Profile Completed",      done: true },
  { label: "Eligibility Check Done", done: true },
  { label: "Documents Uploaded",     done: false },
  { label: "Application Started",    done: false },
  { label: "Application Submitted",  done: false },
];

const alerts = [
  { text: "DV Lottery 2027 opens in 137 days — set a reminder",  type: "gold",  time: "Just now" },
  { text: "DAAD deadline in 72 days — start your application",   type: "amber", time: "2h ago" },
  { text: "Canada Express Entry draw — 505 points invited",      type: "teal",  time: "1 day ago" },
  { text: "New match: Holland Scholarship — 79% fit",            type: "teal",  time: "2 days ago" },
];

const alertStyles: Record<string, { bar: string; bg: string }> = {
  gold:  { bar: "#F5C542", bg: "rgba(245,197,66,0.07)"  },
  amber: { bar: "#F59E0B", bg: "rgba(245,158,11,0.07)"  },
  teal:  { bar: "#00D4FF", bg: "rgba(0,212,255,0.06)"   },
};

export default function DashboardPage() {
  const doneCount = journey.filter(j => j.done).length;
  const progressPct = (doneCount / journey.length) * 100;

  return (
    <div className="min-h-screen" style={{ background: "#07111D" }}>
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-black text-white">Welcome back, Amara 👋</h1>
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Your journey overview · Last updated today</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button className="relative p-2.5 rounded-xl transition-all"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <Bell className="w-4 h-4" style={{ color: "rgba(255,255,255,0.5)" }} />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full" style={{ background: "#00D4FF" }} />
            </button>
            <Link href="/ai-coach"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm"
              style={{ background: "#00D4FF", color: "#07111D" }}>
              <Sparkles className="w-4 h-4" /> AI Coach
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Scholarships Matched", val: "23",  icon: GraduationCap, color: "#22C55E" },
            { label: "Countries Eligible",   val: "12",  icon: Globe,         color: "#00D4FF" },
            { label: "Active Applications",  val: "2",   icon: Briefcase,     color: "#F59E0B" },
            { label: "Days to DV Lottery",   val: "137", icon: Ticket,        color: "#8B5CF6" },
          ].map(s => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="glass rounded-2xl p-5">
                <Icon className="w-5 h-5 mb-3" style={{ color: s.color }} />
                <div className="text-3xl font-black text-white mb-1">{s.val}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content (2 cols) */}
          <div className="lg:col-span-2 space-y-6">

            {/* Country matches */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-black text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" style={{ color: "#00D4FF" }} /> Top Country Matches
                </h2>
                <Link href="/checker" className="text-xs font-bold" style={{ color: "#00D4FF" }}>Re-check →</Link>
              </div>
              <div className="space-y-3">
                {matchedCountries.map((c, i) => (
                  <Link key={i} href={`/countries/${c.name.toLowerCase()}`}
                    className="flex items-center gap-4 group">
                    <span className="text-xl w-7 shrink-0">{c.flag}</span>
                    <div className="w-24 shrink-0">
                      <p className="text-sm font-bold text-white">{c.name}</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{c.path}</p>
                    </div>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="h-full rounded-full" style={{ width: `${c.score}%`, background: c.color }} />
                    </div>
                    <span className="text-sm font-black w-10 text-right shrink-0" style={{ color: c.color }}>{c.score}%</span>
                    <ChevronRight className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#00D4FF" }} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Scholarships */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-black text-white flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" style={{ color: "#00D4FF" }} /> Matched Scholarships
                </h2>
                <Link href="/scholarships" className="text-xs font-bold" style={{ color: "#00D4FF" }}>View all 23 →</Link>
              </div>
              <div className="space-y-2">
                {scholarships.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl group cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.02)" }}>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white truncate">{s.name}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#00D4FF" }}>{s.country}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>
                      <Clock className="w-3 h-3" /> {s.deadline}
                    </div>
                    <span className="text-sm font-black shrink-0" style={{ color: "#22C55E" }}>{s.match}%</span>
                    <ArrowRight className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#00D4FF" }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/checker",      icon: Sparkles,      label: "Check Eligibility", color: "#00D4FF" },
                { href: "/scholarships", icon: GraduationCap, label: "Scholarships",       color: "#22C55E" },
                { href: "/lottery",      icon: Ticket,        label: "Visa Lottery",       color: "#8B5CF6" },
                { href: "/jobs",         icon: Briefcase,     label: "Visa Jobs",          color: "#F59E0B" },
              ].map(a => {
                const Icon = a.icon;
                return (
                  <Link key={a.href} href={a.href}
                    className="glass rounded-2xl p-4 flex flex-col items-center gap-2.5 text-center transition-all group">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: `${a.color}18` }}>
                      <Icon className="w-4 h-4" style={{ color: a.color }} />
                    </div>
                    <span className="text-xs font-semibold group-hover:text-white transition-colors"
                      style={{ color: "rgba(255,255,255,0.55)" }}>{a.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-5">
            {/* Journey tracker */}
            <div className="glass rounded-2xl p-6">
              <h2 className="font-black text-white mb-4 flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4" style={{ color: "#00D4FF" }} /> Your Journey
              </h2>
              <div className="space-y-3 mb-4">
                {journey.map((j, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: j.done ? "#00D4FF" : "rgba(255,255,255,0.05)",
                        border: j.done ? "none" : "1px solid rgba(255,255,255,0.1)",
                      }}>
                      {j.done && <Check className="w-2.5 h-2.5" style={{ color: "#07111D" }} />}
                    </div>
                    <span className="text-xs font-medium"
                      style={{ color: j.done ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.3)" }}>
                      {j.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs mb-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                <span>Progress</span>
                <span>{doneCount}/{journey.length} steps</span>
              </div>
              <div className="w-full rounded-full h-1.5 overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full" style={{ width: `${progressPct}%`, background: "#00D4FF" }} />
              </div>
            </div>

            {/* Alerts */}
            <div className="glass rounded-2xl p-6">
              <h2 className="font-black text-white mb-4 flex items-center gap-2 text-sm">
                <Bell className="w-4 h-4" style={{ color: "#00D4FF" }} /> Alerts
              </h2>
              <div className="space-y-2">
                {alerts.map((a, i) => (
                  <div key={i} className="pl-3 py-2.5 pr-3 rounded-r-xl rounded-bl-xl"
                    style={{ background: alertStyles[a.type].bg, borderLeft: `2px solid ${alertStyles[a.type].bar}` }}>
                    <p className="text-xs text-white leading-relaxed">{a.text}</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>{a.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upgrade */}
            <div className="rounded-2xl p-5 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(0,212,255,0.04) 100%)", border: "1px solid rgba(0,212,255,0.18)" }}>
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
              <Zap className="w-7 h-7 mx-auto mb-3 relative z-10" style={{ color: "#00D4FF" }} />
              <h3 className="font-black text-white mb-1 text-sm relative z-10">Unlock Premium</h3>
              <p className="text-xs mb-3 relative z-10" style={{ color: "rgba(255,255,255,0.45)" }}>
                Document checker, SOP writer, unlimited AI coaching.
              </p>
              <p className="text-2xl font-black mb-3 relative z-10" style={{ color: "#00D4FF" }}>
                $12<span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>/mo</span>
              </p>
              <button className="w-full py-2.5 rounded-xl font-bold text-sm relative z-10"
                style={{ background: "#00D4FF", color: "#07111D" }}>
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
