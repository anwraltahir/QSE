import { SectionMeta, PipelineStage, CyberThreat, ArchitectureLayer, CaseStudyScenario, PresenterNote, SectionId } from '../types/presentation';

export const PRESENTATION_INFO = {
  conference: {
    en: '3D Printing & Smart Manufacturing Conference 2026',
    ar: 'مؤتمر الطباعة ثلاثية الأبعاد والتصنيع الذكي 2026'
  },
  location: {
    en: 'Hilton Doha, Qatar',
    ar: 'فندق هيلتون الدوحة، قطر'
  },
  date: {
    en: '08 November 2026',
    ar: '08 نوفمبر 2026'
  },
  time: {
    en: '04:25 PM – 04:40 PM',
    ar: '04:25 مساءً – 04:40 مساءً'
  },
  totalTimeMinutes: 15,
  presenter: {
    name: {
      en: 'Dr. Anwr Altahir',
      ar: 'د. أنور الطاهر'
    },
    title: {
      en: 'Systems Engineer, AI & Cybersecurity Researcher',
      ar: 'مهندس نظم، باحث في الذكاء الاصطناعي والأمن السيبراني'
    },
    bio: {
      en: 'Specializing in industrial IoT data infrastructure, cyber-physical defense architectures, and real-time digital twins for smart manufacturing.',
      ar: 'متخصص في البنية التحتية لبيانات إنترنت الأشياء الصناعية، وهندسة الدفاع عن الأنظمة السيبرانية والفيزيائية، والتوائم الرقمية الفورية للمصانع الذكية.'
    }
  },
  patronage: {
    en: 'Under the Patronage of Ministry of Commerce and Industry - State of Qatar',
    ar: 'تحت رعاية وزارة التجارة والصناعة - دولة قطر'
  },
  organizer: {
    en: 'Qatar Society of Engineers',
    ar: 'جمعية المهندسين القطرية'
  },
  strategicPartner: {
    en: 'UCC Holding',
    ar: 'يو سي سي القابضة'
  }
};

