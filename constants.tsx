
import { SectionData } from './types';
import { Sun, Video, Zap, Shield, Database, Cpu, BarChart3, AlertTriangle, CheckCircle, Activity, Filter, ArrowRight } from 'lucide-react';

export const SECTIONS: SectionData[] = [
  {
    id: 'scene-1',
    title: "The Efficiency Gap",
    subtitle: "Baseline Leakage",
    description: "Traditional campuses suffer from 'Dark Loads'—energy consumed by unoccupied spaces. Orbit AI identifies these leaks in real-time before they impact the bottom line.",
    visualType: 'problem-waste',
    highlights: ["Unoccupied Room Waste", "Manual Switch Latency", "Operational Entropy"],
    layout: 'left'
  },
  {
    id: 'scene-2',
    title: "High-Yield Solar Array",
    subtitle: "Hardware Backbone",
    description: "Our high-efficiency photovoltaic modules are the primary feed for the Orbit Ecosystem, designed for 40kW+ peak performance in Indian campus conditions.",
    visualType: 'solar-install',
    highlights: ["42.5kW Peak Capacity", "Anti-Soiling Coating", "Zero-Battery Grid-Sync"],
    layout: 'left'
  },
  {
    id: 'scene-3',
    title: "Solar Intelligence",
    subtitle: "42.5kW Active Yield",
    description: "Real-time generation tracking. The system is currently operating at 'OPTIMAL' status, processing raw DC into clean, prioritized campus power.",
    visualType: 'solar-intel',
    highlights: ["Status: OPTIMAL", "Prediction Model Active", "Loss Mitigation Engaged"],
    layout: 'left'
  },
  {
    id: 'scene-4',
    title: "The Neural Core",
    subtitle: "Central Processing",
    description: "Orbit AI isn't just a dashboard; it's a decision engine. It cross-references energy generation with live occupancy to balance the campus grid.",
    visualType: 'orbit-core',
    highlights: ["Edge GPU Inference", "Multi-Sensor Fusion", "Real-time Logic Tuning"],
    layout: 'center'
  },
  {
    id: 'scene-5',
    title: "Occupancy Matrix",
    subtitle: "Zone Detection",
    description: "The core shifts focus to the campus layout. Using vision-based situatonal awareness, it maps occupancy patterns in every wing simultaneously.",
    visualType: 'energy-matrix',
    highlights: ["Real-time Occupancy Check", "Zone Heatmapping", "Privacy-Preserved Data"],
    layout: 'left'
  },
  {
    id: 'scene-6',
    title: "Automated Shutdown",
    subtitle: "124kWh Saved Today",
    description: "When rooms are confirmed empty, Orbit AI triggers an auto-shutdown of lighting and HVAC systems, preventing energy spillages at the source.",
    visualType: 'energy-matrix',
    highlights: ["Autonomous Load Shedding", "2 Rooms Auto-Shutdown", "Logic-Driven Savings"],
    layout: 'left'
  },
  {
    id: 'scene-7',
    title: "System Logs & Events",
    subtitle: "12 Events Managed",
    description: "A comprehensive audit trail of every automated action. Transparency and accountability are built into the core of the Orbit OS.",
    visualType: 'system-logs',
    highlights: ["12 Recent Events", "Last Event: 2m ago", "Immutable Logic Logs"],
    layout: 'left'
  },
  {
    id: 'scene-8',
    title: "Student Monitoring",
    subtitle: "LIVE // 4 Zones Active",
    description: "Situation awareness across key campus sectors. We monitor flow and occupancy patterns to ensure student safety and resource availability.",
    visualType: 'student-monitor',
    highlights: ["Active Zone Tracking", "Flow Rate Analysis", "Zero-Identity Privacy"],
    layout: 'left'
  },
  {
    id: 'scene-9',
    title: "Edge Vision Pipeline",
    subtitle: "1 FPS Privacy Filter",
    description: "Data security is non-negotiable. Video is downsampled and processed locally. No identity is stored, only situational patterns.",
    visualType: 'cctv-scan',
    highlights: ["On-Premise Inference", "Identity Masking", "Bandwidth Minimalist"],
    layout: 'left'
  },
  {
    id: 'scene-10',
    title: "Behavioral Analysis",
    subtitle: "YOLO Anomaly Detection",
    description: "The AI recognizes 'situations'—crowds, loitering, or restricted access—without ever needing to know 'who' is in the frame.",
    visualType: 'ai-think',
    highlights: ["Contextual Detection", "No Face Recognition", "Anonymized Silhouettes"],
    layout: 'left'
  },
  {
    id: 'scene-11',
    title: "Hygiene AI",
    subtitle: "98% Cleanliness Score",
    description: "Automated facility auditing. The AI detects litter and spillages, maintaining campus hygiene standards with relentless precision.",
    visualType: 'hygiene-ai',
    highlights: ["Status: CLEAN", "Next Scan: 20m", "Auto-Janitor Dispatch"],
    layout: 'left'
  },
  {
    id: 'scene-12',
    title: "Rapid Dispatch",
    subtitle: "Proactive Intercept",
    description: "Alerts are sent directly to staff mobile units. Seconds matter in safety and maintenance; Orbit AI ensures zero delay in response.",
    visualType: 'alert-pulse',
    highlights: ["Direct Staff Push", "Zone GPS Tagging", "Verified Incident Resolve"],
    layout: 'left'
  },
  {
    id: 'scene-13',
    title: "Operational Balance",
    subtitle: "Steady State OS",
    description: "A campus that runs itself. From energy to security to hygiene, Orbit AI maintains a perfect operational equilibrium.",
    visualType: 'resolution',
    highlights: ["Site Status: SECURE", "Logic Drift Correction", "Continuous Optimization"],
    layout: 'left'
  },
  {
    id: 'scene-14',
    title: "ORBIT AI: Campus OS",
    subtitle: "Intelligence Unlocked",
    description: "The definitive platform for the smart Indian campus. Sustainable energy meets situational safety in one unified, edge-processed ecosystem.",
    visualType: 'unified',
    highlights: ["Integrated Dashboard", "Scalable Architecture", "Future-Ready Campus"],
    layout: 'left'
  }
];

export const ICONS = {
  Sun, Video, Zap, Shield, Database, Cpu, BarChart3, AlertTriangle, CheckCircle, Activity, Filter, ArrowRight
};
