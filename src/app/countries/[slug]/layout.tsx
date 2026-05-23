import type { Metadata } from "next";
import { getCountryBySlug } from "@/lib/all-countries";

const SITE_URL = "https://greenpassage-web.vercel.app";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    return { title: "Country Guide | GreenPassage" };
  }

  const title = `${country.name} Immigration Guide 2026 — Visa, Jobs & Scholarships`;
  const description = `Complete ${country.name} immigration guide. Visa requirements, work permit pathways, scholarship opportunities, salary expectations, and step-by-step application guide for ${country.name} in 2026.`;

  return {
    title,
    description,
    keywords: [
      `${country.name.toLowerCase()} visa requirements`,
      `how to immigrate to ${country.name.toLowerCase()}`,
      `${country.name.toLowerCase()} work permit 2026`,
      `${country.name.toLowerCase()} scholarships`,
      `move to ${country.name.toLowerCase()}`,
      `${country.name.toLowerCase()} immigration guide`,
      `${country.name.toLowerCase()} skilled worker visa`,
    ],
    openGraph: {
      title: `${country.name} ${country.flag} — Visa, Jobs & Immigration Guide | GreenPassage`,
      description,
      url: `${SITE_URL}/countries/${slug}`,
    },
    alternates: { canonical: `${SITE_URL}/countries/${slug}` },
  };
}

export default function CountryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
