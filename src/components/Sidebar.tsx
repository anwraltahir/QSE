import React from 'react';
import { X, Calendar, MapPin, ChevronRight, Award } from 'lucide-react';
import { Language, SectionId } from '../types/presentation';
import { SECTIONS, PRESENTATION_INFO } from '../data/presentationData';

interface Props {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onOpenPoster: () => void;
}

export const Sidebar: React.FC<Props> = ({
  activeSection,
  onNavigate,
  lang,
  isOpen,
  onClose,
  onOpenPoster
}) => {
  const isRTL = lang === 'ar';

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:static top-0 bottom-0 z-40 w-72 lg:w-80 bg-[#08275A]/95 lg:bg-[#08275A]/80 backdrop-blur-xl border-r rtl:border-r-0 rtl:border-l border-[#168BFF]/25 flex flex-col transition-transform duration-300 select-none ${
          isOpen 
            ? 'translate-x-0' 
            : isRTL 
            ? 'translate-x-full lg:translate-x-0' 
            : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-5 border-b border-[#168BFF]/25 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              onClick={onOpenPoster}
              className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center overflow-hidden shrink-0 border border-white/20 cursor-pointer hover:scale-105 transition-transform"
              title="Qatar Society of Engineers"
            >
              <img
                src="/assets/logos/qse-logo.jpeg"
                alt="Qatar Society of Engineers"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="font-bold text-white text-sm leading-tight">
                {PRESENTATION_INFO.conference[lang]}
              </h2>
              <p className="text-[11px] text-[#38C8FF] mt-0.5">
                {PRESENTATION_INFO.presenter.name[lang]}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Section List */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1.5">
          <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-white/40 font-semibold">
            {lang === 'en' ? 'Presentation Agenda' : 'جدول محاور العرض'}
          </div>

          {SECTIONS.map((section, idx) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`w-full text-left rtl:text-right px-3.5 py-3 rounded-xl transition-all text-xs sm:text-sm font-semibold flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? 'bg-[#168BFF]/25 text-[#38C8FF] border border-[#168BFF]/60 shadow-[inset_4px_0_0_#168BFF] rtl:shadow-[inset_-4px_0_0_#168BFF]'
                    : 'text-[#DCE5F2]/75 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className={`text-[11px] font-mono shrink-0 ${isActive ? 'text-[#38C8FF]' : 'text-white/40'}`}>
                    0{idx + 1}
                  </span>
                  <div className="truncate">
                    <div className="truncate">{section.title[lang]}</div>
                    <div className={`text-[10px] font-normal truncate mt-0.5 ${isActive ? 'text-white/70' : 'text-white/40'}`}>
                      {section.subtitle[lang]}
                    </div>
                  </div>
                </div>

                {section.durationMinutes > 0 && (
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono shrink-0 ml-2 rtl:ml-0 rtl:mr-2 ${
                    isActive 
                      ? 'bg-[#168BFF]/30 text-[#38C8FF] border border-[#168BFF]/40' 
                      : 'bg-white/5 text-white/40'
                  }`}>
                    {section.durationMinutes}m
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Poster Quick Trigger Banner */}
        <div className="p-3 mx-3 mb-2 bg-[#061A3D]/70 border border-[#168BFF]/30 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award size={16} className="text-[#38C8FF]" />
            <div className="text-xs text-white font-medium">
              {lang === 'en' ? 'Conference Poster' : 'ملصق المؤتمر'}
            </div>
          </div>
          <button
            onClick={onOpenPoster}
            className="text-[11px] text-[#38C8FF] hover:text-white underline font-medium cursor-pointer"
          >
            {lang === 'en' ? 'View' : 'عرض'}
          </button>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-[#168BFF]/25 text-[11px] text-white/50 font-mono bg-[#061A3D]/50">
          <div className="flex items-center gap-1.5 mb-1 text-white/70">
            <MapPin size={12} className="text-[#168BFF]" />
            <span>{PRESENTATION_INFO.location[lang]}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={12} className="text-[#168BFF]" />
            <span>{PRESENTATION_INFO.date[lang]}</span>
          </div>
        </div>
      </aside>
    </>
  );
};
