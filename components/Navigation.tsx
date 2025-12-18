import React from 'react';
import { SectionData } from '../types';

interface NavigationProps {
  sections: SectionData[];
  activeSectionIndex: number;
  onNavigate: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ sections, activeSectionIndex, onNavigate }) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => onNavigate(index)}
          className="group relative flex items-center justify-end"
          aria-label={`Go to ${section.title}`}
        >
          <span className={`absolute right-8 text-xs font-mono tracking-widest bg-slate-900 px-2 py-1 rounded border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
            activeSectionIndex === index ? 'text-white' : 'text-slate-400'
          }`}>
            {section.title}
          </span>
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSectionIndex === index
                ? 'bg-cyan-500 border-cyan-500 scale-125'
                : 'bg-transparent border-slate-600 hover:border-cyan-400'
            }`}
          />
          {activeSectionIndex === index && (
             <div className="absolute w-3 h-3 rounded-full bg-cyan-500 animate-ping opacity-75"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
