"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Plus, Eye, Pen, Trash2, FileText, TrendingUp } from "lucide-react";

type PostStatus = "Published" | "Draft" | "Scheduled";

type Post = {
  id: number; title: string; author: string; category: string;
  status: PostStatus; views: number; date: string; featured: boolean;
};

const POSTS: Post[] = [
  { id: 1, title: "DV Lottery 2027: Complete Application Guide",       author: "James Adeyemi",    category: "Lottery Updates", status: "Published",  views: 4231, date: "May 15, 2026", featured: true  },
  { id: 2, title: "Canada Express Entry May 2026 Draw Results",        author: "Sarah Okonkwo",    category: "Visa News",       status: "Published",  views: 3102, date: "May 13, 2026", featured: false },
  { id: 3, title: "Top 5 Countries Hiring Nurses with Visa Sponsor",   author: "Dr. Amina Hassan", category: "Work Abroad",     status: "Published",  views: 2876, date: "May 3, 2026",  featured: true  },
  { id: 4, title: "Germany Job Market 2026: What You Need to Know",    author: "James Adeyemi",    category: "Work Abroad",     status: "Draft",      views: 0,    date: "May 17, 2026", featured: false },
  { id: 5, title: "How I Moved from Lagos to Berlin in 8 Months",      author: "Chisom Eze",       category: "Success Stories", status: "Published",  views: 1840, date: "Apr 28, 2026", featured: false },
  { id: 6, title: "IELTS vs PTE: Which Should You Take for UK Visa?",  author: "Sarah Okonkwo",    category: "Tips & Guides",   status: "Published",  views: 2100, date: "Apr 22, 2026", featured: false },
  { id: 7, title: "Chevening Scholarship 2027 Applications Now Open",  author: "James Adeyemi",    category: "Scholarships",    status: "Scheduled",  views: 0,    date: "May 20, 2026", featured: false },
  { id: 8, title: "Australia Skilled Worker Visa: New Points Test",    author: "Dr. Amina Hassan", category: "Visa News",       status: "Draft",      views: 0,    date: "May 16, 2026", featured: false },
];

const statusColors: Record<PostStatus, { bg: string; text: string }> = {
  Published: { bg: "rgba(34,197,94,0.1)",   text: "#22C55E" },
  Draft:     { bg: "rgba(255,255,255,0.05)", text: "rgba(255,255,255,0.4)" },
  Scheduled: { bg: "rgba(139,92,246,0.1)",  text: "#8B5CF6" },
};

const CATEGORIES = ["All", "Visa News", "Scholarships", "Success Stories", "Work Abroad", "Tips & Guides", "Lottery Updates"];

export default function AdminPostsPage() {
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState<"All" | PostStatus>("All");
  const [posts, setPosts] = useState(POSTS);

  const filtered = posts.filter(p => {
    if (catFilter !== "All" && p.category !== catFilter) return false;
    if (statusFilter !== "All" && p.status !== statusFilter) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) &&
        !p.author.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const deletePost = (id: number) => setPosts(prev => prev.filter(p => p.id !== id));

  const toggleFeatured = (id: number) =>
    setPosts(prev => prev.map(p => p.id === id ? { ...p, featured: !p.featured } : p));

  const totalViews = posts.filter(p => p.status === "Published").reduce((acc, p) => acc + p.views, 0);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-white">Posts</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
            {posts.filter(p => p.status === "Published").length} published · {posts.filter(p => p.status === "Draft").length} drafts
          </p>
        </div>
        <Link href="/admin/posts/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm"
          style={{ background: "#00D4FF", color: "#07111D" }}>
          <Plus className="w-4 h-4" /> New Post
        </Link>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Published",   val: posts.filter(p => p.status === "Published").length,  color: "#22C55E", icon: FileText },
          { label: "Total Views", val: totalViews.toLocaleString(),                          color: "#00D4FF", icon: Eye },
          { label: "Drafts",      val: posts.filter(p => p.status === "Draft").length,       color: "rgba(255,255,255,0.4)", icon: Pen },
        ].map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="glass rounded-2xl p-5 flex items-center gap-4">
              <Icon className="w-5 h-5 shrink-0" style={{ color: s.color }} />
              <div>
                <div className="text-2xl font-black text-white">{s.val}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-52">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#00D4FF" }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search posts..."
            className="w-full rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }} />
        </div>
        <select value={catFilter} onChange={e => setCatFilter(e.target.value)}
          className="rounded-xl px-3 py-2.5 text-sm outline-none"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>
          {CATEGORIES.map(c => <option key={c} style={{ background: "#0C1A28" }}>{c}</option>)}
        </select>
        <div className="flex gap-2">
          {(["All", "Published", "Draft", "Scheduled"] as const).map(s => (
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
                {["Title", "Author", "Category", "Status", "Views", "Date", "Actions"].map(h => (
                  <th key={h} className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.35)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={p.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <td className="px-5 py-4 max-w-xs">
                    <div className="flex items-center gap-2">
                      {p.featured && (
                        <TrendingUp className="w-3.5 h-3.5 shrink-0" style={{ color: "#F59E0B" }} />
                      )}
                      <p className="text-sm font-bold text-white truncate">{p.title}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm whitespace-nowrap" style={{ color: "rgba(255,255,255,0.55)" }}>{p.author}</td>
                  <td className="px-5 py-4">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                      style={{ background: "rgba(0,212,255,0.08)", color: "#00D4FF" }}>
                      {p.category}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ background: statusColors[p.status].bg, color: statusColors[p.status].text }}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm font-bold" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {p.status === "Published" ? p.views.toLocaleString() : "—"}
                  </td>
                  <td className="px-5 py-4 text-sm whitespace-nowrap" style={{ color: "rgba(255,255,255,0.45)" }}>{p.date}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      {p.status === "Published" && (
                        <Link href={`/posts/${p.id}`}
                          className="p-1.5 rounded-lg transition-all" title="View"
                          style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E" }}>
                          <Eye className="w-3.5 h-3.5" />
                        </Link>
                      )}
                      <Link href={`/admin/posts/new?edit=${p.id}`}
                        className="p-1.5 rounded-lg transition-all" title="Edit"
                        style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF" }}>
                        <Pen className="w-3.5 h-3.5" />
                      </Link>
                      <button onClick={() => deletePost(p.id)}
                        className="p-1.5 rounded-lg transition-all" title="Delete"
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
            <FileText className="w-8 h-8 mx-auto mb-2 opacity-30" />
            <p className="text-sm">No posts match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
