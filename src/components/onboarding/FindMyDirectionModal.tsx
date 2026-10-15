import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { LearnerStage, Language, LearnerProfile } from '../../types';
import { UI_TRANSLATIONS } from '../../data/translations';
import {
  X,
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  GraduationCap,
  Wrench,
  BookOpen,
  Briefcase,
  Sparkles,
  MapPin,
  Clock,
  Layers
} from 'lucide-react';

interface StageOption {
  stage: LearnerStage;
  titleEn: string;
  titleMr: string;
  descEn: string;
  descMr: string;
  icon: any;
}

const STAGE_OPTIONS: StageOption[] = [
  {
    stage: 'class_8_9',
    titleEn: 'Classes 8–9 — Exploring my interests',
    titleMr: 'इयत्ता ८वी–९वी — माझ्या आवडीचा शोध',
    descEn: 'Discover broad career families and connect school subjects to everyday work.',
    descMr: 'विविध करिअर क्षेत्रांची ओळख आणि शाळेतील विषयांचा प्रत्यक्ष कामाशी संबंध.',
    icon: Compass,
  },
  {
    stage: 'class_10',
    titleEn: 'Class 10 — Choosing my next step',
    titleMr: 'इयत्ता १०वी — पुढील मार्गाची निवड',
    descEn: 'Compare FYJC Science, Commerce, Arts, Polytechnic Diploma, and ITI trades.',
    descMr: '११वी सायन्स, कॉमर्स, आर्ट्स, पॉलिटेक्निक आणि ITI या पर्यायांची वस्तुनिष्ठ तुलना.',
    icon: Layers,
  },
  {
    stage: 'class_11_12',
    titleEn: 'Classes 11–12 — Exploring future options',
    titleMr: 'इयत्ता ११वी–१२वी — उच्च शिक्षणाची दिशा',
    descEn: 'Evaluate degree courses, state/national entrance exams (MHT-CET/JEE/NEET), or training.',
    descMr: 'पदवी अभ्यासक्रम, प्रवेश परीक्षा (MHT-CET, NEET) किंवा व्यावसायिक पर्यायांची तयारी.',
    icon: BookOpen,
  },
  {
    stage: 'diploma_iti',
    titleEn: 'Diploma / ITI / Vocational education',
    titleMr: 'पॉलिटेक्निक डिप्लोमा / ITI / व्होकेशनल',
    descEn: 'Explore Direct Second Year (DSE) lateral entry B.Tech, CITS, or apprenticeships.',
    descMr: 'थेट द्वितीय वर्ष इंजिनिअरिंग (DSE), NATS अप्रेंटिसशिप किंवा औद्योगिक नोकऱ्या.',
    icon: Wrench,
  },
  {
    stage: 'undergraduate',
    titleEn: 'Undergraduate student',
    titleMr: 'पदवीपूर्व विद्यार्थी (Undergraduate)',
    descEn: 'Build role-ready skills, complete practical projects, and prepare portfolios.',
    descMr: 'प्रत्यक्ष कौशल्ये आत्मसात करणे, प्रोजेक्ट पोर्टफोलिओ आणि इंटर्नशिप तयारी.',
    icon: GraduationCap,
  },
  {
    stage: 'graduate',
    titleEn: 'Graduate',
    titleMr: 'पदवीधर (Graduate)',
    descEn: 'Prepare for entry-level roles, competitive exams (MPSC/Banking), or postgraduate study.',
    descMr: 'नोकरीची तयारी, MPSC/बँकिंग स्पर्धा परीक्षा किंवा पदव्युत्तर शिक्षणाचे मार्ग.',
    icon: Briefcase,
  },
  {
    stage: 'career_changer',
    titleEn: 'Changing careers / returning to education',
    titleMr: 'करिअर बदल / शिक्षणात पुनरागमन',
    descEn: 'Identify transferable skills and target fast reskilling pathways.',
    descMr: 'मागील कौशल्यांचा उपयोग करून नव्या डिजिटल किंवा तांत्रिक क्षेत्रात संक्रमण.',
    icon: Sparkles,
  },
];

