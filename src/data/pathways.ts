import { EducationRoute, SourceReference } from '../types';

export const OFFICIAL_SOURCES: Record<string, SourceReference> = {
  MSBSHSE: {
    id: 'src_msbshse',
    title: 'Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)',
    url: 'https://mahahsscboard.in/',
    authority: 'MSBSHSE Pune',
    claimOrRequirement: 'Defines Class 10 (SSC) and Class 12 (HSC) curriculums, evaluation rules, and passing standards in Maharashtra.',
    lastCheckedDate: '2026-03-15',
    verificationStatus: 'verified_official',
    notes: 'Centralized Online Admission Process (11th Centralized / FYJC) follows MSBSHSE equivalence.'
  },
  DTE_MAHARASHTRA: {
    id: 'src_dte',
    title: 'Directorate of Technical Education (DTE) Maharashtra',
    url: 'https://dte.maharashtra.gov.in/',
    authority: 'DTE Maharashtra',
    claimOrRequirement: 'Conducts Centralized Admission Process (CAP) for 3-Year Post-SSC Polytechnic Diplomas and Direct Second Year Engineering (DSE) lateral admissions.',
    lastCheckedDate: '2026-04-02',
    verificationStatus: 'verified_official',
    notes: 'Eligibility: Minimum 35% in SSC for Diploma; for DSE, AICTE/DTE approved diploma with minimum marks.'
  },
  DVET_ITI: {
    id: 'src_dvet',
    title: 'Directorate of Vocational Education & Training (DVET) — ITI Admission Portal',
    url: 'https://admission.dvet.gov.in/',
    authority: 'DVET Maharashtra',
    claimOrRequirement: 'Administers online admissions to 417+ Government and 500+ Private ITIs across Maharashtra for Engineering & Non-Engineering trades.',
    lastCheckedDate: '2026-03-20',
    verificationStatus: 'verified_official',
    notes: 'Trades span 1 to 2 years under NCVT (National) and SCVT (State) certifications.'
  },
  MAHA_CET_CELL: {
    id: 'src_cet_cell',
    title: 'State Common Entrance Test Cell Maharashtra',
    url: 'https://cetcell.mahacet.org/',
    authority: 'State CET Cell, Government of Maharashtra',
    claimOrRequirement: 'Conducts MHT-CET, MAH-MCA-CET, MAH-MBA-CET, and coordinates centralized degree engineering and professional admissions.',
    lastCheckedDate: '2026-04-10',
    verificationStatus: 'verified_official',
    notes: 'Requires Class 12 Physics & Mathematics compulsory with Chemistry/Bio/Tech subject, plus non-zero score in MHT-CET.'
  },
  NCS_INDIA: {
    id: 'src_ncs',
    title: 'National Career Service (NCS) Portal — Ministry of Labour & Employment',
    url: 'https://www.ncs.gov.in/',
    authority: 'Government of India',
    claimOrRequirement: 'Standard National Classification of Occupations (NCO), registered apprenticeships, and employment exchanges across Maharashtra.',
    lastCheckedDate: '2026-02-18',
    verificationStatus: 'verified_official'
  },
  NATS_APPRENTICE: {
    id: 'src_nats',
    title: 'National Apprenticeship Training Scheme (NATS / NAPS Portal)',
    url: 'https://nats.education.gov.in/',
    authority: 'Board of Apprenticeship Training (BOAT Western Region Mumbai)',
    claimOrRequirement: 'Provides 1-year stipendiary industrial apprenticeship for Diploma and Degree engineers in Maharashtra industries (MIDC belts).',
    lastCheckedDate: '2026-03-10',
    verificationStatus: 'verified_official'
  },
  MPSC_OFFICIAL: {
    id: 'src_mpsc',
    title: 'Maharashtra Public Service Commission (MPSC)',
    url: 'https://mpsc.gov.in/',
    authority: 'MPSC Maharashtra',
    claimOrRequirement: 'Conducts competitive recruitment examinations (Rajyaseva, Group B, Group C) for Maharashtra administrative and executive services.',
    lastCheckedDate: '2026-01-25',
    verificationStatus: 'verified_official',
    notes: 'Requires recognized Bachelor degree; Marathi language competency compulsory.'
  }
};