export const SECTIONS: SectionMeta[] = [
  {
    id: 'overview',
    title: { en: 'Overview', ar: 'نظرة عامة' },
    subtitle: { en: 'Conference Introduction & Agenda', ar: 'مقدمة المؤتمر وجدول الأعمال' },
    durationMinutes: 0
  },
  {
    id: 'data',
    title: { en: 'Industrial Data Engineering', ar: 'هندسة البيانات الصناعية' },
    subtitle: { en: 'Acquisition, Ingestion & Quality Dimensions', ar: 'الاستحواذ، التدفق ومعايير الجودة' },
    durationMinutes: 5.0
  },
  {
    id: 'cyber',
    title: { en: 'Industrial Cybersecurity', ar: 'الأمن السيبراني الصناعي' },
    subtitle: { en: 'IT vs OT Paradigms & Threat Defense', ar: 'مقارنة IT مقابل OT والدفاع ضد التهديدات' },
    durationMinutes: 5.0
  },
  {
    id: 'twins',
    title: { en: 'Digital Twins', ar: 'التوائم الرقمية' },
    subtitle: { en: 'Cyber-Physical Bridge & Telemetry Feedback', ar: 'جسر السيبرانية الفيزيائية والتغذية الراجعة' },
    durationMinutes: 2.5
  },
  {
    id: 'factory',
    title: { en: 'Smart Factory Systems', ar: 'أنظمة المصانع الذكية' },
    subtitle: { en: 'Integrated 5-Layer Ecosystem Architecture', ar: 'معمارية المنظومة المتكاملة ذات الـ 5 طبقات' },
    durationMinutes: 2.5
  },
  {
    id: 'case',
    title: { en: 'Industrial Case Study', ar: 'دراسة حالة صناعية' },
    subtitle: { en: 'Interactive Motor Diagnostics & Telemetry', ar: 'تشخيص محرك صناعي تفاعلي مع القياس عن بُعد' },
    durationMinutes: 0
  },
  {
    id: 'takeaways',
    title: { en: 'Key Takeaways', ar: 'النقاط الرئيسية' },
    subtitle: { en: 'Summary, Engineering Principles & Closing', ar: 'الخلاصة والمبادئ الهندسية والختام' },
    durationMinutes: 0
  }
];

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 'acq',
    name: { en: 'Data Acquisition', ar: 'الاستحواذ على البيانات' },
    desc: {
      en: 'Collecting high-frequency analog and digital raw signals from physical sensors (Temperature, Vibration, Current) via PLC & RTUs.',
      ar: 'جمع الإشارات التناظرية والرقمية الخام عالية التردد من الحساسات الفيزيائية (درجة الحرارة، الاهتزاز، التيار) عبر أجهزة PLC و RTU.'
    },
    example: {
      en: 'Piezoelectric Accelerometer & PT100 RTD -> 4-20mA Loop -> Industrial PLC (1 kHz)',
      ar: 'مقياس تسارع كهرضغطي ومسبار حراري PT100 -> حلقة 4-20 مللي أمبير -> PLC صناعي (1 كيلوهرتز)'
    },
    icon: 'Activity'
  },
  {
    id: 'ing',
    name: { en: 'Data Ingestion', ar: 'تدفق واستيعاب البيانات' },
    desc: {
      en: 'Standardizing and transmitting telemetry data securely across industrial firewalls to edge brokers or cloud repositories.',
      ar: 'توحيد مقاييس ونقل بيانات القياس بأمان عبر جدران الحماية الصناعية إلى وسائط الحافة أو السحابة.'
    },
    example: {
      en: 'OPC UA (IEC 62541) with TLS 1.3, MQTT Sparkplug B over TLS/mTLS',
      ar: 'بروتوكول OPC UA (IEC 62541) مع تشفير TLS 1.3، وبروتوكول MQTT Sparkplug B عبر mTLS'
    },
    icon: 'Database'
  },
  {
    id: 'pro',
    name: { en: 'Data Processing', ar: 'معالجة البيانات والتصفية' },
    desc: {
      en: 'Edge computing pipeline for signal filtering, noise elimination, outlier isolation, and time-series resampling.',
      ar: 'معالجة حافة لتصفية الإشارات، إزالة الضوضاء، عزل القراءات الشاذة، وإعادة أخذ العينات السلاسل الزمنية.'
    },
    example: {
      en: 'Kalman filtering, FFT frequency spectral analysis, rolling window normalization',
      ar: 'مرشح كالمان، تحليل فورييه السريع للأطياف الترددية، وتسوية النوافذ الزمنية المتدحرجة'
    },
    icon: 'Cpu'
  },
  {
    id: 'val',
    name: { en: 'Data Validation', ar: 'التحقق من صحة البيانات' },
    desc: {
      en: 'Structural schema checks and physics-based rule validation ensuring telemetry conforms to physical machine boundaries.',
      ar: 'فحص البنية وقواعد الفيزياء للتأكد من أن القياسات تطابق الحدود الفيزيائية الطبيعية للمعدات.'
    },
    example: {
      en: 'Boundary verification (0°C <= Temp <= 120°C, Delta-T <= 5°C/s), anti-tamper schema validation',
      ar: 'التحقق من الحدود (0°س <= الحرارة <= 120°س، تسارع الحرارة <= 5°س/ث)، ومنع التلاعب بالبيانات'
    },
    icon: 'CheckCircle'
  },
  {
    id: 'sto',
    name: { en: 'Data Storage', ar: 'تخزين البيانات الصناعية' },
    desc: {
      en: 'High-throughput time-series databases optimized for millions of sensor writes per second with compression and data lifecycle policies.',
      ar: 'قواعد بيانات السلاسل الزمنية فائقة السرعة لتحمل ملايين الكتابات في الثانية مع ضغط البيانات وسياسات الحفظ.'
    },
    example: {
      en: 'TimescaleDB / InfluxDB partitioned by asset ID with cold storage S3 archiving',
      ar: 'قواعد بيانات TimescaleDB / InfluxDB مقسمة برقم الأصل مع أرشفة تخزين بارد'
    },
    icon: 'HardDrive'
  },
  {
    id: 'ana',
    name: { en: 'Data Analytics & ML', ar: 'التحليلات وتعلم الآلة' },
    desc: {
      en: 'Transforming cleaned telemetry into Overall Equipment Effectiveness (OEE), RUL prediction, and autonomous optimization.',
      ar: 'تحويل البيانات المنقاة إلى مؤشرات الفعالية الشاملة للمعدات (OEE)، والتنبؤ بالعمر المتبقي، والتحكم الذاتي.'
    },
    example: {
      en: 'Remaining Useful Life (RUL) Weibull regression, predictive maintenance anomaly alerts',
      ar: 'تقدير العمر الإنتاجي المتبقي عبر انحدار ويبل، وتنبيهات الكشف المبكر عن الأعطال'
    },
    icon: 'TrendingUp'
  }
];

