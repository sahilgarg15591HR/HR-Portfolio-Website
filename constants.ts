import { Experience, SkillGroup } from './types';

export const PERSONAL_INFO = {
  name: "Sahil Garg",
  title: "HR Leader | XLRI",
  email: "sahilgarg15591@gmail.com",
  phone: "+971502608366",
  location: "Dubai, UAE",
  linkedin: "https://linkedin.com/in/sahilgarg15591",
  // Updated with LinkedIn profile picture
  profileImage: "https://media.licdn.com/dms/image/v2/D5603AQGngNBlMPFQKg/profile-displayphoto-shrink_200_200/B56ZTpzvBKGsAY-/0/1739089441427?e=2147483647&v=beta&t=dt6-RX6YOa_pH65MYWL15S8nhpIXH1LsEz1uiPP7q_g",
  summary: "HR professional with 10+ years of experience across HR Business Partnering (Tech & Non-Tech), Performance, Compensation, Rewards, Talent Management, Acquisition and Organizational Development. Adept at driving HR strategies across diverse industries including Fintech, Oil & Gas, Manufacturing, Ed-Tech, Solar-Tech, and Construction.",
};

export const EDUCATION = {
  degree: "Master of Business Administration (MBA)",
  specialization: "Human Resource Management",
  institution: "XLRI - Xavier School of Management",
  location: "Jamshedpur, India",
  logo: "https://xlridelhi.ac.in/wp-content/uploads/2024/04/logo1.webp",
  highlights: [
    "One of India's oldest and most prestigious institutions for HR Management.",
    "Rigorous curriculum focused on Organizational Behavior, Labor Laws, and Strategic HR.",
    "Alumni network spanning global leadership roles."
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    company: "ROBUSTRADE / VIDITEC DMCC",
    role: "Human Resource Business Partner - Fintech",
    duration: "08/2025 – Present",
    location: "Dubai, UAE",
    description: "Leading HR function for a pioneering Fintech company in West Africa via its flagship Kulu app.",
    highlights: [
      "Leading HR function for Fintech with teams in UAE, West Africa and India.",
      "Hiring for critical leadership roles and creating KPIs across teams.",
      "Scaling up in-house tech team in India for efficient product delivery.",
      "Reduced hiring TAT by 50% through process optimization."
    ],
    website: "https://kulu.com",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Cku2EQYGG87N6d5yIjeAV-MXyEonUthXWQ&s",
    industry: "Fintech"
  },
  {
    company: "CASHFREE PAYMENTS",
    role: "Senior Manager - Human Resources",
    duration: "06/2022 – 07/2025",
    location: "Bangalore, India",
    description: "Led HRBP & TA function for Engineering, Product, Design & Data Analytics teams.",
    highlights: [
      "Reduced employee cost by 10% and improved retention by 20%.",
      "Led Compensation, Performance & Rewards COE for the entire company.",
      "Ensured 100% on-time cycles and improved pay parity for 90% employees.",
      "Implemented OKR-based performance review with 95%+ adoption."
    ],
    website: "https://cashfree.com",
    logo: "https://image.opencart.com/cache/6806409a91f2a-resize-710x380.jpg",
    industry: "Fintech"
  },
  {
    company: "SENSEHAWK",
    role: "Head of HR",
    duration: "08/2021 – 05/2022",
    location: "Abu Dhabi, UAE",
    description: "Led HR for Series A-funded multinational solar-tech startup.",
    highlights: [
      "Established UAE office and ensured seamless visa processing for 30+ critical employees.",
      "Hired critical roles: Ops Head, Sales Head (USA), Marketing Head.",
      "Designed and implemented all HR frameworks from scratch."
    ],
    website: "https://sensehawk.com",
    logo: "https://assets.solarplaza.com/organizations/logos/SenseHawk.jpg",
    industry: "Solar-Tech"
  },
  {
    company: "BYJU'S",
    role: "People Partner",
    duration: "11/2019 – 08/2021",
    location: "Bangalore, India",
    description: "Led HRBP for 1400+ employees across Tech, Product, Game Studio, and Supply Chain.",
    highlights: [
      "Partnered with US-based acquisition (OSMO) for seamless integration.",
      "Scaled post-sales operations team to 2x, reducing TAT by 40%.",
      "Achieved 60% increase in offer acceptance rate for Engineering team."
    ],
    website: "https://byjus.com",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgKLqyc_rFQaaYM14RBZrbl8u3kD79ouRug&s",
    industry: "Ed-Tech"
  },
  {
    company: "RELIANCE INDUSTRIES LIMITED",
    role: "HR Business Partner",
    duration: "06/2017 – 11/2019",
    location: "Mumbai, India",
    description: "HR Business Partner for 500+ employees across corporate functions in Hydrocarbons.",
    highlights: [
      "Developed in-house hiring platform, moving 95% recruitment online.",
      "Reduced recruitment TATs by 50% via internal platform.",
      "Proactively managed Workforce Planning and Succession Planning for key talents."
    ],
    website: "https://ril.com",
    logo: "https://rilstaticasset.akamaized.net/sites/default/files/2023-02/L.1.jpg",
    industry: "Oil & Gas"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  { category: "Core HR", skills: ["HR Business Partnership", "Talent Acquisition", "Talent Management", "Org Development"] },
  { category: "Performance & Rewards", skills: ["Compensation and Rewards", "Performance Management", "ESOPs & Appraisals"] },
  { category: "Strategic", skills: ["Workforce Planning", "Succession Planning", "Product Management (Hiring Tech)"] },
  { category: "Modern Tech", skills: ["AI in HR", "Vibe Coding", "Dashboard Analytics"] },
];

export const INDUSTRIES = [
  "FinTech", "Oil & Gas", "Manufacturing", "Solar-Tech", "Ed-Tech", "SaaS", "Ecommerce", "AI / ML", "Real Estate", "Engineering"
];