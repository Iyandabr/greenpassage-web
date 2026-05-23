"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/checker",  label: "Eligibility" },
  { href: "/posts",    label: "Guides" },
  { href: "/jobs",     label: "Jobs" },
  { href: "/lottery",  label: "Visa Lottery" },
  { href: "/ai-coach", label: "AI Coach" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50"
      style={{ background: "rgba(6,14,24,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black"
            style={{ background: "#00D4FF", color: "#060E18" }}>
            GP
          </div>
          <span className="font-bold text-sm text-white hidden sm:block">
            Green<span style={{ color: "#00D4FF" }}>Passage</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="px-3 py-1.5 rounded-lg text-sm transition-colors"
              style={{
                color: pathname === l.href ? "#fff" : "rgba(255,255,255,0.5)",
                background: pathname === l.href ? "rgba(255,255,255,0.07)" : "transparent",
                fontWeight: pathname === l.href ? 600 : 400,
              }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/login"
            className="px-3 py-1.5 text-sm transition-colors rounded-lg"
            style={{ color: "rgba(255,255,255,0.55)" }}>
            Sign in
          </Link>
          <Link href="/signup"
            className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
            style={{ background: "#00D4FF", color: "#060E18" }}>
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-1.5 rounded-lg transition-colors"
          style={{ color: "rgba(255,255,255,0.6)" }}
          onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-1"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(6,14,24,0.98)" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="flex items-center px-3 py-2.5 rounded-lg text-sm transition-colors"
              style={{
                color: pathname === l.href ? "#fff" : "rgba(255,255,255,0.55)",
                background: pathname === l.href ? "rgba(255,255,255,0.07)" : "transparent",
              }}>
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Link href="/login" onClick={() => setOpen(false)}
              className="flex-1 text-center py-2.5 rounded-lg text-sm border"
              style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.1)" }}>
              Sign in
            </Link>
            <Link href="/signup" onClick={() => setOpen(false)}
              className="flex-1 text-center py-2.5 rounded-lg text-sm font-semibold"
              style={{ background: "#00D4FF", color: "#060E18" }}>
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
