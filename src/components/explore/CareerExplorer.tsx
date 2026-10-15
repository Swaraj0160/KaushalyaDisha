import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { CAREER_ROLES, CAREER_FAMILIES } from '../../data/careers';
import { CareerRole } from '../../types';
import { CareerDetailModal } from './CareerDetailModal';
import {
  Search,
  Filter,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  Award
} from 'lucide-react';

export const CareerExplorer: React.FC = () => {
  const { language, profile, toggleSaveCareer, activeCareerModal, setActiveCareerModal } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFamilyId, setSelectedFamilyId] = useState<string>('all');
  const [filterSavedOnly, setFilterSavedOnly] = useState<boolean>(false);

  const isMr = language === 'mr';

  const filteredRoles = useMemo(() => {
    return CAREER_ROLES.filter((role) => {
      // Family filter
      if (selectedFamilyId !== 'all' && role.familyId !== selectedFamilyId) {
        return false;
      }

      // Saved only filter
      if (filterSavedOnly && !(profile.savedCareerIds || []).includes(role.id)) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitleEn = role.titleEn.toLowerCase().includes(q);
        const matchTitleMr = role.titleMr.toLowerCase().includes(q);
        const matchSummaryEn = role.summaryEn.toLowerCase().includes(q);
        const matchSummaryMr = role.summaryMr.toLowerCase().includes(q);
        const matchSkills = role.foundationalSkills.some((s) => s.toLowerCase().includes(q));
        const matchFamily = role.familyNameEn.toLowerCase().includes(q);
        return matchTitleEn || matchTitleMr || matchSummaryEn || matchSummaryMr || matchSkills || matchFamily;
      }

      return true;
    });
  }, [searchQuery, selectedFamilyId, filterSavedOnly, profile.savedCareerIds]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in">
      {/* Header Banner */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#168C86]/10 text-[#168C86] mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#F2A541]" />
          <span>{isMr ? 'करिअर जाणीव आणि शोध' : 'Career Awareness & Discovery'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">
          {isMr ? 'विविध करिअर क्षेत्रांची माहिती घ्या' : 'Explore Career Paths & Everyday Work'}
        </h1>
        <p className="text-sm sm:text-base text-[#64748B] mt-1 max-w-3xl">
          {isMr
            ? 'प्रत्येक भूमिकेमध्ये नेमके काय काम असते, त्यासाठी कोणते शैक्षणिक मार्ग लागतात आणि शाळेत/कॉलेजमध्ये असतानाच काय सराव करता येतो ते पहा.'
            : 'Understand what each occupation actually involves daily, which education routes lead there, and how you can explore it right now.'}
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-[#e2dacb] shadow-2xs mb-8 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isMr
                  ? 'करिअर, पदवी किंवा कौशल्य शोधा (उदा. Python, Design, Accounts)...'
                  : 'Search by role, skills, or area (e.g. Data, Web, Electrical, Design)...'
              }
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F3] border border-slate-200 rounded-lg text-sm text-[#101828] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#168C86]"
            />
          </div>

          {/* Saved Toggle */}
          <button
            onClick={() => setFilterSavedOnly(!filterSavedOnly)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border transition-colors shrink-0 ${
              filterSavedOnly
                ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                : 'bg-[#FAF8F3] border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${filterSavedOnly ? 'fill-amber-600 text-amber-600' : ''}`} />
            <span>
              {isMr ? 'जतन केलेले' : 'Saved Roles'} ({profile.savedCareerIds?.length || 0})
            </span>
          </button>
        </div>

        {/* Family Pill Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-slate-400 font-medium shrink-0 flex items-center gap-1 pr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>{isMr ? 'क्षेत्र:' : 'Family:'}</span>
          </span>
          <button
            onClick={() => setSelectedFamilyId('all')}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
              selectedFamilyId === 'all'
                ? 'bg-[#101828] text-white font-semibold'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isMr ? 'सर्व (All)' : 'All Families'}
          </button>
          {CAREER_FAMILIES.map((fam) => (
            <button
              key={fam.id}
              onClick={() => setSelectedFamilyId(fam.id)}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedFamilyId === fam.id
                  ? 'bg-[#168C86] text-white font-semibold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isMr ? fam.nameMr : fam.nameEn}
            </button>
          ))}
        </div>
      </div>

      {/* Career Grid */}
      {filteredRoles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => {
            const isSaved = (profile.savedCareerIds || []).includes(role.id);
            return (
              <div
                key={role.id}
                className="bg-white rounded-2xl border border-[#e2dacb] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-5 sm:p-6 space-y-3">
                  {/* Top Bar: Family & Save */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-semibold bg-[#168C86]/10 text-[#168C86] px-2.5 py-0.5 rounded-md">
                      {isMr ? role.familyNameMr : role.familyNameEn}
                    </span>
                    <button
                      onClick={() => toggleSaveCareer(role.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isSaved
                          ? 'text-amber-600 bg-amber-50'
                          : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                      }`}
                      title={isSaved ? 'Remove bookmark' : 'Bookmark this career'}
                    >
                      {isSaved ? (
                        <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Role Title */}
                  <h3 className="font-bold text-lg text-[#101828] group-hover:text-[#168C86] transition-colors">
                    {isMr ? role.titleMr : role.titleEn}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-2">
                    {isMr ? role.summaryMr : role.summaryEn}
                  </p>

                  {/* Foundational Skills */}
                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      {isMr ? 'पायाभूत कौशल्ये' : 'Foundational Skills'}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {role.foundationalSkills.slice(0, 3).map((sk, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-[#FAF8F3] text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                        >
                          {sk}
                        </span>
                      ))}
                      {role.foundationalSkills.length > 3 && (
                        <span className="text-[11px] text-slate-400 self-center">
                          +{role.foundationalSkills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Exploration Activity Snippet */}
                  <div className="bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/60 text-xs">
                    <div className="flex items-center gap-1 font-semibold text-amber-900 mb-0.5">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      <span>{isMr ? 'करून पहा:' : 'Try this:'}</span>
                    </div>
                    <p className="text-[11px] text-slate-700 line-clamp-1">
                      {isMr ? role.explorationActivityTitleMr : role.explorationActivityTitleEn}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="bg-[#FAF8F3] px-5 py-3 border-t border-[#e2dacb] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#64748B]">
                    {role.applicableRoutes.length} {isMr ? 'शिक्षण मार्ग' : 'Routes'}
                  </span>
                  <button
                    onClick={() => setActiveCareerModal(role)}
                    className="flex items-center gap-1 text-xs font-bold text-[#101828] group-hover:text-[#168C86] transition-colors"
                  >
                    <span>{isMr ? 'सविस्तर माहिती' : 'Inspect Profile'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white p-12 text-center rounded-2xl border border-dashed border-slate-300 max-w-lg mx-auto">
          <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">
            {isMr ? 'एकही करिअर सापडले नाही' : 'No matching career profiles found'}
          </h3>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            {isMr
              ? 'कृपया शोध शब्द बदलून पहा किंवा फिल्टर रीसेट करा.'
              : 'Try clearing your search query or switching the family filter back to "All Families".'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFamilyId('all');
              setFilterSavedOnly(false);
            }}
            className="px-4 py-2 bg-[#101828] text-white text-xs font-semibold rounded-lg hover:bg-[#243B64]"
          >
            {isMr ? 'फिल्टर रीसेट करा' : 'Reset All Filters'}
          </button>
        </div>
      )}

      {/* Modal View */}
      {activeCareerModal && (
        <CareerDetailModal
          role={activeCareerModal}
          onClose={() => setActiveCareerModal(null)}
        />
      )}
    </div>
  );
};
