export type Language = 'en' | 'ar';

export type SectionId = 
  | 'overview' 
  | 'data' 
  | 'cyber' 
  | 'twins' 
  | 'factory' 
  | 'case' 
  | 'takeaways';

export interface SectionMeta {
  id: SectionId;
  title: {
    en: string;
    ar: string;
  };
  subtitle: {
    en: string;
    ar: string;
  };
  durationMinutes: number;
}

export interface PipelineStage {
  id: string;
  name: { en: string; ar: string };
  desc: { en: string; ar: string };
  example: { en: string; ar: string };
  icon: string;
}

export interface CyberThreat {
  id: string;
  name: { en: string; ar: string };
  desc: { en: string; ar: string };
  impact: { en: string; ar: string };
  protection: { en: string; ar: string };
  icon: string;
}

export interface ArchitectureLayer {
  id: number;
  level: string;
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  accentColor: string;
  badgeBg: string;
  borderColor: string;
  components: { en: string; ar: string }[];
}

export interface CaseStudyScenario {
  id: 'normal' | 'vibration' | 'temp' | 'suspicious';
  label: { en: string; ar: string };
  color: string;
  tagColor: string;
  badgeText: { en: string; ar: string };
  description: { en: string; ar: string };
  engineeringAction: { en: string; ar: string };
  assetHealth: number; // 0 - 100%
}

export interface PresenterNote {
  talkingPoints: { en: string[]; ar: string[] };
  keyTakeaway: { en: string; ar: string };
  estimatedMinutes: number;
}
