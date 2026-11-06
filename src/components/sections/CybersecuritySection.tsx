import React, { useState } from 'react';
import { 
  Shield, Activity, Globe, Lock, AlertTriangle, 
  CheckCircle2, FileCheck, ShieldAlert, Cpu 
} from 'lucide-react';
import { Language } from '../../types/presentation';
import { CYBER_THREATS, IT_OT_COMPARISON } from '../../data/presentationData';

interface Props {
  lang: Language;
}

export const CybersecuritySection: React.FC<Props> = ({ lang }) => {
  const [activeThreat, setActiveThreat] = useState(0);

  const threatIcons: Record<string, React.ReactNode> = {
    Activity: <Activity size={22} />,
    Globe: <Globe size={22} />,
    Lock: <Lock size={22} />,
    Shield: <Shield size={22} />
  };

  const selectedThreat = CYBER_THREATS[activeThreat];

  return (
    <div className="w-full h-full flex flex-col justify-between py-2 px-6 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center pb-3 border-b border-[#168BFF]/30 shrink-0">
        <div>
          <div className="text-xs uppercase font-mono text-[#38C8FF] tracking-wider font-bold mb-0.5">
            {lang === 'en' ? 'Section 02 · Cyber-Physical Defense' : 'المحور الثاني · الدفاع السيبراني الفيزيائي'}
          </div>
          <h2 className="text-3xl font-extrabold text-white flex items-center gap-3">
            <Shield className="text-[#38C8FF] shrink-0" size={30} />
            <span>{lang === 'en' ? 'Industrial Cybersecurity in Smart Factories' : 'الأمن السيبراني الصناعي في المصانع الذكية'}</span>
          </h2>
          <p className="text-[#DCE5F2]/75 text-sm mt-0.5">
            {lang === 'en'
              ? 'Protecting data integrity, preventing physical sabotage, and ensuring operational availability.'
              : 'حماية سلامة البيانات ومنع التخريب المادي وضمان التوافرية التشغيلية المستمرة.'}
          </p>
        </div>

        <div className="text-[#38C8FF] font-mono bg-[#168BFF]/15 px-4 py-2 rounded-xl border border-[#168BFF]/40 text-sm font-bold flex items-center gap-2 shrink-0">
          <span>{lang === 'en' ? 'ALLOCATED TIME:' : 'الوقت المحدد:'}</span>
          <span className="text-white">5:00 MIN</span>
        </div>
      </div>

      {/* Main 2-Column Split */}
      <div className="grid grid-cols-12 gap-5 flex-1 min-h-0 items-stretch py-2 overflow-hidden">
        
        {/* Left 6 Columns: IT vs OT Paradigm Shift Table & Standards */}
        <div className="col-span-6 flex flex-col justify-between gap-2.5 h-full overflow-hidden">
          <div className="flex items-center justify-between shrink-0">
            <h3 className="text-lg font-bold text-[#38C8FF] flex items-center gap-2">
              <Cpu size={18} />
              <span>{lang === 'en' ? 'Paradigm Shift: IT vs OT Security' : 'التحول المفاهيمي: أمان IT مقابل أمان OT'}</span>
            </h3>
            <span className="text-xs text-white/50 font-mono">
              {lang === 'en' ? 'Different operating priorities' : 'أولويات تشغيلية متباينة'}
            </span>
          </div>

          {/* Comparative Table */}
          <div className="bg-[#08275A]/50 border-2 border-[#168BFF]/35 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl flex-1 min-h-0 flex flex-col justify-center">
            <table className="w-full text-left rtl:text-right text-xs">
              <thead className="bg-[#061A3D] text-[#38C8FF]">
                <tr>
                  <th className="p-2 border-b border-[#168BFF]/30 font-bold uppercase tracking-wider text-[11px]">
                    {lang === 'en' ? 'Dimension' : 'المعيار'}
                  </th>
                  <th className="p-2 border-b border-[#168BFF]/30 font-bold uppercase tracking-wider text-[11px]">
                    {lang === 'en' ? 'IT Security (Enterprise)' : 'أمان IT (مؤسسي)'}
                  </th>
                  <th className="p-2 border-b border-[#168BFF]/30 font-bold uppercase tracking-wider text-amber-400 text-[11px]">
                    {lang === 'en' ? 'OT Security (Plant Floor)' : 'أمان OT (المصنع)'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-[#DCE5F2]">
                {IT_OT_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-2 font-bold text-white text-xs">
                      {row.focus[lang]}
                    </td>
                    <td className="p-2 text-xs">
                      <div className="text-[#38C8FF] font-semibold text-xs">{row.it[lang]}</div>
                      <div className="text-[10px] text-white/50 mt-0.5">{row.itNote[lang]}</div>
                    </td>
                    <td className="p-2 text-xs bg-amber-500/5">
                      <div className="text-amber-400 font-bold text-xs">{row.ot[lang]}</div>
                      <div className="text-[10px] text-amber-200/70 mt-0.5">{row.otNote[lang]}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Standards & Compliance Frameworks Badges */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="bg-[#061A3D] border border-[#168BFF]/35 p-3 rounded-xl text-center">
              <div className="text-[10px] text-white/50 uppercase font-mono tracking-wider">
                {lang === 'en' ? 'Automation Standard' : 'المعيار الصناعي للأتمتة'}
              </div>
              <div className="font-extrabold text-base text-[#38C8FF] mt-0.5">IEC 62443</div>
              <div className="text-[11px] text-[#DCE5F2]/75 mt-0.5">
                {lang === 'en' ? 'Security for Industrial Automation Systems' : 'أمان الأتمتة ونظم التحكم الصناعية'}
              </div>
            </div>

            <div className="bg-[#061A3D] border border-emerald-500/35 p-3 rounded-xl text-center">
              <div className="text-[10px] text-white/50 uppercase font-mono tracking-wider">
                {lang === 'en' ? 'ICS Framework' : 'إطار عمل أمان ICS'}
              </div>
              <div className="font-extrabold text-base text-emerald-400 mt-0.5">NIST SP 800-82</div>
              <div className="text-[11px] text-[#DCE5F2]/75 mt-0.5">
                {lang === 'en' ? 'Guide to Industrial Control Systems Security' : 'دليل أمان نظم التحكم الصناعية'}
              </div>
            </div>
          </div>
        </div>

        {/* Right 6 Columns: Interactive Cyber Threat Visualizer */}
        <div className="col-span-6 flex flex-col justify-between gap-3 h-full overflow-hidden">
          <div className="flex items-center justify-between shrink-0">
            <h3 className="text-xl font-bold text-[#38C8FF] flex items-center gap-2">
              <ShieldAlert size={20} />
              <span>{lang === 'en' ? 'Major Cyber Threats & Countermeasures' : 'التهديدات السيبرانية الصناعية وطرق الحماية'}</span>
            </h3>
            <span className="text-xs text-white/50 font-mono">
              {lang === 'en' ? 'Select threat scenario' : 'اختر سيناريو التهديد'}
            </span>
          </div>

          <div className="flex flex-col gap-2.5 flex-1 justify-between">
            {CYBER_THREATS.map((threat, idx) => {
              const isSelected = activeThreat === idx;
              return (
                <div
                  key={threat.id}
                  onClick={() => setActiveThreat(idx)}
                  className={`cursor-pointer p-3.5 rounded-xl border-2 transition-all duration-200 flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-[#168BFF]/20 border-[#38C8FF] shadow-[0_0_20px_rgba(56,200,255,0.3)] flex-1'
                      : 'bg-[#08275A]/45 border-white/10 hover:border-[#168BFF]/40'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl shrink-0 ${
                      isSelected ? 'bg-[#168BFF] text-white' : 'bg-[#061A3D] text-[#168BFF]'
                    }`}
                  >
                    {threatIcons[threat.icon] || <Shield size={22} />}
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`font-bold text-base ${isSelected ? 'text-[#38C8FF]' : 'text-white'}`}>
                        {threat.name[lang]}
                      </h4>
                      {isSelected && (
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                          {lang === 'en' ? 'Active Focus' : 'الحالة المحددة'}
                        </span>
                      )}
                    </div>

                    {isSelected ? (
                      <div className="space-y-2 mt-2 text-xs">
                        <p className="text-[#DCE5F2] leading-snug">
                          {threat.desc[lang]}
                        </p>
                        <div className="bg-[#061A3D] p-2.5 rounded-lg border border-red-500/30 text-red-200">
                          <span className="font-bold text-red-400 block text-[11px] uppercase">
                            {lang === 'en' ? 'Industrial Damage:' : 'الأثر التخريبي المحتمل:'}
                          </span>
                          <span className="text-xs leading-tight">{threat.impact[lang]}</span>
                        </div>
                        <div className="bg-[#061A3D] p-2.5 rounded-lg border border-emerald-500/40 text-emerald-300 flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-emerald-400 block text-[11px] uppercase">
                              {lang === 'en' ? 'Engineering Defense:' : 'الحل الهندسي المضاد:'}
                            </span>
                            <span className="text-xs leading-tight">{threat.protection[lang]}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-[#DCE5F2]/60 line-clamp-1">
                        {threat.desc[lang]}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
