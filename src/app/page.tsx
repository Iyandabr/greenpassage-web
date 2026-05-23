"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Sparkles, GraduationCap, Ticket, Briefcase, Shield, Zap, Clock, TrendingUp, CheckCircle, Star } from "lucide-react";
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

const DESTINATIONS = [
  {
    flag: "🇨🇦", name: "Canada", tagline: "Express Entry & PNP",
    badge: "HOT", badgeColor: "#EF4444", accentColor: "#EF4444",
    processing: "6–8 months", salary: "CAD $65K–$120K", successRate: "88%",
    href: "/countries/canada",
    highlights: ["No job offer required for FSW", "PR pathway in 1–2 years", "Free healthcare after PR"],
  },
  {
    flag: "🇬🇧", name: "United Kingdom", tagline: "Skilled Worker Visa",
    badge: "FAST", badgeColor: "#3B82F6", accentColor: "#3B82F6",
    processing: "3–8 weeks", salary: "£28K–£80K", successRate: "82%",
    href: "/countries/united-kingdom",
    highlights: ["160+ shortage occupations", "Bring your family", "ILR after 5 years"],
  },
  {
    flag: "🇩🇪", name: "Germany", tagline: "Opportunity Card 2024",
    badge: "NEW", badgeColor: "#F59E0B", accentColor: "#F59E0B",
    processing: "4–12 weeks", salary: "€45K–€90K", successRate: "79%",
    href: "/countries/germany",
    highlights: ["No job offer needed", "12-month job-search visa", "EU Blue Card after hire"],
  },
  {
    flag: "🇦🇺", name: "Australia", tagline: "SkillSelect & TSS 482",
    badge: "OPEN", badgeColor: "#10B981", accentColor: "#10B981",
    processing: "4–12 months", salary: "AUD $75K–$130K", successRate: "84%",
    href: "/countries/australia",
    highlights: ["Points-based SkillSelect", "Employer sponsorship (482)", "PR after 2–4 years"],
  },
  {
    flag: "🇺🇸", name: "United States", tagline: "DV Lottery & H-1B",
    badge: "LOTTERY", badgeColor: "#8B5CF6", accentColor: "#8B5CF6",
    processing: "Varies", salary: "$60K–$200K+", successRate: "~2.5%",
    href: "/countries/united-states",
    highlights: ["55,000 green cards/year", "H-1B for tech workers", "Free to enter DV Lottery"],
  },
  {
    flag: "🇳🇱", name: "Netherlands", tagline: "Highly Skilled Migrant",
    badge: "FASTEST EU", badgeColor: "#FF6B35", accentColor: "#FF6B35",
    processing: "2–4 weeks", salary: "€50K–€100K", successRate: "91%",
    href: "/countries/netherlands",
    highlights: ["Fastest EU visa", "30% tax ruling", "English-speaking workplace"],
  },
];

