import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Sponsorship Jobs 2026 — Work Abroad With Employer Sponsorship",
  description: "Browse 10,000+ jobs offering visa sponsorship in Canada, UK, Germany, Australia, UAE and 50+ countries. Filter by field, salary, and visa type. Get matched to roles that sponsor your work permit.",
  keywords: [
    "visa sponsorship jobs 2026", "employer sponsored visa jobs", "uk skilled worker visa jobs",
    "canada work permit jobs", "germany eu blue card jobs", "australia 482 visa jobs",
    "work abroad visa sponsored", "h1b sponsorship jobs", "jobs with work permit sponsorship",
  ],
  openGraph: {
    title: "Visa Sponsorship Jobs 2026 | GreenPassage",
    description: "10,000+ jobs with work visa sponsorship in Canada, UK, Germany, Australia & more. Filter by country, field, and salary.",
    url: "https://greenpassage-web.vercel.app/jobs",
  },
  alternates: { canonical: "https://greenpassage-web.vercel.app/jobs" },
};

export default function JobsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
