export type CountryMeta = {
  name: string;
  flag: string;
  slug: string;
  region: string;
  subregion: string;
};

// ISO 3166-1 numeric → country meta
// Used by the world map to make every country clickable
export const ALL_COUNTRIES: Record<string, CountryMeta> = {
  "4":   { name: "Afghanistan",             flag: "🇦🇫", slug: "afghanistan",          region: "Asia",    subregion: "Southern Asia" },
  "8":   { name: "Albania",                 flag: "🇦🇱", slug: "albania",              region: "Europe",  subregion: "Southern Europe" },
  "12":  { name: "Algeria",                 flag: "🇩🇿", slug: "algeria",              region: "Africa",  subregion: "Northern Africa" },
  "24":  { name: "Angola",                  flag: "🇦🇴", slug: "angola",               region: "Africa",  subregion: "Sub-Saharan Africa" },
  "32":  { name: "Argentina",               flag: "🇦🇷", slug: "argentina",            region: "Americas",subregion: "South America" },
  "36":  { name: "Australia",               flag: "🇦🇺", slug: "australia",            region: "Oceania", subregion: "Australia & NZ" },
  "40":  { name: "Austria",                 flag: "🇦🇹", slug: "austria",              region: "Europe",  subregion: "Western Europe" },
  "50":  { name: "Bangladesh",              flag: "🇧🇩", slug: "bangladesh",           region: "Asia",    subregion: "Southern Asia" },
  "56":  { name: "Belgium",                 flag: "🇧🇪", slug: "belgium",              region: "Europe",  subregion: "Western Europe" },
  "64":  { name: "Bhutan",                  flag: "🇧🇹", slug: "bhutan",               region: "Asia",    subregion: "Southern Asia" },
  "68":  { name: "Bolivia",                 flag: "🇧🇴", slug: "bolivia",              region: "Americas",subregion: "South America" },
  "72":  { name: "Botswana",                flag: "🇧🇼", slug: "botswana",             region: "Africa",  subregion: "Sub-Saharan Africa" },
  "76":  { name: "Brazil",                  flag: "🇧🇷", slug: "brazil",               region: "Americas",subregion: "South America" },
  "100": { name: "Bulgaria",                flag: "🇧🇬", slug: "bulgaria",             region: "Europe",  subregion: "Eastern Europe" },
  "104": { name: "Myanmar",                 flag: "🇲🇲", slug: "myanmar",              region: "Asia",    subregion: "South-Eastern Asia" },
  "116": { name: "Cambodia",                flag: "🇰🇭", slug: "cambodia",             region: "Asia",    subregion: "South-Eastern Asia" },
  "120": { name: "Cameroon",                flag: "🇨🇲", slug: "cameroon",             region: "Africa",  subregion: "Sub-Saharan Africa" },
  "124": { name: "Canada",                  flag: "🇨🇦", slug: "canada",               region: "Americas",subregion: "Northern America" },
  "140": { name: "Central African Republic",flag: "🇨🇫", slug: "central-african-republic", region: "Africa", subregion: "Sub-Saharan Africa" },
  "144": { name: "Sri Lanka",               flag: "🇱🇰", slug: "sri-lanka",            region: "Asia",    subregion: "Southern Asia" },
  "152": { name: "Chile",                   flag: "🇨🇱", slug: "chile",                region: "Americas",subregion: "South America" },
  "156": { name: "China",                   flag: "🇨🇳", slug: "china",                region: "Asia",    subregion: "Eastern Asia" },
  "170": { name: "Colombia",                flag: "🇨🇴", slug: "colombia",             region: "Americas",subregion: "South America" },
  "180": { name: "DR Congo",                flag: "🇨🇩", slug: "dr-congo",             region: "Africa",  subregion: "Sub-Saharan Africa" },
  "188": { name: "Costa Rica",              flag: "🇨🇷", slug: "costa-rica",           region: "Americas",subregion: "Central America" },
  "191": { name: "Croatia",                 flag: "🇭🇷", slug: "croatia",              region: "Europe",  subregion: "Southern Europe" },
  "192": { name: "Cuba",                    flag: "🇨🇺", slug: "cuba",                 region: "Americas",subregion: "Caribbean" },
  "196": { name: "Cyprus",                  flag: "🇨🇾", slug: "cyprus",               region: "Asia",    subregion: "Western Asia" },
  "203": { name: "Czech Republic",          flag: "🇨🇿", slug: "czech-republic",       region: "Europe",  subregion: "Eastern Europe" },
  "208": { name: "Denmark",                 flag: "🇩🇰", slug: "denmark",              region: "Europe",  subregion: "Northern Europe" },
  "218": { name: "Ecuador",                 flag: "🇪🇨", slug: "ecuador",              region: "Americas",subregion: "South America" },
  "818": { name: "Egypt",                   flag: "🇪🇬", slug: "egypt",                region: "Africa",  subregion: "Northern Africa" },
  "231": { name: "Ethiopia",                flag: "🇪🇹", slug: "ethiopia",             region: "Africa",  subregion: "Sub-Saharan Africa" },
  "246": { name: "Finland",                 flag: "🇫🇮", slug: "finland",              region: "Europe",  subregion: "Northern Europe" },
  "250": { name: "France",                  flag: "🇫🇷", slug: "france",               region: "Europe",  subregion: "Western Europe" },
  "266": { name: "Gabon",                   flag: "🇬🇦", slug: "gabon",                region: "Africa",  subregion: "Sub-Saharan Africa" },
  "276": { name: "Germany",                 flag: "🇩🇪", slug: "germany",              region: "Europe",  subregion: "Western Europe" },
  "288": { name: "Ghana",                   flag: "🇬🇭", slug: "ghana",                region: "Africa",  subregion: "Sub-Saharan Africa" },
  "300": { name: "Greece",                  flag: "🇬🇷", slug: "greece",               region: "Europe",  subregion: "Southern Europe" },
  "320": { name: "Guatemala",               flag: "🇬🇹", slug: "guatemala",            region: "Americas",subregion: "Central America" },
  "324": { name: "Guinea",                  flag: "🇬🇳", slug: "guinea",               region: "Africa",  subregion: "Sub-Saharan Africa" },
  "332": { name: "Haiti",                   flag: "🇭🇹", slug: "haiti",                region: "Americas",subregion: "Caribbean" },
  "340": { name: "Honduras",                flag: "🇭🇳", slug: "honduras",             region: "Americas",subregion: "Central America" },
  "348": { name: "Hungary",                 flag: "🇭🇺", slug: "hungary",              region: "Europe",  subregion: "Eastern Europe" },
  "356": { name: "India",                   flag: "🇮🇳", slug: "india",                region: "Asia",    subregion: "Southern Asia" },
  "360": { name: "Indonesia",               flag: "🇮🇩", slug: "indonesia",            region: "Asia",    subregion: "South-Eastern Asia" },
  "364": { name: "Iran",                    flag: "🇮🇷", slug: "iran",                 region: "Asia",    subregion: "Southern Asia" },
  "368": { name: "Iraq",                    flag: "🇮🇶", slug: "iraq",                 region: "Asia",    subregion: "Western Asia" },
  "372": { name: "Ireland",                 flag: "🇮🇪", slug: "ireland",              region: "Europe",  subregion: "Northern Europe" },
  "376": { name: "Israel",                  flag: "🇮🇱", slug: "israel",               region: "Asia",    subregion: "Western Asia" },
  "380": { name: "Italy",                   flag: "🇮🇹", slug: "italy",                region: "Europe",  subregion: "Southern Europe" },
  "384": { name: "Ivory Coast",             flag: "🇨🇮", slug: "ivory-coast",          region: "Africa",  subregion: "Sub-Saharan Africa" },
  "388": { name: "Jamaica",                 flag: "🇯🇲", slug: "jamaica",              region: "Americas",subregion: "Caribbean" },
  "392": { name: "Japan",                   flag: "🇯🇵", slug: "japan",                region: "Asia",    subregion: "Eastern Asia" },
  "400": { name: "Jordan",                  flag: "🇯🇴", slug: "jordan",               region: "Asia",    subregion: "Western Asia" },
  "398": { name: "Kazakhstan",              flag: "🇰🇿", slug: "kazakhstan",           region: "Asia",    subregion: "Central Asia" },
  "404": { name: "Kenya",                   flag: "🇰🇪", slug: "kenya",                region: "Africa",  subregion: "Sub-Saharan Africa" },
  "408": { name: "North Korea",             flag: "🇰🇵", slug: "north-korea",          region: "Asia",    subregion: "Eastern Asia" },
  "410": { name: "South Korea",             flag: "🇰🇷", slug: "south-korea",          region: "Asia",    subregion: "Eastern Asia" },
  "414": { name: "Kuwait",                  flag: "🇰🇼", slug: "kuwait",               region: "Asia",    subregion: "Western Asia" },
  "418": { name: "Laos",                    flag: "🇱🇦", slug: "laos",                 region: "Asia",    subregion: "South-Eastern Asia" },
  "422": { name: "Lebanon",                 flag: "🇱🇧", slug: "lebanon",              region: "Asia",    subregion: "Western Asia" },
  "430": { name: "Liberia",                 flag: "🇱🇷", slug: "liberia",              region: "Africa",  subregion: "Sub-Saharan Africa" },
  "434": { name: "Libya",                   flag: "🇱🇾", slug: "libya",                region: "Africa",  subregion: "Northern Africa" },
  "454": { name: "Malawi",                  flag: "🇲🇼", slug: "malawi",               region: "Africa",  subregion: "Sub-Saharan Africa" },
  "458": { name: "Malaysia",                flag: "🇲🇾", slug: "malaysia",             region: "Asia",    subregion: "South-Eastern Asia" },
  "466": { name: "Mali",                    flag: "🇲🇱", slug: "mali",                 region: "Africa",  subregion: "Sub-Saharan Africa" },
  "484": { name: "Mexico",                  flag: "🇲🇽", slug: "mexico",               region: "Americas",subregion: "Central America" },
  "504": { name: "Morocco",                 flag: "🇲🇦", slug: "morocco",              region: "Africa",  subregion: "Northern Africa" },
  "508": { name: "Mozambique",              flag: "🇲🇿", slug: "mozambique",           region: "Africa",  subregion: "Sub-Saharan Africa" },
  "516": { name: "Namibia",                 flag: "🇳🇦", slug: "namibia",              region: "Africa",  subregion: "Sub-Saharan Africa" },
  "524": { name: "Nepal",                   flag: "🇳🇵", slug: "nepal",                region: "Asia",    subregion: "Southern Asia" },
  "528": { name: "Netherlands",             flag: "🇳🇱", slug: "netherlands",          region: "Europe",  subregion: "Western Europe" },
  "554": { name: "New Zealand",             flag: "🇳🇿", slug: "new-zealand",          region: "Oceania", subregion: "Australia & NZ" },
  "558": { name: "Nicaragua",               flag: "🇳🇮", slug: "nicaragua",            region: "Americas",subregion: "Central America" },
  "562": { name: "Niger",                   flag: "🇳🇪", slug: "niger",                region: "Africa",  subregion: "Sub-Saharan Africa" },
  "566": { name: "Nigeria",                 flag: "🇳🇬", slug: "nigeria",              region: "Africa",  subregion: "Sub-Saharan Africa" },
  "578": { name: "Norway",                  flag: "🇳🇴", slug: "norway",               region: "Europe",  subregion: "Northern Europe" },
  "586": { name: "Pakistan",                flag: "🇵🇰", slug: "pakistan",             region: "Asia",    subregion: "Southern Asia" },
  "591": { name: "Panama",                  flag: "🇵🇦", slug: "panama",               region: "Americas",subregion: "Central America" },
  "598": { name: "Papua New Guinea",        flag: "🇵🇬", slug: "papua-new-guinea",     region: "Oceania", subregion: "Melanesia" },
  "604": { name: "Peru",                    flag: "🇵🇪", slug: "peru",                 region: "Americas",subregion: "South America" },
  "608": { name: "Philippines",             flag: "🇵🇭", slug: "philippines",          region: "Asia",    subregion: "South-Eastern Asia" },
  "616": { name: "Poland",                  flag: "🇵🇱", slug: "poland",               region: "Europe",  subregion: "Eastern Europe" },
  "620": { name: "Portugal",                flag: "🇵🇹", slug: "portugal",             region: "Europe",  subregion: "Southern Europe" },
  "630": { name: "Puerto Rico",             flag: "🇵🇷", slug: "puerto-rico",          region: "Americas",subregion: "Caribbean" },
  "634": { name: "Qatar",                   flag: "🇶🇦", slug: "qatar",                region: "Asia",    subregion: "Western Asia" },
  "642": { name: "Romania",                 flag: "🇷🇴", slug: "romania",              region: "Europe",  subregion: "Eastern Europe" },
  "643": { name: "Russia",                  flag: "🇷🇺", slug: "russia",               region: "Europe",  subregion: "Eastern Europe" },
  "646": { name: "Rwanda",                  flag: "🇷🇼", slug: "rwanda",               region: "Africa",  subregion: "Sub-Saharan Africa" },
  "682": { name: "Saudi Arabia",            flag: "🇸🇦", slug: "saudi-arabia",         region: "Asia",    subregion: "Western Asia" },
  "686": { name: "Senegal",                 flag: "🇸🇳", slug: "senegal",              region: "Africa",  subregion: "Sub-Saharan Africa" },
  "694": { name: "Sierra Leone",            flag: "🇸🇱", slug: "sierra-leone",         region: "Africa",  subregion: "Sub-Saharan Africa" },
  "706": { name: "Somalia",                 flag: "🇸🇴", slug: "somalia",              region: "Africa",  subregion: "Sub-Saharan Africa" },
  "710": { name: "South Africa",            flag: "🇿🇦", slug: "south-africa",         region: "Africa",  subregion: "Sub-Saharan Africa" },
  "724": { name: "Spain",                   flag: "🇪🇸", slug: "spain",                region: "Europe",  subregion: "Southern Europe" },
  "729": { name: "Sudan",                   flag: "🇸🇩", slug: "sudan",                region: "Africa",  subregion: "Northern Africa" },
  "752": { name: "Sweden",                  flag: "🇸🇪", slug: "sweden",               region: "Europe",  subregion: "Northern Europe" },
  "756": { name: "Switzerland",             flag: "🇨🇭", slug: "switzerland",          region: "Europe",  subregion: "Western Europe" },
  "760": { name: "Syria",                   flag: "🇸🇾", slug: "syria",                region: "Asia",    subregion: "Western Asia" },
  "762": { name: "Tajikistan",              flag: "🇹🇯", slug: "tajikistan",           region: "Asia",    subregion: "Central Asia" },
  "764": { name: "Thailand",                flag: "🇹🇭", slug: "thailand",             region: "Asia",    subregion: "South-Eastern Asia" },
  "800": { name: "Uganda",                  flag: "🇺🇬", slug: "uganda",               region: "Africa",  subregion: "Sub-Saharan Africa" },
  "804": { name: "Ukraine",                 flag: "🇺🇦", slug: "ukraine",              region: "Europe",  subregion: "Eastern Europe" },
  "784": { name: "UAE",                     flag: "🇦🇪", slug: "uae",                  region: "Asia",    subregion: "Western Asia" },
  "826": { name: "United Kingdom",          flag: "🇬🇧", slug: "uk",                   region: "Europe",  subregion: "Northern Europe" },
  "840": { name: "United States",           flag: "🇺🇸", slug: "usa",                  region: "Americas",subregion: "Northern America" },
  "858": { name: "Uruguay",                 flag: "🇺🇾", slug: "uruguay",              region: "Americas",subregion: "South America" },
  "860": { name: "Uzbekistan",              flag: "🇺🇿", slug: "uzbekistan",           region: "Asia",    subregion: "Central Asia" },
  "862": { name: "Venezuela",               flag: "🇻🇪", slug: "venezuela",            region: "Americas",subregion: "South America" },
  "704": { name: "Vietnam",                 flag: "🇻🇳", slug: "vietnam",              region: "Asia",    subregion: "South-Eastern Asia" },
  "887": { name: "Yemen",                   flag: "🇾🇪", slug: "yemen",                region: "Asia",    subregion: "Western Asia" },
  "894": { name: "Zambia",                  flag: "🇿🇲", slug: "zambia",               region: "Africa",  subregion: "Sub-Saharan Africa" },
  "716": { name: "Zimbabwe",                flag: "🇿🇼", slug: "zimbabwe",             region: "Africa",  subregion: "Sub-Saharan Africa" },
  "702": { name: "Singapore",               flag: "🇸🇬", slug: "singapore",            region: "Asia",    subregion: "South-Eastern Asia" },
  "792": { name: "Turkey",                  flag: "🇹🇷", slug: "turkey",               region: "Asia",    subregion: "Western Asia" },
  "788": { name: "Tunisia",                 flag: "🇹🇳", slug: "tunisia",              region: "Africa",  subregion: "Northern Africa" },
  "780": { name: "Trinidad and Tobago",     flag: "🇹🇹", slug: "trinidad-and-tobago",  region: "Americas",subregion: "Caribbean" },
  "776": { name: "Tonga",                   flag: "🇹🇴", slug: "tonga",                region: "Oceania", subregion: "Polynesia" },
  "768": { name: "Togo",                    flag: "🇹🇬", slug: "togo",                 region: "Africa",  subregion: "Sub-Saharan Africa" },
  "740": { name: "Suriname",                flag: "🇸🇷", slug: "suriname",             region: "Americas",subregion: "South America" },
  "736": { name: "Sudan (Old)",             flag: "🇸🇩", slug: "sudan-old",            region: "Africa",  subregion: "Northern Africa" },
  "703": { name: "Slovakia",                flag: "🇸🇰", slug: "slovakia",             region: "Europe",  subregion: "Eastern Europe" },
  "705": { name: "Slovenia",                flag: "🇸🇮", slug: "slovenia",             region: "Europe",  subregion: "Southern Europe" },
  "678": { name: "São Tomé and Príncipe",   flag: "🇸🇹", slug: "sao-tome",             region: "Africa",  subregion: "Sub-Saharan Africa" },
  "499": { name: "Montenegro",              flag: "🇲🇪", slug: "montenegro",           region: "Europe",  subregion: "Southern Europe" },
  "807": { name: "North Macedonia",         flag: "🇲🇰", slug: "north-macedonia",      region: "Europe",  subregion: "Southern Europe" },
  "498": { name: "Moldova",                 flag: "🇲🇩", slug: "moldova",              region: "Europe",  subregion: "Eastern Europe" },
  "496": { name: "Mongolia",                flag: "🇲🇳", slug: "mongolia",             region: "Asia",    subregion: "Eastern Asia" },
  "688": { name: "Serbia",                  flag: "🇷🇸", slug: "serbia",               region: "Europe",  subregion: "Southern Europe" },
  "112": { name: "Belarus",                 flag: "🇧🇾", slug: "belarus",              region: "Europe",  subregion: "Eastern Europe" },
  "031": { name: "Azerbaijan",              flag: "🇦🇿", slug: "azerbaijan",           region: "Asia",    subregion: "Western Asia" },
  "051": { name: "Armenia",                 flag: "🇦🇲", slug: "armenia",              region: "Asia",    subregion: "Western Asia" },
  "268": { name: "Georgia",                 flag: "🇬🇪", slug: "georgia",              region: "Asia",    subregion: "Western Asia" },
  "417": { name: "Kyrgyzstan",              flag: "🇰🇬", slug: "kyrgyzstan",           region: "Asia",    subregion: "Central Asia" },
  "795": { name: "Turkmenistan",            flag: "🇹🇲", slug: "turkmenistan",         region: "Asia",    subregion: "Central Asia" },

  // Missing African countries
  "108": { name: "Burundi",                 flag: "🇧🇮", slug: "burundi",              region: "Africa",  subregion: "Sub-Saharan Africa" },
  "132": { name: "Cabo Verde",              flag: "🇨🇻", slug: "cabo-verde",           region: "Africa",  subregion: "Sub-Saharan Africa" },
  "148": { name: "Chad",                    flag: "🇹🇩", slug: "chad",                 region: "Africa",  subregion: "Sub-Saharan Africa" },
  "174": { name: "Comoros",                 flag: "🇰🇲", slug: "comoros",              region: "Africa",  subregion: "Sub-Saharan Africa" },
  "178": { name: "Republic of Congo",       flag: "🇨🇬", slug: "republic-of-congo",    region: "Africa",  subregion: "Sub-Saharan Africa" },
  "204": { name: "Benin",                   flag: "🇧🇯", slug: "benin",                region: "Africa",  subregion: "Sub-Saharan Africa" },
  "226": { name: "Equatorial Guinea",       flag: "🇬🇶", slug: "equatorial-guinea",    region: "Africa",  subregion: "Sub-Saharan Africa" },
  "232": { name: "Eritrea",                 flag: "🇪🇷", slug: "eritrea",              region: "Africa",  subregion: "Sub-Saharan Africa" },
  "262": { name: "Djibouti",                flag: "🇩🇯", slug: "djibouti",             region: "Africa",  subregion: "Sub-Saharan Africa" },
  "270": { name: "Gambia",                  flag: "🇬🇲", slug: "gambia",               region: "Africa",  subregion: "Sub-Saharan Africa" },
  "426": { name: "Lesotho",                 flag: "🇱🇸", slug: "lesotho",              region: "Africa",  subregion: "Sub-Saharan Africa" },
  "450": { name: "Madagascar",              flag: "🇲🇬", slug: "madagascar",           region: "Africa",  subregion: "Sub-Saharan Africa" },
  "478": { name: "Mauritania",              flag: "🇲🇷", slug: "mauritania",           region: "Africa",  subregion: "Sub-Saharan Africa" },
  "480": { name: "Mauritius",               flag: "🇲🇺", slug: "mauritius",            region: "Africa",  subregion: "Sub-Saharan Africa" },
  "624": { name: "Guinea-Bissau",           flag: "🇬🇼", slug: "guinea-bissau",        region: "Africa",  subregion: "Sub-Saharan Africa" },
  "690": { name: "Seychelles",              flag: "🇸🇨", slug: "seychelles",           region: "Africa",  subregion: "Sub-Saharan Africa" },
  "728": { name: "South Sudan",             flag: "🇸🇸", slug: "south-sudan",          region: "Africa",  subregion: "Sub-Saharan Africa" },
  "748": { name: "Eswatini",                flag: "🇸🇿", slug: "eswatini",             region: "Africa",  subregion: "Sub-Saharan Africa" },
  "834": { name: "Tanzania",                flag: "🇹🇿", slug: "tanzania",             region: "Africa",  subregion: "Sub-Saharan Africa" },
  "854": { name: "Burkina Faso",            flag: "🇧🇫", slug: "burkina-faso",         region: "Africa",  subregion: "Sub-Saharan Africa" },

};

