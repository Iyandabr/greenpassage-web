import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fully Funded Scholarships 2026–2027 — International Students",
  description: "Find fully funded scholarships for international students. Chevening, DAAD, Fulbright, Commonwealth, Erasmus Mundus and 50,000+ awards. AI-matched to your profile. Apply for free.",
  keywords: [
    "fully funded scholarships 2026", "international scholarships 2027", "chevening scholarship",
    "daad scholarship germany", "fulbright scholarship usa", "commonwealth scholarship",
    "erasmus mundus scholarship", "scholarship for african students", "study abroad scholarship",
    "masters scholarship fully funded", "phd scholarship international",
  ],
  openGraph: {
    title: "Fully Funded Scholarships 2026–2027 | GreenPassage",
    description: "50,000+ scholarships for international students. Chevening, DAAD, Fulbright, Commonwealth and more. AI-matched to your profile.",
    url: "https://greenpassage-web.vercel.app/scholarships",
  },
  alternates: { canonical: "https://greenpassage-web.vercel.app/scholarships" },
};

export default function ScholarshipsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
