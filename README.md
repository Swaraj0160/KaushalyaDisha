# KaushalyaDisha (कौशल्यदिशा)

> **Discover your direction. Build your future.**  
> *कौशल्यांना दिशा, भविष्याला नवी संधी.*  
> **Seva Innovation Hackathon Project**

KaushalyaDisha is a Maharashtra-focused, AI-assisted career awareness, education pathway planning, and skill development platform designed to empower learners across Maharashtra with realistic, verified guidance.

---

## 🌟 Key Highlights & Features

- **🎓 Verified Maharashtra Educational Pathways:**
  - Standardized guidance for Class 8-10, 11-12 (FYJC Arts, Commerce, Science), 3-Year Polytechnic Engineering Diplomas (DTE Maharashtra), and ITI vocational trades (DVET Maharashtra).
  - Clear lateral entry routes (e.g. Direct Second Year Engineering DSE without MHT-CET).

- **🧭 Interactive Pathway & Career Explorer:**
  - Discover in-demand career paths across technology, design, operations, and modern services.
  - Transparent eligibility prerequisites, timeline projections, and official state regulatory bodies.

- **🤖 Contextual AI Career Companion (Bilingual):**
  - Grounded advisory powered by Google Gemini (`gemini-3.8-flash`) with honest, non-deterministic fallbacks.
  - Full support for Marathi (मराठी) and English.
  - Never hallucinates cut-off marks or college fees; always cites verified state authorities.

- **📜 Proof-of-Skill Passport:**
  - Shift focus from mere attendance certificates to documented, real-world project artifacts and demonstrated skills.

- **🔄 What-If Pathway Simulator:**
  - Side-by-side comparative analysis of different educational decisions (e.g., Degree vs. Diploma, costs, duration, outcomes).

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Motion, Lucide React
- **Backend / Serverless:** Express / Node.js & Vercel Serverless Functions (`api/ai/*`)
- **AI Engine:** Google Gemini SDK (`@google/genai`) with grounded state-level prompts & deterministic fallbacks
- **Deployment:** Vercel (Production SPA + Serverless API Functions)

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Node.js 18+ (tested on Node.js 24)
- npm or pnpm

### 2. Clone Repository
```bash
git clone https://github.com/swaraj0160/KaushalyaDisha.git
cd KaushalyaDisha
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Set your Gemini API key:
```env
GEMINI_API_KEY="your-gemini-api-key"
```
*(Note: If `GEMINI_API_KEY` is omitted, the platform automatically activates rich, verified Maharashtra grounded fallbacks.)*

### 5. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 6. Production Build
```bash
npm run build
```

---

## 🏛️ Official Maharashtra Portals Referenced

- **MSBSHSE:** Maharashtra State Board of Secondary and Higher Secondary Education
- **DTE Maharashtra:** Directorate of Technical Education (`dte.maharashtra.gov.in`)
- **DVET Maharashtra:** Directorate of Vocational Education and Training (`admission.dvet.gov.in`)
- **State CET Cell:** State Common Entrance Test Cell (`mahacet.org`)

---

## 📄 License

MIT License. Developed for the Seva Innovation Hackathon.
