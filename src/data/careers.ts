import { CareerRole } from '../types';
import { OFFICIAL_SOURCES } from './pathways';

export interface CareerFamily {
  id: string;
  nameEn: string;
  nameMr: string;
  descriptionEn: string;
  descriptionMr: string;
  iconName: string;
}

export const CAREER_FAMILIES: CareerFamily[] = [
  {
    id: 'fam_tech',
    nameEn: 'Technology & Software',
    nameMr: 'तंत्रज्ञान आणि सॉफ्टवेअर',
    descriptionEn: 'Coding, web applications, data systems, and digital infrastructure.',
    descriptionMr: 'कोडिंग, वेब ॲप्लिकेशन्स, डेटा प्रणाली आणि डिजिटल पायाभूत सुविधा.',
    iconName: 'Code'
  },
  {
    id: 'fam_data_finance',
    nameEn: 'Data, Business & Finance',
    nameMr: 'डेटा, व्यवसाय आणि वित्त',
    descriptionEn: 'Business analytics, market research, accounting, taxation, and trade operations.',
    descriptionMr: 'व्यवसाय विश्लेषण, मार्केट संशोधन, लेखाकर्म, करप्रणाली आणि व्यापार.',
    iconName: 'TrendingUp'
  },
  {
    id: 'fam_design_creative',
    nameEn: 'Design & Creative Media',
    nameMr: 'डिझाइन आणि सर्जनशील कला',
    descriptionEn: 'User interfaces, visual storytelling, brand identity, and product experience.',
    descriptionMr: 'वापरकर्ता अनुभव (UI/UX), व्हिज्युअल डिझाइन आणि सर्जनशील सादरीकरण.',
    iconName: 'Palette'
  },
  {
    id: 'fam_technical_trades',
    nameEn: 'Skilled Technical Occupations',
    nameMr: 'कुशल तांत्रिक आणि औद्योगिक व्यवसाय',
    descriptionEn: 'Electrical machinery, solar power, industrial robotics, and engineering maintenance.',
    descriptionMr: 'विद्युत उपकरणे, सौर ऊर्जा, औद्योगिक मशिनरी आणि तांत्रिक देखभाल.',
    iconName: 'Wrench'
  },
  {
    id: 'fam_health_science',
    nameEn: 'Healthcare & Applied Sciences',
    nameMr: 'आरोग्यसेवा आणि उपयोजित विज्ञान',
    descriptionEn: 'Diagnostics, clinical assistance, laboratory technology, and community health.',
    descriptionMr: 'रोगनिदान, लॅब तंत्रज्ञान, क्लिनिकल सहाय्य आणि सार्वजनिक आरोग्य.',
    iconName: 'Activity'
  },
  {
    id: 'fam_public_service',
    nameEn: 'Public Service & Social Impact',
    nameMr: 'प्रशासन, सार्वजनिक सेवा आणि सामाजिक कार्य',
    descriptionEn: 'State governance, community development, education, and legal rights.',
    descriptionMr: 'प्रशासकीय सेवा, सामाजिक संस्था, शिक्षण आणि सार्वजनिक धोरण.',
    iconName: 'Building2'
  }
];

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'car_data_analyst',
    titleEn: 'Junior Data Analyst',
    titleMr: 'कनिष्ठ डेटा विश्लेषक (Junior Data Analyst)',
    familyId: 'fam_data_finance',
    familyNameEn: 'Data, Business & Finance',
    familyNameMr: 'डेटा, व्यवसाय आणि वित्त',
    summaryEn: 'Collects, cleans, and analyzes organizational data to discover trends, produce executive dashboards, and assist business decisions.',
    summaryMr: 'माहिती (Data) गोळा करणे, ती व्यवस्थित करणे आणि त्यातून व्यवसाय वाढीसाठी महत्त्वाचे निष्कर्ष व डॅशबोर्ड तयार करणे.',
    dayInTheLifeEn: 'Morning starts by checking automated reporting pipelines in SQL or Excel. Midday is spent writing Python/Pandas scripts to clean messy transaction records and creating visual charts in Power BI. Afternoon involves discussing findings with the operations manager.',
    dayInTheLifeMr: 'सकाळच्या वेळी एक्सेल किंवा एसक्यूएलमधील रोजच्या रिपोर्टची तपासणी. दुपारच्या वेळेत पायथनद्वारे डेटा स्वच्छ करणे आणि पॉवर बीआयमध्ये आलेख तयार करणे. संध्याकाळी टीम प्रमुखांसोबत निष्कर्षांवर चर्चा.',
    typicalTasksEn: [
      'Write SQL queries to extract data from relational databases.',
      'Clean raw data using Excel formulas or Python (Pandas).',
      'Build interactive dashboards in Power BI, Tableau, or Google Looker Studio.',
      'Present monthly sales or performance summaries to management teams.'
    ],
    typicalTasksMr: [
      'डेटाबेसवरून माहिती काढण्यासाठी SQL क्वेरी लिहिणे.',
      'एक्सेल किंवा पायथनच्या साहाय्याने कच्चा डेटा स्वच्छ व व्यवस्थित करणे.',
      'पॉवर बीआय किंवा टेबलूमध्ये संवादात्मक डॅशबोर्ड तयार करणे.',
      'कंपनीच्या कामगिरीचे सादरीकरण व्यवस्थापनासमोर करणे.'
    ],
    foundationalSkills: ['Spreadsheets (Advanced Excel)', 'SQL Queries', 'Data Visualization', 'Logical Reasoning', 'Basic Python'],
    coreCompetencies: ['Data Cleaning', 'Exploratory Data Analysis', 'Dashboard Design', 'Business Metric Interpretation'],
    applicableRoutes: ['route_bsc_cs_analytics', 'route_fyjc_science', 'route_fyjc_commerce', 'route_btech_degree', 'route_grad_tech_transition'],
    explorationActivityTitleEn: 'Analyze a Maharashtra Crop or Sales Dataset in Spreadsheets',
    explorationActivityTitleMr: 'स्प्रेडशीटमध्ये महाराष्ट्रातील शेतमाल किंवा विक्री डेटाचे विश्लेषण करा',
    explorationActivityDescEn: 'Download a simple 50-row CSV of district-wise crop yields or sales, use pivot tables to find the top 3 performing districts, and summarize in 3 bullet points.',
    explorationActivityDescMr: '५० ओळींचा नमुना डेटा घेऊन पिव्होट टेबलद्वारे सर्वाधिक उत्पादन असलेल्या ३ जिल्ह्यांची माहिती काढा आणि ३ निष्कर्षांमध्ये मांडा.',
    relatedRoles: ['car_business_analyst', 'car_python_dev'],
    sources: [OFFICIAL_SOURCES.NCS_INDIA]
  },

  {
    id: 'car_front_end_dev',
    titleEn: 'Front-End Web Developer',
    titleMr: 'फ्रंट-एंड वेब डेव्हलपर (Front-End Web Developer)',
    familyId: 'fam_tech',
    familyNameEn: 'Technology & Software',
    familyNameMr: 'तंत्रज्ञान आणि सॉफ्टवेअर',
    summaryEn: 'Builds responsive, accessible user interfaces for websites and web applications using HTML, CSS, JavaScript, and modern frameworks like React.',
    summaryMr: 'वेबसाइट्स आणि ॲप्सचे सुंदर, सुलभ आणि मोबाईलवर व्यवस्थित चालणारे स्क्रीन (User Interfaces) तयार करणे.',
    dayInTheLifeEn: 'Reviews Figma designs shared by the UI designer, codes the user interface in React with Tailwind CSS, tests responsiveness across mobile and desktop browsers, and pushes code via Git.',
    dayInTheLifeMr: 'डिझायनरने दिलेली डिझाइन पाहून रिअ‍ॅक्ट (React) आणि सीएसएसमध्ये कोड लिहिणे, मोबाईलवर स्क्रीन व्यवस्थित दिसते का ते तपासणे आणि गिटवर (Git) कोड सेव्ह करणे.',
    typicalTasksEn: [
      'Translate UI designs and wireframes into clean, accessible code.',
      'Develop interactive forms, navigation menus, and animations.',
      'Connect frontend components to backend REST/GraphQL APIs.',
      'Optimize web pages for fast loading speed on mobile networks.'
    ],
    typicalTasksMr: [
      'डिझाइनचे रूपांतर वापरण्यायोग्य वेब पानांमध्ये करणे.',
      'संवादात्मक फॉर्म्स, मेनू आणि ॲनिमेशन्स तयार करणे.',
      'माहिती दाखवण्यासाठी बॅकएंड API शी स्क्रीन जोडणे.',
      'मोबाईल नेटवर्कवर वेबसाईट वेगाने उघडण्यासाठी ऑप्टिमाइझ करणे.'
    ],
    foundationalSkills: ['HTML5 & Semantic Markup', 'Modern CSS & Flexbox/Grid', 'JavaScript Fundamentals', 'Git & GitHub'],
    coreCompetencies: ['React Components & Hooks', 'Responsive Layouts', 'API Integration', 'Cross-Browser Testing'],
    applicableRoutes: ['route_polytechnic_diploma', 'route_btech_degree', 'route_bsc_cs_analytics', 'route_dse_lateral', 'route_grad_tech_transition'],
    explorationActivityTitleEn: 'Build a Personal Bio Page with Clean HTML & CSS',
    explorationActivityTitleMr: 'HTML आणि CSS वापरून स्वतःचे एक साधे वेबपेज तयार करा',
    explorationActivityDescEn: 'Create a clean webpage introducing your interests, education, and 3 favorite resources with proper heading hierarchy and responsive layout.',
    explorationActivityDescMr: 'स्वतःची माहिती, आवडीचे विषय आणि ३ उपयुक्त लिंक्स असलेले साधे, सुटसुटीत वेबपेज तयार करा.',
    relatedRoles: ['car_python_dev', 'car_ui_ux_designer'],
    sources: [OFFICIAL_SOURCES.NCS_INDIA]
  },

  {
    id: 'car_python_dev',
    titleEn: 'Junior Python Developer',
    titleMr: 'कनिष्ठ पायथन डेव्हलपर (Junior Python Developer)',
    familyId: 'fam_tech',
    familyNameEn: 'Technology & Software',
    familyNameMr: 'तंत्रज्ञान आणि सॉफ्टवेअर',
    summaryEn: 'Develops backend services, automated scripts, API endpoints, and data processing utilities using the Python language.',
    summaryMr: 'पायथन भाषेचा वापर करून सर्व्हर, स्वयंचलित स्क्रिप्ट्स (Automation) आणि डेटा प्रक्रिया करणारी प्रणाली तयार करणे.',
    dayInTheLifeEn: 'Writes Python scripts to automate daily file processing, tests REST APIs in FastAPI or Flask, handles error conditions, and collaborates with the frontend team to supply required data.',
    dayInTheLifeMr: 'दररोजच्या कामांसाठी ऑटोमेशन स्क्रिप्ट्स लिहिणे, फास्टएपीआय (FastAPI) द्वारे डेटा सर्व्हिसेस तयार करणे आणि डेटा सुरक्षितपणे साठवणे.',
    typicalTasksEn: [
      'Write structured Python functions and object-oriented modules.',
      'Build server API endpoints that return clean JSON data.',
      'Automate repetitive data collection and file transformation.',
      'Write unit tests and debug code performance issues.'
    ],
    typicalTasksMr: [
      'पायथन फंक्शन्स आणि क्लासेस तयार करणे.',
      'माहितीची देवाणघेवाण करण्यासाठी API एंडपॉईंट्स बनवणे.',
      'वारंवार लागणाऱ्या कामांचे ऑटोमेशन करणे.',
      'कोडमधील चुका (Bugs) शोधून त्या दुरुस्त करणे.'
    ],
    foundationalSkills: ['Python Syntax & Data Structures', 'Algorithms & Logic', 'File Handling & JSON', 'Git Version Control'],
    coreCompetencies: ['Backend APIs (FastAPI/Flask)', 'SQL Database Integration', 'Automated Testing', 'Error Handling'],
    applicableRoutes: ['route_polytechnic_diploma', 'route_btech_degree', 'route_bsc_cs_analytics', 'route_grad_tech_transition'],
    explorationActivityTitleEn: 'Write a Python Script to Calculate Student Grades',
    explorationActivityTitleMr: 'विद्यार्थ्यांचे ग्रेड मोजणारी साधी पायथन स्क्रिप्ट लिहा',
    explorationActivityDescEn: 'Write a 25-line Python script that takes marks for 5 subjects, calculates percentage, assigns grade according to Maharashtra State Board norms, and prints a neat report.',
    explorationActivityDescMr: '५ विषयांचे गुण घेऊन टक्केवारी काढणारी आणि बोर्डाच्या नियमांनुसार ग्रेड दाखवणारी २५ ओळींची छोटी स्क्रिप्ट लिहा.',
    relatedRoles: ['car_data_analyst', 'car_front_end_dev'],
    sources: [OFFICIAL_SOURCES.NCS_INDIA]
  },

  {
    id: 'car_ui_ux_designer',
    titleEn: 'UI/UX Designer',
    titleMr: 'वापरकर्ता अनुभव व स्क्रीन डिझायनर (UI/UX Designer)',
    familyId: 'fam_design_creative',
    familyNameEn: 'Design & Creative Media',
    familyNameMr: 'डिझाइन आणि सर्जनशील कला',
    summaryEn: 'Researches user needs, creates wireframes, and designs intuitive, beautiful visual interfaces for digital applications in Figma.',
    summaryMr: 'वापरकर्त्यांच्या गरजा समजून घेणे, ॲप्सचे नकाशे (Wireframes) आखणे आणि फिग्मामध्ये (Figma) सुलभ व आकर्षक स्क्रीन डिझाइन करणे.',
    dayInTheLifeEn: 'Interviews two learners to understand where they get stuck in an app, sketches layout options on paper, builds interactive prototypes in Figma, and reviews color contrast and typography for accessibility.',
    dayInTheLifeMr: 'ॲप वापरणाऱ्यांशी बोलून त्यांच्या अडचणी समजून घेणे, कागदावर लेआउट रेखाटणे, फिग्मामध्ये प्रोटोटाइप बनवणे आणि रंगांचे प्रमाण तपासणे.',
    typicalTasksEn: [
      'Conduct user interviews and identify usability friction.',
      'Create wireframes, user flow diagrams, and site maps.',
      'Design high-fidelity UI screens in Figma or Penpot.',
      'Ensure WCAG accessibility contrast and clear typography hierarchy.'
    ],
    typicalTasksMr: [
      'वापरकर्त्यांच्या अडचणी शोधण्यासाठी साध्या मुलाखती घेणे.',
      'ॲपचा आराखडा आणि फ्लो तयार करणे.',
      'फिग्मामध्ये अंतिम स्क्रीन व बटन्स डिझाइन करणे.',
      'वाचनीयता आणि रंगांची सुसंगतता तपासणे.'
    ],
    foundationalSkills: ['Design Principles & Layout', 'Typography & Color Theory', 'Empathy & User Research', 'Figma Basics'],
    coreCompetencies: ['User Journey Mapping', 'Interactive Prototyping', 'Design Systems', 'Usability Testing'],
    applicableRoutes: ['route_fyjc_arts', 'route_bsc_cs_analytics', 'route_grad_tech_transition'],
    explorationActivityTitleEn: 'Redesign a Cluttered Bus Ticket or Admission Card in Figma',
    explorationActivityTitleMr: 'फिग्मा किंवा कागदावर एसटी बस तिकीट किंवा प्रवेश अर्जाची सोपी डिझाइन बनवा',
    explorationActivityDescEn: 'Take a confusing paper form or ticket, analyze what information is most important, and redesign it with clear hierarchy so anyone can understand it in 5 seconds.',
    explorationActivityDescMr: 'एखादा किचकट फॉर्म निवडून, त्यातील महत्त्वाची माहिती ठळक दिसेल असा सुटसुटीत आराखडा कागदावर किंवा फिग्मात तयार करा.',
    relatedRoles: ['car_front_end_dev', 'car_digital_marketing'],
    sources: [OFFICIAL_SOURCES.NCS_INDIA]
  },

  {
    id: 'car_business_analyst',
    titleEn: 'Junior Business Analyst',
    titleMr: 'कनिष्ठ व्यवसाय विश्लेषक (Junior Business Analyst)',
    familyId: 'fam_data_finance',
    familyNameEn: 'Data, Business & Finance',
    familyNameMr: 'डेटा, व्यवसाय आणि वित्त',
    summaryEn: 'Acts as the bridge between business stakeholders and technical developers by documenting requirements, mapping processes, and validating solutions.',
    summaryMr: 'व्यवसायाच्या गरजा आणि सॉफ्टवेअर डेव्हलपर्स यांच्यातील दुवा; प्रक्रियांचा नकाशा तयार करणे आणि योग्य उपाय सुचवणे.',
    dayInTheLifeEn: 'Meets with bank or sales managers to understand what new report they need, documents user stories and acceptance criteria, reviews development sprint progress, and tests new features before release.',
    dayInTheLifeMr: 'विभागातील अधिकाऱ्यांशी बोलून त्यांना नक्की काय हवे आहे ते समजून घेणे, गरजांची कागदपत्रे तयार करणे आणि नवीन फिचर्स बरोबर आहेत का ते तपासणे.',
    typicalTasksEn: [
      'Document functional requirements and user stories.',
      'Map current-state vs future-state business processes.',
      'Coordinate between clients and technical teams.',
      'Conduct User Acceptance Testing (UAT) before launches.'
    ],
    typicalTasksMr: [
      'कामाच्या गरजांची स्पष्ट कागदपत्रे तयार करणे.',
      'सध्याच्या कामाच्या पद्धतीत काय सुधारणा हवी याचा फ्लोचार्ट बनवणे.',
      'ग्राहक आणि तांत्रिक टीममध्ये समन्वय साधणे.',
      'नवे सॉफ्टवेअर वापरण्यास योग्य आहे का याची चाचणी घेणे.'
    ],
    foundationalSkills: ['Active Listening & Communication', 'Process Flowcharting', 'Analytical Thinking', 'Documentation'],
    coreCompetencies: ['Requirement Gathering', 'Use Case Modeling', 'Stakeholder Management', 'User Acceptance Testing'],
    applicableRoutes: ['route_fyjc_commerce', 'route_bsc_cs_analytics', 'route_btech_degree', 'route_grad_tech_transition'],
    explorationActivityTitleEn: 'Map the Step-by-Step Process of College Admission',
    explorationActivityTitleMr: 'महाविद्यालयीन प्रवेश प्रक्रियेचा टप्प्याटप्प्याचा फ्लोचार्ट बनवा',
    explorationActivityDescEn: 'Create a visual flow diagram showing the 6 steps from receiving 10th/12th results to finalizing college admission, including what happens if documents are missing.',
    explorationActivityDescMr: 'निकाल लागल्यापासून ते प्रवेश निश्चित होईपर्यंतच्या ६ टप्प्यांचा स्पष्ट फ्लोचार्ट तयार करा, ज्यामध्ये कागदपत्रे अपूर्ण असल्यास काय करावे हेही दाखवा.',
    relatedRoles: ['car_data_analyst', 'car_digital_marketing'],
    sources: [OFFICIAL_SOURCES.NCS_INDIA]
  },

  {
    id: 'car_digital_marketing',
    titleEn: 'Digital Marketing & Content Associate',
    titleMr: 'डिजिटल मार्केटिंग व कंटेंट असोसिएट (Digital Marketing Associate)',
    familyId: 'fam_data_finance',
    familyNameEn: 'Data, Business & Finance',
    familyNameMr: 'डेटा, व्यवसाय आणि वित्त',
    summaryEn: 'Manages online campaigns, social media channels, search optimization (SEO), and content creation to grow audiences and customer engagement.',
    summaryMr: 'सोशल मीडिया, सर्च इंजिन (SEO) आणि ऑनलाइन जाहिरातींच्या माध्यमातून ब्रँडची ओळख व ग्राहक वाढवणे.',
    dayInTheLifeEn: 'Reviews weekly website traffic in Google Analytics, drafts bilingual social media posts in Marathi and English, sets up targeted local ad campaigns, and monitors customer comments and queries.',
    dayInTheLifeMr: 'वेबसाईटवर किती लोक आले याची आकडेवारी तपासणे, मराठी व इंग्रजीमध्ये सोशल मीडिया पोस्ट्स तयार करणे आणि जाहिरातींची कामगिरी पाहणे.',
    typicalTasksEn: [
      'Create bilingual social media content and educational graphics.',
      'Optimize blog articles and product pages for search engines (SEO).',
      'Manage local Google Business profiles and ad campaigns.',
      'Analyze click-through rates and customer acquisition cost.'
    ],
    typicalTasksMr: [
      'मराठी व इंग्रजीत सोशल मीडिया माहितीपत्रके तयार करणे.',
      'गुगल सर्चमध्ये वर दिसण्यासाठी लेखांचे SEO करणे.',
      'गुगल बिझनेस प्रोफाइल आणि स्थानिक जाहिराती चालवणे.',
      'जाहिरातींचा खर्च आणि त्यातून मिळालेला प्रतिसाद मोजणे.'
    ],
    foundationalSkills: ['Written Communication (En/Mr)', 'Creative Thinking', 'Basic Graphic Design (Canva)', 'Data Interpretation'],
    coreCompetencies: ['Search Engine Optimization (SEO)', 'Content Strategy', 'Social Media Analytics', 'Ad Campaign Management'],
    applicableRoutes: ['route_fyjc_commerce', 'route_fyjc_arts', 'route_grad_tech_transition'],
    explorationActivityTitleEn: 'Draft a 3-Post Launch Campaign for a Local Maharashtra Product',
    explorationActivityTitleMr: 'स्थानिक उत्पादनासाठी ३ पोस्ट्सची सोशल मीडिया मोहीम आखा',
    explorationActivityDescEn: 'Choose a real Maharashtra regional specialty (e.g. Kolhapuri chappals, Alphonso mangoes, or Paithani sarees) and write 3 engaging Instagram posts with captions and hashtags in Marathi & English.',
    explorationActivityDescMr: 'महाराष्ट्रातील एका प्रसिद्ध उत्पादनासाठी (उदा. कोल्हापुरी चप्पल, हापूस आंबा, पैठणी) मराठी व इंग्रजीत ३ माहितीपूर्ण व आकर्षक सोशल मीडिया पोस्ट्स लिहा.',
    relatedRoles: ['car_ui_ux_designer', 'car_business_analyst'],
    sources: [OFFICIAL_SOURCES.NCS_INDIA]
  },

  {
    id: 'car_solar_electrician',
    titleEn: 'Solar & Industrial Electrical Technician',
    titleMr: 'सौर ऊर्जा व औद्योगिक विद्युत तंत्रज्ञ (Solar & Electrical Tech)',
    familyId: 'fam_technical_trades',
    familyNameEn: 'Skilled Technical Occupations',
    familyNameMr: 'कुशल तांत्रिक आणि औद्योगिक व्यवसाय',
    summaryEn: 'Installs, tests, and maintains rooftop solar PV systems, industrial electrical control panels, wiring, and inverters according to safety standards.',
    summaryMr: 'सोलर पॅनेल्सची उभारणी, औद्योगिक वीज वायरिंग, कंट्रोल पॅनेल्स आणि इन्व्हर्टरची तपासणी व देखभाल करणे.',
    dayInTheLifeEn: 'Starts with safety briefing at an installation site, inspects wiring diagrams, tests voltage and current using a multimeter, mounts solar inverters, and commissions the rooftop system with the distribution utility (MSEDCL/Mahavitaran).',
    dayInTheLifeMr: 'सुरक्षा उपकरणांची तपासणी, मल्टिमीटरने व्होल्टेज मोजणे, कंट्रोल पॅनेलची जोडणी करणे आणि महावितरणच्या नियमांनुसार सोलर सिस्टमची तपासणी.',
    typicalTasksEn: [
      'Read electrical circuit diagrams and solar array single-line schematics.',
      'Install mounting structures, DC cabling, and grid-tied inverters.',
      'Conduct earth resistance and insulation tests using megger instruments.',
      'Troubleshoot electrical faults in manufacturing machinery.'
    ],
    typicalTasksMr: [
      'इलेक्ट्रिकल सर्किट्स आणि वायरिंगचे नकाशे वाचणे.',
      'सोलर पॅनेल्स, केबल्स आणि इन्व्हर्टरची योग्य जोडणी करणे.',
      'अर्थिंग आणि इन्सुलेशनची सुरक्षा तपासणी करणे.',
      'यंत्रांमधील विजेचे दोष शोधून ते दुरुस्त करणे.'
    ],
    foundationalSkills: ['Electrical Safety Protocols', 'Tool Handling (Multimeter, Megger)', 'Circuit Schematics', 'Mechanical Assembly'],
    coreCompetencies: ['Solar PV Installation', 'Panel Wiring', 'Fault Diagnostics', 'Earthing & Surge Protection'],
    applicableRoutes: ['route_iti_trade', 'route_polytechnic_diploma', 'route_nats_apprenticeship'],
    explorationActivityTitleEn: 'Audit Your Household Electrical Energy Consumption',
    explorationActivityTitleMr: 'घरातील विजेच्या वापराचे छोटे ऑडिट करा',
    explorationActivityDescEn: 'Calculate the total wattage of 5 appliances in your home, estimate daily kilowatt-hours (kWh) used, and determine how many 400W solar panels would be needed to power them.',
    explorationActivityDescMr: 'घरातील ५ उपकरणांचे वॅट तपासा, दररोज किती युनिट (kWh) वीज लागते ते काढा आणि त्यासाठी किती सोलर पॅनेल लागतील याचा हिशोब करा.',
    relatedRoles: ['car_python_dev'],
    sources: [OFFICIAL_SOURCES.DVET_ITI, OFFICIAL_SOURCES.NCS_INDIA]
  },

  {
    id: 'car_accounts_gst',
    titleEn: 'Accounts & GST Compliance Associate',
    titleMr: 'लेखा व जीएसटी कर सहाय्यक (Accounts & GST Associate)',
    familyId: 'fam_data_finance',
    familyNameEn: 'Data, Business & Finance',
    familyNameMr: 'डेटा, व्यवसाय आणि वित्त',
    summaryEn: 'Maintains daily financial ledgers, reconciles bank statements, prepares GST invoices, and files statutory returns for MSMEs and trading businesses.',
    summaryMr: 'दैनिक हिशोब ठेवणे, बँकेचे ताळेबंद जुळवणे, जीएसटी बिले तयार करणे आणि व्यापाऱ्यांचे कर विवरणपत्र भरण्यास मदत करणे.',
    dayInTheLifeEn: 'Enters purchase and sales vouchers into Tally Prime or Zoho Books, reconciles GSTR-2B with purchase ledgers, calculates monthly GST liability, and prepares payroll calculations for company staff.',
    dayInTheLifeMr: 'टॅली किंवा झोहो बुक्समध्ये खरेदी-विक्रीच्या नोंदी करणे, बँकेशी हिशोब जुळवणे, महिन्याचा जीएसटी हिशोब काढणे आणि कर्मचाऱ्यांचे वेतन पत्रक बनवणे.',
    typicalTasksEn: [
      'Record sales, purchases, receipts, and payments in accounting software.',
      'Reconcile bank accounts and debtor/creditor balances monthly.',
      'Prepare GST tax invoices and prepare GSTR-1 / 3B filing summaries.',
      'Assist senior Chartered Accountants during annual audits.'
    ],
    typicalTasksMr: [
      'हिशोबाच्या सॉफ्टवेअरमध्ये जमा-खर्चाच्या नोंदी अचूक करणे.',
      'बँक खात्यांचा मेळ घालणे (Bank Reconciliation).',
      'जीएसटी कर पावती बनवणे व रिटर्न्ससाठी माहिती गोळा करणे.',
      'वार्षिक तपासणीच्या (Audit) वेळी सीए महोदयांना सहकार्य करणे.'
    ],
    foundationalSkills: ['Double Entry Bookkeeping', 'Tally Prime / Accounting Software', 'Arithmetic Precision', 'MS Excel'],
    coreCompetencies: ['GST Invoicing Rules', 'Bank Reconciliation', 'TDS Deductions', 'Financial Statement Preparation'],
    applicableRoutes: ['route_fyjc_commerce', 'route_grad_tech_transition'],
    explorationActivityTitleEn: 'Prepare a Sample 3-Item GST Tax Invoice',
    explorationActivityTitleMr: '३ वस्तूंसाठी नमुना जीएसटी कर पावती तयार करा',
    explorationActivityDescEn: 'Create a neat tax invoice format with CGST and SGST (9% + 9% = 18%), calculating taxable value, tax components, and grand total correctly.',
    explorationActivityDescMr: 'सीजीएसटी आणि एसजीएसटी (९% + ९% = १८%) लावून ३ वस्तूंचे करपात्र मूल्य, कर आणि एकूण रकमेचे अचूक बिल कागदावर किंवा एक्सेलमध्ये बनवा.',
    relatedRoles: ['car_business_analyst', 'car_data_analyst'],
    sources: [OFFICIAL_SOURCES.NCS_INDIA]
  },

  {
    id: 'car_health_tech',
    titleEn: 'Medical Laboratory & Health Diagnostics Assistant',
    titleMr: 'वैद्यकीय प्रयोगशाळा व आरोग्य तपासणी सहाय्यक (Lab Technician)',
    familyId: 'fam_health_science',
    familyNameEn: 'Healthcare & Applied Sciences',
    familyNameMr: 'आरोग्यसेवा आणि उपयोजित विज्ञान',
    summaryEn: 'Operates automated blood and clinical diagnostic instruments, processes pathological specimens, and assists physicians with accurate diagnostic reports.',
    summaryMr: 'रक्त व इतर वैद्यकीय चाचण्यांची आधुनिक उपकरणांद्वारे तपासणी करणे आणि डॉक्टरांना उपचारांसाठी अचूक अहवाल तयार करून देणे.',
    dayInTheLifeEn: 'Calibrates automated biochemistry analyzers, collects patient samples with gentle hygiene protocols, conducts microscopic examination, and verifies sample results against reference ranges.',
    dayInTheLifeMr: 'सकाळच्या वेळी तपासणी उपकरणांचे कॅलिब्रेशन करणे, रुग्णांचे नमुने स्वच्छतेच्या नियमांसह घेणे आणि निष्कर्षांची नोंद करणे.',
    typicalTasksEn: [
      'Prepare and stain biological specimens for microscopic analysis.',
      'Operate automated hematology and biochemistry analyzers.',
      'Maintain sterile laboratory environment and biomedical waste protocols.',
      'Record diagnostic values and flag critical emergency thresholds.'
    ],
    typicalTasksMr: [
      'नमुन्यांची सूक्ष्मदर्शकाखाली तपासणीसाठी तयारी करणे.',
      'रक्त तपासणीच्या ऑटोमॅटिक मशिन्स चालवणे.',
      'लॅबमध्ये स्वच्छता व जैविक कचऱ्याची सुरक्षित विल्हेवाट लावणे.',
      'गंभीर तपासण्यांच्या नोंदी डॉक्टरांच्या तात्काळ निदर्शनास आणणे.'
    ],
    foundationalSkills: ['Laboratory Safety & Hygiene', 'Basic Chemistry & Biology', 'Attention to Precision', 'Patient Empathy'],
    coreCompetencies: ['Specimen Collection', 'Microscopy', 'Analyzer Calibration', 'Quality Control Protocol'],
    applicableRoutes: ['route_fyjc_science'],
    explorationActivityTitleEn: 'Research Normal Human Blood Reference Values',
    explorationActivityTitleMr: 'मानवी रक्ताच्या सामान्य तपासणी मूल्यांची माहिती नोंदवा',
    explorationActivityDescEn: 'Look up standard healthy adult reference ranges for Hemoglobin, Fasting Blood Glucose, and Platelet count, noting why doctors check each value.',
    explorationActivityDescMr: 'हिमोग्लोबिन, रक्तातील साखर (Fasting) आणि प्लेटलेट्सची निरोगी व्यक्तीमधील सामान्य मूल्ये काय असतात आणि ती का महत्त्वाची आहेत ते नोंदवा.',
    relatedRoles: ['car_solar_electrician'],
    sources: [OFFICIAL_SOURCES.NCS_INDIA]
  },

  {
    id: 'car_public_service',
    titleEn: 'Public Service & Community Development Officer',
    titleMr: 'सार्वजनिक सेवा व समाजविकास अधिकारी (Public Service Officer)',
    familyId: 'fam_public_service',
    familyNameEn: 'Public Service & Social Impact',
    familyNameMr: 'प्रशासन, सार्वजनिक सेवा आणि सामाजिक कार्य',
    summaryEn: 'Coordinates government welfare schemes, rural livelihood programs, and citizen administrative services across talukas and municipal councils in Maharashtra.',
    summaryMr: 'शासकीय जनकल्याणकारी योजना, ग्रामीण विकास उपक्रम आणि नागरिकांच्या प्रशासकीय सेवांची प्रभावी अंमलबजावणी करणे.',
    dayInTheLifeEn: 'Inspects a village water conservation or self-help group project, reviews citizen scheme applications for eligibility, meets with local gram panchayat representatives, and submits monthly progress reports to the district collectorate.',
    dayInTheLifeMr: 'गावातील विकासकामांची प्रत्यक्ष पाहणी करणे, नागरिकांच्या अर्जांची पडताळणी करणे, ग्रामपंचायत प्रतिनिधींशी चर्चा करणे आणि जिल्ह्याकडे अहवाल पाठवणे.',
    typicalTasksEn: [
      'Coordinate state and central welfare schemes (housing, health, scholarships).',
      'Resolve citizen grievances through administrative grievance portals.',
      'Monitor development funds and verify completion of public works.',
      'Organize awareness camps in rural and semi-urban communities.'
    ],
    typicalTasksMr: [
      'शासकीय योजनांची (घरकुल, आरोग्य, शिष्यवृत्ती) तळागाळात अंमलबजावणी.',
      'नागरिकांच्या तक्रारींचे निवारण करणे.',
      'विकासकामांची पाहणी करून निधीचा योग्य वापर होत असल्याची खात्री करणे.',
      'योजनांची माहिती देण्यासाठी मार्गदर्शन शिबिरे घेणे.'
    ],
    foundationalSkills: ['Marathi Language Eloquence', 'Empathy for Citizens', 'Understanding of Indian Constitution', 'Administrative Writing'],
    coreCompetencies: ['Public Policy Implementation', 'Citizen Service Delivery', 'Grievance Redressal', 'Inter-departmental Coordination'],
    applicableRoutes: ['route_fyjc_arts', 'route_mpsc_competitive', 'route_grad_tech_transition'],
    explorationActivityTitleEn: 'Investigate a Key Maharashtra Citizen Welfare Scheme',
    explorationActivityTitleMr: 'महाराष्ट्रातील एका महत्त्वाच्या जनहित योजनेचा अभ्यास करा',
    explorationActivityDescEn: 'Research the official eligibility criteria, required documents, and benefits of a scheme like "MahaDBT Post-Matric Scholarship" or "Mahatma Jyotirao Phule Jan Arogya Yojana" and write a 1-page guide.',
    explorationActivityDescMr: 'महाडीबीटी शिष्यवृत्ती किंवा महात्मा जोतिराव फुले जन आरोग्य योजनेसाठी लागणारी कागदपत्रे व पात्रता यांचा अभ्यास करून एक पानाचे सोपे मार्गदर्शन तयार करा.',
    relatedRoles: ['car_business_analyst'],
    sources: [OFFICIAL_SOURCES.MPSC_OFFICIAL, OFFICIAL_SOURCES.NCS_INDIA]
  }
];
