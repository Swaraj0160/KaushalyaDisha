import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { LearningActivity, SkillEvidenceItem, EvidenceLevel } from '../../types';
import { EvidenceBadge } from '../common/EvidenceBadge';
import {
  X,
  Award,
  CheckCircle2,
  FileText,
  Link,
  ShieldCheck,
  Send
} from 'lucide-react';

interface Props {
  activity: LearningActivity | null;
  onClose: () => void;
}

export const ActivitySubmissionModal: React.FC<Props> = ({ activity, onClose }) => {
  const { language, addEvidence } = useApp();
  if (!activity) return null;

  const isMr = language === 'mr';

  const [notesOrUrl, setNotesOrUrl] = useState('');
  const [evidenceLevel, setEvidenceLevel] = useState<EvidenceLevel>('activity_demonstrated');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notesOrUrl.trim()) return;

    setSubmitting(true);

    const newEvidence: SkillEvidenceItem = {
      id: `ev_${Date.now()}`,
      skillId: `sk_${activity.id}`,
      skillName: isMr ? activity.titleMr : activity.titleEn,
      roleId: activity.targetRoleOrArea,
      activityId: activity.id,
      title: isMr ? activity.titleMr : activity.titleEn,
      dateCreated: new Date().toISOString().split('T')[0],
      evidenceLevel,
      notesOrUrl: notesOrUrl.trim(),
      status: 'completed',
      rubricScore: 4,
      feedback: isMr
        ? 'चांगला प्रत्यक्ष सराव पूर्ण केला; रुब्रिकच्या मुख्य निकषांनुसार पुरावा नोंदवला गेला आहे.'
        : 'Formative feedback: Project deliverable meets key rubric objectives for this stage.',
    };

    addEvidence(newEvidence);
    setSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#101828] text-white p-5 flex items-start justify-between shrink-0">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              {isMr ? 'कौशल्य पासपोर्ट नोंदणी' : 'Submit Evidence to Passport'}
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">
              {isMr ? activity.titleMr : activity.titleEn}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* Objective & Rubric Preview */}
          <div className="bg-[#FAF8F3] p-4 rounded-xl border border-[#e2dacb] text-xs">
            <span className="font-bold text-[#101828] block mb-1">
              {isMr ? 'उद्दिष्ट (Objective):' : 'Objective:'}
            </span>
            <p className="text-slate-700 leading-relaxed mb-3">
              {isMr ? activity.objectiveMr : activity.objectiveEn}
            </p>

            <span className="font-bold text-[#101828] block mb-1">
              {isMr ? 'मूल्यांकन निकष (Evaluation Rubric):' : 'Evaluation Rubric:'}
            </span>
            <ul className="space-y-1 text-slate-600">
              {(isMr ? activity.rubricMr : activity.rubricEn).map((rub, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#168C86] shrink-0 mt-0.5" />
                  <span>{rub}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Submission Notes / Link */}
          <div>
            <label className="block text-xs font-bold text-[#101828] mb-1.5">
              {isMr
                ? 'तुमचे काम, निष्कर्ष किंवा लिंक (GitHub / Google Drive / नोट्स)'
                : 'Your Work Submission, Findings, or Link (GitHub / Drive / Reflection Notes)'}
            </label>
            <textarea
              required
              rows={4}
              value={notesOrUrl}
              onChange={(e) => setNotesOrUrl(e.target.value)}
              placeholder={
                isMr
                  ? 'तुम्ही या टास्कमध्ये नक्की काय केले? कोणती आव्हाने आली आणि काय निष्कर्ष निघाले ते थोडक्यात लिहा...'
                  : 'Describe what you built or analyzed, key findings, and links to your work...'
              }
              className="w-full p-3 bg-[#FAF8F3] border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#168C86]"
            />
          </div>

          {/* Honest Evidence Level */}
          <div>
            <label className="block text-xs font-bold text-[#101828] mb-1.5">
              {isMr ? 'पुराव्याची पातळी (Evidence Level)' : 'Evidence Classification'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                {
                  id: 'activity_demonstrated',
                  labelEn: 'Demonstrated in Activity',
                  labelMr: 'सरावातून सिद्ध केलेले',
                  descEn: 'Completed this exercise and documented work',
                  descMr: 'टास्क पूर्ण करून नोंद केली',
                },
                {
                  id: 'self_reported',
                  labelEn: 'Self-Reported',
                  labelMr: 'स्वतः नोंदवलेले',
                  descEn: 'Explored concept without full project file',
                  descMr: 'संकल्पना समजली पण पूर्ण प्रोजेक्ट नाही',
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setEvidenceLevel(opt.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    evidenceLevel === opt.id
                      ? 'border-[#168C86] bg-[#168C86]/10 text-[#168C86] font-bold'
                      : 'border-slate-200 bg-[#FAF8F3] text-slate-700 hover:bg-white'
                  }`}
                >
                  <div className="font-bold">{isMr ? opt.labelMr : opt.labelEn}</div>
                  <div className="text-[11px] opacity-80 mt-0.5">{isMr ? opt.descMr : opt.descEn}</div>
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              {isMr
                ? 'प्रामाणिक नोंद: टास्क पूर्ण केल्याने स्वतंत्र मानवी प्रमाणपत्र मिळत नाही; ते कौशल्य पासपोर्टमध्ये प्रगती दर्शवते.'
                : 'Honest label: Completing a self-paced activity records formative evidence in your passport, not independent third-party certification.'}
            </p>
          </div>

          {/* Footer Buttons */}
          <div className="pt-3 border-t border-slate-200 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              {isMr ? 'रद्द करा' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={!notesOrUrl.trim() || submitting}
              className="flex items-center gap-1.5 px-5 py-2 bg-[#101828] text-white rounded-lg text-xs font-bold hover:bg-[#243B64] transition-colors shadow-xs"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>{isMr ? 'पासपोर्टमध्ये जतन करा' : 'Save to Passport'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
