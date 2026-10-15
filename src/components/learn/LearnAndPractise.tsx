import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { LEARNING_ACTIVITIES, ASSESSMENTS } from '../../data/activities';
import { CAREER_ROLES } from '../../data/careers';
import { LearningActivity, AssessmentDefinition } from '../../types';
import { EvidenceBadge } from '../common/EvidenceBadge';
import { ActivitySubmissionModal } from './ActivitySubmissionModal';
import { AssessmentRunner } from './AssessmentRunner';
import { calculateSkillGap } from '../../services/eligibilityEngine';
import {
  Award,
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Trash2,
  Plus,
  ArrowRight,
  TrendingUp,
  FileCheck
} from 'lucide-react';

export const LearnAndPractise: React.FC = () => {
  const { language, profile, removeEvidence, setActiveTab } = useApp();
  const isMr = language === 'mr';

  const [activeTabSub, setActiveTabSub] = useState<'activities' | 'passport' | 'gap_analysis'>('activities');
  const [selectedActivity, setSelectedActivity] = useState<LearningActivity | null>(null);
  const [runningAssessment, setRunningAssessment] = useState<AssessmentDefinition | null>(null);

  // Target role for gap analysis (defaults to user's saved target or first career)
  const targetRole = useMemo(() => {
    return (
      CAREER_ROLES.find((r) => r.id === profile.targetCareerId) ||
      CAREER_ROLES[0]
    );
  }, [profile.targetCareerId]);

  const skillGap = useMemo(() => {
    return calculateSkillGap(targetRole, profile);
  }, [targetRole, profile]);

  // Stage assessment
  const stageAssessment = useMemo(() => {
    return (
      ASSESSMENTS.find((a) => a.stage === profile.currentStage) ||
      ASSESSMENTS[0]
    );
  }, [profile.currentStage]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in">
      {/* Header Banner */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#168C86]/10 text-[#168C86] mb-2">
          <Award className="w-3.5 h-3.5 text-[#F2A541]" />
          <span>{isMr ? 'सराव आणि कौशल्य विकास' : 'Learn & Practise'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">
          {isMr ? 'प्रत्यक्ष कृती, कौशल्ये आणि पुरावा पासपोर्ट' : 'Hands-on Activities & Proof-of-Skill Passport'}
        </h1>
        <p className="text-sm sm:text-base text-[#64748B] mt-1 max-w-3xl">
          {isMr
            ? 'केवळ कागदी सल्ल्याऐवजी प्रत्यक्ष सराव करा, कौशल्य तफावत तपासा आणि तुमच्या कामाचा प्रामाणिक पुरावा साठवा.'
            : 'Bridge the gap between theoretical advice and verifiable ability through stage-appropriate projects and honest evidence tracking.'}
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 mb-8 overflow-x-auto scrollbar-none text-xs sm:text-sm">
        <button
          onClick={() => setActiveTabSub('activities')}
          className={`flex items-center gap-2 px-4 py-3 font-bold border-b-2 transition-all whitespace-nowrap ${
            activeTabSub === 'activities'
              ? 'border-[#168C86] text-[#168C86]'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>{isMr ? 'सराव उपक्रम (Activities)' : 'Learning Activities'}</span>
        </button>

        <button
          onClick={() => setActiveTabSub('passport')}
          className={`flex items-center gap-2 px-4 py-3 font-bold border-b-2 transition-all whitespace-nowrap ${
            activeTabSub === 'passport'
              ? 'border-[#168C86] text-[#168C86]'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileCheck className="w-4 h-4" />
          <span>
            {isMr ? 'कौशल्य पासपोर्ट' : 'Proof-of-Skill Passport'} (
            {profile.evidencePassport?.length || 0})
          </span>
        </button>

        <button
          onClick={() => setActiveTabSub('gap_analysis')}
          className={`flex items-center gap-2 px-4 py-3 font-bold border-b-2 transition-all whitespace-nowrap ${
            activeTabSub === 'gap_analysis'
              ? 'border-[#168C86] text-[#168C86]'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>{isMr ? 'कौशल्य तफावत विश्लेषण (Skill Gap)' : 'Skill-Gap Diagnostic'}</span>
        </button>
      </div>

      {/* Sub Tab 1: Learning Activities */}
      {activeTabSub === 'activities' && (
        <div className="space-y-8">
          {/* Assessment Spotlight Banner */}
          <div className="bg-gradient-to-br from-[#101828] to-[#243B64] text-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F2A541] text-[#101828]">
                {isMr ? 'तुमच्या टप्प्यासाठी शिफारस केलेले मूल्यांकन' : 'Recommended Diagnostic for Your Stage'}
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                {isMr ? stageAssessment.titleMr : stageAssessment.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {isMr ? stageAssessment.descriptionMr : stageAssessment.descriptionEn}
              </p>
            </div>
            <button
              onClick={() => setRunningAssessment(stageAssessment)}
              className="px-5 py-3 bg-[#168C86] hover:bg-[#13746f] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all shrink-0 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{isMr ? 'मूल्यांकन सुरू करा (१० मिनिटे)' : 'Take Assessment (10 mins)'}</span>
            </button>
          </div>

          {/* Activities Grid */}
          <div>
            <h3 className="text-base font-bold text-[#101828] mb-4">
              {isMr ? 'टप्प्यानुसार सराव कार्ये' : 'Practical Learning Activities'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEARNING_ACTIVITIES.map((act) => (
                <div
                  key={act.id}
                  className="bg-white rounded-2xl border border-[#e2dacb] shadow-2xs hover:shadow-xs p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {act.difficulty.toUpperCase()}
                      </span>
                      <span>{act.estimatedEffort}</span>
                    </div>

                    <h4 className="font-bold text-base text-[#101828]">
                      {isMr ? act.titleMr : act.titleEn}
                    </h4>

                    <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">
                      {isMr ? act.objectiveMr : act.objectiveEn}
                    </p>

                    {/* Deliverable Type */}
                    <div className="pt-2 text-[11px] text-slate-500">
                      <span className="font-bold text-slate-700">{isMr ? 'स्वरूप:' : 'Format:'}</span>{' '}
                      {act.deliverableType.replace(/_/g, ' ')}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => setSelectedActivity(act)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#FAF8F3] hover:bg-[#101828] text-[#101828] hover:text-white border border-[#e2dacb] rounded-xl text-xs font-bold transition-all"
                    >
                      <span>{isMr ? 'सराव करा आणि पासपोर्टमध्ये नोंदवा' : 'Practise & Add Evidence'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sub Tab 2: Proof-of-Skill Passport */}
      {activeTabSub === 'passport' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-[#e2dacb]">
            <div>
              <h3 className="font-bold text-base text-[#101828]">
                {isMr ? 'कौशल्य पुरावा पासपोर्ट (Proof-of-Skill Passport)' : 'Proof-of-Skill Passport'}
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5">
                {isMr
                  ? 'तुमच्या कामाचा, प्रोजेक्ट्सचा आणि अभ्यासाचा प्रामाणिक नोंदवलेला संग्रह.'
                  : 'A verifiable record of practical tasks, code links, and rubric evaluations.'}
              </p>
            </div>
            <div className="text-xs text-slate-500">
              <span className="font-bold text-[#168C86] font-mono text-sm">
                {profile.evidencePassport?.length || 0}
              </span>{' '}
              {isMr ? 'नोंदवलेले पुरावे' : 'Documented items'}
            </div>
          </div>

          {/* Passport Items List */}
          {profile.evidencePassport && profile.evidencePassport.length > 0 ? (
            <div className="space-y-3">
              {profile.evidencePassport.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-2xl border border-[#e2dacb] shadow-2xs flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-bold text-sm text-[#101828]">{item.title}</span>
                      <EvidenceBadge level={item.evidenceLevel} language={language} />
                      <span className="text-[11px] font-mono text-slate-400">{item.dateCreated}</span>
                    </div>

                    <p className="text-xs text-slate-700 bg-[#FAF8F3] p-3 rounded-xl border border-slate-200">
                      {item.notesOrUrl}
                    </p>

                    {item.feedback && (
                      <div className="text-[11px] text-teal-900 bg-teal-50/70 p-2.5 rounded-lg border border-teal-200 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>
                          <strong className="font-semibold">{isMr ? 'अभिप्राय:' : 'Feedback:'}</strong>{' '}
                          {item.feedback}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="shrink-0 flex items-center sm:flex-col justify-end gap-2">
                    <button
                      onClick={() => removeEvidence(item.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-50 transition-colors"
                      title="Delete Evidence"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-slate-300">
              <Award className="w-12 h-12 text-slate-300 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-slate-700">
                {isMr ? 'पासपोर्टमध्ये अजून कोणताही पुरावा नोंदवलेला नाही' : 'No Evidence Recorded Yet'}
              </h4>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                {isMr
                  ? 'वरील सराव उपक्रमांमधून एक टास्क पूर्ण करून त्याचा पुरावा येथे जोडा.'
                  : 'Start an activity from the "Learning Activities" tab to record your first piece of evidence.'}
              </p>
              <button
                onClick={() => setActiveTabSub('activities')}
                className="px-4 py-2 bg-[#101828] text-white rounded-lg text-xs font-semibold hover:bg-[#243B64]"
              >
                {isMr ? 'उपक्रम पहा' : 'Browse Activities'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Sub Tab 3: Skill-Gap Diagnostic */}
      {activeTabSub === 'gap_analysis' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-[#e2dacb] shadow-xs space-y-6">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {isMr ? 'लक्ष्य करिअरसाठी कौशल्य तफावत' : 'Skill Coverage Diagnostic'}
                </span>
                <span className="text-xs font-bold text-[#168C86] font-mono">
                  {skillGap.coveragePercentage}% {isMr ? 'कव्हरेज' : 'Coverage'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#101828]">
                {isMr ? targetRole.titleMr : targetRole.titleEn}
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5">
                {isMr ? targetRole.summaryMr : targetRole.summaryEn}
              </p>
            </div>

            {/* Coverage Bar */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#168C86] h-full transition-all duration-500"
                style={{ width: `${skillGap.coveragePercentage}%` }}
              ></div>
            </div>

            {/* 3 Categories: Demonstrated, Needs Practice, Unassessed */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Already Demonstrated */}
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50">
                <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-900 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{isMr ? 'सिद्ध झालेली कौशल्ये' : 'Already Demonstrated'}</span>
                </div>
                {skillGap.demonstratedSkills.length > 0 ? (
                  <ul className="space-y-1.5 text-xs text-emerald-950 font-medium">
                    {skillGap.demonstratedSkills.map((sk, idx) => (
                      <li key={idx}>✓ {sk}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[11px] text-slate-500 italic">
                    {isMr ? 'अजून प्रत्यक्ष पुरावा नाही' : 'No verified evidence submitted yet'}
                  </p>
                )}
              </div>

              {/* Needs Practice */}
              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
                <div className="flex items-center gap-1.5 font-bold text-xs text-amber-900 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>{isMr ? 'सरावाची गरज (Needs Practice)' : 'Needs Practice / Known'}</span>
                </div>
                {skillGap.practiceNeededSkills.length > 0 ? (
                  <ul className="space-y-1.5 text-xs text-amber-950 font-medium">
                    {skillGap.practiceNeededSkills.map((sk, idx) => (
                      <li key={idx}>· {sk}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[11px] text-slate-500 italic">
                    {isMr ? 'सर्व कौशल्ये कव्हर झाली' : 'None in this category'}
                  </p>
                )}
              </div>

              {/* Not Yet Assessed */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="flex items-center gap-1.5 font-bold text-xs text-slate-700 mb-2">
                  <HelpCircle className="w-4 h-4 text-slate-400" />
                  <span>{isMr ? 'अजून तपासले नाही (Not Assessed)' : 'Not Yet Assessed'}</span>
                </div>
                {skillGap.unassessedSkills.length > 0 ? (
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {skillGap.unassessedSkills.map((sk, idx) => (
                      <li key={idx}>○ {sk}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[11px] text-slate-500 italic">
                    {isMr ? 'सर्व तपासले गेले आहे' : 'All assessed'}
                  </p>
                )}
              </div>
            </div>

            {/* Methodology Note */}
            <div className="p-3 bg-slate-100 rounded-xl text-[11px] text-slate-600">
              <strong className="font-semibold">{isMr ? 'मूल्यांकन पद्धत:' : 'Assessment Rubric Note:'}</strong>{' '}
              {isMr ? skillGap.rubricNotesMr : skillGap.rubricNotesEn}
            </div>
          </div>
        </div>
      )}

      {/* Activity Submission Modal */}
      {selectedActivity && (
        <ActivitySubmissionModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}

      {/* Assessment Runner Modal */}
      {runningAssessment && (
        <AssessmentRunner
          assessment={runningAssessment}
          onClose={() => setRunningAssessment(null)}
        />
      )}
    </div>
  );
};
