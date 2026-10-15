import React from 'react';
import { EvidenceLevel, Language } from '../../types';
import { ShieldCheck, Award, FileText, Bot, UserCheck, EyeOff } from 'lucide-react';
import { UI_TRANSLATIONS } from '../../data/translations';

interface Props {
  level: EvidenceLevel;
  language: Language;
}

export const EvidenceBadge: React.FC<Props> = ({ level, language }) => {
  const t = UI_TRANSLATIONS[language];

  const map: Record<EvidenceLevel, { label: string; bg: string; icon: any }> = {
    not_assessed: {
      label: t.evidence_not_assessed,
      bg: 'bg-slate-100 text-slate-600 border-slate-200',
      icon: EyeOff,
    },
    self_reported: {
      label: t.evidence_self_reported,
      bg: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: FileText,
    },
    activity_demonstrated: {
      label: t.evidence_activity_demonstrated,
      bg: 'bg-teal-50 text-teal-800 border-teal-200',
      icon: Award,
    },
    ai_assisted_feedback: {
      label: t.evidence_ai_assisted_feedback,
      bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      icon: Bot,
    },
    mentor_reviewed: {
      label: t.evidence_mentor_reviewed,
      bg: 'bg-purple-50 text-purple-800 border-purple-200',
      icon: UserCheck,
    },
    independently_verified: {
      label: t.evidence_independently_verified,
      bg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      icon: ShieldCheck,
    },
  };

  const item = map[level] || map.not_assessed;
  const Icon = item.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium border ${item.bg}`}>
      <Icon className="w-3.5 h-3.5" />
      <span>{item.label}</span>
    </span>
  );
};
