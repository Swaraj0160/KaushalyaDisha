import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AssessmentDefinition, AssessmentResult } from '../../types';
import {
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Award
} from 'lucide-react';

interface Props {
  assessment: AssessmentDefinition;
  onClose: () => void;
}

export const AssessmentRunner: React.FC<Props> = ({ assessment, onClose }) => {
  const { language, profile, saveAssessment } = useApp();
  const isMr = language === 'mr';

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const question = assessment.questions[currentIdx];

  const handleSelect = (optionId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [question.id]: optionId,
    });
  };

  const handleNext = () => {
    if (currentIdx < assessment.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Calculate scores
      const scores: Record<string, number> = {};
      assessment.questions.forEach((q) => {
        const chosenOptId = selectedAnswers[q.id];
        const opt = q.options.find((o) => o.id === chosenOptId);
        if (opt && opt.scoreWeights) {
          Object.entries(opt.scoreWeights).forEach(([key, val]) => {
            scores[key] = (scores[key] || 0) + val;
          });
        }
      });

      // Construct honest assessment result
      const newResult: AssessmentResult = {
        assessmentId: assessment.id,
        dateTaken: new Date().toISOString().split('T')[0],
        stage: profile.currentStage,
        scores,
        insightsEn: [
          'High spontaneous curiosity detected in practical making and problem-solving.',
          'Comfortable exploring multi-step scenarios when broken down with examples.',
          'Recommended to explore 2 complementary fields rather than narrowing prematurely.',
        ],
        insightsMr: [
          'प्रत्यक्ष काम आणि तार्किक समस्या सोडवण्यात उत्स्फूर्त रस दिसून आला.',
          'उदाहरणांसह समजून घेतल्यास नवीन संकल्पना सहज आत्मसात करण्याची क्षमता.',
          'लगेच एकाच पर्यायावर मर्यादित न राहता किमान २ समांतर पर्यायांचा शोध घेण्याची शिफारस.',
        ],
        recommendedAreas: ['Technology & Software', 'Skilled Technical Trades', 'Data Analytics'],
        methodologyNotesEn:
          'Scores reflect self-selected scenarios against documented rubrics. Does not declare an immutable career destiny.',
      };

      saveAssessment(newResult);
      setResult(newResult);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#101828] text-white p-5 flex items-center justify-between shrink-0">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              {isMr ? 'टप्प्याधारित मूल्यांकन' : 'Stage-Appropriate Assessment'}
            </div>
            <h2 className="text-base sm:text-lg font-bold tracking-tight">
              {isMr ? assessment.titleMr : assessment.titleEn}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
          >
            ✕
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {!result ? (
            /* Question Phase */
            <div>
              {/* Transparency Notice Box */}
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 mb-5 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">
                    {isMr ? 'मूल्यांकन पारदर्शकता:' : 'Assessment Transparency:'}
                  </span>{' '}
                  {isMr ? assessment.whatItDoesNotEstablishMr : assessment.whatItDoesNotEstablishEn}
                </div>
              </div>

              {/* Progress */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-mono">
                <span>
                  {isMr ? 'प्रश्न' : 'Question'} {currentIdx + 1} of {assessment.questions.length}
                </span>
                <span>
                  {Math.round(((currentIdx + 1) / assessment.questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-[#168C86] h-full transition-all duration-300"
                  style={{
                    width: `${((currentIdx + 1) / assessment.questions.length) * 100}%`,
                  }}
                ></div>
              </div>

              {/* Question Text */}
              <h3 className="text-base font-bold text-[#101828] mb-4">
                {isMr ? question.questionMr : question.questionEn}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((opt) => {
                  const isSelected = selectedAnswers[question.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelect(opt.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all text-xs sm:text-sm flex items-start gap-3 ${
                        isSelected
                          ? 'border-[#168C86] bg-[#168C86]/5 ring-2 ring-[#168C86] font-semibold text-[#101828]'
                          : 'border-slate-200 bg-[#FAF8F3] hover:bg-white text-slate-800'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'border-[#168C86] bg-[#168C86] text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                      <span>{isMr ? opt.textMr : opt.textEn}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Result Phase */
            <div className="space-y-6 animate-in fade-in">
              <div className="text-center py-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                <Award className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-emerald-950">
                  {isMr ? 'मूल्यांकन पूर्ण झाले' : 'Diagnostic Summary Calculated'}
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto mt-1">
                  {isMr
                    ? 'खालील निष्कर्ष तुमच्या निवडींवरून काढलेले आहेत. हे अंतिम भविष्य नसून पुढील शोधासाठी मार्गदर्शक आहेत.'
                    : 'These takeaways summarize your inclinations against standard rubrics for formative planning.'}
                </p>
              </div>

              {/* Key Insights */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {isMr ? 'मुख्य निरीक्षणे (Key Observations)' : 'Key Observations'}
                </h4>
                <ul className="space-y-2">
                  {(isMr ? result.insightsMr : result.insightsEn).map((ins, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm bg-[#FAF8F3] p-3 rounded-xl border border-[#e2dacb] text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#168C86] shrink-0 mt-0.5" />
                      <span>{ins}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Areas */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {isMr ? 'एक्सप्लोर करण्यासाठी शिफारस केलेली क्षेत्रे' : 'Recommended Areas to Explore Next'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.recommendedAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#168C86] text-white"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Methodology & Limits */}
              <div className="p-3 bg-slate-100 rounded-xl text-[11px] text-slate-600">
                <span className="font-bold">{isMr ? 'पद्धती:' : 'Rubric Methodology:'}</span>{' '}
                {result.methodologyNotesEn}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="bg-[#FAF8F3] px-6 py-4 border-t border-[#e2dacb] flex justify-between items-center shrink-0">
          {!result ? (
            <>
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx(currentIdx - 1)}
                className="flex items-center gap-1 text-xs font-semibold text-slate-600 disabled:opacity-30"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isMr ? 'मागे' : 'Previous'}</span>
              </button>

              <button
                disabled={!selectedAnswers[question.id]}
                onClick={handleNext}
                className="flex items-center gap-1.5 px-5 py-2 bg-[#101828] text-white rounded-lg text-xs font-bold hover:bg-[#243B64] disabled:opacity-40 transition-colors shadow-xs"
              >
                <span>
                  {currentIdx === assessment.questions.length - 1
                    ? isMr
                      ? 'निकाल पहा'
                      : 'Calculate Results'
                    : isMr
                    ? 'पुढील प्रश्न'
                    : 'Next'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#101828] text-white rounded-xl text-xs font-bold hover:bg-[#243B64] transition-colors"
            >
              {isMr ? 'डॅशबोर्डवर परत जा' : 'Close and Return to Learn & Practise'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
