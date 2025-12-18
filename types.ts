
export interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  visualType: 
    | 'problem-waste' 
    | 'solar-install' 
    | 'solar-intel' 
    | 'orbit-core' 
    | 'energy-matrix' 
    | 'prediction' 
    | 'system-logs' 
    | 'student-monitor' 
    | 'cctv-scan' 
    | 'ai-think' 
    | 'hygiene-ai' 
    | 'alert-pulse' 
    | 'resolution' 
    | 'unified';
  highlights: string[];
  layout: 'center' | 'left' | 'right' | 'bottom-left' | 'bottom-right' | 'bottom-center';
}

export enum SolarState {
  IDLE = 'IDLE',
  GENERATING = 'GENERATING',
  OPTIMIZING = 'OPTIMIZING',
}
