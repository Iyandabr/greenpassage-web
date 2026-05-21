export type CountryData = {
  name: string;
  flag: string;
  slug: string;
  tagline: string;
  color: string;
  heroLine: string;
  overview: string;
  officialLinks: { label: string; url: string; description: string }[];
  visaTypes: { name: string; for: string; processing: string; cost: string; difficulty: "Easy" | "Medium" | "Hard" }[];
  salaries: { role: string; avg: string }[];
  requirements: string[];
  funFacts: string[];
  costOfLiving: { city: string; rent: string; food: string; transport: string }[];
};

const COUNTRIES: Record<string, CountryData> = {
  canada: {
    name: "Canada", flag: "🇨🇦", slug: "canada", color: "#EF4444",
    tagline: "Express Entry · PNP · Study Permit",
    heroLine: "400,000 new immigrants welcomed every year.",
    overview: "Canada is one of the most migration-friendly countries in the world. With multiple pathways — from the points-based Express Entry system to Provincial Nominee Programs — skilled workers, students, and families from all over the world can find a clear route to permanent residency.",
    officialLinks: [
      { label: "IRCC — Immigration Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship.html", description: "Official government immigration portal — apply for visas, check status, find forms" },
      { label: "Express Entry Pool", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html", description: "Create your Express Entry profile and join the pool for skilled worker immigration" },
      { label: "Canada Job Bank", url: "https://www.jobbank.gc.ca", description: "Official government job listings — many employers are LMIA-approved for foreign workers" },
      { label: "IELTS for Canada", url: "https://www.ielts.org", description: "Book your English language test — required for most immigration pathways" },
    ],
    visaTypes: [
      { name: "Express Entry (Federal Skilled Worker)", for: "Skilled workers with degree + experience", processing: "6 months", cost: "CAD $1,325", difficulty: "Medium" },
      { name: "Provincial Nominee Program (PNP)", for: "Workers targeting specific provinces", processing: "12–18 months", cost: "CAD $1,325 + provincial fee", difficulty: "Medium" },
      { name: "Student Permit", for: "Accepted to a Canadian institution", processing: "8 weeks", cost: "CAD $150", difficulty: "Easy" },
      { name: "Working Holiday (IEC)", for: "Ages 18–35 from eligible countries", processing: "2–6 weeks", cost: "CAD $156", difficulty: "Easy" },
      { name: "Family Sponsorship", for: "Spouses, children of Canadian PR/citizens", processing: "12 months", cost: "CAD $1,050", difficulty: "Medium" },
    ],
    salaries: [
      { role: "Software Engineer",     avg: "CAD $95,000–$130,000" },
      { role: "Nurse / RN",            avg: "CAD $70,000–$90,000" },
      { role: "Civil Engineer",        avg: "CAD $70,000–$95,000" },
      { role: "Accountant",            avg: "CAD $60,000–$80,000" },
      { role: "Electrician / Trades",  avg: "CAD $65,000–$85,000" },
    ],
    requirements: [
      "Language test: IELTS, CELPIP (English) or TEF (French) — CLB 7+ recommended",
      "Educational Credential Assessment (ECA) from WES for foreign degrees",
      "Minimum 1 year skilled work experience in the last 10 years (Express Entry)",
      "Police clearance certificate from your home country",
      "Medical exam from an approved panel physician",
      "Proof of settlement funds (varies by family size — ~CAD $13,000 for 1 person)",
    ],
    funFacts: [
      "Canada has 3 official immigration levels: Federal, Provincial, and Quebec",
      "After 3 years as PR, you can apply for Canadian citizenship",
      "Healthcare is free for permanent residents and citizens",
      "Canada ranks #1 globally for quality of life multiple years running",
    ],
    costOfLiving: [
      { city: "Toronto",   rent: "CAD $1,800–$2,800/mo", food: "CAD $400–$600/mo", transport: "CAD $156/mo" },
      { city: "Vancouver", rent: "CAD $1,900–$3,000/mo", food: "CAD $400–$600/mo", transport: "CAD $100/mo" },
      { city: "Calgary",   rent: "CAD $1,400–$2,000/mo", food: "CAD $350–$500/mo", transport: "CAD $110/mo" },
    ],
  },

  usa: {
    name: "United States", flag: "🇺🇸", slug: "usa", color: "#3B82F6",
    tagline: "DV Lottery · H-1B · EB-3 · Student Visa",
    heroLine: "55,000 Green Cards given away free every year via the DV Lottery.",
    overview: "The United States remains the world's most sought-after destination for skilled migrants, students, and those seeking a better life. With the annual DV Lottery, H-1B work visas, and employer-sponsored green cards, there are multiple pathways into the world's largest economy.",
    officialLinks: [
      { label: "USCIS — US Immigration", url: "https://www.uscis.gov", description: "US Citizenship and Immigration Services — apply for visas, green cards, and citizenship" },
      { label: "DV Lottery (Official)", url: "https://dvlottery.state.gov", description: "The ONLY official site to enter the Diversity Visa Lottery — completely FREE" },
      { label: "US Visa Information", url: "https://travel.state.gov/content/travel/en/us-visas.html", description: "State Department visa types, requirements, and appointment booking" },
      { label: "US Jobs (USAJobs)", url: "https://www.usajobs.gov", description: "Federal government jobs — some sponsor visas for international applicants" },
    ],
    visaTypes: [
      { name: "DV Lottery (Diversity Visa)", for: "Citizens of eligible countries (most of Africa, Asia, Europe)", processing: "Lottery draw — results May", cost: "Free to enter · $330 visa fee if selected", difficulty: "Easy" },
      { name: "H-1B Specialty Occupation", for: "Degree holders in speciality fields (tech, engineering, medicine)", processing: "3–6 months", cost: "$730–$4,500+", difficulty: "Hard" },
      { name: "EB-3 Employment-Based", for: "Skilled workers, professionals, unskilled workers", processing: "1–3 years", cost: "$700–$1,500", difficulty: "Hard" },
      { name: "F-1 Student Visa", for: "Accepted to SEVP-approved US school", processing: "3–5 weeks", cost: "$160 + $350 SEVIS fee", difficulty: "Medium" },
      { name: "O-1 Extraordinary Ability", for: "People with extraordinary talent/achievement", processing: "2–3 months", cost: "$460–$2,500", difficulty: "Hard" },
    ],
    salaries: [
      { role: "Software Engineer",     avg: "$110,000–$180,000" },
      { role: "Nurse / RN",            avg: "$75,000–$110,000" },
      { role: "Civil Engineer",        avg: "$80,000–$120,000" },
      { role: "Data Scientist",        avg: "$110,000–$160,000" },
      { role: "Financial Analyst",     avg: "$70,000–$110,000" },
    ],
    requirements: [
      "For DV Lottery: High school diploma or 2 years work experience in qualifying occupation",
      "For H-1B: Bachelor's degree or equivalent in the specialty occupation field",
      "Valid passport for at least 6 months beyond intended stay",
      "DS-160 online non-immigrant visa application form",
      "Visa interview at US Embassy or Consulate in your country",
      "Proof of financial support (bank statements, sponsor letter)",
    ],
    funFacts: [
      "The DV Lottery opens every October for about 30 days — it's 100% free to enter",
      "You can apply for US citizenship after 5 years as a Green Card holder (3 if married to a US citizen)",
      "Over 45 million immigrants currently live in the United States",
      "The US has the world's largest economy at over $26 trillion GDP",
    ],
    costOfLiving: [
      { city: "New York",    rent: "$2,500–$4,500/mo", food: "$500–$800/mo", transport: "$130/mo" },
      { city: "Houston",     rent: "$1,200–$2,000/mo", food: "$350–$550/mo", transport: "$80/mo" },
      { city: "Atlanta",     rent: "$1,300–$2,200/mo", food: "$350–$550/mo", transport: "$95/mo" },
    ],
  },

  uk: {
    name: "United Kingdom", flag: "🇬🇧", slug: "uk", color: "#8B5CF6",
    tagline: "Skilled Worker Visa · Student Visa · Graduate Route",
    heroLine: "Healthcare workers, engineers, and tech talent fast-tracked for visas.",
    overview: "The UK's post-Brexit immigration system opened up to global talent. The Skilled Worker Visa, Graduate Route, and Health and Care Worker Visa make it accessible for professionals worldwide. The NHS actively recruits internationally — especially nurses and doctors.",
    officialLinks: [
      { label: "UK Visas & Immigration (Gov.uk)", url: "https://www.gov.uk/browse/visas-immigration", description: "Official UK government immigration portal — apply for visas, check eligibility, find requirements" },
      { label: "Skilled Worker Visa", url: "https://www.gov.uk/skilled-worker-visa", description: "Main work visa for skilled professionals — check if your occupation qualifies" },
      { label: "NHS Jobs International", url: "https://www.jobs.nhs.uk", description: "NHS international recruitment — thousands of healthcare roles with visa sponsorship" },
      { label: "UK Graduate Route Visa", url: "https://www.gov.uk/graduate-visa", description: "2-year post-study work visa for UK university graduates" },
    ],
    visaTypes: [
      { name: "Skilled Worker Visa", for: "Workers with a job offer from a licensed UK sponsor", processing: "3–8 weeks", cost: "£719–£1,423 + IHS surcharge", difficulty: "Medium" },
      { name: "Health and Care Worker Visa", for: "Doctors, nurses, healthcare professionals", processing: "3 weeks", cost: "£232 (reduced fee)", difficulty: "Easy" },
      { name: "Student Visa", for: "Accepted to a UK university or school", processing: "3 weeks", cost: "£363", difficulty: "Easy" },
      { name: "Graduate Route", for: "Recent UK university graduates", processing: "8 weeks", cost: "£715", difficulty: "Easy" },
      { name: "Global Talent Visa", for: "Leaders in science, engineering, arts, or digital tech", processing: "3–8 weeks", cost: "£623", difficulty: "Hard" },
    ],
    salaries: [
      { role: "Nurse (Band 5)",         avg: "£27,000–£32,000" },
      { role: "Software Engineer",      avg: "£55,000–£90,000" },
      { role: "Civil Engineer",         avg: "£38,000–£65,000" },
      { role: "Accountant (ACCA)",      avg: "£40,000–£65,000" },
      { role: "Care Worker",            avg: "£22,000–£28,000" },
    ],
    requirements: [
      "Certificate of Sponsorship (CoS) from a UK licensed sponsor employer",
      "English language: IELTS B1 level minimum (or approved alternative)",
      "Salary meets minimum threshold: £26,200/year (or going rate for occupation, whichever is higher)",
      "Healthcare Immigration Surcharge (IHS): £1,035/year",
      "Valid passport and biometrics appointment",
      "For nursing: NMC registration — may require OSCE exam (Objective Structured Clinical Examination)",
    ],
    funFacts: [
      "After 5 years on a Skilled Worker Visa you can apply for Indefinite Leave to Remain (ILR)",
      "British citizenship is available after 1 year of ILR",
      "The NHS is the world's largest employer of Indian-origin workers outside India",
      "London is the most ethnically diverse city in the world",
    ],
    costOfLiving: [
      { city: "London",     rent: "£1,800–£3,500/mo", food: "£300–£500/mo", transport: "£180/mo" },
      { city: "Manchester", rent: "£900–£1,600/mo",   food: "£250–£400/mo", transport: "£90/mo" },
      { city: "Birmingham", rent: "£800–£1,400/mo",   food: "£250–£380/mo", transport: "£85/mo" },
    ],
  },

  germany: {
    name: "Germany", flag: "🇩🇪", slug: "germany", color: "#F59E0B",
    tagline: "Opportunity Card · Job Seeker Visa · EU Blue Card",
    heroLine: "Come to Germany without a job offer. Find work after you arrive.",
    overview: "Germany has one of the world's most acute skilled worker shortages. The new Opportunity Card (Chancenkarte) allows qualified professionals to come to Germany and look for a job on arrival. University is often free, and the EU Blue Card fast-tracks permanent residence.",
    officialLinks: [
      { label: "Make it in Germany (Official)", url: "https://www.make-it-in-germany.com", description: "The official German government platform for skilled worker immigration — guides, visa info, job search" },
      { label: "BAMF — Federal Migration Office", url: "https://www.bamf.de/EN", description: "Apply for residence permits, asylum, recognition of qualifications" },
      { label: "German Embassies", url: "https://www.auswaertiges-amt.de/en", description: "Find your nearest German embassy or consulate to apply for a visa" },
      { label: "German Job Market (BA)", url: "https://www.arbeitsagentur.de/en", description: "Federal Employment Agency — official job listings, employer directory" },
    ],
    visaTypes: [
      { name: "Opportunity Card (Chancenkarte)", for: "Qualified workers wanting to job-hunt in Germany", processing: "1–3 months", cost: "€75", difficulty: "Medium" },
      { name: "EU Blue Card", for: "University graduates with job offer above salary threshold", processing: "1–2 months", cost: "€100–€140", difficulty: "Medium" },
      { name: "Job Seeker Visa", for: "Finding employment before applying", processing: "1–2 months", cost: "€75", difficulty: "Medium" },
      { name: "Student Visa", for: "Enrolled at German university", processing: "6–12 weeks", cost: "€75", difficulty: "Easy" },
      { name: "Skilled Worker Visa", for: "Workers with recognised qualifications + job offer", processing: "1–3 months", cost: "€75", difficulty: "Medium" },
    ],
    salaries: [
      { role: "Software Engineer",   avg: "€55,000–€85,000" },
      { role: "Mechanical Engineer", avg: "€50,000–€72,000" },
      { role: "Nurse",               avg: "€35,000–€48,000" },
      { role: "IT Project Manager",  avg: "€60,000–€90,000" },
      { role: "Electrician",         avg: "€38,000–€55,000" },
    ],
    requirements: [
      "Recognised foreign qualification (or German equivalent assessment via anabin database)",
      "German B1 language certificate for most work visas (A2 accepted for some)",
      "For Opportunity Card: degree + 3 years relevant experience + savings for 1 year",
      "Health insurance proof (statutory or private)",
      "Proof of accommodation in Germany",
      "Blocked account (Sperrkonto) of ~€11,208 for student visa",
    ],
    funFacts: [
      "Germany needs 400,000 skilled workers per year and can't find enough locally",
      "Many German universities are completely free — even for international students",
      "After 3 years with EU Blue Card, you can apply for permanent residence",
      "Germany has the largest economy in Europe and 4th largest in the world",
    ],
    costOfLiving: [
      { city: "Berlin",   rent: "€1,100–€2,000/mo", food: "€300–€500/mo", transport: "€86/mo" },
      { city: "Munich",   rent: "€1,600–€2,800/mo", food: "€350–$550/mo", transport: "€57/mo" },
      { city: "Hamburg",  rent: "€1,200–€2,100/mo", food: "€300–€480/mo", transport: "€97/mo" },
    ],
  },

  australia: {
    name: "Australia", flag: "🇦🇺", slug: "australia", color: "#EC4899",
    tagline: "SkillSelect · Employer Sponsored · Student Visa",
    heroLine: "Australia actively recruits 195,000 skilled migrants every year.",
    overview: "Australia's points-based SkillSelect system is open to skilled workers worldwide. With strong demand in healthcare, mining, IT, and trades, and a clear pathway from work visa to permanent residency, Australia remains one of the top destinations for ambitious migrants.",
    officialLinks: [
      { label: "Home Affairs — Australia", url: "https://immi.homeaffairs.gov.au", description: "Official Australian immigration portal — apply for visas, check occupation lists" },
      { label: "SkillSelect", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect", description: "Submit your Expression of Interest for skilled migration visas" },
      { label: "AHPRA — Healthcare Registration", url: "https://www.ahpra.gov.au", description: "Register your healthcare qualification to work as a nurse or allied health professional in Australia" },
      { label: "Australian Jobs (SEEK)", url: "https://www.seek.com.au", description: "Australia's largest job board — filter by visa sponsorship availability" },
    ],
    visaTypes: [
      { name: "Skilled Independent (189)", for: "Skilled workers without state/employer sponsorship", processing: "8–14 months", cost: "AUD $4,640", difficulty: "Medium" },
      { name: "Employer Sponsored (482)", for: "Workers sponsored by an Australian employer", processing: "2–5 months", cost: "AUD $1,455–$2,770", difficulty: "Medium" },
      { name: "Skilled Nominated (190)", for: "Workers nominated by an Australian state", processing: "9–15 months", cost: "AUD $4,640", difficulty: "Medium" },
      { name: "Student Visa (500)", for: "Enrolled at an Australian institution", processing: "4 weeks", cost: "AUD $650", difficulty: "Easy" },
      { name: "Working Holiday (417/462)", for: "Ages 18–35 from eligible countries", processing: "1–2 weeks", cost: "AUD $635", difficulty: "Easy" },
    ],
    salaries: [
      { role: "Registered Nurse",    avg: "AUD $75,000–$100,000" },
      { role: "Software Engineer",   avg: "AUD $95,000–$140,000" },
      { role: "Civil Engineer",      avg: "AUD $80,000–$120,000" },
      { role: "Electrician",         avg: "AUD $85,000–$120,000" },
      { role: "Accountant",          avg: "AUD $70,000–$100,000" },
    ],
    requirements: [
      "Skills assessment by relevant Australian authority (e.g. AHPRA for nurses, Engineers Australia)",
      "English test: IELTS 6.0+ overall (7.0+ for healthcare)",
      "Minimum points score of 65 for SkillSelect (higher scores get invited sooner)",
      "Occupation must be on the Medium and Long-term Strategic Skills List (MLTSSL)",
      "Health examination from an approved Australian panel doctor",
      "Police clearance certificate",
    ],
    funFacts: [
      "Australia offers a 2-year post-study work visa after graduating from an Australian university",
      "Permanent residency can be granted immediately on arrival under the 189 visa",
      "Australia has one of the highest minimum wages in the world — AUD $23.23/hour",
      "Over 30% of Australia's population was born overseas",
    ],
    costOfLiving: [
      { city: "Sydney",    rent: "AUD $2,200–$3,500/mo", food: "AUD $500–$700/mo", transport: "AUD $205/mo" },
      { city: "Melbourne", rent: "AUD $1,800–$2,800/mo", food: "AUD $450–$650/mo", transport: "AUD $180/mo" },
      { city: "Brisbane",  rent: "AUD $1,600–$2,400/mo", food: "AUD $420–$600/mo", transport: "AUD $185/mo" },
    ],
  },
};

// Add stub entries for other slugs
const STUBS: Record<string, Partial<CountryData>> = {
  "netherlands": { name: "Netherlands", flag: "🇳🇱", color: "#F97316", slug: "netherlands", tagline: "HSMP · Startup Visa · Orientation Year" },
  "ireland":     { name: "Ireland",     flag: "🇮🇪", color: "#22C55E", slug: "ireland",     tagline: "Critical Skills Visa · General Employment" },
  "uae":         { name: "UAE",         flag: "🇦🇪", color: "#D97706", slug: "uae",         tagline: "Work Permit · Golden Visa · Freelancer Visa" },
  "singapore":   { name: "Singapore",   flag: "🇸🇬", color: "#10B981", slug: "singapore",   tagline: "Employment Pass · Tech.Pass" },
  "new-zealand": { name: "New Zealand", flag: "🇳🇿", color: "#06B6D4", slug: "new-zealand", tagline: "Skilled Migrant · Working Holiday" },
  "finland":     { name: "Finland",     flag: "🇫🇮", color: "#3B82F6", slug: "finland",     tagline: "Work Permit · EU Blue Card" },
  "sweden":      { name: "Sweden",      flag: "🇸🇪", color: "#1D4ED8", slug: "sweden",      tagline: "Work Permit · EU Blue Card" },
};

export function getCountry(slug: string): CountryData | null {
  return COUNTRIES[slug] ?? null;
}

export function getCountryStub(slug: string) {
  return STUBS[slug] ?? null;
}
