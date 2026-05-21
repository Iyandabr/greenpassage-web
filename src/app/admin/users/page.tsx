"use client";
import { useState } from "react";
import { Search, UserCog, MoreHorizontal, Shield, Pen, Trash2, UserPlus } from "lucide-react";

type Role = "Admin" | "Author" | "Editor" | "User";
type Status = "Active" | "Pending" | "Suspended";

type User = {
  id: number; name: string; email: string; country: string;
  role: Role; status: Status; joined: string; posts: number;
};

const USERS: User[] = [
  { id: 1, name: "Bolaji Iyanda",    email: "iyandabolaji1@gmail.com", country: "🇬🇧", role: "Admin",  status: "Active",    joined: "Mar 2025", posts: 0  },
  { id: 2, name: "James Adeyemi",    email: "james@greenpassage.app",  country: "🇳🇬", role: "Author", status: "Active",    joined: "Jan 2026", posts: 14 },
  { id: 3, name: "Sarah Okonkwo",    email: "sarah@greenpassage.app",  country: "🇬🇭", role: "Editor", status: "Active",    joined: "Feb 2026", posts: 9  },
  { id: 4, name: "Dr. Amina Hassan", email: "amina@greenpassage.app",  country: "🇸🇦", role: "Author", status: "Active",    joined: "Mar 2026", posts: 6  },
  { id: 5, name: "Amara Osei",       email: "amara@email.com",         country: "🇬🇭", role: "User",   status: "Active",    joined: "May 2026", posts: 0  },
  { id: 6, name: "Raj Patel",        email: "raj@email.com",           country: "🇮🇳", role: "User",   status: "Active",    joined: "May 2026", posts: 0  },
  { id: 7, name: "Maria Santos",     email: "maria@email.com",         country: "🇧🇷", role: "User",   status: "Active",    joined: "May 2026", posts: 0  },
  { id: 8, name: "Emmanuel Ode",     email: "emeka@email.com",         country: "🇳🇬", role: "User",   status: "Active",    joined: "May 2026", posts: 0  },
  { id: 9, name: "Fatima Al-Ali",    email: "fatima@email.com",        country: "🇪🇬", role: "User",   status: "Pending",   joined: "May 2026", posts: 0  },
  { id: 10, name: "Chisom Eze",      email: "chisom@email.com",        country: "🇳🇬", role: "Author", status: "Active",    joined: "Apr 2026", posts: 3  },
];

const roleColors: Record<Role, { bg: string; text: string }> = {
  Admin:  { bg: "rgba(239,68,68,0.12)",   text: "#EF4444" },
  Author: { bg: "rgba(245,158,11,0.12)",  text: "#F59E0B" },
  Editor: { bg: "rgba(139,92,246,0.12)",  text: "#8B5CF6" },
  User:   { bg: "rgba(0,212,255,0.1)",    text: "#00D4FF" },
};
const statusColors: Record<Status, { bg: string; text: string }> = {
  Active:    { bg: "rgba(34,197,94,0.1)",   text: "#22C55E" },
  Pending:   { bg: "rgba(245,158,11,0.1)",  text: "#F59E0B" },
  Suspended: { bg: "rgba(239,68,68,0.1)",   text: "#EF4444" },
};

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<"All" | Role>("All");
  const [users, setUsers] = useState(USERS);
  const [editId, setEditId] = useState<number | null>(null);

  const filtered = users.filter(u => {
    if (roleFilter !== "All" && u.role !== roleFilter) return false;
    if (search && !u.name.toLowerCase().includes(search.toLowerCase()) &&
        !u.email.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const changeRole = (id: number, role: Role) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, role } : u));
    setEditId(null);
  };

  const changeStatus = (id: number, status: Status) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, status } : u));
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-white">User Management</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{users.length} total users</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
          style={{ background: "#00D4FF", color: "#07111D" }}>
          <UserPlus className="w-4 h-4" /> Invite User
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 min-w-52">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#00D4FF" }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search users..."
            className="w-full rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }} />
        </div>
        <div className="flex gap-2">
          {(["All", "Admin", "Author", "Editor", "User"] as const).map(r => (
            <button key={r} onClick={() => setRoleFilter(r)}
              className="px-3 py-2 rounded-xl text-xs font-semibold transition-all"
              style={{
                background: roleFilter === r ? "#00D4FF" : "rgba(255,255,255,0.04)",
                color: roleFilter === r ? "#07111D" : "rgba(255,255,255,0.5)",
              }}>
              {r}
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
                {["User", "Country", "Role", "Status", "Joined", "Posts", "Actions"].map(h => (
                  <th key={h} className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider"
                    style={{ color: "rgba(255,255,255,0.35)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((u, i) => (
                <tr key={u.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0"
                        style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF" }}>
                        {u.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{u.name}</p>
                        <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-lg">{u.country}</td>
                  <td className="px-5 py-4">
                    {editId === u.id ? (
                      <select defaultValue={u.role} onChange={e => changeRole(u.id, e.target.value as Role)}
                        className="rounded-lg px-2 py-1 text-xs font-bold outline-none"
                        style={{ background: "#0C1A28", border: "1px solid rgba(0,212,255,0.3)", color: "#00D4FF" }}>
                        {(["Admin", "Author", "Editor", "User"] as Role[]).map(r => <option key={r}>{r}</option>)}
                      </select>
                    ) : (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{ background: roleColors[u.role].bg, color: roleColors[u.role].text }}>
                        {u.role}
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <select value={u.status} onChange={e => changeStatus(u.id, e.target.value as Status)}
                      className="rounded-lg px-2 py-1 text-xs font-bold outline-none"
                      style={{ background: statusColors[u.status].bg, color: statusColors[u.status].text, border: "none" }}>
                      {(["Active", "Pending", "Suspended"] as Status[]).map(s => <option key={s} style={{ background: "#0C1A28" }}>{s}</option>)}
                    </select>
                  </td>
                  <td className="px-5 py-4 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{u.joined}</td>
                  <td className="px-5 py-4 text-sm font-bold" style={{ color: "rgba(255,255,255,0.6)" }}>{u.posts}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => setEditId(editId === u.id ? null : u.id)}
                        className="p-1.5 rounded-lg transition-all" title="Change role"
                        style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B" }}>
                        <UserCog className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg transition-all" title="Edit"
                        style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF" }}>
                        <Pen className="w-3.5 h-3.5" />
                      </button>
                      {u.role !== "Admin" && (
                        <button className="p-1.5 rounded-lg transition-all" title="Delete"
                          style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444" }}>
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
