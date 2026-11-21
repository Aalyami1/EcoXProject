/* =====================================================================
   EcoX — SITE CONFIGURATION  (the one file to edit for company details)
   ---------------------------------------------------------------------
   Everything here is DEMO / PLACEHOLDER content. When the client sends
   their real information, update the values below and every page
   (English + Arabic) picks it up automatically.
   See CONTENT-GUIDE.md for the full list of placeholders.
   ===================================================================== */
window.ECOX = {
  company: {
    name:        { en: "EcoX", ar: "إكو إكس" },
    phone:       "+966 50 160 2619",
    email:       "info@ecox.com",
    careersEmail:"careers@ecox.com",
    address:     { en: "Kingdom of Saudi Arabia, Al Khobar", ar: "المملكة العربية السعودية، الخبر" },
    mapQuery:    "Al Khobar, Saudi Arabia",       // used for the Google Map on the contact page
    year:        new Date().getFullYear()          // footer copyright year (automatic)
  },

  /* Headline numbers — shown on Home, About and Team pages (animated). */
  stats: {
    years:       "15+",
    projects:    "200+",
    disciplines: "12",
    countries:   "30+",
    engineers:   "150+"
  },

  /* Social media links (while "" the icon stays as a non-clicking placeholder). */
  social: {
    twitter:  "",
    linkedin: "",
    instagram:"",
    facebook: "",
    youtube:  ""
  },

  /* Contact form: paste a Formspree / Getform / backend URL here to receive
     real messages. While empty, the form runs in demo mode (validates and
     shows a success message, but nothing is sent). */
  formEndpoint: "",

  /* Project case studies — power the "View Details" pages (project.html / project2.html).
     Order matches the cards on the Projects page. */
  projects: [
    {
      id: "al-noor-solar",
      image: "solar-farm-sunset.jpg",
      gallery: ["solar-panel-farm.jpg", "photo-1466611653911-950815.jpg", "photo-1497435334941-8c899e.jpg"],
      year: "2022", duration: { en: "26 months", ar: "26 شهراً" },
      value: { en: "USD 210M", ar: "210 مليون دولار" },
      en: {
        title: "Al Noor Solar Farm", category: "Renewable Energy", location: "Saudi Arabia",
        client: "National Power Utility (placeholder)",
        role: "Owner's Engineer & EPC Design",
        summary: "250MW utility-scale photovoltaic plant powering 50,000 homes, with single-axis trackers and a 60MWh battery storage system.",
        challenge: "The site sits in one of the hottest, dustiest regions of the Kingdom. The client needed maximum energy yield, minimal water use for panel cleaning, and grid connection within a fixed 26-month window.",
        solution: "EcoX delivered the full engineering package: bifacial modules on single-axis trackers, a robotic waterless cleaning system, a 380kV substation tie-in and a 60MWh BESS for evening peak shaving. Digital-twin modelling optimised row spacing and cable routing, cutting balance-of-system cost by 9%.",
        scope: ["PV array & tracker layout design", "380kV substation and grid interconnection", "60MWh battery energy storage", "SCADA & plant performance monitoring", "Construction supervision & commissioning"],
        results: [["250MW", "Installed capacity"], ["50,000", "Homes powered"], ["420K t", "CO₂ avoided per year"], ["0", "Lost-time incidents"]]
      },
      ar: {
        title: "مزرعة النور للطاقة الشمسية", category: "الطاقة المتجددة", location: "المملكة العربية السعودية",
        client: "شركة الكهرباء الوطنية (اسم افتراضي)",
        role: "مهندس المالك والتصميم الهندسي",
        summary: "محطة كهروضوئية بقدرة 250 ميجاوات تغذي 50,000 منزل، مع أنظمة تتبع أحادية المحور ونظام تخزين بطاريات بسعة 60 ميجاوات ساعة.",
        challenge: "يقع الموقع في واحدة من أشد مناطق المملكة حرارةً وغباراً. احتاج العميل إلى أعلى إنتاجية ممكنة للطاقة، وأقل استهلاك للمياه في تنظيف الألواح، وربط بالشبكة خلال 26 شهراً فقط.",
        solution: "قدمت إكو إكس الحزمة الهندسية الكاملة: ألواح ثنائية الوجه على أنظمة تتبع، ونظام تنظيف روبوتي دون مياه، وربط بمحطة تحويل 380 كيلوفولت، ونظام تخزين بسعة 60 ميجاوات ساعة لتغطية ذروة المساء. وساهمت النمذجة الرقمية في تحسين المسافات بين الصفوف ومسارات الكابلات، مما خفّض التكاليف بنسبة 9%.",
        scope: ["تصميم المصفوفات الشمسية وأنظمة التتبع", "محطة تحويل 380 كيلوفولت والربط بالشبكة", "تخزين الطاقة بالبطاريات بسعة 60 ميجاوات ساعة", "أنظمة سكادا ومراقبة أداء المحطة", "الإشراف على التنفيذ والتشغيل التجريبي"],
        results: [["250 ميجاوات", "القدرة المركبة"], ["50,000", "منزل يتم تزويده بالطاقة"], ["420 ألف طن", "انبعاثات كربونية يتم تجنبها سنوياً"], ["0", "حوادث مضيعة للوقت"]]
      }
    },
    {
      id: "smart-city",
      image: "modern-smart-city.jpg",
      gallery: ["photo-1518770660439-463619.jpg", "photo-1497435334941-8c899e.jpg", "photo-1454165804606-c3d57b.jpg"],
      year: "2023", duration: { en: "34 months", ar: "34 شهراً" },
      value: { en: "USD 145M", ar: "145 مليون دولار" },
      en: {
        title: "Smart City Infrastructure", category: "Electrical & Automation", location: "UAE",
        client: "Municipal Development Authority (placeholder)",
        role: "Lead Electrical & Systems Integrator",
        summary: "Integrated power distribution, smart street lighting and city-wide IoT control for a new district of 500,000 residents.",
        challenge: "A greenfield district needed a resilient power network and a single control platform for lighting, traffic, water and building systems — built in phases while residents moved in.",
        solution: "EcoX designed a ring-fed medium-voltage network with automated fault isolation, 18,000 adaptive LED streetlights and a unified city operations centre integrating 40,000+ sensors over a fibre backbone.",
        scope: ["MV/LV distribution network design", "Adaptive LED street-lighting system", "City operations centre & SCADA", "IoT sensor network & fibre backbone", "Phased testing & handover"],
        results: [["500K", "Residents served"], ["38%", "Lighting energy saved"], ["40,000+", "Connected sensors"], ["99.98%", "Network availability"]]
      },
      ar: {
        title: "البنية التحتية للمدينة الذكية", category: "الكهرباء والأتمتة", location: "الإمارات العربية المتحدة",
        client: "هيئة التطوير البلدي (اسم افتراضي)",
        role: "المسؤول الرئيسي عن الأنظمة الكهربائية والتكامل",
        summary: "شبكة توزيع كهرباء متكاملة وإنارة ذكية للشوارع ونظام تحكم ذكي شامل لحي جديد يسكنه 500,000 نسمة.",
        challenge: "احتاج الحي الجديد إلى شبكة كهرباء موثوقة ومنصة تحكم موحدة للإنارة والمرور والمياه والمباني، مع التنفيذ على مراحل أثناء انتقال السكان.",
        solution: "صممت إكو إكس شبكة جهد متوسط حلقية مع عزل تلقائي للأعطال، و18,000 عمود إنارة LED تكيفي، ومركز عمليات موحد يربط أكثر من 40,000 مستشعر عبر شبكة ألياف ضوئية.",
        scope: ["تصميم شبكات التوزيع للجهد المتوسط والمنخفض", "نظام إنارة شوارع LED تكيفي", "مركز عمليات المدينة وأنظمة سكادا", "شبكة مستشعرات إنترنت الأشياء والألياف الضوئية", "الاختبار والتسليم على مراحل"],
        results: [["500 ألف", "نسمة يتم خدمتهم"], ["38%", "توفير في طاقة الإنارة"], ["+40,000", "مستشعر متصل"], ["99.98%", "جاهزية الشبكة"]]
      }
    },
    {
      id: "coastal-bridge",
      image: "engineering-suspension-bridge.jpg",
      gallery: ["photo-1503387762-592deb58e.jpg", "engineering-suspension-bridge.jpg", "photo-1454165804606-c3d57b.jpg"],
      year: "2021", duration: { en: "40 months", ar: "40 شهراً" },
      value: { en: "USD 320M", ar: "320 مليون دولار" },
      en: {
        title: "Coastal Bridge Engineering", category: "Civil & Structural", location: "Oman",
        client: "Ministry of Transport (placeholder)",
        role: "Structural Design & Construction Supervision",
        summary: "12km coastal bridge and causeway linking two growing port cities, designed for a 100-year service life in a marine environment.",
        challenge: "Aggressive saltwater exposure, soft seabed soils and strict environmental limits on marine works demanded an unusually durable and low-impact design.",
        solution: "EcoX engineered a cable-stayed main span with precast approach viaducts, high-performance marine concrete, cathodic protection and structural-health monitoring sensors embedded throughout the deck.",
        scope: ["Geotechnical investigation & foundation design", "Cable-stayed main span design", "Precast viaduct engineering", "Marine durability & corrosion protection", "Structural health monitoring system"],
        results: [["12km", "Total length"], ["100 yrs", "Design life"], ["45 min", "Travel time saved"], ["2M+", "Safe man-hours"]]
      },
      ar: {
        title: "هندسة الجسر الساحلي", category: "الهندسة المدنية والإنشائية", location: "سلطنة عمان",
        client: "وزارة النقل (اسم افتراضي)",
        role: "التصميم الإنشائي والإشراف على التنفيذ",
        summary: "جسر وطريق ساحلي بطول 12 كم يربط بين مدينتين ساحليتين، مصمم لعمر تشغيلي يبلغ 100 عام في بيئة بحرية.",
        challenge: "تطلبت ملوحة المياه العالية وتربة القاع اللينة والقيود البيئية الصارمة على الأعمال البحرية تصميماً شديد المتانة وقليل الأثر البيئي.",
        solution: "صممت إكو إكس بحراً رئيسياً معلقاً بالكابلات مع جسور اقتراب مسبقة الصب، وخرسانة بحرية عالية الأداء، وحماية كاثودية، ومستشعرات لمراقبة السلامة الإنشائية على امتداد الجسر.",
        scope: ["الدراسات الجيوتقنية وتصميم الأساسات", "تصميم البحر الرئيسي المعلق بالكابلات", "هندسة الجسور مسبقة الصب", "المتانة البحرية والحماية من التآكل", "نظام مراقبة السلامة الإنشائية"],
        results: [["12 كم", "الطول الإجمالي"], ["100 عام", "العمر التصميمي"], ["45 دقيقة", "توفير في زمن الرحلة"], ["+2 مليون", "ساعة عمل آمنة"]]
      }
    },
    {
      id: "industrial-automation-hub",
      image: "industrial-manufacturing-facility.jpg",
      gallery: ["photo-1581091226825-a6a2a5.jpg", "industrial-manufacturing-facility.jpg", "photo-1518770660439-463619.jpg"],
      year: "2024", duration: { en: "18 months", ar: "18 شهراً" },
      value: { en: "USD 85M", ar: "85 مليون دولار" },
      en: {
        title: "Industrial Automation Hub", category: "Mechanical Engineering", location: "Kuwait",
        client: "Petrochemical Operator (placeholder)",
        role: "Mechanical, Piping & Control Systems Engineering",
        summary: "Mechanical and control-system upgrade for a live petrochemical facility, modernising rotating equipment, piping and plant automation.",
        challenge: "The upgrade had to be executed inside an operating plant, with only two short shutdown windows and zero tolerance for safety or product-quality incidents.",
        solution: "EcoX pre-engineered and pre-fabricated modules off-site, replaced legacy controls with a modern DCS/PLC architecture and introduced predictive-maintenance analytics on critical rotating equipment.",
        scope: ["Rotating equipment selection & upgrade", "Piping stress & integrity analysis", "DCS/PLC migration", "Predictive maintenance analytics", "Shutdown planning & execution"],
        results: [["22%", "Energy use reduced"], ["31%", "Less unplanned downtime"], ["2", "Shutdown windows met"], ["0", "Safety incidents"]]
      },
      ar: {
        title: "مركز الأتمتة الصناعية", category: "الهندسة الميكانيكية", location: "الكويت",
        client: "مشغل بتروكيماويات (اسم افتراضي)",
        role: "الهندسة الميكانيكية والأنابيب وأنظمة التحكم",
        summary: "تحديث الأنظمة الميكانيكية وأنظمة التحكم في منشأة بتروكيماوية عاملة، يشمل المعدات الدوارة والأنابيب وأتمتة المصنع.",
        challenge: "كان لا بد من تنفيذ التحديث داخل مصنع قيد التشغيل، مع فترتي إيقاف قصيرتين فقط ودون أي تهاون في السلامة أو جودة المنتج.",
        solution: "نفذت إكو إكس الهندسة والتصنيع المسبق للوحدات خارج الموقع، واستبدلت أنظمة التحكم القديمة بمنظومة DCS/PLC حديثة، وأدخلت تحليلات الصيانة التنبؤية للمعدات الحرجة.",
        scope: ["اختيار وتحديث المعدات الدوارة", "تحليل إجهادات وسلامة الأنابيب", "ترحيل أنظمة DCS/PLC", "تحليلات الصيانة التنبؤية", "تخطيط وتنفيذ فترات الإيقاف"],
        results: [["22%", "خفض استهلاك الطاقة"], ["31%", "انخفاض التوقفات غير المخطط لها"], ["2", "فترات إيقاف أنجزت في موعدها"], ["0", "حوادث سلامة"]]
      }
    },
    {
      id: "wind-energy-complex",
      image: "wind-turbines-desert.jpg",
      gallery: ["wind-turbines-desert.jpg", "photo-1466611653911-950815.jpg", "photo-1454165804606-c3d57b.jpg"],
      year: "2023", duration: { en: "22 months", ar: "22 شهراً" },
      value: { en: "USD 190M", ar: "190 مليون دولار" },
      en: {
        title: "Wind Energy Complex", category: "Renewable Energy", location: "Egypt",
        client: "Independent Power Producer (placeholder)",
        role: "Wind Farm Design & Grid Integration",
        summary: "150MW onshore wind farm with 42 turbines, including foundations, collector network and 220kV grid connection.",
        challenge: "High desert wind speeds offered great yield potential, but sandy soils, sandstorms and a weak local grid complicated foundation design and power stability.",
        solution: "EcoX used micro-siting wind studies to place each turbine, designed optimised gravity foundations for sandy ground and added reactive-power compensation to keep the grid connection stable.",
        scope: ["Wind resource assessment & micro-siting", "Turbine foundation design", "33kV collector network", "220kV substation & grid studies", "Commissioning support"],
        results: [["150MW", "Installed capacity"], ["42", "Turbines"], ["560 GWh", "Clean energy per year"], ["290K t", "CO₂ avoided per year"]]
      },
      ar: {
        title: "مجمع طاقة الرياح", category: "الطاقة المتجددة", location: "مصر",
        client: "منتج طاقة مستقل (اسم افتراضي)",
        role: "تصميم مزرعة الرياح والربط بالشبكة",
        summary: "مزرعة رياح بقدرة 150 ميجاوات تضم 42 توربيناً، تشمل الأساسات وشبكة التجميع والربط بشبكة 220 كيلوفولت.",
        challenge: "وفرت سرعات الرياح العالية في الصحراء إمكانات إنتاج كبيرة، لكن التربة الرملية والعواصف وضعف الشبكة المحلية صعّبت تصميم الأساسات واستقرار الطاقة.",
        solution: "استخدمت إكو إكس دراسات دقيقة لتحديد موقع كل توربين، وصممت أساسات جاذبية محسّنة للتربة الرملية، وأضافت أنظمة تعويض القدرة غير الفعالة لضمان استقرار الربط بالشبكة.",
        scope: ["تقييم موارد الرياح وتحديد المواقع", "تصميم أساسات التوربينات", "شبكة تجميع 33 كيلوفولت", "محطة تحويل 220 كيلوفولت ودراسات الشبكة", "دعم التشغيل التجريبي"],
        results: [["150 ميجاوات", "القدرة المركبة"], ["42", "توربيناً"], ["560 جيجاوات ساعة", "طاقة نظيفة سنوياً"], ["290 ألف طن", "انبعاثات كربونية يتم تجنبها سنوياً"]]
      }
    },
    {
      id: "environmental-remediation",
      image: "modern-green-environmental.jpg",
      gallery: ["modern-green-environmental.jpg", "photo-1497435334941-8c899e.jpg", "photo-1466611653911-950815.jpg"],
      year: "2024", duration: { en: "16 months", ar: "16 شهراً" },
      value: { en: "USD 60M", ar: "60 مليون دولار" },
      en: {
        title: "Environmental Remediation", category: "Environmental Engineering", location: "Qatar",
        client: "Environmental Agency (placeholder)",
        role: "Environmental Assessment & Remediation Design",
        summary: "Remediation of a former industrial site and construction of a modern waste-treatment facility, restoring 80 hectares of land.",
        challenge: "Decades of industrial use left contaminated soil and groundwater next to a growing residential area, requiring safe clean-up under close regulatory scrutiny.",
        solution: "EcoX led the environmental impact assessment, designed in-situ soil treatment and groundwater pump-and-treat systems, and engineered a waste-sorting and recycling facility for the wider district.",
        scope: ["Environmental impact assessment", "Soil & groundwater remediation design", "Waste-treatment facility engineering", "Regulatory permitting support", "Long-term environmental monitoring"],
        results: [["80 ha", "Land restored"], ["65%", "Waste diverted from landfill"], ["100%", "Regulatory compliance"], ["12K t", "CO₂ avoided per year"]]
      },
      ar: {
        title: "المعالجة البيئية", category: "الهندسة البيئية", location: "قطر",
        client: "الهيئة البيئية (اسم افتراضي)",
        role: "التقييم البيئي وتصميم أعمال المعالجة",
        summary: "معالجة موقع صناعي سابق وإنشاء منشأة حديثة لمعالجة النفايات، مع إعادة تأهيل 80 هكتاراً من الأراضي.",
        challenge: "خلّفت عقود من النشاط الصناعي تربة ومياهاً جوفية ملوثة بجوار منطقة سكنية متنامية، مما تطلب معالجة آمنة تحت رقابة تنظيمية دقيقة.",
        solution: "قادت إكو إكس دراسة تقييم الأثر البيئي، وصممت أنظمة معالجة التربة في موقعها وضخ ومعالجة المياه الجوفية، وهندست منشأة لفرز النفايات وإعادة تدويرها لخدمة المنطقة.",
        scope: ["دراسة تقييم الأثر البيئي", "تصميم معالجة التربة والمياه الجوفية", "هندسة منشأة معالجة النفايات", "دعم إجراءات التراخيص", "المراقبة البيئية طويلة المدى"],
        results: [["80 هكتاراً", "أراضٍ أعيد تأهيلها"], ["65%", "نفايات تم تحويلها عن المرادم"], ["100%", "امتثال للأنظمة"], ["12 ألف طن", "انبعاثات كربونية يتم تجنبها سنوياً"]]
      }
    }
  ]
};