// Highly-sought migration destinations get a highlight colour
export const DESTINATION_COLORS: Record<string, string> = {
  "840": "#3B82F6",  // USA
  "124": "#EF4444",  // Canada
  "826": "#8B5CF6",  // UK
  "276": "#F59E0B",  // Germany
  "36":  "#EC4899",  // Australia
  "554": "#06B6D4",  // New Zealand
  "784": "#D97706",  // UAE
  "372": "#22C55E",  // Ireland
  "528": "#F97316",  // Netherlands
  "702": "#10B981",  // Singapore
  "246": "#3B82F6",  // Finland
  "752": "#1D4ED8",  // Sweden
  "578": "#6366F1",  // Norway
  "208": "#0EA5E9",  // Denmark
  "756": "#D946EF",  // Switzerland
  "380": "#F43F5E",  // Italy
  "724": "#EF4444",  // Spain
  "250": "#3B82F6",  // France
  "620": "#22D3EE",  // Portugal
  "392": "#EF4444",  // Japan
  "410": "#3B82F6",  // South Korea
  "634": "#F59E0B",  // Qatar
  "682": "#22C55E",  // Saudi Arabia
  "414": "#F59E0B",  // Kuwait
};

export function getCountryByNumeric(numericCode: string): CountryMeta | null {
  return ALL_COUNTRIES[numericCode] ?? null;
}

export function getCountryBySlug(slug: string): CountryMeta | null {
  return Object.values(ALL_COUNTRIES).find(c => c.slug === slug) ?? null;
}
