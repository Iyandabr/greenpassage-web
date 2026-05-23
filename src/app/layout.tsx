import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const SITE_URL = "https://greenpassage-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GreenPassage — Visa Sponsorship Jobs, Scholarships & Immigration Guide 2026",
    template: "%s | GreenPassage",
  },
  description:
    "Find visa-sponsored jobs, fully funded scholarships, DV Lottery registration, Canada Express Entry, UK Skilled Worker Visa, Germany Opportunity Card & more. AI-powered immigration platform trusted by 2M+ migrants worldwide.",
  keywords: [
    "visa sponsorship jobs",
    "canada express entry 2026",
    "uk skilled worker visa",
    "us green card lottery 2027",
    "germany opportunity card",
    "australia skilled migration",
    "fully funded scholarships",
    "immigration to canada",
    "work abroad visa",
    "dv lottery registration",
    "express entry points calculator",
    "uk tier 2 visa sponsorship",
    "emigrate to germany",
    "skilled worker visa uk",
    "citizenship by investment",
    "permanent residency pathways",
    "immigration consultant",
    "student visa application",
    "global talent visa",
    "high demand occupations australia",
  ],
  authors: [{ name: "GreenPassage", url: SITE_URL }],
  creator: "GreenPassage",
  publisher: "GreenPassage",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "GreenPassage",
    title: "GreenPassage — Visa Sponsorship Jobs, Scholarships & Immigration Guide 2026",
    description:
      "AI-powered immigration platform. Visa-sponsored jobs, scholarships, DV Lottery, Canada Express Entry, UK Skilled Worker Visa, Germany Opportunity Card and more.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GreenPassage — Your Gateway to Global Opportunities" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenPassage — Visa Sponsorship Jobs & Immigration Guide",
    description: "AI-powered immigration platform. Find your pathway to Canada, UK, Germany, Australia, USA and 180+ countries.",
    images: ["/og-image.png"],
    creator: "@greenpassageapp",
  },
  alternates: { canonical: SITE_URL },
  category: "immigration",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "GreenPassage",
      description: "AI-powered immigration platform for visa sponsorship jobs, scholarships, and migration pathways",
      potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/checker?q={search_term_string}` }, "query-input": "required name=search_term_string" },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "GreenPassage",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
      sameAs: ["https://twitter.com/greenpassageapp"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href={SITE_URL} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen antialiased" style={{ background: "#07111D", color: "#ffffff" }}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