export const MAHARASHTRA_EDUCATION_ROUTES: EducationRoute[] = [
  {
    id: 'route_fyjc_science',
    code: 'FYJC-SCI',
    titleEn: 'Class 11–12 Science (FYJC & SYJC)',
    titleMr: 'इयत्ता ११वी–१२वी विज्ञान शाखा (FYJC)',
    stage: 'class_10',
    category: 'academic',
    summaryEn: 'Academic secondary pathway focusing on Physics, Chemistry, Mathematics, and Biology. Prepares for engineering, medicine, and fundamental science degrees.',
    summaryMr: 'भौतिकशास्त्र, रसायनशास्त्र, गणित आणि जीवशास्त्र या विषयांवर आधारित मार्ग. अभियांत्रिकी, वैद्यकीय आणि मूलभूत विज्ञानासाठी पाया.',
    durationMonths: 24,
    durationDisplayEn: '2 Years (Class 11 & 12)',
    durationDisplayMr: '२ वर्षे (इयत्ता ११वी व १२वी)',
    costBand: 'low',
    costDisplayEn: '₹4,000 – ₹25,000 / year (Govt / Aided Jr Colleges)',
    costDisplayMr: '₹४,००० – ₹२५,००० / वर्ष (शासकीय/अनुदानित कनिष्ठ महाविद्यालये)',
    prerequisites: [
      'Passed Class 10 (SSC or equivalent)',
      'Science and Mathematics studied in 10th standard',
      'Minimum qualifying percentage for junior college quota'
    ],
    mandatorySubjects: ['Physics', 'Chemistry', 'Mathematics / Biology', 'English'],
    entranceExams: ['MHT-CET (State Engg/Pharm)', 'JEE Main (National Engg)', 'NEET-UG (Medical)'],
    possibleNextSteps: ['B.Tech / B.E.', 'MBBS / BDS / BAMS', 'B.Sc (Comp Sci/Data)', 'B.Pharm', 'B.Arch'],
    supportedCareers: ['car_front_end_dev', 'car_python_dev', 'car_data_analyst', 'car_health_tech'],
    advantagesEn: [
      'Keeps the widest range of scientific, engineering, and medical degrees open.',
      'Strong theoretical foundation for national & state entrance exams.',
      'Flexible transition: can later opt for commerce, management, arts, or law if goals change.'
    ],
    advantagesMr: [
      'अभियांत्रिकी, वैद्यकीय आणि विज्ञानातील सर्वाधिक संधी खुल्या राहतात.',
      'प्रवेश परीक्षांसाठी (MHT-CET/JEE/NEET) भक्कम तात्विक पाया तयार होतो.',
      'भविष्यात गरज भासल्यास व्यवस्थापन, विधी किंवा वाणिज्यकडे वळण्याची लवचिकता.'
    ],
    tradeoffsEn: [
      'Rigorous academic workload requiring 2+ years of sustained study.',
      'Does not provide immediate occupational or trade certification if dropping out.',
      'Private integrated coaching can increase expenses significantly.'
    ],
    tradeoffsMr: [
      'अभ्यासाचा भार अधिक असतो, सातत्यपूर्ण परिश्रमांची आवश्यकता असते.',
      'मध्यंतरी शिक्षण सोडल्यास लगेच नोकरीचे प्रत्यक्ष कौशल्य प्रमाणपत्र मिळत नाही.',
      'खाजगी कोचिंग असल्यास खर्च लक्षणीय वाढू शकतो.'
    ],
    verificationChecklistEn: [
      'Verify Class 10 marksheet includes Science & Maths as passing subjects.',
      'Check centralized online FYJC admission cutoff lists for your district / divisional zone.',
      'Confirm whether target degree (e.g. Engineering) requires Mathematics as a compulsory subject.'
    ],
    verificationChecklistMr: [
      'दहावीच्या गुणपत्रिकेत विज्ञान व गणित विषय उत्तीर्ण असल्याची खात्री करा.',
      'तुमच्या जिल्ह्यातील ११वी केंद्रीय प्रवेश प्रक्रियेतील (FYJC) मागील वर्षाचे कट-ऑफ तपासा.',
      'इच्छित पदवीसाठी (उदा. अभियांत्रिकी) गणित विषय अनिवार्य आहे का ते तपासा.'
    ],
    primarySource: OFFICIAL_SOURCES.MSBSHSE,
    secondarySources: [OFFICIAL_SOURCES.MAHA_CET_CELL]
  },

  {
    id: 'route_polytechnic_diploma',
    code: 'DTE-POLY',
    titleEn: '3-Year Polytechnic Engineering Diploma (Post-SSC)',
    titleMr: '३-वर्षीय तंत्रनिकेतन पदविका (पॉलिटेक्निक डिप्लोमा)',
    stage: 'class_10',
    category: 'diploma',
    summaryEn: 'Hands-on technical engineering diploma accredited by DTE Maharashtra / MSBTE. Offers practical lab experience and a direct route to Direct Second Year (DSE) B.Tech.',
    summaryMr: 'महाराष्ट्र तंत्रशिक्षण संचालनालय (DTE/MSBTE) अंतर्गत प्रात्यक्षिक तांत्रिक पदविका. थेट दुसऱ्या वर्षाच्या अभियांत्रिकी पदवीसाठी (DSE) पात्र.',
    durationMonths: 36,
    durationDisplayEn: '3 Years (6 Semesters)',
    durationDisplayMr: '३ वर्षे (६ सेमिस्टर)',
    costBand: 'low',
    costDisplayEn: '₹8,000 – ₹35,000 / year (Govt / Aided Poly); ₹40k+ (Private)',
    costDisplayMr: '₹८,००० – ₹३५,००० / वर्ष (शासकीय/अनुदानित); ₹४०,०००+ (खाजगी)',
    prerequisites: [
      'Passed SSC (Class 10) Examination with minimum 35% aggregate marks',
      'Mathematics and Science as compulsory subjects in Class 10',
      'Maharashtra State candidate or All India eligibility norms'
    ],
    mandatorySubjects: ['Engineering Mathematics', 'Applied Science', 'Branch Core Subjects'],
    entranceExams: ['None for 1st Year Diploma (Merit-based on 10th score via DTE CAP)'],
    possibleNextSteps: [
      'Direct Second Year (DSE) B.E. / B.Tech (Lateral Entry)',
      'Junior Engineer in State Departments (WRD, PWD, Mahavitaran/MSEDCL)',
      'Industrial Technician / Supervisor',
      'NATS 1-Year Apprenticeship'
    ],
    supportedCareers: ['car_front_end_dev', 'car_python_dev', 'car_solar_electrician', 'car_data_analyst'],
    advantagesEn: [
      'Practical, workshop-heavy education starting right after Class 10.',
      'Direct lateral entry into 2nd year B.Tech without taking MHT-CET/JEE (saves 1 year relative to starting college from scratch).',
      'Eligible for government Junior Engineer (JE) technical posts at age 18-19.'
    ],
    advantagesMr: [
      'दहावीनंतर लगेचच प्रत्यक्ष कार्यशाळा आणि लॅबमधील तांत्रिक शिक्षण.',
      'MHT-CET न देता थेट दुसऱ्या वर्षाच्या B.Tech मध्ये (DSE) प्रवेशाची संधी.',
      '१८-१९ व्या वर्षी शासकीय कनिष्ठ अभियंता (JE) व औद्योगिक पदांसाठी पात्रता.'
    ],
    tradeoffsEn: [
      'Specialization chosen at age 15 (e.g. Mechanical, Computer, Civil). Switching branches later has restrictions.',
      'Not eligible for general degrees like MBBS or traditional non-engineering university programs without HSC equivalence.'
    ],
    tradeoffsMr: [
      'दहावीनंतरच शाखा निवडावी लागते (उदा. संगणक, मेकॅनिकल, सिव्हिल). नंतर शाखा बदलणे मर्यादित असते.',
      'वैद्यकीय किंवा पारंपारिक कला/वाणिज्य पदव्यांसाठी थेट मार्ग नसतो.'
    ],
    verificationChecklistEn: [
      'Verify 10th aggregate score is at least 35% with passing in Maths and Science.',
      'Check official DTE Maharashtra Polytechnic portal (poly24.dtemaharashtra.gov.in) for CAP registration schedule.',
      'Review MSBTE curriculum and college lab infrastructure before choosing a trade.'
    ],
    verificationChecklistMr: [
      'दहावीत गणित व विज्ञान विषयांसह किमान ३५% गुण आहेत याची खात्री करा.',
      'DTE महाराष्ट्र पॉलिटेक्निक पोर्टलवरील केंद्रीय प्रवेश प्रक्रिया (CAP) वेळापत्रक तपासा.',
      'शाखा निवडताना संबंधित तंत्रनिकेतनातील प्रयोगशाळा व सुविधा तपासा.'
    ],
    primarySource: OFFICIAL_SOURCES.DTE_MAHARASHTRA,
    secondarySources: [OFFICIAL_SOURCES.NATS_APPRENTICE]
  },

  {
    id: 'route_iti_trade',
    code: 'DVET-ITI',
    titleEn: '1–2 Year Industrial Training Institute (ITI) Trade',
    titleMr: '१ ते २ वर्षे औद्योगिक प्रशिक्षण संस्था (ITI ट्रेड)',
    stage: 'class_10',
    category: 'iti_vocational',
    summaryEn: 'Job-ready vocational trade certification under DVET Maharashtra and NCVT. High emphasis on practical industrial skills, machinery operation, and apprenticeships.',
    summaryMr: 'DVET महाराष्ट्र व NCVT अंतर्गत उद्योग-सज्ज व्यावसायिक प्रमाणपत्र. मशीन, प्रात्यक्षिक आणि अप्रेंटिसशिपवर भर.',
    durationMonths: 24,
    durationDisplayEn: '1 to 2 Years (Trade dependent)',
    durationDisplayMr: '१ ते २ वर्षे (ट्रेडनुसार)',
    costBand: 'very_low',
    costDisplayEn: '₹1,500 – ₹6,000 / year (Govt ITI); Nominal exam fees',
    costDisplayMr: '₹१,५०० – ₹६,००० / वर्ष (शासकीय ITI)',
    prerequisites: [
      'Passed Class 10 (for engineering trades like Electrician, Fitter, Turner, Machinist, COPA)',
      'Passed Class 8 or 10 for specific non-engineering trades',
      'Age minimum 14 years on start date'
    ],
    mandatorySubjects: ['Trade Theory', 'Trade Practical', 'Workshop Calculation', 'Employability Skills'],
    entranceExams: ['Merit-based admission via DVET online centralized portal (admission.dvet.gov.in)'],
    possibleNextSteps: [
      'National Apprenticeship Certificate (NAC) via NAPS industrial training',
      'Direct admission to 2nd year Polytechnic Diploma (lateral entry for eligible trades)',
      'Technician / Maintenance roles in Railways, Mahatransco, Ordnance factories',
      'Independent technical enterprise / self-employment'
    ],
    supportedCareers: ['car_solar_electrician', 'car_python_dev'],
    advantagesEn: [
      'Extremely affordable with government hostel and tool subsidies.',
      'Fastest pathway to formal industrial employment with NCVT certification.',
      'Strong demand in MIDC industrial corridors (Chakan, Waluj, Butibori, TTC Navi Mumbai).'
    ],
    advantagesMr: [
      'अत्यंत कमी खर्च आणि शासकीय वसतिगृह व विद्यावेतनाची सुविधा.',
      'औद्योगिक क्षेत्रात लवकर नोकरी मिळवण्यासाठी सर्वात जलद प्रमाणित मार्ग.',
      'महाराष्ट्रातील MIDC औद्योगिक पट्ट्यांमध्ये (चाकण, वाळूज, बुटीबोरी) सतत मागणी.'
    ],
    tradeoffsEn: [
      'Initial entry wages can be modest (stipend during apprenticeship).',
      'Career advancement into managerial roles often requires subsequent diploma or degree study.'
    ],
    tradeoffsMr: [
      'सुरुवातीचे मानधन/वेतन मर्यादित असू शकते.',
      'उच्च व्यवस्थापकीय पदांसाठी पुढील शिक्षण (डिप्लोमा/पदवी) पूर्ण करावे लागते.'
    ],
    verificationChecklistEn: [
      'Check whether chosen trade is NCVT (National Council) or SCVT (State Council) certified.',
      'Verify if your target trade qualifies for lateral entry into 2nd year Polytechnic Diploma.',
      'Check district-level DVET ITI merit lists and seat matrix at admission.dvet.gov.in.'
    ],
    verificationChecklistMr: [
      'निवडलेला ट्रेड NCVT की SCVT प्रमाणित आहे ते तपासा (NCVT ला राष्ट्रीय मान्यता असते).',
      'या ट्रेडनंतर पॉलिटेक्निकच्या थेट दुसऱ्या वर्षात प्रवेश मिळतो का ते तपासा.',
      'admission.dvet.gov.in पोर्टलवर आपल्या जिल्ह्याची ITI जागांची यादी पहा.'
    ],
    primarySource: OFFICIAL_SOURCES.DVET_ITI,
    secondarySources: [OFFICIAL_SOURCES.NCS_INDIA]
  },

  {
    id: 'route_fyjc_commerce',
    code: 'FYJC-COMM',
    titleEn: 'Class 11–12 Commerce (FYJC & SYJC)',
    titleMr: 'इयत्ता ११वी–१२वी वाणिज्य शाखा (FYJC Commerce)',
    stage: 'class_10',
    category: 'academic',
    summaryEn: 'Secondary pathway focusing on Accountancy, Economics, Business Studies, and Mathematics/Secretarial Practice. Gateway to finance, commerce, CA/CS, and business roles.',
    summaryMr: 'लेखाकर्म (Accounts), अर्थशास्त्र आणि व्यावसायिक अभ्यासाचा मार्ग. सीए, फायनान्स, बँकिंग आणि व्यवसायासाठी पाया.',
    durationMonths: 24,
    durationDisplayEn: '2 Years (Class 11 & 12)',
    durationDisplayMr: '२ वर्षे (इयत्ता ११वी व १२वी)',
    costBand: 'low',
    costDisplayEn: '₹3,000 – ₹18,000 / year (Govt / Aided Jr Colleges)',
    costDisplayMr: '₹३,००० – ₹१८,००० / वर्ष (शासकीय/अनुदानित)',
    prerequisites: [
      'Passed Class 10 (SSC or equivalent)',
      'Basic foundation in arithmetic and English/regional language'
    ],
    mandatorySubjects: ['Book Keeping & Accountancy', 'Economics', 'Organization of Commerce', 'Maths / SP'],
    entranceExams: ['CA Foundation (ICAI)', 'CMA Foundation', 'CS EET', 'MAH-B.B.A./B.C.A. CET'],
    possibleNextSteps: ['B.Com', 'BBA / BMS', 'Chartered Accountancy (CA)', 'Company Secretary (CS)', 'BCA (with Maths)'],
    supportedCareers: ['car_business_analyst', 'car_accounts_gst', 'car_data_analyst', 'car_digital_marketing'],
    advantagesEn: [
      'Clear progression to high-value accounting and finance professions (CA, CFA, Banking).',
      'Strong understanding of practical business operations, GST, and taxation.',
      'Balanced study workload allowing time for foundational skill building.'
    ],
    advantagesMr: [
      'सीए, बँकिंग, वित्त व्यवस्थापन यासारख्या प्रतिष्ठित क्षेत्रांसाठी थेट पाया.',
      'जीएसटी, कररचना आणि प्रत्यक्ष व्यवसाय व्यवहारांचे उत्तम ज्ञान मिळते.',
      'अभ्यासाचा भार समतोल असल्याने अतिरिक्त कौशल्ये शिकण्यास वेळ मिळतो.'
    ],
    tradeoffsEn: [
      'Cannot transition into pure engineering or medical degrees later without Science HSC.',
      'Without taking Mathematics in 11th-12th, some data science and elite economics courses may have restrictions.'
    ],
    tradeoffsMr: [
      'भविष्यात अभियांत्रिकी किंवा वैद्यकीय पदव्यांकडे जाता येत नाही.',
      '११वी-१२वीत गणित न घेतल्यास काही डेटा सायन्स किंवा प्रगत अर्थशास्त्र पदव्यांना मर्यादा येऊ शकतात.'
    ],
    verificationChecklistEn: [
      'Decide whether to opt for Mathematics or Secretarial Practice (SP) — choose Maths if interested in Data / Finance Analytics.',
      'Review junior college cutoffs in your town or municipal area.',
      'Check ICAI CA Foundation registration guidelines.'
    ],
    verificationChecklistMr: [
      'गणित की SP (सचिवाची कार्यपद्धती) यापैकी योग्य निवड करा — डेटा किंवा फायनान्ससाठी गणित फायदेशीर ठरते.',
      'तुमच्या परिसरातील कनिष्ठ महाविद्यालयांचे कट-ऑफ तपासा.',
      'सीए फाऊंडेशनच्या नोंदणी नियमांची माहिती घ्या.'
    ],
    primarySource: OFFICIAL_SOURCES.MSBSHSE
  },

  {
    id: 'route_fyjc_arts',
    code: 'FYJC-ARTS',
    titleEn: 'Class 11–12 Arts & Humanities (FYJC & SYJC)',
    titleMr: 'इयत्ता ११वी–१२वी कला व मानव्यविद्या (FYJC Arts)',
    stage: 'class_10',
    category: 'academic',
    summaryEn: 'Secondary pathway in literature, history, political science, psychology, and sociology. Ideal for competitive civil services (UPSC/MPSC), law, journalism, and design.',
    summaryMr: 'इतिहास, राज्यशास्त्र, मानसशास्त्र आणि समाजशास्त्राचा मार्ग. स्पर्धा परीक्षा (MPSC/UPSC), विधी (Law), पत्रकारिता आणि डिझाइनसाठी उत्तम.',
    durationMonths: 24,
    durationDisplayEn: '2 Years (Class 11 & 12)',
    durationDisplayMr: '२ वर्षे (इयत्ता ११वी व १२वी)',
    costBand: 'low',
    costDisplayEn: '₹2,500 – ₹15,000 / year (Govt / Aided Jr Colleges)',
    costDisplayMr: '₹२,५०० – ₹१५,००० / वर्ष (शासकीय/अनुदानित)',
    prerequisites: ['Passed Class 10 (SSC or equivalent)'],
    mandatorySubjects: ['English', 'Marathi / Modern Language', 'Social Sciences electives'],
    entranceExams: ['MAH-B.A. LL.B. CET (5-Year Law)', 'UCEED / NID (Design)', 'CUET-UG'],
    possibleNextSteps: ['B.A. (Psychology, Economics, Political Science)', '5-Year Integrated B.A. LL.B.', 'B.Des (Design)', 'Journalism & Mass Comm'],
    supportedCareers: ['car_ui_ux_designer', 'car_digital_marketing', 'car_public_service', 'car_business_analyst'],
    advantagesEn: [
      'In-depth grounding in Indian polity, constitution, and history — directly beneficial for MPSC / civil services.',
      'Fosters critical thinking, written communication, and creative expression.',
      'Flexible schedule for preparing for national design or law entrance exams.'
    ],
    advantagesMr: [
      'भारतीय राज्यघटना, इतिहास आणि प्रशासनाचा सखोल अभ्यास — MPSC/UPSC स्पर्धा परीक्षांसाठी अत्यंत उपयुक्त.',
      'वैचारिक मांडणी, संवाद आणि विश्लेषणात्मक विचारसरणीचा विकास.',
      'कायदा (Law) किंवा डिझाइन प्रवेश परीक्षांच्या तयारीसाठी अनुकूल वातावरण.'
    ],
    tradeoffsEn: [
      'Requires proactive skill building in tools (design, digital media, writing) for immediate corporate employability.',
      'Does not qualify for technical or medical programs.'
    ],
    tradeoffsMr: [
      'कॉर्पोरेट नोकऱ्यांसाठी सोबतच प्रत्यक्ष डिजिटल किंवा व्यावहारिक कौशल्ये आत्मसात करावी लागतात.',
      'तांत्रिक किंवा वैद्यकीय क्षेत्रांमध्ये प्रवेश मिळत नाही.'
    ],
    verificationChecklistEn: [
      'Confirm the junior college offers your preferred subject combination (e.g. Psychology or Economics).',
      'Check 5-year Law CET syllabus if considering a legal career.',
      'Review language of instruction (English vs Marathi medium options).'
    ],
    verificationChecklistMr: [
      'कनिष्ठ महाविद्यालयात आपल्या आवडीचे विषय (उदा. मानसशास्त्र, अर्थशास्त्र) उपलब्ध आहेत का ते तपासा.',
      'विधी क्षेत्राचा विचार असल्यास ५-वर्षीय लॉ सीईटीचा अभ्यासक्रम पहा.',
      'माध्यम (मराठी की इंग्रजी) आपल्या उद्दिष्टानुसार निवडा.'
    ],
    primarySource: OFFICIAL_SOURCES.MSBSHSE,
    secondarySources: [OFFICIAL_SOURCES.MPSC_OFFICIAL]
  },

  {
    id: 'route_btech_degree',
    code: 'CET-BTECH',
    titleEn: '4-Year Bachelor of Technology / Engineering (B.Tech / B.E.)',
    titleMr: '४-वर्षीय अभियांत्रिकी पदवी (B.Tech / B.E.)',
    stage: 'class_11_12',
    category: 'degree',
    summaryEn: 'Professional engineering degree via MHT-CET / JEE Main centralized admission through State CET Cell Maharashtra. Specializations in Computer, IT, Mechanical, Civil, AI/DS, etc.',
    summaryMr: 'MHT-CET व JEE द्वारे राज्य CET सेलच्या केंद्रीय प्रक्रियेतून अभियांत्रिकी पदवी. संगणक, आयटी, मेकॅनिकल, डेटा सायन्स इत्यादी शाखा.',
    durationMonths: 48,
    durationDisplayEn: '4 Years (8 Semesters)',
    durationDisplayMr: '४ वर्षे (८ सेमिस्टर)',
    costBand: 'moderate',
    costDisplayEn: '₹25,000 – ₹1.2L / year (Govt/Autonomous); ₹90k – ₹2.5L / year (Pvt)',
    costDisplayMr: '₹२५,००० – ₹१.२ लाख / वर्ष (शासकीय/स्वायत्त); ₹९०,००० – २.५ लाख (खाजगी)',
    prerequisites: [
      'Passed Class 12 (HSC Science) with Physics & Mathematics compulsory, plus Chemistry/Bio/Computer Science',
      'Minimum 45% aggregate in PCM (40% for reserved categories of Maharashtra)',
      'Valid non-zero score in MHT-CET or JEE Main'
    ],
    mandatorySubjects: ['Physics', 'Mathematics', 'Chemistry/Tech Subject'],
    entranceExams: ['MHT-CET (State CET Cell)', 'JEE Main'],
    possibleNextSteps: ['Software Engineer', 'Data Scientist', 'M.Tech / MS', 'GATE for PSU recruitment', 'MBA via CAT/CET'],
    supportedCareers: ['car_front_end_dev', 'car_python_dev', 'car_data_analyst', 'car_business_analyst'],
    advantagesEn: [
      'Recognized technical degree with high campus placement and industry recruitment in Pune, Mumbai, Bangalore.',
      'Eligible for technical officer and civil service positions requiring an engineering qualification.',
      'Extensive student developer communities, open-source projects, and hackathons.'
    ],
    advantagesMr: [
      'पुणे, मुंबई आणि देशभरातील आयटी व उद्योग क्षेत्रात सर्वाधिक मान्यता व कॅम्पस प्लेसमेंट.',
      'अभियांत्रिकी पदवी आवश्यक असलेल्या शासकीय व सार्वजनिक उपक्रमांच्या (PSU) परीक्षांसाठी पात्रता.',
      'प्रकल्प, कोडिंग स्पर्धा आणि हॅकाथॉनद्वारे प्रत्यक्ष कौशल्यांचा विकास.'
    ],
    tradeoffsEn: [
      'Moderate to high financial investment if studying in unaided private institutions.',
      'Requires rigorous preparation for entrance exam rank cutoffs.'
    ],
    tradeoffsMr: [
      'विनाअनुदानित खाजगी महाविद्यालयांमध्ये फीचा भार अधिक असू शकतो.',
      'चांगल्या महाविद्यालयासाठी प्रवेश परीक्षेत (MHT-CET/JEE) चांगला पर्सेंटाईल मिळवणे आवश्यक.'
    ],
    verificationChecklistEn: [
      'Verify Class 12 PCM group percentage meets the 45% (or 40% reserved) criteria.',
      'Register on cetcell.mahacet.org before the annual deadline.',
      'Check official college fee structures verified by Maharashtra Fee Regulating Authority (FRA).'
    ],
    verificationChecklistMr: [
      '१२वी विज्ञान PCM ग्रुपमध्ये किमान ४५% (राखीव प्रवर्गासाठी ४०%) गुण असल्याची खात्री करा.',
      'cetcell.mahacet.org वर अंतिम मुदतीपूर्वी नोंदणी करा.',
      'महाराष्ट्र शुल्क नियामक प्राधिकरण (FRA) द्वारे मंजूर फी तपासा.'
    ],
    primarySource: OFFICIAL_SOURCES.MAHA_CET_CELL,
    secondarySources: [OFFICIAL_SOURCES.DTE_MAHARASHTRA]
  },

  {
    id: 'route_dse_lateral',
    code: 'DTE-DSE',
    titleEn: 'Direct Second Year (DSE) Lateral Entry Engineering',
    titleMr: 'थेट द्वितीय वर्ष अभियांत्रिकी प्रवेश (DSE Lateral Entry)',
    stage: 'diploma_iti',
    category: 'degree',
    summaryEn: 'Centralized admission for Polytechnic diploma holders directly into the 2nd year (3rd semester) of 4-year B.Tech / B.E. programs in Maharashtra engineering colleges.',
    summaryMr: 'पॉलिटेक्निक डिप्लोमा पूर्ण केलेल्या विद्यार्थ्यांसाठी थेट दुसऱ्या वर्षात (सेमिस्टर ३) B.Tech प्रवेशाची राज्यस्तरीय CAP प्रक्रिया.',
    durationMonths: 36,
    durationDisplayEn: '3 Years (Semesters 3 to 8)',
    durationDisplayMr: '३ वर्षे (सेमिस्टर ३ ते ८)',
    costBand: 'moderate',
    costDisplayEn: '₹30,000 – ₹1.2L / year (Institutional norms apply)',
    costDisplayMr: '₹३०,००० – ₹१.२ लाख / वर्ष (महाविद्यालयानुसार)',
    prerequisites: [
      'Passed Diploma in Engineering/Technology from MSBTE or AICTE-approved institution',
      'Minimum 45% marks in Diploma (40% for backward class / PwD candidates of Maharashtra)',
      'Admission based strictly on final year Diploma percentage via DTE CAP'
    ],
    mandatorySubjects: ['MSBTE Diploma completion in allied discipline'],
    entranceExams: ['None — based strictly on Diploma final percentage via DTE CAP rounds'],
    possibleNextSteps: ['B.Tech / B.E. Degree', 'Industrial R&D', 'Campus Placements', 'Higher Studies (M.Tech/MBA)'],
    supportedCareers: ['car_front_end_dev', 'car_python_dev', 'car_data_analyst'],
    advantagesEn: [
      'No MHT-CET or JEE entrance exam score required — admission depends purely on your diploma performance.',
      'Strong practical foundation from 3 years of diploma makes engineering labs and technical subjects smoother.',
      'Saves 1 year compared to re-taking entrance exams and starting in 1st year.'
    ],
    advantagesMr: [
      'MHT-CET किंवा JEE परीक्षा देण्याची गरज नाही — प्रवेश केवळ डिप्लोमाच्या गुणांवर होतो.',
      'पॉलिटेक्निकच्या ३ वर्षांच्या प्रात्यक्षिक ज्ञानामुळे पदवीच्या विषयांचे आकलन अधिक सहज होते.',
      'वेळ आणि मेहनत वाचवून थेट पदवीधरांचा दर्जा मिळतो.'
    ],
    tradeoffsEn: [
      'DSE seats are capped (typically 10% of sanctioned intake plus vacant seats), creating high competition for top colleges.',
      'Transition requires adjusting to the higher theoretical mathematics and analytical rigor of university curriculum.'
    ],
    tradeoffsMr: [
      'DSE साठी जागा मर्यादित (सुमारे १०% + रिक्त जागा) असल्याने नामांकित महाविद्यालयांसाठी तीव्र स्पर्धा असते.',
      'विद्यापीठाच्या प्रगत गणित आणि सिद्धांतांशी जुळवून घेण्यासाठी सुरुवातीला अधिक मेहनत लागते.'
    ],
    verificationChecklistEn: [
      'Confirm your diploma discipline is officially eligible for the target engineering branch under DTE equivalence rules.',
      'Verify non-creamy layer, caste validity, or EWS documents well before CAP registration.',
      'Review previous year DSE cutoff percentages at dte.maharashtra.gov.in.'
    ],
    verificationChecklistMr: [
      'आपली डिप्लोमा शाखा इच्छित इंजिनिअरिंग शाखेसाठी DTE नियमांनुसार पात्र आहे का ते तपासा.',
      'प्रवेशापूर्वी आवश्यक सर्व प्रमाणपत्रे (जात वैधता, नॉन-क्रिमिलेअर, EWS) तयार ठेवा.',
      'मागील वर्षाचे DSE कट-ऑफ dte.maharashtra.gov.in वर तपासा.'
    ],
    primarySource: OFFICIAL_SOURCES.DTE_MAHARASHTRA
  },

  {
    id: 'route_bsc_cs_analytics',
    code: 'UNIV-BSC',
    titleEn: '3-Year B.Sc Computer Science / Data Analytics / BCA',
    titleMr: '३-वर्षीय B.Sc संगणकशास्त्र / डेटा अ‍ॅनालिटिक्स / BCA',
    stage: 'class_11_12',
    category: 'degree',
    summaryEn: 'University degree focusing on software development, algorithms, databases, statistics, and business computing. Offered across Mumbai, Pune (SPPU), BAMU, and other Maharashtra universities.',
    summaryMr: 'सॉफ्टवेअर, अल्गोरिदम, डेटाबेस, सांख्यिकी आणि संगणकीय ज्ञानावर आधारित पदवी. मुंबई विद्यापीठ, SPPU पुणे, BAMU इत्यादींमध्ये उपलब्ध.',
    durationMonths: 36,
    durationDisplayEn: '3 Years (6 Semesters)',
    durationDisplayMr: '३ वर्षे (६ सेमिस्टर)',
    costBand: 'low',
    costDisplayEn: '₹12,000 – ₹45,000 / year (Govt/Affiliated Colleges)',
    costDisplayMr: '₹१२,००० – ₹४५,००० / वर्ष (शासकीय/संलग्न महाविद्यालये)',
    prerequisites: [
      'Passed Class 12 (HSC Science or Commerce with Mathematics for specific universities)',
      'Minimum qualifying aggregate marks (typically 45-50%)'
    ],
    mandatorySubjects: ['Mathematics / Statistics in 12th recommended or compulsory'],
    entranceExams: ['MAH-B.C.A. CET (conducted by State CET Cell for AICTE-approved BCA) or University merit'],
    possibleNextSteps: ['Junior Data Analyst', 'Front-End Web Developer', 'MCA via MAH-MCA-CET', 'M.Sc Data Science'],
    supportedCareers: ['car_data_analyst', 'car_front_end_dev', 'car_python_dev', 'car_business_analyst'],
    advantagesEn: [
      'More affordable and flexible schedule compared to 4-year engineering.',
      'Faster completion (3 years), allowing earlier entry into entry-level tech roles.',
      'Strong eligibility for MCA degree (2 years) which provides equivalence to B.Tech/B.E. in software recruitment.'
    ],
    advantagesMr: [
      'इंजिनिअरिंगच्या तुलनेने किफायतशीर फी आणि लवचिक अभ्यासक्रम.',
      '३ वर्षांत पदवी पूर्ण होऊन लवकर नोकरी किंवा फ्रीलान्सिंग सुरू करता येते.',
      'पुढे MCA (२ वर्षे) करून इंजिनिअरिंगच्या तोडीचे करिअर घडवता येते.'
    ],
    tradeoffsEn: [
      'Requires self-directed project building and portfolio evidence, as campus tech placements vary by college.',
      'Some global engineering licenses require 4-year undergraduate degrees.'
    ],
    tradeoffsMr: [
      'कॅम्पस प्लेसमेंट मर्यादित असल्यास स्वतःहून प्रोजेक्ट्स व पोर्टफोलिओ तयार करावा लागतो.',
      'काही परदेशी पदव्युत्तर अभ्यासक्रमांसाठी ४-वर्षीय पदवीची अट असते.'
    ],
    verificationChecklistEn: [
      'Check whether your preferred university requires Mathematics in Class 12 for admission.',
      'Confirm whether the institution follows National Education Policy (NEP 2020) 4-year honors option.',
      'Verify syllabus includes modern languages like Python, SQL, and Web Frameworks.'
    ],
    verificationChecklistMr: [
      'प्रवेशासाठी १२वीत गणित अनिवार्य आहे का ते विद्यापीठ नियमावलीतून तपासा.',
      'महाविद्यालयात NEP 2020 अंतर्गत ४-वर्षीय ऑनर्स पर्याय उपलब्ध आहे का ते पहा.',
      'अभ्यासक्रमात पायथन, एसक्यूएल व आधुनिक वेब तंत्रज्ञान समाविष्ट असल्याची खात्री करा.'
    ],
    primarySource: OFFICIAL_SOURCES.MAHA_CET_CELL
  },

  {
    id: 'route_nats_apprenticeship',
    code: 'NATS-IND',
    titleEn: '1-Year Industrial Apprenticeship Scheme (NATS / NAPS)',
    titleMr: '१-वर्षीय औद्योगिक शिकाऊ उमेदवारी (NATS / NAPS अप्रेंटिसशिप)',
    stage: 'diploma_iti',
    category: 'apprenticeship',
    summaryEn: 'Government-supported practical on-the-job training in industrial companies (Tata Motors, Mahindra, Bajaj Auto, MSEDCL, L&T, etc.) with monthly stipend and official National Apprenticeship Certificate.',
    summaryMr: 'टाटा, महिंद्रा, बजाज, महावितरण इत्यादी उद्योगांमध्ये प्रत्यक्ष कामावरील प्रशिक्षण. दरमहा विद्यावेतन व राष्ट्रीय प्रमाणपत्र.',
    durationMonths: 12,
    durationDisplayEn: '1 Year (12 Months)',
    durationDisplayMr: '१ वर्ष (१२ महिने)',
    costBand: 'very_low',
    costDisplayEn: 'Zero cost; Learner receives monthly stipend ₹8,000 – ₹13,000',
    costDisplayMr: 'मोफत; उमेदवाराला दरमहा ₹८,००० – ₹१३,००० विद्यावेतन मिळते',
    prerequisites: [
      'Completed ITI Trade (NCVT/SCVT) or Diploma in Engineering within past 3 years',
      'Registered on official national portal (nats.education.gov.in / apprenticeshipindia.gov.in)',
      'Never previously enrolled in an approved apprenticeship'
    ],
    entranceExams: ['Interview / Trade test or Merit list by participating industrial establishment'],
    possibleNextSteps: [
      'Permanent Technician / Junior Engineer role in same or allied company',
      'National Apprenticeship Certificate (NAC) qualification',
      'Direct Second Year lateral degree entry or higher certifications'
    ],
    supportedCareers: ['car_solar_electrician', 'car_python_dev'],
    advantagesEn: [
      'Immediate financial independence with legally mandated minimum stipends.',
      'Direct industrial shop-floor experience that converts classroom theory into real competence.',
      'High conversion rate to permanent technician / plant roles in Maharashtra manufacturing belts.'
    ],
    advantagesMr: [
      'दरमहा विद्यावेतनामुळे तात्काळ आर्थिक आधार मिळतो.',
      'कारखान्यातील प्रत्यक्ष कामाचा अनुभव मिळून आत्मविश्वास वाढतो.',
      'चांगली कामगिरी असल्यास त्याच कंपनीत कायमस्वरूपी नोकरी मिळण्याची दाट शक्यता.'
    ],
    tradeoffsEn: [
      'Contractual duration of 1 year without guaranteed permanent absorption.',
      'Heavy shift hours in plant environments.'
    ],
    tradeoffsMr: [
      '१ वर्षाचा करार असतो, कायमस्वरूपी नोकरीची १००% हमी नसते.',
      'शिफ्ट ड्युटी आणि औद्योगिक शिस्तीचे पालन करावे लागते.'
    ],
    verificationChecklistEn: [
      'Register your profile on nats.education.gov.in with bank account and Aadhaar seeding.',
      'Check stipend rate offered by the industry against statutory minimums.',
      'Confirm the establishment provides formal skill logbooks.'
    ],
    verificationChecklistMr: [
      'nats.education.gov.in वर बँक खाते व आधार लिंक करून नोंदणी करा.',
      'कंपनीकडून मिळणारे विद्यावेतन अधिकृत नियमांनुसार आहे का ते पहा.',
      'कामाचा अधिकृत लॉगबुक व प्रमाणपत्र मिळण्याची खात्री करा.'
    ],
    primarySource: OFFICIAL_SOURCES.NATS_APPRENTICE,
    secondarySources: [OFFICIAL_SOURCES.NCS_INDIA]
  },

  {
    id: 'route_mpsc_competitive',
    code: 'GOV-MPSC',
    titleEn: 'Maharashtra State Public Service / Banking Examinations',
    titleMr: 'महाराष्ट्र राज्य लोकसेवा (MPSC) व बँकिंग स्पर्धा परीक्षा',
    stage: 'graduate',
    category: 'competitive_exam',
    summaryEn: 'Structured preparation for government administrative, taxation, police, and public sector banking exams (MPSC Rajyaseva, Group B/C, IBPS PO/Clerk, SBI).',
    summaryMr: 'MPSC राज्यसेवा, गट ब/क, पोलीस भरती आणि राष्ट्रीयीकृत बँकिंग (IBPS/SBI) परीक्षांची सुनियोजित तयारी.',
    durationMonths: 18,
    durationDisplayEn: '12 to 24 Months Dedicated Preparation',
    durationDisplayMr: '१२ ते २४ महिने सातत्यपूर्ण तयारी',
    costBand: 'low',
    costDisplayEn: 'Self-study ₹5,000; Coaching ₹25,000 – ₹70,000',
    costDisplayMr: 'स्वयंअध्ययन ₹५,०००; मार्गदर्शनासह ₹२५,००० – ₹७०,०००',
    prerequisites: [
      'Graduation degree in any discipline from a recognized Indian university',
      'Age criteria: 19 to 38 years (open), with relaxation for reserved categories',
      'Fluency in Marathi language (compulsory paper and state administration requirements)'
    ],
    mandatorySubjects: ['General Studies (History, Polity, Geography of Maharashtra)', 'Marathi & English Grammar', 'CSAT / Aptitude'],
    entranceExams: ['MPSC Combined Exam (Group B & C)', 'MPSC State Services (Rajyaseva)', 'IBPS PO / Clerk'],
    possibleNextSteps: [
      'State Civil Services Officer (Deputy Collector, Tehsildar, DySP)',
      'Sales Tax Inspector (STI) / Police Sub-Inspector (PSI) / ASO',
      'Bank Probationary Officer (PO) / Clerk'
    ],
    supportedCareers: ['car_public_service', 'car_business_analyst'],
    advantagesEn: [
      'High job security, pension benefits, prestige, and direct public impact.',
      'Open to graduates of any educational stream (Arts, Commerce, Science, Engineering).',
      'Syllabus aligns heavily with state governance and public law.'
    ],
    advantagesMr: [
      'उत्कृष्ट नोकरीची सुरक्षा, सन्मान आणि जनतेची सेवा करण्याची थेट संधी.',
      'कोणत्याही शाखेचा पदवीधर (कला, वाणिज्य, विज्ञान, इंजिनिअरिंग) पात्र असतो.',
      'अभ्यासक्रमात महाराष्ट्राचा इतिहास, भूगोल व राज्यव्यवस्थेवर विशेष भर.'
    ],
    tradeoffsEn: [
      'Low selection percentage due to millions of aspirants; uncertainty in exam cycles.',
      'Requires parallel backup career strategy (skill building) to mitigate preparation risk.'
    ],
    tradeoffsMr: [
      'स्पर्धा अत्यंत तीव्र असते आणि निवडीचे प्रमाण कमी असते.',
      'केवळ स्पर्धा परीक्षेवर अवलंबून न राहता सोबत पर्यायी नोकरी कौशल्ये (Backup Plan) ठेवणे अत्यावश्यक.'
    ],
    verificationChecklistEn: [
      'Review latest MPSC exam notification and updated descriptive exam pattern at mpsc.gov.in.',
      'Confirm age criteria, domicile certificate, and non-creamy layer validity.',
      'Commit to a structured 12-month study calendar with weekly mock tests.'
    ],
    verificationChecklistMr: [
      'mpsc.gov.in वरील नवीनतम अभ्यासक्रम व परीक्षा पद्धती तपासा.',
      'डोमिसाईल आणि आवश्यक कागदपत्रांची वैधता तपासा.',
      'परीक्षेच्या तयारीसोबतच एका विशिष्ट वेळेत पर्यायी कौशल्यांची योजना तयार ठेवा.'
    ],
    primarySource: OFFICIAL_SOURCES.MPSC_OFFICIAL
  },

  {
    id: 'route_grad_tech_transition',
    code: 'GRAD-TECH',
    titleEn: 'Graduate Career Transition & Role-Ready Skill Track',
    titleMr: 'पदवीधर करिअर संक्रमण आणि कौशल्य विकास मार्ग',
    stage: 'graduate',
    category: 'degree',
    summaryEn: 'Accelerated skill-building track for graduates in any stream transitioning into digital analytics, web development, product operations, or UI/UX through proof-of-work portfolios.',
    summaryMr: 'पदवीधरांसाठी डेटा अ‍ॅनालिटिक्स, वेब डेव्हलपमेंट किंवा UI/UX क्षेत्रात जाण्यासाठी प्रोजेक्ट व पोर्टफोलिओवर आधारित मार्ग.',
    durationMonths: 6,
    durationDisplayEn: '4 to 8 Months Intensive Practice',
    durationDisplayMr: '४ ते ८ महिने सराव व प्रोजेक्ट्स',
    costBand: 'low',
    costDisplayEn: '₹0 (Open Source/Self-Paced) to ₹25,000 (Specialized Bootcamps)',
    costDisplayMr: '₹० (ओपन सोर्स/स्वयंअध्ययन) ते ₹२५,००० (विशेष कार्यशाळा)',
    prerequisites: [
      'Completed Bachelor degree in any discipline',
      'Basic digital literacy and consistent access to computer/laptop',
      'Willingness to spend 15-20 hours weekly on hands-on practical activities'
    ],
    entranceExams: ['Industry technical assessments / portfolio reviews'],
    possibleNextSteps: ['Junior Data Analyst', 'Front-End Developer', 'Business Analyst', 'Digital Marketing Associate'],
    supportedCareers: ['car_data_analyst', 'car_front_end_dev', 'car_python_dev', 'car_ui_ux_designer', 'car_digital_marketing'],
    advantagesEn: [
      'Focuses 100% on verifiable skills and GitHub / Figma proof-of-work instead of credentials alone.',
      'Directly targets high-demand entry-level roles in Pune, Mumbai, and remote teams.',
      'Transferable skills from prior degree (e.g. commerce accounts or psychology design) give unique leverage.'
    ],
    advantagesMr: [
      'केवळ पदवीऐवजी प्रत्यक्ष प्रोजेक्ट्स आणि पोर्टफोलिओवर भर.',
      'पुणे, मुंबई आणि रिमोट कंपन्यांमधील सुरुवातीच्या पदांसाठी उपयुक्त.',
      'मागील पदवीच्या ज्ञानाचा (उदा. कॉमर्स किंवा मानसशास्त्र) नव्या भूमिकेत फायदा होतो.'
    ],
    tradeoffsEn: [
      'Requires disciplined self-motivation and daily habit building.',
      'Does not guarantee placement unless backed by solid portfolio evidence.'
    ],
    tradeoffsMr: [
      'नियमित स्वयंशिस्त आणि दररोज अभ्यासाची गरज असते.',
      'केवळ प्रमाणपत्र पुरेसे नसते, प्रत्यक्ष कामाचा पुरावा दाखवावा लागतो.'
    ],
    verificationChecklistEn: [
      'Complete a baseline skill diagnostic to identify specific competency gaps.',
      'Publish at least 3 concrete projects in your Proof-of-Skill passport.',
      'Prepare an ATS-optimized resume and practice technical interview communication.'
    ],
    verificationChecklistMr: [
      'कौशल्यांमधील त्रुटी समजण्यासाठी मूलभूत मूल्यांकन पूर्ण करा.',
      'कौशल्य पासपोर्टमध्ये किमान ३ प्रत्यक्ष प्रोजेक्ट्स तयार करून नोंदवा.',
      'रेझ्युमे अद्ययावत करून संवादाचा सराव करा.'
    ],
    primarySource: OFFICIAL_SOURCES.NCS_INDIA
  }
];
