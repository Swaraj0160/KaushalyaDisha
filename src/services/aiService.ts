import { Language, LearnerStage } from '../types';

export interface CompanionResponse {
  text: string;
  isFallback: boolean;
  model?: string;
  fallbackReason?: string;
}

export async function askCareerCompanion(params: {
  prompt: string;
  learnerStage: LearnerStage;
  currentStream?: string;
  language: Language;
  careerContext?: string;
  routeContext?: string;
}): Promise<CompanionResponse> {
  try {
    const res = await fetch('/api/ai/companion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    if (!res.ok) {
      throw new Error(`Server returned status ${res.status}`);
    }

    const data = await res.json();
    return {
      text: data.text || 'Unable to generate response. Please try again.',
      isFallback: !!data.isFallback,
      model: data.model,
      fallbackReason: data.fallbackReason,
    };
  } catch (err: any) {
    console.warn('AI Companion request failed, returning client fallback:', err?.message || err);
    const isMarathi = params.language === 'mr';
    return {
      text: isMarathi
        ? `स्थानिक पडताळणी मार्गदर्शन:
नेटवर्क किंवा सर्व्हरशी संपर्क होऊ शकला नाही, तरीही आपण 'माझा मार्ग' टॅबमधून अधिकृत महाराष्ट्र शैक्षणिक मार्गांची (MSBSHSE / DTE / DVET) तुलना पाहू शकता आणि माहिती तपासू शकता.`
        : `Local Grounded Guidance:
The network or AI service is currently in fallback mode. You can continue exploring verified Maharashtra pathways and prerequisites directly using the 'My Path' and 'Explore' tabs.`,
      isFallback: true,
      fallbackReason: 'Network/server offline; client-side grounded fallback active',
    };
  }
}
