"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Sparkles, GraduationCap, Ticket, Briefcase, Shield, Zap, Search, MapPin } from "lucide-react";
import { type CountryMeta, DESTINATION_COLORS, ALL_COUNTRIES } from "@/lib/all-countries";

const WorldMap = dynamic(() => import("@/components/WorldMap"), { ssr: false });

const STATS = [
  { val: "180+", label: "Countries mapped" },
  { val: "50K+", label: "Scholarships" },
  { val: "2M+",  label: "People helped" },
  { val: "94%",  label: "Success rate" },
];

const PILLARS = [
  { icon: GraduationCap, label: "Scholarships",  href: "/scholarships", desc: "50,000+ fully funded awards, AI-matched to your profile" },
  { icon: Ticket,        label: "Visa Lottery",  href: "/lottery",      desc: "DV Lottery, Canada draws & real-time alerts" },
  { icon: Briefcase,     label: "Work Abroad",   href: "/jobs",         desc: "Visa-sponsored jobs across 50+ countries" },
  { icon: Sparkles,      label: "AI Coach",      href: "/ai-coach",     desc: "Your personal migration assistant, available 24/7" },
];

const STEPS = [
  { n: "01", title: "Build your profile",    body: "Tell us your education, work, language skills, and destination. Under 5 minutes." },
  { n: "02", title: "Get AI-matched",        body: "Our AI scans 180+ countries and thousands of programmes ranked by your real eligibility score." },
  { n: "03", title: "Follow your roadmap",   body: "Step-by-step actions: documents, deadlines, official links, and a 24/7 AI coach." },
];

const TESTIMONIALS = [
  { name: "Amara O.", from: "Ghana",  to: "Germany", text: "DAAD matched in minutes. I'm doing my Masters in Berlin — fully funded.", flag: "🇬🇭→🇩🇪" },
  { name: "Raj P.",   from: "India",  to: "Canada",  text: "Got my PR in 8 months using the Express Entry calculator here.",         flag: "🇮🇳→🇨🇦" },
  { name: "Maria S.", from: "Brazil", to: "UK",      text: "The AI Coach walked me through every step of my UK Skilled Worker Visa.", flag: "🇧🇷→🇬🇧" },
];

const TRUST = [
  { icon: Shield,   title: "Official sources only",   body: "Every requirement links to a verified government or institution source." },
  { icon: Zap,      title: "Real-time updates",       body: "Immigration law changes daily. Our AI monitors and alerts you the moment anything affects you." },
  { icon: Sparkles, title: "AI-powered matching",     body: "Trained on thousands of successful migration journeys. Not generic advice — yours." },
];

const TOP_DESTINATIONS = Object.entries(DESTINATION_COLORS).slice(0, 16);

