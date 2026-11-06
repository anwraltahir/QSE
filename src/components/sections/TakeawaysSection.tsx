import React from 'react';
import { Database, Shield, Globe, Settings, RotateCcw, Award, Quote, CheckCircle2 } from 'lucide-react';
import { Language, SectionId } from '../../types/presentation';
import { PRESENTATION_INFO } from '../../data/presentationData';

interface Props {
  lang: Language;
  onNavigate: (sectionId: SectionId) => void;
  onOpenPoster: () => void;
}

export const TakeawaysSection: React.FC<Props> = ({ lang, onNavigate, onOpenPoster }) => {
  const takeaways = [
    {
      icon: Database,
      color: 'text-[#168BFF]',
      borderColor: 'border-[#168BFF]/40',
      bgGlow: 'bg-[#168BFF]/10',
      tag: 'DATA ENGINEERING',
      tagAr: 'هندسة البيانات',
      title: {
        en: '01. Industrial Data Foundations',
        ar: '01. أسس البيانات الصناعية'
      },
      text: {
        en: 'Reliable industrial telemetry is the non-negotiable bedrock of smart manufacturing. High-frequency sensor streams must be deterministic, filtered, and timestamp-synchronized.',
        ar: 'البيانات الصناعية الموثوقة هي الأساس الحتمي لكل مصنع ذكي. يجب تصفية القياسات عالية التردد والتحقق من حدودها ومزامنتها زمنياً بدقة متناهية.'
      }
    },
    {
      icon: Shield,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/40',
      bgGlow: 'bg-emerald-500/10',
      tag: 'OT CYBERSECURITY',
      tagAr: 'الأمن السيبراني الصناعي',
      title: {
        en: '02. Cyber-Physical Integrity',
        ar: '02. الأمان السيبراني الفيزيائي'
      },
      text: {
        en: 'Cybersecurity protects physical human safety, continuous availability, and deterministic control. Industrial OT defense cannot rely on conventional IT perimeter models.',
        ar: 'الأمن السيبراني يحمي الأرواح والسلامة الفيزيائية والتوافرية المستمرة. دفاعات OT تختلف جذرياً عن ممارسات تكنولوجيا المعلومات التقليدية.'
      }
    },
    {
      icon: Globe,
      color: 'text-[#38C8FF]',
      borderColor: 'border-[#38C8FF]/40',
      bgGlow: 'bg-[#38C8FF]/10',
      tag: 'PHYSICS-AI TWIN',
      tagAr: 'التوأم الرقمي الحي',
      title: {
        en: '03. Actionable Digital Twins',
        ar: '03. التوائم الرقمية الحية'
      },
      text: {
        en: 'Digital twins bridge physical hardware with digital intelligence, translating raw sensor telemetry into physics-based simulations and prescriptive intervention foresight.',
        ar: 'التوائم الرقمية تجسر الفجوة بين الأصول الفيزيائية والذكاء الحاسوبي، وتحول تدفقات الحساسات إلى رؤى تنبؤية قائمة على فيزياء التشغيل.'
      }
    },
    {
      icon: Settings,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/40',
      bgGlow: 'bg-purple-500/10',
      tag: 'SYSTEM INTEGRATION',
      tagAr: 'التكامل الهندسي',
      title: {
        en: '04. End-to-End System Integration',
        ar: '04. التكامل الشامل للمنظومة'
      },
      text: {
        en: 'Systemic cohesion across all 5 architectural tiers creates resilient, scalable, and autonomous smart manufacturing ecosystems capable of self-healing.',
        ar: 'التكامل الهندسي الشامل عبر المستويات الخمسة هو السبيل الوحيد لبناء منظومات تصنيع ذكية مرنة، آمنة، وذاتية التكيف والتعافي.'
      }
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center text-center py-2 px-8 overflow-hidden select-none">
      
      {/* Top Banner & Header */}
      <div className="flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#168BFF]/20 border border-[#168BFF]/50 text-[#38C8FF] text-xs font-mono uppercase tracking-wider mb-2 font-bold shadow-[0_0_15px_rgba(22,139,255,0.3)]">
          <CheckCircle2 size={16} />
          <span>{lang === 'en' ? 'CONCLUDING SYNTHESIS · 07/07' : 'الخلاصة الهندسية والختام · ٠٧/٠٧'}</span>
        </div>

        <h2 className="text-3xl xl:text-4xl font-black text-white tracking-tight">
          {lang === 'en' ? 'Key Technical Takeaways' : 'النقاط الهندسية الجوهرية'}
        </h2>
        <p className="text-xs text-[#38C8FF] mt-1 font-medium">
          {lang === 'en'
            ? 'Unified Architecture: Industrial Data Engineering, OT Cybersecurity, and Digital Twins'
            : 'المنظومة الموحدة: هندسة البيانات الصناعية، الأمن السيبراني لشبكات التحكم، والتوائم الرقمية'}
        </p>
      </div>

      {/* 4 Cards 2x2 Grid */}
      <div className="grid grid-cols-2 gap-4 w-full text-left rtl:text-right my-1">
        {takeaways.map((item, idx) => (
          <div
            key={idx}
            className={`bg-[#08275A]/60 border ${item.borderColor} p-3.5 rounded-xl flex items-start gap-3.5 hover:bg-[#08275A]/90 transition-all duration-300 shadow-lg relative group`}
          >
            <div className={`p-2.5 bg-[#061A3D] rounded-xl border border-white/10 ${item.color} ${item.bgGlow} shrink-0 group-hover:scale-110 transition-transform`}>
              <item.icon size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1 gap-2">
                <h3 className={`text-xs sm:text-sm font-bold ${item.color}`}>
                  {item.title[lang]}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#061A3D] border border-white/10 text-white/60 uppercase shrink-0">
                  {lang === 'en' ? item.tag : item.tagAr}
                </span>
              </div>
              <p className="text-xs text-[#DCE5F2]/90 leading-relaxed">
                {item.text[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Keynote Conference Quote Callout with Presenter Attribution */}
      <div className="p-3.5 px-6 bg-[#08275A]/80 border-2 border-[#168BFF]/50 rounded-2xl backdrop-blur-md shadow-[0_0_40px_rgba(22,139,255,0.25)] relative w-full text-center flex items-center justify-between gap-6">
        <Quote className="text-[#38C8FF]/20 shrink-0 hidden md:block" size={40} />
        
        <div className="flex-1">
          <p className="text-base xl:text-lg font-bold text-[#38C8FF] italic leading-relaxed mb-2">
            "{lang === 'en'
              ? 'The future of smart manufacturing is not just about connecting machines. It is about building intelligent, secure, and reliable industrial ecosystems.'
              : 'مستقبل التصنيع الذكي لا يقتصر على مجرد ربط الآلات. بل يكمن في بناء منظومات صناعية ذكية، آمنة، وموثوقة.'}"
          </p>

          <div className="text-[11px] font-mono text-white/80 uppercase tracking-widest font-semibold flex items-center justify-center gap-3">
            <span className="text-white font-bold">{PRESENTATION_INFO.presenter.name[lang]}</span>
            <span className="text-[#38C8FF]">·</span>
            <span>{PRESENTATION_INFO.presenter.title[lang]}</span>
            <span className="text-[#38C8FF]">·</span>
            <span className="text-white/60">{PRESENTATION_INFO.organizer[lang]}</span>
          </div>
        </div>

        {/* Presenter Portrait Thumbnail in Quote Box */}
        <div 
          onClick={onOpenPoster}
          className="w-14 h-14 rounded-xl border border-[#38C8FF] p-0.5 bg-[#061A3D] shrink-0 overflow-hidden cursor-pointer hover:scale-105 transition-transform hidden sm:block shadow-md"
          title={PRESENTATION_INFO.presenter.name[lang]}
        >
          <img
            src="/assets/logos/presenter-photo.jpg"
            alt={PRESENTATION_INFO.presenter.name[lang]}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-center gap-4 mt-1">
        <button
          onClick={() => onNavigate('overview')}
          className="px-6 py-2.5 bg-[#168BFF] hover:bg-[#38C8FF] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(22,139,255,0.4)] flex items-center gap-2 text-sm cursor-pointer hover:scale-105"
        >
          <RotateCcw size={16} />
          <span>{lang === 'en' ? 'Restart Presentation' : 'إعادة تشغيل العرض من البداية'}</span>
        </button>

        <button
          onClick={onOpenPoster}
          className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm cursor-pointer hover:scale-105"
        >
          <Award size={16} className="text-[#38C8FF]" />
          <span>{lang === 'en' ? 'Official Conference Poster' : 'الملصق الرسمي للمؤتمر'}</span>
        </button>
      </div>

    </div>
  );
};
