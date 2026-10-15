import React from 'react';
import { useApp } from '../../context/AppContext';
import { UI_TRANSLATIONS } from '../../data/translations';
import { CAREER_ROLES } from '../../data/careers';
import { MAHARASHTRA_EDUCATION_ROUTES, OFFICIAL_SOURCES } from '../../data/pathways';
import { EligibilityBadge } from '../common/EligibilityBadge';
import {
  Compass,
  ArrowRight,
  BookOpen,
  MapPin,
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Layers,
  SlidersHorizontal,
  ChevronRight,
  GraduationCap,
  Wrench,
  Briefcase
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { language, setOnboardingOpen, setActiveTab, selectDemoPersona, setActiveCareerModal } = useApp();
  const isMr = language === 'mr';
  const t = UI_TRANSLATIONS[language];

  const sampleRoles = CAREER_ROLES.slice(0, 3);
  const sampleComparison = [
    MAHARASHTRA_EDUCATION_ROUTES[0], // FYJC Science
    MAHARASHTRA_EDUCATION_ROUTES[1], // Polytechnic Diploma
    MAHARASHTRA_EDUCATION_ROUTES[2], // ITI Trade
  ];

  return (
    <div className="space-y-20 pb-12 animate-in fade-in">
      {/* Editorial Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF8F3] to-[#FAF8F3] pt-12 sm:pt-20 pb-16 border-b border-[#e2dacb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#168C86]/10 text-[#168C86] border border-[#168C86]/20">
                <span className="w-2 h-2 rounded-full bg-[#F2A541]"></span>
                <span>{t.categoryLabel}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#101828] tracking-tight leading-[1.15]">
                {isMr ? (
                  <>
                    तुमचे भविष्य हे{' '}
                    <span className="text-[#168C86]">केवळ अनुमानावर</span>{' '}
                    अवलंबून नसावे.
                  </>
                ) : (
                  <>
                    Your future deserves{' '}
                    <span className="text-[#168C86]">more than a guess.</span>
                  </>
                )}
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
                {isMr
                  ? 'करिअर पर्याय शोधा, अधिकृत शिक्षण मार्ग समजून घ्या आणि स्वतःच्या टप्प्यानुसार वास्तववादी पुढील पाऊल उचला — शालेय शिक्षणापासून ते पहिल्या नोकरीपर्यंत.'
                  : 'Explore careers, understand your education options, and build a realistic next step — from school to your first career in Maharashtra.'}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => setOnboardingOpen(true)}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#101828] hover:bg-[#243B64] text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <span>{t.ctaFindDirection}</span>
                  <ArrowRight className="w-4 h-4 text-[#F2A541]" />
                </button>

                <button
                  onClick={() => setActiveTab('explore')}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-[#101828] border border-[#d6ccb8] rounded-xl text-sm font-bold transition-all shadow-2xs"
                >
                  <BookOpen className="w-4 h-4 text-[#168C86]" />
                  <span>{t.ctaExploreCareers}</span>
                </button>
              </div>

              {/* Trust & Source Note */}
              <div className="flex items-center gap-2 text-xs text-[#64748B] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#168C86] shrink-0" />
                <span>
                  {isMr
                    ? 'MSBSHSE, DTE, DVET व राज्य CET सेलच्या नियमांवर आधारित.'
                    : 'Grounded in official MSBSHSE, DTE, DVET, and State CET Cell records.'}
                </span>
              </div>
            </div>

            {/* Right Graphic: Learner Journey Flow Diagram */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-[#e2dacb] shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {isMr ? 'शिक्षणाचा वास्तववादी प्रवास' : 'The Explainable Learner Journey'}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>

              {/* 4 Interactive Journey Nodes */}
              <div className="space-y-3">
                {[
                  {
                    step: '1',
                    titleEn: 'Curiosity & Awareness',
                    titleMr: 'रस आणि आवड शोध',
                    descEn: 'Connect interests and school subjects to authentic occupations.',
                    descMr: 'शाळेतील विषयांचा विविध व्यावसायिक क्षेत्रांशी संबंध.',
                    bg: 'bg-amber-50 border-amber-200 text-amber-900',
                  },
                  {
                    step: '2',
                    titleEn: 'Education Route Comparison',
                    titleMr: 'शिक्षण पर्यायांची तुलना',
                    descEn: 'Compare 11th Science, Polytechnic Diploma, or ITI with verified fees & prerequisites.',
                    descMr: '११वी सायन्स, पॉलिटेक्निक आणि ITI ची अधिकृत नियमांनुसार तुलना.',
                    bg: 'bg-teal-50 border-teal-200 text-teal-900',
                  },
                  {
                    step: '3',
                    titleEn: 'Practical Skill Gap',
                    titleMr: 'कौशल्य तफावत व सराव',
                    descEn: 'Identify specific competencies needed for junior industry roles.',
                    descMr: 'सुरुवातीच्या कामासाठी आवश्यक असणाऱ्या कौशल्यांचे निदान.',
                    bg: 'bg-indigo-50 border-indigo-200 text-indigo-900',
                  },
                  {
                    step: '4',
                    titleEn: 'Proof-of-Skill Passport',
                    titleMr: 'कौशल्य पुरावा पासपोर्ट',
                    descEn: 'Record project deliverables with honest evidence classification.',
                    descMr: 'प्रत्यक्ष कामाचा व प्रोजेक्ट्सचा प्रामाणिक नोंदवलेला संग्रह.',
                    bg: 'bg-emerald-50 border-emerald-200 text-emerald-900',
                  },
                ].map((node) => (
                  <div
                    key={node.step}
                    className={`p-3.5 rounded-xl border flex items-start gap-3 ${node.bg}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                      {node.step}
                    </span>
                    <div>
                      <div className="font-bold text-xs sm:text-sm">
                        {isMr ? node.titleMr : node.titleEn}
                      </div>
                      <p className="text-[11px] opacity-85 leading-snug mt-0.5">
                        {isMr ? node.descMr : node.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Find Your Stage" Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#168C86]/10 text-[#168C86] mb-2">
            {isMr ? 'शिक्षणाचा टप्पा' : 'Tailored by Milestone'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828]">
            {t.stageHeadline}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-2">
            {t.stageSubhead}
          </p>
        </div>

        {/* 6 Stage Persona Quick Launch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              id: 'demo_class_9',
              stageKey: 'class_8_9',
              name: 'Classes 8–9',
              personaName: 'Tanvi (Pune)',
              headlineEn: 'Exploring Interests',
              headlineMr: 'आवडीचा शोध व ओळख',
              descEn: 'Connect school subjects with daily adult work; explore design and tech families.',
              descMr: 'शाळेतील विषयांचा कामाशी संबंध; डिझाइन व सायन्स क्षेत्रांचा शोध.',
              icon: Compass,
              accent: 'border-amber-200 bg-amber-50/40 text-amber-900',
            },
            {
              id: 'demo_class_10',
              stageKey: 'class_10',
              name: 'Class 10',
              personaName: 'Aarav (Nashik)',
              headlineEn: 'Choosing Next Step',
              headlineMr: 'पुढील मार्गाची निवड',
              descEn: 'Side-by-side comparison of 11th-12th Science vs Polytechnic vs ITI trade.',
              descMr: '११वी सायन्स, पॉलिटेक्निक आणि ITI ची अधिकृत नियमांनुसार तुलना.',
              icon: Layers,
              accent: 'border-teal-200 bg-teal-50/40 text-teal-900',
            },
            {
              id: 'demo_class_12',
              stageKey: 'class_11_12',
              name: 'Classes 11–12',
              personaName: 'Sneha (Nagpur)',
              headlineEn: 'Higher Education Planning',
              headlineMr: 'उच्च शिक्षणाची दिशा',
              descEn: 'Evaluating MHT-CET, 4-year B.Tech vs 3-year B.Sc Computer Science.',
              descMr: 'MHT-CET प्रवेश परीक्षा, इंजिनिअरिंग व B.Sc पदव्यांचा समतोल मार्ग.',
              icon: BookOpen,
              accent: 'border-indigo-200 bg-indigo-50/40 text-indigo-900',
            },
            {
              id: 'demo_diploma_iti',
              stageKey: 'diploma_iti',
              name: 'Diploma / ITI',
              personaName: 'Rohit (Chhatrapati Sambhaji Nagar)',
              headlineEn: 'Technical Progression',
              headlineMr: 'थेट इंजिनिअरिंग वा अप्रेंटिसशिप',
              descEn: 'Direct Second Year (DSE) lateral B.Tech entry and NATS industrial training.',
              descMr: 'थेट द्वितीय वर्ष इंजिनिअरिंग (DSE) प्रवेश आणि NATS अप्रेंटिसशिप.',
              icon: Wrench,
              accent: 'border-purple-200 bg-purple-50/40 text-purple-900',
            },
            {
              id: 'demo_undergrad',
              stageKey: 'undergraduate',
              name: 'Undergraduate',
              personaName: 'Aniket (Mumbai)',
              headlineEn: 'Career Readiness',
              headlineMr: 'करिअर तयारी व प्रोजेक्ट्स',
              descEn: 'Degree-to-career mapping, SQL/Python skill diagnostic, and portfolio projects.',
              descMr: 'पदवी ते नोकरीचे मॅपिंग, SQL/डेटा कौशल्ये आणि प्रोजेक्ट पासपोर्ट.',
              icon: GraduationCap,
              accent: 'border-blue-200 bg-blue-50/40 text-blue-900',
            },
            {
              id: 'demo_graduate',
              stageKey: 'graduate',
              name: 'Graduate',
              personaName: 'Priyanka (Kolhapur)',
              headlineEn: 'Transition & Preparation',
              headlineMr: 'स्पर्धा परीक्षा व नोकरी संक्रमण',
              descEn: 'Comparing MPSC State Services vs corporate analytics and business operations.',
              descMr: 'MPSC स्पर्धा परीक्षा आणि कॉर्पोरेट बिझनेस विश्लेषक पदांची तुलना.',
              icon: Briefcase,
              accent: 'border-slate-200 bg-slate-50/60 text-slate-900',
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl border border-[#e2dacb] shadow-2xs hover:shadow-md transition-all p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800">
                      {card.name}
                    </span>
                    <span className="text-[11px] text-[#168C86] font-semibold">
                      Demo: {card.personaName}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#101828] mb-1">
                    {isMr ? card.headlineMr : card.headlineEn}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {isMr ? card.descMr : card.descEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      selectDemoPersona(card.id);
                      setActiveTab('mypath');
                    }}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#101828] hover:text-[#168C86] transition-colors"
                  >
                    <span>{isMr ? 'हा मार्ग पहा' : 'Explore This Path'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Differentiating Journey: Post-10th Route Comparison Preview */}
      <section className="bg-white py-16 border-y border-[#e2dacb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-2">
                {isMr ? 'महत्त्वाचा निर्णय' : 'Core Differentiating Journey'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828]">
                {isMr ? 'दहावीनंतरच्या पर्यायांची प्रत्यक्ष तुलना' : 'Interactive Post-Class-10 Route Comparison'}
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-2xl">
                {isMr
                  ? 'कोणतीही एक शाखा श्रेष्ठ नसते; तुमच्या आवडी, वेळ आणि बजेटनुसार काय व्यवहार्य ठरते ते पहा.'
                  : 'No stream is inherently superior. Each has distinct prerequisites, durations, and career routes in Maharashtra.'}
              </p>
            </div>

            <button
              onClick={() => setActiveTab('mypath')}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#168C86] hover:underline"
            >
              <span>{isMr ? 'पूर्ण मार्गदर्शक उघडा' : 'Open Full Route Explorer'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Side by Side Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleComparison.map((r) => (
              <div
                key={r.id}
                className="bg-[#FAF8F3] rounded-2xl border border-[#e2dacb] p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#243B64]">
                      {r.code}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {isMr ? r.durationDisplayMr : r.durationDisplayEn}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#101828] mb-1">
                    {isMr ? r.titleMr : r.titleEn}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                    {isMr ? r.summaryMr : r.summaryEn}
                  </p>

                  <div className="text-[11px] font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 mb-3">
                    <span className="text-slate-400 block">{isMr ? 'वार्षिक खर्च:' : 'Cost Band:'}</span>
                    {isMr ? r.costDisplayMr : r.costDisplayEn}
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      {isMr ? 'महत्त्वाचे फायदे' : 'Key Advantage'}
                    </span>
                    <p className="text-xs text-slate-800 leading-snug">
                      {(isMr ? r.advantagesMr : r.advantagesEn)[0]}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500">
                    Source: {r.primarySource.authority}
                  </span>
                  <button
                    onClick={() => setActiveTab('mypath')}
                    className="font-bold text-[#168C86] hover:underline"
                  >
                    {isMr ? 'तुलना करा' : 'Compare'} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Awareness Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#168C86]/10 text-[#168C86] mb-2">
              {isMr ? 'करिअर जाणीव' : 'Career Awareness'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828]">
              {isMr ? 'रोजच्या कामाचे स्वरूप समजून घ्या' : 'Discover What Careers Involve Daily'}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-xl">
              {isMr
                ? 'पदवी मिळण्यापूर्वीच त्या कामातील दिवस कसा असतो आणि कोणते कौशल्य लागते ते पहा.'
                : 'Understand actual daily tasks and foundational skills before committing years to an educational route.'}
            </p>
          </div>

          <button
            onClick={() => setActiveTab('explore')}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#168C86] hover:underline"
          >
            <span>{isMr ? 'सर्व करिअर प्रोफाइल पहा' : 'View All Career Profiles'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleRoles.map((role) => (
            <div
              key={role.id}
              className="bg-white rounded-2xl border border-[#e2dacb] p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-semibold bg-[#168C86]/10 text-[#168C86] px-2.5 py-0.5 rounded">
                  {isMr ? role.familyNameMr : role.familyNameEn}
                </span>

                <h3 className="font-bold text-lg text-[#101828]">
                  {isMr ? role.titleMr : role.titleEn}
                </h3>

                <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                  {isMr ? role.summaryMr : role.summaryEn}
                </p>

                <div className="pt-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {isMr ? 'पायाभूत कौशल्ये' : 'Core Skills'}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {role.foundationalSkills.slice(0, 3).map((sk, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-[#FAF8F3] px-2 py-0.5 rounded border border-slate-200 text-slate-700"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveCareerModal(role)}
                  className="text-xs font-bold text-[#101828] hover:text-[#168C86] flex items-center gap-1"
                >
                  <span>{isMr ? 'सविस्तर पहा' : 'Inspect Role'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology & Transparency */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F3] border border-[#e2dacb] rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-2.5 text-[#168C86]">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-wider">
              {t.methodologyTitle}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
            {t.methodologyDesc}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#e2dacb] text-xs">
            <div>
              <span className="font-bold text-[#101828] block">MSBSHSE Pune</span>
              <span className="text-slate-500 text-[11px]">Class 10 & 12 Syllabi</span>
            </div>
            <div>
              <span className="font-bold text-[#101828] block">DTE Maharashtra</span>
              <span className="text-slate-500 text-[11px]">Polytechnic & DSE CAP</span>
            </div>
            <div>
              <span className="font-bold text-[#101828] block">DVET Maharashtra</span>
              <span className="text-slate-500 text-[11px]">417+ ITI Trade Admissions</span>
            </div>
            <div>
              <span className="font-bold text-[#101828] block">State CET Cell</span>
              <span className="text-slate-500 text-[11px]">MHT-CET & Professional CAP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] tracking-tight">
          {isMr
            ? 'आजच तुमच्या शिक्षणाची अचूक दिशा निश्चित करा.'
            : 'Find a realistic direction suited to where you are today.'}
        </h2>
        <p className="text-sm sm:text-base text-[#64748B] max-w-xl mx-auto">
          {isMr
            ? 'कोणत्याही खात्याची आवश्यकता नाही. थेट सुरू करा आणि शैक्षणिक पर्यायांचा शोध घ्या.'
            : 'No account required to begin exploring. Start in guest mode and save your pathway locally.'}
        </p>
        <button
          onClick={() => setOnboardingOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#101828] hover:bg-[#243B64] text-white rounded-xl text-base font-bold shadow-lg hover:shadow-xl transition-all"
        >
          <span>{t.ctaFindDirection}</span>
          <ArrowRight className="w-5 h-5 text-[#F2A541]" />
        </button>
      </section>
    </div>
  );
};
