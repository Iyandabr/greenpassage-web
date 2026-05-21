"use client";
import { useState } from "react";
import { Plus, Search, Pen, Trash2, Briefcase, MapPin, DollarSign, Eye, EyeOff } from "lucide-react";

type JobStatus = "Active" | "Closed" | "Draft";

type Job = {
  id: number; title: string; company: string; country: string; flag: string;
  field: string; salary: string; type: string; status: JobStatus;
  posted: string; applications: number; visa: boolean;
};

const JOBS: Job[] = [
  { id: 1,  title: "Senior Software Engineer",  company: "Shopify",               country: "Canada",      flag: "🇨🇦", field: "Technology",  salary: "CAD $120k–$160k", type: "Full-time", status: "Active",  posted: "May 17, 2026", applications: 24, visa: true },
  { id: 2,  title: "Registered Nurse — NHS",    company: "NHS England",           country: "UK",          flag: "🇬🇧", field: "Healthcare",  salary: "£28k–£34k",       type: "Full-time", status: "Active",  posted: "May 18, 2026", applications: 41, visa: true },
  { id: 3,  title: "Civil Engineer",            company: "Laing O'Rourke",        country: "Australia",   flag: "🇦🇺", field: "Engineering", salary: "AUD $95k–$120k",  type: "Full-time", status: "Active",  posted: "May 16, 2026", applications: 17, visa: true },
  { id: 4,  title: "Data Scientist",            company: "SAP",                   country: "Germany",     flag: "🇩🇪", field: "Technology",  salary: "€70k–€95k",       type: "Full-time", status: "Active",  posted: "May 19, 2026", applications: 8,  visa: true },
  { id: 5,  title: "Mechanical Engineer",       company: "Siemens",               country: "Germany",     flag: "🇩🇪", field: "Engineering", salary: "€55k–€75k",       type: "Full-time", status: "Active",  posted: "May 14, 2026", applications: 12, visa: true },
  { id: 6,  title: "Care Worker",               company: "Four Seasons Health",   country: "UK",          flag: "🇬🇧", field: "Healthcare",  salary: "£23k–£27k",       type: "Full-time", status: "Active",  posted: "May 19, 2026", applications: 33, visa: true },
  { id: 7,  title: "Full Stack Developer",      company: "Booking.com",           country: "Netherlands", flag: "🇳🇱", field: "Technology",  salary: "€75k–€105k",      type: "Full-time", status: "Active",  posted: "May 17, 2026", applications: 19, visa: true },
  { id: 8,  title: "Farm Worker (Seasonal)",    company: "Oban Farms",            country: "Canada",      flag: "🇨🇦", field: "Agriculture", salary: "CAD $18–$22/hr",  type: "Seasonal",  status: "Closed",  posted: "May 12, 2026", applications: 56, visa: true },
  { id: 9,  title: "ICT Project Manager",       company: "Accenture",             country: "Ireland",     flag: "🇮🇪", field: "Technology",  salary: "€65k–€90k",       type: "Full-time", status: "Active",  posted: "May 16, 2026", applications: 7,  visa: true },
  { id: 10, title: "Secondary School Teacher",  company: "London Borough Hackney",country: "UK",          flag: "🇬🇧", field: "Education",   salary: "£30k–£46k",       type: "Full-time", status: "Draft",   posted: "—",            applications: 0,  visa: true },
];

const statusColors: Record<JobStatus, { bg: string; text: string }> = {
  Active: { bg: "rgba(34,197,94,0.1)",   text: "#22C55E" },
  Closed: { bg: "rgba(239,68,68,0.1)",   text: "#EF4444" },
  Draft:  { bg: "rgba(255,255,255,0.05)",text: "rgba(255,255,255,0.4)" },
};

const FIELDS = ["All", "Technology", "Healthcare", "Engineering", "Finance", "Education", "Agriculture"];

type EditingJob = Omit<Job, "id" | "applications" | "posted">;

