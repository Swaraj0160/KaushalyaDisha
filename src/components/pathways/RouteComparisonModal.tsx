import React from 'react';
import { useApp } from '../../context/AppContext';
import { MAHARASHTRA_EDUCATION_ROUTES } from '../../data/pathways';
import { EligibilityBadge } from '../common/EligibilityBadge';
import { OfficialSourceLink } from '../common/OfficialSourceLink';
import { evaluateRouteEligibility } from '../../services/eligibilityEngine';
import {
  X,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface Props {
  routeIds: string[];
  onClose: () => void;
}

export const RouteComparisonModal: React.FC<Props> = ({ routeIds, onClose }) => {
  const { language, profile, toggleSaveRoute, toggleRouteForComparison } = useApp();

  const isMr = language === 'mr';

  const routes = MAHARASHTRA_EDUCATION_ROUTES.filter((r) => routeIds.includes(r.id));

  if (routes.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white rounded-2xl max-w-6xl w-full border border-slate-300 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#101828] text-white p-5 flex items-center justify-between shrink-0">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#F2A541]">
              {isMr ? 'तौलनिक विश्लेषण' : 'Side-by-Side Comparison'}
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">
              {isMr
                ? `${routes.length} शैक्षणिक मार्गांची समोरासमोर तुलना`
                : `Comparing ${routes.length} Education Routes Side-by-Side`}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Grid Scroll Container */}
        <div className="overflow-x-auto p-4 sm:p-6 flex-1 bg-[#FAF8F3]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-[700px]">
            {routes.map((route) => {
              const isSaved = (profile.savedRouteIds || []).includes(route.id);
              const elig = evaluateRouteEligibility(route, profile);

              return (
                <div
                  key={route.id}
                  className="bg-white rounded-xl border border-[#e2dacb] shadow-2xs p-5 flex flex-col justify-between space-y-4"
                >
                  {/* Route Card Top */}
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {route.code}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => toggleSaveRoute(route.id)}
                          className={`p-1.5 rounded-md transition-colors ${
                            isSaved
                              ? 'text-amber-600 bg-amber-50'
                              : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                          }`}
                          title={isSaved ? 'Saved' : 'Save'}
                        >
                          {isSaved ? <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-500" /> : <Bookmark className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => toggleRouteForComparison(route.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-md"
                          title="Remove from comparison"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <h3 className="font-bold text-base text-[#101828] mb-1">
                      {isMr ? route.titleMr : route.titleEn}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                      {isMr ? route.summaryMr : route.summaryEn}
                    </p>

                    {/* Eligibility Badge */}
                    <div className="mb-4">
                      <EligibilityBadge state={elig.state} language={language} size="sm" />
                      <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                        {isMr ? elig.reasonMr : elig.reasonEn}
                      </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-200 mb-4">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold block">
                          {isMr ? 'कालावधी' : 'Duration'}
                        </span>
                        <span className="font-semibold text-slate-900">
                          {isMr ? route.durationDisplayMr : route.durationDisplayEn}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold block">
                          {isMr ? 'अंदाजे खर्च' : 'Cost Band'}
                        </span>
                        <span className="font-semibold text-slate-900 leading-tight">
                          {isMr ? route.costDisplayMr : route.costDisplayEn}
                        </span>
                      </div>
                    </div>

                    {/* Prerequisites */}
                    <div className="mb-3">
                      <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        {isMr ? 'प्रवेशाच्या अटी (Prerequisites)' : 'Prerequisites'}
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {route.prerequisites.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#168C86] mt-1.5 shrink-0"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Advantages */}
                    <div className="mb-3">
                      <h4 className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1.5">
                        {isMr ? 'फायदे (Advantages)' : 'Key Advantages'}
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {(isMr ? route.advantagesMr : route.advantagesEn).map((adv, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Trade-offs */}
                    <div className="mb-3">
                      <h4 className="text-[11px] font-bold text-amber-800 uppercase tracking-wider mb-1.5">
                        {isMr ? 'मर्यादा आणि आव्हाने (Trade-offs)' : 'Trade-offs & Constraints'}
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {(isMr ? route.tradeoffsMr : route.tradeoffsEn).map((to, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span>{to}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What You Must Verify */}
                    <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs mb-3">
                      <div className="flex items-center gap-1 font-bold text-amber-900 mb-1">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
                        <span>{isMr ? 'अर्ज करण्यापूर्वी काय तपासावे?' : 'What to Verify Before Applying'}</span>
                      </div>
                      <ul className="space-y-1 text-[11px] text-amber-950">
                        {(isMr ? route.verificationChecklistMr : route.verificationChecklistEn).map((chk, idx) => (
                          <li key={idx}>· {chk}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Source Reference */}
                  <div className="pt-2 border-t border-slate-100">
                    <OfficialSourceLink source={route.primarySource} language={language} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white px-6 py-4 border-t border-slate-200 flex justify-between items-center shrink-0">
          <p className="text-xs text-slate-500">
            {isMr
              ? 'टीप: प्रत्येक पर्यायाचे अंतिम कट-ऑफ आणि प्रवेश वेळापत्रक अधिकृत संकेतस्थळावर तपासा.'
              : 'Note: Always confirm final category cut-offs and CAP schedules on the official Maharashtra authority portals.'}
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#101828] text-white rounded-lg text-xs font-bold hover:bg-[#243B64] transition-colors"
          >
            {isMr ? 'बंद करा' : 'Close Comparison'}
          </button>
        </div>
      </div>
    </div>
  );
};