const VISA_PROGRAMS = [
  {
    flag: "🇺🇸",
    name: "US Green Card Lottery 2027",
    subtitle: "Diversity Visa Program — 55,000 Permanent Resident Visas",
    statusLabel: "OPENS OCT 2026", statusColor: "#F59E0B",
    stats: [
      { label: "Green Cards", value: "55,000" },
      { label: "Cost", value: "Free" },
      { label: "Results", value: "May 2027" },
    ],
    desc: "The US Diversity Visa Lottery gives 55,000 permanent resident visas to people from underrepresented countries. Most African, Asian, and European nationalities qualify. Register free at dvlottery.state.gov.",
    cta: "View DV Lottery 2027 Guide",
    href: "/lottery",
    keywords: ["us green card lottery 2027", "diversity visa", "dv lottery registration"],
  },
  {
    flag: "🇨🇦",
    name: "Canada Express Entry",
    subtitle: "Federal Skilled Worker — Draws Every 2 Weeks",
    statusLabel: "DRAWS EVERY 2 WEEKS", statusColor: "#00D4FF",
    stats: [
      { label: "Admissions/yr", value: "110K+" },
      { label: "Gov Fee", value: "CAD $1,325" },
      { label: "Processing", value: "6–8 months" },
    ],
    desc: "Canada's flagship points-based program. Score 67+ CRS points (education, language, experience, age) to create a profile. Top scorers receive Invitations to Apply every two weeks.",
    cta: "Calculate Your CRS Score",
    href: "/countries/canada",
    keywords: ["canada express entry 2026", "crs score calculator", "federal skilled worker"],
  },
  {
    flag: "🇬🇧",
    name: "UK Skilled Worker Visa (Tier 2)",
    subtitle: "160+ Shortage Occupations — No Annual Cap",
    statusLabel: "OPEN YEAR-ROUND", statusColor: "#22C55E",
    stats: [
      { label: "Visa Cost", value: "£719–£1,423" },
      { label: "Processing", value: "3–8 weeks" },
      { label: "Path to ILR", value: "5 years" },
    ],
    desc: "Work in the UK with a licensed sponsor employer. Covers healthcare, tech, engineering, teaching and 160+ shortage roles. Leads to Indefinite Leave to Remain after 5 years.",
    cta: "Browse UK Visa-Sponsored Jobs",
    href: "/jobs",
    keywords: ["uk skilled worker visa 2026", "tier 2 visa sponsorship", "uk shortage occupations"],
  },
  {
    flag: "🇩🇪",
    name: "Germany Opportunity Card (Chancenkarte)",
    subtitle: "Points-Based Job-Search Visa — No Offer Required",
    statusLabel: "LIVE NOW", statusColor: "#22C55E",
    stats: [
      { label: "Visa Cost", value: "€75" },
      { label: "Processing", value: "4–12 weeks" },
      { label: "Job Search", value: "12 months" },
    ],
    desc: "Germany's 2024 immigration reform. Score points for degree, language skills, work experience, and age. Move to Germany and spend 12 months finding work — no job offer needed upfront.",
    cta: "Check Opportunity Card Eligibility",
    href: "/countries/germany",
    keywords: ["germany opportunity card", "chancenkarte germany", "germany work visa without job offer"],
  },
];

const SCHOLARSHIP_SPOTS = [
  { name: "Chevening Scholarship", country: "🇬🇧 UK", value: "Fully Funded", deadline: "Nov 7, 2026", color: "#3B82F6" },
  { name: "DAAD Scholarship", country: "🇩🇪 Germany", value: "€1,200/month", deadline: "Nov 15, 2026", color: "#F59E0B" },
  { name: "Fulbright Program", country: "🇺🇸 USA", value: "Fully Funded", deadline: "Feb 2, 2027", color: "#8B5CF6" },
  { name: "Erasmus Mundus", country: "🇪🇺 Europe", value: "€1,400/month", deadline: "Jan 10, 2027", color: "#10B981" },
];

