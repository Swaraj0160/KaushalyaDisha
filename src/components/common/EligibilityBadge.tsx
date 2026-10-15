import React from 'react';
import { EligibilityState, Language } from '../../types';
import { CheckCircle2, HelpCircle, XCircle, AlertTriangle } from 'lucide-react';
import { UI_TRANSLATIONS } from '../../data/translations';

interface Props {
  state: EligibilityState;
  language: Language;
  size?: 'sm' | 'md' | 'lg';
}

export const EligibilityBadge: React.FC<Props> = ({ state, language, size = 'md' }) => {
  const t = UI_TRANSLATIONS[language];

  let config = {
    bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    icon: CheckCircle2,
    label: t.eligibility_matches_criteria,
  };

  if (state === 'needs_verification') {
    config = {
      bg: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: HelpCircle,
      label: t.eligibility_needs_verification,
    };
  } else if (state === 'does_not_match') {
    config = {
      bg: 'bg-rose-50 text-rose-800 border-rose-200',
      icon: XCircle,
      label: t.eligibility_does_not_match,
    };
  } else if (state === 'requires_review') {
    config = {
      bg: 'bg-slate-100 text-slate-800 border-slate-300',
      icon: AlertTriangle,
      label: t.eligibility_requires_review,
    };
  }

  const Icon = config.icon;
  const paddingClass = size === 'sm' ? 'px-2 py-0.5 text-xs' : size === 'lg' ? 'px-3.5 py-1.5 text-sm font-semibold' : 'px-2.5 py-1 text-xs font-medium';

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md border ${config.bg} ${paddingClass}`}>
      <Icon className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
      <span>{config.label}</span>
    </span>
  );
};
