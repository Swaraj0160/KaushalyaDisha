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

  const { prompt, learnerStage, currentStream, language = 'en', careerContext, routeContext } = req.body || {};

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Prompt is required.' });
  }

  // System instruction grounded in Maharashtra educational realities
  const systemInstruction = `
You are KaushalyaDisha (कौशल्यदिशा) Career Discovery Companion, an empathetic, highly knowledgeable, and realistic education and career advisor specifically focused on Maharashtra, India.
Guidelines:
1. Always keep advice realistic, age-appropriate, and non-deterministic.
2. For school students (Classes 8-9, 10), encourage exploratory curiosity rather than declaring a single permanent fate.
3. Ground answers in verified Maharashtra authorities: MSBSHSE (State Board), DTE Maharashtra (Polytechnic & Direct Second Year Engineering DSE), DVET Maharashtra (ITI Trades), and State CET Cell (MHT-CET, BCA, MCA).
4. Never invent cut-off marks, college fees, job placements, or official admission policies. Always advise the student what specific document or authority notification they must verify.
5. Language: Respond in ${language === 'mr' ? 'natural, polite Marathi (मराठी)' : 'clear, encouraging English'}.
6. Learner context: Stage is "${learnerStage || 'general'}", stream/trade is "${currentStream || 'unspecified'}".
7. Focus strictly on education pathways, career exploration, and skill gap building.
`;

  // If Gemini client is available, attempt live generation
  if (aiClient && process.env.GEMINI_API_KEY) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: `Learner Question: ${prompt}\nRelevant Career: ${careerContext || 'General'}\nRelevant Route: ${routeContext || 'General'}`,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const responseText = response.text || '';
      return res.status(200).json({
        text: responseText,
        isFallback: false,
        model: 'gemini-3.8-flash',
      });
    } catch (aiErr: any) {
      console.warn('Gemini API call failed or timed out, activating grounded fallback:', aiErr?.message || aiErr);
    }
  }

  // Deterministic Grounded Fallback (Honest representation when AI is unconfigured or unavailable)
  const isMarathi = language === 'mr';
  let fallbackText = '';

  const query = prompt.toLowerCase();
  if (query.includes('10') || query.includes('दहावी') || query.includes('polytechnic') || query.includes('iti') || query.includes('सायन्स')) {
    fallbackText = isMarathi
      ? `दहावीनंतर महाराष्ट्रात ३ मुख्य पर्याय उपलब्ध आहेत:
1. **११वी-१२वी विज्ञान/वाणिज्य/कला (FYJC):** कनिष्ठ महाविद्यालयातून केंद्रीय प्रवेश (CAP) द्वारे प्रवेश. पदवी प्रवेश परीक्षांसाठी (MHT-CET, JEE, NEET) तयारी.
2. **३-वर्षीय तंत्रनिकेतन (पॉलिटेक्निक डिप्लोमा):** DTE महाराष्ट्र द्वारे १०वीच्या गुणांवर थेट प्रवेश. पूर्ण झाल्यावर MHT-CET न देता थेट दुसऱ्या वर्षाच्या B.Tech मध्ये (DSE) प्रवेश मिळतो.
3. **१-२ वर्षे ITI ट्रेड:** DVET महाराष्ट्र द्वारे कमी खर्चात प्रत्यक्ष औद्योगिक कौशल्य व अप्रेंटिसशिप.

*पडताळणी सूचना:* अधिकृत प्रवेश नियमांसाठी dte.maharashtra.gov.in आणि admission.dvet.gov.in वर माहिती तपासा.`
      : `After Class 10 in Maharashtra, there are three primary verified pathways:
1. **Class 11-12 Academic Streams (FYJC Science / Commerce / Arts):** Centralized online admission (FYJC). Prepares for degree entrances like MHT-CET, JEE, and NEET.
2. **3-Year Polytechnic Engineering Diploma:** Administered by DTE Maharashtra based on 10th marks. Offers hands-on labs and direct lateral entry into 2nd year B.Tech (DSE) without taking MHT-CET.
3. **1-2 Year ITI Trades:** DVET Maharashtra portal offers low-cost, vocational industrial training and apprenticeship pathways.

*Verification Note:* Always confirm eligibility percentages and CAP schedules on dte.maharashtra.gov.in and admission.dvet.gov.in.`;
  } else if (query.includes('skill') || query.includes('कौशल्य') || query.includes('data') || query.includes('web')) {
    fallbackText = isMarathi
      ? `सुरुवातीच्या कामासाठी आवश्यक मुख्य कौशल्ये:
1. **डेटा विश्लेषक (Data Analyst):** एक्सेल पिव्होट टेबल्स, SQL क्वेरी आणि पॉवर बीआय किंवा पायथनचे मूलभूत ज्ञान.
2. **वेब डेव्हलपर (Web Developer):** HTML5, CSS Flexbox/Grid, जावास्क्रिप्ट आणि रिअ‍ॅक्ट (React).
3. **प्रत्यक्ष पुरावा:** नुसते प्रमाणपत्र पुरेसे नसते; कौशल्य पासपोर्टमध्ये किंवा GitHub वर किमान ३ प्रत्यक्ष प्रोजेक्ट्स दाखवा.

*सल्ला:* 'Learn & Practise' विभागातील व्यावहारिक टास्क पूर्ण करून आपल्या पासपोर्टमध्ये पुरावा नोंदवा.`
      : `Key foundational skills for entry-level digital roles:
1. **Junior Data Analyst:** Spreadsheets (Pivot tables/VLOOKUP), SQL Joins/Aggregations, and basic Power BI or Python (Pandas).
2. **Front-End Developer:** Semantic HTML5, CSS Flexbox/Grid, modern JavaScript, and React components.
3. **Proof-of-Skill:** Theoretical certificates alone are rarely sufficient; build a portfolio of 2-3 documented projects in your Proof-of-Skill passport.

*Action:* Use the 'Learn & Practise' section to pick a beginner task and record evidence.`;
  } else {
    fallbackText = isMarathi
      ? `कौशल्यदिशा स्थानिक मार्गदर्शक:
तुम्ही निवडलेल्या शैक्षणिक टप्प्यानुसार (${learnerStage || 'सध्याचा टप्पा'}), खालील गोष्टी महत्त्वाच्या आहेत:
- **पात्रतेची खात्री:** संबंधित अधिकृत मंडळाचे (MSBSHSE / DTE / DVET) निकष तपासा.
- **तुलना:** एकाच वेळी किमान २ पर्यायांची फी, कालावधी आणि पुढील संधींची तुलना करा.
- **सराव:** 'सराव आणि कौशल्ये' टॅबमधून प्रत्यक्ष कृती करून पुरावा नोंदवा.

कोणत्याही पर्यायावर अंतिम शिक्का मारण्यापूर्वी अधिकृत शासकीय संकेतस्थळावरून (Portals) माहितीची खात्री करा.`
      : `KaushalyaDisha Grounded Pathway Guidance:
Based on your current stage (${learnerStage || 'Current Stage'}), keep these principles in mind:
- **Prerequisite Validation:** Check whether your passed subjects match the recorded criteria from MSBSHSE / DTE Maharashtra.
- **Side-by-Side Comparison:** Compare trade-offs between academic degrees and practical diplomas before deciding.
- **Hands-on Evidence:** Take a practical task in 'Learn & Practise' to discover whether you enjoy the day-to-day work of the field.

*Note:* Official notifications must be confirmed on Maharashtra state portals before application deadlines.`;
  }

  return res.status(200).json({
    text: fallbackText,
    isFallback: true,
    fallbackReason: process.env.GEMINI_API_KEY
      ? 'AI service temporary fallback; displaying verified local guidance'
      : 'GEMINI_API_KEY not configured; operating in local grounded mode',
  });
}