const EMPTY: EditingJob = { title: "", company: "", country: "", flag: "🌍", field: "Technology", salary: "", type: "Full-time", status: "Draft", visa: true };

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState(JOBS);
  const [search, setSearch] = useState("");
  const [fieldFilter, setFieldFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState<"All" | JobStatus>("All");
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<EditingJob & { id?: number }>(EMPTY);

  const filtered = jobs.filter(j => {
    if (fieldFilter !== "All" && j.field !== fieldFilter) return false;
    if (statusFilter !== "All" && j.status !== statusFilter) return false;
    if (search && !j.title.toLowerCase().includes(search.toLowerCase()) &&
        !j.company.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const openNew = () => { setEditing(EMPTY); setModal(true); };
  const openEdit = (job: Job) => {
    const { id, applications, posted, ...rest } = job;
    setEditing({ ...rest, id });
    setModal(true);
  };

  const saveJob = () => {
    if (!editing.title || !editing.company) return;
    if (editing.id) {
      setJobs(prev => prev.map(j => j.id === editing.id ? { ...j, ...editing, id: editing.id! } : j));
    } else {
      const newJob: Job = { ...editing, id: Date.now(), applications: 0, posted: "Today" };
      setJobs(prev => [newJob, ...prev]);
    }
    setModal(false);
  };

  const deleteJob = (id: number) => setJobs(prev => prev.filter(j => j.id !== id));

  const toggleStatus = (id: number) =>
    setJobs(prev => prev.map(j => j.id === id ? { ...j, status: j.status === "Active" ? "Closed" : "Active" } : j));

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-white">Job Listings</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
            {jobs.filter(j => j.status === "Active").length} active · {jobs.reduce((a, j) => a + j.applications, 0)} total applications
          </p>
        </div>
        <button onClick={openNew}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm"
          style={{ background: "#00D4FF", color: "#07111D" }}>
          <Plus className="w-4 h-4" /> Add Job
        </button>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Active Jobs",      val: jobs.filter(j => j.status === "Active").length,          color: "#22C55E" },
          { label: "Total Applications", val: jobs.reduce((a, j) => a + j.applications, 0),          color: "#00D4FF" },
          { label: "Visa-Sponsored",   val: jobs.filter(j => j.visa).length,                         color: "#F59E0B" },
        ].map(s => (
          <div key={s.label} className="glass rounded-2xl p-5">
            <div className="text-2xl font-black text-white">{s.val}</div>
            <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-52">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#00D4FF" }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search jobs..."
            className="w-full rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }} />
        </div>
        <select value={fieldFilter} onChange={e => setFieldFilter(e.target.value)}
          className="rounded-xl px-3 py-2.5 text-sm outline-none"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>
          {FIELDS.map(f => <option key={f} style={{ background: "#0C1A28" }}>{f}</option>)}
        </select>
        <div className="flex gap-2">
          {(["All", "Active", "Closed", "Draft"] as const).map(s => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className="px-3 py-2 rounded-xl text-xs font-semibold transition-all"
              style={{
                background: statusFilter === s ? "#00D4FF" : "rgba(255,255,255,0.04)",
                color: statusFilter === s ? "#07111D" : "rgba(255,255,255,0.5)",
              }}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="glass rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {["Job", "Company", "Location", "Salary", "Applications", "Status", "Actions"].map(h => (
                  <th key={h} className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.35)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((j, i) => (
                <tr key={j.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <td className="px-5 py-4">
                    <p className="text-sm font-bold text-white">{j.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{j.field} · {j.type}</p>
                  </td>
                  <td className="px-5 py-4 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{j.company}</td>
                  <td className="px-5 py-4">
                    <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                      <MapPin className="w-3.5 h-3.5 shrink-0" /> {j.flag} {j.country}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-medium" style={{ color: "#22C55E" }}>{j.salary}</td>
                  <td className="px-5 py-4 text-sm font-bold" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {j.applications > 0 ? j.applications : "—"}
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: statusColors[j.status].bg, color: statusColors[j.status].text }}>
                      {j.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => toggleStatus(j.id)} title={j.status === "Active" ? "Close listing" : "Activate"}
                        className="p-1.5 rounded-lg transition-all"
                        style={{ background: j.status === "Active" ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.05)", color: j.status === "Active" ? "#22C55E" : "rgba(255,255,255,0.4)" }}>
                        {j.status === "Active" ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                      </button>
                      <button onClick={() => openEdit(j)} title="Edit"
                        className="p-1.5 rounded-lg transition-all"
                        style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF" }}>
                        <Pen className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => deleteJob(j.id)} title="Delete"
                        className="p-1.5 rounded-lg transition-all"
                        style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444" }}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ color: "rgba(255,255,255,0.3)" }}>
            <Briefcase className="w-8 h-8 mx-auto mb-2 opacity-30" />
            <p className="text-sm">No jobs match your filters.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}>
          <div className="w-full max-w-lg glass rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-black text-white">{editing.id ? "Edit Job" : "Add New Job"}</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Job Title", key: "title", placeholder: "e.g. Senior Software Engineer" },
                { label: "Company",   key: "company", placeholder: "e.g. Shopify" },
                { label: "Country",   key: "country", placeholder: "e.g. Canada" },
                { label: "Salary",    key: "salary",  placeholder: "e.g. $80,000–$120,000" },
              ].map(f => (
                <div key={f.key} className={f.key === "title" ? "col-span-2" : ""}>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>{f.label}</label>
                  <input
                    value={(editing as unknown as Record<string, string>)[f.key] || ""}
                    onChange={e => setEditing(prev => ({ ...prev, [f.key]: e.target.value }))}
                    placeholder={f.placeholder}
                    className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
                  />
                </div>
              ))}
              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>Field</label>
                <select value={editing.field} onChange={e => setEditing(prev => ({ ...prev, field: e.target.value }))}
                  className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
                  {FIELDS.filter(f => f !== "All").map(f => <option key={f} style={{ background: "#0C1A28" }}>{f}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>Type</label>
                <select value={editing.type} onChange={e => setEditing(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
                  {["Full-time", "Part-time", "Seasonal", "Contract"].map(t => <option key={t} style={{ background: "#0C1A28" }}>{t}</option>)}
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button onClick={() => setModal(false)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.6)" }}>
                Cancel
              </button>
              <button onClick={saveJob}
                className="flex-1 py-2.5 rounded-xl text-sm font-bold"
                style={{ background: "#00D4FF", color: "#07111D" }}>
                {editing.id ? "Save Changes" : "Add Job"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
