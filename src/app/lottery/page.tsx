import { Ticket, AlertCircle, Calendar, Users, Globe, ArrowRight, CheckCircle, ExternalLink, Clock } from "lucide-react";

const lotteries = [
  {
    id: 1,
    name: "US Diversity Visa (DV) Lottery 2027",
    flag: "🇺🇸",
    country: "United States",
    status: "open",
    opens: "October 2, 2026",
    closes: "November 5, 2026",
    results: "May 2027",
    slots: "55,000",
    eligible: "Africa, Asia, Europe (most countries)",
    odds: "~1 in 40 (varies by region)",
    description: "The US Green Card Lottery gives 55,000 permanent resident visas to people from countries with historically low immigration to the USA.",
    steps: [
      "Check your country is eligible (most African, Asian, and European countries are)",
      "Prepare a recent passport photo (strict requirements apply)",
      "Complete the online form at dvlottery.state.gov — it's free",
      "Save your confirmation number — you'll need it to check results",
      "Check results in May 2027 at dvlottery.state.gov",
    ],
  },
  {
    id: 2,
    name: "Canada Express Entry Draw",
    flag: "🇨🇦",
    country: "Canada",
    status: "ongoing",
    opens: "Ongoing (draws every 2 weeks)",
    closes: "N/A — create a profile anytime",
    results: "Within 6 months of invite",
    slots: "~110,000/year",
    eligible: "All countries",
    odds: "Depends on CRS score (typically 470–520+)",
    description: "Canada's points-based immigration system invites the highest-scoring candidates from a pool to apply for permanent residence every two weeks.",
    steps: [
      "Create an Express Entry profile at IRCC.canada.ca",
      "Get your Educational Credential Assessment (ECA) done",
      "Take an English/French language test (IELTS, CELPIP, or TEF)",
      "Enter the pool and wait for an Invitation to Apply (ITA)",
      "Submit your full PR application within 60 days of ITA",
    ],
  },
  {
    id: 3,
    name: "UK Innovator Founder Visa",
    flag: "🇬🇧",
    country: "United Kingdom",
    status: "open",
    opens: "Available now",
    closes: "Rolling basis",
    results: "3–6 months decision",
    slots: "Unlimited",
    eligible: "All countries",
    odds: "Depends on business plan quality",
    description: "For founders with innovative, viable, and scalable business ideas. Requires endorsement from an approved UK body.",
    steps: [
      "Develop a genuine, innovative business idea",
      "Apply for endorsement from a UK approved endorsing body",
      "Once endorsed, apply for the visa online",
      "Show you have at least £50,000 in investment funds",
      "Land in the UK and begin your business",
    ],
  },
  {
    id: 4,
    name: "Australia SkillSelect EOI",
    flag: "🇦🇺",
    country: "Australia",
    status: "ongoing",
    opens: "Submit Expression of Interest anytime",
    closes: "N/A",
    results: "Invitation rounds every 1–2 months",
    slots: "~195,000/year",
    eligible: "All countries (occupation list applies)",
    odds: "Depends on points score (typically 85–90+ for 189)",
    description: "Australia's SkillSelect system issues invitations to skilled migrants based on a points test. Subclass 189 is the independent skilled visa with no state sponsorship required.",
    steps: [
      "Check your occupation is on Australia's Medium and Long-term Strategic Skills List",
      "Get your skills assessed by the relevant Australian authority",
      "Complete an IELTS or PTE Academic English test",
      "Submit an Expression of Interest (EOI) through SkillSelect",
      "Wait for an invitation, then apply for the visa within 60 days",
    ],
  },
];

const upcomingAlerts = [
  { event: "DV Lottery 2027 Opens", date: "Oct 2, 2026", urgent: true },
  { event: "Chevening Scholarship Deadline", date: "Nov 7, 2026", urgent: false },
  { event: "Canada Express Entry Draw", date: "Expected Jun 4, 2026", urgent: false },
  { event: "DAAD Scholarship Deadline", date: "Nov 15, 2026", urgent: false },
];

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    open: { label: "● Open Now", cls: "bg-green-500/15 text-green-400" },
    ongoing: { label: "● Ongoing", cls: "bg-teal-500/15 text-teal-400" },
    closed: { label: "● Closed", cls: "bg-red-500/15 text-red-400" },
  };
  const s = map[status] ?? map.open;
  return <span className={`px-3 py-1 rounded-full text-xs font-bold ${s.cls}`}>{s.label}</span>;
}

