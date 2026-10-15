import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { LandingPage } from './components/landing/LandingPage';
import { CareerExplorer } from './components/explore/CareerExplorer';
import { PathwayExplorer } from './components/pathways/PathwayExplorer';
import { LearnAndPractise } from './components/learn/LearnAndPractise';
import { WhatIfSimulator } from './components/pathways/WhatIfSimulator';
import { ProfileView } from './components/profile/ProfileView';
import { FindMyDirectionModal } from './components/onboarding/FindMyDirectionModal';
import { AICareerCompanion } from './components/companion/AICareerCompanion';

const MainAppContent: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#101828]">
      <Header />

      <main className="flex-1">
        {activeTab === 'home' && <LandingPage />}
        {activeTab === 'explore' && <CareerExplorer />}
        {activeTab === 'mypath' && <PathwayExplorer />}
        {activeTab === 'learn' && <LearnAndPractise />}
        {activeTab === 'whatif' && <WhatIfSimulator />}
        {activeTab === 'profile' && <ProfileView />}
      </main>

      <Footer />

      {/* Global Modals & Contextual Assistant */}
      <FindMyDirectionModal />
      <AICareerCompanion />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
