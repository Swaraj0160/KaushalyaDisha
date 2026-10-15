import React from 'react';
import { SourceReference, Language } from '../../types';
import { ExternalLink, CheckCircle } from 'lucide-react';

interface Props {
  source: SourceReference;
  language: Language;
}

export const OfficialSourceLink: React.FC<Props> = ({ source, language }) => {
  return (
    <div className="inline-flex flex-wrap items-center gap-2 p-2.5 bg-[#FAF8F3] border border-[#e2dacb] rounded-lg text-xs text-[#243B64]">
      <div className="flex items-center gap-1 font-semibold text-[#101828]">
        <CheckCircle className="w-3.5 h-3.5 text-[#168C86]" />
        <span>{source.authority}</span>
      </div>
      <span className="text-slate-400">·</span>
      <span className="text-[#64748B]">
        {language === 'mr' ? 'शेवटची पडताळणी: ' : 'Verified: '}
        <span className="font-mono text-slate-700">{source.lastCheckedDate}</span>
      </span>
      <span className="text-slate-400">·</span>
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-medium text-[#168C86] hover:text-[#0e5c58] hover:underline"
      >
        <span>{language === 'mr' ? 'अधिकृत संकेतस्थळ' : 'Official Portal'}</span>
        <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  );
};
