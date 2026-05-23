import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DV Lottery 2027 Registration & Visa Lottery Guide — Canada, USA, UK",
  description: "DV Lottery 2027 opens October 2026. Free to register. 55,000 US green cards available. Plus Canada Express Entry draws, UK Shortage Occupation List, and Australia SkillSelect invitations.",
  keywords: [
    "dv lottery 2027", "diversity visa lottery registration", "us green card lottery 2027",
    "canada express entry draw", "visa lottery free apply", "green card lottery eligible countries",
    "dv lottery results 2027", "canada pr lottery", "us green card sponsorship",
    "how to win dv lottery", "dv lottery 2027 registration",
  ],
  openGraph: {
    title: "DV Lottery 2027 & Visa Lotteries Guide | GreenPassage",
    description: "Register for DV Lottery 2027 — 55,000 US green cards. Free to apply. Plus Canada Express Entry draws and Australia invitations.",
    url: "https://greenpassage-web.vercel.app/lottery",
  },
  alternates: { canonical: "https://greenpassage-web.vercel.app/lottery" },
};

export default function LotteryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
