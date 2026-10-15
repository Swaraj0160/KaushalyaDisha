export type LearnerStage =
  | 'class_8_9'
  | 'class_10'
  | 'class_11_12'
  | 'diploma_iti'
  | 'undergraduate'
  | 'graduate'
  | 'career_changer';

export type Language = 'en' | 'mr';

export type EligibilityState =
  | 'matches_criteria'        // Matches recorded criteria
  | 'needs_verification'      // Needs verification
  | 'does_not_match'          // Does not match recorded criteria
  | 'requires_review';        // Information requires review

export type EvidenceLevel =
  | 'not_assessed'
  | 'self_reported'
  | 'activity_demonstrated'
  | 'ai_assisted_feedback'
  | 'mentor_reviewed'
  | 'independently_verified';

export interface SourceReference {
  id: string;
  title: string;
  url: string;
  authority: string; // e.g. "MSBSHSE", "DTE Maharashtra", "DVET Maharashtra", "NCS"
  claimOrRequirement: string;
  lastCheckedDate: string;
  verificationStatus: 'verified_official' | 'provisional_rules' | 'requires_annual_update';
  notes?: string;
}

export interface AdmissionRequirement {
  id: string;
  title: string;
  description: string;
  category: 'minimum_marks' | 'mandatory_subjects' | 'entrance_exam' | 'age_limit' | 'domicile' | 'reservation';
  detailsEn: string;
  detailsMr: string;
  officialSourceId: string;
}

export interface EducationRoute {
  id: string;
  code: string;
  titleEn: string;
  titleMr: string;
  stage: LearnerStage;
  category: 'academic' | 'diploma' | 'iti_vocational' | 'degree' | 'competitive_exam' | 'apprenticeship';
  summaryEn: string;
  summaryMr: string;
  durationMonths: number;
  durationDisplayEn: string;
  durationDisplayMr: string;
  costBand: 'very_low' | 'low' | 'moderate' | 'high';
  costDisplayEn: string;
  costDisplayMr: string;
  prerequisites: string[];
  mandatorySubjects?: string[];
  entranceExams?: string[];
  possibleNextSteps: string[];
  supportedCareers: string[];
  advantagesEn: string[];
  advantagesMr: string[];
  tradeoffsEn: string[];
  tradeoffsMr: string[];
  verificationChecklistEn: string[];
  verificationChecklistMr: string[];
  primarySource: SourceReference;
  secondarySources?: SourceReference[];
}

export interface CareerRole {
  id: string;
  titleEn: string;
  titleMr: string;
  familyId: string;
  familyNameEn: string;
  familyNameMr: string;
  summaryEn: string;
  summaryMr: string;
  dayInTheLifeEn: string;
  dayInTheLifeMr: string;
  typicalTasksEn: string[];
  typicalTasksMr: string[];
  foundationalSkills: string[];
  coreCompetencies: string[];
  applicableRoutes: string[]; // route IDs
  explorationActivityTitleEn: string;
  explorationActivityTitleMr: string;
  explorationActivityDescEn: string;
  explorationActivityDescMr: string;
  relatedRoles: string[];
  sources: SourceReference[];
}

export interface SkillItem {
  id: string;
  nameEn: string;
  nameMr: string;
  category: 'technical' | 'foundational' | 'soft_skills' | 'domain';
  descriptionEn: string;
  descriptionMr: string;
}

export interface LearningActivity {
  id: string;
  titleEn: string;
  titleMr: string;
  stage: LearnerStage;
  targetRoleOrArea: string;
  objectiveEn: string;
  objectiveMr: string;
  estimatedEffort: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructionsEn: string[];
  instructionsMr: string[];
  rubricEn: string[];
  rubricMr: string[];
  deliverableType: 'reflection' | 'short_code_or_doc' | 'comparison_chart' | 'project_link';
}

export interface SkillEvidenceItem {
  id: string;
  skillId: string;
  skillName: string;
  roleId?: string;
  activityId?: string;
  title: string;
  dateCreated: string;
  evidenceLevel: EvidenceLevel;
  notesOrUrl: string;
  feedback?: string;
  rubricScore?: number; // 1-5
  status: 'draft' | 'completed' | 'reviewed';
}

export interface AssessmentQuestion {
  id: string;
  questionEn: string;
  questionMr: string;
  explanationEn?: string;
  explanationMr?: string;
  options: {
    id: string;
    textEn: string;
    textMr: string;
    scoreWeights: Record<string, number>; // trait or competency mapping
  }[];
}

export interface AssessmentDefinition {
  id: string;
  titleEn: string;
  titleMr: string;
  stage: LearnerStage;
  descriptionEn: string;
  descriptionMr: string;
  whatItMeasuresEn: string;
  whatItMeasuresMr: string;
  whatItDoesNotEstablishEn: string;
  whatItDoesNotEstablishMr: string;
  questions: AssessmentQuestion[];
}

export interface AssessmentResult {
  assessmentId: string;
  dateTaken: string;
  stage: LearnerStage;
  scores: Record<string, number>;
  insightsEn: string[];
  insightsMr: string[];
  recommendedAreas: string[];
  methodologyNotesEn: string;
}

export interface LearnerProfile {
  id: string;
  name: string;
  locationCity: string;
  preferredLanguage: Language;
  currentStage: LearnerStage;
  // Specific stage details
  currentClassOrYear?: string;
  currentStreamOrTrade?: string;
  educationBoard?: string; // e.g. "MSBSHSE (State Board)", "CBSE", "ICSE"
  enjoyedSubjects: string[];
  interests: string[];
  knownSkills: string[];
  targetCareerId?: string;
  budgetPreference: 'minimal' | 'budget_conscious' | 'moderate' | 'flexible';
  timeWeeklyHours: number;
  locationPreference: 'home_district' | 'divisional_center' | 'metro_mumbai_pune' | 'any';
  savedRouteIds: string[];
  savedCareerIds: string[];
  evidencePassport: SkillEvidenceItem[];
  assessmentResults: Record<string, AssessmentResult>;
  isDemoProfile: boolean;
}

export interface WhatIfParameters {
  targetCareerId: string;
  selectedRouteId: string;
  weeklyHours: number;
  budgetBand: 'minimal' | 'budget_conscious' | 'moderate' | 'flexible';
  location: 'home_district' | 'divisional_center' | 'metro_mumbai_pune' | 'any';
}
