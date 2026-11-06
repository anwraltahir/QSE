import React, { useState } from 'react';
import { 
  X, ChevronRight, ChevronLeft, Clock, Eye, MessageSquare, 
  Sparkles, Keyboard, Play, Pause, RotateCcw, AlertTriangle, 
  Maximize2, Minimize2 
} from 'lucide-react';
import { Language, SectionId, SectionMeta } from '../types/presentation';
import { SECTIONS, PRESENTER_NOTES } from '../data/presentationData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentSectionId: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  lang: Language;
  timeRemaining: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
}

export const PresenterHUD: React.FC<Props> = ({
  isOpen,
  onClose,
  currentSectionId,
  onNavigate,
  lang,
  timeRemaining,
  isTimerRunning,
  onToggleTimer,
  onResetTimer
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [showHotkeys, setShowHotkeys] = useState(false);

  if (!isOpen) return null;

  const currentIndex = SECTIONS.findIndex(s => s.id === currentSectionId);
  const currentSection = SECTIONS[currentIndex];
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;

  const currentNotes = PRESENTER_NOTES[currentSectionId];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const isLowTime = timeRemaining <= 120; // 2 minutes or less

  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 p-4 bg-[#061A3D]/98 border-t-2 border-[#168BFF] shadow-[0_-15px_40px_rgba(0,0,0,0.85)] backdrop-blur-xl animate-in slide-in-from-bottom duration-300">
      
      {/* Top Bar of Presenter HUD */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#168BFF]/25 border border-[#168BFF]/50 text-[#38C8FF] text-xs font-bold font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{lang === 'en' ? 'PRESENTER CONSOLE' : 'لوحة تحكم المتحدث'}</span>
          </div>

          <div className="text-xs text-white/70 font-mono hidden md:block">
            {lang === 'en' ? 'Slide' : 'الشريحة'} {currentIndex + 1} / {SECTIONS.length}:{' '}
            <span className="text-white font-bold">{currentSection.title[lang]}</span>
          </div>
        </div>

        {/* Center: HUD Timer Controls */}
        <div className="flex items-center gap-3 bg-[#08275A] border border-[#168BFF]/40 rounded-full px-4 py-1">
          <Clock size={15} className={isLowTime ? 'text-red-400 animate-pulse' : 'text-[#38C8FF]'} />
          <span className={`font-mono font-bold text-base ${isLowTime ? 'text-red-400' : 'text-white'}`}>
            {formatTime(timeRemaining)}
          </span>
          <div className="w-px h-3.5 bg-white/20"></div>
          <button
            onClick={onToggleTimer}
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
            title={isTimerRunning ? 'Pause Timer' : 'Start Timer'}
          >
            {isTimerRunning ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            onClick={onResetTimer}
            className="text-white/80 hover:text-white transition-colors cursor-pointer"
            title="Reset Timer to 15:00"
          >
            <RotateCcw size={14} />
          </button>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHotkeys(!showHotkeys)}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors text-xs flex items-center gap-1 cursor-pointer"
            title="Shortcuts cheat sheet"
          >
            <Keyboard size={16} />
            <span className="hidden sm:inline font-mono text-[11px]">Keys</span>
          </button>

          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title={isMinimized ? 'Expand HUD' : 'Minimize HUD'}
          >
            {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Close Presenter Mode"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Hotkeys Quick Cheat Sheet Modal / Popover */}
      {showHotkeys && (
        <div className="mb-3 p-3 bg-[#08275A] border border-[#168BFF]/40 rounded-xl text-xs grid grid-cols-2 sm:grid-cols-4 gap-2 animate-in fade-in">
          <div><kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/20 font-mono text-[#38C8FF]">Space</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/20 font-mono text-[#38C8FF]">➔</kbd> Next Slide</div>
          <div><kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/20 font-mono text-[#38C8FF]">⬅</kbd> Previous Slide</div>
          <div><kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/20 font-mono text-[#38C8FF]">F</kbd> Toggle Fullscreen</div>
          <div><kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/20 font-mono text-[#38C8FF]">P</kbd> Presenter Mode</div>
          <div><kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/20 font-mono text-[#38C8FF]">L</kbd> Switch Language</div>
          <div><kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/20 font-mono text-[#38C8FF]">T</kbd> Toggle 15m Timer</div>
          <div><kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/20 font-mono text-[#38C8FF]">1 - 7</kbd> Jump to Section</div>
          <div><kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/20 font-mono text-[#38C8FF]">Esc</kbd> Close HUD</div>
        </div>
      )}

      {/* Expanded Content View */}
      {!isMinimized && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-h-[180px] overflow-y-auto pr-1">
          
          {/* Col 1: Talking Points & Cues (7 Cols) */}
          <div className="md:col-span-7 bg-[#08275A]/60 p-3.5 rounded-xl border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#38C8FF]">
                <MessageSquare size={14} />
                <span>{lang === 'en' ? 'Speaker Notes & Talking Cues' : 'ملاحظات المتحدث ونقاط الحوار'}</span>
              </div>
              <span className="text-[11px] font-mono text-white/50">
                {lang === 'en' ? `Target Duration: ~${currentNotes.estimatedMinutes}m` : `المدة المستهدفة: ~${currentNotes.estimatedMinutes} د`}
              </span>
            </div>

            <ul className="text-xs text-[#DCE5F2] space-y-1.5 list-disc list-inside">
              {currentNotes.talkingPoints[lang].map((point, i) => (
                <li key={i} className="leading-snug">
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-2.5 pt-2 border-t border-white/10 text-[11px] flex items-start gap-1.5 text-emerald-300">
              <Sparkles size={14} className="shrink-0 mt-0.5 text-emerald-400" />
              <span>
                <strong className="text-emerald-400">
                  {lang === 'en' ? 'Core Message: ' : 'الرسالة الجوهرية: '}
                </strong>
                {currentNotes.keyTakeaway[lang]}
              </span>
            </div>
          </div>

          {/* Col 2: Next Slide Preview & Jump (5 Cols) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-2 bg-[#08275A]/60 p-3.5 rounded-xl border border-white/10">
            <div>
              <div className="text-[11px] font-mono text-white/50 uppercase mb-1 flex items-center justify-between">
                <span>{lang === 'en' ? 'Next Up' : 'الشريحة القادمة'}</span>
                <Eye size={13} />
              </div>
              {nextSection ? (
                <div 
                  onClick={() => onNavigate(nextSection.id)}
                  className="p-2.5 rounded-lg bg-[#061A3D] hover:bg-[#061A3D]/80 border border-[#168BFF]/40 cursor-pointer transition-colors"
                >
                  <div className="text-xs font-bold text-white mb-0.5">
                    {nextSection.title[lang]}
                  </div>
                  <div className="text-[11px] text-[#38C8FF] line-clamp-1">
                    {nextSection.subtitle[lang]}
                  </div>
                </div>
              ) : (
                <div className="p-2.5 rounded-lg bg-[#061A3D] text-xs text-white/50 italic">
                  {lang === 'en' ? 'Final section of presentation' : 'الشريحة الختامية للعرض'}
                </div>
              )}
            </div>

            {/* Quick Navigation Buttons */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/10">
              <button
                onClick={() => prevSection && onNavigate(prevSection.id)}
                disabled={!prevSection}
                className="flex-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-medium text-white flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
                <span>{lang === 'en' ? 'Previous' : 'السابق'}</span>
              </button>

              <button
                onClick={() => nextSection && onNavigate(nextSection.id)}
                disabled={!nextSection}
                className="flex-1 px-3 py-1.5 rounded-lg bg-[#168BFF] hover:bg-[#38C8FF] disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-white flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <span>{lang === 'en' ? 'Next Slide' : 'التالي'}</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
