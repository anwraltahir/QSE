import React, { useState, useMemo } from 'react';
import { 
  Activity, Thermometer, Radio, Heart 
} from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area, LineChart, Line, 
  XAxis, YAxis, CartesianGrid, Tooltip 
} from 'recharts';
import { Language } from '../../types/presentation';
import { CASE_STUDY_SCENARIOS } from '../../data/presentationData';

interface Props {
  lang: Language;
}

export const CaseStudySection: React.FC<Props> = ({ lang }) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<'normal' | 'vibration' | 'temp' | 'suspicious'>('normal');

  const currentScenario = CASE_STUDY_SCENARIOS.find(s => s.id === selectedScenarioId) || CASE_STUDY_SCENARIOS[0];

  // Illustrative real-time telemetry stream
  const chartData = useMemo(() => {
    const data = [];
    const baseTemp = 45.0;
    const baseVib = 2.0;

    for (let i = 0; i < 30; i++) {
      let temp = baseTemp + (Math.sin(i / 3) * 1.5) + (Math.random() * 0.8 - 0.4);
      let vib = baseVib + (Math.cos(i / 2) * 0.3) + (Math.random() * 0.2 - 0.1);

      if (selectedScenarioId === 'vibration' && i >= 14) {
        const severity = (i - 14) * 0.55;
        vib = baseVib + severity + (Math.random() * 1.2 - 0.3);
        temp = baseTemp + (severity * 0.8);
      } else if (selectedScenarioId === 'temp' && i >= 10) {
        const ramp = (i - 10) * 2.8;
        temp = baseTemp + ramp + (Math.random() * 1.5);
        if (i >= 22) vib = baseVib + 1.2;
      } else if (selectedScenarioId === 'suspicious' && i >= 18) {
        temp = (i % 2 === 0) ? 195.0 + Math.random() * 5 : 44.0 + Math.random() * 2;
        vib = (i % 3 === 0) ? 14.2 : 2.1;
      }

      data.push({
        time: `T-${30 - i}s`,
        temp: Number(temp.toFixed(1)),
        vibration: Number(vib.toFixed(2))
      });
    }
    return data;
  }, [selectedScenarioId]);

  return (
    <div className="w-full h-full flex flex-col justify-between py-2 px-6 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center pb-3 border-b border-[#168BFF]/30 shrink-0">
        <div>
          <div className="text-xs uppercase font-mono text-[#38C8FF] tracking-wider font-bold mb-0.5">
            {lang === 'en' ? 'Industrial Application · Live Demonstration' : 'تطبيق صناعي · عرض عملي حي'}
          </div>
          <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
            <Activity className="text-[#38C8FF] shrink-0" size={30} />
            <span>{lang === 'en' ? 'Industrial Case Study: Motor Diagnostics' : 'دراسة حالة صناعية: تشخيص ومراقبة محرك'}</span>
          </h2>
          <p className="text-[#DCE5F2]/75 text-sm mt-0.5">
            {lang === 'en'
              ? 'Real-time telemetry stream for Additive Manufacturing Extruder Drive (Asset: MTR-3D-P88).'
              : 'بث فوري لبيانات محرك بثق التصنيع الإضافي ثلاثي الأبعاد (رقم الأصل: MTR-3D-P88).'}
          </p>
        </div>

        <div className="text-red-400 font-mono bg-red-950/40 px-4 py-2 rounded-xl border border-red-500/40 text-xs font-bold animate-pulse flex items-center gap-2 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
          <span>{lang === 'en' ? 'LIVE TELEMETRY ENGINE' : 'محرك القياس المباشر'}</span>
        </div>
      </div>

      {/* Scenario Injection Selector Toolbar */}
      <div className="flex items-center gap-3 py-1.5 shrink-0">
        <span className="text-xs font-mono uppercase text-[#38C8FF] font-bold shrink-0">
          {lang === 'en' ? 'Inject Industrial Scenario:' : 'حقن سيناريو صناعي:'}
        </span>
        <div className="flex items-center gap-2.5 flex-1">
          {CASE_STUDY_SCENARIOS.map((s) => {
            const isSelected = selectedScenarioId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedScenarioId(s.id)}
                className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 border cursor-pointer ${
                  isSelected
                    ? `${s.color} text-white border-transparent shadow-[0_0_20px_rgba(22,139,255,0.4)] scale-[1.01]`
                    : 'bg-[#08275A]/60 text-[#DCE5F2] border-white/15 hover:border-[#168BFF]/50 hover:bg-[#08275A]'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-current'}`}></div>
                <span className="truncate">{s.label[lang]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* System Status Dashboard Bar */}
      <div className="bg-[#08275A]/65 border-2 border-[#168BFF]/35 rounded-2xl p-3 backdrop-blur-md shadow-xl flex items-center justify-between gap-5 shrink-0">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-md border font-extrabold ${currentScenario.tagColor}`}>
              {currentScenario.badgeText[lang]}
            </span>
            <span className="text-[11px] font-mono text-white/50">
              {lang === 'en' ? 'Real-Time Diagnostic Interpretation' : 'التفسير التشخيصي للأنظمة'}
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2">
            {currentScenario.description[lang]}
          </p>
          <p className="text-[11px] sm:text-xs text-[#38C8FF] mt-0.5 font-semibold line-clamp-2">
            {currentScenario.engineeringAction[lang]}
          </p>
        </div>

        {/* Health Metric & Asset Identifiers */}
        <div className="flex items-center gap-5 border-l rtl:border-l-0 rtl:border-r border-white/15 pl-5 rtl:pl-0 rtl:pr-5 shrink-0">
          <div className="text-center">
            <div className="text-[10px] text-white/50 font-mono uppercase mb-0.5 font-bold">
              {lang === 'en' ? 'Asset Health' : 'صحة الأصل'}
            </div>
            <div className={`text-xl font-black font-mono flex items-center gap-1 justify-center ${
              currentScenario.assetHealth > 75 
                ? 'text-emerald-400' 
                : currentScenario.assetHealth > 50 
                ? 'text-amber-400' 
                : 'text-rose-400'
            }`}>
              <Heart size={16} className="shrink-0" />
              <span>{currentScenario.assetHealth}%</span>
            </div>
          </div>

          <div className="text-right rtl:text-left">
            <div className="text-[10px] text-white/50 font-mono uppercase mb-0.5 font-bold">
              {lang === 'en' ? 'Asset Identifier' : 'معرّف الأصل'}
            </div>
            <div className="font-mono font-bold text-sm text-[#38C8FF]">
              MTR-3D-P88
            </div>
            <div className="text-[10px] text-white/40 font-mono">
              1500 RPM · 400V
            </div>
          </div>
        </div>
      </div>

      {/* Two Telemetry Charts Side by Side */}
      <div className="grid grid-cols-2 gap-4 flex-1 min-h-0 py-1.5 overflow-hidden items-stretch">
        
        {/* Chart 1: Temperature (°C) */}
        <div className="bg-[#061A3D]/95 p-3 rounded-2xl border border-white/15 flex flex-col justify-between shadow-xl min-h-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                <Thermometer size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {lang === 'en' ? 'Temperature Telemetry' : 'قياس درجة الحرارة'}
                </h3>
                <span className="text-[11px] font-mono text-white/50">
                  PT100 RTD Sensor · (°C)
                </span>
              </div>
            </div>
            <div className="text-xs font-mono font-bold text-red-400 bg-red-500/10 px-2.5 py-1 rounded-md border border-red-500/30">
              {lang === 'en' ? 'Threshold: 85°C' : 'الحد الحرج: 85°س'}
            </div>
          </div>

          <div className="w-full flex-1 min-h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="tempGradient169" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#168BFF" opacity={0.15} vertical={false} />
                <XAxis dataKey="time" stroke="#DCE5F2" opacity={0.6} fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#DCE5F2" opacity={0.6} fontSize={10} domain={[20, 220]} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: '#08275A', 
                    borderColor: '#168BFF', 
                    borderRadius: '8px', 
                    color: '#fff', 
                    fontSize: '12px' 
                  }}
                  itemStyle={{ color: '#ef4444' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#ef4444" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#tempGradient169)" 
                  isAnimationActive={false} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Vibration (mm/s) */}
        <div className="bg-[#061A3D]/95 p-3 rounded-2xl border border-white/15 flex flex-col justify-between shadow-xl min-h-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                <Radio size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {lang === 'en' ? 'Vibration Velocity' : 'سرعة الاهتزاز الميكانيكي'}
                </h3>
                <span className="text-[11px] font-mono text-white/50">
                  Piezoelectric Accelerometer · (mm/s RMS)
                </span>
              </div>
            </div>
            <div className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30">
              {lang === 'en' ? 'ISO 10816 Limit: 4.5 mm/s' : 'حد ISO 10816: 4.5 مم/ث'}
            </div>
          </div>

          <div className="w-full flex-1 min-h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#168BFF" opacity={0.15} vertical={false} />
                <XAxis dataKey="time" stroke="#DCE5F2" opacity={0.6} fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#DCE5F2" opacity={0.6} fontSize={10} domain={[0, 16]} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: '#08275A', 
                    borderColor: '#168BFF', 
                    borderRadius: '8px', 
                    color: '#fff', 
                    fontSize: '12px' 
                  }}
                  itemStyle={{ color: '#f59e0b' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="vibration" 
                  stroke="#f59e0b" 
                  strokeWidth={2.5} 
                  dot={false} 
                  isAnimationActive={false} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};
