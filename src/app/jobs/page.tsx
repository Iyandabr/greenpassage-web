"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Briefcase, MapPin, Clock, DollarSign, ExternalLink, Filter, Building2 } from "lucide-react";

type Job = {
  id: number; title: string; company: string; country: string; flag: string;
  type: string; field: string; salary: string; posted: string;
  visa: boolean; remote: boolean; description: string; applyUrl: string;
};

const JOBS: Job[] = [
  { id: 1, title: "Senior Software Engineer", company: "Shopify", country: "Canada", flag: "🇨🇦", type: "Full-time", field: "Technology", salary: "CAD $120,000–$160,000", posted: "2 days ago", visa: true, remote: false, description: "Join Shopify's core platform team. We sponsor work permits and help with the full Express Entry process.", applyUrl: "#" },
  { id: 2, title: "Registered Nurse — NHS", company: "NHS England", country: "UK", flag: "🇬🇧", type: "Full-time", field: "Healthcare", salary: "£28,000–£34,000", posted: "1 day ago", visa: true, remote: false, description: "NHS is recruiting internationally trained nurses. We cover your NMC registration costs and provide relocation support.", applyUrl: "#" },
  { id: 3, title: "Civil Engineer", company: "Laing O'Rourke", country: "Australia", flag: "🇦🇺", type: "Full-time", field: "Engineering", salary: "AUD $95,000–$120,000", posted: "3 days ago", visa: true, remote: false, description: "Major infrastructure projects across Australia. Skilled Worker Visa (482) sponsorship available for the right candidate.", applyUrl: "#" },
  { id: 4, title: "Data Scientist", company: "SAP", country: "Germany", flag: "🇩🇪", type: "Full-time", field: "Technology", salary: "€70,000–$95,000", posted: "Today", visa: true, remote: true, description: "Join SAP's AI & Data team in Walldorf. EU Blue Card sponsorship provided. German language not required for this role.", applyUrl: "#" },
  { id: 5, title: "Mechanical Engineer", company: "Siemens", country: "Germany", flag: "🇩🇪", type: "Full-time", field: "Engineering", salary: "€55,000–€75,000", posted: "5 days ago", visa: true, remote: false, description: "Siemens is actively hiring internationally. We provide full EU Blue Card support and German language classes.", applyUrl: "#" },
  { id: 6, title: "Care Worker", company: "Four Seasons Health Care", country: "UK", flag: "🇬🇧", type: "Full-time", field: "Healthcare", salary: "£23,000–£27,000", posted: "Today", visa: true, remote: false, description: "Immediate start. Health and Care Worker Visa sponsorship provided. Free accommodation during your first month.", applyUrl: "#" },
  { id: 7, title: "Full Stack Developer", company: "Booking.com", country: "Netherlands", flag: "🇳🇱", type: "Full-time", field: "Technology", salary: "€75,000–€105,000", posted: "2 days ago", visa: true, remote: true, description: "Build technology used by millions worldwide. Highly Skilled Migrant Visa sponsorship available. English-only workplace.", applyUrl: "#" },
  { id: 8, title: "Farm Worker (Seasonal)", company: "Oban Farms", country: "Canada", flag: "🇨🇦", type: "Seasonal", field: "Agriculture", salary: "CAD $18–$22/hour", posted: "1 week ago", visa: true, remote: false, description: "Seasonal agricultural work in Ontario. TFWP visa provided. Free shared accommodation. Flight reimbursed after 3 months.", applyUrl: "#" },
  { id: 9, title: "ICT Project Manager", company: "Accenture", country: "Ireland", flag: "🇮🇪", type: "Full-time", field: "Technology", salary: "€65,000–€90,000", posted: "3 days ago", visa: true, remote: true, description: "Lead digital transformation projects for global clients. Critical Skills Visa sponsorship for exceptional candidates.", applyUrl: "#" },
  { id: 10, title: "Secondary School Teacher", company: "London Borough of Hackney", country: "UK", flag: "🇬🇧", type: "Full-time", field: "Education", salary: "£30,000–£46,000", posted: "4 days ago", visa: true, remote: false, description: "Teaching positions in Maths, Science, and English. Skilled Worker Visa sponsorship. QTS assessment support provided.", applyUrl: "#" },
  { id: 11, title: "Structural Engineer", company: "Arup", country: "Australia", flag: "🇦🇺", type: "Full-time", field: "Engineering", salary: "AUD $90,000–$130,000", posted: "1 week ago", visa: true, remote: false, description: "Work on iconic infrastructure projects. We sponsor the 482 Temporary Skill Shortage Visa with transition to PR.", applyUrl: "#" },
  { id: 12, title: "Financial Analyst", company: "ADNOC", country: "UAE", flag: "🇦🇪", type: "Full-time", field: "Finance", salary: "AED $200,000–$280,000 (tax-free)", posted: "2 days ago", visa: true, remote: false, description: "Join the Abu Dhabi National Oil Company. Tax-free salary, housing allowance, and generous benefits package.", applyUrl: "#" },
];

