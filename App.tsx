import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SECTIONS, ICONS } from './constants';
import Visualizer from './components/Visualizer';
import SectionContent from './components/SectionContent';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const lastInteractionTime = useRef(0);

  const handleNavigate = useCallback((direction: 'next' | 'prev' | number) => {
    const now = Date.now();
    // Prevent overlapping transitions
    if (now - lastInteractionTime.current < 1600) return;

    setActiveSectionIndex((prev) => {
      let nextIndex = prev;
      if (typeof direction === 'number') {
        nextIndex = direction;
      } else if (direction === 'next') {
        nextIndex = Math.min(prev + 1, SECTIONS.length - 1);
      } else {
        nextIndex = Math.max(prev - 1, 0);
      }
      
      if (nextIndex !== prev) {
        setIsTransitioning(true);
        lastInteractionTime.current = now;
        // The lock-out period matches the animation duration in Visualizer
        setTimeout(() => setIsTransitioning(false), 1600);
      }
      return nextIndex;
    });
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNavigate('next');
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        handleNavigate('prev');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNavigate]);

  // Scroll Navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 30) return;
      handleNavigate(e.deltaY > 0 ? 'next' : 'prev');
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleNavigate]);

  return (
    <div className="relative w-screen h-screen bg-black text-white overflow-hidden font-inter select-none">
      
      {/* BACKGROUND 3D STAGE */}
      <Visualizer section={SECTIONS[activeSectionIndex]} />

      {/* OVERLAY NARRATIVE */}
      <SectionContent 
        key={SECTIONS[activeSectionIndex].id}
        section={SECTIONS[activeSectionIndex]} 
        isActive={true}
      />

      {/* NAV DOTS */}
      <Navigation 
        sections={SECTIONS} 
        activeSectionIndex={activeSectionIndex} 
        onNavigate={(index) => handleNavigate(index)}
      />

      {/* TOP STATUS HUD */}
      <div className="fixed top-4 md:top-8 right-4 md:right-8 z-50 flex items-center gap-3 md:gap-6">
         <div className="text-right flex flex-col">
            <span className="text-[7px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] text-white/40 uppercase mb-1 hidden md:block">Orbit AI Core Status</span>
            <div className="flex items-center gap-1.5 md:gap-2">
               <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full shadow-[0_0_10px_#22d3ee] ${isTransitioning ? 'bg-orange-400' : 'bg-cyan-400 animate-pulse'}`}></div>
               <span className={`text-[9px] md:text-[12px] font-bold font-mono tracking-[0.15em] md:tracking-[0.2em] transition-colors ${isTransitioning ? 'text-orange-300' : 'text-cyan-100'}`}>
                 {isTransitioning ? 'POSITIONING...' : 'SYNC_ACTIVE'}
               </span>
            </div>
         </div>
         <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-lg md:rounded-xl flex items-center justify-center font-black text-white text-xl md:text-2xl backdrop-blur-md shadow-2xl">O</div>
      </div>

      {/* INTERACTIVE CONTROLS (ARROWS) */}
      <div className="fixed bottom-6 md:bottom-10 left-1/2 md:left-auto md:right-1/2 transform -translate-x-1/2 md:translate-x-1/2 z-50 flex items-center gap-3 md:gap-6">
        <button
          onClick={() => handleNavigate('prev')}
          disabled={activeSectionIndex === 0 || isTransitioning}
          className={`w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center transition-all backdrop-blur-xl ${
            activeSectionIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-60 hover:opacity-100 hover:bg-white/10 hover:scale-110 active:scale-95'
          }`}
        >
          <ICONS.ArrowRight className="rotate-180 w-4 h-4 md:w-6 md:h-6" />
        </button>

        <div className="flex flex-col items-center gap-0.5 md:gap-1">
          <span className="text-[7px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] text-white/20 uppercase font-mono hidden md:block">Sequence</span>
          <div className="text-xs md:text-sm font-bold text-cyan-400/80 font-mono">
            {String(activeSectionIndex + 1).padStart(2, '0')} / {String(SECTIONS.length).padStart(2, '0')}
          </div>
        </div>

        <button
          onClick={() => handleNavigate('next')}
          disabled={activeSectionIndex === SECTIONS.length - 1 || isTransitioning}
          className={`w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center transition-all backdrop-blur-xl ${
            activeSectionIndex === SECTIONS.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-60 hover:opacity-100 hover:bg-white/10 hover:scale-110 active:scale-95'
          }`}
        >
          <ICONS.ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>

      {/* INITIAL HINT */}
      {activeSectionIndex === 0 && !isTransitioning && (
        <div className="fixed bottom-20 md:bottom-10 right-4 md:right-10 z-50 flex flex-col items-end gap-2 md:gap-3 pointer-events-none animate-pulse">
           <div className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-white/40 font-mono uppercase">Use Arrows or Scroll</div>
           <div className="w-[1px] h-8 md:h-12 bg-white/10 relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-cyan-400"></div>
           </div>
        </div>
      )}

      {/* NOISE & VIGNETTE LAYER */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};

export default App;
