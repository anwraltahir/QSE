import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, Maximize, Minimize, 
  ChevronRight, Activity, Shield, Cpu, Factory, 
  Settings, Database, Lock, Globe, AlertTriangle, CheckCircle,
  Menu, X, Clock, ChevronLeft
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

// --- CONSTANTS & DATA ---
const COLORS = {
  bgBase: '#061A3D',
  bgCard: '#08275A',
  accentPrimary: '#168BFF',
  accentSecondary: '#38C8FF',
  textMain: '#FFFFFF',
  textMuted: '#DCE5F2',
  danger: '#ff4d4f',
  warning: '#faad14',
  success: '#52c41a'
};

const SECTIONS = [
  { id: 'overview', title: { en: 'Overview', ar: 'نظرة عامة' }, duration: 0 },
  { id: 'data', title: { en: 'Industrial Data Engineering', ar: 'هندسة البيانات الصناعية' }, duration: 5 },
  { id: 'cyber', title: { en: 'Industrial Cybersecurity', ar: 'الأمن السيبراني الصناعي' }, duration: 5 },
  { id: 'twins', title: { en: 'Digital Twins', ar: 'التوائم الرقمية' }, duration: 2.5 },
  { id: 'factory', title: { en: 'Smart Factory Systems', ar: 'أنظمة المصانع الذكية' }, duration: 2.5 },
  { id: 'case', title: { en: 'Industrial Case Study', ar: 'دراسة حالة صناعية' }, duration: 0 },
  { id: 'takeaways', title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' }, duration: 0 }
];

// --- MAIN APPLICATION COMPONENT ---
export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [lang, setLang] = useState('en'); // 'en' or 'ar'
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Timer State
  const TOTAL_TIME = 15 * 60; // 15 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(TOTAL_TIME);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isTimerRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeRemaining]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en');
  const isRTL = lang === 'ar';

  // Navigation Helper
  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);
  const nextSection = () => {
    if (currentIndex < SECTIONS.length - 1) navigateTo(SECTIONS[currentIndex + 1].id);
  };
  const prevSection = () => {
    if (currentIndex > 0) navigateTo(SECTIONS[currentIndex - 1].id);
  };

  // Keyboard navigation for presentation mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isPresentationMode) {
        if (e.key === 'ArrowRight' || e.key === 'Space') nextSection();
        if (e.key === 'ArrowLeft') prevSection();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // --- SUB-COMPONENTS ---

  const HeaderLogos = () => (
    <div className="flex items-center justify-between w-full mb-8 border-b border-[#168BFF]/30 pb-4">
      {/* Real Logos requested by prompt - using filename references */}
      <div className="flex gap-4 items-center">
         <div className="w-16 h-16 bg-white/5 rounded flex items-center justify-center p-1 border border-white/10 overflow-hidden">
            <img src="/WhatsApp Image 2026-11-06 at 13.03.27 (1).jpeg" alt="Qatar Society of Engineers Logo" className="max-w-full max-h-full object-contain" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}} />
            <div className="hidden text-xs text-center">QSE Logo</div>
         </div>
         <div className="h-12 w-px bg-white/20"></div>
         <div className="w-32 h-16 bg-white/5 rounded flex items-center justify-center p-1 border border-white/10 overflow-hidden">
            <img src="/WhatsApp Image 2026-11-06 at 13.03.27.jpeg" alt="Ministry Logo" className="max-w-full max-h-full object-contain" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}} />
            <div className="hidden text-xs text-center">Ministry Logo</div>
         </div>
         <div className="h-12 w-px bg-white/20"></div>
         <div className="w-24 h-16 bg-white/5 rounded flex items-center justify-center p-1 border border-white/10 overflow-hidden">
            <img src="/WhatsApp Image 2026-11-06 at 13.03.26.jpeg" alt="UCC Holding Logo" className="max-w-full max-h-full object-contain" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}} />
            <div className="hidden text-xs text-center">UCC Logo</div>
         </div>
      </div>
      <div className="text-right">
        <h2 className="text-[#38C8FF] font-semibold text-lg tracking-wide">3D Printing & Smart Manufacturing</h2>
        <p className="text-[#DCE5F2]/60 text-sm">Conference 2026 | Doha, Qatar</p>
      </div>
    </div>
  );

  const SectionOverview = () => (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-in fade-in duration-700">
      <HeaderLogos />
      <div className="inline-block px-4 py-1 rounded-full bg-[#168BFF]/20 border border-[#168BFF]/50 text-[#38C8FF] text-sm mb-6 uppercase tracking-wider font-semibold">
        {lang === 'en' ? 'Technical Presentation' : 'عرض تقني'}
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl">
        Advanced Industrial Data Engineering <br/> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] to-[#38C8FF]">
          and Securing Digital Twins
        </span> <br/>
        in Smart Factories
      </h1>
      
      <div className="mt-8 p-6 bg-[#08275A]/60 backdrop-blur-md rounded-2xl border border-[#168BFF]/30 inline-flex flex-col items-center shadow-[0_0_30px_rgba(22,139,255,0.15)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38C8FF] to-transparent opacity-50"></div>
        
        <h3 className="text-2xl font-semibold text-white mb-1">Dr. Anwr Altahir</h3>
        <p className="text-[#38C8FF] font-medium mb-4 flex items-center gap-2">
          <Shield size={16} /> Systems Engineer, AI & Cybersecurity Researcher
        </p>
        
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-[#DCE5F2]/80 text-left mt-4 border-t border-white/10 pt-4 w-full">
          <div className="flex items-center gap-2"><Clock size={14} className="text-[#168BFF]"/> Hilton Doha</div>
          <div className="flex items-center gap-2"><Clock size={14} className="text-[#168BFF]"/> 08 November 2026</div>
          <div className="flex items-center gap-2 col-span-2 justify-center mt-2"><Clock size={14} className="text-[#168BFF]"/> 04:25 PM – 04:40 PM</div>
        </div>
      </div>

      <button 
        onClick={() => navigateTo('data')}
        className="mt-12 px-8 py-4 bg-[#168BFF] hover:bg-[#38C8FF] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(22,139,255,0.4)] flex items-center gap-3"
      >
        {lang === 'en' ? 'Explore Technical Presentation' : 'استكشاف العرض التقني'}
        <ChevronRight className={isRTL ? 'rotate-180' : ''} />
      </button>
    </div>
  );

  const SectionDataEngineering = () => {
    const [activeStage, setActiveStage] = useState(0);
    const stages = [
      { id: 'acq', name: 'Data Acquisition', icon: Activity, desc: 'Collecting raw signals from physical sensors (Temp, Vibration) via PLC/SCADA.', ex: 'Sensors -> 4-20mA -> PLC' },
      { id: 'ing', name: 'Data Ingestion', icon: Database, desc: 'Standardizing and transmitting data securely to edge or cloud systems.', ex: 'OPC UA, MQTT Protocols' },
      { id: 'pro', name: 'Data Processing', icon: Cpu, desc: 'Filtering noise, normalizing time-series data, and edge computing.', ex: 'Removing outliers, smoothing' },
      { id: 'val', name: 'Data Validation', icon: CheckCircle, desc: 'Ensuring data meets structural and operational thresholds before storage.', ex: 'Checking if Temp is within 0-200°C' },
      { id: 'sto', name: 'Data Storage', icon: Database, desc: 'Storing high-volume time-series data efficiently.', ex: 'Time-Series Databases (InfluxDB)' },
      { id: 'ana', name: 'Data Analytics', icon: Activity, desc: 'Extracting actionable engineering insights from processed data.', ex: 'OEE Calculation, Trends' }
    ];

    return (
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-[#168BFF]/30 pb-4">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Database className="text-[#38C8FF]" size={32} />
              {lang === 'en' ? 'Industrial Data Engineering' : 'هندسة البيانات الصناعية'}
            </h2>
            <p className="text-[#DCE5F2]/70 mt-2">Smart manufacturing begins with reliable industrial data.</p>
          </div>
          <div className="text-[#38C8FF] font-mono bg-[#168BFF]/10 px-3 py-1 rounded border border-[#168BFF]/30">5:00 MIN</div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl text-[#38C8FF] mb-4">Industrial Data Pipeline</h3>
            <div className="bg-[#08275A]/40 border border-[#168BFF]/20 rounded-xl p-6 relative">
              {/* Pipeline Visual */}
              <div className="flex justify-between items-center relative mb-12">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-[#168BFF]/20 -translate-y-1/2 z-0"></div>
                {stages.map((stage, idx) => (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(idx)}
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                      activeStage === idx 
                        ? 'bg-[#168BFF] border-white shadow-[0_0_15px_#38C8FF] scale-110' 
                        : 'bg-[#061A3D] border-[#168BFF] text-[#168BFF] hover:bg-[#168BFF]/20'
                    }`}
                  >
                    <stage.icon size={20} className={activeStage === idx ? 'text-white' : ''} />
                    {activeStage === idx && (
                       <div className="absolute -top-8 whitespace-nowrap text-xs font-bold text-[#38C8FF] bg-[#061A3D] px-2 py-1 rounded border border-[#168BFF]/50 animate-pulse">
                         Active Stage
                       </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Stage Details */}
              <div className="bg-[#061A3D] p-6 rounded-lg border border-[#168BFF]/30 min-h-[160px]">
                <h4 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {React.createElement(stages[activeStage].icon, { className: "text-[#38C8FF]" })}
                  {stages[activeStage].name}
                </h4>
                <p className="text-[#DCE5F2] mb-4">{stages[activeStage].desc}</p>
                <div className="bg-[#08275A] inline-block px-4 py-2 rounded text-sm text-[#38C8FF] font-mono border border-[#168BFF]/20">
                  <span className="text-white/50 mr-2">Tech/Example:</span> {stages[activeStage].ex}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-[#38C8FF] mb-4">Data Quality Dimensions</h3>
            <div className="grid gap-3">
              {['Accuracy', 'Completeness', 'Consistency', 'Timeliness', 'Validity', 'Traceability'].map((dim, i) => (
                <div key={dim} className="bg-[#08275A]/40 border-l-4 border-[#168BFF] p-3 rounded-r flex items-center justify-between group hover:bg-[#08275A] transition-colors cursor-default">
                  <span className="text-white font-medium">{dim}</span>
                  <Activity size={16} className="text-[#168BFF]/50 group-hover:text-[#38C8FF]" />
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
              <h4 className="text-yellow-500 font-semibold mb-2 flex items-center gap-2"><AlertTriangle size={16}/> Challenges</h4>
              <ul className="text-sm text-yellow-100/70 list-disc pl-4 space-y-1">
                <li>Heterogeneous protocols</li>
                <li>High-volume real-time streams</li>
                <li>Missing measurements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SectionCybersecurity = () => {
    const [activeThreat, setActiveThreat] = useState(0);
    const threats = [
      { name: 'Data Manipulation', icon: Activity, desc: 'Altering sensor readings in transit to mask physical anomalies or cause improper automated responses.', protect: 'End-to-End Encryption, Integrity Hashes' },
      { name: 'Sensor Spoofing', icon: Globe, desc: 'Injecting fake data that appears to come from legitimate industrial sensors.', protect: 'Device Authentication (Certificates)' },
      { name: 'Man-in-the-Middle', icon: Lock, desc: 'Intercepting communications between PLC and SCADA systems.', protect: 'Secure Protocols (TLS for OPC UA)' },
      { name: 'Ransomware', icon: Shield, desc: 'Encrypting HMI or historian databases, halting visibility and production.', protect: 'Network Segmentation, Air Gapping' }
    ];

    return (
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 w-full max-w-6xl mx-auto">
         <div className="flex justify-between items-end mb-8 border-b border-[#168BFF]/30 pb-4">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Shield className="text-[#38C8FF]" size={32} />
              {lang === 'en' ? 'Industrial Cybersecurity' : 'الأمن السيبراني الصناعي'}
            </h2>
            <p className="text-[#DCE5F2]/70 mt-2">Protecting data integrity and operational continuity.</p>
          </div>
          <div className="text-[#38C8FF] font-mono bg-[#168BFF]/10 px-3 py-1 rounded border border-[#168BFF]/30">5:00 MIN</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* IT vs OT Table */}
          <div>
             <h3 className="text-xl text-[#38C8FF] mb-4">Paradigm Shift: IT vs OT Security</h3>
             <div className="bg-[#08275A]/40 border border-[#168BFF]/20 rounded-xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#061A3D] text-[#38C8FF]">
                    <tr>
                      <th className="p-4 border-b border-[#168BFF]/30">Focus Area</th>
                      <th className="p-4 border-b border-[#168BFF]/30">IT Security</th>
                      <th className="p-4 border-b border-[#168BFF]/30">OT Security</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#DCE5F2]">
                    <tr className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-4 font-semibold text-white">Priority Triad</td>
                      <td className="p-4"><span className="text-[#38C8FF]">C</span>-I-A (Confidentiality)</td>
                      <td className="p-4"><span className="text-yellow-400">A</span>-I-C (Availability)</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-4 font-semibold text-white">Target Assets</td>
                      <td className="p-4">Servers, Enterprise Data</td>
                      <td className="p-4">PLCs, SCADA, Physical Safety</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="p-4 font-semibold text-white">Patching</td>
                      <td className="p-4">Regular, Automated</td>
                      <td className="p-4">Rare, Requires Downtime</td>
                    </tr>
                  </tbody>
                </table>
             </div>
             
             <div className="mt-6 flex gap-4">
                <div className="flex-1 bg-[#061A3D] border border-white/10 p-3 rounded text-center">
                  <div className="text-xs text-white/50 mb-1">Standard</div>
                  <div className="font-bold text-[#38C8FF]">IEC 62443</div>
                </div>
                <div className="flex-1 bg-[#061A3D] border border-white/10 p-3 rounded text-center">
                  <div className="text-xs text-white/50 mb-1">Framework</div>
                  <div className="font-bold text-[#38C8FF]">NIST SP 800-82</div>
                </div>
             </div>
          </div>

          {/* Interactive Threats */}
          <div>
            <h3 className="text-xl text-[#38C8FF] mb-4">Major Cyber Threats Visualization</h3>
            <div className="space-y-3">
              {threats.map((threat, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveThreat(idx)}
                  className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 flex items-start gap-4 ${
                    activeThreat === idx 
                      ? 'bg-[#168BFF]/20 border-[#38C8FF] shadow-[0_0_15px_rgba(56,200,255,0.2)]' 
                      : 'bg-[#08275A]/40 border-white/10 hover:border-[#168BFF]/50'
                  }`}
                >
                  <div className={`p-2 rounded-full ${activeThreat === idx ? 'bg-[#168BFF] text-white' : 'bg-[#061A3D] text-[#168BFF]'}`}>
                    <threat.icon size={20} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${activeThreat === idx ? 'text-[#38C8FF]' : 'text-white'}`}>{threat.name}</h4>
                    {activeThreat === idx && (
                      <div className="mt-2 text-sm text-[#DCE5F2] animate-in slide-in-from-top-2 duration-300">
                        <p className="mb-2">{threat.desc}</p>
                        <div className="bg-[#061A3D] p-2 rounded border border-[#52c41a]/30 text-[#52c41a] flex items-center gap-2">
                          <Shield size={14} /> Protection: {threat.protect}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SectionDigitalTwins = () => (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 w-full max-w-6xl mx-auto">
       <div className="flex justify-between items-end mb-8 border-b border-[#168BFF]/30 pb-4">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Cpu className="text-[#38C8FF]" size={32} />
              {lang === 'en' ? 'Digital Twins in Smart Manufacturing' : 'التوائم الرقمية في التصنيع الذكي'}
            </h2>
            <p className="text-[#DCE5F2]/70 mt-2">Connecting physical industrial assets with digital intelligence.</p>
          </div>
          <div className="text-[#38C8FF] font-mono bg-[#168BFF]/10 px-3 py-1 rounded border border-[#168BFF]/30">2:30 MIN</div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center bg-[#08275A]/30 p-8 rounded-2xl border border-[#168BFF]/20">
          
          {/* Physical Asset */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-700 to-[#061A3D] border-4 border-slate-500 flex items-center justify-center shadow-lg relative z-10">
               <Factory size={48} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-white mt-4">Physical Asset</h3>
            <p className="text-sm text-[#DCE5F2]/60 mt-1">Industrial Motor / 3D Printer</p>
            <div className="mt-4 flex gap-2 text-xs">
              <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded border border-red-500/30">Temp</span>
              <span className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded border border-orange-500/30">Vib</span>
            </div>
          </div>

          {/* Bidirectional Flow */}
          <div className="flex flex-col items-center justify-center relative h-full min-h-[200px]">
             {/* Arrows wrapper */}
             <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-0">
               {/* Data Flow (Right) */}
               <div className="flex items-center w-full justify-center opacity-80">
                  <div className="text-[#38C8FF] text-xs font-mono absolute -top-4 tracking-widest uppercase">Telemetry Data</div>
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#168BFF] to-[#38C8FF] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-white blur-[2px] animate-[slide-right_2s_infinite]"></div>
                  </div>
                  <ChevronRight className="text-[#38C8FF] -ml-2" />
               </div>
               
               {/* Control Flow (Left) */}
               <div className="flex items-center w-full justify-center opacity-80 flex-row-reverse">
                  <div className="text-purple-400 text-xs font-mono absolute -bottom-4 tracking-widest uppercase">Control Insights</div>
                  <div className="h-[2px] w-full bg-gradient-to-l from-transparent via-purple-500 to-purple-400 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-white blur-[2px] animate-[slide-left_2s_infinite]"></div>
                  </div>
                  <ChevronLeft className="text-purple-400 -mr-2" />
               </div>
             </div>
             <div className="bg-[#061A3D] p-3 rounded-full border border-white/10 relative z-10">
               <Activity size={24} className="text-[#168BFF] animate-pulse" />
             </div>
          </div>

          {/* Digital Twin */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#168BFF]/20 to-[#38C8FF]/20 border-4 border-[#38C8FF] flex items-center justify-center shadow-[0_0_30px_rgba(56,200,255,0.3)] relative z-10 backdrop-blur-sm">
               <Globe size={48} className="text-[#38C8FF]" />
            </div>
            <h3 className="text-xl font-bold text-white mt-4">Digital Twin</h3>
            <p className="text-sm text-[#DCE5F2]/60 mt-1">Virtual Representation</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
              <span className="bg-[#168BFF]/20 text-[#38C8FF] px-2 py-1 rounded border border-[#168BFF]/30">Simulation</span>
              <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded border border-purple-500/30">Prediction</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-lg font-medium text-[#DCE5F2]">
          "A digital twin transforms industrial data into <span className="text-[#38C8FF] font-bold">operational intelligence</span>."
        </div>
    </div>
  );

  const SectionSmartFactory = () => {
    const [activeLayer, setActiveLayer] = useState(null);
    
    const layers = [
      { id: 5, name: 'Decision Support', color: 'border-purple-500', bg: 'bg-purple-500/10', text: 'text-purple-400', items: ['Operational Insights', 'Engineering Alerts'] },
      { id: 4, name: 'Digital Twin', color: 'border-[#38C8FF]', bg: 'bg-[#38C8FF]/10', text: 'text-[#38C8FF]', items: ['Simulation', 'Predictive Maintenance'] },
      { id: 3, name: 'Cybersecurity (Cross-Layer)', color: 'border-green-500', bg: 'bg-green-500/10', text: 'text-green-400', items: ['Identity', 'Encryption', 'Zero Trust'] },
      { id: 2, name: 'Data Engineering', color: 'border-[#168BFF]', bg: 'bg-[#168BFF]/10', text: 'text-[#168BFF]', items: ['Acquisition', 'Validation', 'Storage'] },
      { id: 1, name: 'Physical Industrial Layer', color: 'border-slate-500', bg: 'bg-slate-500/10', text: 'text-slate-300', items: ['Sensors', 'PLC', 'Machines'] },
    ];

    return (
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-[#168BFF]/30 pb-4">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Settings className="text-[#38C8FF]" size={32} />
              {lang === 'en' ? 'Building Integrated Smart Factory Systems' : 'بناء أنظمة المصانع الذكية المتكاملة'}
            </h2>
            <p className="text-[#DCE5F2]/70 mt-2">The synergy of Data, Security, and Digital Twins.</p>
          </div>
          <div className="text-[#38C8FF] font-mono bg-[#168BFF]/10 px-3 py-1 rounded border border-[#168BFF]/30">2:30 MIN</div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
           {/* Layer Stack */}
           <div className="w-full md:w-1/2 flex flex-col gap-3 relative">
             {/* Security Vertical Bar */}
             <div className="absolute left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-green-500/50 via-green-400/50 to-green-500/50 rounded-full z-0 flex flex-col items-center pt-2">
                <Shield size={12} className="text-green-300" />
             </div>

             {layers.map((layer) => (
                <div 
                  key={layer.id}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`relative z-10 ml-8 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 transform ${
                    activeLayer === layer.id ? `scale-105 ${layer.bg} shadow-lg shadow-${layer.color.split('-')[1]}/20` : 'bg-[#061A3D] hover:bg-[#08275A]'
                  } ${layer.color} `}
                >
                  <div className="flex justify-between items-center">
                     <span className={`font-bold text-lg ${activeLayer === layer.id ? 'text-white' : layer.text}`}>{layer.name}</span>
                     <span className="text-xs text-white/30 font-mono">Layer 0{layer.id}</span>
                  </div>
                  <div className={`mt-2 flex gap-2 overflow-hidden transition-all duration-300 ${activeLayer === layer.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {layer.items.map((item, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded bg-[#061A3D] border ${layer.color.replace('border-', 'border-').replace('500', '500/30')} text-white/80`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
             ))}
           </div>

           {/* Explanation Panel */}
           <div className="w-full md:w-1/3 bg-[#08275A]/50 border border-[#168BFF]/30 rounded-xl p-6 min-h-[300px] flex flex-col justify-center">
             {activeLayer ? (
               <div className="animate-in fade-in duration-300">
                 <h3 className={`text-2xl font-bold mb-4 ${layers.find(l => l.id === activeLayer).text}`}>
                   {layers.find(l => l.id === activeLayer).name}
                 </h3>
                 <p className="text-[#DCE5F2] leading-relaxed">
                   {activeLayer === 1 && "The physical foundation. Generates raw data through operational technology."}
                   {activeLayer === 2 && "The data pipeline. Acquires, cleans, and structures raw data for higher-level systems."}
                   {activeLayer === 3 && "Cross-cutting concern. Secures data in transit and at rest, authenticates devices, and ensures system integrity."}
                   {activeLayer === 4 && "The analytical brain. Uses processed data to simulate physical behavior and predict outcomes."}
                   {activeLayer === 5 && "The human interface. Translates complex analytics into actionable engineering insights and alerts."}
                 </p>
               </div>
             ) : (
               <div className="text-center text-white/40 flex flex-col items-center gap-4">
                 <Activity size={48} className="opacity-50"/>
                 <p>Hover over a layer in the architecture diagram to view its role in the integrated smart factory ecosystem.</p>
               </div>
             )}
           </div>
        </div>
      </div>
    );
  };

  const SectionCaseStudy = () => {
    const [scenario, setScenario] = useState('normal'); // 'normal', 'vibration', 'temp', 'suspicious'

    // Generate static historical-looking data based on scenario
    const generateData = () => {
      const data = [];
      let baseTemp = 45;
      let baseVib = 2.0;
      let baseSpeed = 1500;
      
      for(let i=0; i<30; i++) {
        let t = baseTemp + Math.random() * 2;
        let v = baseVib + Math.random() * 0.5;
        
        if (scenario === 'vibration' && i > 15) v = baseVib + (i-15)*0.8 + Math.random();
        if (scenario === 'temp' && i > 10) t = baseTemp + (i-10)*1.5 + Math.random()*2;
        if (scenario === 'suspicious' && i > 20) {
           t = (i % 2 === 0) ? baseTemp : 200; // Erratic data
        }

        data.push({ time: `T-${30-i}`, temp: t, vibration: v, speed: baseSpeed + (Math.random()*10 - 5) });
      }
      return data;
    };

    const chartData = generateData();

    const scenarios = [
      { id: 'normal', label: 'Normal Operation', color: 'bg-green-500', desc: 'System operating within optimal parameters.' },
      { id: 'vibration', label: 'Bearing Wear (Vibration)', color: 'bg-orange-500', desc: 'Digital twin predicts mechanical degradation.' },
      { id: 'temp', label: 'Overheating', color: 'bg-red-500', desc: 'Cooling failure detected by data pipeline validation.' },
      { id: 'suspicious', label: 'Cyber Anomaly', color: 'bg-purple-500', desc: 'Sensor spoofing detected by integrity checks.' }
    ];

    const currentDesc = scenarios.find(s => s.id === scenario).desc;

    return (
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 w-full max-w-6xl mx-auto h-full flex flex-col">
         <div className="flex justify-between items-end mb-6 border-b border-[#168BFF]/30 pb-2">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Activity className="text-[#38C8FF]" size={32} />
              {lang === 'en' ? 'Industrial Case Study: Motor Monitoring' : 'دراسة حالة: مراقبة محرك صناعي'}
            </h2>
          </div>
          <div className="text-red-400 font-mono bg-red-900/20 px-3 py-1 rounded border border-red-500/30 text-xs animate-pulse">
            ILLUSTRATIVE SIMULATION DATA
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-6">
          {scenarios.map(s => (
            <button
              key={s.id}
              onClick={() => setScenario(s.id)}
              className={`px-4 py-2 rounded font-semibold transition-all flex items-center gap-2 border ${
                scenario === s.id 
                  ? `${s.color} text-white border-transparent shadow-[0_0_15px_rgba(255,255,255,0.2)]` 
                  : 'bg-[#061A3D] text-[#DCE5F2] border-white/20 hover:border-white/50'
              }`}
            >
              <div className={`w-3 h-3 rounded-full ${scenario === s.id ? 'bg-white' : s.color}`}></div>
              {s.label}
            </button>
          ))}
        </div>

        {/* Status Bar */}
        <div className="bg-[#08275A]/60 border border-[#168BFF]/30 rounded-lg p-4 mb-6 flex justify-between items-center backdrop-blur-sm">
          <div>
             <div className="text-xs text-white/50 uppercase tracking-wider font-mono mb-1">System Status Interpretation</div>
             <div className="text-lg font-bold text-white">{currentDesc}</div>
          </div>
          <div className="text-right">
             <div className="text-xs text-white/50 uppercase tracking-wider font-mono mb-1">Asset ID</div>
             <div className="font-mono text-[#38C8FF]">MTR-3D-P88</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 flex-1 min-h-[350px]">
           {/* Chart 1: Temperature */}
           <div className="bg-[#061A3D] p-4 rounded-xl border border-white/10 flex flex-col relative">
             <div className="absolute top-4 right-4 text-xs font-mono text-white/30">Live updating...</div>
             <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div> Temperature (°C)
             </h3>
             <div className="flex-1 w-full h-full min-h-[250px]">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={chartData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                   <defs>
                      <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                   <CartesianGrid strokeDasharray="3 3" stroke="#168BFF" opacity={0.1} vertical={false} />
                   <XAxis dataKey="time" stroke="#DCE5F2" opacity={0.5} fontSize={10} tick={{fill: '#DCE5F2'}} tickLine={false} axisLine={false} />
                   <YAxis stroke="#DCE5F2" opacity={0.5} fontSize={10} domain={[20, 220]} tickLine={false} axisLine={false} />
                   <Tooltip 
                     contentStyle={{ backgroundColor: '#08275A', borderColor: '#168BFF', color: '#fff', fontSize: '12px' }} 
                     itemStyle={{ color: '#ef4444' }}
                   />
                   <Area type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorTemp)" isAnimationActive={false} />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
           </div>

           {/* Chart 2: Vibration */}
           <div className="bg-[#061A3D] p-4 rounded-xl border border-white/10 flex flex-col relative">
             <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div> Vibration (mm/s)
             </h3>
             <div className="flex-1 w-full h-full min-h-[250px]">
               <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={chartData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                   <CartesianGrid strokeDasharray="3 3" stroke="#168BFF" opacity={0.1} vertical={false} />
                   <XAxis dataKey="time" stroke="#DCE5F2" opacity={0.5} fontSize={10} tickLine={false} axisLine={false} />
                   <YAxis stroke="#DCE5F2" opacity={0.5} fontSize={10} domain={[0, 15]} tickLine={false} axisLine={false}/>
                   <Tooltip 
                     contentStyle={{ backgroundColor: '#08275A', borderColor: '#168BFF', color: '#fff', fontSize: '12px' }}
                     itemStyle={{ color: '#f97316' }}
                   />
                   <Line type="monotone" dataKey="vibration" stroke="#f97316" strokeWidth={2} dot={false} isAnimationActive={false} />
                 </LineChart>
               </ResponsiveContainer>
             </div>
           </div>
        </div>
      </div>
    );
  };

  const SectionTakeaways = () => (
    <div className="animate-in fade-in zoom-in-95 duration-700 w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h2 className="text-4xl font-bold text-white mb-12">
        {lang === 'en' ? 'Key Takeaways' : 'النقاط الرئيسية'}
      </h2>
      
      <div className="grid gap-6 w-full text-left">
        {[
          { icon: Database, color: 'text-[#168BFF]', text: 'Reliable industrial data is the foundation of smart manufacturing.' },
          { icon: Shield, color: 'text-green-400', text: 'Cybersecurity protects data integrity and operational continuity.' },
          { icon: Globe, color: 'text-[#38C8FF]', text: 'Digital twins connect physical assets with digital intelligence.' },
          { icon: Settings, color: 'text-purple-400', text: 'Integration creates reliable, secure, and scalable industrial ecosystems.' }
        ].map((item, i) => (
          <div key={i} className="bg-[#08275A]/40 border border-white/10 p-6 rounded-xl flex items-center gap-6 hover:bg-[#08275A]/80 transition-colors">
            <div className={`p-4 bg-[#061A3D] rounded-full border border-white/5 ${item.color}`}>
              <item.icon size={32} />
            </div>
            <p className="text-xl text-white font-medium">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[#168BFF]/20 text-center w-full">
         <p className="text-2xl font-bold text-[#38C8FF] italic mb-8">
           "The future of smart manufacturing is not just about connecting machines. It is about building intelligent, secure, and reliable industrial ecosystems."
         </p>
         <div className="text-sm text-[#DCE5F2]/60 uppercase tracking-widest">
            Dr. Anwr Altahir | Qatar Society of Engineers | 2026
         </div>
      </div>
    </div>
  );


  // --- LAYOUT RENDER ---
  return (
    <div className={`min-h-screen bg-[#061A3D] text-[#DCE5F2] font-sans selection:bg-[#168BFF] selection:text-white flex overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#168BFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#061A3D] via-[#061A3D] to-[#08275A] opacity-90"></div>

      {/* Sidebar Navigation */}
      {!isPresentationMode && (
        <aside className={`fixed lg:relative z-40 w-72 h-screen bg-[#08275A]/80 backdrop-blur-xl border-r border-[#168BFF]/20 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="p-6 border-b border-[#168BFF]/20 flex justify-between items-center">
            <h1 className="font-bold text-white leading-tight">3D Printing &<br/>Smart Mfg 2026</h1>
            <button className="lg:hidden text-white/50 hover:text-white" onClick={() => setSidebarOpen(false)}><X size={20}/></button>
          </div>
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {SECTIONS.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => navigateTo(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm font-medium flex items-center justify-between ${
                  activeSection === section.id 
                    ? 'bg-[#168BFF]/20 text-[#38C8FF] border border-[#168BFF]/50 shadow-[inset_4px_0_0_#168BFF]' 
                    : 'text-[#DCE5F2]/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{section.title[lang]}</span>
                {section.duration > 0 && (
                  <span className="text-xs opacity-50 font-mono">{section.duration}m</span>
                )}
              </button>
            ))}
          </nav>
          <div className="p-4 border-t border-[#168BFF]/20 text-xs text-center text-white/30 font-mono">
             Doha, Qatar | Nov 8, 2026
          </div>
        </aside>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen relative z-10 w-full">
        
        {/* Top Control Bar */}
        <header className="h-16 border-b border-[#168BFF]/20 bg-[#061A3D]/80 backdrop-blur flex items-center justify-between px-4 lg:px-8">
          
          <div className="flex items-center gap-4">
            {!isPresentationMode && (
              <button className="lg:hidden text-white/70" onClick={() => setSidebarOpen(true)}>
                <Menu size={24} />
              </button>
            )}
            
            {/* Timer Controls */}
            <div className="flex items-center gap-3 bg-[#08275A] border border-[#168BFF]/30 rounded-full px-4 py-1">
               <Clock size={16} className={timeRemaining < 120 ? 'text-red-400 animate-pulse' : 'text-[#38C8FF]'} />
               <span className={`font-mono font-bold text-lg ${timeRemaining < 120 ? 'text-red-400' : 'text-white'}`}>
                 {formatTime(timeRemaining)}
               </span>
               <div className="w-px h-4 bg-white/20 mx-1"></div>
               <button onClick={() => setIsTimerRunning(!isTimerRunning)} className="text-white/70 hover:text-white transition-colors">
                 {isTimerRunning ? <Pause size={16} /> : <Play size={16} />}
               </button>
               <button onClick={() => {setIsTimerRunning(false); setTimeRemaining(TOTAL_TIME);}} className="text-white/70 hover:text-white transition-colors">
                 <RotateCcw size={16} />
               </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded border border-[#168BFF]/30 text-xs font-bold text-[#38C8FF] hover:bg-[#168BFF]/10 transition-colors uppercase"
            >
              {lang === 'en' ? 'عربي' : 'English'}
            </button>
            
            <button 
              onClick={() => setIsPresentationMode(!isPresentationMode)}
              className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              title="Toggle Presentation Mode"
            >
              {isPresentationMode ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
          </div>
        </header>

        {/* Content Viewport */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 relative flex">
          {activeSection === 'overview' && <SectionOverview />}
          {activeSection === 'data' && <SectionDataEngineering />}
          {activeSection === 'cyber' && <SectionCybersecurity />}
          {activeSection === 'twins' && <SectionDigitalTwins />}
          {activeSection === 'factory' && <SectionSmartFactory />}
          {activeSection === 'case' && <SectionCaseStudy />}
          {activeSection === 'takeaways' && <SectionTakeaways />}
        </div>

        {/* Floating Controls in Presentation Mode */}
        {isPresentationMode && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#08275A]/90 backdrop-blur-md border border-[#168BFF]/50 rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl z-50">
            <button onClick={prevSection} disabled={currentIndex === 0} className="text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed">
              <ChevronLeft size={24} />
            </button>
            <div className="text-sm font-semibold text-[#38C8FF]">
              {currentIndex + 1} / {SECTIONS.length}
            </div>
            <button onClick={nextSection} disabled={currentIndex === SECTIONS.length - 1} className="text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed">
              <ChevronRight size={24} />
            </button>
          </div>
        )}

      </main>

      {/* Global Styles for Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide-right {
          0% { left: -33%; }
          100% { left: 100%; }
        }
        @keyframes slide-left {
          0% { right: -33%; }
          100% { right: 100%; }
        }
      `}} />
    </div>
  );
}