export const DATA_QUALITY_DIMENSIONS = [
  { name: { en: 'Accuracy', ar: 'الدقة' }, desc: { en: 'Sensor tolerance adherence and physical truth representation.', ar: 'مطابقة التفاوتات المسموحة للحساس وتمثيل الواقع الفيزيائي.' } },
  { name: { en: 'Completeness', ar: 'الاكتمال' }, desc: { en: 'Zero unexpected dropped packets or missing telemetry intervals.', ar: 'عدم وجود حزم مفقودة أو فجوات زمنية في القياسات.' } },
  { name: { en: 'Consistency', ar: 'الاتساق' }, desc: { en: 'Uniform units (SI) and synchronized clocks across all subsystems.', ar: 'توحيد وحدات القياس ومزامنة الساعات عبر جميع الأنظمة الفرعية.' } },
  { name: { en: 'Timeliness', ar: 'التوقيت الملائم' }, desc: { en: 'Deterministic millisecond latency from sensor to control loop.', ar: 'زمن استجابة حتمي بالمللي ثانية من الحساس لحلقة التحكم.' } },
  { name: { en: 'Validity', ar: 'الصلاحية والمطابقة' }, desc: { en: 'Conformance to industrial data schemas and physical limits.', ar: 'مطابقة البيانات للمخططات الصناعية والحدود الفيزيائية.' } },
  { name: { en: 'Traceability', ar: 'قابلية التتبع' }, desc: { en: 'Cryptographic provenance and tamper-evident audit trails.', ar: 'سلسلة تدقيق غير قابلة للتلاعب وتتبع مصدر البيانات مشفرًا.' } }
];

export const CYBER_THREATS: CyberThreat[] = [
  {
    id: 'manipulation',
    name: { en: 'Data Manipulation', ar: 'التلاعب بالبيانات' },
    desc: {
      en: 'Altering sensor readings in transit or in cache to mask physical anomalies, causing improper cooling or delayed emergency shut-offs.',
      ar: 'تعديل قراءات الحساسات أثناء انتقالها لإخفاء الأعطال الميكانيكية، مما يؤدي إلى فشل التبريد أو تأخر الإغلاق الاضطراري.'
    },
    impact: {
      en: 'Catastrophic equipment destruction, concealed overheating, false compliance reporting.',
      ar: 'تدمير ميكانيكي كارثي، ارتفاع حرارة غير مرئي، وتقارير امتثال وهمية.'
    },
    protection: {
      en: 'End-to-End Cryptographic Encryption (mTLS), HMAC-SHA256 integrity hashes on packets, IEC 62443 zone segmentation.',
      ar: 'تشفير شامل عبر mTLS، بصمات تحقق HMAC-SHA256 للحزم، وتقسيم الشبكات وفق معيار IEC 62443.'
    },
    icon: 'Activity'
  },
  {
    id: 'spoofing',
    name: { en: 'Sensor Spoofing', ar: 'تزييف هوية الحساسات' },
    desc: {
      en: 'Injecting rogue rogue signals from unverified devices that impersonate genuine industrial temperature or vibration transmitters.',
      ar: 'حقن إشارات خبيثة من أجهزة غير موثوقة تنتحل صفة حساسات حرارة أو اهتزاز حقيقية.'
    },
    impact: {
      en: 'Misleading digital twin state estimation, triggering unnecessary plant shutdowns or mask real failures.',
      ar: 'تضليل التوأم الرقمي، والتسبب بإيقاف تشغيل غير مبرر أو إخفاء حوادث حقيقية.'
    },
    protection: {
      en: 'Hardware Security Modules (HSM), TPM 2.0 device identity certificates, 802.1AR Secure Device Identity (DevID).',
      ar: 'وحدات أمان الأجهزة (HSM)، شهادات هوية الأجهزة TPM 2.0، وهوية الأجهزة الآمنة IEEE 802.1AR.'
    },
    icon: 'Globe'
  },
  {
    id: 'mitm',
    name: { en: 'Man-in-the-Middle (MitM)', ar: 'هجوم الوسيط (MitM)' },
    desc: {
      en: 'Eavesdropping and intercepting unencrypted industrial control communications between PLC, SCADA, and historian servers.',
      ar: 'التنصت واعتراض الاتصالات غير المشفرة بين أجهزة PLC ونظم التحكم SCADA وخوادم الأرشفة.'
    },
    impact: {
      en: 'Theft of proprietary 3D printing recipes, unauthorized command injection, parameter modification.',
      ar: 'سرقة وصفات التصنيع والطباعة ثلاثية الأبعاد الخاصة، وحقن أوامر تحكم غير مصرح بها.'
    },
    protection: {
      en: 'OPC UA Secure Channel with digital signatures, IPSec industrial tunnels, strict MAC address filtering on managed switches.',
      ar: 'قناة OPC UA الآمنة مع تواقيع رقمية، وأنفاق IPSec صناعية، وتصفية عناوين MAC في المحولات المدارة.'
    },
    icon: 'Lock'
  },
  {
    id: 'ransomware',
    name: { en: 'OT Ransomware', ar: 'برمجيات الفدية التشغيلية' },
    desc: {
      en: 'Targeted malware infiltrating engineering workstations and HMI interfaces, encrypting control configurations and holding manufacturing lines hostage.',
      ar: 'برمجيات خبيثة تستهدف محطات الهندسة وواجهات HMI لتشفير إعدادات التحكم وتعطيل خطوط الإنتاج كلياً.'
    },
    impact: {
      en: 'Complete halt of production lines, immense financial loss, potential safety hazards to factory personnel.',
      ar: 'توقف كامل لخطوط الإنتاج، خسائر مالية ضخمة، ومخاطر حقيقية على سلامة العاملين بالمصنع.'
    },
    protection: {
      en: 'Purdue Model air-gapping, microsegmentation, immutable write-once read-many (WORM) offline backups, application whitelisting.',
      ar: 'عزل فيزيائي وفق نموذج بيردو (Purdue)، تجزئة الشبكة، نسخ احتياطية غير قابلة للتعديل، والقوائم البيضاء للتطبيقات.'
    },
    icon: 'Shield'
  }
];

