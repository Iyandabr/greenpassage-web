"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, Clock, ArrowRight, BookOpen } from "lucide-react";
import { POSTS, CATEGORIES } from "@/lib/posts-data";

export default function PostsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = POSTS.filter(p => {
    if (category !== "All" && p.category !== category) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) &&
        !p.excerpt.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const featured = POSTS.filter(p => p.featured).slice(0, 3);

  return (
    <div style={{ background: "#07111D" }} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)", color: "#00D4FF" }}>
            <BookOpen className="w-3.5 h-3.5" /> Travel & Immigration Posts
          </div>
          <h1 className="display-sm text-white mb-3">
            Stay informed.<br /><span style={{ color: "#00D4FF" }}>Stay ahead.</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: "480px", lineHeight: 1.7 }}>
            Visa news, scholarship updates, success stories, and expert guides — updated daily.
          </p>
        </div>

        {/* Featured posts */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {featured.map(post => (
            <Link key={post.slug} href={`/posts/${post.slug}`}
              className="group glass rounded-2xl overflow-hidden block transition-all hover:border-[#00D4FF]/20">
              <div className="h-24 flex items-center justify-center text-5xl"
                style={{ background: "rgba(0,212,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                {post.image}
              </div>
              <div className="p-5">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full mb-3 inline-block"
                  style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.2)" }}>
                  {post.category}
                </span>
                <h3 className="font-black text-white text-sm leading-snug mb-2 group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                      style={{ background: "rgba(0,212,255,0.15)", color: "#00D4FF" }}>
                      {post.author.avatar}
                    </div>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{post.author.name}</span>
                  </div>
                  <span className="text-xs flex items-center gap-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Search & filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#00D4FF" }} />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search posts..."
              className="w-full rounded-xl pl-10 pr-4 py-3 text-sm outline-none transition-colors"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }} />
          </div>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCategory(c)}
                className="px-3 py-2 rounded-xl text-xs font-semibold transition-all"
                style={{
                  background: category === c ? "#00D4FF" : "rgba(255,255,255,0.04)",
                  color: category === c ? "#07111D" : "rgba(255,255,255,0.5)",
                  border: category === c ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Post list */}
        <div className="space-y-4">
          {filtered.map(post => (
            <Link key={post.slug} href={`/posts/${post.slug}`}
              className="group glass rounded-2xl p-5 flex gap-5 items-start transition-all hover:border-[#00D4FF]/20 block">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl shrink-0"
                style={{ background: "rgba(0,212,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}>
                {post.image}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF" }}>
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{post.publishedAt}</span>
                </div>
                <h3 className="font-black text-white leading-snug mb-1 group-hover:text-[#00D4FF] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm line-clamp-1" style={{ color: "rgba(255,255,255,0.45)" }}>{post.excerpt}</p>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="text-xs flex items-center gap-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                  <Clock className="w-3 h-3" />{post.readTime}
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#00D4FF" }} />
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: "rgba(255,255,255,0.3)" }}>
            <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p>No posts match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
