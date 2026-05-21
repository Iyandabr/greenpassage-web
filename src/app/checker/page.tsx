"use client";
import { useState } from "react";
import { Sparkles, CheckCircle, ArrowRight, ChevronDown, Loader2 } from "lucide-react";

const educationLevels = [
  "High School", "Diploma / HND", "Bachelor's Degree",
  "Master's Degree", "PhD / Doctorate", "Professional Certificate",
];

const languages = ["English", "French", "German", "Spanish", "Mandarin", "Arabic", "Portuguese"];
const professions = [
  "Software Engineer", "Nurse / Healthcare", "Teacher / Educator", "Engineer (Mechanical/Civil/Electrical)",
  "Accountant / Finance", "Doctor / Medical", "Tradesperson (Electrician/Plumber)", "Business / Management",
  "Student", "Other",
];
const goals = ["Scholarship / Study Abroad", "Work Visa", "Visa Lottery (DV etc.)", "Permanent Residency", "Business / Investor Visa"];

const results = [
  { country: "🇨🇦 Canada", program: "Express Entry", score: 96, reason: "Your engineering background and English score are highly competitive for Federal Skilled Worker.", time: "6–12 months" },
  { country: "🇩🇪 Germany", program: "Opportunity Card", score: 91, reason: "Germany's new points-based card suits your education level and tech profession perfectly.", time: "3–6 months" },
  { country: "🇦🇺 Australia", program: "SkillSelect (189)", score: 88, reason: "Your occupation is on the Medium and Long-term Strategic Skills List.", time: "8–14 months" },
  { country: "🇬🇧 UK", program: "Skilled Worker Visa", score: 84, reason: "Your profession meets the salary threshold and shortage occupation criteria.", time: "4–8 months" },
  { country: "🇺🇸 USA", program: "DV Lottery 2027", score: 70, reason: "You qualify to enter the Diversity Visa Lottery. Low individual odds but worth entering.", time: "Lottery draw" },
];

function SelectBox({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-teal-100/70 mb-2">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full appearance-none bg-navy-800 border border-teal-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/60 transition-colors"
        >
          <option value="">Select {label}</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-400 pointer-events-none" />
      </div>
    </div>
  );
}

export default function CheckerPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ education: "", language: "", score: "", profession: "", experience: "", goal: "", age: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const handleCheck = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 2200);
  };

  if (done) {
    return (
      <div className="min-h-screen px-4 py-12 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            AI Analysis Complete
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Your Top Opportunities</h1>
          <p className="text-teal-100/60">Based on your profile, here are your best pathways — ranked by AI eligibility score.</p>
        </div>
        <div className="space-y-4">
          {results.map((r, i) => (
            <div key={i} className="card-glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-white">{r.country}</h3>
                  <span className="px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-300 text-xs font-medium">{r.program}</span>
                </div>
                <p className="text-sm text-teal-100/60 mb-2">{r.reason}</p>
                <p className="text-xs text-teal-400 font-medium">⏱ Estimated timeline: {r.time}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400">{r.score}%</div>
                  <div className="text-xs text-teal-100/50">Match</div>
                </div>
                <button className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-900 font-semibold text-sm transition-all flex items-center gap-1">
                  View Guide <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 card-glass rounded-2xl p-6 text-center">
          <h3 className="font-bold text-white mb-2">Want a full personalised roadmap?</h3>
          <p className="text-sm text-teal-100/60 mb-4">Upgrade to Premium and get your step-by-step action plan with document checklist and AI coach.</p>
          <button className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold text-sm transition-all glow-teal">
            Get My Full Roadmap
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Free AI Eligibility Check
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">Find Your Best Pathway Abroad</h1>
        <p className="text-teal-100/60">Answer 7 quick questions. Our AI will match you to the countries and programmes you qualify for.</p>
      </div>

      {/* Progress */}
      <div className="flex gap-2 mb-8">
        {[1, 2, 3].map(s => (
          <div key={s} className={`h-1.5 flex-1 rounded-full transition-all ${step >= s ? "bg-teal-500" : "bg-teal-500/20"}`} />
        ))}
      </div>

      <div className="card-glass rounded-2xl p-8 space-y-6">
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold text-white">Your Background</h2>
            <div className="grid gap-5">
              <SelectBox label="Highest Education Level" options={educationLevels} value={form.education} onChange={v => update("education", v)} />
              <SelectBox label="Your Profession / Field" options={professions} value={form.profession} onChange={v => update("profession", v)} />
              <div>
                <label className="block text-sm font-medium text-teal-100/70 mb-2">Years of Work Experience</label>
                <input type="number" min="0" max="40" placeholder="e.g. 5" value={form.experience} onChange={e => update("experience", e.target.value)}
                  className="w-full bg-navy-800 border border-teal-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/60 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-100/70 mb-2">Your Age</label>
                <input type="number" min="18" max="65" placeholder="e.g. 28" value={form.age} onChange={e => update("age", e.target.value)}
                  className="w-full bg-navy-800 border border-teal-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/60 transition-colors" />
              </div>
            </div>
            <button onClick={() => setStep(2)} className="w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold transition-all">
              Continue →
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold text-white">Language & Goals</h2>
            <div className="grid gap-5">
              <SelectBox label="Best Language (Other Than Native)" options={languages} value={form.language} onChange={v => update("language", v)} />
              <div>
                <label className="block text-sm font-medium text-teal-100/70 mb-2">Test Score (IELTS / TOEFL / etc.)</label>
                <input placeholder="e.g. IELTS 7.5" value={form.score} onChange={e => update("score", e.target.value)}
                  className="w-full bg-navy-800 border border-teal-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500/60 transition-colors" />
              </div>
              <SelectBox label="Primary Goal" options={goals} value={form.goal} onChange={v => update("goal", v)} />
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-xl border border-teal-500/30 text-teal-300 font-semibold hover:bg-teal-500/5 transition-all">
                ← Back
              </button>
              <button onClick={() => setStep(3)} className="flex-1 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold transition-all">
                Continue →
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-bold text-white">Confirm & Check</h2>
            <div className="space-y-3">
              {[
                { label: "Education", val: form.education || "—" },
                { label: "Profession", val: form.profession || "—" },
                { label: "Experience", val: form.experience ? `${form.experience} years` : "—" },
                { label: "Age", val: form.age || "—" },
                { label: "Language Score", val: form.score || "—" },
                { label: "Goal", val: form.goal || "—" },
              ].map(item => (
                <div key={item.label} className="flex justify-between py-2 border-b border-teal-500/10">
                  <span className="text-teal-100/60 text-sm">{item.label}</span>
                  <span className="text-white text-sm font-medium">{item.val}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={() => setStep(2)} className="flex-1 py-3 rounded-xl border border-teal-500/30 text-teal-300 font-semibold hover:bg-teal-500/5 transition-all">
                ← Back
              </button>
              <button onClick={handleCheck} disabled={loading}
                className="flex-1 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold transition-all glow-teal flex items-center justify-center gap-2 disabled:opacity-80">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Analysing...</> : <><Sparkles className="w-4 h-4" /> Check Eligibility</>}
              </button>
            </div>
          </>
        )}
      </div>

      <p className="text-center text-xs text-teal-100/30 mt-6 flex items-center justify-center gap-1">
        <CheckCircle className="w-3.5 h-3.5" /> 100% free · No account required · Results in seconds
      </p>
    </div>
  );
}
