import React, { useState } from 'react';
import { useApp, NavigationTab } from '../../context/AppContext';
import { UI_TRANSLATIONS } from '../../data/translations';
import { DEMO_PROFILES } from '../../data/demoProfiles';
import {
  Compass,
  Users,
  Sparkles,
  Globe,
  SlidersHorizontal,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  MapPin,
  Award
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    profile,
    language,
    setLanguage,
    activeTab,
    setActiveTab,
    selectDemoPersona,
    setOnboardingOpen,
    companionOpen,
    setCompanionOpen,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoMenuOpen, setDemoMenuOpen] = useState(false);

  const t = UI_TRANSLATIONS[language];

  const navItems: { tab: NavigationTab; label: string; icon: any }[] = [
    { tab: 'home', label: t.navHome, icon: Compass },
    { tab: 'explore', label: t.navExplore, icon: BookOpen },
    { tab: 'mypath', label: t.navMyPath, icon: MapPin },
    { tab: 'learn', label: t.navLearn, icon: Award },
    { tab: 'whatif', label: t.navWhatIf, icon: SlidersHorizontal },
    { tab: 'profile', label: t.navProfile, icon: Users },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e5dfd3] shadow-xs">
      {/* Top Banner: Maharashtra System Context */}
      <div className="bg-[#101828] text-[#FAF8F3] px-4 py-1 text-xs flex justify-between items-center tracking-wide">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#168C86]"></span>
          <span className="font-medium">{t.maharashtraFocus}</span>
          <span className="hidden sm:inline text-slate-400">·</span>
          <span className="hidden sm:inline text-slate-300">MSBSHSE · DTE · DVET · State CET Cell</span>
        </div>

        {/* Demo Persona Quick Switcher in top bar */}
        <div className="relative">
          <button
            onClick={() => setDemoMenuOpen(!demoMenuOpen)}
            className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#243B64] hover:bg-[#2d497c] text-xs text-amber-200 transition-colors"
            title="Switch demo student profile"
          >
            <Users className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-medium truncate max-w-[140px] sm:max-w-none">
              {profile.name} ({profile.currentClassOrYear?.split(' ')[0] || 'Demo'})
            </span>
            <ChevronDown className="w-3 h-3 text-slate-300" />
          </button>

          {demoMenuOpen && (
            <div className="absolute right-0 mt-1 w-72 bg-white text-[#101828] border border-[#e2dacb] rounded-xl shadow-xl z-50 p-2 animate-in fade-in slide-in-from-top-1">
              <div className="text-[11px] font-bold text-slate-500 uppercase px-2 py-1 tracking-wider border-b border-slate-100 mb-1">
                {language === 'mr' ? '६ नमुना विद्यार्थी प्रोफाइल्स (Illustrative Learners)' : '6 Demo Learner Personas'}
              </div>
              <div className="space-y-1">
                {DEMO_PROFILES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      selectDemoPersona(p.id);
                      setDemoMenuOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-start justify-between ${
                      profile.id === p.id
                        ? 'bg-[#168C86]/10 text-[#168C86] font-bold border border-[#168C86]/20'
                        : 'hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-slate-900">{p.name} ({p.locationCity})</div>
                      <div className="text-[11px] text-slate-500">{p.currentClassOrYear}</div>
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                      {p.currentStage.replace('_', ' ')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Identity */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#101828] to-[#243B64] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-[#F2A541]" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-extrabold text-xl tracking-tight text-[#101828]">
                  KaushalyaDisha
                </span>
                <span className="font-marathi font-bold text-sm text-[#168C86]">
                  कौशल्यदिशा
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] hidden md:block">
                {language === 'mr' ? 'कौशल्यांना दिशा, भविष्याला नवी संधी.' : 'Discover your direction. Build your future.'}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => setActiveTab(item.tab)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#168C86] text-white shadow-xs font-semibold'
                      : 'text-[#243B64] hover:bg-[#FAF8F3] hover:text-[#101828]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#64748B]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <div className="flex items-center border border-[#d9d0c1] rounded-lg p-0.5 bg-[#FAF8F3]">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-semibold rounded ${
                  language === 'en'
                    ? 'bg-[#101828] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#101828]'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('mr')}
                className={`px-2 py-1 text-xs font-semibold font-marathi rounded ${
                  language === 'mr'
                    ? 'bg-[#101828] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#101828]'
                }`}
                title="मराठी भाषेत वापरा"
              >
                मराठी
              </button>
            </div>

            {/* AI Career Companion Trigger */}
            <button
              onClick={() => setCompanionOpen(!companionOpen)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                companionOpen
                  ? 'bg-amber-100 border-amber-300 text-amber-900 shadow-xs'
                  : 'bg-white border-[#e5dfd3] hover:border-[#168C86] text-[#243B64]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F2A541]" />
              <span className="hidden sm:inline">{language === 'mr' ? 'AI मार्गदर्शक' : 'Career Companion'}</span>
            </button>

            {/* Primary CTA */}
            <button
              onClick={() => setOnboardingOpen(true)}
              className="bg-[#101828] hover:bg-[#243B64] text-white px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              {t.ctaFindDirection}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => {
                  setActiveTab(item.tab);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-[#168C86] text-white font-semibold'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
