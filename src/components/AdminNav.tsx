"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, FileText, Briefcase, Settings, Globe, LogOut, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/admin",          icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/posts",    icon: FileText,         label: "Posts" },
  { href: "/admin/jobs",     icon: Briefcase,        label: "Jobs" },
  { href: "/admin/users",    icon: Users,            label: "Users" },
  { href: "/admin/settings", icon: Settings,         label: "Settings" },
];

export default function AdminNav() {
  const pathname = usePathname();
  return (
    <aside className="w-60 shrink-0 flex flex-col"
      style={{ background: "#060d15", borderRight: "1px solid rgba(255,255,255,0.06)", minHeight: "100vh" }}>
      {/* Logo */}
      <div className="px-5 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/admin" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
            <Shield className="w-4 h-4" style={{ color: "#00D4FF" }} />
          </div>
          <div>
            <p className="font-black text-sm text-white">Admin Portal</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>GreenPassage</p>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV.map(item => {
          const Icon = item.icon;
          const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href}
              className={cn("flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                active ? "text-white" : "hover:text-white")}
              style={{
                background: active ? "rgba(0,212,255,0.1)" : "transparent",
                color: active ? "#fff" : "rgba(255,255,255,0.45)",
                border: active ? "1px solid rgba(0,212,255,0.2)" : "1px solid transparent",
              }}>
              <Icon className="w-4 h-4" style={{ color: active ? "#00D4FF" : "inherit" }} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 pb-5 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "12px" }}>
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all"
          style={{ color: "rgba(255,255,255,0.35)" }}>
          <Globe className="w-4 h-4" /> View Site
        </Link>
        <Link href="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all"
          style={{ color: "rgba(255,255,255,0.35)" }}>
          <LogOut className="w-4 h-4" /> Sign Out
        </Link>
      </div>
    </aside>
  );
}