export const IT_OT_COMPARISON = [
  {
    focus: { en: 'Priority Triad', ar: 'ثالوث الأولويات' },
    it: { en: 'Confidentiality > Integrity > Availability (C-I-A)', ar: 'السرية > السلامة > التوافرية (C-I-A)' },
    ot: { en: 'Availability > Integrity > Confidentiality (A-I-C)', ar: 'التوافرية > السلامة > السرية (A-I-C)' },
    itNote: { en: 'Data privacy and intellectual property are paramount', ar: 'خصوصية البيانات والملكية الفكرية هي الأهم' },
    otNote: { en: 'Human safety and continuous 24/7 uptime cannot stop', ar: 'سلامة الأرواح والتشغيل المستمر 24/7 أولوية قصوى' }
  },
  {
    focus: { en: 'Target Assets', ar: 'الأصول المستهدفة' },
    it: { en: 'Enterprise databases, cloud servers, laptops, user credentials', ar: 'قواعد بيانات الشركات، السيرفرات، الحواسيب الشخصية' },
    ot: { en: 'PLCs, DCS, SCADA, RTUs, Actuators, Safety Instrumented Systems (SIS)', ar: 'أجهزة PLC، نُظم SCADA، المشغلات الميكانيكية، أنظمة السلامة' },
    itNote: { en: 'Virtual and digital storage', ar: 'تخزين رقمي وافتراضي' },
    otNote: { en: 'Direct physical interaction with machinery and pressure vessels', ar: 'تفاعل فيزيائي مباشر مع الآلات والضغط والحرارة' }
  },
  {
    focus: { en: 'Patching Lifecycle', ar: 'دورة التحديث والترقيع' },
    it: { en: 'Regular, automated weekly or monthly rollouts with reboots', ar: 'تحديثات دورية وتلقائية أسبوعياً أو شهرياً مع إعادة التشغيل' },
    ot: { en: 'Extremely rare, multi-year cycles during planned maintenance turnarounds', ar: 'نادرة جداً، تتم كل سنوات أثناء الإغلاق المبرمج للصيانة' },
    itNote: { en: 'Tolerant of brief downtime', ar: 'يتحمل التوقف القصير للخدمة' },
    otNote: { en: 'An unscheduled reboot can cause multimillion-dollar scrap or danger', ar: 'إعادة التشغيل المفاجئة تسبب تلف مواد بملايين أو حوادث' }
  },
  {
    focus: { en: 'Latency Tolerances', ar: 'تحمل التأخير الزمني' },
    it: { en: 'Seconds to minutes (best-effort IP networks)', ar: 'ثوانٍ إلى دقائق (شبكات التوصيل المتاح)' },
    ot: { en: 'Deterministic milliseconds (< 1ms to 10ms hard real-time)', ar: 'حتمي بالمللي ثانية (< 1ms إلى 10ms تحكم لحظي صارم)' },
    itNote: { en: 'Buffering acceptable', ar: 'التخزين المؤقت مقبول' },
    otNote: { en: 'Jitter causes mechanical oscillations and machine trips', ar: 'أي تذبذب زمني يسبب عدم استقرار ميكانيكي وتوقف الآلة' }
  }
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 5,
    level: 'Layer 05',
    name: { en: 'Decision Support & Autonomous Action', ar: 'دعم القرار والتحكم الذاتي' },
    role: {
      en: 'Translates analytical intelligence into executive dashboards, OEE metrics, maintenance schedules, and closed-loop optimization signals.',
      ar: 'تحويل الذكاء التحليلي إلى لوحات مؤشرات تنفيذية، وجداول صيانة وقائية، وإشارات تحكم ذاتية لتحسين الأداء.'
    },
    accentColor: '#c084fc',
    badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    borderColor: 'border-purple-500',
    components: [
      { en: 'Predictive Maintenance Work Orders', ar: 'أوامر عمل الصيانة التنبؤية' },
      { en: 'Executive OEE KPIs & Energy Optimization', ar: 'مؤشرات كفاءة المعدات وترشيد الطاقة' },
      { en: 'Closed-Loop Feed Rate Control', ar: 'التحكم المغلق بمعدل التغذية' }
    ]
  },
  {
    id: 4,
    level: 'Layer 04',
    name: { en: 'Digital Twin Engine', ar: 'محرك التوأم الرقمي' },
    role: {
      en: 'High-fidelity physics-informed mathematical replica of the factory floor, simulating thermal stresses, vibration modes, and machine degradation in real time.',
      ar: 'نسخة رياضية عالية الدقة قائمة على قوانين الفيزياء لأرض المصنع، تحاكي الإجهادات الحرارية والاهتزازية وتدهور المعدات لحظياً.'
    },
    accentColor: '#38C8FF',
    badgeBg: 'bg-[#38C8FF]/20 text-[#38C8FF] border-[#38C8FF]/40',
    borderColor: 'border-[#38C8FF]',
    components: [
      { en: 'Finite Element Analysis (FEA) Thermal Simulation', ar: 'المحاكاة الحرارية بطريقة العناصر المحدودة' },
      { en: 'Multiphysics Kinematic Emulation', ar: 'محاكاة حركية وفيزيائية متعددة' },
      { en: 'Remaining Useful Life (RUL) Models', ar: 'نماذج التنبؤ بالعمر التشغيلي المتبقي' }
    ]
  },
  {
    id: 3,
    level: 'Layer 03',
    name: { en: 'Cross-Layer Cybersecurity Shield', ar: 'درع الأمن السيبراني متعدد الطبقات' },
    role: {
      en: 'Ubiquitous zero-trust defense framework providing continuous device authentication, network microsegmentation, and anomaly detection across all tiers.',
      ar: 'إطار دفاعي شامل بنموذج انعدام الثقة (Zero Trust) يضمن التحقق الدائم من هوية الأجهزة، والتجزئة الدقيقة للشبكات، وكشف الأنشطة المشبوهة.'
    },
    accentColor: '#4ade80',
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    borderColor: 'border-emerald-500',
    components: [
      { en: 'IEC 62443 Security Zones & Conduits', ar: 'مناطق وقنوات الأمان وفق معيار IEC 62443' },
      { en: 'Hardware Root of Trust (TPM 2.0)', ar: 'جذر الثقة بالعتاد (TPM 2.0)' },
      { en: 'Behavioral Anomaly & Sensor Spoof Detection', ar: 'كشف السلوك الشاذ وتزييف الحساسات' }
    ]
  },
  {
    id: 2,
    level: 'Layer 02',
    name: { en: 'Industrial Data Engineering Pipeline', ar: 'هندسة البيانات الصناعية والتدفق' },
    role: {
      en: 'Acquires raw signals, standardizes heterogeneous industrial protocols, scrubs outliers, validates bounds, and streams clean time-series to storage.',
      ar: 'جمع الإشارات الخام، توحيد البروتوكولات الصناعية المتعددة، تنقية البيانات الشاذة، التحقق من الحدود، وضخ السلاسل الزمنية المنقاة.'
    },
    accentColor: '#168BFF',
    badgeBg: 'bg-[#168BFF]/20 text-[#38C8FF] border-[#168BFF]/40',
    borderColor: 'border-[#168BFF]',
    components: [
      { en: 'OPC UA & MQTT Sparkplug Edge Brokers', ar: 'وسائط الحافة لبروتوكولات OPC UA و MQTT' },
      { en: 'Kalman & Wavelet Signal Conditioning', ar: 'معالجة وتنقية الإشارات عبر كالمان والمويجات' },
      { en: 'High-Throughput Time-Series Database', ar: 'قواعد بيانات السلاسل الزمنية فائقة السرعة' }
    ]
  },
  {
    id: 1,
    level: 'Layer 01',
    name: { en: 'Physical Industrial Edge Layer', ar: 'طبقة الحافة الصناعية والفيزيائية' },
    role: {
      en: 'The heavy physical machinery, industrial 3D additive printers, CNC motors, actuators, safety interlocks, and low-level PLC controllers.',
      ar: 'المعدات الميكانيكية الثقيلة، طابعات التصنيع الإضافي ثلاثية الأبعاد، محركات CNC، المشغلات، وأجهزة التحكم المنطقي PLC.'
    },
    accentColor: '#94a3b8',
    badgeBg: 'bg-slate-500/20 text-slate-300 border-slate-500/40',
    borderColor: 'border-slate-500',
    components: [
      { en: '3D Laser Sintering & Extrusion Heads', ar: 'رؤوس التلبيد بالليزر والبثق ثلاثي الأبعاد' },
      { en: 'Variable Frequency Drives (VFD) & Stepper Motors', ar: 'محولات التردد ومحركات السيرفو الخطوية' },
      { en: 'Thermocouples, Accelerometers & Flowmeters', ar: 'المزدوجات الحرارية، مقاييس الاهتزاز والتدفق' }
    ]
  }
];

