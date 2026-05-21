"use client";
import { useState } from "react";
import { Globe, Bell, Shield, Palette, Save, Check } from "lucide-react";

type Tab = "general" | "notifications" | "security" | "appearance";

export default function AdminSettingsPage() {
  const [tab, setTab] = useState<Tab>("general");
  const [saved, setSaved] = useState(false);

  // General
  const [siteName, setSiteName] = useState("GreenPassage");
  const [siteTagline, setSiteTagline] = useState("Your gateway to global opportunities");
  const [siteUrl, setSiteUrl] = useState("https://greenpassage.app");
  const [contactEmail, setContactEmail] = useState("hello@greenpassage.app");
  const [supportEmail, setSupportEmail] = useState("support@greenpassage.app");
  const [timezone, setTimezone] = useState("Africa/Lagos");
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  // Notifications
  const [emailNewUser, setEmailNewUser] = useState(true);
  const [emailNewPost, setEmailNewPost] = useState(true);
  const [emailJobApp, setEmailJobApp] = useState(false);
  const [digestFrequency, setDigestFrequency] = useState("weekly");

  // Security
  const [twoFactor, setTwoFactor] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState("24h");
  const [loginAttempts, setLoginAttempts] = useState("5");

  // Appearance
  const [primaryColor, setPrimaryColor] = useState("#00D4FF");
  const [postsPerPage, setPostsPerPage] = useState("10");
  const [showFeatured, setShowFeatured] = useState(true);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const TABS: { key: Tab; icon: typeof Globe; label: string }[] = [
    { key: "general",       icon: Globe,    label: "General" },
    { key: "notifications", icon: Bell,     label: "Notifications" },
    { key: "security",      icon: Shield,   label: "Security" },
    { key: "appearance",    icon: Palette,  label: "Appearance" },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-white">Settings</h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Manage your site configuration</p>
        </div>
        <button onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
          style={{ background: saved ? "rgba(34,197,94,0.15)" : "#00D4FF", color: saved ? "#22C55E" : "#07111D", border: saved ? "1px solid rgba(34,197,94,0.3)" : "none" }}>
          {saved ? <><Check className="w-4 h-4" /> Saved</> : <><Save className="w-4 h-4" /> Save Changes</>}
        </button>
      </div>

      <div className="grid lg:grid-cols-[200px_1fr] gap-6">
        {/* Sidebar tabs */}
        <div className="glass rounded-2xl p-2 h-fit">
          {TABS.map(t => {
            const Icon = t.icon;
            return (
              <button key={t.key} onClick={() => setTab(t.key)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: tab === t.key ? "rgba(0,212,255,0.1)" : "transparent",
                  color: tab === t.key ? "#00D4FF" : "rgba(255,255,255,0.45)",
                  border: tab === t.key ? "1px solid rgba(0,212,255,0.2)" : "1px solid transparent",
                }}>
                <Icon className="w-4 h-4" /> {t.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-6">
          {tab === "general" && (
            <div className="space-y-6">
              <h2 className="font-black text-white text-base">General Settings</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Site Name",     val: siteName,     set: setSiteName },
                  { label: "Site Tagline",  val: siteTagline,  set: setSiteTagline },
                  { label: "Site URL",      val: siteUrl,      set: setSiteUrl },
                  { label: "Contact Email", val: contactEmail, set: setContactEmail },
                  { label: "Support Email", val: supportEmail, set: setSupportEmail },
                ].map(f => (
                  <div key={f.label}>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>{f.label}</label>
                    <input value={f.val} onChange={e => f.set(e.target.value)}
                      className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }} />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>Timezone</label>
                  <select value={timezone} onChange={e => setTimezone(e.target.value)}
                    className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
                    {["Africa/Lagos", "Europe/London", "America/Toronto", "Europe/Berlin", "Australia/Sydney"].map(tz => (
                      <option key={tz} style={{ background: "#0C1A28" }}>{tz}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <Toggle label="Maintenance Mode" description="Temporarily take the site offline for visitors" value={maintenanceMode} onChange={setMaintenanceMode} danger />
              </div>
            </div>
          )}

          {tab === "notifications" && (
            <div className="space-y-6">
              <h2 className="font-black text-white text-base">Notification Preferences</h2>
              <div className="space-y-4">
                <Toggle label="New user registration"   description="Email when a new user signs up"            value={emailNewUser}   onChange={setEmailNewUser} />
                <Toggle label="New post submitted"      description="Email when an author submits a post"        value={emailNewPost}   onChange={setEmailNewPost} />
                <Toggle label="Job application received" description="Email when someone applies for a job"      value={emailJobApp}    onChange={setEmailJobApp} />
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px" }}>
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>Digest frequency</label>
                <div className="flex gap-2">
                  {["daily", "weekly", "never"].map(f => (
                    <button key={f} onClick={() => setDigestFrequency(f)}
                      className="px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all"
                      style={{
                        background: digestFrequency === f ? "rgba(0,212,255,0.15)" : "rgba(255,255,255,0.04)",
                        color: digestFrequency === f ? "#00D4FF" : "rgba(255,255,255,0.5)",
                        border: `1px solid ${digestFrequency === f ? "rgba(0,212,255,0.25)" : "rgba(255,255,255,0.06)"}`,
                      }}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "security" && (
            <div className="space-y-6">
              <h2 className="font-black text-white text-base">Security Settings</h2>
              <Toggle label="Two-Factor Authentication" description="Require 2FA for all admin accounts" value={twoFactor} onChange={setTwoFactor} />
              <div className="grid sm:grid-cols-2 gap-4 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>Session timeout</label>
                  <select value={sessionTimeout} onChange={e => setSessionTimeout(e.target.value)}
                    className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
                    {["1h", "4h", "8h", "24h", "7d"].map(t => (
                      <option key={t} style={{ background: "#0C1A28" }}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>Max login attempts</label>
                  <select value={loginAttempts} onChange={e => setLoginAttempts(e.target.value)}
                    className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
                    {["3", "5", "10"].map(n => (
                      <option key={n} style={{ background: "#0C1A28" }}>{n} attempts</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="rounded-xl p-4" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
                <p className="text-sm font-bold" style={{ color: "#EF4444" }}>Danger Zone</p>
                <p className="text-xs mt-1 mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>These actions cannot be undone.</p>
                <button className="px-4 py-2 rounded-xl text-xs font-bold transition-all"
                  style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.2)" }}>
                  Reset all sessions
                </button>
              </div>
            </div>
          )}

          {tab === "appearance" && (
            <div className="space-y-6">
              <h2 className="font-black text-white text-base">Appearance</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>Primary color</label>
                  <div className="flex items-center gap-3">
                    <input type="color" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)}
                      className="w-10 h-10 rounded-xl cursor-pointer border-none outline-none"
                      style={{ background: "none", padding: 0 }} />
                    <input value={primaryColor} onChange={e => setPrimaryColor(e.target.value)}
                      className="flex-1 rounded-xl px-3 py-2.5 text-sm outline-none font-mono"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }} />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>Posts per page</label>
                  <select value={postsPerPage} onChange={e => setPostsPerPage(e.target.value)}
                    className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
                    {["6", "10", "12", "20"].map(n => (
                      <option key={n} style={{ background: "#0C1A28" }}>{n} per page</option>
                    ))}
                  </select>
                </div>
              </div>
              <Toggle label="Show featured posts section" description="Display the featured strip on the blog homepage" value={showFeatured} onChange={setShowFeatured} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Toggle({ label, description, value, onChange, danger = false }: {
  label: string; description: string; value: boolean;
  onChange: (v: boolean) => void; danger?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div>
        <p className="text-sm font-semibold" style={{ color: danger && value ? "#EF4444" : "rgba(255,255,255,0.8)" }}>{label}</p>
        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{description}</p>
      </div>
      <button onClick={() => onChange(!value)} className="relative shrink-0">
        <div className="w-11 h-6 rounded-full transition-colors"
          style={{ background: value ? (danger ? "#EF4444" : "#00D4FF") : "rgba(255,255,255,0.1)" }}>
          <div className="w-4 h-4 rounded-full bg-white absolute top-1 transition-all"
            style={{ left: value ? "24px" : "4px" }} />
        </div>
      </button>
    </div>
  );
}