export default function HomePage() {
  const [hoveredCountry, setHoveredCountry] = useState<CountryMeta | null>(null);

  return (
    <div style={{ background: "#07111D" }}>

      {/* ══ HERO — full-viewport with live map ══════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

        {/* Glow blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)" }} />

        {/* Copy */}
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

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-10 fade-up fade-up-delay-3">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-2xl font-black" style={{ color: "#00D4FF" }}>{s.val}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
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

      {/* ══ MAP BANNER ══════════════════════════════════════════════════ */}
      <section style={{ background: "rgba(0,212,255,0.05)", borderTop: "1px solid rgba(0,212,255,0.1)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}
        className="px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00D4FF" }} />
            <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
              <span style={{ color: "#00D4FF" }}>Interactive Map:</span>{" "}
              Click any highlighted country for visa requirements, job opportunities, scholarships, and official government links.
            </p>
          </div>
          <Link href="/countries"
            className="text-xs font-bold px-4 py-2 rounded-lg whitespace-nowrap"
            style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", color: "#00D4FF" }}>
            View All Countries →
          </Link>
        </div>
      </section>

      {/* ══ 4 PILLARS ══════════════════════════════════════════════════ */}
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

      {/* ══ TOP DESTINATIONS — travel-style cards ══════════════════════ */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#00D4FF" }}>Where Will You Go?</p>
              <h2 className="display-sm text-white">
                Top migration<br />
                <span style={{ color: "#F5C542" }}>destinations 2026</span>
              </h2>
            </div>
            <Link href="/countries"
              className="hidden md:flex items-center gap-2 text-sm font-bold"
              style={{ color: "#00D4FF" }}>
              All 180+ Countries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DESTINATIONS.map((d, i) => (
              <Link key={i} href={d.href}
                className="group relative glass rounded-2xl p-6 hover:scale-[1.02] transition-all block overflow-hidden">
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${d.accentColor}, transparent)` }} />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{d.flag}</span>
                    <div>
                      <h3 className="font-black text-white text-base group-hover:text-[#00D4FF] transition-colors">{d.name}</h3>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{d.tagline}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black px-2 py-1 rounded-md"
                    style={{ background: d.badgeColor + "20", color: d.badgeColor, border: `1px solid ${d.badgeColor}40` }}>
                    {d.badge}
                  </span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mb-4 py-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="text-center">
                    <Clock className="w-3.5 h-3.5 mx-auto mb-1" style={{ color: d.accentColor }} />
                    <p className="text-[10px] font-bold text-white">{d.processing}</p>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>processing</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-3.5 h-3.5 mx-auto mb-1" style={{ color: d.accentColor }} />
                    <p className="text-[10px] font-bold text-white">{d.salary}</p>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>avg salary</p>
                  </div>
                  <div className="text-center">
                    <Star className="w-3.5 h-3.5 mx-auto mb-1" style={{ color: d.accentColor }} />
                    <p className="text-[10px] font-bold text-white">{d.successRate}</p>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>success rate</p>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {d.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                      <CheckCircle className="w-3 h-3 shrink-0" style={{ color: d.accentColor }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1 text-xs font-bold" style={{ color: d.accentColor }}>
                  Full guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED VISA PROGRAMS — high-CPC content ══════════════════ */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(12,26,40,0.4)" }}
        className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#00D4FF" }}>High-Demand Pathways</p>
            <h2 className="display-sm text-white">
              Top immigration<br />
              <span style={{ color: "#F5C542" }}>programs right now</span>
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-sm" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
              These are the most in-demand visa programs in 2026. Millions of people apply every year — use our AI to find out which one you qualify for today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {VISA_PROGRAMS.map((prog, i) => (
              <div key={i} className="glass rounded-2xl p-7 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{prog.flag}</span>
                    <div>
                      <p className="text-xs font-semibold mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{prog.subtitle}</p>
                      <h3 className="font-black text-white text-lg leading-tight">{prog.name}</h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full whitespace-nowrap ml-4"
                    style={{ background: prog.statusColor + "20", color: prog.statusColor, border: `1px solid ${prog.statusColor}40` }}>
                    {prog.statusLabel}
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-5 p-4 rounded-xl"
                  style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.08)" }}>
                  {prog.stats.map((s, j) => (
                    <div key={j} className="text-center">
                      <p className="font-black text-white text-sm">{s.value}</p>
                      <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm mb-6 flex-1" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                  {prog.desc}
                </p>

                <Link href={prog.href}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                  style={{ background: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.25)", color: "#00D4FF" }}>
                  {prog.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-10 text-center">
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
              Not sure which program fits you? Our AI analyses your profile against all active pathways.
            </p>
            <Link href="/checker"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm glow transition-all"
              style={{ background: "#00D4FF", color: "#07111D" }}>
              <Sparkles className="w-4 h-4" /> Get My Free Eligibility Match
            </Link>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
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

          <div className="lg:w-1/2 space-y-4">
            {[
              { n: "01", title: "Build your profile", body: "Tell us your education, work experience, language skills, and where you want to go. Takes under 5 minutes." },
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

      {/* ══ SCHOLARSHIP SPOTLIGHT ════════════════════════════════════════ */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#F5C542" }}>Fully Funded</p>
              <h2 className="display-sm text-white">
                Scholarship<br />
                <span style={{ color: "#F5C542" }}>deadlines 2026</span>
              </h2>
            </div>
            <Link href="/scholarships"
              className="hidden md:flex items-center gap-2 text-sm font-bold"
              style={{ color: "#F5C542" }}>
              All 50K+ Scholarships <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SCHOLARSHIP_SPOTS.map((s, i) => (
              <Link key={i} href="/scholarships"
                className="group glass rounded-2xl p-5 hover:scale-[1.02] transition-all block">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black px-2.5 py-1 rounded-full"
                    style={{ background: s.color + "20", color: s.color, border: `1px solid ${s.color}30` }}>
                    {s.value}
                  </span>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{s.country}</p>
                </div>
                <h4 className="font-black text-white text-sm mb-3 group-hover:text-[#F5C542] transition-colors">{s.name}</h4>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" style={{ color: s.color }} />
                  <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>Deadline: {s.deadline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COUNTRY SPOTLIGHT STRIP ══════════════════════════════════════ */}
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

      {/* ══ TESTIMONIALS ═════════════════════════════════════════════════ */}
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
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ borderTop: "1px dashed rgba(255,255,255,0.1)" }} className="pt-4">
                <p className="font-bold text-white text-sm">{t.name}</p>
                <p className="text-xs" style={{ color: "#00D4FF" }}>{t.from} → {t.to}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ TRUST ════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="glass rounded-3xl p-8 grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Shield,   title: "Official Sources Only", body: "Every requirement links to a verified government or institution source. No guesswork." },
            { icon: Zap,      title: "Real-Time Updates",    body: "Immigration law changes daily. Our AI monitors and alerts you the moment anything affects you." },
            { icon: Sparkles, title: "AI-Powered Matching",  body: "Trained on thousands of successful migration journeys. Not generic advice — your advice." },
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

      {/* ══ FINAL CTA ════════════════════════════════════════════════════ */}
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

      {/* ══ FOOTER ═══════════════════════════════════════════════════════ */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <span className="font-black text-xl text-white">Green<span style={{ color: "#00D4FF" }}>Passage</span></span>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                AI-powered immigration platform trusted by 2M+ migrants. Visa sponsorship jobs, scholarships, and pathways to 180+ countries.
              </p>
            </div>
            {/* Programs */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Programs</p>
              <ul className="space-y-2.5">
                {[
                  { label: "DV Lottery 2027", href: "/lottery" },
                  { label: "Canada Express Entry", href: "/countries/canada" },
                  { label: "UK Skilled Worker Visa", href: "/countries/united-kingdom" },
                  { label: "Germany Opportunity Card", href: "/countries/germany" },
                  { label: "Australia SkillSelect", href: "/countries/australia" },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.45)" }}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            {/* Resources */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Resources</p>
              <ul className="space-y-2.5">
                {[
                  { label: "Scholarships", href: "/scholarships" },
                  { label: "Visa-Sponsored Jobs", href: "/jobs" },
                  { label: "Eligibility Checker", href: "/checker" },
                  { label: "AI Coach", href: "/ai-coach" },
                  { label: "Blog & Guides", href: "/posts" },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.45)" }}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            {/* Top Countries */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Top Countries</p>
              <ul className="space-y-2.5">
                {[
                  { label: "🇨🇦 Canada", href: "/countries/canada" },
                  { label: "🇬🇧 United Kingdom", href: "/countries/united-kingdom" },
                  { label: "🇩🇪 Germany", href: "/countries/germany" },
                  { label: "🇦🇺 Australia", href: "/countries/australia" },
                  { label: "🇺🇸 United States", href: "/countries/united-states" },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.45)" }}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              © 2026 GreenPassage · AI-Powered Migration Platform · All rights reserved
            </p>
            <div className="flex gap-6 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
