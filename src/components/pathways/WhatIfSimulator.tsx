import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { MAHARASHTRA_EDUCATION_ROUTES } from '../../data/pathways';
import { CAREER_ROLES } from '../../data/careers';
import { EligibilityBadge } from '../common/EligibilityBadge';
import { evaluateRouteEligibility } from '../../services/eligibilityEngine';
import {
  SlidersHorizontal,
  Clock,
  Coins,
  MapPin,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export const WhatIfSimulator: React.FC = () => {
  const { language, profile, setProfile, setActiveTab } = useApp();
  const isMr = language === 'mr';

  // Simulator Inputs (initialized from profile)
  const [selectedRouteId, setSelectedRouteId] = useState<string>(
    profile.savedRouteIds[0] || 'route_polytechnic_diploma'
  );
  const [weeklyHours, setWeeklyHours] = useState<number>(profile.timeWeeklyHours || 12);
  const [budgetBand, setBudgetBand] = useState<'minimal' | 'budget_conscious' | 'moderate' | 'flexible'>(
    profile.budgetPreference || 'budget_conscious'
  );
  const [locationPref, setLocationPref] = useState<'home_district' | 'divisional_center' | 'metro_mumbai_pune' | 'any'>(
    profile.locationPreference || 'home_district'
  );

  const selectedRoute = useMemo(() => {
    return (
      MAHARASHTRA_EDUCATION_ROUTES.find((r) => r.id === selectedRouteId) ||
      MAHARASHTRA_EDUCATION_ROUTES[0]
    );
  }, [selectedRouteId]);

  // Recalculate deterministic feasibility
  const simulationResult = useMemo(() => {
    const elig = evaluateRouteEligibility(selectedRoute, profile);

    // Budget Compatibility Check
    let budgetMatch = true;
    let budgetNoteEn = 'Compatible with selected budget band.';
    let budgetNoteMr = 'निवडलेल्या बजेटशी सुसंगत.';

    if (budgetBand === 'minimal' && selectedRoute.costBand !== 'very_low') {
      budgetMatch = false;
      budgetNoteEn = 'Route fees may exceed minimal threshold without government tuition waiver (TFWS / EBC).';
      budgetNoteMr = 'शासकीय सवलतींशिवाय (TFWS/EBC) खर्च मर्यादेपेक्षा जास्त असू शकतो.';
    } else if (budgetBand === 'budget_conscious' && selectedRoute.costBand === 'high') {
      budgetMatch = false;
      budgetNoteEn = 'Private college fees in this route may require education loan or scholarship.';
      budgetNoteMr = 'खाजगी संस्थांची फी बजेटपेक्षा जास्त असू शकते, शिष्यवृत्तीची पडताळणी करा.';
    }

    // Time Feasibility Check
    let timeFeasible = true;
    let timeNoteEn = 'Weekly hours are sufficient for regular curriculum coursework.';
    let timeNoteMr = 'अभ्यासासाठी उपलब्ध वेळ पुरेसा आहे.';

    if (weeklyHours < 10 && (selectedRoute.id === 'route_fyjc_science' || selectedRoute.id === 'route_btech_degree')) {
      timeFeasible = false;
      timeNoteEn = 'Under 10 hours/week is tight for competitive engineering entrance preparation.';
      timeNoteMr = 'प्रवेश परीक्षांच्या (CET/JEE) तयारीसाठी आठवड्याला १० तासांपेक्षा कमी वेळ अपुरा ठरू शकतो.';
    }

    // Location Analysis
    let locationNoteEn = 'Available across district and taluka level institutions in Maharashtra.';
    let locationNoteMr = 'महाराष्ट्रातील जिल्हा व तालुका पातळीवरील संस्थांमध्ये उपलब्ध.';

    if (locationPref === 'home_district' && selectedRoute.id === 'route_dse_lateral') {
      locationNoteEn = 'DSE lateral engineering seats depend on regional college vacancies in your district.';
      locationNoteMr = 'थेट द्वितीय वर्ष इंजिनिअरिंगच्या जागा तुमच्या जिल्ह्यातील महाविद्यालयांच्या रिक्त जागांवर अवलंबून असतात.';
    }

    return {
      elig,
      budgetMatch,
      budgetNoteEn,
      budgetNoteMr,
      timeFeasible,
      timeNoteEn,
      timeNoteMr,
      locationNoteEn,
      locationNoteMr,
    };
  }, [selectedRoute, profile, budgetBand, weeklyHours, locationPref]);

  const handleApplyToProfile = () => {
    const updated = {
      ...profile,
      timeWeeklyHours: weeklyHours,
      budgetPreference: budgetBand,
      locationPreference: locationPref,
      savedRouteIds: Array.from(new Set([selectedRoute.id, ...profile.savedRouteIds])),
    };
    setProfile(updated);
  };

  const handleResetToProfile = () => {
    setSelectedRouteId(profile.savedRouteIds[0] || 'route_polytechnic_diploma');
    setWeeklyHours(profile.timeWeeklyHours || 12);
    setBudgetBand(profile.budgetPreference || 'budget_conscious');
    setLocationPref(profile.locationPreference || 'home_district');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in">
      {/* Title */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-2">
          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600" />
          <span>{isMr ? 'पर्याय सिम्युलेटर' : 'What-If Scenario Simulator'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">
          {isMr ? 'परिस्थिती बदलून शक्यतांची चाचपणी करा' : 'Simulate Scenarios: Budget, Time & Routes'}
        </h1>
        <p className="text-sm sm:text-base text-[#64748B] mt-1 max-w-3xl">
          {isMr
            ? 'जर बजेट कमी असेल, वेळ मर्यादित असेल किंवा प्रवासाची मर्यादा असेल, तर कोणता मार्ग सर्वात व्यवहार्य ठरतो ते तपासा.'
            : 'Test how adjustments in your weekly study hours, budget band, or location preferences impact your educational feasibility.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column (Left) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#e2dacb] shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <h3 className="font-bold text-base text-[#101828]">
              {isMr ? 'चल बदल (Simulation Variables)' : 'Adjust Parameters'}
            </h3>
            <button
              onClick={handleResetToProfile}
              className="flex items-center gap-1 text-xs text-[#168C86] font-semibold hover:underline"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{isMr ? 'रीसेट' : 'Reset'}</span>
            </button>
          </div>

          {/* Route Selector */}
          <div>
            <label className="block text-xs font-bold text-[#101828] mb-1.5">
              {isMr ? 'तपासणीसाठी शैक्षणिक मार्ग निवडा' : 'Select Education Route'}
            </label>
            <select
              value={selectedRouteId}
              onChange={(e) => setSelectedRouteId(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#FAF8F3] border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#168C86]"
            >
              {MAHARASHTRA_EDUCATION_ROUTES.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.code} — {isMr ? r.titleMr : r.titleEn}
                </option>
              ))}
            </select>
          </div>

          {/* Weekly Time Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#101828] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#168C86]" />
                <span>{isMr ? 'अभ्यासासाठी साप्ताहिक वेळ' : 'Available Weekly Hours'}</span>
              </label>
              <span className="font-mono text-xs font-bold bg-[#FAF8F3] px-2 py-0.5 rounded border border-slate-200">
                {weeklyHours} hrs/week
              </span>
            </div>
            <input
              type="range"
              min={4}
              max={35}
              step={2}
              value={weeklyHours}
              onChange={(e) => setWeeklyHours(Number(e.target.value))}
              className="w-full accent-[#168C86]"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>4 hrs (Part-time)</span>
              <span>18 hrs (Balanced)</span>
              <span>35 hrs (Intensive)</span>
            </div>
          </div>

          {/* Budget Preference Band */}
          <div>
            <label className="block text-xs font-bold text-[#101828] mb-1.5 flex items-center gap-1">
              <Coins className="w-3.5 h-3.5 text-amber-600" />
              <span>{isMr ? 'वार्षिक बजेट मर्यादा' : 'Target Budget Band'}</span>
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: 'minimal', labelEn: 'Subsidized (<₹10k)', labelMr: 'सवलत (<₹१०,०००)' },
                { id: 'budget_conscious', labelEn: 'Low (₹10k–30k)', labelMr: 'किफायतशीर (१०k–३०k)' },
                { id: 'moderate', labelEn: 'Mid (₹30k–1.2L)', labelMr: 'मध्यम (३०k–१.२L)' },
                { id: 'flexible', labelEn: 'Flexible (>₹1.2L)', labelMr: 'लवचिक (>१.२L)' },
              ].map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBudgetBand(b.id as any)}
                  className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                    budgetBand === b.id
                      ? 'border-[#168C86] bg-[#168C86]/10 text-[#168C86] font-bold'
                      : 'border-slate-200 bg-[#FAF8F3] text-slate-700 hover:bg-white'
                  }`}
                >
                  {isMr ? b.labelMr : b.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Study Location Preference */}
          <div>
            <label className="block text-xs font-bold text-[#101828] mb-1.5 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-600" />
              <span>{isMr ? 'अभ्यासाचे पसंतीचे स्थान' : 'Study Location Preference'}</span>
            </label>
            <select
              value={locationPref}
              onChange={(e: any) => setLocationPref(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAF8F3] border border-slate-300 rounded-xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#168C86]"
            >
              <option value="home_district">{isMr ? 'स्वतःचा जिल्हा (Home District)' : 'Home District'}</option>
              <option value="divisional_center">{isMr ? 'विभागीय केंद्र (उदा. पुणे, नाशिक, नागपूर)' : 'Divisional HQ (Pune/Nashik/Nagpur)'}</option>
              <option value="metro_mumbai_pune">{isMr ? 'मेट्रो मुंबई / पुणे' : 'Metro Mumbai / Pune'}</option>
              <option value="any">{isMr ? 'कोणतेही (Any Location)' : 'Any Maharashtra Location'}</option>
            </select>
          </div>

          {/* Action to Apply */}
          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={handleApplyToProfile}
              className="w-full bg-[#101828] hover:bg-[#243B64] text-white py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{isMr ? 'हा पर्याय प्रोफाइलमध्ये जतन करा' : 'Apply Scenario to My Profile'}</span>
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-2">
              {isMr
                ? 'मूळ प्रोफाइल सुरक्षित राहते, आपण बदल लागू करेपर्यंत माहिती बदलत नाही.'
                : 'Original plan remains preserved until you explicitly apply changes.'}
            </p>
          </div>
        </div>

        {/* Dynamic Simulation Output (Right) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl border border-[#e2dacb] shadow-xs p-6 space-y-6">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                {isMr ? 'सिम्युलेशन निष्कर्ष' : 'Recalculated Route Feasibility'}
              </span>
              <h2 className="text-xl font-bold text-[#101828]">
                {isMr ? selectedRoute.titleMr : selectedRoute.titleEn}
              </h2>
              <p className="text-xs text-[#64748B] mt-1">
                {isMr ? selectedRoute.summaryMr : selectedRoute.summaryEn}
              </p>
            </div>

            {/* Eligibility Assessment */}
            <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#e2dacb] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {isMr ? 'नोंदवलेली पात्रता स्थिती' : 'Eligibility Assessment'}
                </span>
                <EligibilityBadge state={simulationResult.elig.state} language={language} size="sm" />
              </div>
              <p className="text-xs text-slate-800 leading-relaxed">
                {isMr ? simulationResult.elig.reasonMr : simulationResult.elig.reasonEn}
              </p>
              <div className="text-[11px] text-[#168C86] font-medium pt-1">
                {isMr ? simulationResult.elig.recommendationMr : simulationResult.elig.recommendationEn}
              </div>
            </div>

            {/* Variable Feasibility Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {isMr ? 'घटकांचे विश्लेषण (Constraint Breakdown)' : 'Constraint Breakdown'}
              </h4>

              {/* Budget Feasibility */}
              <div
                className={`p-3 rounded-xl border flex items-start gap-3 text-xs ${
                  simulationResult.budgetMatch
                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                    : 'bg-amber-50/70 border-amber-200 text-amber-950'
                }`}
              >
                {simulationResult.budgetMatch ? (
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-bold">
                    {isMr ? 'बजेट सुसंगतता' : 'Budget Band Compatibility'}:{' '}
                    <span className="font-normal">{isMr ? selectedRoute.costDisplayMr : selectedRoute.costDisplayEn}</span>
                  </div>
                  <p className="mt-0.5 text-[11px] opacity-90">
                    {isMr ? simulationResult.budgetNoteMr : simulationResult.budgetNoteEn}
                  </p>
                </div>
              </div>

              {/* Time Feasibility */}
              <div
                className={`p-3 rounded-xl border flex items-start gap-3 text-xs ${
                  simulationResult.timeFeasible
                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                    : 'bg-amber-50/70 border-amber-200 text-amber-950'
                }`}
              >
                {simulationResult.timeFeasible ? (
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-bold">
                    {isMr ? 'अभ्यास वेळ' : 'Weekly Study Time Commitment'}:{' '}
                    <span className="font-mono">{weeklyHours} hrs/wk</span>
                  </div>
                  <p className="mt-0.5 text-[11px] opacity-90">
                    {isMr ? simulationResult.timeNoteMr : simulationResult.timeNoteEn}
                  </p>
                </div>
              </div>

              {/* Location Impact */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3 text-xs text-slate-800">
                <MapPin className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">{isMr ? 'स्थान उपलब्धता' : 'Geographic Availability'}</div>
                  <p className="mt-0.5 text-[11px] text-slate-600">
                    {isMr ? simulationResult.locationNoteMr : simulationResult.locationNoteEn}
                  </p>
                </div>
              </div>
            </div>

            {/* Official Source Reference */}
            <div className="pt-2 border-t border-slate-200">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                {isMr ? 'अधिकृत संदर्भ' : 'Official Verification Authority'}
              </span>
              <p className="text-xs text-slate-600">
                {selectedRoute.primarySource.title} ({selectedRoute.primarySource.authority})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
