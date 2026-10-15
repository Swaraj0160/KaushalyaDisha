import React from 'react';
import { useApp } from '../../context/AppContext';
import { UI_TRANSLATIONS } from '../../data/translations';
import { OFFICIAL_SOURCES } from '../../data/pathways';
import { Compass, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setOnboardingOpen, setActiveTab } = useApp();
  const t = UI_TRANSLATIONS[language];

  return (
    <footer className="bg-[#101828] text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#168C86] flex items-center justify-center text-white">
                <Compass className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-extrabold text-xl text-white">KaushalyaDisha</span>
              <span className="font-marathi font-bold text-amber-400">कौशल्यदिशा</span>
            </div>
            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              {language === 'mr'
                ? 'महाराष्ट्रातील विद्यार्थ्यांसाठी वास्तववादी, स्पष्ट आणि अधिकृत नियमांवर आधारित करिअर जाणीव, शिक्षण मार्ग व कौशल्य विकास प्रणाली.'
                : 'A realistic, explainable education and career pathway platform tailored to Maharashtra learners from school to career launch.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#168C86] bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 max-w-md">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{t.officialSourcesNotice}</span>
            </div>
          </div>

          {/* Core Destinations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {language === 'mr' ? 'प्रमुख विभाग' : 'Main Destinations'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => setActiveTab('explore')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t.navExplore}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('mypath')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t.navMyPath}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('learn')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t.navLearn}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('whatif')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {t.navWhatIf}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOnboardingOpen(true)}
                  className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                >
                  {t.ctaFindDirection} →
                </button>
              </li>
            </ul>
          </div>

          {/* Official Maharashtra Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              {language === 'mr' ? 'अधिकृत शासकीय पोर्टल्स' : 'Official State Portals'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={OFFICIAL_SOURCES.MSBSHSE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>MSBSHSE Pune (SSC/HSC)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_SOURCES.DTE_MAHARASHTRA.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>DTE Maharashtra (Polytechnic/DSE)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_SOURCES.DVET_ITI.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>DVET ITI Admissions Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_SOURCES.MAHA_CET_CELL.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>State CET Cell (MHT-CET)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_SOURCES.NCS_INDIA.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <span>National Career Service (NCS)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimers */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} KaushalyaDisha (कौशल्यदिशा). {t.methodologyDesc}
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Built for Maharashtra learners</span>
            <span>·</span>
            <span>English & मराठी</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
