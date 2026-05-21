import Link from "next/link";
import { Users, FileText, Briefcase, TrendingUp, Globe, Eye, ArrowRight, Activity } from "lucide-react";

const stats = [
  { label: "Total Users",      val: "12,847", change: "+8.3%",  icon: Users,     color: "#00D4FF" },
  { label: "Published Posts",  val: "143",    change: "+12",    icon: FileText,  color: "#22C55E" },
  { label: "Active Jobs",      val: "84",     change: "+23",    icon: Briefcase, color: "#F59E0B" },
  { label: "Monthly Visitors", val: "89,412", change: "+24.1%", icon: Eye,       color: "#8B5CF6" },
];

const recentUsers = [
  { name: "Amara Osei",    email: "amara@email.com",   country: "🇬🇭", role: "User",   joined: "Today",    status: "Active" },
  { name: "Raj Patel",     email: "raj@email.com",     country: "🇮🇳", role: "User",   joined: "Today",    status: "Active" },
  { name: "Maria Santos",  email: "maria@email.com",   country: "🇧🇷", role: "Author", joined: "Yesterday",status: "Active" },
  { name: "Emmanuel Ode",  email: "emeka@email.com",   country: "🇳🇬", role: "User",   joined: "2 days ago",status: "Active" },
  { name: "Fatima Al-Ali", email: "fatima@email.com",  country: "🇪🇬", role: "User",   joined: "3 days ago",status: "Pending" },
];

const recentPosts = [
  { title: "DV Lottery 2027: Complete Guide", author: "James A.", status: "Published", views: "4,231", date: "May 15" },
  { title: "Canada Express Entry May Draw", author: "Sarah O.",  status: "Published", views: "3,102", date: "May 13" },
  { title: "Top 5 Countries for Nurses", author: "Dr. Amina H.", status: "Published", views: "2,876", date: "May 3" },
  { title: "Germany Job Market 2026 Update", author: "James A.", status: "Draft",     views: "—",     date: "May 17" },
];

const roleColors: Record<string, { bg: string; text: string }> = {
  Admin:  { bg: "rgba(239,68,68,0.1)",   text: "#EF4444" },
  Author: { bg: "rgba(245,158,11,0.1)",  text: "#F59E0B" },
  User:   { bg: "rgba(0,212,255,0.1)",   text: "#00D4FF" },
};

const statusColors: Record<string, { bg: string; text: string }> = {
  Active:    { bg: "rgba(34,197,94,0.1)",   text: "#22C55E" },
  Pending:   { bg: "rgba(245,158,11,0.1)",  text: "#F59E0B" },
  Suspended: { bg: "rgba(239,68,68,0.1)",   text: "#EF4444" },
  Published: { bg: "rgba(34,197,94,0.1)",   text: "#22C55E" },
  Draft:     { bg: "rgba(255,255,255,0.05)",text: "rgba(255,255,255,0.4)" },
};

export default function AdminDashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-white">Dashboard</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Welcome back, Admin · Monday May 19, 2026</p>
        </div>
        <Link href="/admin/posts/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
          style={{ background: "#00D4FF", color: "#07111D" }}>
          + New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <Icon className="w-5 h-5" style={{ color: s.color }} />
                <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E" }}>
                  {s.change}
                </span>
              </div>
              <div className="text-3xl font-black text-white mb-1">{s.val}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Recent Users */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-black text-white flex items-center gap-2">
              <Users className="w-4 h-4" style={{ color: "#00D4FF" }} /> Recent Users
            </h2>
            <Link href="/admin/users" className="text-xs font-bold" style={{ color: "#00D4FF" }}>View all →</Link>
          </div>
          <div className="space-y-3">
            {recentUsers.map((u, i) => (
              <div key={i} className="flex items-center gap-3 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black"
                  style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", flexShrink: 0 }}>
                  {u.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">{u.country} {u.name}</p>
                  <p className="text-xs truncate" style={{ color: "rgba(255,255,255,0.35)" }}>{u.email}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: roleColors[u.role]?.bg, color: roleColors[u.role]?.text }}>
                    {u.role}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: statusColors[u.status]?.bg, color: statusColors[u.status]?.text }}>
                    {u.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-black text-white flex items-center gap-2">
              <FileText className="w-4 h-4" style={{ color: "#00D4FF" }} /> Recent Posts
            </h2>
            <Link href="/admin/posts" className="text-xs font-bold" style={{ color: "#00D4FF" }}>View all →</Link>
          </div>
          <div className="space-y-3">
            {recentPosts.map((p, i) => (
              <div key={i} className="flex items-center gap-3 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate">{p.title}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>by {p.author} · {p.date}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{p.views} views</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: statusColors[p.status]?.bg, color: statusColors[p.status]?.text }}>
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { href: "/admin/posts/new", icon: FileText,  label: "Create Post",  color: "#00D4FF" },
          { href: "/admin/jobs",      icon: Briefcase, label: "Add Job",      color: "#22C55E" },
          { href: "/admin/users",     icon: Users,     label: "Manage Users", color: "#F59E0B" },
          { href: "/",                icon: Globe,     label: "View Site",    color: "#8B5CF6" },
        ].map(a => {
          const Icon = a.icon;
          return (
            <Link key={a.href} href={a.href}
              className="glass rounded-2xl p-5 flex flex-col gap-3 transition-all hover:border-white/10 group">
              <Icon className="w-5 h-5" style={{ color: a.color }} />
              <span className="text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors">{a.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
