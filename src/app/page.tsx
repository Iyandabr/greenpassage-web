"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Sparkles, GraduationCap, Ticket, Briefcase, Shield, Zap } from "lucide-react";
import { type CountryMeta, DESTINATION_COLORS, ALL_COUNTRIES } from "@/lib/all-countries";

const WorldMap = dynamic(() => import("@/components/WorldMap"), { ssr: false });

const STATS = [
  { val: "180+", label: "Countries" },
  { val: "50K+", label: "Scholarships" },
  { val: "2M+",  label: "Users Helped" },
  { val: "94%",  label: "Success Rate" },
];

const PILLARS = [
  { icon: GraduationCap, label: "Scholarships",   href: "/scholarships",  desc: "50,000+ fully funded awards, AI-matched to you" },
  { icon: Ticket,        label: "Visa Lottery",   href: "/lottery",       desc: "DV Lottery, Canada draws, real-time alerts" },
  { icon: Briefcase,     label: "Work Abroad",    href: "/countries",     desc: "Visa-sponsored jobs in 50+ countries" },
  { icon: Sparkles,      label: "AI Coach",       href: "/ai-coach",      desc: "Your personal migration assistant, 24/7" },
];

const TESTIMONIALS = [
  { name: "Amara O.", from: "Ghana", to: "Germany", text: "DAAD matched in minutes. I'm doing my Masters in Berlin — fully funded.", flag: "🇬🇭→🇩🇪" },
  { name: "Raj P.",   from: "India", to: "Canada",  text: "Got my PR in 8 months using the Express Entry calculator here.", flag: "🇮🇳→🇨🇦" },
  { name: "Maria S.", from: "Brazil", to: "UK",     text: "The AI Coach walked me through every step of my UK Skilled Worker Visa.", flag: "🇧🇷→🇬🇧" },
];

