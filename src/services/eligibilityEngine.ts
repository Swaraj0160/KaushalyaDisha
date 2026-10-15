import { EducationRoute, LearnerProfile, EligibilityState, CareerRole } from '../types';

export interface EligibilityResult {
  state: EligibilityState;
  reasonEn: string;
  reasonMr: string;
  missingItemsEn: string[];
  missingItemsMr: string[];
  recommendationEn: string;
  recommendationMr: string;
}

export function evaluateRouteEligibility(
  route: EducationRoute,
  profile: LearnerProfile
): EligibilityResult {
  // 1. Post-Class-10 Academic Science Check
  if (route.id === 'route_fyjc_science') {
    if (profile.currentStage === 'class_8_9') {
      return {
        state: 'needs_verification',
        reasonEn: 'Class 10 completion is required for FYJC admission.',
        reasonMr: 'FYJC प्रवेशासाठी इयत्ता १०वी पूर्ण करणे आवश्यक आहे.',
        missingItemsEn: ['Class 10 SSC passing certificate with Science & Maths'],
        missingItemsMr: ['१०वी उत्तीर्ण प्रमाणपत्र (विज्ञान व गणित विषयांसह)'],
        recommendationEn: 'Continue building strong fundamentals in 9th & 10th Science and Mathematics.',
        recommendationMr: '९वी व १०वीत विज्ञान आणि गणिताचा चांगला पाया तयार करा.'
      };
    }
    return {
      state: 'matches_criteria',
      reasonEn: 'Matches recorded criteria: 10th pass with Science and Mathematics qualifies for FYJC Science admission.',
      reasonMr: 'नोंदवलेल्या निकषांनुसार पात्र: १०वी उत्तीर्ण विद्यार्थी विज्ञान शाखेसाठी पात्र ठरतात.',
      missingItemsEn: ['Centralized online (FYJC) cutoff round allocation'],
      missingItemsMr: ['ऑनलाइन केंद्रीय प्रवेश प्रक्रियेतील (FYJC) गुणवत्ता यादीतील स्थान'],
      recommendationEn: 'Check previous year cutoff percentages of preferred junior colleges in your district.',
      recommendationMr: 'तुमच्या जिल्ह्यातील पसंतीचे कनिष्ठ महाविद्यालय आणि त्यांचे मागील कट-ऑफ तपासा.'
    };
  }

  // 2. 3-Year Polytechnic Diploma Check
  if (route.id === 'route_polytechnic_diploma') {
    if (profile.currentStage === 'class_8_9') {
      return {
        state: 'needs_verification',
        reasonEn: 'Minimum Class 10 (SSC) qualification required with at least 35% marks.',
        reasonMr: '१०वी उत्तीर्ण व किमान ३५% गुणांची अट आहे.',
        missingItemsEn: ['Class 10 SSC Marksheet'],
        missingItemsMr: ['१०वीची गुणपत्रिका'],
        recommendationEn: 'Explore basic hands-on mechanics and electronics activities.',
        recommendationMr: 'प्रात्यक्षिक मेकॅनिक्स आणि इलेक्ट्रॉनिक्स उपक्रम करून पहा.'
      };
    }
    return {
      state: 'matches_criteria',
      reasonEn: 'Matches recorded criteria: Passed/appearing Class 10 with Mathematics and Science meets DTE norms.',
      reasonMr: 'नोंदवलेल्या निकषांनुसार पात्र: १०वीत गणित व विज्ञान विषयांसह किमान ३५% गुण असणे आवश्यक.',
      missingItemsEn: ['DTE Maharashtra CAP application registration'],
      missingItemsMr: ['DTE महाराष्ट्र CAP पोर्टलवर नोंदणी'],
      recommendationEn: 'Review the lab facilities and placement records of polytechnics in your division.',
      recommendationMr: 'तुमच्या परिसरातील शासकीय व नामांकित तंत्रनिकेतनांची माहिती घ्या.'
    };
  }

  // 3. ITI Trade Check
  if (route.id === 'route_iti_trade') {
    return {
      state: 'matches_criteria',
      reasonEn: 'Matches recorded criteria: Minimum age 14 and Class 10 pass meets DVET ITI trade admission norms.',
      reasonMr: 'नोंदवलेल्या निकषांनुसार पात्र: किमान वय १४ वर्षे आणि १०वी उत्तीर्ण DVET ITI नियमांनुसार पात्र.',
      missingItemsEn: ['DVET online admission registration at admission.dvet.gov.in'],
      missingItemsMr: ['admission.dvet.gov.in पोर्टलवर नोंदणी'],
      recommendationEn: 'Select NCVT (National Council) certified trades for wider industrial acceptance.',
      recommendationMr: 'देशभरात मान्यतेसाठी NCVT प्रमाणित ट्रेडची निवड करा.'
    };
  }

  // 4. B.Tech / B.E. Degree Check
  if (route.id === 'route_btech_degree') {
    if (profile.currentStage === 'class_8_9' || profile.currentStage === 'class_10') {
      return {
        state: 'needs_verification',
        reasonEn: 'Requires passing Class 12 (HSC Science) with PCM and giving MHT-CET or JEE Main.',
        reasonMr: '१२वी विज्ञान (PCM) आणि MHT-CET/JEE परीक्षा देणे अनिवार्य आहे.',
        missingItemsEn: ['Class 12 HSC Science with Physics & Mathematics', 'MHT-CET / JEE Main score card'],
        missingItemsMr: ['१२वी विज्ञान गुणपत्रिका', 'MHT-CET / JEE स्कोअरकार्ड'],
        recommendationEn: 'Focus on Class 10/11 fundamentals before entrance test planning.',
        recommendationMr: 'सध्या पायाभूत गणित व विज्ञानावर लक्ष केंद्रित करा.'
      };
    }
    if (profile.currentStage === 'class_11_12') {
      return {
        state: 'matches_criteria',
        reasonEn: 'Matches recorded criteria: 12th Science PCM stream aligns with State CET Cell engineering eligibility.',
        reasonMr: 'नोंदवलेल्या निकषांनुसार पात्र: १२वी सायन्स PCM गट इंजिनिअरिंगसाठी पात्र ठरतो.',
        missingItemsEn: ['Non-zero score in MHT-CET / JEE Main', '45% minimum aggregate in PCM group'],
        missingItemsMr: ['MHT-CET परीक्षेतील पर्सेंटाईल गुण', 'PCM ग्रुपमध्ये किमान ४५% गुण'],
        recommendationEn: 'Practice timed mock entrance tests and monitor official CET cell notifications.',
        recommendationMr: 'नियमित सराव चाचण्या द्या आणि cetcell.mahacet.org वरील सूचना पहा.'
      };
    }
    if (profile.currentStage === 'diploma_iti') {
      return {
        state: 'requires_review',
        reasonEn: 'As a Diploma holder, you qualify specifically for Direct Second Year (DSE) lateral entry rather than starting 1st year from scratch.',
        reasonMr: 'डिप्लोमाधारकांसाठी थेट दुसऱ्या वर्षात (DSE) प्रवेशाचा उत्तम पर्याय उपलब्ध आहे.',
        missingItemsEn: ['DTE DSE Merit List Rank'],
        missingItemsMr: ['DSE गुणवत्ता यादीतील स्थान'],
        recommendationEn: 'Explore the "Direct Second Year Engineering (DSE)" pathway which saves 1 academic year.',
        recommendationMr: '१ वर्ष वाचवण्यासाठी थेट द्वितीय वर्ष (DSE) मार्ग तपासा.'
      };
    }
  }

  // 5. Direct Second Year (DSE) Lateral Entry Check
  if (route.id === 'route_dse_lateral') {
    if (profile.currentStage === 'diploma_iti') {
      return {
        state: 'matches_criteria',
        reasonEn: 'Matches recorded criteria: MSBTE or AICTE-approved engineering diploma is officially eligible for DTE lateral admission.',
        reasonMr: 'नोंदवलेल्या निकषांनुसार पात्र: MSBTE/AICTE मान्यताप्राप्त डिप्लोमा DSE प्रवेशासाठी पूर्णपणे पात्र आहे.',
        missingItemsEn: ['Final year diploma marksheet with minimum 45% (40% reserved)'],
        missingItemsMr: ['डिप्लोमा अंतिम वर्षाची गुणपत्रिका (किमान ४५%)'],
        recommendationEn: 'Keep Caste Validity, Non-Creamy Layer, or EWS documents ready before CAP registration starts.',
        recommendationMr: 'CAP राउंड सुरू होण्यापूर्वी जात वैधता, नॉन-क्रिमिलेअर किंवा EWS दाखला तयार ठेवा.'
      };
    }
    return {
      state: 'does_not_match',
      reasonEn: 'Does not match recorded criteria: DSE lateral entry strictly requires a completed 3-Year Engineering Diploma or B.Sc with Maths.',
      reasonMr: 'नोंदवलेल्या निकषांमध्ये बसत नाही: DSE साठी ३-वर्षीय तंत्रशिक्षण डिप्लोमा आवश्यक असतो.',
      missingItemsEn: ['3-Year Polytechnic Engineering Diploma completion'],
      missingItemsMr: ['३-वर्षीय तंत्रनिकेतन डिप्लोमा'],
      recommendationEn: 'If currently in school, choose either 3-Year Diploma or Class 11-12 Science first.',
      recommendationMr: 'इंजिनिअरिंगसाठी १०वीनंतर थेट डिप्लोमा किंवा १२वी सायन्सचा मार्ग निवडा.'
    };
  }

  // 6. MPSC / Competitive Exam Route Check
  if (route.id === 'route_mpsc_competitive') {
    if (profile.currentStage === 'graduate') {
      return {
        state: 'matches_criteria',
        reasonEn: 'Matches recorded criteria: A recognized Bachelor degree in any stream meets MPSC and banking officer eligibility.',
        reasonMr: 'नोंदवलेल्या निकषांनुसार पात्र: कोणत्याही शाखेची पदवी MPSC व बँक परीक्षांसाठी ग्राह्य धरली जाते.',
        missingItemsEn: ['MPSC profile creation at mpsc.gov.in', 'Maharashtra Domicile Certificate'],
        missingItemsMr: ['mpsc.gov.in वर प्रोफाइल नोंदणी', 'महाराष्ट्र अधिवास दाखला (Domicile)'],
        recommendationEn: 'Maintain a secondary professional skill track (e.g. Data or Accounts) as a risk-mitigation backup.',
        recommendationMr: 'स्पर्धा परीक्षेसोबतच स्वतःच्या शाखेतील नोकरीची पर्यायी कौशल्येही सोबत ठेवा.'
      };
    }
    return {
      state: 'needs_verification',
      reasonEn: 'Requires completion of a recognized graduation degree before appearing for final selection.',
      reasonMr: 'निवड परीक्षेसाठी पदवी पूर्ण असणे आवश्यक आहे.',
      missingItemsEn: ['Graduation Degree Certificate'],
      missingItemsMr: ['पदवी उत्तीर्ण प्रमाणपत्र'],
      recommendationEn: 'You can begin reading Maharashtra history, polity, and state newspapers alongside your studies.',
      recommendationMr: 'पदवीचा अभ्यास करतानाच वृत्तपत्रे आणि राज्यव्यवस्थेचे वाचन सुरू करू शकता.'
    };
  }

  // Default evaluation
  return {
    state: 'needs_verification',
    reasonEn: 'Information requires verification against official admission circulars for the current academic year.',
    reasonMr: 'चालू शैक्षणिक वर्षाच्या अधिकृत माहितीपत्रकावरून माहिती तपासून घेणे आवश्यक.',
    missingItemsEn: ['Official authority notification confirmation'],
    missingItemsMr: ['संबंधित प्राधिकरणाची अधिकृत अधिसूचना'],
    recommendationEn: 'Check the linked official source before finalizing your application.',
    recommendationMr: 'अंतिम निर्णय घेण्यापूर्वी दिलेल्या अधिकृत वेबसाइटला भेट द्या.'
  };
}

