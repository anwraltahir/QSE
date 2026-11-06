import React from 'react';
import { Language } from '../types/presentation';
import { PRESENTATION_INFO } from '../data/presentationData';
import { Image as ImageIcon } from 'lucide-react';

interface Props {
  lang: Language;
  onOpenPoster?: () => void;
  compact?: boolean;
}

export const HeaderLogos: React.FC<Props> = ({ lang, onOpenPoster, compact = false }) => {
  return (
    <div className={`flex flex-wrap items-center justify-between w-full border-b border-[#168BFF]/30 pb-4 ${compact ? 'mb-4' : 'mb-8'} gap-4`}>
      {/* Logos Strip */}
      <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
        {/* Qatar Society of Engineers Logo */}
        <div 
          className="group relative flex items-center gap-2 bg-white/5 hover:bg-white/10 p-1.5 px-2.5 rounded-lg border border-white/10 transition-all cursor-pointer"
          onClick={onOpenPoster}
          title={PRESENTATION_INFO.organizer[lang]}
        >
          <div className="w-12 h-12 rounded bg-white p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
            <img
              src="/assets/logos/qse-logo.jpeg"
              alt="Qatar Society of Engineers Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">
              {lang === 'en' ? 'Organizer' : 'الجهة المنظمة'}
            </div>
            <div className="text-xs font-bold text-white leading-tight">
              {lang === 'en' ? 'Qatar Society of Engineers' : 'جمعية المهندسين القطرية'}
            </div>
          </div>
        </div>

        <div className="hidden sm:block h-8 w-px bg-white/20"></div>

        {/* Ministry of Commerce and Industry Logo */}
        <div 
          className="group relative flex items-center gap-2 bg-white/5 hover:bg-white/10 p-1.5 px-2.5 rounded-lg border border-white/10 transition-all cursor-pointer"
          onClick={onOpenPoster}
          title="Ministry of Commerce and Industry"
        >
          <div className="w-16 h-12 rounded bg-white p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
            <img
              src="/assets/logos/ministry-logo.jpeg"
              alt="Ministry of Commerce and Industry Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="text-left hidden md:block">
            <div className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">
              {lang === 'en' ? 'Patronage' : 'تحت رعاية'}
            </div>
            <div className="text-xs font-bold text-white leading-tight">
              {lang === 'en' ? 'Ministry of Commerce & Industry' : 'وزارة التجارة والصناعة'}
            </div>
          </div>
        </div>

        <div className="hidden sm:block h-8 w-px bg-white/20"></div>

        {/* UCC Holding Logo */}
        <div 
          className="group relative flex items-center gap-2 bg-white/5 hover:bg-white/10 p-1.5 px-2.5 rounded-lg border border-white/10 transition-all cursor-pointer"
          onClick={onOpenPoster}
          title="UCC Holding Strategic Partner"
        >
          <div className="w-14 h-12 rounded bg-white p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
            <img
              src="/assets/logos/ucc-logo.jpeg"
              alt="UCC Holding Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="text-left hidden lg:block">
            <div className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">
              {lang === 'en' ? 'Strategic Partner' : 'الشريك الاستراتيجي'}
            </div>
            <div className="text-xs font-bold text-white leading-tight">
              {lang === 'en' ? 'UCC Holding' : 'يو سي سي القابضة'}
            </div>
          </div>
        </div>
      </div>

      {/* Conference Heading Badge */}
      <div className="flex items-center gap-3">
        {onOpenPoster && (
          <button
            onClick={onOpenPoster}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-[#38C8FF] bg-[#168BFF]/15 hover:bg-[#168BFF]/30 border border-[#168BFF]/40 rounded-lg transition-colors"
            title={lang === 'en' ? 'View Conference Poster' : 'عرض ملصق المؤتمر'}
          >
            <ImageIcon size={14} />
            <span className="hidden sm:inline font-medium">
              {lang === 'en' ? 'Poster' : 'الملصق'}
            </span>
          </button>
        )}
        <div className={lang === 'ar' ? 'text-left' : 'text-right'}>
          <h2 className="text-[#38C8FF] font-semibold text-sm sm:text-base tracking-wide">
            {PRESENTATION_INFO.conference[lang]}
          </h2>
          <p className="text-[#DCE5F2]/60 text-xs">
            {PRESENTATION_INFO.location[lang]} · {PRESENTATION_INFO.date[lang]}
          </p>
        </div>
      </div>
    </div>
  );
};
