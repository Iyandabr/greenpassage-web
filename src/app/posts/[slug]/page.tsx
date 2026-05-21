"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, Share2, BookOpen } from "lucide-react";
import { getPost, POSTS } from "@/lib/posts-data";

export default function PostPage() {
  const { slug } = useParams() as { slug: string };
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-5xl mb-4">📄</p>
          <h1 className="text-2xl font-black text-white mb-3">Post not found</h1>
          <Link href="/posts" className="text-sm font-bold" style={{ color: "#00D4FF" }}>← Back to Posts</Link>
        </div>
      </div>
    );
  }

  const related = POSTS.filter(p => p.slug !== slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t)))).slice(0, 3);

  // Render markdown-lite content
  const renderContent = (text: string) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-black text-white mt-8 mb-3">{line.slice(3)}</h2>;
      if (line.startsWith("# "))  return <h1 key={i} className="text-2xl font-black text-white mt-8 mb-3">{line.slice(2)}</h1>;
      if (line.startsWith("- "))  return <li key={i} className="ml-4 text-sm mb-1.5 list-disc" style={{ color: "rgba(255,255,255,0.7)" }}>{renderInline(line.slice(2))}</li>;
      if (line.match(/^\d+\. /))  return <li key={i} className="ml-4 text-sm mb-1.5 list-decimal" style={{ color: "rgba(255,255,255,0.7)" }}>{renderInline(line.replace(/^\d+\. /, ""))}</li>;
      if (line.startsWith("|"))   return <div key={i} className="text-xs py-1.5 px-2 border-b text-white/60" style={{ borderColor: "rgba(255,255,255,0.08)" }}>{line}</div>;
      if (line === "")             return <br key={i} />;
      return <p key={i} className="text-sm mb-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{renderInline(line)}</p>;
    });
  };

  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**")
        ? <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>
        : part
    );
  };

  return (
    <div style={{ background: "#07111D" }} className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">

        <Link href="/posts" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
          style={{ color: "rgba(255,255,255,0.4)" }}>
          <ArrowLeft className="w-4 h-4" /> Back to Posts
        </Link>

        {/* Hero */}
        <div className="text-center mb-10">
          <div className="text-6xl mb-6">{post.image}</div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full mb-4 inline-block"
            style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.2)" }}>
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">{post.title}</h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{post.excerpt}</p>
        </div>

        {/* Meta */}
        <div className="glass rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm"
              style={{ background: "rgba(0,212,255,0.15)", color: "#00D4FF" }}>
              {post.author.avatar}
            </div>
            <div>
              <p className="font-bold text-white text-sm">{post.author.name}</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{post.author.role}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.publishedAt}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
          </div>
          <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
            <Share2 className="w-3.5 h-3.5" /> Share
          </button>
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-8 mb-8">
          {renderContent(post.content)}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>
              <Tag className="w-3 h-3" /> {tag}
            </span>
          ))}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="font-black text-white text-xl mb-5">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map(p => (
                <Link key={p.slug} href={`/posts/${p.slug}`}
                  className="group glass rounded-2xl p-4 transition-all hover:border-[#00D4FF]/20 block">
                  <div className="text-2xl mb-3">{p.image}</div>
                  <span className="text-xs font-bold mb-2 block" style={{ color: "#00D4FF" }}>{p.category}</span>
                  <h3 className="text-sm font-black text-white leading-snug group-hover:text-[#00D4FF] transition-colors line-clamp-2">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
