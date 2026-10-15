import { LearningActivity, AssessmentDefinition } from '../types';

export const LEARNING_ACTIVITIES: LearningActivity[] = [
  // Class 8-9
  {
    id: 'act_school_01',
    titleEn: 'Day in the Life Career Interview',
    titleMr: 'तुमच्या परिसरातील व्यावसायिकाची मुलाखत',
    stage: 'class_8_9',
    targetRoleOrArea: 'Exploration',
    objectiveEn: 'Discover what real professionals do daily and practice asking open-ended questions.',
    objectiveMr: 'प्रत्यक्ष काम करणाऱ्या व्यक्तीचे रोजचे काम समजून घेणे आणि प्रश्न विचारण्याचा सराव करणे.',
    estimatedEffort: '45 mins',
    difficulty: 'beginner',
    instructionsEn: [
      'Choose a working relative, neighbour, or local business person (e.g. shop owner, engineer, nurse, teacher, bank staff).',
      'Ask 4 questions: (1) What do you do first when you arrive at work? (2) Which school subject helps you the most? (3) What is the hardest part of your job? (4) What tools do you use daily?',
      'Write down 3 surprising things you learned.'
    ],
    instructionsMr: [
      'तुमच्या ओळखीचे नातेवाईक, शेजारी किंवा काम करणाऱ्या व्यक्तीची निवड करा (उदा. शिक्षक, नर्स, बँक कर्मचारी, दुकानदार, इंजिनिअर).',
      'त्यांना ४ प्रश्न विचारा: (१) कामावर पोहोचल्यावर पहिले काम काय असते? (२) शाळेतील कोणता विषय सर्वाधिक उपयोगी पडतो? (३) कामातील सर्वात आव्हानात्मक गोष्ट कोणती? (४) रोज कोणती साधने वापरता?',
      'मुलाखतीतून शिकलेल्या ३ नवीन गोष्टी लिहून काढा.'
    ],
    rubricEn: [
      'Completeness: Addressed all 4 discussion points.',
      'Reflection: Identified how school subjects connect to daily adult work.',
      'Clarity: Expressed personal takeaway clearly.'
    ],
    rubricMr: [
      'पूर्णता: सर्व ४ मुद्द्यांवर चर्चा केली.',
      'चिंतन: शाळेतील विषयांचा प्रत्यक्ष कामाशी असलेला संबंध ओळखला.',
      'स्पष्टता: स्वतःचे विचार स्पष्टपणे मांडले.'
    ],
    deliverableType: 'reflection'
  },
  {
    id: 'act_school_02',
    titleEn: 'App Interface Paper Wireframing',
    titleMr: 'कागदावर मोबाईल ॲपचे स्क्रीन रेखाटन (Paper Wireframe)',
    stage: 'class_8_9',
    targetRoleOrArea: 'car_ui_ux_designer',
    objectiveEn: 'Learn how visual designers plan user layouts on paper before writing computer code.',
    objectiveMr: 'कोडिंग सुरू करण्यापूर्वी डिझायनर कागदावर स्क्रीन कशी आखतात ते शिकणे.',
    estimatedEffort: '60 mins',
    difficulty: 'beginner',
    instructionsEn: [
      'Take a blank sheet of paper and draw 3 phone frames (rectangles).',
      'Design an app that helps students track daily homework and book returns.',
      'Include a Home screen, an Add Task screen, and a Success/Celebration screen.',
      'Show where buttons, titles, and icons belong with clear labels.'
    ],
    instructionsMr: [
      'कोऱ्या कागदावर मोबाईल आकाराचे ३ चौकोन आखा.',
      'शाळेतील गृहपाठ आणि वाचनालयाची पुस्तके नोंदवण्यासाठी एका साध्या ॲपची रचना करा.',
      'मुख्य स्क्रीन (Home), नवीन काम जोडण्याची स्क्रीन (Add Task), आणि पूर्ण झाल्याची स्क्रीन आखा.',
      'बटन्स, मजकूर आणि चिन्हे स्पष्टपणे दाखवा.'
    ],
    rubricEn: [
      'Layout clarity: Screen structure is uncluttered.',
      'User journey: A student can logically move between screens.',
      'Legibility: Labels and buttons are distinct.'
    ],
    rubricMr: [
      'लेआउट सुस्पष्टता: स्क्रीनवर गर्दी नाही आणि माहिती सुटसुटीत आहे.',
      'प्रवाह: वापरकर्ता एका स्क्रीनवरून दुसऱ्यावर सहज जाऊ शकतो.',
      'वाचनीयता: बटन्स व नावे स्पष्ट दिसतात.'
    ],
    deliverableType: 'reflection'
  },

  // Class 10
  {
    id: 'act_class10_01',
    titleEn: 'Post-10th Three-Route Comparison Matrix',
    titleMr: 'दहावीनंतरच्या ३ पर्यायांची तुलना तक्ता (Comparison Matrix)',
    stage: 'class_10',
    targetRoleOrArea: 'route_polytechnic_diploma',
    objectiveEn: 'Compare FYJC Science vs Polytechnic Diploma vs ITI trade against your personal budget and study preferences.',
    objectiveMr: '११वी सायन्स, पॉलिटेक्निक डिप्लोमा आणि ITI या ३ पर्यायांची स्वतःच्या परिस्थितीनुसार वस्तुनिष्ठ तुलना करणे.',
    estimatedEffort: '90 mins',
    difficulty: 'beginner',
    instructionsEn: [
      'Review the structured records for (1) Class 11-12 Science, (2) 3-Year Polytechnic, and (3) ITI Trade.',
      'Fill a 5-column table: Route Name, Duration, Expected Annual Fee, Hands-on Workshop Ratio (High/Med/Low), Next Eligible Degrees.',
      'Write a 100-word paragraph stating which route best balances your budget and practical learning interest.'
    ],
    instructionsMr: [
      '११वी विज्ञान, ३-वर्षीय पॉलिटेक्निक आणि ITI या तिन्ही पर्यायांची माहिती तपासा.',
      '५ रकान्यांचा तक्ता बनवा: नाव, कालावधी, वार्षिक अंदाजे खर्च, प्रात्यक्षिकांचे प्रमाण, पुढील शिक्षणाचे मार्ग.',
      'तुमच्या आर्थिक बजेट आणि आवडीनुसार कोणता पर्याय सर्वात व्यवहार्य वाटतो यावर १०० शब्दांत नोंद करा.'
    ],
    rubricEn: [
      'Fact Accuracy: Correct prerequisite and duration documented.',
      'Honest Tradeoff Assessment: Both advantages and constraints recorded.',
      'Decision Rationality: Choice backed by personal criteria.'
    ],
    rubricMr: [
      'तथ्यांची अचूकता: कालावधी आणि अटींची बरोबर नोंद केली.',
      'वस्तुनिष्ठ विश्लेषण: फायदे आणि मर्यादा दोन्हीची नोंद.',
      'तर्कशुद्ध निवड: स्वतःच्या निकषांवर आधारित विचार.'
    ],
    deliverableType: 'comparison_chart'
  },

  // Class 11-12 & Diploma
  {
    id: 'act_higher_01',
    titleEn: 'First Responsive Web Portfolio Page',
    titleMr: 'स्वतःचे पहिले रिस्पॉन्सिव्ह वेबपेज (HTML & CSS)',
    stage: 'class_11_12',
    targetRoleOrArea: 'car_front_end_dev',
    objectiveEn: 'Build a semantic single-page profile with modern CSS flexbox that works seamlessly on mobile.',
    objectiveMr: 'मोबाईल आणि कम्प्युटरवर उत्तम चालणारे सिमेंटिक HTML व CSS वापरून पहिले वेबपेज तयार करणे.',
    estimatedEffort: '120 mins',
    difficulty: 'intermediate',
    instructionsEn: [
      'Create an index.html file with proper HTML5 semantic tags (<header>, <main>, <section>, <footer>).',
      'Add a style section using CSS Flexbox or CSS Grid.',
      'Include your educational background, target career goal, 3 skills, and links to your social/github profiles.',
      'Test in browser at 375px mobile width to ensure zero horizontal scroll.'
    ],
    instructionsMr: [
      'HTML5 च्या मुख्य टॅग्ज (<header>, <main>, <footer>) वापरून कोड लिहा.',
      'CSS Flexbox चा वापर करून मोबाईलवर व्यवस्थित दिसणारा लेआउट करा.',
      'तुमचे शिक्षण, उद्दिष्ट, ३ कौशल्ये आणि लिंक्स जोडा.',
      'मोबाईल स्क्रीनवर स्क्रोल न होता पेज व्यवस्थित उघडते का ते तपासा.'
    ],
    rubricEn: [
      'Semantic structure: Valid HTML tags without excessive <div> soup.',
      'Mobile responsiveness: Fluid adaptation to small screens.',
      'Typography & Contrast: High readability against background.'
    ],
    rubricMr: [
      'योग्य रचना: योग्य HTML टॅग्जचा शिस्तबद्ध वापर.',
      'मोबाईल अनुकूलता: लहान स्क्रीनवर सहज वाचता येणारा लेआउट.',
      'वाचनीयता: रंग आणि मजकुराचा चांगला कॉन्ट्रास्ट.'
    ],
    deliverableType: 'short_code_or_doc'
  },

  // Undergraduate & Graduate
  {
    id: 'act_ug_data_01',
    titleEn: 'Maharashtra Regional Sales / Agriculture Dataset Analysis',
    titleMr: 'स्थानिक व्यवसाय डेटाचे एक्सेल किंवा SQL मध्ये विश्लेषण',
    stage: 'undergraduate',
    targetRoleOrArea: 'car_data_analyst',
    objectiveEn: 'Transform raw multi-district transaction data into structured executive metrics with pivot tables and charts.',
    objectiveMr: 'अव्यवस्थित डेटा स्वच्छ करून पिव्होट टेबलद्वारे विक्री व नफ्याचे महत्त्वाचे निष्कर्ष काढणे.',
    estimatedEffort: '3 hours',
    difficulty: 'intermediate',
    instructionsEn: [
      'Take a sample multi-column CSV containing Order Date, District (e.g. Pune, Nagpur, Nashik, Kolhapur), Product Category, Units Sold, and Revenue.',
      'Check and clean missing values or bad date formats.',
      'Create a Pivot Table grouping Revenue by District and Product Category.',
      'Write 3 executive recommendations based on which districts lead vs lag in growth.'
    ],
    instructionsMr: [
      'जिल्हानिहाय विक्री असलेला नमुना डेटा (तारीख, जिल्हा, उत्पादन, नफा) घ्या.',
      'अपूरे किंवा चुकीचे फॉरमॅट स्वच्छ करा.',
      'पिव्होट टेबल वापरून जिल्ह्यानुसार सर्वाधिक कमाई शोधून काढा.',
      'व्यवसाय वाढवण्यासाठी ३ मुख्य शिफारशी तयार करा.'
    ],
    rubricEn: [
      'Data Hygiene: Removed duplicates and null values properly.',
      'Analytical Depth: Correct aggregation formulas and percentages calculated.',
      'Executive Communication: Recommendations are actionable and concise.'
    ],
    rubricMr: [
      'डेटा स्वच्छता: त्रुटी व रिकाम्या जागा योग्य पद्धतीने दुरुस्त केल्या.',
      'विश्लेषण खोली: अचूक सूत्रे व टक्केवारी काढली.',
      'स्पष्ट शिफारशी: व्यवसायाला उपयोगी पडणारे निर्णय मांडले.'
    ],
    deliverableType: 'project_link'
  },

  {
    id: 'act_grad_biz_01',
    titleEn: 'Digital Service User Journey & Exception Flowchart',
    titleMr: 'डिजिटल सेवेचा वापरकर्ता प्रवास व अपवाद फ्लोचार्ट',
    stage: 'graduate',
    targetRoleOrArea: 'car_business_analyst',
    objectiveEn: 'Map an end-to-end user workflow including happy path and failure scenarios for a real-world system.',
    objectiveMr: 'एखाद्या सेवेचा संपूर्ण टप्प्यांचा नकाशा (Flowchart) आणि अडचणी आल्यास काय करावे याचा अपवाद फ्लो तयार करणे.',
    estimatedEffort: '2.5 hours',
    difficulty: 'intermediate',
    instructionsEn: [
      'Select a common process: (A) Booking an MSRTC Bus E-Ticket, or (B) College Document Verification.',
      'Map the step-by-step user interactions in Draw.io or Lucidchart.',
      'Explicitly diagram 2 exception paths (e.g. Payment Gateway Failure, Document Rejected).',
      'Document acceptance criteria for the software development team.'
    ],
    instructionsMr: [
      'एसटी महामंडळाचे ऑनलाइन तिकीट किंवा महाविद्यालयीन कागदपत्र पडताळणी ही प्रक्रिया निवडा.',
      'ड्रॉ.आयओ (Draw.io) मध्ये टप्प्याटप्प्याचा फ्लोचार्ट बनवा.',
      'पेमेंट अयशस्वी झाले किंवा कागदपत्र चुकीचे निघाले तर काय घडेल हे दोन अपवाद फ्लोमध्ये दाखवा.',
      'डेव्हलपरसाठी स्वीकृती निकष (Acceptance Criteria) लिहून काढा.'
    ],
    rubricEn: [
      'Completeness of flow: Both happy and alternate paths represented.',
      'Standard notation: Proper flowchart symbols (decisions, processes, terminals).',
      'Functional Clarity: Acceptance criteria are unambiguous.'
    ],
    rubricMr: [
      'प्रवाहाची पूर्णता: सर्व पर्याय व अपवाद समाविष्ट आहेत.',
      'प्रमाणित चिन्हे: योग्य फ्लोचार्ट चिन्हांचा वापर.',
      'स्पष्टता: निकष स्पष्ट व चाचणी घेता येण्याजोगे आहेत.'
    ],
    deliverableType: 'project_link'
  }
];