export default function HomePage() {
  const [hoveredCountry, setHoveredCountry] = useState<CountryMeta | null>(null);
  const [search, setSearch] = useState("");

  const searchResults = search.length > 1
    ? Object.values(ALL_COUNTRIES)
        .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        .slice(0, 5)
    : [];

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Subtle dot grid — desktop only */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />

        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(0,212,255,0.06) 0%, transparent 65%)" }} />

        {/* ── Desktop layout ── */}
        <div className="hidden lg:flex relative z-10 items-center min-h-screen max-w-7xl mx-auto px-6">
          {/* Left — copy */}
          <div className="w-[520px] shrink-0 pt-20">
            <span className="chip mb-6 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] pulse" />
              AI-Powered · 180+ Countries · Free to Start
            </span>

            <h1 className="display text-white mb-5 fade-up">
              Your greener<br />
              <span style={{ color: "#00D4FF" }}>pasture</span><br />
              awaits.
            </h1>

            <p className="text-base mb-8 fade-up-delay-1" style={{ color: "var(--text-2)", maxWidth: "400px", lineHeight: 1.7 }}>
              Scholarships, work visas, visa lotteries — matched to you by AI.
              Click any country on the map to start.
            </p>

            <div className="flex items-center gap-3 fade-up-delay-2">
              <Link href="/checker"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
                style={{ background: "#00D4FF", color: "#060E18" }}>
                <Sparkles className="w-4 h-4" /> Check eligibility
              </Link>
              <Link href="/ai-coach"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "var(--text-2)" }}>
                Talk to AI Coach <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 fade-up-delay-3">
              {STATS.map(s => (
                <div key={s.label}>
                  <div className="text-xl font-bold" style={{ color: "#00D4FF" }}>{s.val}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — map fills remaining space */}
          <div className="flex-1 relative" style={{ height: "100vh" }}>
            <WorldMap onHover={setHoveredCountry} />

            {/* Country hover card */}
            {hoveredCountry && (
              <div className="absolute bottom-16 right-4 card px-4 py-3 min-w-48 pointer-events-none fade-up"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="text-2xl">{hoveredCountry.flag}</span>
                  <div>
                    <p className="font-semibold text-white text-sm">{hoveredCountry.name}</p>
                    <p className="text-xs" style={{ color: "#00D4FF" }}>{hoveredCountry.subregion}</p>
                  </div>
                </div>
                <p className="text-xs mt-1.5" style={{ color: "var(--text-3)" }}>
                  Click to view migration guide →
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ── Mobile layout (no map) ── */}
        <div className="lg:hidden relative z-10 px-5 pt-24 pb-12">
          <span className="chip mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] pulse" />
            AI-Powered Migration Platform
          </span>

          <h1 className="text-4xl font-bold text-white mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Your greener<br />
            <span style={{ color: "#00D4FF" }}>pasture awaits.</span>
          </h1>

          <p className="text-sm mb-8" style={{ color: "var(--text-2)", lineHeight: 1.7 }}>
            Scholarships, work visas & visa lotteries — all matched to you by AI.
          </p>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--text-3)" }} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search countries, e.g. Canada..."
              className="w-full rounded-xl pl-10 pr-4 py-3 text-sm outline-none"
              style={{ background: "var(--surface)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
            />
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 card overflow-hidden z-20"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
                {searchResults.map(c => (
                  <Link key={c.slug} href={`/countries/${c.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", color: "var(--text-1)" }}
                    onClick={() => setSearch("")}>
                    <span>{c.flag}</span>
                    <span className="font-medium">{c.name}</span>
                    <span className="ml-auto text-xs" style={{ color: "var(--text-3)" }}>{c.subregion}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-2 gap-2.5 mb-8">
            {PILLARS.map(p => {
              const Icon = p.icon;
              return (
                <Link key={p.href} href={p.href}
                  className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{ background: "var(--surface)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--text-1)" }}>
                  <Icon className="w-4 h-4 shrink-0" style={{ color: "#00D4FF" }} />
                  {p.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link href="/signup"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm"
            style={{ background: "#00D4FF", color: "#060E18" }}>
            Get started free <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Stats row */}
          <div className="flex gap-6 mt-8 flex-wrap">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-lg font-bold" style={{ color: "#00D4FF" }}>{s.val}</div>
                <div className="text-xs" style={{ color: "var(--text-3)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#00D4FF" }}>What we offer</p>
          <h2 className="display-sm text-white">Everything you need<br />to move abroad.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link key={i} href={p.href} className="card p-5 group transition-all hover:border-[rgba(0,212,255,0.25)] block">
                <div className="w-9 h-9 rounded-lg mb-4 flex items-center justify-center"
                  style={{ background: "rgba(0,212,255,0.08)" }}>
                  <Icon className="w-4 h-4" style={{ color: "#00D4FF" }} />
                </div>
                <h3 className="font-semibold text-white mb-1.5 group-hover:text-[#00D4FF] transition-colors text-sm">
                  {p.label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-3)" }}>{p.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: "#00D4FF" }}>
                  Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="max-w-7xl mx-auto px-5 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-80 shrink-0">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#00D4FF" }}>How it works</p>
            <h2 className="display-sm text-white mb-4">
              From profile<br />to passport.
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-2)" }}>
              Three steps is all it takes. GreenPassage handles the complexity.
            </p>
            <Link href="/checker"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm"
              style={{ background: "#00D4FF", color: "#060E18" }}>
              Start free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex-1 space-y-3">
            {STEPS.map((step, i) => (
              <div key={i} className="flex gap-5 card p-5 transition-all hover:border-[rgba(255,255,255,0.12)]">
                <span className="font-bold text-3xl shrink-0 leading-none tabular-nums"
                  style={{ color: "rgba(255,255,255,0.08)", fontVariantNumeric: "tabular-nums" }}>
                  {step.n}
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1 text-sm">{step.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-3)" }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ─────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: "#00D4FF" }}>Top destinations</p>
              <h2 className="text-xl font-bold text-white">Where people are going</h2>
            </div>
            <Link href="/countries" className="text-xs font-medium flex items-center gap-1 hidden sm:flex"
              style={{ color: "#00D4FF" }}>
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {TOP_DESTINATIONS.map(([id, color]) => {
              const c = ALL_COUNTRIES[id];
              if (!c) return null;
              return (
                <Link key={c.slug} href={`/countries/${c.slug}`}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-80"
                  style={{ background: `${color}12`, border: `1px solid ${color}22`, color: "var(--text-1)" }}>
                  <span>{c.flag}</span>
                  {c.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="max-w-7xl mx-auto px-5 py-20">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#00D4FF" }}>Real people, real results</p>
          <h2 className="display-sm text-white">They made it.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="card p-6"
              style={{ background: "var(--surface-2)" }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{t.flag}</span>
                <span className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ background: "rgba(52,168,83,0.12)", color: "#34A853", border: "1px solid rgba(52,168,83,0.2)" }}>
                  ✓ Approved
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "var(--text-2)" }}>
                "{t.text}"
              </p>
              <div style={{ borderTop: "1px solid var(--border)" }} className="pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs mt-0.5" style={{ color: "#00D4FF" }}>{t.from} → {t.to}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST ────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {TRUST.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(0,212,255,0.08)" }}>
                  <Icon className="w-4 h-4" style={{ color: "#00D4FF" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-3)" }}>{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="max-w-7xl mx-auto px-5 py-20">
        <div className="card-em rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 70%)" }} />
          <div className="relative">
            <MapPin className="w-6 h-6 mx-auto mb-6" style={{ color: "#00D4FF" }} />
            <h2 className="display-sm text-white mb-3">
              Your next chapter<br />starts here.
            </h2>
            <p className="text-sm mb-8 mx-auto max-w-sm" style={{ color: "var(--text-2)", lineHeight: 1.7 }}>
              Join 2 million people who used GreenPassage to find their path abroad. Free to start.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/signup"
                className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{ background: "#00D4FF", color: "#060E18" }}>
                Create free account <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/checker"
                className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "var(--text-2)" }}>
                Check my eligibility
              </Link>
            </div>
            <p className="text-xs mt-4" style={{ color: "var(--text-3)" }}>No credit card required</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid var(--border)" }} className="py-8">
        <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bold text-sm text-white">
            Green<span style={{ color: "#00D4FF" }}>Passage</span>
          </span>
          <p className="text-xs" style={{ color: "var(--text-3)" }}>© 2026 GreenPassage · AI-Powered Migration Platform</p>
          <div className="flex gap-5 text-xs" style={{ color: "var(--text-3)" }}>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
