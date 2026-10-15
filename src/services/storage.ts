import { LearnerProfile, SkillEvidenceItem, AssessmentResult } from '../types';
import { DEMO_PROFILES } from '../data/demoProfiles';

const STORAGE_KEY_PROFILE = 'kaushalyadisha_profile_v1';
const STORAGE_KEY_SAVED_ROUTES = 'kaushalyadisha_saved_routes_v1';
const STORAGE_KEY_SAVED_CAREERS = 'kaushalyadisha_saved_careers_v1';
const STORAGE_KEY_PASSPORT = 'kaushalyadisha_passport_v1';

export function getInitialProfile(): LearnerProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn('Could not read from localStorage, using default demo profile', err);
  }
  // Default to Class 10 student (Aarav Deshmukh) as illustrative starter
  return DEMO_PROFILES[1];
}

export function saveProfile(profile: LearnerProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
  } catch (err) {
    console.warn('Could not save profile to localStorage', err);
  }
}

export function addEvidenceItem(item: SkillEvidenceItem, profile: LearnerProfile): LearnerProfile {
  const updatedPassport = [item, ...profile.evidencePassport.filter(e => e.id !== item.id)];
  const updatedProfile: LearnerProfile = {
    ...profile,
    evidencePassport: updatedPassport
  };
  saveProfile(updatedProfile);
  return updatedProfile;
}

export function deleteEvidenceItem(id: string, profile: LearnerProfile): LearnerProfile {
  const updatedPassport = profile.evidencePassport.filter(e => e.id !== id);
  const updatedProfile: LearnerProfile = {
    ...profile,
    evidencePassport: updatedPassport
  };
  saveProfile(updatedProfile);
  return updatedProfile;
}

export function toggleSaveRoute(routeId: string, profile: LearnerProfile): LearnerProfile {
  const existing = new Set(profile.savedRouteIds || []);
  if (existing.has(routeId)) {
    existing.delete(routeId);
  } else {
    existing.add(routeId);
  }
  const updatedProfile: LearnerProfile = {
    ...profile,
    savedRouteIds: Array.from(existing)
  };
  saveProfile(updatedProfile);
  return updatedProfile;
}

export function toggleSaveCareer(careerId: string, profile: LearnerProfile): LearnerProfile {
  const existing = new Set(profile.savedCareerIds || []);
  if (existing.has(careerId)) {
    existing.delete(careerId);
  } else {
    existing.add(careerId);
  }
  const updatedProfile: LearnerProfile = {
    ...profile,
    savedCareerIds: Array.from(existing)
  };
  saveProfile(updatedProfile);
  return updatedProfile;
}

export function saveAssessmentResult(result: AssessmentResult, profile: LearnerProfile): LearnerProfile {
  const updatedProfile: LearnerProfile = {
    ...profile,
    assessmentResults: {
      ...profile.assessmentResults,
      [result.assessmentId]: result
    }
  };
  saveProfile(updatedProfile);
  return updatedProfile;
}
