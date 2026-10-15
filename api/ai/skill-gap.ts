import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { roleTitle, existingSkills = [], language = 'en' } = req.body || {};
  const isMarathi = language === 'mr';

  if (aiClient && process.env.GEMINI_API_KEY) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: `Role: ${roleTitle}\nLearner Skills: ${existingSkills.join(', ')}\nLanguage: ${language}`,
        config: {
          systemInstruction: `Analyze skill gaps for an entry-level candidate in Maharashtra. Return a brief, realistic 3-point gap assessment with suggested concrete project ideas. Respond in ${isMarathi ? 'Marathi' : 'English'}.`,
        },
      });
      return res.status(200).json({
        analysis: response.text || '',
        isFallback: false,
      });
    } catch (err) {
      // Fallback
    }
  }

  const fallbackAnalysis = isMarathi
    ? `या भूमिकेसाठी (${roleTitle}) कौशल्यांचे वस्तुनिष्ठ विश्लेषण:
1. **सध्याचे कौशल्य:** तुमच्याकडील कौशल्यांचा प्राथमिक पाया चांगला आहे, परंतु प्रत्यक्ष इंडस्ट्री टूल्सचा सराव हवा.
2. **आवश्यक कौशल्य:** संबंधित भूमिकेचे प्रत्यक्ष टूल्स (उदा. SQL, Figma किंवा सर्किट टेस्टिंग) हाताळणे आवश्यक आहे.
3. **पुढील कृती:** १ प्रत्यक्ष प्रोजेक्ट पूर्ण करून त्याचा कोड किंवा रिपोर्ट पासपोर्टमध्ये नोंदवा.`
    : `Objective Skill Gap Summary for ${roleTitle}:
1. **Demonstrated Foundation:** Basic concepts are acknowledged, but workplace tool proficiency requires practical demonstration.
2. **Immediate Focus Areas:** Hands-on application in industry-standard software (e.g. SQL, Figma, Git, or workshop testing).
3. **Recommended Next Step:** Complete a practical project task and upload documentation to your Proof-of-Skill passport.`;

  return res.status(200).json({
    analysis: fallbackAnalysis,
    isFallback: true,
  });
}
