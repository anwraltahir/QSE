import React, { useState } from 'react';
import { Settings, Shield, ChevronRight, Info, CheckCircle2 } from 'lucide-react';
import { Language } from '../../types/presentation';
import { ARCHITECTURE_LAYERS } from '../../data/presentationData';

interface Props {
  lang: Language;
}

export const SmartFactorySection: React.FC<Props> = ({ lang }) => {
  const [activeLayerId, setActiveLayerId] = useState<number>(4);
  const isRTL = lang === 'ar';

  const selectedLayer = ARCHITECTURE_LAYERS.find(l => l.id === activeLayerId) || ARCHITECTURE_LAYERS[1];

  return (
    <div className="w-full h-full flex flex-col justify-between py-2 px-6 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center pb-3 border-b border-[#168BFF]/30 shrink-0">
        <div>
          <div className="text-xs uppercase font-mono text-[#38C8FF] tracking-wider font-bold mb-0.5">
            {lang === 'en' ? 'Section 04 · Systems Architecture' : 'المحور الرابع · معمارية النظم المتكاملة'}
          </div>
          <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
            <Settings className="text-[#38C8FF] shrink-0" size={30} />
            <span>{lang === 'en' ? 'Building Integrated Smart Factory Systems' : 'بناء أنظمة المصانع الذكية المتكاملة'}</span>
          </h2>
          <p className="text-[#DCE5F2]/75 text-sm mt-0.5">
            {lang === 'en'
              ? 'The cohesive synergy of Industrial Data Engineering, Cross-Layer Cybersecurity, and Digital Twins.'
              : 'التناغم المتكامل بين هندسة البيانات الصناعية، والأمن السيبراني متعدد المستويات، والتوائم الرقمية.'}
          </p>
        </div>

        <div className="text-[#38C8FF] font-mono bg-[#168BFF]/15 px-4 py-2 rounded-xl border border-[#168BFF]/40 text-sm font-bold flex items-center gap-2 shrink-0">
          <span>{lang === 'en' ? 'ALLOCATED TIME:' : 'الوقت المحدد:'}</span>
          <span className="text-white">2:30 MIN</span>
        </div>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-12 gap-5 flex-1 min-h-0 items-stretch py-2 overflow-hidden">
        
        {/* Left 7 Columns: 5-Layer Stack with Cross-Cutting Security Pillar */}
        <div className="col-span-7 flex flex-col justify-between gap-2 h-full relative pl-8 rtl:pl-0 rtl:pr-8 overflow-hidden">
          
          {/* Vertical Cybersecurity Shield Bar (Cross-Cutting Pillar) */}
          <div 
            className="absolute left-1.5 rtl:left-auto rtl:right-1.5 top-1 bottom-1 w-3.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-600 rounded-full z-0 flex flex-col items-center justify-between py-3 shadow-[0_0_20px_rgba(74,222,128,0.5)] cursor-pointer"
            onClick={() => setActiveLayerId(3)}
            title={lang === 'en' ? 'Layer 03: Cross-Layer Cybersecurity Shield' : 'الدرع السيبراني الممتد عبر كافة الطبقات'}
          >
            <Shield size={14} className="text-[#061A3D] font-bold" />
            <div className="text-[9px] font-mono font-black text-[#061A3D] tracking-widest uppercase rotate-90 my-auto whitespace-nowrap">
              CYBER DEFENSE
            </div>
            <Shield size={14} className="text-[#061A3D] font-bold" />
          </div>

          {/* 5 Layer Cards */}
          {ARCHITECTURE_LAYERS.map((layer) => {
            const isSelected = activeLayerId === layer.id;
            return (
              <div
                key={layer.id}
                onClick={() => setActiveLayerId(layer.id)}
                className={`relative z-10 p-2.5 rounded-xl border-2 cursor-pointer transition-all duration-200 flex-1 flex flex-col justify-between ${
                  isSelected
                    ? `${layer.borderColor} ${layer.badgeBg} shadow-[0_0_25px_rgba(22,139,255,0.3)] scale-[1.01]`
                    : 'bg-[#061A3D]/85 border-white/10 hover:border-[#168BFF]/50 hover:bg-[#08275A]/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-lg bg-black/50 text-white/90 border border-white/10">
                      {layer.level}
                    </span>
                    <h4 className="text-base font-bold text-white">
                      {layer.name[lang]}
                    </h4>
                  </div>
                  <ChevronRight 
                    className={`transition-transform duration-200 ${isSelected ? 'text-[#38C8FF] rotate-90' : 'text-white/40'} ${isRTL ? 'rotate-180' : ''}`} 
                    size={18} 
                  />
                </div>

                {/* Subsystem tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {layer.components.map((comp, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#061A3D]/90 border border-white/15 text-[#DCE5F2] font-medium"
                    >
                      {comp[lang]}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right 5 Columns: Deep Architectural Role & Invariants */}
        <div className="col-span-5 bg-[#08275A]/55 border-2 border-[#168BFF]/40 rounded-2xl p-4 backdrop-blur-md shadow-2xl flex flex-col justify-between h-full overflow-hidden">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38C8FF] uppercase tracking-wider mb-1.5 font-bold">
              <Info size={15} />
              <span>{lang === 'en' ? 'Layer Specification & Role' : 'تفاصيل المستوى المعماري'}</span>
            </div>

            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded-lg bg-[#168BFF]/25 text-[#38C8FF] border border-[#168BFF]/50">
                {selectedLayer.level}
              </span>
              <h3 className="text-xl font-extrabold text-white">
                {selectedLayer.name[lang]}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#DCE5F2] leading-relaxed mb-3 bg-[#061A3D]/80 p-3 rounded-xl border border-white/10 shadow-inner">
              {selectedLayer.role[lang]}
            </p>

            <h4 className="text-[11px] font-mono uppercase tracking-wider text-white/60 mb-2 font-bold">
              {lang === 'en' ? 'Core Subsystem Capabilities' : 'الأنظمة الفرعية والقدرات الأساسية'}
            </h4>

            <div className="space-y-1.5">
              {selectedLayer.components.map((comp, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#DCE5F2]">
                  <CheckCircle2 size={15} className="text-[#38C8FF] shrink-0 mt-0.5" />
                  <span className="font-semibold text-xs">{comp[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 text-[11px] text-white/70">
            <span className="text-[#38C8FF] font-bold block mb-0.5">
              {lang === 'en' ? 'System Integration Principle:' : 'مبدأ التكامل الهندسي:'}
            </span>
            {lang === 'en'
              ? 'Security shields Layers 01-05; Clean Data empowers Layer 04; Digital Twin drives Layer 05 autonomous decisions.'
              : 'الأمن يحمي المستويات من 1 إلى 5؛ والبيانات النقية تُمكّن التوأم الرقمي؛ والتوأم يقود قرارات التحكم الذاتي.'}
          </div>
        </div>

      </div>
    </div>
  );
};