export const CASE_STUDY_SCENARIOS: CaseStudyScenario[] = [
  {
    id: 'normal',
    label: { en: 'Normal Operation', ar: 'التشغيل الطبيعي' },
    color: 'bg-emerald-500 hover:bg-emerald-600',
    tagColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
    badgeText: { en: 'Optimal Baseline', ar: 'الحالة المثالية' },
    description: {
      en: 'Motor running smoothly at nominal 1500 RPM. Temperature steady at 45.2°C, vibration within ISO 10816 Class I normal limits (< 2.5 mm/s).',
      ar: 'المحرك يعمل بسلاسة عند 1500 دورة/دقيقة. درجة الحرارة مستقرة عند 45.2°س، والاهتزاز ضمن حدود ISO 10816 الفئة الأولى (< 2.5 مم/ث).'
    },
    engineeringAction: {
      en: 'Status: Healthy. Continuous automated surveillance active. Next scheduled preventive inspection in 30 days.',
      ar: 'الحالة: سليم. المراقبة الآلية المستمرة مفعلة. الفحص الوقائي القادم بعد 30 يوماً.'
    },
    assetHealth: 98
  },
  {
    id: 'vibration',
    label: { en: 'Bearing Wear (Vibration)', ar: 'تآكل المحامل (اهتزاز)' },
    color: 'bg-amber-500 hover:bg-amber-600',
    tagColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
    badgeText: { en: 'Mechanical Degradation', ar: 'تدهور ميكانيكي' },
    description: {
      en: 'Digital twin identifies inner-race bearing degradation via spectral FFT vibration peak (reaching 9.4 mm/s). Temperature slightly elevated to 53°C.',
      ar: 'التوأم الرقمي يكشف تآكل المحمل الداخلي عبر ذروة الاهتزاز الطيفي FFT (تصل إلى 9.4 مم/ث). ارتفاع طفيف بالحرارة إلى 53°س.'
    },
    engineeringAction: {
      en: 'Digital Twin Action: Remaining Useful Life (RUL) calculated at 38 hours. Work order auto-dispatched to maintenance team for scheduled replacement before catastrophic breakdown.',
      ar: 'إجراء التوأم الرقمي: احتساب العمر المتبقي بـ 38 ساعة. تم إصدار أمر عمل تلقائي لفريق الصيانة للاستبدال قبل الفشل التام.'
    },
    assetHealth: 62
  },
  {
    id: 'temp',
    label: { en: 'Cooling Failure (Thermal)', ar: 'فشل التبريد (حراري)' },
    color: 'bg-rose-500 hover:bg-rose-600',
    tagColor: 'text-rose-400 border-rose-500/40 bg-rose-500/10',
    badgeText: { en: 'Thermal Criticality', ar: 'حالة حرارية حرجة' },
    description: {
      en: 'Data pipeline validation catches anomalous thermal rise (+3.2°C/min) climbing past 85°C. Cooling fan circuit failure confirmed.',
      ar: 'منظومة تدفق البيانات تكشف ارتفاعاً شاذّاً في معدل زيادة الحرارة (+3.2°س/دقيقة) متجاوزة 85°س. تأكد تعطل مروحة التبريد.'
    },
    engineeringAction: {
      en: 'Data Pipeline Action: Threshold trigger initiated automatic motor load derating by 40% and alerted floor engineers to prevent stator winding burnout.',
      ar: 'إجراء خط البيانات: تفعيل خفض تلقائي للحمل الميكانيكي بنسبة 40% لتجنب احتراق ملفات المحرك، مع تنبيه الفنيين فوراً.'
    },
    assetHealth: 41
  },
  {
    id: 'suspicious',
    label: { en: 'Cyber Anomaly (Spoofing)', ar: 'شذوذ سيبراني (تزييف)' },
    color: 'bg-purple-500 hover:bg-purple-600',
    tagColor: 'text-purple-400 border-purple-500/40 bg-purple-500/10',
    badgeText: { en: 'Integrity Violation', ar: 'خرق لسلامة البيانات' },
    description: {
      en: 'Erratic unphysical temperature telemetry jumps (alternating rapidly between 45°C and 200°C) with missing HMAC signature tokens. Sensor spoofing attack in progress.',
      ar: 'قفزات حرارية غير فيزيائية مستحيلة (تتأرجح بين 45°س و 200°س) مع غياب توقيع HMAC المعتمد. محاولة تزييف بيانات الحساس.'
    },
    engineeringAction: {
      en: 'Cyber Defense Action: Cryptographic integrity check failed. Malicious telemetry quarantined from the Digital Twin model, preserving virtual state integrity and isolating rogue IP conduit.',
      ar: 'إجراء الدفاع السيبراني: فشل التحقق الرقمي. عزل القراءات المشبوهة فوراً عن نموذج التوأم الرقمي، وحجب عنوان الشبكة المهاجم.'
    },
    assetHealth: 25
  }
];

