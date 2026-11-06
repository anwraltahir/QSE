/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  ChevronRight, ChevronLeft, Maximize, Minimize, 
  Presentation, Globe, Clock, RotateCcw, Play, Pause, 
  Layers, Award, Shield, Image as ImageIcon, Plus, Minus
} from 'lucide-react';
import { Language, SectionId } from './types/presentation';
import { SECTIONS, PRESENTATION_INFO } from './data/presentationData';
import { PresenterHUD } from './components/PresenterHUD';
import { ConferencePosterModal } from './components/ConferencePosterModal';
import { ErrorBoundary } from './components/ErrorBoundary';

// 7 Slide Components
import { OverviewSection } from './components/sections/OverviewSection';
import { DataEngineeringSection } from './components/sections/DataEngineeringSection';
import { CybersecuritySection } from './components/sections/CybersecuritySection';
import { DigitalTwinsSection } from './components/sections/DigitalTwinsSection';
import { SmartFactorySection } from './components/sections/SmartFactorySection';
import { CaseStudySection } from './components/sections/CaseStudySection';
import { TakeawaysSection } from './components/sections/TakeawaysSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('overview');
  const [lang, setLang] = useState<Language>('en');
  const [isPresenterMode, setIsPresenterMode] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isPosterModalOpen, setIsPosterModalOpen] = useState<boolean>(false);

  // 15-Minute Countdown Timer (900 seconds)
  const TOTAL_SECONDS = PRESENTATION_INFO.totalTimeMinutes * 60;
  const [timeRemaining, setTimeRemaining] = useState<number>(TOTAL_SECONDS);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Timer Tick
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isTimerRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => Math.max(0, prev - 1));
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeRemaining]);

  const handleAdjustTimer = (deltaSeconds: number) => {
    setTimeRemaining((prev) => Math.max(0, Math.min(TOTAL_SECONDS + 600, prev + deltaSeconds)));
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimeRemaining(TOTAL_SECONDS);
  };

  // Sync RTL / LTR on document.documentElement
  useEffect(() => {
    const isRTL = lang === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Fullscreen state listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) {
          await (document.documentElement as any).webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen request dismissed or not allowed:', err);
    }
  }, []);

  // Slide navigation
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const nextSection = useCallback(() => {
    if (currentIndex < SECTIONS.length - 1) {
      setActiveSection(SECTIONS[currentIndex + 1].id);
    }
  }, [currentIndex]);

  const prevSection = useCallback(() => {
    if (currentIndex > 0) {
      setActiveSection(SECTIONS[currentIndex - 1].id);
    }
  }, [currentIndex]);

  const navigateTo = (sectionId: SectionId) => {
    setActiveSection(sectionId);
  };

  // Keyboard navigation for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        nextSection();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSection();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setIsPresenterMode((prev) => !prev);
      } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        setLang((curr) => (curr === 'en' ? 'ar' : 'en'));
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setIsTimerRunning((prev) => !prev);
      } else if (e.key >= '1' && e.key <= '7') {
        const targetSection = SECTIONS[parseInt(e.key, 10) - 1];
        if (targetSection) navigateTo(targetSection.id);
      } else if (e.key === 'Escape') {
        setIsPosterModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSection, prevSection, toggleFullscreen]);

  const isRTL = lang === 'ar';

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const isLowTime = timeRemaining <= 120;
  const isTimeUp = timeRemaining === 0;

  return (
    <ErrorBoundary>
      {/* Outer Viewport Container: strictly 100vw x 100dvh, absolutely no scroll */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#030d20] flex items-center justify-center select-none">
        
        {/* Dynamic Laser Grid Pattern Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none conference-grid opacity-30" />
        <div className="absolute inset-0 z-0 pointer-events-none bg-radial from-[#08275A]/40 via-transparent to-[#030d20]" />

        {/* Native 16:9 Presentation Canvas Container */}
        <div
          style={{
            aspectRatio: '16 / 9',
            width: 'min(100%, calc(100dvh * 16 / 9))',
            height: 'auto',
            maxHeight: '100dvh',
          }}
          className={`relative z-10 bg-[#061A3D] text-[#DCE5F2] flex flex-col justify-between overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-[#168BFF]/30 ${
            isRTL ? 'font-cairo' : 'font-jakarta'
          }`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Top Fixed Slide Header (60px) */}
          <header className="h-[60px] px-6 bg-[#061A3D]/95 border-b border-[#168BFF]/25 flex items-center justify-between shrink-0 z-20 gap-4">
            {/* Left: Organization & Conference Identity */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Qatar Society of Engineers Logo */}
              <div 
                onClick={() => setIsPosterModalOpen(true)}
                className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-xl border border-white/10 transition-colors cursor-pointer group shrink-0"
                title={PRESENTATION_INFO.organizer[lang]}
              >
                <div className="w-10 h-10 bg-white rounded-lg p-0.5 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                  <img
                    src="/assets/logos/qse-logo.jpeg"
                    alt="Qatar Society of Engineers Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#38C8FF] tracking-wider font-bold">
                    {lang === 'en' ? 'ORGANIZER' : 'الجهة المنظمة'}
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {lang === 'en' ? 'Qatar Society of Engineers' : 'جمعية المهندسين القطرية'}
                  </div>
                </div>
              </div>

              <div className="h-6 w-px bg-white/15"></div>

              {/* Ministry of Commerce and Industry */}
              <div 
                onClick={() => setIsPosterModalOpen(true)}
                className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-xl border border-white/10 transition-colors cursor-pointer shrink-0"
                title={PRESENTATION_INFO.patronage[lang]}
              >
                <div className="w-12 h-10 bg-white rounded-lg p-0.5 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                  <img
                    src="/assets/logos/ministry-logo.jpeg"
                    alt="Ministry of Commerce and Industry Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#38C8FF] tracking-wider font-bold">
                    {lang === 'en' ? 'UNDER THE PATRONAGE OF' : 'تحت رعاية'}
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {lang === 'en' ? 'Ministry of Commerce & Industry' : 'وزارة التجارة والصناعة'}
                  </div>
                </div>
              </div>

              <div className="h-6 w-px bg-white/15"></div>

              {/* UCC Holding Strategic Partner */}
              <div 
                onClick={() => setIsPosterModalOpen(true)}
                className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-xl border border-white/10 transition-colors cursor-pointer shrink-0"
                title="Strategic Partner: UCC Holding"
              >
                <div className="w-12 h-10 bg-white rounded-lg p-0.5 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                  <img
                    src="/assets/logos/ucc-logo.jpeg"
                    alt="UCC Holding Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#38C8FF] tracking-wider font-bold">
                    {lang === 'en' ? 'STRATEGIC PARTNER' : 'الشريك الاستراتيجي'}
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {lang === 'en' ? 'UCC Holding' : 'يو سي سي القابضة'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Presentation Timer, Language, Presenter HUD, Fullscreen */}
            <div className="flex items-center gap-3 shrink-0">
              {/* 15-Minute Official Countdown Timer */}
              <div className="flex items-center gap-2.5 bg-[#08275A] border border-[#168BFF]/40 rounded-full px-3.5 py-1.5 shadow-md">
                <Clock 
                  size={16} 
                  className={isTimeUp ? 'text-red-500 animate-bounce' : isLowTime ? 'text-red-400 animate-pulse' : 'text-[#38C8FF]'} 
                />
                
                <span className={`font-mono font-bold text-base tabular-nums ${isTimeUp ? 'text-red-500' : isLowTime ? 'text-red-400' : 'text-white'}`}>
                  {formatTime(timeRemaining)}
                </span>

                <div className="w-px h-4 bg-white/20"></div>

                <button
                  onClick={() => setIsTimerRunning((prev) => !prev)}
                  className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title={isTimerRunning ? 'Pause Timer (T)' : 'Start Timer (T)'}
                >
                  {isTimerRunning ? <Pause size={15} /> : <Play size={15} />}
                </button>

                <button
                  onClick={handleResetTimer}
                  className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Reset Timer to 15:00"
                >
                  <RotateCcw size={15} />
                </button>

                <div className="flex items-center gap-1 pl-1.5 border-l border-white/20">
                  <button
                    onClick={() => handleAdjustTimer(60)}
                    className="px-1.5 py-0.5 text-[11px] text-[#38C8FF] hover:bg-white/10 rounded font-mono font-bold cursor-pointer"
                    title="Add 1 minute"
                  >
                    +1m
                  </button>
                  <button
                    onClick={() => handleAdjustTimer(-60)}
                    className="px-1.5 py-0.5 text-[11px] text-red-400 hover:bg-white/10 rounded font-mono font-bold cursor-pointer"
                    title="Subtract 1 minute"
                  >
                    -1m
                  </button>
                </div>
              </div>

              {/* Poster Modal Button */}
              <button
                onClick={() => setIsPosterModalOpen(true)}
                className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/20 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                title={lang === 'en' ? 'View Conference Poster' : 'عرض ملصق المؤتمر'}
              >
                <ImageIcon size={15} className="text-[#38C8FF]" />
                <span>{lang === 'en' ? 'Poster' : 'الملصق'}</span>
              </button>

              {/* Presenter Mode Button */}
              <button
                onClick={() => setIsPresenterMode((prev) => !prev)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border cursor-pointer ${
                  isPresenterMode
                    ? 'bg-[#168BFF] text-white border-white shadow-[0_0_20px_rgba(22,139,255,0.6)]'
                    : 'bg-[#08275A]/60 text-[#DCE5F2] border-[#168BFF]/40 hover:bg-[#168BFF]/20 hover:text-white'
                }`}
                title={lang === 'en' ? 'Toggle Presenter HUD (P)' : 'تبديل وضع المتحدث (P)'}
              >
                <Presentation size={15} />
                <span>{lang === 'en' ? 'Presenter HUD' : 'لوحة المتحدث'}</span>
              </button>

              {/* Language Switcher */}
              <button
                onClick={() => setLang((l) => (l === 'en' ? 'ar' : 'en'))}
                className="px-3 py-1.5 rounded-xl bg-[#08275A] border border-[#168BFF]/40 text-xs font-bold text-[#38C8FF] hover:bg-[#168BFF]/20 transition-colors uppercase flex items-center gap-1.5 cursor-pointer"
                title="Switch Language (L)"
              >
                <Globe size={15} />
                <span>{lang === 'en' ? 'عربي' : 'English'}</span>
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-xl bg-[#08275A] border border-[#168BFF]/40 text-white/80 hover:text-white hover:bg-[#168BFF]/20 transition-colors cursor-pointer"
                title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
              >
                {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
              </button>
            </div>
          </header>

          {/* Central Slide Content Area: Dynamic flex height, overflow: hidden */}
          <main className="flex-1 min-h-0 w-full overflow-hidden px-8 py-2.5 flex flex-col justify-center items-center relative">
            {activeSection === 'overview' && (
              <OverviewSection 
                lang={lang} 
                onNavigate={navigateTo} 
                onOpenPoster={() => setIsPosterModalOpen(true)} 
              />
            )}
            {activeSection === 'data' && <DataEngineeringSection lang={lang} />}
            {activeSection === 'cyber' && <CybersecuritySection lang={lang} />}
            {activeSection === 'twins' && <DigitalTwinsSection lang={lang} />}
            {activeSection === 'factory' && <SmartFactorySection lang={lang} />}
            {activeSection === 'case' && <CaseStudySection lang={lang} />}
            {activeSection === 'takeaways' && (
              <TakeawaysSection 
                lang={lang} 
                onNavigate={navigateTo} 
                onOpenPoster={() => setIsPosterModalOpen(true)} 
              />
            )}
          </main>

          {/* Fixed Bottom Slide Navigation Bar (52px) */}
          <footer className="h-[52px] px-6 bg-[#061A3D]/95 border-t border-[#168BFF]/25 flex items-center justify-between shrink-0 z-20">
            {/* Left: Previous Slide Button */}
            <button
              onClick={prevSection}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-white/10"
              title="Previous Slide (ArrowLeft)"
            >
              {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              <span>{lang === 'en' ? 'Previous' : 'السابق'}</span>
            </button>

            {/* Center: Slide Progress Ribbon (Pills for 7 Slides) */}
            <div className="flex items-center gap-2">
              {SECTIONS.map((section, idx) => {
                const isActive = activeSection === section.id;
                const isPast = idx < currentIndex;
                return (
                  <button
                    key={section.id}
                    onClick={() => navigateTo(section.id)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border cursor-pointer ${
                      isActive
                        ? 'bg-[#168BFF] text-white border-white shadow-[0_0_15px_#38C8FF] scale-105'
                        : isPast
                        ? 'bg-[#08275A]/80 text-[#38C8FF] border-[#168BFF]/40 hover:bg-[#168BFF]/20'
                        : 'bg-[#061A3D] text-white/50 border-white/10 hover:text-white hover:border-[#168BFF]/40'
                    }`}
                    title={section.title[lang]}
                  >
                    <span className="font-mono font-bold text-[11px]">0{idx + 1}</span>
                    <span className="hidden lg:inline max-w-[130px] truncate">{section.title[lang]}</span>
                  </button>
                );
              })}
            </div>

            {/* Right: Next Slide Button & Counter */}
            <div className="flex items-center gap-3">
              <div className="text-xs font-mono font-bold text-[#38C8FF] bg-[#08275A] px-3 py-1 rounded-xl border border-[#168BFF]/30">
                <span>0{currentIndex + 1}</span>
                <span className="text-white/40 mx-1">/</span>
                <span className="text-white/70">0{SECTIONS.length}</span>
              </div>

              <button
                onClick={nextSection}
                disabled={currentIndex === SECTIONS.length - 1}
                className="px-5 py-2 rounded-xl bg-[#168BFF] hover:bg-[#38C8FF] disabled:opacity-20 disabled:cursor-not-allowed text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(22,139,255,0.4)] cursor-pointer"
                title="Next Slide (Space / ArrowRight)"
              >
                <span>{lang === 'en' ? 'Next Slide' : 'التالي'}</span>
                {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </button>
            </div>
          </footer>

          {/* Dedicated Presenter Mode HUD (Docked Overlay inside Canvas) */}
          <PresenterHUD
            isOpen={isPresenterMode}
            onClose={() => setIsPresenterMode(false)}
            currentSectionId={activeSection}
            onNavigate={navigateTo}
            lang={lang}
            timeRemaining={timeRemaining}
            isTimerRunning={isTimerRunning}
            onToggleTimer={() => setIsTimerRunning((prev) => !prev)}
            onResetTimer={handleResetTimer}
          />

          {/* Conference Poster Lightbox Modal */}
          <ConferencePosterModal
            isOpen={isPosterModalOpen}
            onClose={() => setIsPosterModalOpen(false)}
            lang={lang}
          />

        </div>
      </div>
    </ErrorBoundary>
  );
}
