
export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  website: string;
  logo: string;
  industry: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface JDMatchResult {
  matchPercentage: number;
  keyStrengths: string[];
  missingGaps: string[];
  summary: string;
}
