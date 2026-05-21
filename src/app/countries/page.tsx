"use client";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const countries = [
  { flag: "🇨🇦", name: "Canada",      slug: "canada",      color: "#EF4444", tagline: "Express Entry · PNP · 400K immigrants/year",     difficulty: "Medium", rating: 9.4 },
  { flag: "🇩🇪", name: "Germany",     slug: "germany",     color: "#F59E0B", tagline: "Opportunity Card · Free Universities",            difficulty: "Medium", rating: 9.1 },
  { flag: "🇺🇸", name: "USA",         slug: "usa",         color: "#3B82F6", tagline: "DV Lottery · H-1B · 55K green cards annually",    difficulty: "Hard",   rating: 8.8 },
  { flag: "🇬🇧", name: "UK",          slug: "uk",          color: "#8B5CF6", tagline: "Skilled Worker · Health & Care Worker Visa",       difficulty: "Medium", rating: 8.9 },
  { flag: "🇦🇺", name: "Australia",   slug: "australia",   color: "#EC4899", tagline: "SkillSelect · 195K skilled migrants/year",         difficulty: "Medium", rating: 9.0 },
  { flag: "🇳🇱", name: "Netherlands", slug: "netherlands", color: "#F97316", tagline: "HSMP · Startup Visa · EU Access",                 difficulty: "Medium", rating: 8.7 },
  { flag: "🇦🇪", name: "UAE",         slug: "uae",         color: "#D97706", tagline: "Work Permit · Golden Visa · Tax-Free Income",      difficulty: "Easy",   rating: 8.5 },
  { flag: "🇮🇪", name: "Ireland",     slug: "ireland",     color: "#22C55E", tagline: "Critical Skills · Google, Apple, Meta HQs",        difficulty: "Medium", rating: 8.6 },
  { flag: "🇳🇿", name: "New Zealand", slug: "new-zealand", color: "#06B6D4", tagline: "Skilled Migrant · Working Holiday",                difficulty: "Medium", rating: 8.4 },
  { flag: "🇸🇬", name: "Singapore",   slug: "singapore",   color: "#10B981", tagline: "Employment Pass · Tech.Pass · Asia Hub",           difficulty: "Hard",   rating: 8.7 },
  { flag: "🇫🇮", name: "Finland",     slug: "finland",     color: "#3B82F6", tagline: "Work Permit · Free Education · EU Blue Card",     difficulty: "Medium", rating: 8.3 },
  { flag: "🇸🇪", name: "Sweden",      slug: "sweden",      color: "#1D4ED8", tagline: "Work Permit · EU Blue Card · Nordic Quality",      difficulty: "Medium", rating: 8.4 },
];

const difficultyStyle: Record<string, { bg: string; text: string }> = {
  Easy:   { bg: "rgba(34,197,94,0.1)",   text: "#22C55E" },
  Medium: { bg: "rgba(245,158,11,0.1)",  text: "#F59E0B" },
  Hard:   { bg: "rgba(239,68,68,0.1)",   text: "#EF4444" },
};

export default function CountriesPage() {
  return (
    <div style={{ background: "#07111D" }} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <MapPin className="w-3.5 h-3.5" /> Click any country for the full migration guide
          </div>
          <h1 className="display-sm text-white mb-4">
            Where do you<br />want to <span style={{ color: "#00D4FF" }}>go?</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: "480px", lineHeight: 1.7 }}>
            Detailed guides for the world's top greener-pasture destinations. Visa types, salaries, requirements, official links, and an AI guide built into every page.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.map(c => (
            <Link key={c.slug} href={`/countries/${c.slug}`}
              className="group glass rounded-2xl overflow-hidden transition-all block"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.borderColor = c.color + "40")}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
              {/* Colour bar */}
              <div className="h-0.5 transition-all" style={{ background: `linear-gradient(90deg, ${c.color}, transparent)` }} />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{c.flag}</span>
                    <div>
                      <h2 className="font-black text-xl text-white group-hover:text-[#00D4FF] transition-colors">{c.name}</h2>
                      <p className="text-xs mt-0.5" style={{ color: c.color }}>{c.tagline.split("·")[0]}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-2xl font-black" style={{ color: "#00D4FF" }}>{c.rating}</span>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Score</p>
                  </div>
                </div>

                <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                  {c.tagline}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: difficultyStyle[c.difficulty].bg, color: difficultyStyle[c.difficulty].text }}>
                    {c.difficulty} to enter
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold transition-colors group-hover:text-[#00D4FF]"
                    style={{ color: "rgba(255,255,255,0.3)" }}>
                    Full Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Map CTA */}
        <div className="mt-14 glass rounded-2xl p-8 text-center">
          <p className="text-lg font-bold text-white mb-2">Not sure where to go?</p>
          <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Use the interactive world map on the home page — hover over any country to preview it, then click to dive in.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/" className="px-5 py-2.5 rounded-xl font-bold text-sm" style={{ background: "#00D4FF", color: "#07111D" }}>
              Open World Map
            </Link>
            <Link href="/checker" className="px-5 py-2.5 rounded-xl font-semibold text-sm"
              style={{ border: "1px solid rgba(0,212,255,0.2)", color: "rgba(255,255,255,0.7)" }}>
              AI Eligibility Check
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
