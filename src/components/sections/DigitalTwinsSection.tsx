import React, { useState } from 'react';
import { 
  Cpu, Factory, Globe, Activity, ChevronRight, ChevronLeft, 
  RotateCw, Play, Pause, Sparkles, CheckCircle2 
} from 'lucide-react';
import { Language } from '../../types/presentation';

interface Props {
  lang: Language;
}

export const DigitalTwinsSection: React.FC<Props> = ({ lang }) => {
  const [isSimulating, setIsSimulating] = useState(true);
  const [twinMode, setTwinMode] = useState<'thermal' | 'kinematic' | 'predictive'>('predictive');
  const isRTL = lang === 'ar';

  return (
    <div className="w-full h-full flex flex-col justify-between py-2 px-6 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center pb-3 border-b border-[#168BFF]/30 shrink-0">
        <div>
          <div className="text-xs uppercase font-mono text-[#38C8FF] tracking-wider font-bold mb-0.5">
            {lang === 'en' ? 'Section 03 · Cyber-Physical Systems' : 'المحور الثالث · النظم السيبرانية الفيزيائية'}
          </div>
          <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
            <Cpu className="text-[#38C8FF] shrink-0" size={30} />
            <span>{lang === 'en' ? 'Digital Twins in Smart Manufacturing' : 'التوائم الرقمية في التصنيع الذكي'}</span>
          </h2>
          <p className="text-[#DCE5F2]/75 text-sm mt-0.5">
            {lang === 'en'
              ? 'Connecting physical industrial machinery with real-time digital intelligence and predictive simulation.'
              : 'ربط المعدات الصناعية الفيزيائية بذكاء رقمي فوري ومحاكاة تنبؤية قائمة على الفيزياء.'}
          </p>
        </div>

        <div className="text-[#38C8FF] font-mono bg-[#168BFF]/15 px-4 py-2 rounded-xl border border-[#168BFF]/40 text-sm font-bold flex items-center gap-2 shrink-0">
          <span>{lang === 'en' ? 'ALLOCATED TIME:' : 'الوقت المحدد:'}</span>
          <span className="text-white">2:30 MIN</span>
        </div>
      </div>

      {/* Main Digital Twin Architecture Box */}
      <div className="bg-[#08275A]/50 border-2 border-[#168BFF]/35 p-4 rounded-2xl backdrop-blur-md shadow-2xl flex-1 min-h-0 flex flex-col justify-between my-1 overflow-hidden">
        
        {/* Simulation Controls Ribbon */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className="flex items-center gap-2 px-3 py-1 rounded-xl bg-[#168BFF] hover:bg-[#38C8FF] text-white text-xs font-bold transition-colors cursor-pointer shadow-md"
            >
              {isSimulating ? <Pause size={13} /> : <Play size={13} />}
              <span>{isSimulating ? (lang === 'en' ? 'Live Telemetry Active' : 'البث الفوري نشط') : (lang === 'en' ? 'Simulation Paused' : 'المحاكاة متوقفة')}</span>
            </button>
            <span className="text-xs font-mono text-[#38C8FF]">
              {lang === 'en' ? 'OPC UA Bidirectional Sync: 100 Hz Deterministic' : 'تزامن ثنائي الاتجاه عبر OPC UA: 100 هرتز'}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#061A3D] p-1 rounded-xl border border-white/15 text-xs">
            <button
              onClick={() => setTwinMode('predictive')}
              className={`px-2.5 py-0.5 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                twinMode === 'predictive' ? 'bg-[#168BFF] text-white shadow-sm' : 'text-white/60 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'Predictive RUL' : 'التنبؤ بالعمر RUL'}
            </button>
            <button
              onClick={() => setTwinMode('thermal')}
              className={`px-2.5 py-0.5 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                twinMode === 'thermal' ? 'bg-[#168BFF] text-white shadow-sm' : 'text-white/60 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'Thermal FEA' : 'محاكاة حرارية FEA'}
            </button>
            <button
              onClick={() => setTwinMode('kinematic')}
              className={`px-2.5 py-0.5 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                twinMode === 'kinematic' ? 'bg-[#168BFF] text-white shadow-sm' : 'text-white/60 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'Kinematic Jitter' : 'الحركة والتذبذب'}
            </button>
          </div>
        </div>

        {/* 3 Columns: Physical Asset <-> Bridge <-> Digital Twin */}
        <div className="grid grid-cols-12 gap-5 items-center flex-1 min-h-0 py-2 overflow-hidden">
          
          {/* Col 1 (4 cols): Physical Asset */}
          <div className="col-span-4 flex flex-col items-center text-center p-4 bg-[#061A3D]/80 rounded-2xl border border-white/10 shadow-xl h-full justify-center">
            <div className="relative mb-2">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-700 via-slate-800 to-[#061A3D] border-2 border-slate-500/80 flex items-center justify-center shadow-xl relative z-10">
                <Factory size={42} className="text-slate-200" />
              </div>
              {isSimulating && (
                <div className="absolute -inset-1 rounded-2xl bg-[#168BFF]/30 blur-md animate-pulse z-0"></div>
              )}
            </div>

            <h3 className="text-xl font-bold text-white">
              {lang === 'en' ? 'Physical Asset' : 'الأصل الفيزيائي الحقيقي'}
            </h3>
            <p className="text-[11px] text-[#DCE5F2]/70 mt-0.5 max-w-xs">
              {lang === 'en' ? 'Industrial 3D Additive Printer & Extruder CNC Servos' : 'طابعة تصنيع إضافي ثلاثية الأبعاد ومحركات سيرفو CNC'}
            </p>

            <div className="mt-2.5 flex flex-wrap justify-center gap-1.5 text-xs font-mono">
              <span className="bg-red-500/20 text-red-300 px-2.5 py-0.5 rounded-lg border border-red-500/40 font-bold text-[11px]">
                {lang === 'en' ? 'Temp: 45.2°C' : 'الحرارة: 45.2°س'}
              </span>
              <span className="bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-lg border border-amber-500/40 font-bold text-[11px]">
                {lang === 'en' ? 'Vib: 2.1 mm/s' : 'الاهتزاز: 2.1 مم/ث'}
              </span>
              <span className="bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-lg border border-blue-500/40 font-bold text-[11px]">
                {lang === 'en' ? 'Load: 68%' : 'الحمل: 68%'}
              </span>
            </div>
          </div>

          {/* Col 2 (4 cols): Bidirectional Telemetry & Control Bridge */}
          <div className="col-span-4 flex flex-col items-center justify-center relative px-3 h-full">
            
            {/* Top Stream: Telemetry UP */}
            <div className="w-full flex flex-col items-center mb-4">
              <div className="flex items-center justify-between w-full text-xs font-mono text-[#38C8FF] mb-1 font-bold">
                <span>{lang === 'en' ? 'Telemetry Stream' : 'تدفق القياسات الفوري'}</span>
                <span>OPC UA / MQTT</span>
              </div>
              <div className="h-2.5 w-full bg-[#061A3D] rounded-full border border-[#168BFF]/50 relative overflow-hidden shadow-inner">
                {isSimulating && (
                  <div className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-[#38C8FF] to-transparent animate-slide-right"></div>
                )}
              </div>
              <div className="text-[10px] text-white/50 mt-1 font-mono">
                {lang === 'en' ? 'Sensors ➔ Validation ➔ Digital Twin' : 'الحساسات ➔ التحقق ➔ التوأم الرقمي'}
              </div>
            </div>

            {/* Central Node Icon */}
            <div className="p-3 rounded-full bg-[#061A3D] border-2 border-[#168BFF] shadow-[0_0_20px_rgba(22,139,255,0.4)] my-1">
              <RotateCw size={24} className={`text-[#38C8FF] ${isSimulating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            </div>

            {/* Bottom Stream: Control DOWN */}
            <div className="w-full flex flex-col items-center mt-4">
              <div className="flex items-center justify-between w-full text-xs font-mono text-purple-300 mb-1 font-bold">
                <span>{lang === 'en' ? 'Control Setpoints' : 'أوامر الضبط'}</span>
                <span>Closed Loop</span>
              </div>
              <div className="h-2.5 w-full bg-[#061A3D] rounded-full border border-purple-500/50 relative overflow-hidden shadow-inner">
                {isSimulating && (
                  <div className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-slide-left"></div>
                )}
              </div>
              <div className="text-[10px] text-white/50 mt-1 font-mono">
                {lang === 'en' ? 'AI Optimizations ➔ Actuators' : 'الضبط الذكي ➔ المشغلات'}
              </div>
            </div>

          </div>

          {/* Col 3 (4 cols): Digital Twin */}
          <div className="col-span-4 flex flex-col items-center text-center p-4 bg-[#061A3D]/80 rounded-2xl border border-[#38C8FF]/50 shadow-[0_0_35px_rgba(56,200,255,0.2)] h-full justify-center">
            <div className="relative mb-2">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#168BFF]/40 via-[#08275A] to-[#38C8FF]/20 border-2 border-[#38C8FF] flex items-center justify-center shadow-[0_0_25px_rgba(56,200,255,0.4)] relative z-10">
                <Globe size={42} className="text-[#38C8FF] animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 p-1.5 rounded-full bg-purple-600 text-white shadow-lg">
                <Sparkles size={14} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white">
              {lang === 'en' ? 'Digital Twin' : 'التوأم الرقمي'}
            </h3>
            <p className="text-[11px] text-[#DCE5F2]/70 mt-0.5 max-w-xs">
              {lang === 'en' ? 'Physics-Informed Real-Time Simulation' : 'محاكاة رياضية متوافقة مع الفيزياء'}
            </p>

            <div className="mt-2.5 flex flex-wrap justify-center gap-1.5 text-xs font-mono">
              <span className="bg-[#168BFF]/30 text-[#38C8FF] px-2.5 py-0.5 rounded-lg border border-[#168BFF]/50 font-bold text-[11px]">
                {twinMode === 'predictive' && (lang === 'en' ? 'RUL: 4,200 Hrs' : 'العمر: 4200 س')}
                {twinMode === 'thermal' && (lang === 'en' ? 'Thermal Gradient Safe' : 'حرارة آمنة')}
                {twinMode === 'kinematic' && (lang === 'en' ? 'Jitter: 0.02ms' : 'التذبذب: 0.02ms')}
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-lg border border-emerald-500/40 font-bold flex items-center gap-1 text-[11px]">
                <CheckCircle2 size={12} />
                <span>{lang === 'en' ? 'Model Verified' : 'موثق'}</span>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Keynote Epigram */}
        <div className="pt-3 border-t border-white/10 text-center shrink-0">
          <p className="text-base font-semibold text-white max-w-4xl mx-auto italic">
            "{lang === 'en' ? (
              <>
                A digital twin transforms industrial sensor data into{' '}
                <span className="text-[#38C8FF] font-black not-italic">operational foresight</span>, 
                enabling proactive intervention before mechanical breakdown occurs.
              </>
            ) : (
              <>
                التوأم الرقمي يحول بيانات الحساسات الصامتة إلى{' '}
                <span className="text-[#38C8FF] font-black not-italic">بصيرة تشغيلية استباقية</span>، 
                مما يتيح التدخل العلاجي قبل وقوع الأعطال الميكانيكية.
              </>
            )}"
          </p>
        </div>

      </div>
    </div>
  );
};