export interface SkillGapAnalysis {
  role: CareerRole;
  demonstratedSkills: string[];
  practiceNeededSkills: string[];
  unassessedSkills: string[];
  coveragePercentage: number;
  rubricNotesEn: string;
  rubricNotesMr: string;
}

export function calculateSkillGap(
  role: CareerRole,
  profile: LearnerProfile
): SkillGapAnalysis {
  const demonstrated = new Set<string>();
  const practiceNeeded = new Set<string>();
  const unassessed = new Set<string>();

  // Collect evidence from passport
  const evidenceSkills = new Set(
    profile.evidencePassport
      .filter((e) => e.status === 'completed' || e.status === 'reviewed')
      .map((e) => e.skillName.toLowerCase())
  );

  const knownLower = (profile.knownSkills || []).map((s) => s.toLowerCase());

  role.coreCompetencies.forEach((comp) => {
    const compLower = comp.toLowerCase();
    const hasEvidence = Array.from(evidenceSkills).some(
      (ev) => ev.includes(compLower) || compLower.includes(ev)
    );
    const isSelfReported = knownLower.some(
      (k) => k.includes(compLower) || compLower.includes(k)
    );

    if (hasEvidence) {
      demonstrated.add(comp);
    } else if (isSelfReported) {
      practiceNeeded.add(comp);
    } else {
      unassessed.add(comp);
    }
  });

  const total = role.coreCompetencies.length || 1;
  const coverage = Math.round(
    ((demonstrated.size * 1.0 + practiceNeeded.size * 0.4) / total) * 100
  );

  return {
    role,
    demonstratedSkills: Array.from(demonstrated),
    practiceNeededSkills: Array.from(practiceNeeded),
    unassessedSkills: Array.from(unassessed),
    coveragePercentage: Math.min(100, Math.max(0, coverage)),
    rubricNotesEn:
      'Calculated strictly from submitted Proof-of-Skill passport items and self-reported competencies. Self-reports require practical task submission to be counted as demonstrated.',
    rubricNotesMr:
      'कौशल्य पासपोर्टमधील प्रत्यक्ष पुरावे आणि नोंदवलेल्या कौशल्यांवरून मोजलेले. केवळ स्वतः नोंदवलेल्या कौशल्यांना प्रत्यक्ष पुराव्यासाठी सरावाची आवश्यकता असते.'
  };
}
