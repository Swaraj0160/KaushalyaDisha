import React from 'react';
import { useApp } from '../../context/AppContext';
import { CareerRole } from '../../types';
import { UI_TRANSLATIONS } from '../../data/translations';
import { OfficialSourceLink } from '../common/OfficialSourceLink';
import {
  X,
  Clock,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  Compass,
  ArrowRight,
  BookOpen,
  Award
} from 'lucide-react';

interface Props {
  role: CareerRole | null;
  onClose: () => void;
}

export const CareerDetailModal: React.FC<Props> = ({ role, onClose }) => {
  const { language, profile, toggleSaveCareer, setActiveTab } = useApp();
  if (!role) return null;

  const isMr = language === 'mr';
  const isSaved = (profile.savedCareerIds || []).includes(role.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#101828] text-white p-5 sm:p-6 flex items-start justify-between shrink-0">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#168C86] text-white mb-2">
              {isMr ? role.familyNameMr : role.familyNameEn}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              {isMr ? role.titleMr : role.titleEn}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              {isMr ? role.summaryMr : role.summaryEn}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleSaveCareer(role.id)}
              className={`p-2 rounded-lg border transition-colors ${
                isSaved
                  ? 'bg-amber-400 text-[#101828] border-amber-400 font-bold'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
              title={isSaved ? 'Saved to Profile' : 'Save Career'}
            >
              {isSaved ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
          {/* Day in the Life Section */}
          <div className="bg-[#FAF8F3] p-4.5 rounded-xl border border-[#e2dacb]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#168C86] mb-2">
              <Clock className="w-4 h-4" />
              <span>{isMr ? 'या भूमिकेतील एक दिवस (A Day in This Career)' : 'A Day in the Life'}</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-[#243B64]">
              {isMr ? role.dayInTheLifeMr : role.dayInTheLifeEn}
            </p>
          </div>

          {/* Typical Everyday Tasks */}
          <div>
            <h3 className="text-sm font-bold text-[#101828] uppercase tracking-wider mb-3">
              {isMr ? 'दैनंदिन कामांचे स्वरूप (Typical Daily Tasks)' : 'Typical Tasks'}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(isMr ? role.typicalTasksMr : role.typicalTasksEn).map((task, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm bg-slate-50 p-2.5 rounded-lg border border-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#168C86] shrink-0 mt-0.5" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Foundational Skills vs Core Competencies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-4">
              <h4 className="text-xs font-bold text-[#101828] uppercase tracking-wider mb-2">
                {isMr ? 'पायाभूत कौशल्ये (Foundational Skills)' : 'Foundational Skills'}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {role.foundationalSkills.map((sk, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md font-medium"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-4">
              <h4 className="text-xs font-bold text-[#101828] uppercase tracking-wider mb-2">
                {isMr ? 'कामावरील मुख्य क्षमता (Core Competencies)' : 'Core Competencies'}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {role.coreCompetencies.map((comp, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#168C86]/10 text-[#168C86] border border-[#168C86]/20 px-2.5 py-1 rounded-md font-semibold"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Practical Exploration Activity */}
          <div className="border-2 border-dashed border-[#F2A541] bg-amber-50/50 p-4.5 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
              <Award className="w-4 h-4 text-amber-600" />
              <span>{isMr ? 'स्वतः करून पाहण्याचा सराव (Exploration Activity)' : 'Hands-on Exploration Activity'}</span>
            </div>
            <h4 className="font-bold text-sm text-slate-900 mb-1">
              {isMr ? role.explorationActivityTitleMr : role.explorationActivityTitleEn}
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              {isMr ? role.explorationActivityDescMr : role.explorationActivityDescEn}
            </p>
            <button
              onClick={() => {
                onClose();
                setActiveTab('learn');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#101828] bg-amber-300 hover:bg-amber-400 px-3 py-1.5 rounded-lg transition-colors"
            >
              <span>{isMr ? 'हा सराव सुरू करा' : 'Start This Activity in Learn & Practise'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Official Reference Source */}
          {role.sources && role.sources.length > 0 && (
            <div className="pt-2 border-t border-slate-200">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                {isMr ? 'अधिकृत संदर्भ' : 'Verified Data Source'}
              </span>
              <OfficialSourceLink source={role.sources[0]} language={language} />
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF8F3] px-6 py-4 border-t border-[#e2dacb] flex justify-between items-center shrink-0">
          <button
            onClick={() => {
              onClose();
              setActiveTab('mypath');
            }}
            className="flex items-center gap-1.5 text-xs font-bold text-[#168C86] hover:underline"
          >
            <Compass className="w-4 h-4" />
            <span>{isMr ? 'याचे शैक्षणिक मार्ग पहा (View Routes)' : 'View Education Routes in My Path'}</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#101828] text-white rounded-lg text-xs font-semibold hover:bg-[#243B64] transition-colors"
          >
            {isMr ? 'बंद करा' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