const FIELDS  = ["All Fields", "Technology", "Healthcare", "Engineering", "Finance", "Education", "Agriculture"];
const COUNTRIES = ["All Countries", "Canada", "UK", "Germany", "Australia", "Netherlands", "Ireland", "UAE"];
const TYPES   = ["All Types", "Full-time", "Seasonal", "Remote"];

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [field, setField] = useState("All Fields");
  const [country, setCountry] = useState("All Countries");
  const [type, setType] = useState("All Types");
  const [visaOnly, setVisaOnly] = useState(true);

  const filtered = JOBS.filter(j => {
    if (visaOnly && !j.visa) return false;
    if (field !== "All Fields" && j.field !== field) return false;
    if (country !== "All Countries" && j.country !== country) return false;
    if (type !== "All Types" && (type === "Remote" ? !j.remote : j.type !== type)) return false;
    if (search && !j.title.toLowerCase().includes(search.toLowerCase()) &&
        !j.company.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ background: "#07111D" }} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <Briefcase className="w-3.5 h-3.5" /> Visa-Sponsored Jobs Worldwide
          </div>
          <h1 className="display-sm text-white mb-3">
            Jobs that will<br /><span style={{ color: "#00D4FF" }}>move you.</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: "460px", lineHeight: 1.7 }}>
            Every listing here includes visa sponsorship. We only show jobs from verified employers willing to hire internationally.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#00D4FF" }} />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search jobs, companies, or keywords..."
            className="w-full rounded-2xl pl-12 pr-5 py-4 text-base outline-none transition-all"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }} />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 items-center">
          <Filter className="w-4 h-4 shrink-0" style={{ color: "rgba(255,255,255,0.3)" }} />
          {[
            { opts: FIELDS, val: field, set: setField },
            { opts: COUNTRIES, val: country, set: setCountry },
            { opts: TYPES, val: type, set: setType },
          ].map((f, i) => (
            <select key={i} value={f.val} onChange={e => f.set(e.target.value)}
              className="rounded-xl px-4 py-2 text-sm outline-none transition-colors"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>
              {f.opts.map(o => <option key={o} style={{ background: "#0C1A28" }}>{o}</option>)}
            </select>
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <input type="checkbox" checked={visaOnly} onChange={e => setVisaOnly(e.target.checked)} className="sr-only" />
              <div className="w-10 h-5 rounded-full transition-colors" style={{ background: visaOnly ? "#00D4FF" : "rgba(255,255,255,0.1)" }}>
                <div className="w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all" style={{ left: visaOnly ? "22px" : "2px" }} />
              </div>
            </div>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>Visa sponsorship only</span>
          </label>
          <span className="ml-auto text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>{filtered.length} jobs</span>
        </div>

        {/* Job listings */}
        <div className="space-y-4">
          {filtered.map(job => (
            <div key={job.id} className="glass rounded-2xl p-6 transition-all hover:border-[#00D4FF]/20 group">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {job.flag}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-black text-white text-lg group-hover:text-[#00D4FF] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 shrink-0">
                      {job.visa && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ background: "rgba(34,197,94,0.12)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }}>
                          ✓ Visa Sponsored
                        </span>
                      )}
                      {job.remote && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.2)" }}>
                          Remote OK
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                    <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5" />{job.company}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.flag} {job.country}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" />{job.salary}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.posted}</span>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{job.description}</p>
                </div>
                <div className="shrink-0 sm:pl-4">
                  <a href={job.applyUrl}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap"
                    style={{ background: "#00D4FF", color: "#07111D" }}>
                    Apply <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: "rgba(255,255,255,0.3)" }}>
            <Briefcase className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p>No jobs match your filters. Try adjusting your search.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <h3 className="font-black text-white text-xl mb-2">Are you an employer?</h3>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
            Post your visa-sponsored job to reach thousands of qualified international candidates.
          </p>
          <Link href="/admin/jobs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all"
            style={{ background: "#00D4FF", color: "#07111D" }}>
            Post a Job Listing
          </Link>
        </div>
      </div>
    </div>
  );
}
