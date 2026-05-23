"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/checker",      label: "Eligibility" },
  { href: "/posts",        label: "Posts" },
  { href: "/jobs",         label: "Jobs" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/ai-coach",     label: "AI Coach" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#07111D]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-lg bg-[#00D4FF] opacity-20 group-hover:opacity-40 transition-opacity blur-sm" />
            <div className="relative w-8 h-8 rounded-lg border border-[#00D4FF]/40 flex items-center justify-center">
              <span className="text-[#00D4FF] font-black text-sm">GP</span>
            </div>
          </div>
          <span className="font-black text-lg tracking-tight text-white">
            Green<span style={{ color: "#00D4FF" }}>Passage</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === l.href ? "text-[#00D4FF]" : "text-white/50 hover:text-white"
              )}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm text-white/50 hover:text-white transition-colors">Sign In</Link>
          <Link href="/signup"
            className="px-5 py-2 rounded-lg text-sm font-bold transition-all glow-sm"
            style={{ background: "#00D4FF", color: "#07111D" }}>
            Get Started Free
          </Link>
        </div>

        <button className="md:hidden text-white/70 p-1" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#07111D] px-6 py-4 space-y-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-white/60 hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/5 space-y-2">
            <Link href="/login" className="block py-2 text-sm text-white/50">Sign In</Link>
            <Link href="/signup" className="block py-2.5 rounded-lg text-sm font-bold text-center" style={{ background: "#00D4FF", color: "#07111D" }}>
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
