
import { GoogleGenAI, Type } from "@google/genai";
import { JDMatchResult } from "../types";
import { PERSONAL_INFO, EXPERIENCES, SKILL_GROUPS } from "../constants";

export const analyzeJobDescription = async (
  jd: string, 
  fileData?: { data: string; mimeType: string }
): Promise<JDMatchResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const cvData = `
    Candidate: ${PERSONAL_INFO.name}
    Summary: ${PERSONAL_INFO.summary}
    Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company}: ${e.highlights.join(", ")}`).join("\n")}
    Skills: ${SKILL_GROUPS.map(s => `${s.category}: ${s.skills.join(", ")}`).join("\n")}
  `;

  const promptText = `
    Analyze the following Job Description (JD) against the provided CV data of ${PERSONAL_INFO.name}.
    Calculate a match percentage and identify key strengths and potential gaps.
    
    CV DATA:
    ${cvData}

    The JD is provided below (either as text or an attached file).
  `;

  const parts: any[] = [{ text: promptText }];

  if (fileData) {
    parts.push({
      inlineData: {
        data: fileData.data,
        mimeType: fileData.mimeType
      }
    });
  }
  
  // Always include the text if provided (either extracted or typed)
  if (jd.trim()) {
    parts.push({ text: `JD TEXT CONTENT:\n${jd}` });
  }

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: { parts },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          matchPercentage: { type: Type.NUMBER },
          keyStrengths: { type: Type.ARRAY, items: { type: Type.STRING } },
          missingGaps: { type: Type.ARRAY, items: { type: Type.STRING } },
          summary: { type: Type.STRING }
        },
        required: ["matchPercentage", "keyStrengths", "missingGaps", "summary"]
      }
    }
  });

  return JSON.parse(response.text.trim());
};