export default function LotteryPage() {
  return (
    <div className="min-h-screen px-4 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm mb-6">
          <Ticket className="w-3.5 h-3.5" />
          Visa Lottery & Draw Tracker
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Visa Lotteries & Draws</h1>
        <p className="text-teal-100/60 text-lg max-w-xl mx-auto">Track every active visa lottery and immigration draw worldwide. Never miss an opening date.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main lotteries */}
        <div className="lg:col-span-2 space-y-6">
          {lotteries.map(l => (
            <div key={l.id} className="card-glass rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{l.flag}</span>
                    <div>
                      <h2 className="text-lg font-bold text-white leading-tight">{l.name}</h2>
                      <p className="text-teal-400 text-sm">{l.country}</p>
                    </div>
                  </div>
                  <StatusBadge status={l.status} />
                </div>
                <p className="text-teal-100/60 text-sm leading-relaxed mb-5">{l.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { icon: Calendar, label: "Opens", val: l.opens },
                    { icon: Clock, label: "Closes", val: l.closes },
                    { icon: Users, label: "Annual Slots", val: l.slots },
                    { icon: Globe, label: "Eligible", val: l.eligible },
                  ].map(item => (
                    <div key={item.label} className="bg-navy-800/60 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <item.icon className="w-3.5 h-3.5 text-teal-400" />
                        <span className="text-xs text-teal-100/50 font-medium uppercase tracking-wide">{item.label}</span>
                      </div>
                      <p className="text-sm text-white font-medium">{item.val}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-5">
                  <h3 className="text-sm font-semibold text-teal-300 mb-3">How to Apply — Step by Step</h3>
                  <div className="space-y-2">
                    {l.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-teal-400 text-xs font-bold">{i + 1}</span>
                        </div>
                        <p className="text-sm text-teal-100/70">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold text-sm transition-all">
                    Full Guide <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-1.5 py-2.5 px-4 rounded-xl border border-teal-500/30 text-teal-300 text-sm hover:bg-teal-500/5 transition-all">
                    Official Site <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Alert banner */}
          <div className="card-glass rounded-2xl p-5 border-teal-500/30">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-4 h-4 text-gold" />
              <h3 className="font-bold text-white text-sm">Upcoming Deadlines</h3>
            </div>
            <div className="space-y-3">
              {upcomingAlerts.map((a, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${a.urgent ? "bg-gold/10 border border-gold/20" : "bg-navy-800/50"}`}>
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${a.urgent ? "bg-gold animate-pulse" : "bg-teal-400"}`} />
                  <div>
                    <p className="text-sm font-medium text-white">{a.event}</p>
                    <p className="text-xs text-teal-100/50">{a.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2.5 rounded-xl border border-teal-500/30 text-teal-300 text-sm font-semibold hover:bg-teal-500/5 transition-all">
              Set All Alerts
            </button>
          </div>

          {/* DV lottery tip */}
          <div className="card-glass rounded-2xl p-5">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-teal-400" /> DV Lottery Tips
            </h3>
            <ul className="space-y-2">
              {[
                "The application is completely free — avoid paid sites",
                "Only one entry per person — duplicates are disqualified",
                "Use an official, recent photo following the exact specs",
                "Save your confirmation number — you cannot recover it",
                "Results are only announced at dvlottery.state.gov",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-teal-100/70">
                  <span className="text-teal-400 mt-0.5">→</span> {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-5 bg-gradient-to-br from-teal-500/20 to-navy-800 border border-teal-500/20 text-center">
            <Ticket className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <h3 className="font-bold text-white mb-2">Get Lottery Alerts</h3>
            <p className="text-xs text-teal-100/60 mb-4">We'll notify you the moment any lottery that matches your profile opens for registration.</p>
            <button className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-900 font-bold text-sm transition-all">
              Enable Alerts — Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