export const ASSESSMENTS: AssessmentDefinition[] = [
  {
    id: 'asmt_school_discovery',
    titleEn: 'Interest & Curiosity Discovery (Classes 8–9)',
    titleMr: 'रस आणि आवड शोध चाचणी (इयत्ता ८वी–९वी)',
    stage: 'class_8_9',
    descriptionEn: 'Explores your spontaneous curiosities and preferred everyday learning activities. This does not predict a single career destiny; it reveals themes you might enjoy exploring.',
    descriptionMr: 'तुमच्या आवडी आणि दैनंदिन आवडीच्या उपक्रमांचा शोध. ही चाचणी तुमचे अंतिम भविष्य ठरवत नाही; तर कोणत्या दिशांचा शोध घेणे तुम्हाला आवडेल ते सांगते.',
    whatItMeasuresEn: 'Curiosity orientation across practical making, creative expression, analytical logic, and social problem-solving.',
    whatItMeasuresMr: 'प्रत्यक्ष काम, सर्जनशीलता, तार्किक विचार आणि सामाजिक प्रश्न सोडवण्यातील तुमची सहज आवड.',
    whatItDoesNotEstablishEn: 'Does NOT establish your permanent career or guarantee aptitude in specific high-stakes subjects.',
    whatItDoesNotEstablishMr: 'हे तुमचे कायमस्वरूपी करिअर ठरवत नाही किंवा विशिष्ट विषयातील जन्मजात गुण सिद्ध करत नाही.',
    questions: [
      {
        id: 'q1',
        questionEn: 'On a free Sunday afternoon with no homework, what would you most naturally choose to do?',
        questionMr: 'रविवारच्या मोकळ्या दिवशी गृहपाठ नसल्यास तुम्हाला सर्वात जास्त काय करायला आवडेल?',
        options: [
          {
            id: 'o1_a',
            textEn: 'Disassemble a broken clock, toy, or gadget to see how gears work.',
            textMr: 'खेळणी किंवा घड्याळ उघडून आतील यंत्रणा कशी चालते ते पाहणे.',
            scoreWeights: { practical_making: 3, tech_engineering: 2 }
          },
          {
            id: 'o1_b',
            textEn: 'Sketch a comic strip, design a poster, or write a story.',
            textMr: 'चित्र काढणे, पोस्टर डिझाइन करणे किंवा कथा लिहिणे.',
            scoreWeights: { creative_design: 3, communication: 2 }
          },
          {
            id: 'o1_c',
            textEn: 'Solve a math puzzle, play strategy games (chess), or organize collected items.',
            textMr: 'गणिताचे कोडे सोडवणे, बुद्धिबळ खेळणे किंवा गोष्टींचे वर्गीकरण करणे.',
            scoreWeights: { analytical_logic: 3, data_finance: 2 }
          },
          {
            id: 'o1_d',
            textEn: 'Help organize a neighborhood clean-up or explain lessons to younger students.',
            textMr: 'मित्रांसोबत समाजोपयोगी काम करणे किंवा लहानांना समजावून सांगणे.',
            scoreWeights: { social_public: 3, leadership: 2 }
          }
        ]
      },
      {
        id: 'q2',
        questionEn: 'When learning a new science concept in class, what helps you understand it fastest?',
        questionMr: 'शाळेत विज्ञानातील नवी संकल्पना शिकताना तुम्हाला ती सर्वात जलद कशी समजते?',
        options: [
          {
            id: 'o2_a',
            textEn: 'Doing an experiment in the lab or building a working physical model.',
            textMr: 'प्रयोगशाळेत स्वतः प्रयोग करून किंवा प्रतिकृती (Model) बनवून.',
            scoreWeights: { practical_making: 3, tech_engineering: 2 }
          },
          {
            id: 'o2_b',
            textEn: 'Seeing diagrams, colorful infographics, or watching an animation.',
            textMr: 'रंगीत आकृत्या, इन्फोग्राफिक्स किंवा ॲनिमेशन पाहून.',
            scoreWeights: { creative_design: 3 }
          },
          {
            id: 'o2_c',
            textEn: 'Understanding the formula, mathematical steps, and cause-and-effect rules.',
            textMr: 'त्यामागील सूत्र, गणितीय पायऱ्या आणि नियमांचे विश्लेषण समजून.',
            scoreWeights: { analytical_logic: 3, data_finance: 2 }
          },
          {
            id: 'o2_d',
            textEn: 'Discussing real-life examples of how it affects doctors, farmers, or daily citizens.',
            textMr: 'शेतकरी, डॉक्टर किंवा सर्वसामान्यांच्या जीवनावर त्याचा काय परिणाम होतो यावर चर्चा करून.',
            scoreWeights: { social_public: 3 }
          }
        ]
      },
      {
        id: 'q3',
        questionEn: 'If you were given a school exhibition project, which role would you volunteer for?',
        questionMr: 'शालेय प्रदर्शनात गट प्रकल्प करताना तुम्ही कोणता भाग स्वेच्छेने निवडाल?',
        options: [
          {
            id: 'o3_a',
            textEn: 'Building the working electronic circuit or mechanical model.',
            textMr: 'इलेक्ट्रॉनिक सर्किट किंवा हलणारे मॉडेल प्रत्यक्ष तयार करणे.',
            scoreWeights: { practical_making: 3, tech_engineering: 2 }
          },
          {
            id: 'o3_b',
            textEn: 'Designing the display banner, charts, and making everything visually attractive.',
            textMr: 'प्रदर्शनाचा बॅनर, चार्ट्स आणि देखावा आकर्षक बनवणे.',
            scoreWeights: { creative_design: 3 }
          },
          {
            id: 'o3_c',
            textEn: 'Calculating project expenses, material quantities, and recording data.',
            textMr: 'साहित्याचा खर्च, मोजमाप आणि नोंदींचे अचूक व्यवस्थापन करणे.',
            scoreWeights: { analytical_logic: 3, data_finance: 2 }
          },
          {
            id: 'o3_d',
            textEn: 'Explaining the project to visiting parents, teachers, and judges.',
            textMr: 'येणाऱ्या पालक व परीक्षकांना प्रकल्पाची माहिती आत्मविश्वासाने समजावणे.',
            scoreWeights: { social_public: 3, communication: 2 }
          }
        ]
      }
    ]
  },

  {
    id: 'asmt_class10_readiness',
    titleEn: 'Post-Class-10 Route Awareness & Prerequisite Diagnostic',
    titleMr: 'दहावीनंतरच्या शैक्षणिक पर्यायांची पूर्वतयारी तपासणी',
    stage: 'class_10',
    descriptionEn: 'Evaluates your awareness of the structural differences between academic streams (Science/Commerce/Arts), technical diplomas, and ITI vocational routes.',
    descriptionMr: 'अकादमिक शाखा (विज्ञान/वाणिज्य/कला), तंत्रनिकेतन (पॉलिटेक्निक) आणि ITI मधील फरक समजून घेण्यास मदत करणारे वस्तुनिष्ठ मूल्यांकन.',
    whatItMeasuresEn: 'Understanding of admission prerequisites, study durations, and degree progression constraints in Maharashtra.',
    whatItMeasuresMr: 'प्रवेशाच्या अटी, अभ्यासक्रमांचा कालावधी आणि पुढील शिक्षणातील संधींचे स्पष्ट आकलन.',
    whatItDoesNotEstablishEn: 'Does NOT guarantee college admission cutoffs or board examination marks.',
    whatItDoesNotEstablishMr: 'हे बोर्डाचे गुण किंवा महाविद्यालयांचे कट-ऑफ निश्चित करत नाही.',
    questions: [
      {
        id: 'q10_1',
        questionEn: 'What is your primary expectation for the next 2 to 3 years of study after Class 10?',
        questionMr: 'दहावीनंतर पुढील २ ते ३ वर्षांच्या शिक्षणाकडून तुमची मुख्य अपेक्षा काय आहे?',
        options: [
          {
            id: 'q10_1_a',
            textEn: 'I want deep theoretical preparation for competitive degree entrance exams (MHT-CET / JEE / NEET).',
            textMr: 'मला मोठ्या प्रवेश परीक्षांसाठी (MHT-CET/JEE/NEET) सखोल तात्विक अभ्यास करायचा आहे.',
            scoreWeights: { academic_science: 3 }
          },
          {
            id: 'q10_1_b',
            textEn: 'I prefer hands-on technical workshop labs and want a direct lateral entry to 2nd year B.Tech later.',
            textMr: 'मला प्रत्यक्ष लॅब व वर्कशॉपमध्ये शिकायचे आहे आणि पुढे थेट दुसऱ्या वर्षाच्या इंजिनिअरिंगला जायचे आहे.',
            scoreWeights: { polytechnic_diploma: 3 }
          },
          {
            id: 'q10_1_c',
            textEn: 'I want affordable, quick vocational trade training to start working or apprenticeship within 1-2 years.',
            textMr: 'मला कमी खर्चात १-२ वर्षांत काम सुरू करण्यासाठी प्रमाणित तांत्रिक ट्रेड शिकायचा आहे.',
            scoreWeights: { iti_vocational: 3 }
          },
          {
            id: 'q10_1_d',
            textEn: 'I want to build strong understanding of business, taxation, accounting, or social sciences.',
            textMr: 'मला व्यवसाय, कररचना, हिशोब किंवा समाजशास्त्राचा सखोल अभ्यास करायचा आहे.',
            scoreWeights: { commerce_arts: 3 }
          }
        ]
      },
      {
        id: 'q10_2',
        questionEn: 'How do you view your study budget for the next stage of education?',
        questionMr: 'पुढील शिक्षणासाठी तुमचा कौटुंबिक बजेट विचार कसा आहे?',
        options: [
          {
            id: 'q10_2_a',
            textEn: 'Extremely budget-conscious; prefer government-subsidized options under ₹10,000 / year.',
            textMr: 'खर्च अत्यंत मर्यादित हवा; वर्षाला ₹१०,००० च्या आतील शासकीय पर्याय हवेत.',
            scoreWeights: { iti_vocational: 2, polytechnic_diploma: 2 }
          },
          {
            id: 'q10_2_b',
            textEn: 'Moderate; comfortable with government or aided college fees with government scholarship support.',
            textMr: 'मध्यम; शासकीय/अनुदानित कॉलेज फी आणि शिष्यवृत्तीचा आधार पुरेसा आहे.',
            scoreWeights: { academic_science: 2, commerce_arts: 2, polytechnic_diploma: 2 }
          },
          {
            id: 'q10_2_c',
            textEn: 'Flexible; willing to invest in private colleges or integrated coaching if required.',
            textMr: 'लवचिक; गरज असल्यास खाजगी महाविद्यालय किंवा कोचिंगचा खर्च करू शकतो.',
            scoreWeights: { academic_science: 2 }
          }
        ]
      }
    ]
  },

  {
    id: 'asmt_role_competency_diagnostic',
    titleEn: 'Role-Specific Technical & Practical Competency Diagnostic',
    titleMr: 'करिअर भूमिकेनुसार प्रत्यक्ष कौशल्य निदान (Competency Diagnostic)',
    stage: 'undergraduate',
    descriptionEn: 'Evaluates your current baseline in real-world workplace tools and concepts against junior industry requirements.',
    descriptionMr: 'सॉफ्टवेअर, डेटा किंवा व्यवसायातील सुरुवातीच्या पदांसाठी आवश्यक असलेल्या प्रत्यक्ष कौशल्यांचे वस्तुनिष्ठ निदान.',
    whatItMeasuresEn: 'Current grasp of SQL, Spreadsheets, Problem Breakdown, and Project Communication.',
    whatItMeasuresMr: 'एसक्यूएल, स्प्रेडशीट, समस्यांचे विश्लेषण आणि व्यावसायिक संवादाची सद्यस्थिती.',
    whatItDoesNotEstablishEn: 'Self-assessment is formative; it does not replace third-party proctored certification.',
    whatItDoesNotEstablishMr: 'हे मार्गदर्शनासाठीचे निदान आहे, कोणतीही कंपनीची अधिकृत परीक्षा नाही.',
    questions: [
      {
        id: 'qd_1',
        questionEn: 'In a relational database with 10,000 customers, which query finds customers who placed an order in Pune?',
        questionMr: '१०,००० ग्राहकांच्या डेटाबेसमधून पुण्यातील ग्राहकांचे ऑर्डर्स शोधण्यासाठी कोणती रचना योग्य आहे?',
        options: [
          {
            id: 'qd_1_a',
            textEn: 'SELECT * FROM Customers JOIN Orders ON Customers.id = Orders.cust_id WHERE city = "Pune";',
            textMr: 'JOIN द्वारे Customers आणि Orders जोडून WHERE city = "Pune" लावणे.',
            scoreWeights: { sql_proficiency: 3 }
          },
          {
            id: 'qd_1_b',
            textEn: 'Export everything to a text file and manually scroll through rows.',
            textMr: 'सर्व माहिती टेक्स्ट फाईलमध्ये काढून हाताने शोधणे.',
            scoreWeights: { sql_proficiency: 0 }
          },
          {
            id: 'qd_1_c',
            textEn: 'I know what a database is, but have not written SQL JOIN queries yet.',
            textMr: 'डेटाबेस काय आहे हे माहित आहे, पण अजून SQL JOIN क्वेरी लिहिलेली नाही.',
            scoreWeights: { sql_proficiency: 1 }
          }
        ]
      },
      {
        id: 'qd_2',
        questionEn: 'When building a spreadsheet dashboard for management, what is the best practice for raw data?',
        questionMr: 'व्यवस्थापनासाठी डॅशबोर्ड बनवताना कच्च्या डेटाबद्दल (Raw Data) कोणती पद्धत योग्य मानली जाते?',
        options: [
          {
            id: 'qd_2_a',
            textEn: 'Keep raw source data untouched in a separate tab; perform calculations in analysis tabs with formulas.',
            textMr: 'कच्चा डेटा स्वतंत्र टॅबमध्ये सुरक्षित ठेवणे; सर्व हिशोब आणि सूत्रे स्वतंत्र विश्लेषणाच्या टॅबमध्ये करणे.',
            scoreWeights: { data_hygiene: 3 }
          },
          {
            id: 'qd_2_b',
            textEn: 'Directly overwrite cells and delete original columns to save space.',
            textMr: 'मूळ डेटाच्या सेलवरच नवीन माहिती टाईप करणे आणि जुने कॉलम्स उडवणे.',
            scoreWeights: { data_hygiene: 0 }
          },
          {
            id: 'qd_2_c',
            textEn: 'Only use basic sum formulas without separating data layers.',
            textMr: 'फक्त बेरीज करणे, डेटाचे वेगळे स्तर न ठेवणे.',
            scoreWeights: { data_hygiene: 1 }
          }
        ]
      }
    ]
  }
];
