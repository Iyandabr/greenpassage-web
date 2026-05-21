export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: { name: string; avatar: string; role: string };
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  image: string;
};

export const CATEGORIES = ["All", "Visa News", "Scholarships", "Success Stories", "Work Abroad", "Tips & Guides", "Lottery Updates"];

export const POSTS: Post[] = [
  {
    id: 1, slug: "dv-lottery-2027-registration-guide",
    title: "DV Lottery 2027: Complete Registration Guide — Opens October 2026",
    excerpt: "Everything you need to know about entering the US Diversity Visa Lottery 2027, including photo requirements, eligible countries, and how to avoid scams.",
    content: `The US Diversity Visa (DV) Lottery for 2027 opens on **October 2, 2026** and closes on **November 5, 2026**. Here's your complete guide.\n\n## Who Is Eligible?\nMost African, Asian, and European nationals qualify. Countries with high immigration to the US in the past 5 years are excluded — currently this includes: Bangladesh, Brazil, Canada, China, Colombia, Dominican Republic, El Salvador, Guatemala, Haiti, Honduras, India, Jamaica, Mexico, Nigeria, Pakistan, Philippines, South Korea, United Kingdom, Vietnam.\n\n## Step-by-Step Registration\n1. Go to **dvlottery.state.gov** — this is the ONLY official site\n2. Complete the online form (it's completely FREE)\n3. Upload a qualifying photo (strict requirements apply)\n4. Save your confirmation number\n\n## Photo Requirements\nThis is the most common reason for disqualification:\n- Recent photo (taken within 6 months)\n- White or off-white background\n- Face must take up 50–69% of the frame\n- No glasses, hats, or uniforms\n- High resolution: at least 600x600 pixels\n\n## Check Your Results\nResults are published in **May 2027** at dvlottery.state.gov. You will NOT receive an email. Only check the official government site.\n\n## Warning: Avoid Scams\nHundreds of fake websites charge fees to "enter" you in the lottery. The real process is completely free. Only use dvlottery.state.gov.`,
    category: "Lottery Updates", author: { name: "James Adeyemi", avatar: "JA", role: "Immigration Analyst" },
    publishedAt: "May 15, 2026", readTime: "6 min read", featured: true, image: "🇺🇸",
    tags: ["DV Lottery", "USA", "Green Card", "Immigration"],
  },
  {
    id: 2, slug: "canada-express-entry-may-2026-draw",
    title: "Canada Express Entry May Draw: 505 Points Invited — What It Means for You",
    excerpt: "Canada's latest Express Entry draw invited candidates with a CRS score of 505. Here's how to improve your score before the next round.",
    content: `Canada held its latest Express Entry draw on **May 12, 2026**, inviting **4,300 candidates** with a minimum CRS score of **505**.\n\n## What Happened?\nThis was an all-programs draw, meaning candidates from all three Federal immigration programs (FSW, FST, and CEC) were eligible.\n\n## Score Breakdown\n- Minimum score: 505\n- Total invitations: 4,300\n- Tie-breaking date: May 12, 2026 at 09:32:55 UTC\n\n## How to Boost Your Score\nIf your score is below 505, here are the most effective ways to increase it:\n\n**1. Improve your English (biggest gains)**\n- Getting CLB 9 instead of CLB 8 adds up to 32 points\n- Getting CLB 10+ adds additional points\n\n**2. Provincial Nomination (+600 points)**\n- A nomination from any Canadian province adds 600 CRS points\n- This almost guarantees an invitation\n\n**3. Get a valid job offer**\n- NOC TEER 1 job offer: +200 points\n- NOC TEER 2-3 job offer: +50 points\n\n**4. Add your spouse's language scores**\n- If your spouse has strong English, adding them can increase your score\n\n## Next Draw Expected\nCanada typically holds draws every 2 weeks. The next draw is expected around **May 26, 2026**.`,
    category: "Visa News", author: { name: "Sarah Okonkwo", avatar: "SO", role: "Senior Editor" },
    publishedAt: "May 13, 2026", readTime: "5 min read", featured: true, image: "🇨🇦",
    tags: ["Canada", "Express Entry", "CRS Score", "PR"],
  },
  {
    id: 3, slug: "from-nigeria-to-germany-scholarship-story",
    title: "From Lagos to Berlin: How I Got a Fully Funded DAAD Scholarship",
    excerpt: "Chisom shares her journey from finishing her engineering degree in Nigeria to landing a fully funded Masters scholarship in Germany.",
    content: `My name is Chisom Eze. Three years ago I was sitting in Lagos wondering how I'd ever afford to study abroad. Today I'm completing my Masters in Mechanical Engineering at TU Berlin — fully funded.\n\n## My Background\nI graduated from the University of Lagos with a 4.2 GPA in Mechanical Engineering. I had 2 years of work experience at an oil & gas company and an IELTS score of 7.0.\n\n## Why DAAD?\nThe DAAD scholarship covers everything:\n- University tuition fees\n- Monthly stipend of €1,200\n- Health insurance\n- Travel allowance\n- Language course before starting\n\n## The Application Process\nHere's exactly what I did:\n\n**Step 1: Research (3 months before deadline)**\nI found my programme on the DAAD database and read the requirements carefully.\n\n**Step 2: Statement of Purpose (2 months before)**\nThis is the most important document. I spent 3 weeks writing and rewriting it. The key: make it specific to Germany and explain why your research can't be done elsewhere.\n\n**Step 3: Reference Letters**\nI asked my thesis supervisor and my manager at work. I gave them a detailed brief of what DAAD looks for.\n\n**Step 4: Submit**\nI submitted 2 weeks before the deadline. Don't leave it to the last minute.\n\n## 3 Months Later\nI got the email. I cried. Then I booked my flight.`,
    category: "Success Stories", author: { name: "Chisom Eze", avatar: "CE", role: "Community Member" },
    publishedAt: "May 10, 2026", readTime: "8 min read", featured: false, image: "🇩🇪",
    tags: ["Germany", "DAAD", "Scholarship", "Nigeria", "Success Story"],
  },
  {
    id: 4, slug: "uk-skilled-worker-visa-changes-2026",
    title: "UK Skilled Worker Visa: Key Changes in 2026 You Need to Know",
    excerpt: "The UK government updated salary thresholds and shortage occupation rules. Here's what changed and whether it affects your application.",
    content: `The UK Home Office announced several changes to the Skilled Worker Visa route effective **April 2026**. If you're planning to apply, here's what you need to know.\n\n## Salary Threshold Update\nThe minimum salary for most Skilled Worker Visa roles has been updated:\n- General minimum: £26,200 per year (up from £25,600)\n- New entrant rate: £20,960 per year\n- Healthcare roles: maintain lower rates\n\n## Shortage Occupation List Changes\nThe shortage occupation list has been reformed. Key occupations currently included:\n- Registered nurses\n- Care workers\n- Software engineers (certain specialisms)\n- Civil and structural engineers\n- Secondary school teachers\n\n## Health and Care Worker Visa\nThe Health and Care Worker Visa remains one of the most accessible routes:\n- Reduced application fee: £232\n- No need to pay the Immigration Health Surcharge\n- Processing time: typically 3 weeks\n\n## Tips for Your Application\n1. Get your Certificate of Sponsorship (CoS) from your employer first\n2. Apply no earlier than 3 months before your start date\n3. Ensure your NMC registration is complete before applying (nurses)\n4. Book your biometrics appointment as soon as you apply`,
    category: "Visa News", author: { name: "James Adeyemi", avatar: "JA", role: "Immigration Analyst" },
    publishedAt: "May 7, 2026", readTime: "4 min read", featured: false, image: "🇬🇧",
    tags: ["UK", "Skilled Worker Visa", "NHS", "Immigration"],
  },
  {
    id: 5, slug: "best-countries-nurses-2026",
    title: "The 5 Best Countries for Nurses to Migrate to in 2026",
    excerpt: "Global demand for nurses has never been higher. We rank the top countries for nursing migration based on salary, pathway speed, and quality of life.",
    content: `Nurses are among the most in-demand professionals globally. Here are the top 5 destinations for nursing migration in 2026.\n\n## 1. 🇬🇧 United Kingdom\n**Average salary:** £28,000–£40,000 (NHS Band 5–7)\n**Pathway:** Health and Care Worker Visa\n**Processing:** 3–6 weeks\n**Key requirement:** NMC registration (requires OSCE exam for most international nurses)\n\nThe NHS is actively recruiting internationally. The reduced visa fee (£232) and exemption from the Immigration Health Surcharge make this the most accessible route.\n\n## 2. 🇦🇺 Australia\n**Average salary:** AUD $75,000–$100,000\n**Pathway:** SkillSelect Subclass 190 or employer sponsorship\n**Processing:** 3–8 months\n**Key requirement:** AHPRA registration, IELTS 7.0+\n\n## 3. 🇨🇦 Canada\n**Average salary:** CAD $70,000–$90,000\n**Pathway:** Express Entry (healthcare category draws), Provincial Nominee Programs\n**Processing:** 6–12 months\n**Key requirement:** NCLEX-RN exam, provincial registration\n\n## 4. 🇩🇪 Germany\n**Average salary:** €35,000–€48,000\n**Pathway:** Skilled Worker Visa with recognition of nursing qualification\n**Processing:** 3–6 months\n**Key requirement:** German B2 language certificate (mandatory for nursing)\n\n## 5. 🇸🇦 Saudi Arabia / 🇦🇪 UAE\n**Average salary:** $40,000–$70,000 (tax-free)\n**Pathway:** Work permit (employer-sponsored)\n**Processing:** 2–6 weeks\n**Key requirement:** Dataflow verification, professional license`,
    category: "Work Abroad", author: { name: "Dr. Amina Hassan", avatar: "AH", role: "Healthcare Migration Specialist" },
    publishedAt: "May 3, 2026", readTime: "7 min read", featured: true, image: "🏥",
    tags: ["Nursing", "Healthcare", "UK", "Australia", "Canada", "Work Abroad"],
  },
  {
    id: 6, slug: "ielts-vs-pte-which-is-better",
    title: "IELTS vs PTE Academic: Which Is Better for Immigration in 2026?",
    excerpt: "Both IELTS and PTE Academic are accepted by most immigration authorities. But which one gives you a better chance of hitting the required score?",
    content: `If you're applying for a visa to Canada, UK, Australia, or most other English-speaking countries, you'll need an English language test. The two most popular options are IELTS and PTE Academic.\n\n## Key Differences\n\n**IELTS (International English Language Testing System)**\n- Scored 0–9 (band scores)\n- Available in Academic and General Training formats\n- Writing and speaking marked by human examiners\n- Results in 3–5 days\n- Widely recognised worldwide\n\n**PTE Academic (Pearson Test of English)**\n- Scored 10–90 (numerical scores)\n- Computer-marked — no human examiner bias\n- Results typically in 2 business days\n- Accepted by all major immigration authorities\n\n## Which Should You Choose?\n\n**Choose IELTS if:**\n- You're a strong speaker and want a human to assess you\n- You're applying to UK Skilled Worker Visa (IELTS UKVI required)\n- You prefer traditional paper-based testing\n\n**Choose PTE if:**\n- You tend to have exam anxiety\n- You want faster results\n- You're applying to Canada or Australia and need quick turnaround\n- Your written English is strong (computer marking can be more generous on writing)\n\n## Score Equivalence\n| Requirement | IELTS | PTE |\n|---|---|---|\n| CLB 7 (Canada) | 6.0 | 50 |\n| CLB 9 (Canada) | 7.5 | 65 |\n| CEFR B1 (UK) | 4.0 | 30 |\n| CEFR B2 | 5.5 | 43 |`,
    category: "Tips & Guides", author: { name: "Sarah Okonkwo", avatar: "SO", role: "Senior Editor" },
    publishedAt: "Apr 28, 2026", readTime: "6 min read", featured: false, image: "📝",
    tags: ["IELTS", "PTE", "English Test", "Canada", "UK", "Australia"],
  },
];

export function getPost(slug: string): Post | null {
  return POSTS.find(p => p.slug === slug) ?? null;
}

export function getFeaturedPosts(): Post[] {
  return POSTS.filter(p => p.featured);
}