export const FindMyDirectionModal: React.FC = () => {
  const { onboardingOpen, setOnboardingOpen, language, profile, setProfile, setActiveTab } = useApp();

  const [step, setStep] = useState<number>(1);
  const [selectedStage, setSelectedStage] = useState<LearnerStage | null>(null);

  // Form State
  const [name, setName] = useState<string>(profile.name || '');
  const [locationCity, setLocationCity] = useState<string>(profile.locationCity || 'Pune');
  const [boardOrUniv, setBoardOrUniv] = useState<string>(profile.educationBoard || 'MSBSHSE (State Board)');
  const [currentDetails, setCurrentDetails] = useState<string>(profile.currentClassOrYear || '');
  const [streamOrTrade, setStreamOrTrade] = useState<string>(profile.currentStreamOrTrade || '');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(profile.enjoyedSubjects || []);
  const [budgetBand, setBudgetBand] = useState<'minimal' | 'budget_conscious' | 'moderate' | 'flexible'>(
    profile.budgetPreference || 'budget_conscious'
  );
  const [locationPref, setLocationPref] = useState<'home_district' | 'divisional_center' | 'metro_mumbai_pune' | 'any'>(
    profile.locationPreference || 'home_district'
  );
  const [weeklyHours, setWeeklyHours] = useState<number>(profile.timeWeeklyHours || 10);

  if (!onboardingOpen) return null;

  const isMr = language === 'mr';

  const handleStageSelect = (stg: LearnerStage) => {
    setSelectedStage(stg);
    setStep(2);
  };

  const toggleSubject = (sub: string) => {
    if (selectedSubjects.includes(sub)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== sub));
    } else {
      setSelectedSubjects([...selectedSubjects, sub]);
    }
  };

  const handleFinish = () => {
    const stage = selectedStage || profile.currentStage;
    const updatedProfile: LearnerProfile = {
      ...profile,
      id: profile.isDemoProfile ? `user_${Date.now()}` : profile.id,
      name: name.trim() || (isMr ? 'विद्यार्थी' : 'Learner'),
      locationCity: locationCity.trim() || 'Maharashtra',
      currentStage: stage,
      educationBoard: boardOrUniv,
      currentClassOrYear: currentDetails || (isMr ? 'नोंदणीकृत' : 'Enrolled'),
      currentStreamOrTrade: streamOrTrade,
      enjoyedSubjects: selectedSubjects.length > 0 ? selectedSubjects : ['General Studies'],
      budgetPreference: budgetBand,
      locationPreference: locationPref,
      timeWeeklyHours: weeklyHours,
      isDemoProfile: false, // Now user's own profile!
    };

    setProfile(updatedProfile);
    setOnboardingOpen(false);
    setActiveTab('mypath'); // Take learner directly to their customized pathway map!
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
        {/* Modal Header */}
        <div className="bg-[#101828] text-white p-5 sm:p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#168C86] flex items-center justify-center text-white">
              <Compass className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                {isMr ? 'माझी दिशा शोधा (Find My Direction)' : 'Find My Direction'}
              </h2>
              <p className="text-xs text-slate-300">
                {isMr
                  ? 'तुमच्या शिक्षणाचा योग्य टप्पा निवडून वास्तववादी मार्गदर्शन मिळवा'
                  : 'Get a realistic, explainable education pathway tailored to your stage'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setOnboardingOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-[#FAF8F3] px-6 py-2 border-b border-[#e5dfd3] flex items-center justify-between text-xs text-[#64748B]">
          <span>
            {step === 1
              ? isMr
                ? 'टप्पा १: शिक्षणाचा स्तर'
                : 'Step 1 of 2: Education Milestone'
              : isMr
              ? 'टप्पा २: सविस्तर माहिती'
              : 'Step 2 of 2: Context & Preferences'}
          </span>
          <div className="flex items-center gap-1.5">
            <span className={`w-6 h-1.5 rounded-full ${step === 1 ? 'bg-[#168C86]' : 'bg-emerald-600'}`}></span>
            <span className={`w-6 h-1.5 rounded-full ${step === 2 ? 'bg-[#168C86]' : 'bg-slate-300'}`}></span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {step === 1 && (
            <div>
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-bold text-[#101828]">
                  {isMr
                    ? 'तुम्ही सध्या तुमच्या शिक्षणाच्या कोणत्या टप्प्यावर आहात?'
                    : 'Where are you in your education journey?'}
                </h3>
                <p className="text-xs text-[#64748B]">
                  {isMr
                    ? 'कृपया तुमचा अचूक टप्पा निवडा. आम्ही प्रत्येकाला एकच साचेबद्ध सल्ला देत नाही.'
                    : 'Select your stage. We will ask only the questions relevant to you.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STAGE_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedStage === opt.stage;
                  return (
                    <button
                      key={opt.stage}
                      onClick={() => handleStageSelect(opt.stage)}
                      className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between group ${
                        isSelected
                          ? 'border-[#168C86] bg-[#168C86]/5 ring-2 ring-[#168C86]'
                          : 'border-[#e2dacb] bg-[#FAF8F3]/60 hover:bg-white hover:border-[#168C86]/60 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-[#168C86] text-white' : 'bg-white text-[#243B64] border border-[#e2dacb]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#101828] group-hover:text-[#168C86] transition-colors">
                            {isMr ? opt.titleMr : opt.titleEn}
                          </div>
                          <p className="text-xs text-[#64748B] mt-1 leading-snug">
                            {isMr ? opt.descMr : opt.descEn}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-end text-xs font-semibold text-[#168C86] mt-2">
                        <span>{isMr ? 'निवडा' : 'Select'}</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && selectedStage && (
            <div className="space-y-6">
              <div className="bg-[#FAF8F3] p-4 rounded-xl border border-[#e2dacb] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                    {isMr ? 'निवडलेला टप्पा' : 'Selected Stage'}
                  </span>
                  <div className="text-sm font-bold text-[#101828]">
                    {STAGE_OPTIONS.find((s) => s.stage === selectedStage)?.[isMr ? 'titleMr' : 'titleEn']}
                  </div>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-[#168C86] hover:underline"
                >
                  {isMr ? 'बदला' : 'Change'}
                </button>
              </div>

              {/* Basic Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#101828] mb-1">
                    {isMr ? 'तुमचे नाव' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isMr ? 'उदा. राहुल / स्नेहा' : 'e.g. Rahul / Sneha'}
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#168C86]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#101828] mb-1">
                    {isMr ? 'तुमचा जिल्हा / शहर (महाराष्ट्र)' : 'Your City / District in Maharashtra'}
                  </label>
                  <input
                    type="text"
                    value={locationCity}
                    onChange={(e) => setLocationCity(e.target.value)}
                    placeholder="Pune, Nashik, Mumbai, Nagpur..."
                    className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#168C86]"
                  />
                </div>
              </div>

              {/* Stage-Specific Fields */}
              {selectedStage === 'class_8_9' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#101828] mb-1">
                      {isMr ? 'सध्याचा वर्ग' : 'Current Class'}
                    </label>
                    <select
                      value={currentDetails}
                      onChange={(e) => setCurrentDetails(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#168C86]"
                    >
                      <option value="Class 8">Class 8 (इयत्ता ८वी)</option>
                      <option value="Class 9">Class 9 (इयत्ता ९वी)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#101828] mb-2">
                      {isMr ? 'तुम्हाला शाळेत आवडणारे विषय (काही निवडा)' : 'Subjects you enjoy in school (Select all that apply)'}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Science', 'Mathematics', 'Drawing & Craft', 'English', 'Marathi', 'History & Civics', 'Geography', 'Computers'].map(
                        (sub) => (
                          <button
                            key={sub}
                            type="button"
                            onClick={() => toggleSubject(sub)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                              selectedSubjects.includes(sub)
                                ? 'bg-[#168C86] text-white border-[#168C86]'
                                : 'bg-[#FAF8F3] text-slate-700 border-slate-300 hover:border-slate-400'
                            }`}
                          >
                            {sub}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {selectedStage === 'class_10' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#101828] mb-1">
                      {isMr ? 'तुमचे शिक्षण मंडळ' : 'Current Education Board'}
                    </label>
                    <select
                      value={boardOrUniv}
                      onChange={(e) => setBoardOrUniv(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#168C86]"
                    >
                      <option value="MSBSHSE (State Board)">MSBSHSE (Maharashtra State Board)</option>
                      <option value="CBSE">CBSE Board</option>
                      <option value="ICSE">ICSE Board</option>
                      <option value="Other">Other / Open Board</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#101828] mb-2">
                      {isMr ? 'तुम्हाला कोणत्या पर्यायांची तुलना करायची आहे?' : 'What routes do you want to explore after 10th?'}
                    </label>
                    <p className="text-xs text-[#64748B] mb-2">
                      {isMr
                        ? 'आम्ही ११वी सायन्स, कॉमर्स, आर्ट्स, ३-वर्षीय पॉलिटेक्निक डिप्लोमा आणि ITI या सर्वांची थेट तुलना उपलब्ध करून देऊ.'
                        : 'We provide side-by-side comparison for 11th Science, Commerce, Arts, Polytechnic Diploma, and ITI trades.'}
                    </p>
                  </div>
                </div>
              )}

              {selectedStage === 'class_11_12' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#101828] mb-1">
                      {isMr ? 'सध्याची शाखा आणि विषय' : 'Current Stream & Subjects'}
                    </label>
                    <input
                      type="text"
                      value={streamOrTrade}
                      onChange={(e) => setStreamOrTrade(e.target.value)}
                      placeholder="e.g. Science (PCM + Comp Sci), Commerce, Arts..."
                      className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#168C86]"
                    />
                  </div>
                </div>
              )}

              {selectedStage === 'diploma_iti' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#101828] mb-1">
                      {isMr ? 'तुमचा डिप्लोमा / ITI ट्रेड' : 'Your Diploma Branch or ITI Trade'}
                    </label>
                    <input
                      type="text"
                      value={streamOrTrade}
                      onChange={(e) => setStreamOrTrade(e.target.value)}
                      placeholder="e.g. Mechanical Diploma (MSBTE), ITI Electrician (NCVT)..."
                      className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#168C86]"
                    />
                  </div>
                </div>
              )}

              {selectedStage === 'undergraduate' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#101828] mb-1">
                      {isMr ? 'पदवी आणि वर्ष' : 'Degree & Current Year'}
                    </label>
                    <input
                      type="text"
                      value={currentDetails}
                      onChange={(e) => setCurrentDetails(e.target.value)}
                      placeholder="e.g. 3rd Year B.Sc IT / 2nd Year B.E. / B.Com..."
                      className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#168C86]"
                    />
                  </div>
                </div>
              )}

              {selectedStage === 'graduate' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#101828] mb-1">
                      {isMr ? 'सर्वोच्च पदवी आणि उत्तीर्ण वर्ष' : 'Highest Degree & Year of Passing'}
                    </label>
                    <input
                      type="text"
                      value={currentDetails}
                      onChange={(e) => setCurrentDetails(e.target.value)}
                      placeholder="e.g. B.Com (2025), B.E. Computer (2024)..."
                      className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#168C86]"
                    />
                  </div>
                </div>
              )}

              {/* Constraints: Budget Band & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200">
                <div>
                  <label className="block text-xs font-bold text-[#101828] mb-1">
                    {isMr ? 'अंदाजे वार्षिक बजेट प्राधान्य' : 'Approximate Annual Budget Band'}
                  </label>
                  <select
                    value={budgetBand}
                    onChange={(e: any) => setBudgetBand(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#168C86]"
                  >
                    <option value="minimal">
                      {isMr ? 'अत्यल्प (शासकीय सवलत / ₹१०,००० आत)' : 'Subsidized / Govt (Under ₹10k/yr)'}
                    </option>
                    <option value="budget_conscious">
                      {isMr ? 'किफायतशीर (₹१०,००० ते ₹३०,०००/वर्ष)' : 'Budget Conscious (₹10k – ₹30k/yr)'}
                    </option>
                    <option value="moderate">
                      {isMr ? 'मध्यम (₹३०,००० ते ₹१.२ लाख/वर्ष)' : 'Moderate (₹30k – ₹1.2L/yr)'}
                    </option>
                    <option value="flexible">
                      {isMr ? 'लवचिक / खाजगी कॉलेज शक्य' : 'Flexible / Private Institution'}
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#101828] mb-1">
                    {isMr ? 'अभ्यासासाठी उपलब्ध साप्ताहिक वेळ' : 'Available Weekly Practice Hours'}
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={4}
                      max={35}
                      step={2}
                      value={weeklyHours}
                      onChange={(e) => setWeeklyHours(Number(e.target.value))}
                      className="w-full accent-[#168C86]"
                    />
                    <span className="font-mono font-bold text-xs bg-slate-100 px-2.5 py-1 rounded">
                      {weeklyHours} hrs/wk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF8F3] px-6 py-4 border-t border-[#e2dacb] flex justify-between items-center">
          {step === 2 ? (
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-1.5 px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isMr ? 'मागे' : 'Back'}</span>
            </button>
          ) : (
            <div></div>
          )}

          {step === 1 ? (
            <button
              onClick={() => setOnboardingOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              {isMr ? 'रद्द करा' : 'Cancel'}
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="flex items-center gap-2 bg-[#101828] hover:bg-[#243B64] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-xs transition-colors"
            >
              <span>{isMr ? 'माझा मार्ग तयार करा' : 'Build My Pathway'}</span>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
