import { LearnerProfile } from '../types';

export const DEMO_PROFILES: LearnerProfile[] = [
  {
    id: 'demo_class_9',
    name: 'Tanvi Patil',
    locationCity: 'Pune',
    preferredLanguage: 'en',
    currentStage: 'class_8_9',
    currentClassOrYear: 'Class 9',
    educationBoard: 'MSBSHSE (State Board)',
    enjoyedSubjects: ['Science', 'Drawing & Craft', 'Mathematics', 'English'],
    interests: ['Space & Astronomy', 'Mobile Apps & Games', 'Graphic Design', 'Environmental Nature'],
    knownSkills: ['Basic Computer Use', 'Creative Sketching', 'Mental Math'],
    budgetPreference: 'budget_conscious',
    timeWeeklyHours: 8,
    locationPreference: 'home_district',
    savedRouteIds: ['route_fyjc_science', 'route_fyjc_arts'],
    savedCareerIds: ['car_ui_ux_designer', 'car_front_end_dev'],
    evidencePassport: [
      {
        id: 'ev_tanvi_1',
        skillId: 'sk_sketching',
        skillName: 'Visual Sketching & Hierarchy',
        roleId: 'car_ui_ux_designer',
        title: 'Redesigned School Timetable on Paper',
        dateCreated: '2026-03-10',
        evidenceLevel: 'activity_demonstrated',
        notesOrUrl: 'Created a color-coded weekly timetable layout with large legible fonts for classes and labs.',
        status: 'completed',
        rubricScore: 4,
        feedback: 'Great clear hierarchy; highlighted lunch breaks and practical lab blocks effectively.'
      }
    ],
    assessmentResults: {},
    isDemoProfile: true
  },

  {
    id: 'demo_class_10',
    name: 'Aarav Deshmukh',
    locationCity: 'Nashik',
    preferredLanguage: 'mr',
    currentStage: 'class_10',
    currentClassOrYear: 'Class 10 (SSC Appearing)',
    educationBoard: 'MSBSHSE (State Board)',
    enjoyedSubjects: ['Mathematics', 'Science (Physics/Chemistry)', 'Work Experience (SUPW)'],
    interests: ['Machines & Motors', 'Gadget Teardowns', 'Coding Basics', 'Practical Labs'],
    knownSkills: ['Arithmetic Problem Solving', 'Basic Circuit Assembly'],
    budgetPreference: 'budget_conscious',
    timeWeeklyHours: 12,
    locationPreference: 'divisional_center',
    savedRouteIds: ['route_fyjc_science', 'route_polytechnic_diploma', 'route_iti_trade'],
    savedCareerIds: ['car_front_end_dev', 'car_solar_electrician'],
    evidencePassport: [
      {
        id: 'ev_aarav_1',
        skillId: 'sk_circuits',
        skillName: 'Electrical Safety & Circuit Check',
        roleId: 'car_solar_electrician',
        title: 'Household Circuit Breaker & Safety Audit',
        dateCreated: '2026-03-25',
        evidenceLevel: 'activity_demonstrated',
        notesOrUrl: 'Tested miniature circuit breakers (MCBs) and verified three-pin plug earthing with test lamp.',
        status: 'completed',
        rubricScore: 4,
        feedback: 'Solid observational notes on earthing principles.'
      }
    ],
    assessmentResults: {},
    isDemoProfile: true
  },

  {
    id: 'demo_class_12',
    name: 'Sneha Kulkarni',
    locationCity: 'Nagpur',
    preferredLanguage: 'en',
    currentStage: 'class_11_12',
    currentClassOrYear: 'Class 12 (HSC Science)',
    currentStreamOrTrade: 'Science (PCM + Computer Science Bifocal)',
    educationBoard: 'MSBSHSE (State Board)',
    enjoyedSubjects: ['Physics', 'Mathematics', 'Computer Science'],
    interests: ['Software Programming', 'Data Analytics', 'Robotics', 'Web Applications'],
    knownSkills: ['C++ Basics', 'Calculus', 'HTML/CSS Basics', 'Algebra'],
    targetCareerId: 'car_front_end_dev',
    budgetPreference: 'moderate',
    timeWeeklyHours: 16,
    locationPreference: 'metro_mumbai_pune',
    savedRouteIds: ['route_btech_degree', 'route_bsc_cs_analytics'],
    savedCareerIds: ['car_front_end_dev', 'car_data_analyst', 'car_python_dev'],
    evidencePassport: [
      {
        id: 'ev_sneha_1',
        skillId: 'sk_html_css',
        skillName: 'HTML5 & CSS Responsive Layout',
        roleId: 'car_front_end_dev',
        title: 'Personal Study Dashboard Web Page',
        dateCreated: '2026-02-14',
        evidenceLevel: 'activity_demonstrated',
        notesOrUrl: 'Built a 2-page static website tracking daily MHT-CET chapter revision with responsive CSS Flexbox.',
        status: 'completed',
        rubricScore: 5,
        feedback: 'Clean semantic markup, mobile-friendly viewport meta tag included.'
      }
    ],
    assessmentResults: {},
    isDemoProfile: true
  },

  {
    id: 'demo_diploma_iti',
    name: 'Rohit Shinde',
    locationCity: 'Chhatrapati Sambhaji Nagar',
    preferredLanguage: 'mr',
    currentStage: 'diploma_iti',
    currentClassOrYear: 'Final Year Diploma (6th Semester)',
    currentStreamOrTrade: 'Polytechnic Diploma in Mechanical Engineering (MSBTE)',
    educationBoard: 'MSBTE (Maharashtra State Board of Technical Education)',
    enjoyedSubjects: ['Thermal Engineering', 'AutoCAD / SolidWorks', 'Industrial Hydraulics', 'Mechatronics'],
    interests: ['Industrial Automation', 'Solar PV Systems', 'CNC Programming', 'EV Powertrains'],
    knownSkills: ['AutoCAD 2D/3D', 'Workshop Machining', 'Technical Drawing', 'Basic PLC Logic'],
    targetCareerId: 'car_solar_electrician',
    budgetPreference: 'budget_conscious',
    timeWeeklyHours: 20,
    locationPreference: 'divisional_center',
    savedRouteIds: ['route_dse_lateral', 'route_nats_apprenticeship'],
    savedCareerIds: ['car_solar_electrician', 'car_python_dev'],
    evidencePassport: [
      {
        id: 'ev_rohit_1',
        skillId: 'sk_cad',
        skillName: 'CAD Component Modelling',
        roleId: 'car_solar_electrician',
        title: 'Designed Solar Array Rooftop Mounting Bracket',
        dateCreated: '2026-01-20',
        evidenceLevel: 'mentor_reviewed',
        notesOrUrl: 'Drafted 3D fabrication drawing with structural wind load tolerance in AutoCAD.',
        status: 'reviewed',
        rubricScore: 5,
        feedback: 'Approved by diploma department head for final year capstone project.'
      }
    ],
    assessmentResults: {},
    isDemoProfile: true
  },

  {
    id: 'demo_undergrad',
    name: 'Aniket Jadhav',
    locationCity: 'Mumbai',
    preferredLanguage: 'en',
    currentStage: 'undergraduate',
    currentClassOrYear: '3rd Year B.Sc Information Technology',
    currentStreamOrTrade: 'B.Sc (IT) — University of Mumbai',
    educationBoard: 'University of Mumbai',
    enjoyedSubjects: ['Database Management (SQL)', 'Python Programming', 'Software Engineering'],
    interests: ['Data Analytics', 'Business Intelligence', 'Web APIs', 'Cloud Computing'],
    knownSkills: ['SQL (Joins, Aggregations)', 'Python (Pandas, Matplotlib)', 'Excel Pivot Tables', 'Git'],
    targetCareerId: 'car_data_analyst',
    budgetPreference: 'moderate',
    timeWeeklyHours: 22,
    locationPreference: 'metro_mumbai_pune',
    savedRouteIds: ['route_bsc_cs_analytics', 'route_grad_tech_transition'],
    savedCareerIds: ['car_data_analyst', 'car_python_dev', 'car_business_analyst'],
    evidencePassport: [
      {
        id: 'ev_aniket_1',
        skillId: 'sk_sql',
        skillName: 'SQL Data Extraction & Aggregations',
        roleId: 'car_data_analyst',
        title: 'Retail Store Sales Database Queries',
        dateCreated: '2026-03-01',
        evidenceLevel: 'activity_demonstrated',
        notesOrUrl: 'Wrote 15 complex SQL queries with CTEs and window functions analyzing monthly store revenue.',
        status: 'completed',
        rubricScore: 4,
        feedback: 'Efficient index usage and well-structured nested queries.'
      },
      {
        id: 'ev_aniket_2',
        skillId: 'sk_excel_bi',
        skillName: 'Executive Dashboard Visualisation',
        roleId: 'car_data_analyst',
        title: 'Interactive Power BI Sales Performance Report',
        dateCreated: '2026-03-18',
        evidenceLevel: 'ai_assisted_feedback',
        notesOrUrl: 'Created multi-page interactive dashboard with drill-down filters by Maharashtra revenue zones.',
        status: 'completed',
        rubricScore: 4,
        feedback: 'Strong visual hierarchy; recommended adding tooltip metrics for regional growth rates.'
      }
    ],
    assessmentResults: {},
    isDemoProfile: true
  },

  {
    id: 'demo_graduate',
    name: 'Priyanka More',
    locationCity: 'Kolhapur',
    preferredLanguage: 'mr',
    currentStage: 'graduate',
    currentClassOrYear: 'B.Com Graduate (Passed 2025)',
    currentStreamOrTrade: 'Bachelor of Commerce (Advanced Accountancy)',
    educationBoard: 'Shivaji University Kolhapur',
    enjoyedSubjects: ['Financial Accounting', 'Business Economics', 'Costing & Auditing'],
    interests: ['Digital Marketing', 'Business Analysis', 'MPSC State Administrative Services', 'E-Commerce Operations'],
    knownSkills: ['Tally Prime Bookkeeping', 'MS Excel (VLOOKUP, Pivots)', 'GST Invoicing Basics', 'Business Writing'],
    targetCareerId: 'car_business_analyst',
    budgetPreference: 'budget_conscious',
    timeWeeklyHours: 25,
    locationPreference: 'divisional_center',
    savedRouteIds: ['route_mpsc_competitive', 'route_grad_tech_transition'],
    savedCareerIds: ['car_business_analyst', 'car_digital_marketing', 'car_public_service'],
    evidencePassport: [
      {
        id: 'ev_priyanka_1',
        skillId: 'sk_business_flow',
        skillName: 'Process Mapping & Documentation',
        roleId: 'car_business_analyst',
        title: 'E-Commerce Order Return Workflow Diagram',
        dateCreated: '2026-02-28',
        evidenceLevel: 'activity_demonstrated',
        notesOrUrl: 'Documented 8-step customer return authorization process with swimlane flowchart in draw.io.',
        status: 'completed',
        rubricScore: 4,
        feedback: 'Very thorough exception-handling pathways for damaged goods refunds.'
      }
    ],
    assessmentResults: {},
    isDemoProfile: true
  }
];