export default function HomePage() {
  const [hoveredCountry, setHoveredCountry] = useState<CountryMeta | null>(null);

  return (
    <div style={{ background: "#07111D" }}>

      {/* ══ HERO — full-viewport with live map ══════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

        {/* Glow blob top-right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)" }} />

        {/* Copy — top left */}
        <div className="relative z-10 px-6 md:px-12 pt-28 pb-6 max-w-2xl fade-up">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", color: "#00D4FF" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            AI-Powered · 180+ Countries · Free to Start
          </div>

          <h1 className="display text-white mb-5 fade-up fade-up-delay-1">
            Your<br />
            <span style={{ color: "#00D4FF" }} className="text-glow">Greener</span><br />
            Pasture<br />
            <span style={{ color: "#F5C542" }}>Awaits.</span>
          </h1>

          <p className="text-lg mb-8 fade-up fade-up-delay-2" style={{ color: "rgba(255,255,255,0.55)", maxWidth: "440px", lineHeight: 1.6 }}>
            Scholarships, work visas, visa lotteries — all in one AI-powered platform.
            Click any country on the map to start your journey.
          </p>

          <div className="flex flex-wrap gap-3 fade-up fade-up-delay-3">
            <Link href="/checker"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all glow"
              style={{ background: "#00D4FF", color: "#07111D" }}>
              <Sparkles className="w-4 h-4" /> Check My Eligibility
            </Link>
            <Link href="/ai-coach"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all"
              style={{ border: "1px solid rgba(0,212,255,0.25)", color: "rgba(255,255,255,0.8)" }}>
              Talk to AI Coach <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-10 fade-up fade-up-delay-3">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-2xl font-black" style={{ color: "#00D4FF" }}>{s.val}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Map — right side, full height */}
        <div className="absolute inset-0 z-0 opacity-90" style={{ top: "64px" }}>
          <WorldMap onHover={setHoveredCountry} />
        </div>

        {/* Hover tooltip */}
        {hoveredCountry && (
          <div className="absolute bottom-24 right-8 z-20 glass rounded-2xl p-4 min-w-52 pointer-events-none fade-up">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{hoveredCountry.flag}</span>
              <div>
                <p className="font-black text-white text-lg">{hoveredCountry.name}</p>
                <p className="text-xs" style={{ color: "#00D4FF" }}>{hoveredCountry.subregion}</p>
              </div>
            </div>
            <p className="text-xs font-semibold" style={{ color: "#00D4FF" }}>
              Click to view migration guide →
            </p>
          </div>
        )}

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white animate-bounce" />
          </div>
          <span className="text-xs text-white/40">Scroll</span>
        </div>
      </section>

      {/* ══ MAP INSTRUCTION BANNER ══════════════════════════════ */}
      <section style={{ background: "rgba(0,212,255,0.05)", borderTop: "1px solid rgba(0,212,255,0.1)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}
        className="px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00D4FF" }} />
            <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
              <span style={{ color: "#00D4FF" }}>Interactive Map:</span>{" "}
              Click any highlighted country to see visa requirements, job opportunities, scholarships, and official government links.
            </p>
          </div>
          <Link href="/countries"
            className="text-xs font-bold px-4 py-2 rounded-lg whitespace-nowrap"
            style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", color: "#00D4FF" }}>
            View All Countries →
          </Link>
        </div>
      </section>

      {/* ══ 4 PILLARS ════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link key={i} href={p.href}
                className="group glass rounded-2xl p-6 hover:border-[#00D4FF]/30 transition-all block">
                <div className="w-10 h-10 rounded-xl mb-5 flex items-center justify-center"
                  style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                  <Icon className="w-5 h-5" style={{ color: "#00D4FF" }} />
                </div>
                <h3 className="font-black text-lg text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                  {p.label}
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{p.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold" style={{ color: "#00D4FF" }}>
                  Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ══ HOW IT WORKS ════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left */}
          <div className="lg:w-1/2">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#00D4FF" }}>How It Works</p>
            <h2 className="display-sm text-white mb-6">
              From profile<br />to passport<br />
              <span style={{ color: "#F5C542" }}>stamp.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }} className="mb-8 max-w-sm">
              Three steps is all it takes. GreenPassage AI handles the complexity so you can focus on your dream.
            </p>
            <Link href="/checker"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm"
              style={{ background: "#00D4FF", color: "#07111D" }}>
              Start Free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — steps */}
          <div className="lg:w-1/2 space-y-4">
            {[
              { n: "01", title: "Build your profile", body: "Tell us your education, work, language skills, and where you want to go. Takes under 5 minutes." },
              { n: "02", title: "Get AI-matched",     body: "Our AI scans 180+ countries and thousands of programmes instantly, ranked by your real eligibility score." },
              { n: "03", title: "Follow your roadmap", body: "Step-by-step action plan: documents, deadlines, official links, and an AI coach available 24/7." },
            ].map((step, i) => (
              <div key={i} className="flex gap-5 glass rounded-2xl p-5">
                <span className="font-black text-4xl shrink-0 leading-none" style={{ color: "rgba(0,212,255,0.2)" }}>{step.n}</span>
                <div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COUNTRY SPOTLIGHT STRIP ════════════════════════════ */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        className="py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-center mb-8" style={{ color: "rgba(255,255,255,0.3)" }}>
            Top migration destinations — click any for the full guide
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.entries(DESTINATION_COLORS).slice(0, 20).map(([id, color]) => {
              const c = ALL_COUNTRIES[id];
              if (!c) return null;
              return (
                <Link key={c.slug} href={`/countries/${c.slug}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all hover:scale-105"
                  style={{ background: color + "15", border: `1px solid ${color}30`, color: "rgba(255,255,255,0.8)" }}>
                  <span className="text-lg">{c.flag}</span>
                  {c.name}
                  <span className="text-xs font-normal" style={{ color }}>→</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#00D4FF" }}>Real People · Real Results</p>
          <h2 className="display-sm text-white">They made it.<br /><span style={{ color: "#F5C542" }}>You can too.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="boarding-pass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl">{t.flag}</span>
                <span className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.2)" }}>
                  APPROVED ✓
                </span>
              </div>
              <p className="text-sm mb-5 italic" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                "{t.text}"
              </p>
              <div style={{ borderTop: "1px dashed rgba(255,255,255,0.1)" }} className="pt-4">
                <p className="font-bold text-white text-sm">{t.name}</p>
                <p className="text-xs" style={{ color: "#00D4FF" }}>{t.from} → {t.to}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ TRUST ════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="glass rounded-3xl p-8 grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Shield, title: "Official Sources Only", body: "Every requirement links to a verified government or institution source. No guesswork." },
            { icon: Zap,    title: "Real-Time Updates",    body: "Immigration law changes daily. Our AI monitors and alerts you the moment anything affects you." },
            { icon: Sparkles, title: "AI-Powered Matching", body: "Trained on thousands of successful migration journeys. Not generic advice — your advice." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.15)" }}>
                  <Icon className="w-5 h-5" style={{ color: "#00D4FF" }} />
                </div>
                <h4 className="font-bold text-white">{item.title}</h4>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══ FINAL CTA ════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative rounded-3xl overflow-hidden p-14 text-center"
          style={{ background: "linear-gradient(135deg, #0C2340 0%, #07111D 100%)", border: "1px solid rgba(0,212,255,0.15)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center top, rgba(0,212,255,0.1), transparent 70%)" }} />
          <div className="relative">
            <h2 className="display-sm text-white mb-4">
              Your greener<br />
              pasture is <span style={{ color: "#00D4FF" }} className="text-glow">one click away.</span>
            </h2>
            <p className="mb-8 mx-auto max-w-md text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
              Join 2 million people who used GreenPassage to find their path abroad. Start free today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup"
                className="flex items-center gap-2 px-10 py-4 rounded-xl font-black text-base transition-all glow"
                style={{ background: "#00D4FF", color: "#07111D" }}>
                Start For Free <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>No credit card required</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════════ */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-black text-white">Green<span style={{ color: "#00D4FF" }}>Passage</span></span>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2026 GreenPassage · AI-Powered Migration Platform
          </p>
          <div className="flex gap-6 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
