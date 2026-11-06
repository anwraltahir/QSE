import React from 'react';
import { 
  Play, Pause, RotateCcw, Maximize, Minimize, 
  Menu, Clock, Globe, Presentation, Image as ImageIcon,
  Plus, Minus 
} from 'lucide-react';
import { Language, SectionId } from '../types/presentation';
import { PRESENTATION_INFO } from '../data/presentationData';

interface Props {
  lang: Language;
  onToggleLang: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isPresenterMode: boolean;
  onTogglePresenterMode: () => void;
  timeRemaining: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  onAdjustTimer: (seconds: number) => void;
  onToggleSidebar: () => void;
  onOpenPoster: () => void;
}

export const Header: React.FC<Props> = ({
  lang,
  onToggleLang,
  isFullscreen,
  onToggleFullscreen,
  isPresenterMode,
  onTogglePresenterMode,
  timeRemaining,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
  onAdjustTimer,
  onToggleSidebar,
  onOpenPoster
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const isLowTime = timeRemaining <= 120; // under 2 minutes
  const isTimeUp = timeRemaining === 0;

  return (
    <header className="h-16 border-b border-[#168BFF]/25 bg-[#061A3D]/90 backdrop-blur-md flex items-center justify-between px-3 sm:px-6 relative z-30 shrink-0 select-none">
      
      {/* Left: Mobile Toggle & Brand mark */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <Menu size={22} />
        </button>

        {/* Brand mark & Conference Badge */}
        <div className="flex items-center gap-2.5">
          <div 
            onClick={onOpenPoster}
            className="w-9 h-9 rounded-lg bg-white p-0.5 flex items-center justify-center overflow-hidden shrink-0 border border-white/20 shadow cursor-pointer hover:scale-105 transition-transform"
            title={PRESENTATION_INFO.organizer[lang]}
          >
            <img
              src="/assets/logos/qse-logo.jpeg"
              alt="Qatar Society of Engineers"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-bold text-white tracking-tight leading-none">
              {lang === 'en' ? '3D Printing & Smart Mfg 2026' : 'مؤتمر الطباعة والتصنيع الذكي 2026'}
            </div>
            <div className="text-[10px] text-[#38C8FF] tracking-wider mt-0.5 font-medium">
              {lang === 'en' ? 'Qatar Society of Engineers' : 'جمعية المهندسين القطرية'}
            </div>
          </div>
        </div>
      </div>

      {/* Center: 15-Minute Presentation Timer Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2.5 bg-[#08275A] border border-[#168BFF]/35 rounded-full px-3 sm:px-4 py-1 shadow-md">
        <Clock 
          size={16} 
          className={`${
            isTimeUp
              ? 'text-red-500 animate-bounce'
              : isLowTime 
              ? 'text-red-400 animate-pulse' 
              : 'text-[#38C8FF]'
          }`} 
        />
        
        <span 
          className={`font-mono font-bold text-sm sm:text-base tabular-nums ${
            isTimeUp 
              ? 'text-red-500' 
              : isLowTime 
              ? 'text-red-400 font-black' 
              : 'text-white'
          }`}
          title="15-Minute Presentation Countdown"
        >
          {formatTime(timeRemaining)}
        </span>

        <div className="w-px h-3.5 bg-white/20 mx-0.5"></div>

        {/* Play/Pause Button */}
        <button
          onClick={onToggleTimer}
          className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title={isTimerRunning ? 'Pause Timer' : 'Start Timer'}
          aria-label={isTimerRunning ? 'Pause Timer' : 'Start Timer'}
        >
          {isTimerRunning ? <Pause size={14} /> : <Play size={14} />}
        </button>

        {/* Reset Button */}
        <button
          onClick={onResetTimer}
          className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title="Reset to 15:00"
          aria-label="Reset Timer"
        >
          <RotateCcw size={14} />
        </button>

        {/* +1m Quick adjust */}
        <div className="hidden md:flex items-center gap-0.5 pl-1 border-l border-white/15">
          <button
            onClick={() => onAdjustTimer(60)}
            className="p-0.5 text-[10px] text-white/60 hover:text-[#38C8FF] font-mono hover:bg-white/10 rounded cursor-pointer"
            title="Add 1 minute"
          >
            +1m
          </button>
          <button
            onClick={() => onAdjustTimer(-60)}
            className="p-0.5 text-[10px] text-white/60 hover:text-red-400 font-mono hover:bg-white/10 rounded cursor-pointer"
            title="Subtract 1 minute"
          >
            -1m
          </button>
        </div>
      </div>

      {/* Right Controls: Language, Presenter Mode, Poster, Fullscreen */}
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Poster Modal Button */}
        <button
          onClick={onOpenPoster}
          className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors hidden md:flex items-center gap-1.5 text-xs cursor-pointer"
          title={lang === 'en' ? 'Conference Poster' : 'ملصق المؤتمر'}
        >
          <ImageIcon size={16} className="text-[#38C8FF]" />
          <span className="hidden lg:inline">{lang === 'en' ? 'Poster' : 'الملصق'}</span>
        </button>

        {/* Presenter Mode Toggle */}
        <button
          onClick={onTogglePresenterMode}
          className={`px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
            isPresenterMode 
              ? 'bg-[#168BFF] text-white border-white shadow-[0_0_15px_rgba(22,139,255,0.5)]' 
              : 'border-[#168BFF]/40 text-[#DCE5F2] hover:bg-[#168BFF]/15 hover:text-white'
          }`}
          title={lang === 'en' ? 'Toggle Presenter HUD (P)' : 'تبديل وضع المتحدث (P)'}
        >
          <Presentation size={15} />
          <span className="hidden sm:inline">
            {lang === 'en' ? 'Presenter' : 'المتحدث'}
          </span>
        </button>

        {/* Language Switcher */}
        <button
          onClick={onToggleLang}
          className="px-2.5 py-1.5 rounded-lg border border-[#168BFF]/40 text-xs font-bold text-[#38C8FF] hover:bg-[#168BFF]/15 transition-colors uppercase cursor-pointer flex items-center gap-1"
          title="Switch Language (L)"
        >
          <Globe size={14} />
          <span>{lang === 'en' ? 'عربي' : 'English'}</span>
        </button>

        {/* Actual Browser Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>
      </div>

    </header>
  );
};
