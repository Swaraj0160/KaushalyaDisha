import React from 'react';
import { useApp } from '../../context/AppContext';
import { DEMO_PROFILES } from '../../data/demoProfiles';
import { MAHARASHTRA_EDUCATION_ROUTES } from '../../data/pathways';
import { CAREER_ROLES } from '../../data/careers';
import { EvidenceBadge } from '../common/EvidenceBadge';
import {
  User,
  MapPin,
  Clock,
  Coins,
  BookOpen,
  Award,
  Bookmark,
  Users,
  Compass,
  ArrowRight,
  Edit3
} from 'lucide-react';

export const ProfileView: React.FC = () => {
  const {
    language,
    profile,
    selectDemoPersona,
    setOnboardingOpen,
    setActiveTab,
    toggleSaveRoute,
    toggleSaveCareer,
    setActiveCareerModal,
  } = useApp();

  const isMr = language === 'mr';

  const savedRoutes = MAHARASHTRA_EDUCATION_ROUTES.filter((r) =>
    (profile.savedRouteIds || []).includes(r.id)
  );

  const savedCareers = CAREER_ROLES.filter((c) =>
    (profile.savedCareerIds || []).includes(c.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl border border-[#e2dacb] shadow-xs p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#101828] text-white flex items-center justify-center font-bold text-2xl shadow-sm shrink-0">
            {profile.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl font-extrabold text-[#101828]">{profile.name}</h1>
              {profile.isDemoProfile && (
                <span className="text-[11px] bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full font-bold">
                  {isMr ? 'नमुना विद्यार्थी (Demo Persona)' : 'Illustrative Demo Profile'}
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.locationCity}, Maharashtra</span>
              </span>
              <span>·</span>
              <span className="bg-[#168C86]/10 text-[#168C86] px-2 py-0.5 rounded font-semibold">
                {profile.currentClassOrYear || profile.currentStage.replace('_', ' ')}
              </span>
              {profile.educationBoard && (
                <>
                  <span>·</span>
                  <span>{profile.educationBoard}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={() => setOnboardingOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#FAF8F3] hover:bg-slate-100 border border-[#e2dacb] rounded-xl text-xs font-bold text-[#101828] transition-colors self-start md:self-center shadow-2xs"
        >
          <Edit3 className="w-4 h-4 text-[#168C86]" />
          <span>{isMr ? 'माहिती अद्ययावत करा / टप्पा बदला' : 'Edit Profile or Change Stage'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Context & Preferences */}
        <div className="space-y-6">
          {/* Preferences Card */}
          <div className="bg-white rounded-2xl border border-[#e2dacb] p-5 shadow-2xs space-y-4 text-xs">
            <h3 className="font-bold text-sm text-[#101828] uppercase tracking-wider">
              {isMr ? 'अभ्यास व बजेट प्राधान्ये' : 'Preferences & Constraints'}
            </h3>

            <div>
              <span className="text-[11px] text-slate-400 font-bold block mb-1">
                {isMr ? 'साप्ताहिक उपलब्ध वेळ' : 'Weekly Practice Time'}
              </span>
              <span className="font-semibold text-slate-800 text-sm">
                {profile.timeWeeklyHours} hours / week
              </span>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 font-bold block mb-1">
                {isMr ? 'बजेट प्राधान्य' : 'Budget Band'}
              </span>
              <span className="font-semibold text-slate-800 text-sm capitalize">
                {profile.budgetPreference?.replace('_', ' ')}
              </span>
            </div>

            {profile.enjoyedSubjects && profile.enjoyedSubjects.length > 0 && (
              <div>
                <span className="text-[11px] text-slate-400 font-bold block mb-1">
                  {isMr ? 'आवडीचे विषय' : 'Enjoyed Subjects'}
                </span>
                <div className="flex flex-wrap gap-1">
                  {profile.enjoyedSubjects.map((sub, idx) => (
                    <span
                      key={idx}
                      className="bg-[#FAF8F3] px-2 py-0.5 rounded border border-slate-200 text-slate-700"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Persona Switcher Box */}
          <div className="bg-[#FAF8F3] rounded-2xl border border-[#e2dacb] p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#168C86]" />
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#101828]">
                {isMr ? 'इतर नमुना प्रोफाइल तपासा' : 'Switch Sample Persona'}
              </h4>
            </div>
            <p className="text-[11px] text-[#64748B]">
              {isMr
                ? 'प्रत्येक शिक्षणाच्या टप्प्यासाठी (८वी ते पदवीधर) तयार केलेले ६ नमुना विद्यार्थी:'
                : 'Test how the platform customizes guidance across 6 different educational milestones:'}
            </p>
            <div className="space-y-1.5">
              {DEMO_PROFILES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => selectDemoPersona(p.id)}
                  className={`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                    profile.id === p.id
                      ? 'bg-[#168C86] text-white font-bold'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span>
                    {p.name} ({p.currentClassOrYear?.split(' ')[0]})
                  </span>
                  <span className="text-[10px] opacity-80">{p.locationCity}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Columns: Saved Routes & Careers */}
        <div className="lg:col-span-2 space-y-6">
          {/* Saved Routes */}
          <div className="bg-white rounded-2xl border border-[#e2dacb] p-6 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-[#101828]">
                {isMr ? 'जतन केलेले शैक्षणिक मार्ग' : 'Saved Education Routes'} (
                {savedRoutes.length})
              </h3>
              <button
                onClick={() => setActiveTab('mypath')}
                className="text-xs font-bold text-[#168C86] hover:underline"
              >
                {isMr ? 'अधिक मार्ग शोधा' : 'Browse All Routes'} →
              </button>
            </div>

            {savedRoutes.length > 0 ? (
              <div className="space-y-3">
                {savedRoutes.map((r) => (
                  <div
                    key={r.id}
                    className="p-4 rounded-xl border border-slate-200 bg-[#FAF8F3] flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#243B64]">
                          {r.code}
                        </span>
                        <h4 className="font-bold text-sm text-[#101828]">
                          {isMr ? r.titleMr : r.titleEn}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {isMr ? r.summaryMr : r.summaryEn}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleSaveRoute(r.id)}
                      className="text-xs text-rose-600 hover:underline shrink-0 font-medium"
                    >
                      {isMr ? 'काढून टाका' : 'Remove'}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">
                {isMr ? 'अजून कोणताही मार्ग जतन केलेला नाही.' : 'No routes saved yet.'}
              </p>
            )}
          </div>

          {/* Saved Careers */}
          <div className="bg-white rounded-2xl border border-[#e2dacb] p-6 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-[#101828]">
                {isMr ? 'जतन केलेली करिअर क्षेत्रे' : 'Bookmarked Careers'} (
                {savedCareers.length})
              </h3>
              <button
                onClick={() => setActiveTab('explore')}
                className="text-xs font-bold text-[#168C86] hover:underline"
              >
                {isMr ? 'अधिक करिअर पहा' : 'Explore Careers'} →
              </button>
            </div>

            {savedCareers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {savedCareers.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 rounded-xl border border-slate-200 bg-[#FAF8F3] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-[#168C86]">
                        {isMr ? c.familyNameMr : c.familyNameEn}
                      </span>
                      <h4 className="font-bold text-sm text-[#101828] mt-0.5">
                        {isMr ? c.titleMr : c.titleEn}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-200">
                      <button
                        onClick={() => setActiveCareerModal(c)}
                        className="text-xs font-bold text-[#168C86] hover:underline"
                      >
                        {isMr ? 'माहिती पहा' : 'Inspect'}
                      </button>
                      <button
                        onClick={() => toggleSaveCareer(c.id)}
                        className="text-xs text-rose-600 hover:underline"
                      >
                        {isMr ? 'काढून टाका' : 'Remove'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">
                {isMr ? 'अजून कोणतेही करिअर जतन केलेले नाही.' : 'No career roles bookmarked yet.'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
