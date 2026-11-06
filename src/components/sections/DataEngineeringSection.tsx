import React, { useState } from 'react';
import { 
  Database, Activity, Cpu, CheckCircle, HardDrive, TrendingUp, 
  AlertTriangle, Check, Layers, ArrowRight, ArrowLeft 
} from 'lucide-react';
import { Language } from '../../types/presentation';
import { PIPELINE_STAGES, DATA_QUALITY_DIMENSIONS } from '../../data/presentationData';

interface Props {
  lang: Language;
}

export const DataEngineeringSection: React.FC<Props> = ({ lang }) => {
  const [activeStage, setActiveStage] = useState(0);
  const isRTL = lang === 'ar';

  const iconMap: Record<string, React.ReactNode> = {
    Activity: <Activity size={18} />,
    Database: <Database size={18} />,
    Cpu: <Cpu size={18} />,
    CheckCircle: <CheckCircle size={18} />,
    HardDrive: <HardDrive size={18} />,
    TrendingUp: <TrendingUp size={18} />
  };

  const currentStage = PIPELINE_STAGES[activeStage];

  return (
    <div className="w-full h-full flex flex-col justify-between py-1 px-4 overflow-hidden select-none">
      {/* Section Header */}
      <div className="flex justify-between items-center pb-2 border-b border-[#168BFF]/30 shrink-0">
        <div>
          <div className="text-[11px] uppercase font-mono text-[#38C8FF] tracking-wider font-bold mb-0.5">
            {lang === 'en' ? 'Section 01 · Data Foundations' : 'المحور الأول · أسس البيانات'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2.5">
            <Database className="text-[#38C8FF] shrink-0" size={26} />
            <span>{lang === 'en' ? 'Industrial Data Engineering' : 'هندسة البيانات الصناعية'}</span>
          </h2>
          <p className="text-[#DCE5F2]/75 text-xs mt-0.5">
            {lang === 'en' 
              ? 'Smart manufacturing and reliable digital twins begin with deterministic, clean industrial telemetry.'
              : 'التصنيع الذكي والتوائم الرقمية الموثوقة تبدأ من قياسات صناعية نظيفة وحتمية التوقيت.'}
          </p>
        </div>

        <div className="text-[#38C8FF] font-mono bg-[#168BFF]/15 px-3 py-1.5 rounded-xl border border-[#168BFF]/40 text-xs font-bold flex items-center gap-2 shrink-0">
          <span>{lang === 'en' ? 'ALLOCATED TIME:' : 'الوقت المحدد:'}</span>
          <span className="text-white">5:00 MIN</span>
        </div>
      </div>

      {/* Main 2-Column Balanced Presentation Layout (55% / 45%) */}
      <div className="flex gap-4 flex-1 min-h-0 items-stretch py-2 overflow-hidden">
        
        {/* LEFT COLUMN (55%): Industrial Data Pipeline */}
        <div className="w-[55%] flex flex-col justify-between h-full min-h-0 overflow-hidden">
          {/* Pipeline Heading */}
          <div className="flex items-center justify-between shrink-0 mb-1">
            <h3 className="text-base sm:text-lg font-bold text-[#38C8FF] flex items-center gap-2">
              <Layers size={18} />
              <span>{lang === 'en' ? 'Industrial Data Pipeline' : 'خط تدفق البيانات الصناعية'}</span>
            </h3>
            <span className="text-[11px] font-mono text-white/50">
              {lang === 'en' ? 'Select stage to inspect' : 'حدد مرحلة للمعاينة'}
            </span>
          </div>

          {/* 6 Pipeline Stage Buttons Rail (All labels fully visible, no truncation) */}
          <div className="grid grid-cols-6 gap-1.5 w-full shrink-0 mb-1.5">
            {PIPELINE_STAGES.map((stage, idx) => {
              const isActive = activeStage === idx;
              const isPast = idx < activeStage;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`flex flex-col items-center justify-center p-1.5 rounded-xl border transition-all text-center cursor-pointer ${
                    isActive
                      ? 'bg-[#168BFF]/30 border-[#38C8FF] shadow-[0_0_15px_rgba(56,200,255,0.4)] scale-[1.02]'
                      : isPast
                      ? 'bg-[#08275A]/70 border-[#168BFF]/40 hover:bg-[#168BFF]/20'
                      : 'bg-[#061A3D]/90 border-white/10 hover:border-[#168BFF]/40'
                  }`}
                  title={stage.name[lang]}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 shrink-0 ${
                    isActive
                      ? 'bg-[#168BFF] text-white shadow-md'
                      : isPast
                      ? 'bg-[#08275A] text-[#38C8FF] border border-[#38C8FF]/50'
                      : 'bg-[#061A3D] text-white/50 border border-white/10'
                  }`}>
                    {iconMap[stage.icon] || <Activity size={16} />}
                  </div>
                  <div className="text-[9px] font-mono text-white/50 uppercase font-bold">
                    0{idx + 1}
                  </div>
                  <div className={`text-[10px] sm:text-[11px] font-bold leading-tight mt-0.5 text-center ${
                    isActive ? 'text-[#38C8FF]' : 'text-white/80'
                  }`}>
                    {stage.name[lang]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Stage Inspector Card (Contains arrows, description, and protocol example inside card boundaries) */}
          <div className="bg-[#061A3D]/95 p-3.5 rounded-xl border border-[#168BFF]/40 shadow-xl flex-1 min-h-0 flex flex-col justify-between overflow-hidden">
            {/* Top row: Stage Title + Internal Navigation Arrows */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-lg bg-[#168BFF]/25 text-[#38C8FF] border border-[#168BFF]/50 shrink-0 shadow-inner">
                  {iconMap[currentStage.icon]}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-[#38C8FF] uppercase font-bold">
                    {lang === 'en' ? `Pipeline Stage 0${activeStage + 1} of 06` : `المرحلة 0${activeStage + 1} من 06`}
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-white">
                    {currentStage.name[lang]}
                  </h4>
                </div>
              </div>

              {/* Navigation arrows inside the card */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                  disabled={activeStage === 0}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed text-white transition-colors cursor-pointer border border-white/10"
                  title={lang === 'en' ? 'Previous Stage' : 'المرحلة السابقة'}
                >
                  {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                </button>
                <button
                  onClick={() => setActiveStage(Math.min(PIPELINE_STAGES.length - 1, activeStage + 1))}
                  disabled={activeStage === PIPELINE_STAGES.length - 1}
                  className="p-1.5 rounded-lg bg-[#168BFF] hover:bg-[#38C8FF] disabled:opacity-20 disabled:cursor-not-allowed text-white transition-colors cursor-pointer shadow-sm"
                  title={lang === 'en' ? 'Next Stage' : 'المرحلة التالية'}
                >
                  {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </button>
              </div>
            </div>

            {/* Middle: Stage Description */}
            <div className="py-2 flex-1 min-h-0 flex items-center overflow-hidden">
              <p className="text-xs sm:text-sm text-[#DCE5F2] leading-relaxed">
                {currentStage.desc[lang]}
              </p>
            </div>

            {/* Bottom: Industrial Protocol / Stack Example within card boundaries */}
            <div className="bg-[#08275A] p-2.5 rounded-lg border border-[#168BFF]/30 flex items-start gap-2.5 shrink-0 shadow-inner">
              <span className="text-[10px] font-mono text-[#38C8FF] uppercase font-bold shrink-0 mt-0.5">
                {lang === 'en' ? 'Protocol / Stack:' : 'البروتوكول الصناعي:'}
              </span>
              <span className="text-[11px] font-mono text-white/95 font-medium leading-tight">
                {currentStage.example[lang]}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (45%): 6 Data Quality Dimensions & Factory Challenges */}
        <div className="w-[45%] flex flex-col justify-between h-full min-h-0 overflow-hidden">
          {/* Heading */}
          <div className="flex items-center justify-between shrink-0 mb-1">
            <h3 className="text-base sm:text-lg font-bold text-[#38C8FF] flex items-center gap-2">
              <CheckCircle size={18} />
              <span>{lang === 'en' ? '6 Data Quality Dimensions' : 'أبعاد جودة البيانات الصناعية'}</span>
            </h3>
            <span className="text-[11px] font-mono text-white/50">
              ISO 8000 / DAMA
            </span>
          </div>

          {/* 6 Data Quality Dimensions: Clean 2-column × 3-row grid */}
          <div className="grid grid-cols-2 gap-2 flex-1 min-h-0 overflow-hidden">
            {DATA_QUALITY_DIMENSIONS.map((dim, i) => (
              <div
                key={i}
                className="bg-[#08275A]/50 border-l-3 border-[#168BFF] rtl:border-l-0 rtl:border-r-3 rtl:border-r-[#168BFF] p-2 rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg flex flex-col justify-between hover:bg-[#08275A]/80 transition-colors"
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-white font-bold text-xs group-hover:text-[#38C8FF] transition-colors truncate">
                    {dim.name[lang]}
                  </span>
                  <Check size={14} className="text-[#38C8FF] shrink-0" />
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#DCE5F2]/80 leading-tight">
                  {dim.desc[lang]}
                </p>
              </div>
            ))}
          </div>

          {/* Real-World Factory Challenges: Separate compact panel strictly BELOW the quality cards */}
          <div className="p-2.5 bg-amber-950/30 border border-amber-500/40 rounded-xl shrink-0 mt-2">
            <h4 className="text-amber-400 font-bold text-xs mb-1 flex items-center gap-1.5">
              <AlertTriangle size={15} />
              <span>{lang === 'en' ? 'Real-World Factory Challenges' : 'تحديات المصانع الواقعية'}</span>
            </h4>
            <ul className="text-[10px] sm:text-[11px] text-amber-100/90 space-y-1 list-disc list-inside leading-tight">
              <li>{lang === 'en' ? 'Heterogeneous legacy fieldbus (Modbus, Profibus) vs modern OPC UA & MQTT' : 'تباين البروتوكولات القديمة (Modbus, Profibus) مع معايير OPC UA و MQTT الحديثة'}</li>
              <li>{lang === 'en' ? 'Microsecond vibration sampling rates generating gigabytes per operating shift' : 'معدلات أخذ عينات الاهتزاز الفائقة بالمللي ثانية التي تولد غيغابايت لكل وردية تشغيل'}</li>
              <li>{lang === 'en' ? 'Sensor drift, missing timestamp synchronization, and severe factory RF noise' : 'انحراف الحساسات، فقدان التزامن الزمني، والضوضاء الكهرومغناطيسية العالية في المصنع'}</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
