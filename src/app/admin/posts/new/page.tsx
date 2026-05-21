"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, Save, Send, Bold, Italic, List, Heading2, Link2, Image, Tag, Star } from "lucide-react";

const CATEGORIES = ["Visa News", "Scholarships", "Success Stories", "Work Abroad", "Tips & Guides", "Lottery Updates"];

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [tags, setTags] = useState("");
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [saved, setSaved] = useState(false);
  const [preview, setPreview] = useState(false);

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  const insertMarkdown = (before: string, after = "") => {
    const ta = document.getElementById("content-editor") as HTMLTextAreaElement;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = content.slice(start, end);
    const newContent = content.slice(0, start) + before + selected + after + content.slice(end);
    setContent(newContent);
    setTimeout(() => {
      ta.focus();
      ta.setSelectionRange(start + before.length, start + before.length + selected.length);
    }, 0);
  };

  const handleSave = (pub: boolean) => {
    setStatus(pub ? "published" : "draft");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const renderPreview = (text: string) => {
    return text
      .split("\n")
      .map((line, i) => {
        if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-black text-white mt-6 mb-2">{line.slice(3)}</h2>;
        if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-bold text-white mt-4 mb-1">{line.slice(4)}</h3>;
        if (line.startsWith("- ")) return <li key={i} className="ml-4 list-disc" style={{ color: "rgba(255,255,255,0.75)" }}>{line.slice(2)}</li>;
        if (/^\d+\. /.test(line)) return <li key={i} className="ml-4 list-decimal" style={{ color: "rgba(255,255,255,0.75)" }}>{line.replace(/^\d+\. /, "")}</li>;
        if (line.trim() === "") return <div key={i} className="h-3" />;
        const html = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
        return <p key={i} className="leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }} dangerouslySetInnerHTML={{ __html: html }} />;
      });
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/posts" className="p-2 rounded-xl transition-all"
            style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)" }}>
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-black text-white">New Post</h1>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
              {wordCount} words · {readTime} min read
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E" }}>
              ✓ Saved
            </span>
          )}
          <button onClick={() => setPreview(!preview)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
            style={{ background: preview ? "rgba(0,212,255,0.15)" : "rgba(255,255,255,0.05)", color: preview ? "#00D4FF" : "rgba(255,255,255,0.6)" }}>
            <Eye className="w-4 h-4" /> Preview
          </button>
          <button onClick={() => handleSave(false)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.7)" }}>
            <Save className="w-4 h-4" /> Save Draft
          </button>
          <button onClick={() => handleSave(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
            style={{ background: "#00D4FF", color: "#07111D" }}>
            <Send className="w-4 h-4" /> Publish
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_280px] gap-6">
        {/* Main editor */}
        <div className="space-y-4">
          {/* Title */}
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Post title..."
            className="w-full rounded-2xl px-5 py-4 text-xl font-black outline-none"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }}
          />

          {/* Excerpt */}
          <textarea
            value={excerpt}
            onChange={e => setExcerpt(e.target.value)}
            placeholder="Short excerpt (shown in listings and search results)..."
            rows={2}
            className="w-full rounded-2xl px-5 py-3.5 text-sm outline-none resize-none"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
          />

          {/* Toolbar */}
          <div className="glass rounded-2xl overflow-hidden">
            <div className="flex items-center gap-1 px-3 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {[
                { icon: Heading2, action: () => insertMarkdown("## "),          title: "Heading" },
                { icon: Bold,     action: () => insertMarkdown("**", "**"),      title: "Bold" },
                { icon: Italic,   action: () => insertMarkdown("*", "*"),        title: "Italic" },
                { icon: List,     action: () => insertMarkdown("\n- "),          title: "List item" },
                { icon: Link2,    action: () => insertMarkdown("[", "](url)"),   title: "Link" },
              ].map(({ icon: Icon, action, title }) => (
                <button key={title} onClick={action} title={title}
                  className="p-2 rounded-lg transition-all hover:text-white"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  <Icon className="w-4 h-4" />
                </button>
              ))}
              <div className="ml-auto text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>Markdown supported</div>
            </div>

            {preview ? (
              <div className="px-5 py-6 min-h-96 text-sm space-y-2">
                {content ? renderPreview(content) : (
                  <p style={{ color: "rgba(255,255,255,0.2)" }}>Nothing to preview yet...</p>
                )}
              </div>
            ) : (
              <textarea
                id="content-editor"
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder={"Start writing your post...\n\nTip: Use ## for headings, **bold**, *italic*, and - for bullet points"}
                className="w-full px-5 py-5 text-sm outline-none resize-none font-mono"
                style={{ background: "transparent", color: "rgba(255,255,255,0.8)", minHeight: "480px", lineHeight: "1.8" }}
              />
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Publish options */}
          <div className="glass rounded-2xl p-5 space-y-4">
            <h3 className="font-bold text-white text-sm">Publish Settings</h3>
            <div>
              <label className="text-xs font-semibold mb-2 block" style={{ color: "rgba(255,255,255,0.45)" }}>Status</label>
              <div className="flex gap-2">
                {(["draft", "published"] as const).map(s => (
                  <button key={s} onClick={() => setStatus(s)}
                    className="flex-1 py-2 rounded-xl text-xs font-bold capitalize transition-all"
                    style={{
                      background: status === s ? (s === "published" ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.08)") : "rgba(255,255,255,0.03)",
                      color: status === s ? (s === "published" ? "#22C55E" : "rgba(255,255,255,0.7)") : "rgba(255,255,255,0.35)",
                      border: `1px solid ${status === s ? (s === "published" ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.1)") : "transparent"}`,
                    }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setFeatured(!featured)}
              className="w-full flex items-center gap-2.5 p-3 rounded-xl transition-all"
              style={{
                background: featured ? "rgba(245,158,11,0.1)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${featured ? "rgba(245,158,11,0.25)" : "rgba(255,255,255,0.06)"}`,
              }}>
              <Star className="w-4 h-4" style={{ color: featured ? "#F59E0B" : "rgba(255,255,255,0.3)", fill: featured ? "#F59E0B" : "none" }} />
              <span className="text-sm font-semibold" style={{ color: featured ? "#F59E0B" : "rgba(255,255,255,0.5)" }}>
                {featured ? "Featured post" : "Mark as featured"}
              </span>
            </button>
          </div>

          {/* Category */}
          <div className="glass rounded-2xl p-5 space-y-3">
            <h3 className="font-bold text-white text-sm">Category</h3>
            <div className="space-y-1">
              {CATEGORIES.map(c => (
                <button key={c} onClick={() => setCategory(c)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all"
                  style={{
                    background: category === c ? "rgba(0,212,255,0.1)" : "transparent",
                    color: category === c ? "#00D4FF" : "rgba(255,255,255,0.5)",
                  }}>
                  {c}
                  {category === c && <div className="w-1.5 h-1.5 rounded-full bg-current" />}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="glass rounded-2xl p-5 space-y-3">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <Tag className="w-3.5 h-3.5" style={{ color: "#00D4FF" }} /> Tags
            </h3>
            <input
              value={tags}
              onChange={e => setTags(e.target.value)}
              placeholder="visa, canada, express-entry..."
              className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
            />
            {tags && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {tags.split(",").filter(Boolean).map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(0,212,255,0.08)", color: "#00D4FF" }}>
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* SEO preview */}
          {title && (
            <div className="glass rounded-2xl p-5 space-y-2">
              <h3 className="font-bold text-white text-sm">SEO Preview</h3>
              <div className="rounded-xl p-3 space-y-1" style={{ background: "rgba(255,255,255,0.03)" }}>
                <p className="text-xs" style={{ color: "#22C55E" }}>greenpassage.app › posts › {title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}</p>
                <p className="text-sm font-semibold text-white leading-tight">{title}</p>
                {excerpt && <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{excerpt.slice(0, 120)}{excerpt.length > 120 ? "..." : ""}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
