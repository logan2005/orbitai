
import { SectionData } from './types';
import { Sun, Video, Zap, Shield, Database, Cpu, BarChart3, AlertTriangle, CheckCircle, Activity, Filter, ArrowRight } from 'lucide-react';

export const SECTIONS: SectionData[] = [
  {
    id: 'scene-1',
    title: "The Hidden Problem",
    subtitle: "Energy Wasted Without Awareness",
    description: "Every infrastructure consumes power constantly — lights, fans, air conditioning, systems — even when no one is present. Most of this energy loss goes unnoticed, silently increasing costs and carbon footprint.",
    visualType: 'problem-waste',
    highlights: ["Power used without occupancy", "No real-time visibility", "Costs rising silently"],
    layout: 'left'
  },
  {
    id: 'scene-2',
    title: "Harnessing Renewable Energy",
    subtitle: "Clean Energy Begins Here",
    description: "Renewable energy systems come into view as a natural solution — capturing clean power and converting it into usable electricity. This is the foundation of a smarter, cleaner infrastructure ecosystem.",
    visualType: 'solar-install',
    highlights: ["Renewable energy source", "Designed for infrastructure scale", "Grid-connected efficiency"],
    layout: 'left'
  },
  {
    id: 'scene-3',
    title: "Energy Comes Alive",
    subtitle: "Real-Time Power Intelligence",
    description: "Energy is no longer static. ORBIT AI continuously tracks how much power is being generated, consumption patterns, and optimization opportunities — moment by moment.",
    visualType: 'solar-intel',
    highlights: ["Live energy monitoring", "Predictive consumption analysis", "Stable power optimization"],
    layout: 'left'
  },
  {
    id: 'scene-4',
    title: "The Brain of Infrastructure",
    subtitle: "ORBIT AI Activates",
    description: "At the center of everything, ORBIT AI awakens — not as a control panel, but as an intelligent decision-maker. It understands both energy and human presence, connecting systems into one thinking core.",
    visualType: 'orbit-core',
    highlights: ["Intelligent decision engine", "Real-time awareness", "Cross-system intelligence"],
    layout: 'center'
  },
  {
    id: 'scene-5',
    title: "Understanding Occupancy",
    subtitle: "Knowing What's in Use",
    description: "ORBIT AI now looks across the infrastructure, identifying which rooms are occupied and which are empty — without knowing who anyone is. Just awareness, not identity.",
    visualType: 'energy-matrix',
    highlights: ["Occupancy awareness", "Privacy preserved", "Zone-level understanding"],
    layout: 'left'
  },
  {
    id: 'scene-6',
    title: "Intelligent Power Control",
    subtitle: "Energy Used Only Where Needed",
    description: "When spaces are empty, ORBIT AI automatically reduces power usage — shutting down lights and cooling where they aren't needed, saving energy instantly.",
    visualType: 'energy-matrix',
    highlights: ["Automatic power saving", "No manual intervention", "Immediate impact"],
    layout: 'left'
  },
  {
    id: 'scene-7',
    title: "Transparency & Trust",
    subtitle: "Every Action Accounted For",
    description: "Every decision made by ORBIT AI is logged and visible. This ensures accountability, trust, and complete transparency in how the infrastructure operates.",
    visualType: 'system-logs',
    highlights: ["Action history", "System transparency", "Verified automation"],
    layout: 'left'
  },
  {
    id: 'scene-8',
    title: "Watching Over Infrastructure",
    subtitle: "Continuous Situational Awareness",
    description: "Cameras quietly observe facility spaces — not to identify individuals, but to understand movement, density, and flow. Safety begins with awareness.",
    visualType: 'student-monitor',
    highlights: ["Facility-wide monitoring", "Movement patterns", "Privacy-first design"],
    layout: 'left'
  },
  {
    id: 'scene-9',
    title: "How Vision Becomes Insight",
    subtitle: "Frames, Not Faces",
    description: "Video feeds are broken into frames and analyzed locally. ORBIT AI sees patterns, not people — ensuring security without surveillance overreach.",
    visualType: 'cctv-scan',
    highlights: ["On-device processing", "No identity storage", "Secure by design"],
    layout: 'left'
  },
  {
    id: 'scene-10',
    title: "Understanding Behavior",
    subtitle: "Detecting Situations, Not Individuals",
    description: "ORBIT AI recognizes situations — unusual gatherings, restricted access, aggressive movement — and highlights them clearly for attention.",
    visualType: 'ai-think',
    highlights: ["Anomaly detection", "Context awareness", "No face recognition"],
    layout: 'left'
  },
  {
    id: 'scene-11',
    title: "Clean & Safe Spaces",
    subtitle: "Hygiene Without Manual Audits",
    description: "Litter, spills, and hygiene concerns are detected automatically, helping maintain clean facility environments without constant inspections.",
    visualType: 'hygiene-ai',
    highlights: ["Cleanliness tracking", "Automated alerts", "Health-focused AI"],
    layout: 'left'
  },
  {
    id: 'scene-12',
    title: "Instant Response",
    subtitle: "Right People, Right Time",
    description: "When attention is needed, alerts are sent instantly to nearby staff — ensuring faster response and safer environments.",
    visualType: 'alert-pulse',
    highlights: ["Real-time alerts", "Location-based dispatch", "Faster resolution"],
    layout: 'left'
  },
  {
    id: 'scene-13',
    title: "Everything in Balance",
    subtitle: "An Infrastructure That Self-Manages",
    description: "Energy, safety, hygiene, and operations work together seamlessly. The infrastructure runs smoothly, intelligently, and efficiently.",
    visualType: 'resolution',
    highlights: ["Unified operations", "Continuous optimization", "Reliable intelligence"],
    layout: 'left'
  },
  {
    id: 'scene-14',
    title: "ORBIT AI",
    subtitle: "Intelligence That Works Silently",
    description: "ORBIT AI is not just software — it's the invisible intelligence that powers smarter, safer, and more sustainable infrastructures.",
    visualType: 'unified',
    highlights: ["One unified platform", "Scalable for the future", "Built for real premises"],
    layout: 'left'
  }
];

export const ICONS = {
  Sun, Video, Zap, Shield, Database, Cpu, BarChart3, AlertTriangle, CheckCircle, Activity, Filter, ArrowRight
};