export const PRESENTER_NOTES: Record<SectionId, PresenterNote> = {
  overview: {
    estimatedMinutes: 1.0,
    talkingPoints: {
      en: [
        'Welcome delegates and honor the patronage of the Ministry of Commerce and Industry and Qatar Society of Engineers.',
        'State the core premise: smart manufacturing cannot succeed on raw sensor connectivity alone—it requires rigorous data engineering and end-to-end OT cybersecurity.',
        'Frame the 15-minute journey: from sensor telemetry, to cyber defense, to digital twins, to integrated smart factory architecture.'
      ],
      ar: [
        'الترحيب بالحضور الكرام والإشادة برعاية وزارة التجارة والصناعة وجمعية المهندسين القطرية.',
        'توضيح الفكرة الجوهرية: التصنيع الذكي لا يقوم على مجرد ربط الحساسات، بل يتطلب هندسة بيانات رصينة وأمناً سيبرانياً شاملاً لشبكات OT.',
        'استعراض محاور العرض خلال 15 دقيقة: من القياسات الحقلية، إلى الأمن السيبراني، إلى التوائم الرقمية، إلى منظومة المصنع الذكي.'
      ]
    },
    keyTakeaway: {
      en: 'Reliability and security are the two non-negotiable pillars of modern Industry 4.0.',
      ar: 'الموثوقية والأمان هما الركيزتان اللتان لا غنى عنهما في الثورة الصناعية الرابعة.'
    }
  },
  data: {
    estimatedMinutes: 5.0,
    talkingPoints: {
      en: [
        'Walk through the 6-stage data pipeline from physical acquisition up to machine learning analytics.',
        'Emphasize that 80% of digital twin failures originate from poor data engineering (noise, missing timestamps, jitter).',
        'Highlight the 6 data quality dimensions: Accuracy, Completeness, Consistency, Timeliness, Validity, and Traceability.'
      ],
      ar: [
        'شرح مراحل خط البيانات الست بالتسلسل من الاستحواذ الحسي وحتى تحليلات تعلم الآلة.',
        'التأكيد على أن 80% من إخفاقات التوائم الرقمية سببها ضعف هندسة البيانات (الضوضاء، فقدان التوقيت، التذبذب).',
        'تسليط الضوء على أبعاد جودة البيانات الستة: الدقة، الاكتمال، الاتساق، التوقيت، الصلاحية، وقابلية التتبع.'
      ]
    },
    keyTakeaway: {
      en: 'Garbage in, compromised digital twins out. Data quality is an engineering discipline.',
      ar: 'البيانات الرديئة تؤدي لتوائم رقمية مضللة. جودة البيانات هي علم وهندسة قائمة بذاتها.'
    }
  },
  cyber: {
    estimatedMinutes: 5.0,
    talkingPoints: {
      en: [
        'Explain the fundamental clash between IT (C-I-A) and OT (A-I-C): in OT, Availability and Safety rule supreme.',
        'Discuss why standard IT antivirus and blind automated patching can cause millions in physical factory damage.',
        'Demonstrate the 4 attack vectors: Data Manipulation, Sensor Spoofing, MitM, and Ransomware, grounded in IEC 62443 and NIST SP 800-82 standards.'
      ],
      ar: [
        'شرح التباين الجوهري بين أولويات IT (السرية أولاً) وأولويات OT (التوافرية والسلامة أولاً).',
        'توضيح لماذا تؤدي التحديثات الآلية لـ IT أو برامج الفحص العادية إلى إيقاف مصانع وتلف عتاد مادي.',
        'استعراض سيناريوهات التهديد الأربعة: التلاعب، التزييف، هجوم الوسيط، وفدية OT بالاستناد لمعايير IEC 62443 و NIST 800-82.'
      ]
    },
    keyTakeaway: {
      en: 'In industrial control systems, cybersecurity failure is not just data loss—it is physical damage.',
      ar: 'في نظم التحكم الصناعي، لا يعني الاختراق السيبراني تسريب بيانات فقط، بل أضرار فيزيائية ملموسة.'
    }
  },
  twins: {
    estimatedMinutes: 2.5,
    talkingPoints: {
      en: [
        'Define a True Digital Twin: not a static 3D model, but a living mathematical simulation synchronized in real time with the physical asset.',
        'Explain the closed bidirectional loop: telemetry flows UP to the twin; optimized setpoints and alerts flow DOWN to the physical machine.',
        'Show how digital twins enable predictive maintenance and proactive stress mitigation before components fail.'
      ],
      ar: [
        'تعريف التوأم الرقمي الحقيقي: ليس مجرد مجسم ثلاثي الأبعاد، بل محاكاة رياضية حية متزامنة لحظياً مع الأصل الفيزيائي.',
        'شرح الحلقة المغلقة ثنائية الاتجاه: صعود بيانات القياس للتوأم، وهبوط إشارات التحسين والتنبيهات للآلة.',
        'توضيح كيف تتيح التوائم الرقمية الصيانة التنبؤية واكتشاف إجهاد المعادن قبل حدوث الكسور والأعطال.'
      ]
    },
    keyTakeaway: {
      en: 'A digital twin transforms raw numbers into actionable operational foresight.',
      ar: 'التوأم الرقمي يحول الأرقام الصامتة إلى بصيرة تشغيلية استباقية.'
    }
  },
  factory: {
    estimatedMinutes: 2.5,
    talkingPoints: {
      en: [
        'Walk through the 5 architectural layers of the Smart Factory.',
        'Point out the green vertical bar: Cybersecurity is NOT a separate layer on top—it is a cross-cutting vertical pillar shielding every single layer.',
        'Explain how Layers 1 & 2 feed Layer 4 (Digital Twin) which empowers Layer 5 (Decisions).'
      ],
      ar: [
        'استعراض الطبقات المعمارية الخمس للمصنع الذكي المتكامل.',
        'لفت الانتباه للشريط الرأسي الأخضر: الأمن السيبراني ليس طبقة معزولة، بل ركيزة عمودية تخترق وتحمي كافة المستويات.',
        'شرح كيف تغذي الطبقتان 1 و 2 محرك التوأم الرقمي (الطبقة 4) الذي يدعم القرارات التشغيلية (الطبقة 5).'
      ]
    },
    keyTakeaway: {
      en: 'Systemic integration creates scalable, secure, and self-optimizing industrial plants.',
      ar: 'التكامل الممنهج هو ما يصنع مصانع ذكية قابلة للتوسع وآمنة وذاتية التطوير.'
    }
  },
  case: {
    estimatedMinutes: 2.0,
    talkingPoints: {
      en: [
        'Present the industrial motor MTR-3D-P88 case study.',
        'Click through the 4 live interactive scenarios: Normal, Bearing Wear (Vibration spike), Overheating (Thermal rise), and Cyber Anomaly (Spoofing).',
        'Show the audience how the live AreaChart and LineChart visually reflect each diagnostic condition.'
      ],
      ar: [
        'تقديم دراسة الحالة التطبيقية لمحرك الطباعة والتصنيع MTR-3D-P88.',
        'التنقل بين السيناريوهات الأربعة التفاعلية: التشغيل الطبيعي، تآكل المحمل، فشل التبريد، والهجوم السيبراني.',
        'إيضاح كيفية استجابة الرسوم البيانية الفورية بدقة لكل حالة تشخيصية أمام الحضور.'
      ]
    },
    keyTakeaway: {
      en: 'Real-time telemetry and validation allow immediate discernment between mechanical wear and cyber manipulation.',
      ar: 'القياس اللحظي والتحقق المباشر يمكننا من التفريق الفوري بين العطل الميكانيكي والاختراق السيبراني.'
    }
  },
  takeaways: {
    estimatedMinutes: 1.5,
    talkingPoints: {
      en: [
        'Synthesize the four pillars: Data, Security, Digital Twins, and Architecture.',
        'Deliver the closing statement on the future of smart manufacturing in Qatar and globally.',
        'Open the floor for questions from the Qatar Society of Engineers and conference delegates.'
      ],
      ar: [
        'تلخيص الركائز الأربع: البيانات، الأمان، التوائم الرقمية، والمعمارية المتكاملة.',
        'إلقاء المقولة الختامية حول مستقبل التصنيع الذكي في دولة قطر والعالم.',
        'فتح باب الأسئلة والمناقشة لجمعية المهندسين القطرية وضيوف المؤتمر.'
      ]
    },
    keyTakeaway: {
      en: 'The future of smart manufacturing is about building intelligent, secure, and reliable ecosystems.',
      ar: 'مستقبل التصنيع الذكي يكمن في بناء منظومات صناعية ذكية وآمنة وموثوقة.'
    }
  }
};
