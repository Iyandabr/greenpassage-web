"use client";
import { useState } from "react";
import { Search, Filter, GraduationCap, Clock, DollarSign, Globe, Bookmark, ExternalLink, SlidersHorizontal } from "lucide-react";

const SCHOLARSHIPS = [
  { id: 1, name: "DAAD Scholarships", country: "🇩🇪 Germany", type: "Fully Funded", level: "Masters / PhD", field: "All Fields", deadline: "Nov 15, 2026", value: "€1,200/month + fees", open: true, featured: true },
  { id: 2, name: "Chevening Scholarship", country: "🇬🇧 UK", type: "Fully Funded", level: "Masters", field: "All Fields", deadline: "Nov 7, 2026", value: "Full fees + stipend", open: true, featured: true },
  { id: 3, name: "Commonwealth Scholarship", country: "🇬🇧 UK", type: "Fully Funded", level: "Masters / PhD", field: "STEM & Development", deadline: "Dec 20, 2026", value: "Full fees + living costs", open: true, featured: false },
  { id: 4, name: "Fulbright Foreign Student Program", country: "🇺🇸 USA", type: "Fully Funded", level: "Masters / PhD", field: "All Fields", deadline: "Feb 2, 2027", value: "Full fees + stipend", open: true, featured: true },
  { id: 5, name: "Erasmus Mundus", country: "🇪🇺 Europe", type: "Fully Funded", level: "Masters", field: "All Fields", deadline: "Jan 10, 2027", value: "€1,400/month", open: true, featured: false },
  { id: 6, name: "Australia Awards", country: "🇦🇺 Australia", type: "Fully Funded", level: "Masters / PhD", field: "Development Sectors", deadline: "Apr 30, 2027", value: "Full costs", open: false, featured: false },
  { id: 7, name: "Trudeau Foundation", country: "🇨🇦 Canada", type: "Fully Funded", level: "PhD", field: "Social Sciences & Humanities", deadline: "Dec 1, 2026", value: "CAD $40,000/year", open: true, featured: false },
  { id: 8, name: "Gates Cambridge Scholarship", country: "🇬🇧 Cambridge", type: "Fully Funded", level: "Masters / PhD", field: "All Fields", deadline: "Oct 15, 2026", value: "Full costs", open: true, featured: true },
  { id: 9, name: "Holland Scholarship", country: "🇳🇱 Netherlands", type: "Partial", level: "Bachelors / Masters", field: "All Fields", deadline: "Feb 1, 2027", value: "€5,000 one-time", open: true, featured: false },
];

const levels = ["All Levels", "Bachelors", "Masters", "PhD"];
const types = ["All Types", "Fully Funded", "Partial"];
const countries = ["All Countries", "Germany", "UK", "USA", "Canada", "Australia", "Europe", "Netherlands"];

export default function ScholarshipsPage() {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All Levels");
  const [type, setType] = useState("All Types");
  const [country, setCountry] = useState("All Countries");
  const [saved, setSaved] = useState<number[]>([]);

  const filtered = SCHOLARSHIPS.filter(s => {
    if (search && !s.name.toLowerCase().includes(search.toLowerCase()) && !s.field.toLowerCase().includes(search.toLowerCase())) return false;
    if (level !== "All Levels" && !s.level.includes(level)) return false;
    if (type !== "All Types" && s.type !== type) return false;
    if (country !== "All Countries" && !s.country.includes(country)) return false;
    return true;
  });

  return (
    <div className="min-h-screen px-4 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm mb-6">
          <GraduationCap className="w-3.5 h-3.5" />
          50,000+ Scholarships Worldwide
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Scholarship</h1>
        <p className="text-teal-100/60 text-lg max-w-xl mx-auto">Search fully funded and partial scholarships worldwide. AI-matched to your profile.</p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-400" />
        <input
          placeholder="Search scholarships, field, or country..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full bg-navy-800 border border-teal-500/20 rounded-2xl pl-12 pr-6 py-4 text-white placeholder-teal-100/30 focus:outline-none focus:border-teal-500/50 text-lg transition-colors"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex items-center gap-2 text-teal-100/50 text-sm">
          <SlidersHorizontal className="w-4 h-4" /> Filters:
        </div>
        {[{ opts: levels, val: level, set: setLevel }, { opts: types, val: type, set: setType }, { opts: countries, val: country, set: setCountry }].map((f, i) => (
          <select key={i} value={f.val} onChange={e => f.set(e.target.value)}
            className="bg-navy-800 border border-teal-500/20 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-teal-500/50 transition-colors">
            {f.opts.map(o => <option key={o}>{o}</option>)}
          </select>
        ))}
        <span className="ml-auto text-sm text-teal-100/50">{filtered.length} results</span>
      </div>

      {/* Featured */}
      {filtered.some(s => s.featured) && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" /> Featured Scholarships
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.filter(s => s.featured).slice(0, 2).map(s => (
              <ScholarshipCard key={s.id} s={s} saved={saved} onSave={id => setSaved(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])} featured />
            ))}
          </div>
        </div>
      )}

      {/* All results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.filter(s => !s.featured).map(s => (
          <ScholarshipCard key={s.id} s={s} saved={saved} onSave={id => setSaved(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-teal-100/40">
          <GraduationCap className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-lg">No scholarships match your filters. Try adjusting your search.</p>
        </div>
      )}
    </div>
  );
}

function ScholarshipCard({ s, saved, onSave, featured = false }: { s: typeof SCHOLARSHIPS[0]; saved: number[]; onSave: (id: number) => void; featured?: boolean }) {
  return (
    <div className={`card-glass rounded-2xl p-6 flex flex-col gap-4 hover:border-teal-500/30 transition-all ${featured ? "border-teal-500/20" : ""}`}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-bold text-white leading-snug mb-1">{s.name}</h3>
          <p className="text-teal-400 text-sm font-medium">{s.country}</p>
        </div>
        <button onClick={() => onSave(s.id)} className={`p-2 rounded-lg transition-all ${saved.includes(s.id) ? "bg-teal-500/20 text-teal-400" : "text-teal-100/30 hover:text-teal-400"}`}>
          <Bookmark className="w-4 h-4" fill={saved.includes(s.id) ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-1.5 text-teal-100/60">
          <GraduationCap className="w-3.5 h-3.5 text-teal-400" /> {s.level}
        </div>
        <div className="flex items-center gap-1.5 text-teal-100/60">
          <Globe className="w-3.5 h-3.5 text-teal-400" /> {s.field}
        </div>
        <div className="flex items-center gap-1.5 text-teal-100/60">
          <Clock className="w-3.5 h-3.5 text-teal-400" /> {s.deadline}
        </div>
        <div className="flex items-center gap-1.5 text-teal-100/60">
          <DollarSign className="w-3.5 h-3.5 text-teal-400" /> {s.value}
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-2 border-t border-teal-500/10">
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${s.open ? "bg-green-500/15 text-green-400" : "bg-red-500/15 text-red-400"}`}>
          {s.open ? "● Open" : "● Closed"}
        </span>
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${s.type === "Fully Funded" ? "bg-teal-500/15 text-teal-400" : "bg-orange-500/15 text-orange-400"}`}>
          {s.type}
        </span>
        <button className="flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 font-semibold transition-colors">
          View <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
