
import React, { useMemo } from 'react';
import { SectionData } from '../types';
import { ICONS, SECTIONS } from '../constants';
import { User, UserMinus } from 'lucide-react';

interface VisualizerProps {
  section: SectionData;
}

const Visualizer: React.FC<VisualizerProps> = ({ section }) => {
  const currentIndex = SECTIONS.findIndex(s => s.id === section.id);

  const groupIndex = currentIndex <= 2 ? 0 : currentIndex <= 6 ? 1 : currentIndex <= 11 ? 2 : 3;

  const chapterGap = 5000;
  const worldZ = groupIndex * chapterGap;

  const subProgression = currentIndex - (groupIndex === 0 ? 0 : groupIndex === 1 ? 3 : groupIndex === 2 ? 7 : 12);
  const orbitalRotation = subProgression * 8;

  const isCentered = section.layout === 'center';

  // Determine label text based on current section
  const getLabelText = () => {
    if (currentIndex === 0) return "Unseen Energy Loss";
    if (currentIndex === 1) return "Solar Power Source";
    if (currentIndex === 2) return "Live Solar Intelligence";
    if (currentIndex === 3) return "AI Core Online";
    if (currentIndex === 4) return "Infrastructure Awareness Map";
    if (currentIndex === 5) return "Smart Energy Control";
    if (currentIndex === 6) return "System Activity Log";
    if (currentIndex === 7) return "Live Facility View";
    if (currentIndex === 8) return "Vision Processing Layer";
    if (currentIndex === 9) return "Behavior Analysis";
    if (currentIndex === 10) return "Hygiene Intelligence";
    if (currentIndex === 11) return "Smart Alerts";
    if (currentIndex === 12) return "System Harmony";
    if (currentIndex === 13) return "ORBIT AI Infrastructure OS";
    return "";
  };

  return (
    <div className="fixed inset-0 z-0 bg-[#000408]">
      {/* Dynamic Viewport Positioning */}
      <div
        className={`absolute top-0 transition-all duration-[2000ms] cubic-bezier(0.16, 1, 0.3, 1) ${isCentered ? 'left-0 w-full' : 'left-0 md:left-[20%] w-full md:w-[80%]'} h-full perspective-[3500px]`}
      >
        <div
          className="w-full h-full flex items-center justify-center transition-all duration-[2000ms] cubic-bezier(0.16, 1, 0.3, 1)"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(15deg) rotateY(${-orbitalRotation}deg) translate3d(0, 0, ${worldZ}px)`
          }}
        >
          {/* SCENE 1: SOLAR & ENERGY INTEL */}
          <SceneWrapper z={0} active={groupIndex === 0}>
             <EnergyScene subStep={currentIndex} />
          </SceneWrapper>

          {/* SCENE 2: ENERGY MATRIX & LOGS */}
          <SceneWrapper z={-chapterGap} active={groupIndex === 1}>
             <MatrixScene subStep={currentIndex} />
          </SceneWrapper>

          {/* SCENE 3: STUDENT MONITOR & HYGIENE */}
          <SceneWrapper z={-chapterGap * 2} active={groupIndex === 2}>
             <SecurityScene subStep={currentIndex} />
          </SceneWrapper>

          {/* SCENE 4: FINALE RESOLUTION */}
          <SceneWrapper z={-chapterGap * 3} active={groupIndex === 3}>
             <ResponseScene subStep={subProgression} currentIndex={currentIndex} />
          </SceneWrapper>
        </div>
      </div>

      {/* Label Overlay - Outside 3D Transform Context */}
      <div className="absolute inset-0 pointer-events-none z-20 flex items-start justify-center">
        <Label3D text={getLabelText()} />
      </div>

      {/* Atmospheric Fog/Glow */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(34,211,238,0.2)_0%,transparent_70%)]"></div>
      </div>
    </div>
  );
};

/* --- SHARED COMPONENTS --- */

const SceneWrapper = ({ z, active, children }: React.PropsWithChildren<{ z: number, active: boolean }>) => (
  <div 
    className={`absolute transition-all duration-[2000ms] ${active ? 'opacity-100 scale-100 blur-none' : 'opacity-0 scale-75 blur-3xl pointer-events-none'}`}
    style={{ transformStyle: 'preserve-3d', transform: `translate3d(0, 0, ${z}px)` }}
  >
     {children}
  </div>
);

const Label3D = ({ text, active = true }: { text: string, active?: boolean }) => (
  <div className={`mt-16 md:mt-20 bg-black/90 border border-cyan-400/40 px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-700 ${active && text ? 'opacity-80 scale-100' : 'opacity-0 scale-90'} max-w-[85vw]`}>
     <div className="text-[7px] md:text-[9px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-cyan-400/70 uppercase text-center leading-tight">{text}</div>
  </div>
);

/* --- SCENES --- */

const EnergyScene = ({ subStep }: { subStep: number }) => {
  const isWaste = subStep === 0;
  const isPanels = subStep >= 1;
  const isGenerating = subStep === 2;

  return (
    <div className="relative w-[90vw] max-w-[1000px] h-[60vh] max-h-[700px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
       <div className="absolute w-full h-full bg-slate-900 border-2 border-white/30 rounded-[40px] md:rounded-[80px] shadow-[0_0_150px_rgba(0,0,0,0.9)] transform-gpu rotateX-45 overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
          {isWaste && (
            <div className="absolute inset-0 flex flex-col justify-around py-12 md:py-48 px-4 md:px-16 bg-slate-950/80">
               {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-[3px] bg-red-900/20 rounded-full overflow-hidden">
                     <div className="absolute inset-y-0 left-0 w-48 md:w-96 bg-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.3)] animate-[waste-flow_3s_linear_infinite]" style={{ animationDelay: `${i * 0.7}s` }}></div>
                  </div>
               ))}
            </div>
          )}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.2)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[length:60px_60px]"></div>
       </div>

       <div className={`grid grid-cols-6 grid-rows-4 gap-1.5 md:gap-3 p-6 md:p-12 absolute inset-0 transition-all duration-1000 transform-gpu rotateX-45 ${isPanels ? 'opacity-100' : 'opacity-10'}`} style={{ transformStyle: 'preserve-3d' }}>
          {[...Array(24)].map((_, i) => (
             <div key={i} className={`relative bg-[#0a1525] border border-blue-400/40 rounded-lg md:rounded-xl transition-all duration-1000 ${isPanels ? 'scale-100 shadow-[0_15px_40px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(34,211,238,0.1)]' : 'scale-0'}`} style={{ transitionDelay: `${i * 25}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40 rounded-lg pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-b from-white/5 to-transparent rounded-t-lg pointer-events-none"></div>
                {isGenerating && <div className="absolute inset-0 bg-yellow-400/30 animate-pulse shadow-[0_0_40px_rgba(250,204,21,0.4)]"></div>}
             </div>
          ))}
       </div>

       <div className="absolute -bottom-16 md:-bottom-32 right-0 md:right-0 p-4 md:p-10 bg-slate-950 border-2 border-cyan-400/50 rounded-[20px] md:rounded-[40px] backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,1)] z-50 transform translate-x-4 md:translate-x-12 scale-75 md:scale-100">
          <div className="text-[8px] md:text-[12px] font-mono text-cyan-400 mb-2 md:mb-3 tracking-[0.3em] md:tracking-[0.4em] font-black uppercase">Telemetry_Flux</div>
          <div className="text-3xl md:text-6xl font-black text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.7)]">{isGenerating ? '42.50 kW' : '0.00 kW'}</div>
          <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-4">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_15px_#4ade80]"></div>
            <div className="text-[8px] md:text-[12px] font-bold text-green-400 uppercase tracking-[0.1em]">Status: OPTIMAL_SYNC</div>
          </div>
       </div>
    </div>
  );
};

