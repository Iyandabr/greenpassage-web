"use client";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Shield, Check, ArrowRight, ArrowLeft } from "lucide-react";

type Step = 1 | 2 | 3;

const GOALS = [
  { emoji: "🎓", label: "Study Abroad",        sub: "Scholarships & student visas" },
  { emoji: "💼", label: "Work Visa",            sub: "Skilled worker & sponsored jobs" },
  { emoji: "🎟️", label: "Visa Lottery",         sub: "DV Lottery & similar programmes" },
  { emoji: "🏡", label: "Permanent Residency",  sub: "Long-term settlement" },
  { emoji: "🚀", label: "Business / Investor",  sub: "Entrepreneur & investor visas" },
  { emoji: "🌍", label: "Just Exploring",       sub: "See what options I have" },
];

const DESTINATIONS = [
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇮🇪", name: "Ireland" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇳🇴", name: "Norway" },
  { flag: "🇸🇪", name: "Sweden" },
  { flag: "🇫🇮", name: "Finland" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇸🇬", name: "Singapore" },
];

export default function SignupPage() {
  const [step, setStep] = useState<Step>(1);
  const [show, setShow] = useState(false);
  const [goal, setGoal] = useState("");
  const [destinations, setDestinations] = useState<string[]>([]);

  const toggleDest = (name: string) =>
    setDestinations(prev => prev.includes(name) ? prev.filter(d => d !== name) : [...prev, name]);

  const stepLabels = ["Account", "Your Goal", "Destinations"];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ background: "#07111D" }}>
      <div className="w-full max-w-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 mb-10 justify-center">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
            <Shield className="w-4 h-4" style={{ color: "#00D4FF" }} />
          </div>
          <span className="font-black text-white">Green<span style={{ color: "#00D4FF" }}>Passage</span></span>
        </Link>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8 justify-center">
          {stepLabels.map((label, i) => {
            const n = (i + 1) as Step;
            const active = step === n;
            const done = step > n;
            return (
              <div key={label} className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black transition-all"
                    style={{
                      background: done ? "#00D4FF" : active ? "rgba(0,212,255,0.15)" : "rgba(255,255,255,0.05)",
                      color: done ? "#07111D" : active ? "#00D4FF" : "rgba(255,255,255,0.3)",
                      border: active ? "1px solid rgba(0,212,255,0.4)" : "1px solid transparent",
                    }}>
                    {done ? <Check className="w-3 h-3" /> : n}
                  </div>
                  <span className="text-xs font-semibold hidden sm:block"
                    style={{ color: active ? "#00D4FF" : done ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)" }}>
                    {label}
                  </span>
                </div>
                {i < 2 && <div className="w-8 h-px mx-1" style={{ background: done ? "rgba(0,212,255,0.3)" : "rgba(255,255,255,0.08)" }} />}
              </div>
            );
          })}
        </div>

        {/* Step 1: Account */}
        {step === 1 && (
          <div className="glass rounded-2xl p-8">
            <h1 className="text-2xl font-black text-white mb-1">Create your account</h1>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>Free forever — no credit card needed</p>

            <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-semibold mb-5 transition-all"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>or with email</span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {["First Name", "Last Name"].map(label => (
                  <div key={label}>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</label>
                    <input placeholder={label === "First Name" ? "Amara" : "Osei"}
                      className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "#fff" }} />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>Email</label>
                <input type="email" placeholder="you@example.com"
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "#fff" }} />
              </div>
              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>Password</label>
                <div className="relative">
                  <input type={show ? "text" : "password"} placeholder="Min. 8 characters"
                    className="w-full rounded-xl px-4 py-2.5 pr-11 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "#fff" }} />
                  <button type="button" onClick={() => setShow(!show)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2"
                    style={{ color: "rgba(255,255,255,0.3)" }}>
                    {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>Country you're from</label>
                <select className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.7)" }}>
                  <option style={{ background: "#0C1A28" }}>Select your country</option>
                  {["Nigeria", "Ghana", "Kenya", "India", "Philippines", "Brazil", "Egypt", "Pakistan", "Bangladesh", "Other"].map(c => (
                    <option key={c} style={{ background: "#0C1A28" }}>{c}</option>
                  ))}
                </select>
              </div>

              <button onClick={() => setStep(2)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm mt-2"
                style={{ background: "#00D4FF", color: "#07111D" }}>
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-xs mt-4" style={{ color: "rgba(255,255,255,0.3)" }}>
              Already have an account?{" "}
              <Link href="/login" className="font-bold" style={{ color: "#00D4FF" }}>Sign in</Link>
            </p>
          </div>
        )}

        {/* Step 2: Goal */}
        {step === 2 && (
          <div className="glass rounded-2xl p-8">
            <button onClick={() => setStep(1)} className="flex items-center gap-1.5 text-sm mb-6 transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}>
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h1 className="text-2xl font-black text-white mb-1">What's your main goal?</h1>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>This personalises your experience from day one</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {GOALS.map(g => (
                <button key={g.label} onClick={() => setGoal(g.label)}
                  className="p-4 rounded-2xl text-left transition-all"
                  style={{
                    background: goal === g.label ? "rgba(0,212,255,0.1)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${goal === g.label ? "rgba(0,212,255,0.35)" : "rgba(255,255,255,0.07)"}`,
                  }}>
                  <div className="text-2xl mb-2">{g.emoji}</div>
                  <p className="text-sm font-bold text-white leading-tight">{g.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{g.sub}</p>
                </button>
              ))}
            </div>

            <button onClick={() => setStep(3)} disabled={!goal}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all"
              style={{ background: goal ? "#00D4FF" : "rgba(255,255,255,0.06)", color: goal ? "#07111D" : "rgba(255,255,255,0.25)" }}>
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 3: Destinations */}
        {step === 3 && (
          <div className="glass rounded-2xl p-8">
            <button onClick={() => setStep(2)} className="flex items-center gap-1.5 text-sm mb-6 transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}>
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <h1 className="text-2xl font-black text-white mb-1">Where do you want to go?</h1>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>Pick all that interest you — you can change this later</p>

            <div className="grid grid-cols-3 gap-2.5 mb-6">
              {DESTINATIONS.map(d => {
                const selected = destinations.includes(d.name);
                return (
                  <button key={d.name} onClick={() => toggleDest(d.name)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all"
                    style={{
                      background: selected ? "rgba(0,212,255,0.1)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${selected ? "rgba(0,212,255,0.35)" : "rgba(255,255,255,0.07)"}`,
                      color: selected ? "#00D4FF" : "rgba(255,255,255,0.6)",
                    }}>
                    <span>{d.flag}</span> {d.name}
                    {selected && <Check className="w-3 h-3 ml-auto shrink-0" />}
                  </button>
                );
              })}
            </div>

            <Link href="/dashboard">
              <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm"
                style={{ background: "#00D4FF", color: "#07111D" }}>
                Start My Journey <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <button onClick={() => window.location.href = "/dashboard"}
              className="w-full text-center mt-3 text-sm"
              style={{ color: "rgba(255,255,255,0.3)" }}>
              Skip for now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
