import React, { createContext, useContext, useState, useEffect } from 'react';
import { LearnerProfile, Language, LearnerStage, SkillEvidenceItem, AssessmentResult, CareerRole } from '../types';
import { DEMO_PROFILES } from '../data/demoProfiles';
import {
  getInitialProfile,
  saveProfile,
  toggleSaveRoute as storageToggleSaveRoute,
  toggleSaveCareer as storageToggleSaveCareer,
  addEvidenceItem as storageAddEvidence,
  deleteEvidenceItem as storageDeleteEvidence,
  saveAssessmentResult as storageSaveAssessment
} from '../services/storage';

export type NavigationTab = 'home' | 'explore' | 'mypath' | 'learn' | 'profile' | 'whatif';

interface AppContextType {
  profile: LearnerProfile;
  setProfile: (p: LearnerProfile) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  selectDemoPersona: (personaId: string) => void;
  toggleSaveRoute: (routeId: string) => void;
  toggleSaveCareer: (careerId: string) => void;
  addEvidence: (item: SkillEvidenceItem) => void;
  removeEvidence: (id: string) => void;
  saveAssessment: (result: AssessmentResult) => void;
  comparisonRouteIds: string[];
  toggleRouteForComparison: (routeId: string) => void;
  clearComparison: () => void;
  onboardingOpen: boolean;
  setOnboardingOpen: (open: boolean) => void;
  companionOpen: boolean;
  setCompanionOpen: (open: boolean) => void;
  activeCareerModal: CareerRole | null;
  setActiveCareerModal: (role: CareerRole | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfileState] = useState<LearnerProfile>(getInitialProfile);
  const [language, setLanguageState] = useState<Language>(() => profile.preferredLanguage || 'en');
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [comparisonRouteIds, setComparisonRouteIds] = useState<string[]>(['route_fyjc_science', 'route_polytechnic_diploma']);
  const [onboardingOpen, setOnboardingOpen] = useState<boolean>(false);
  const [companionOpen, setCompanionOpen] = useState<boolean>(false);
  const [activeCareerModal, setActiveCareerModal] = useState<CareerRole | null>(null);

  // Sync profile edits to storage
  const setProfile = (newProfile: LearnerProfile) => {
    setProfileState(newProfile);
    saveProfile(newProfile);
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const updated = { ...profile, preferredLanguage: lang };
    setProfileState(updated);
    saveProfile(updated);
  };

  const selectDemoPersona = (personaId: string) => {
    const found = DEMO_PROFILES.find((p) => p.id === personaId);
    if (found) {
      setProfileState(found);
      setLanguageState(found.preferredLanguage);
      saveProfile(found);
      // Pre-seed comparison based on stage
      if (found.currentStage === 'class_10') {
        setComparisonRouteIds(['route_fyjc_science', 'route_polytechnic_diploma', 'route_iti_trade']);
      } else if (found.currentStage === 'diploma_iti') {
        setComparisonRouteIds(['route_dse_lateral', 'route_nats_apprenticeship']);
      } else if (found.currentStage === 'class_11_12') {
        setComparisonRouteIds(['route_btech_degree', 'route_bsc_cs_analytics']);
      } else if (found.currentStage === 'graduate') {
        setComparisonRouteIds(['route_mpsc_competitive', 'route_grad_tech_transition']);
      }
    }
  };

  const toggleSaveRoute = (routeId: string) => {
    const updated = storageToggleSaveRoute(routeId, profile);
    setProfileState(updated);
  };

  const toggleSaveCareer = (careerId: string) => {
    const updated = storageToggleSaveCareer(careerId, profile);
    setProfileState(updated);
  };

  const addEvidence = (item: SkillEvidenceItem) => {
    const updated = storageAddEvidence(item, profile);
    setProfileState(updated);
  };

  const removeEvidence = (id: string) => {
    const updated = storageDeleteEvidence(id, profile);
    setProfileState(updated);
  };

  const saveAssessment = (result: AssessmentResult) => {
    const updated = storageSaveAssessment(result, profile);
    setProfileState(updated);
  };

  const toggleRouteForComparison = (routeId: string) => {
    setComparisonRouteIds((prev) => {
      if (prev.includes(routeId)) {
        return prev.filter((id) => id !== routeId);
      }
      if (prev.length >= 3) {
        // Keep max 3 routes for clean side-by-side comparison
        return [...prev.slice(1), routeId];
      }
      return [...prev, routeId];
    });
  };

  const clearComparison = () => {
    setComparisonRouteIds([]);
  };

  return (
    <AppContext.Provider
      value={{
        profile,
        setProfile,
        language,
        setLanguage,
        activeTab,
        setActiveTab,
        selectDemoPersona,
        toggleSaveRoute,
        toggleSaveCareer,
        addEvidence,
        removeEvidence,
        saveAssessment,
        comparisonRouteIds,
        toggleRouteForComparison,
        clearComparison,
        onboardingOpen,
        setOnboardingOpen,
        companionOpen,
        setCompanionOpen,
        activeCareerModal,
        setActiveCareerModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