const MatrixScene = ({ subStep }: { subStep: number }) => {
  const isCore = subStep === 3;
  const isDetection = subStep === 4;
  const isShutdown = subStep === 5;
  const isLogs = subStep === 6;

  const roomData = [
    { id: 101, occupied: false },
    { id: 102, occupied: false },
    { id: 103, occupied: true },
    { id: 104, occupied: true },
  ];

  const showConnections = isDetection || isShutdown || isLogs;

  return (
    <div className="relative flex items-center justify-center w-[90vw] max-w-[1200px] h-[60vh] max-h-[800px]" style={{ transformStyle: 'preserve-3d' }}>
       
       {/* CONNECTION LINES LAYER - Backgrounded */}
       {showConnections && (
          <div className="absolute inset-0 pointer-events-none transition-opacity duration-[1500ms] z-0" style={{ transformStyle: 'preserve-3d' }}>
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1200 800" fill="none">
              {roomData.map((room, i) => {
                const isShutDownStep = isShutdown || isLogs;
                const isLineCut = isShutDownStep && !room.occupied;
                
                const startX = isCore ? 600 : 250; 
                const startY = 400;
                
                const gridX = i % 2;
                const gridY = Math.floor(i / 2);
                
                const matrixOffsetX = isLogs ? 200 : 550;
                const endX = matrixOffsetX + (gridX * 240);
                const endY = 280 + (gridY * 240);
                
                return (
                  <g key={room.id} className="transition-all duration-1000">
                    <path 
                      d={`M ${startX} ${startY} C ${startX + 150} ${startY}, ${endX - 100} ${endY}, ${endX} ${endY}`}
                      stroke={isLineCut ? 'rgba(239, 68, 68, 0.05)' : 'rgba(34, 211, 238, 0.15)'}
                      strokeWidth={isLineCut ? "1" : "2"}
                      strokeDasharray={isLineCut ? "10 10" : "none"}
                      className={`transition-all duration-1000 ${isLineCut ? 'opacity-0 translate-x-20 scale-50' : 'opacity-100'}`}
                    />
                    {!isLineCut && (
                      <circle r="2" fill="#22d3ee" className="opacity-30">
                        <animateMotion 
                          dur="4s" 
                          repeatCount="indefinite" 
                          path={`M ${startX} ${startY} C ${startX + 150} ${startY}, ${endX - 100} ${endY}, ${endX} ${endY}`} 
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
       )}

       {/* The Neural Core (Orbit Core) Visual */}
       <div
        className={`relative transition-all duration-[1800ms] cubic-bezier(0.16, 1, 0.3, 1) z-30 ${isCore ? 'scale-100 md:scale-150 translate-x-0' : 'scale-75 md:scale-90 -translate-x-[200px] md:-translate-x-[450px]'}`}
        style={{ transformStyle: 'preserve-3d' }}
       >
          <div className="w-40 h-40 md:w-64 md:h-64 bg-slate-950 border-4 md:border-[6px] border-cyan-400/90 rounded-[30px] md:rounded-[45px] shadow-[0_0_120px_rgba(34,211,238,0.7)] flex items-center justify-center animate-pulse">
             <ICONS.Cpu className="w-20 h-20 md:w-32 md:h-32 text-cyan-400 animate-[spin_12s_linear_infinite]" />

             <div className="absolute inset-[-20px] md:inset-[-40px] border-2 md:border-[3px] border-cyan-400/20 rounded-full animate-ping"></div>
             <div className="absolute inset-[-40px] md:inset-[-80px] border md:border-[2px] border-cyan-400/10 rounded-full animate-ping [animation-delay:0.7s]"></div>
          </div>
       </div>

       {/* Room Matrix Grid */}
       <div className={`grid grid-cols-2 gap-4 md:gap-10 transition-all duration-[1500ms] z-20 absolute ${!isCore ? 'opacity-100' : 'opacity-0 scale-90'} ${isLogs ? 'translate-x-[-60px] md:translate-x-[-180px]' : 'translate-x-[50px] md:translate-x-[150px]'}`}>
          {roomData.map((room) => {
             const isShutDownStep = isShutdown || isLogs;
             const powerOff = isShutDownStep && !room.occupied;
             const showOccupancy = isDetection || isShutdown || isLogs;

             return (
               <div key={room.id} className={`w-32 h-32 md:w-52 md:h-52 border-2 md:border-[4px] rounded-[25px] md:rounded-[50px] transition-all duration-[1200ms] flex flex-col items-center justify-center relative shadow-2xl ${powerOff ? 'bg-black/98 border-red-500/40 scale-95' : 'bg-slate-900 border-cyan-400/80 shadow-[0_0_70px_rgba(34,211,238,0.2)]'}`}>
                  
                  {showOccupancy && (
                    <div className={`absolute -top-4 md:-top-7 left-1/2 -translate-x-1/2 flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl border bg-slate-950 transition-all duration-1000 shadow-xl ${room.occupied ? 'border-cyan-400/50' : 'border-white/10'}`}>
                       {room.occupied ? (
                         <User className="w-3 h-3 md:w-4 md:h-4 text-cyan-400 animate-pulse" />
                       ) : (
                         <UserMinus className="w-3 h-3 md:w-4 md:h-4 text-white/30" />
                       )}
                       <span className={`text-[7px] md:text-[9px] font-black tracking-[0.15em] md:tracking-[0.2em] ${room.occupied ? 'text-cyan-400' : 'text-white/30'}`}>
                         {room.occupied ? 'OCCUPIED' : 'VACANT'}
                       </span>
                    </div>
                  )}

                  <div className={`text-[9px] md:text-[13px] font-black mb-2 md:mb-4 tracking-[0.2em] md:tracking-[0.3em] font-mono mt-2 md:mt-4 ${powerOff ? 'text-white/10' : 'text-cyan-100'}`}>SECTOR_{room.id}</div>

                  <ICONS.Zap className={`w-6 h-6 md:w-12 md:h-12 transition-all duration-[1000ms] ${powerOff ? 'text-red-500/10 rotate-[20deg] blur-md' : 'text-yellow-400 animate-pulse drop-shadow-[0_0_15px_rgba(250,204,21,1)]'}`} />

                  {powerOff && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-950/40 rounded-[25px] md:rounded-[50px] z-20 border-2 md:border-[3px] border-red-500/30">
                      <div className="text-[7px] md:text-[10px] font-black text-red-500 uppercase tracking-[0.15em] md:tracking-[0.2em] bg-black px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl border md:border-2 border-red-500/60 shadow-[0_0_40px_#ef4444] animate-[pulse_2s_infinite]">POWER_ISOLATED</div>
                    </div>
                  )}
                  
                  <div className={`absolute inset-6 rounded-full blur-[40px] opacity-10 ${powerOff ? 'bg-red-500' : 'bg-cyan-400'}`}></div>
               </div>
             );
          })}
       </div>

       {/* Operational Logs Panel */}
       <div className={`w-[85vw] max-w-[520px] h-[300px] md:h-[500px] bg-slate-950 border-2 md:border-[3px] border-white/20 rounded-[35px] md:rounded-[70px] p-4 md:p-12 shadow-[0_80px_250px_rgba(0,0,0,1)] transition-all duration-[1500ms] z-50 absolute right-[-50px] md:right-[-150px] transform ${isLogs ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : 'opacity-0 translate-y-32 translate-x-40 scale-90 pointer-events-none'}`}>
          <div className="flex justify-between items-center mb-4 md:mb-10">
             <div className="text-[8px] md:text-[12px] font-black text-cyan-400 tracking-[0.3em] md:tracking-[0.5em] uppercase font-mono">Neural_Event_Audit</div>
             <div className="px-3 md:px-6 py-1.5 md:py-2.5 bg-green-500 text-black text-[8px] md:text-[11px] font-black rounded-full shadow-[0_0_30px_rgba(74,222,128,0.7)] uppercase tracking-widest">Synced</div>
          </div>
          <div className="space-y-2 md:space-y-4 overflow-hidden h-[200px] md:h-[300px] relative border-l-2 md:border-l-[4px] border-cyan-400/40 ml-1 md:ml-2 pl-3 md:pl-6">
             <div className={`transition-transform duration-[6000ms] ease-in-out ${isLogs ? '-translate-y-[70%]' : 'translate-y-0'}`}>
                {[...Array(15)].map((_, i) => (
                   <div key={i} className="p-2 md:p-5 flex justify-between items-center bg-white/[0.04] mb-2 md:mb-3 rounded-[15px] md:rounded-[25px] border border-white/10 hover:border-cyan-400/30 transition-colors">
                      <div className="text-[8px] md:text-[12px] font-mono text-white/90 leading-none">
                         <span className="text-cyan-400 mr-2 md:mr-3 font-bold">[{15-i}:00:00]</span>
                         AUTO_ISOLATE_R{100+(i%4)}
                      </div>
                      <div className="text-[7px] md:text-[9px] font-black text-green-400 bg-green-950/70 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-green-500/60 shadow-inner">VERIFIED</div>
                   </div>
                ))}
             </div>
             <div className="absolute bottom-0 inset-x-0 h-16 md:h-32 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent"></div>
          </div>
       </div>
    </div>
  );
};

const SecurityScene = ({ subStep }: { subStep: number }) => {
  const isSecurityGroup = subStep >= 7 && subStep <= 11;
  const isThreat = subStep === 11;
  const isHygiene = subStep === 10;

  return (
    <div className="relative w-[90vw] max-w-[1300px] h-[60vh] max-h-[900px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
       <div className="absolute inset-0 bg-slate-950 border-4 md:border-[6px] border-white/30 rounded-[60px] md:rounded-[120px] transform-gpu rotateX-45 shadow-[0_80px_300px_rgba(0,0,0,1)] overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(34,211,238,0.6)_3px,transparent_3px),linear-gradient(90deg,rgba(34,211,238,0.6)_3px,transparent_3px)] bg-[length:60px_60px]"></div>
          
          <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 grid-rows-4 gap-2 md:gap-4 p-4 md:p-12">
             {[...Array(24)].map((_, i) => (
                <div key={i} className={`border border-cyan-400/20 transition-all duration-[1500ms] ${isSecurityGroup ? 'bg-cyan-400/10 border-cyan-400/40 shadow-[inset_0_0_30px_rgba(34,211,238,0.05)]' : ''} ${isThreat && i === 13 ? 'bg-red-500/80 border-red-500 shadow-[inset_0_0_80px_#ef4444,0_0_50px_#ef4444] animate-pulse z-10 scale-105 rounded-xl' : ''} ${isHygiene ? 'bg-green-500/20 border-green-500/40' : ''}`}>
                   {/* Increased visibility for background zone labels */}
                   <span className="text-[8px] md:text-[12px] text-cyan-200 font-bold p-1 md:p-3 block tracking-tighter opacity-100 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                      ZONE_{i}
                   </span>
                </div>
             ))}
          </div>
          {isHygiene && <div className="absolute top-0 inset-x-0 h-2 md:h-4 bg-green-400 shadow-[0_0_80px_#4ade80,0_0_30px_#fff,0_20px_150px_#4ade80] animate-[scan-line_4s_linear_infinite] z-20"></div>}
       </div>

       {/* Metrics Panel - anchored more securely to the right viewport */}
       <div className={`absolute right-[-40px] md:right-[-80px] top-1/4 w-64 md:w-96 p-6 md:p-14 bg-slate-950/95 border-2 md:border-[4px] border-white/30 rounded-[35px] md:rounded-[70px] backdrop-blur-3xl shadow-[0_60px_150px_rgba(0,0,0,1)] transition-all duration-[1500ms] z-50 ${isSecurityGroup ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'}`}>
          <div className="text-[9px] md:text-[13px] font-black text-cyan-400 mb-6 md:mb-10 tracking-[0.4em] md:tracking-[0.6em] uppercase border-b-2 md:border-b-[3px] border-white/10 pb-4 md:pb-6">
            {isHygiene ? 'HYGIENE_AI_STATUS' : 'SITUATION_METRICS'}
          </div>
          <div className="space-y-6 md:space-y-12">
             <div>
                <div className={`text-4xl md:text-7xl font-black tracking-tight transition-colors ${isHygiene ? 'text-green-400 drop-shadow-[0_0_30px_rgba(74,222,128,0.7)]' : 'text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]'}`}>{isHygiene ? '98%' : 'SYNCED'}</div>
                <div className={`text-[10px] md:text-[14px] font-black uppercase tracking-[0.2em] mt-2 md:mt-3 ${isHygiene ? 'text-green-400/80' : 'text-cyan-400'}`}>{isHygiene ? 'CLEANLINESS_LOCK' : 'PERIMETER_SECURE'}</div>
             </div>
             <div className="space-y-3 md:space-y-5">
                <div className="text-[10px] md:text-[14px] font-black text-white uppercase tracking-widest">{isHygiene ? 'SCAN_INTERVAL: 15m' : 'SENSOR_MESH: 24 NODES'}</div>
                <div className="w-full h-3 md:h-4 bg-white/10 rounded-full overflow-hidden border border-white/10 p-0.5 md:p-1">
                   <div className={`h-full transition-all duration-[2000ms] rounded-full ${isHygiene ? 'bg-green-400 w-[98%] shadow-[0_0_25px_#4ade80]' : 'bg-cyan-400 w-[75%] shadow-[0_0_25px_#22d3ee]'}`}></div>
                </div>
             </div>
          </div>
       </div>

       <div className="absolute top-[-50px] md:top-[-100px] flex gap-16 md:gap-40" style={{ transformStyle: 'preserve-3d' }}>
          {[...Array(3)].map((_, i) => (
             <div key={i} className={`relative transition-all duration-[1500ms] ${subStep >= 8 ? 'translate-y-0 opacity-100' : '-translate-y-40 opacity-0'}`}>
                <div className="w-12 h-12 md:w-24 md:h-24 bg-white rounded-[20px] md:rounded-[40px] flex items-center justify-center border-4 md:border-[8px] border-slate-800 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transform hover:scale-125 transition-transform duration-500">
                   <ICONS.Video className="w-6 h-6 md:w-12 md:h-12 text-slate-900" />
                </div>
                {subStep >= 8 && <div className="absolute top-16 md:top-32 left-1/2 -translate-x-1/2 w-[3px] md:w-[6px] h-[250px] md:h-[500px] bg-gradient-to-b from-cyan-400 to-transparent blur-lg shadow-[0_0_50px_rgba(34,211,238,0.6)]"></div>}
             </div>
          ))}
       </div>
    </div>
  );
};

const ResponseScene = ({ subStep, currentIndex }: { subStep: number; currentIndex: number }) => {
  const isFinale = currentIndex === 13; // scene-14 is at index 13

  return (
    <div className="relative w-[85vw] max-w-[900px] h-[65vh] max-h-[700px] flex items-center justify-center gap-8 md:gap-32">
       <div className={`w-full max-w-[600px] h-full max-h-[600px] bg-slate-950 border-2 md:border-4 border-slate-800 rounded-[40px] md:rounded-[80px] p-6 md:p-12 transition-all duration-[2000ms] flex flex-col justify-between ${isFinale ? 'scale-75 opacity-0 blur-3xl pointer-events-none' : 'scale-100 opacity-100 shadow-[0_70px_200px_rgba(0,0,0,1)]'}`}>
          <div className="flex items-center gap-3 md:gap-6 mb-4 md:mb-8">
             <div className="w-10 h-10 md:w-16 md:h-16 bg-cyan-400/20 rounded-[15px] md:rounded-[25px] flex items-center justify-center border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                <ICONS.Shield className="w-5 h-5 md:w-8 md:h-8 text-cyan-400" />
             </div>
             <div>
                <div className="text-[8px] md:text-[11px] font-black text-white/50 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-1">Enterprise_Command</div>
                <div className="text-xl md:text-3xl font-black text-white tracking-tight">System_Equilibrium</div>
             </div>
          </div>
          <div className="space-y-3 md:space-y-6 flex-1 overflow-hidden">
             {[...Array(3)].map((_, i) => (
                <div key={i} className="p-3 md:p-6 bg-white/[0.03] rounded-[20px] md:rounded-[35px] border border-white/10 flex justify-between items-center group hover:bg-white/[0.08] hover:border-cyan-400/50 transition-all duration-500 cursor-default shadow-xl">
                   <div className="text-[9px] md:text-[13px] font-black text-white/90 tracking-[0.15em] md:tracking-[0.25em] font-mono">NODE_CLUSTER_0{i+1}</div>
                   <div className="flex items-center gap-2 md:gap-4">
                     <span className="text-[8px] md:text-[11px] font-black text-green-400 uppercase tracking-[0.15em]">Validated</span>
                     <div className="w-3 h-3 md:w-5 md:h-5 bg-green-500 rounded-full animate-pulse shadow-[0_0_20px_#22c55e,0_0_10px_#fff]"></div>
                   </div>
                </div>
             ))}
          </div>
       </div>

       {isFinale && (
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-white border-[12px] md:border-[24px] border-cyan-400 rounded-[60px] md:rounded-[120px] shadow-[0_0_400px_rgba(34,211,238,0.8)] flex items-center justify-center text-black font-black text-[120px] md:text-[240px] animate-[finale-pop_1.2s_cubic-bezier(0.16,1,0.3,1)]">
               O
            </div>
            <div className="absolute inset-[-100px] md:inset-[-200px] border-[4px] md:border-[8px] border-cyan-400/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-[-120px] md:inset-[-240px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
         </div>
       )}
    </div>
  );
};

export default Visualizer;
