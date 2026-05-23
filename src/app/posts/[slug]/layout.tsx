import type { Metadata } from "next";
import { getPost } from "@/lib/posts-data";

const SITE_URL = "https://greenpassage-web.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Article | GreenPassage" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [...post.tags, "immigration news", "visa guide", "greenpassage"],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${SITE_URL}/posts/${slug}`,
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: { canonical: `${SITE_URL}/posts/${slug}` },
  };
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
