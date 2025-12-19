
import React from 'react';
import { SectionData } from '../types';
import { ICONS, SECTIONS } from '../constants';

interface SectionContentProps {
  section: SectionData;
  isActive: boolean;
}

const SectionContent: React.FC<SectionContentProps> = ({ section, isActive }) => {
  const currentIndex = SECTIONS.findIndex(s => s.id === section.id);
  const total = SECTIONS.length;
  const isSolar = currentIndex < 7;
  const isFinale = section.visualType === 'unified';

  return (
    <div className={`absolute top-0 h-full z-40 transition-all duration-[1200ms] bg-transparent flex flex-col left-0 w-full md:w-[600px] items-start text-left ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>

       {/* Adjusted depth gradient for better background visibility */}
       <div className="absolute inset-0 pointer-events-none transition-opacity duration-1000 opacity-100 bg-gradient-to-r from-black/95 via-black/60 to-transparent md:from-black/90 md:via-black/40"></div>

       <div className="relative flex-1 flex flex-col justify-center px-6 md:px-20 py-12 md:py-24 space-y-8 md:space-y-16 transition-all duration-1000 max-w-none">
          
          {/* Executive Progress Header */}
          <div className="space-y-4 md:space-y-6 w-full max-w-md opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
            <div className="flex items-center justify-between w-full gap-2">
              <span className="text-[8px] md:text-[11px] font-black tracking-[0.3em] md:tracking-[0.6em] text-white/40 font-mono uppercase">
                Orbit_Logic // PITCH_{String(currentIndex + 1).padStart(2, '0')}
              </span>
              <div className={`px-2 md:px-4 py-1 md:py-1.5 rounded-lg text-[8px] md:text-[10px] font-black border tracking-widest ${isSolar ? 'border-orange-500/40 text-orange-400 bg-orange-500/5' : 'border-cyan-500/40 text-cyan-400 bg-cyan-500/5'}`}>
                {isSolar ? 'ENERGY_AI' : 'SECURITY_AI'}
              </div>
            </div>
            <div className="w-full h-[3px] md:h-[4px] bg-white/10 rounded-full overflow-hidden shadow-inner">
               <div className={`h-full transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) ${isSolar ? 'bg-orange-500 shadow-[0_0_15px_#f97316]' : 'bg-cyan-500 shadow-[0_0_15px_#06b6d4]'}`} style={{ width: `${((currentIndex + 1) / total) * 100}%` }}></div>
            </div>
          </div>

          {/* Value Proposition Title */}
          <div className="space-y-4 md:space-y-8 max-w-md opacity-0 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards]">
            <div className="space-y-2 md:space-y-4">
              <span className={`font-black text-[9px] md:text-[12px] tracking-[0.3em] md:tracking-[0.5em] uppercase transition-colors ${isSolar ? 'text-orange-400' : 'text-cyan-400'}`}>
                {section.subtitle}
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white font-rajdhani leading-[0.85] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                {section.title}
              </h2>
            </div>
            <div className={`w-12 md:w-16 h-1 md:h-1.5 rounded-full transition-colors ${isSolar ? 'bg-orange-500/60' : 'bg-cyan-500/60'}`}></div>
            <p className="text-white/80 text-sm md:text-xl font-light leading-relaxed drop-shadow-md">
              {section.description}
            </p>
          </div>

          {/* Action Buttons - Positioned High */}
          {isFinale && (
            <div className="w-full max-w-md space-y-3 md:space-y-4">
               <a href="https://orbitcampus.netlify.app" target="_blank" rel="noopener noreferrer" className="group relative w-full bg-cyan-500 text-black px-6 md:px-10 py-4 md:py-6 rounded-[20px] md:rounded-[30px] font-black transition-all duration-500 hover:bg-white hover:-translate-y-2 shadow-[0_25px_100px_rgba(6,182,212,0.4)] hover:shadow-[0_40px_120px_rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer no-underline">
                  <span className="relative z-10 text-[10px] md:text-[14px] uppercase tracking-[0.3em] md:tracking-[0.5em] transition-colors duration-500">Visit Dashboard</span>
                  <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-[20px] md:rounded-[30px]"></div>
               </a>
               <a href="/roi.html" className="group relative w-full bg-white/5 border-2 border-cyan-500/40 text-white px-6 md:px-10 py-3 md:py-5 rounded-[20px] md:rounded-[30px] font-black transition-all duration-500 hover:bg-cyan-500/10 hover:border-cyan-500 hover:-translate-y-2 shadow-[0_15px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_80px_rgba(6,182,212,0.2)] flex items-center justify-center cursor-pointer no-underline">
                  <span className="relative z-10 text-[9px] md:text-[12px] uppercase tracking-[0.3em] md:tracking-[0.5em] transition-colors duration-500">View ROI & Financial Model</span>
               </a>
            </div>
          )}

          {/* Strategic Metrics Section */}
          <div className="space-y-4 md:space-y-8 pt-4 md:pt-6 w-full max-w-md opacity-0 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards]">
             <div className="flex items-center gap-3 md:gap-5">
                <div className="h-[1px] flex-1 bg-white/20"></div>
                <h4 className="text-[8px] md:text-[11px] font-black tracking-[0.3em] md:tracking-[0.4em] text-white/50 uppercase whitespace-nowrap">Core_Deliverables</h4>
                <div className="h-[1px] flex-1 bg-white/20"></div>
             </div>

             <div className="grid gap-3 md:gap-5 grid-cols-1">
                {section.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 md:gap-6 group p-3 md:p-6 rounded-xl md:rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-lg opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]" style={{ animationDelay: `${0.7 + idx * 0.1}s` }}>
                     <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 group-hover:scale-150 ${isSolar ? 'bg-orange-500 shadow-[0_0_20px_#f97316]' : 'bg-cyan-500 shadow-[0_0_20px_#06b6d4]'}`}></div>
                     <span className="text-sm md:text-lg font-bold text-white/90 group-hover:text-white tracking-tight">{item}</span>
                  </div>
                ))}
             </div>
          </div>

       </div>

       {/* Footer Branding */}
       <div className="relative px-6 md:px-20 py-6 md:py-12 border-t border-white/10 flex items-center gap-3 md:gap-6 w-full">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-cyan-400 text-lg md:text-2xl shadow-xl">O</div>
          <div className="flex flex-col">
             <span className="text-[9px] md:text-[12px] font-black tracking-[0.2em] md:tracking-[0.3em] text-white uppercase">Orbit_AI_Ecosystem</span>
             <span className="text-[8px] md:text-[10px] font-medium text-white/30 uppercase tracking-widest mt-0.5 md:mt-1">Proprietary_Architecture</span>
          </div>
       </div>

    </div>
  );
};

export default SectionContent;
