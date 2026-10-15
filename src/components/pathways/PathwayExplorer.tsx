import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { MAHARASHTRA_EDUCATION_ROUTES } from '../../data/pathways';
import { EducationRoute } from '../../types';
import { EligibilityBadge } from '../common/EligibilityBadge';
import { OfficialSourceLink } from '../common/OfficialSourceLink';
import { RouteComparisonModal } from './RouteComparisonModal';
import { evaluateRouteEligibility } from '../../services/eligibilityEngine';
import {
  MapPin,
  Compass,
  ArrowRight,
  Layers,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ShieldCheck,
  SlidersHorizontal,
  ChevronRight,
  ChevronDown,
  Info
} from 'lucide-react';

export const PathwayExplorer: React.FC = () => {
  const {
    language,
    profile,
    toggleSaveRoute,
    comparisonRouteIds,
    toggleRouteForComparison,
    clearComparison,
    setActiveTab,
  } = useApp();

  const isMr = language === 'mr';

  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [comparisonModalOpen, setComparisonModalOpen] = useState<boolean>(false);
  const [selectedRouteDetail, setSelectedRouteDetail] = useState<EducationRoute | null>(null);

  // Filter routes relevant to current learner stage or selected filter
  const displayedRoutes = useMemo(() => {
    return MAHARASHTRA_EDUCATION_ROUTES.filter((route) => {
      if (filterCategory !== 'all' && route.category !== filterCategory) {
        return false;
      }
      return true;
    });
  }, [filterCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#168C86]/10 text-[#168C86] mb-2">
            <Compass className="w-3.5 h-3.5 text-[#F2A541]" />
            <span>{isMr ? 'शिक्षण नकाशा व मार्ग' : 'Education Pathway Engine'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">
            {isMr ? 'महाराष्ट्रातील अधिकृत शैक्षणिक मार्ग' : 'Maharashtra Education & Progression Routes'}
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] mt-1 max-w-2xl">
            {isMr
              ? 'प्रवेशाच्या अटी, प्रत्यक्ष कालावधी आणि पुढील संधींचा स्पष्ट नकाशा — MSBSHSE, DTE आणि DVET नियमांवर आधारित.'
              : 'Structured progression with verified prerequisites, durations, and eligibility criteria from official Maharashtra education boards.'}
          </p>
        </div>

        {/* Quick Comparison & What-If Action Buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setActiveTab('whatif')}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 transition-colors shadow-2xs"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#168C86]" />
            <span>{isMr ? 'सिम्युलेटर (What-If)' : 'What-If Simulator'}</span>
          </button>

          <button
            onClick={() => setComparisonModalOpen(true)}
            disabled={comparisonRouteIds.length < 2}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
              comparisonRouteIds.length >= 2
                ? 'bg-[#101828] text-white hover:bg-[#243B64]'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span>
              {isMr ? 'तुलना करा' : 'Compare Routes'} ({comparisonRouteIds.length})
            </span>
          </button>
        </div>
      </div>

      {/* Stage Awareness Alert Banner */}
      <div className="bg-[#FAF8F3] border border-[#e2dacb] rounded-2xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#243B64] text-white flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="font-bold text-sm text-[#101828]">
              {isMr ? 'सध्याचा नोंदवलेला टप्पा:' : 'Active Profile Context:'}{' '}
              <span className="text-[#168C86] font-extrabold">{profile.name}</span> (
              {profile.currentClassOrYear || profile.currentStage.replace('_', ' ')})
            </div>
            <p className="text-xs text-[#64748B] mt-0.5">
              {isMr
                ? 'खालील मार्गांवर दिसणारी पात्रता स्थिती तुमच्या प्रोफाइलमधील माहितीवर आधारित आहे.'
                : 'Eligibility badges below reflect your recorded qualifications against documented Maharashtra rules.'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              if (profile.currentStage === 'class_10') {
                toggleRouteForComparison('route_fyjc_science');
                toggleRouteForComparison('route_polytechnic_diploma');
                toggleRouteForComparison('route_iti_trade');
              } else if (profile.currentStage === 'diploma_iti') {
                toggleRouteForComparison('route_dse_lateral');
                toggleRouteForComparison('route_nats_apprenticeship');
              } else {
                toggleRouteForComparison('route_btech_degree');
                toggleRouteForComparison('route_bsc_cs_analytics');
              }
              setComparisonModalOpen(true);
            }}
            className="text-xs font-bold text-[#168C86] hover:underline"
          >
            {isMr ? 'महत्त्वाचे पर्याय तुलना करा' : 'Auto-select stage routes'}
          </button>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none text-xs">
        {[
          { id: 'all', labelEn: 'All Routes', labelMr: 'सर्व मार्ग' },
          { id: 'academic', labelEn: 'Junior College (FYJC)', labelMr: 'कनिष्ठ महाविद्यालय (११वी-१२वी)' },
          { id: 'diploma', labelEn: 'Polytechnic Diploma', labelMr: 'पॉलिटेक्निक डिप्लोमा' },
          { id: 'iti_vocational', labelEn: 'ITI Vocational Trades', labelMr: 'ITI ट्रेड' },
          { id: 'degree', labelEn: 'University Degrees & B.Tech', labelMr: 'पदवी अभ्यासक्रम (Degree)' },
          { id: 'apprenticeship', labelEn: 'Apprenticeships (NATS)', labelMr: 'अप्रेंटिसशिप' },
          { id: 'competitive_exam', labelEn: 'Competitive Exam (MPSC)', labelMr: 'स्पर्धा परीक्षा (MPSC)' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterCategory(tab.id)}
            className={`px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-colors ${
              filterCategory === tab.id
                ? 'bg-[#101828] text-white font-bold'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {isMr ? tab.labelMr : tab.labelEn}
          </button>
        ))}
      </div>

      {/* Pathways List / Interactive Cards */}
      <div className="space-y-4">
        {displayedRoutes.map((route) => {
          const isSaved = (profile.savedRouteIds || []).includes(route.id);
          const isComparing = comparisonRouteIds.includes(route.id);
          const elig = evaluateRouteEligibility(route, profile);

          return (
            <div
              key={route.id}
              className="bg-white rounded-2xl border border-[#e2dacb] shadow-2xs hover:shadow-xs transition-all overflow-hidden"
            >
              <div className="p-5 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-3">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-[#FAF8F3] border border-slate-200 text-[#243B64] shrink-0 mt-0.5">
                      {route.code}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-[#101828] tracking-tight">
                        {isMr ? route.titleMr : route.titleEn}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <EligibilityBadge state={elig.state} language={language} size="sm" />
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-500 font-medium">
                          {isMr ? route.durationDisplayMr : route.durationDisplayEn}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-500 font-medium">
                          {isMr ? route.costDisplayMr : route.costDisplayEn}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center gap-2 shrink-0 self-end lg:self-center">
                    {/* Compare Checkbox */}
                    <button
                      onClick={() => toggleRouteForComparison(route.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                        isComparing
                          ? 'bg-[#168C86] text-white border-[#168C86]'
                          : 'bg-[#FAF8F3] text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{isComparing ? (isMr ? 'तुलनेत आहे' : 'In Comparison') : (isMr ? '+ तुलना करा' : '+ Compare')}</span>
                    </button>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => toggleSaveRoute(route.id)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isSaved
                          ? 'bg-amber-100 border-amber-300 text-amber-800'
                          : 'bg-[#FAF8F3] border-slate-200 text-slate-400 hover:text-slate-700'
                      }`}
                      title={isSaved ? 'Saved Route' : 'Save Route'}
                    >
                      {isSaved ? (
                        <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                  {isMr ? route.summaryMr : route.summaryEn}
                </p>

                {/* Prerequisites & Details Drawer Toggle */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#FAF8F3] p-4 rounded-xl border border-[#e2dacb] text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {isMr ? 'पात्रता कारण व शिफारस' : 'Eligibility Evaluation'}
                    </span>
                    <p className="text-slate-800 leading-snug">
                      {isMr ? elig.reasonMr : elig.reasonEn}
                    </p>
                    <p className="text-[11px] text-[#168C86] font-medium mt-1">
                      {isMr ? elig.recommendationMr : elig.recommendationEn}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {isMr ? 'पुढील संभाव्य पदव्या/संधी' : 'Next Qualifications & Roles'}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {route.possibleNextSteps.slice(0, 3).map((step, idx) => (
                        <span
                          key={idx}
                          className="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700 text-[11px]"
                        >
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Source */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <OfficialSourceLink source={route.primarySource} language={language} />

                  <button
                    onClick={() => {
                      if (!comparisonRouteIds.includes(route.id)) {
                        toggleRouteForComparison(route.id);
                      }
                      setComparisonModalOpen(true);
                    }}
                    className="flex items-center gap-1 text-xs font-bold text-[#168C86] hover:underline self-end sm:self-auto"
                  >
                    <span>{isMr ? 'तौलनिक तक्ता उघडा' : 'View Full Details & Checklist'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Side-by-Side Comparison Modal */}
      {comparisonModalOpen && (
        <RouteComparisonModal
          routeIds={comparisonRouteIds}
          onClose={() => setComparisonModalOpen(false)}
        />
      )}
    </div>
  );
};
