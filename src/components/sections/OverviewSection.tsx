import React from 'react';
import { Shield, Clock, Calendar, MapPin, ChevronRight, Award, Database, Activity, Settings } from 'lucide-react';
import { Language, SectionId } from '../../types/presentation';
import { PRESENTATION_INFO, SECTIONS } from '../../data/presentationData';

interface Props {
  lang: Language;
  onNavigate: (sectionId: SectionId) => void;
  onOpenPoster: () => void;
}

export const OverviewSection: React.FC<Props> = ({ lang, onNavigate, onOpenPoster }) => {
  const isRTL = lang === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between items-center text-center py-1 px-4 overflow-hidden select-none">
      
      {/* Top Banner & Badge */}
      <div className="flex flex-col items-center w-full">
        <div className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-[#168BFF]/20 border border-[#38C8FF]/50 text-[#38C8FF] text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(22,139,255,0.3)] mb-2">
          <Award size={15} />
          <span>{PRESENTATION_INFO.conference[lang]}</span>
          <span className="text-white/40">·</span>
          <span className="text-white/80">15 MIN KEYNOTE</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight w-full tracking-tight">
          {lang === 'en' ? (
            <>
              Advanced Industrial Data Engineering <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#38C8FF] to-white">
                and Securing Digital Twins
              </span>{' '}
              in Smart Factories
            </>
          ) : (
            <>
              هندسة البيانات الصناعية المتقدمة <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#38C8FF] to-white">
                وتأمين التوائم الرقمية
              </span>{' '}
              في المصانع الذكية
            </>
          )}
        </h1>
      </div>

      {/* Center: Full-Widescreen Presenter Showcase Card */}
      <div className="w-full bg-[#08275A]/85 backdrop-blur-md rounded-2xl border-2 border-[#168BFF]/40 p-4 lg:p-5 shadow-[0_0_50px_rgba(22,139,255,0.25)] relative flex items-center justify-between gap-6 my-1 text-left rtl:text-right">
        
        {/* Glow Accent Top Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#38C8FF] to-transparent opacity-90 rounded-t-2xl"></div>

        {/* Left: Presenter Portrait */}
        <div className="relative shrink-0 flex flex-col items-center">
          <div 
            onClick={onOpenPoster}
            className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-b from-[#168BFF]/30 to-[#08275A] p-1 border-2 border-[#38C8FF] shadow-[0_0_30px_rgba(56,200,255,0.35)] overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src="/assets/logos/presenter-photo.jpg"
              alt={PRESENTATION_INFO.presenter.name[lang]}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="mt-1.5 text-[10px] font-mono text-[#38C8FF] font-bold uppercase tracking-wider bg-[#061A3D] px-2.5 py-0.5 rounded-full border border-[#168BFF]/40">
            {lang === 'en' ? 'KEYNOTE PRESENTER' : 'المتحدث الرئيسي'}
          </div>
        </div>

        {/* Right: Presenter Credentials & Logistics */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <div className="flex items-center gap-3 mb-0.5">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              {PRESENTATION_INFO.presenter.name[lang]}
            </h2>
            <span className="px-2.5 py-0.5 rounded-md bg-[#168BFF]/25 border border-[#38C8FF]/40 text-[#38C8FF] text-xs font-mono font-bold shrink-0">
              QSE 2026
            </span>
          </div>

          <p className="text-[#38C8FF] font-bold text-sm lg:text-base mb-1 flex items-center gap-2">
            <Shield size={16} className="text-[#38C8FF] shrink-0" />
            <span>{PRESENTATION_INFO.presenter.title[lang]}</span>
          </p>

          <p className="text-xs text-[#DCE5F2]/80 leading-relaxed mb-2.5">
            {PRESENTATION_INFO.presenter.bio[lang]}
          </p>

          {/* Logistics strip */}
          <div className="grid grid-cols-3 gap-3 text-xs bg-[#061A3D]/70 rounded-xl p-2.5 border border-white/10 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-[#38C8FF] shrink-0" />
              <span className="truncate">{PRESENTATION_INFO.location[lang]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={15} className="text-[#38C8FF] shrink-0" />
              <span>{PRESENTATION_INFO.date[lang]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-[#38C8FF] shrink-0" />
              <span className="font-mono font-bold text-[#38C8FF]">{PRESENTATION_INFO.time[lang]}</span>
            </div>
          </div>
        </div>

      </div>

      {/* 4 Technical Chapters Preview Strip */}
      <div className="grid grid-cols-4 gap-3 w-full text-left rtl:text-right">
        {[
          { id: 'data', icon: Database, num: '01', title: SECTIONS[1].title[lang], time: '5m' },
          { id: 'cyber', icon: Shield, num: '02', title: SECTIONS[2].title[lang], time: '5m' },
          { id: 'twins', icon: Activity, num: '03', title: SECTIONS[3].title[lang], time: '2.5m' },
          { id: 'factory', icon: Settings, num: '04', title: SECTIONS[4].title[lang], time: '2.5m' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as SectionId)}
            className="p-2.5 rounded-xl bg-[#08275A]/60 hover:bg-[#08275A] border border-[#168BFF]/25 hover:border-[#38C8FF]/60 transition-all flex items-center justify-between group cursor-pointer shadow-md"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#061A3D] flex items-center justify-center text-[#168BFF] group-hover:text-[#38C8FF] border border-white/10 shrink-0">
                <item.icon size={16} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono text-white/40 uppercase">Chapter {item.num} · {item.time}</div>
                <div className="text-xs font-bold text-white group-hover:text-[#38C8FF] leading-tight line-clamp-2">{item.title}</div>
              </div>
            </div>
            <ChevronRight size={15} className={`text-white/30 group-hover:text-[#38C8FF] shrink-0 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        ))}
      </div>

      {/* Launch Actions */}
      <div className="flex items-center gap-3 mt-1">
        <button
          onClick={() => onNavigate('data')}
          className="px-7 py-2.5 bg-[#168BFF] hover:bg-[#38C8FF] text-white font-extrabold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(22,139,255,0.5)] flex items-center gap-2.5 text-sm cursor-pointer"
        >
          <span>{lang === 'en' ? 'Start Presentation' : 'بدء العرض التقديمي'}</span>
          <ChevronRight className={isRTL ? 'rotate-180' : ''} size={18} />
        </button>

        <button
          onClick={onOpenPoster}
          className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-xs cursor-pointer"
        >
          <Award size={16} className="text-[#38C8FF]" />
          <span>{lang === 'en' ? 'Conference Poster' : 'ملصق المؤتمر'}</span>
        </button>
      </div>

    </div>
  );
};
