import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GreenPassage — AI Migration & Opportunity Platform",
  description: "Find scholarships, work visas, visa lotteries and migration pathways worldwide. Powered by AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased" style={{ background: "#0D1B2A", color: "#ffffff" }}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
