export const projects = [
  {
    id: 'docklens',
    title: 'DockLens — AI-Based Ligand Affinity Screening',
    shortTitle: 'DockLens',
    category: 'Data Science & Bio-ML',
    badge: 'Computational Biology / ML',
    tagline: 'Molecular binding affinity surrogate predicting CDK2 inhibition from SMILES strings with 3D rendering.',
    overview: 'Molecular binding affinity surrogate predicting target inhibition (CDK2) from SMILES strings with Random Forest, Morgan fingerprints, & 3D structure rendering.',
    metrics: [
      { label: 'Held-out Test R²', value: '0.71' },
      { label: 'Predicted pAffinity', value: '5.09' },
      { label: 'Estimated Affinity', value: '8170.8 nM' }
    ],
    tech: ['Python', 'AutoDock Vina', 'Random Forest', 'RDKit', 'Streamlit'],
    image: './images/project-docklens.png',
    featured: true,
    highlights: [
      'Engineered end-to-end ligand screening pipeline calculating 2048-bit Morgan circular fingerprints.',
      'Trained ensemble Random Forest regressor achieving R² = 0.71 on held-out CDK2 kinase validation set.',
      'Integrated in-browser 3D molecular structure visualizer for instant candidate inspection.',
      'Published live interactive Streamlit application deployed on BioEdge cloud.'
    ],
    liveUrl: 'https://docklens-bioedge.streamlit.app',
    githubUrl: 'https://github.com/SanchitKRai'
  },
  {
    id: 'type2-diabetes-twin',
    title: 'Type 2 Diabetes Digital Twin — Streamlit App',
    shortTitle: 'T2D Digital Twin',
    category: 'Data Science & Bio-ML',
    badge: 'Health Data / XGBoost / SHAP',
    tagline: 'Virtual patient twin monitoring continuous glucose telemetry and wearable activity.',
    overview: 'Virtual patient digital twin monitoring continuous glucose streams (CGM) & wearable activity to forecast glucose spikes 2 hours in advance.',
    metrics: [
      { label: 'Forecast Horizon', value: '2 Hours' },
      { label: 'Telemetry', value: 'CGM + Wearables' },
      { label: 'Model Core', value: 'XGBoost + SHAP' }
    ],
    tech: ['Python', 'XGBoost', 'SHAP', 'Streamlit', 'Time-Series'],
    image: './images/project-diabetes-twin.png',
    featured: true,
    highlights: [
      'Simulated continuous glucose telemetry (CGM) fused with biometric wearable activity streams.',
      'Constructed XGBoost multi-step time series regression predicting hypoglycemic/hyperglycemic excursions 120 minutes ahead.',
      'Implemented SHAP (SHapley Additive exPlanations) water-fall plots explaining individual patient risk contributors.',
      'Designed responsive clinical dashboard for synthetic patient profiles with real-time risk gauges.'
    ],
    githubUrl: 'https://github.com/SanchitKRai'
  },
  {
    id: 'nyc-airbnb',
    title: 'NYC Airbnb Predictor — ML & FastAPI Application',
    shortTitle: 'NYC Airbnb Predictor',
    category: 'Data Science & Bio-ML',
    badge: 'Scikit-Learn / FastAPI / Web UI',
    tagline: 'Real-time machine learning web application predicting Airbnb room-type categories.',
    overview: 'End-to-end Machine Learning web application predicting Airbnb room-type categories from listing features in real-time.',
    metrics: [
      { label: 'Inference Latency', value: '< 25ms' },
      { label: 'Data Scope', value: 'NYC Multi-Borough' },
      { label: 'Stack', value: 'FastAPI + scikit-learn' }
    ],
    tech: ['Python', 'pandas', 'scikit-learn', 'FastAPI', 'HTML/CSS'],
    image: './images/project-airbnb.png',
    featured: true,
    highlights: [
      'Cleaned and engineered geospatial and pricing features across 48,000+ New York City listings.',
      'Trained scikit-learn classification pipeline with cross-validated hyperparameter tuning.',
      'Served production predictions through high-concurrency FastAPI microservice.',
      'Engineered gradient dusk hero backdrop, interactive listing feature card input form, and instant prediction outcome cards.'
    ],
    githubUrl: 'https://github.com/SanchitKRai'
  },
  {
    id: 'bioedge',
    title: 'BioEdge — AI Assistant Platform for Life Sciences',
    shortTitle: 'BioEdge Platform',
    category: 'Data Science & Bio-ML',
    badge: 'EdTech / AI SaaS',
    tagline: 'India’s first AI platform tailored for biology and computational life-science learners.',
    overview: 'Dark cyber-green themed educational & AI suite featuring custom chatbot UI (Rosier assistant), quick prompt chips, and career pathways.',
    metrics: [
      { label: 'AI Engine', value: 'Rosier Assistant' },
      { label: 'Audience', value: 'Life Science Students' },
      { label: 'Tooling', value: 'Bio-Radar + Sandbox' }
    ],
    tech: ['React', 'Python', 'OpenRouter AI', 'Bioinformatics', 'Tailwind CSS'],
    image: './images/project-bioedge.png',
    featured: true,
    highlights: [
      'Architected custom life-sciences conversational AI assistant (Rosier) optimized for biological mechanism reasoning.',
      'Curated Bio-Radar career pathways, curated internships, and computational biology learning tracks.',
      'Built dark cyber-green theme with modular prompt chips and student-friendly workflow templates.'
    ],
    githubUrl: 'https://github.com/SanchitKRai'
  },
  {
    id: 'datalens',
    title: 'DataLens — In-Browser Data Quality & EDA Studio',
    shortTitle: 'DataLens Studio',
    category: 'Data Science & Bio-ML',
    badge: 'Data Analytics / Web App',
    tagline: 'Turn raw CSV & XLSX data into actionable visual insights with zero server latency.',
    overview: 'Automated data profiling engine featuring missing value visualization, correlation matrix analysis, and high-performance client-side CSV parsing.',
    metrics: [
      { label: 'Engine', value: '100% Client-Side' },
      { label: 'Processing Speed', value: 'Instant (~10k rows)' },
      { label: 'Features', value: 'EDA + Quality Score' }
    ],
    tech: ['Data Analytics', 'EDA', 'Statistical Modeling', 'Web App'],
    image: './images/project-datalens.png',
    featured: false,
    highlights: [
      'Zero-upload client-side data privacy engine: CSVs never leave the user’s browser.',
      'Instant calculation of dataset quality score, missing value distributions, and column types.',
      'Interactive Pearson correlation matrix and distribution histograms generated on the fly.'
    ],
    githubUrl: 'https://github.com/SanchitKRai'
  },
  {
    id: 'nextup',
    title: 'NextUp — AI Career Exploration & Dynamic Roadmap Platform',
    shortTitle: 'NextUp',
    category: 'Data Science & Bio-ML',
    badge: 'Full-Stack / Data App',
    tagline: 'From confused to career-proof with personalized milestone roadmaps.',
    overview: 'Interactive web tool helping users transition into career-proof tech paths with custom milestone timelines, salary distributions (₹14–25L), and AI impact assessments.',
    metrics: [
      { label: 'Salary Benchmarks', value: '₹14L – ₹25L' },
      { label: 'Timeline Structure', value: '12-Month Plan' },
      { label: 'Audience', value: 'Tier-3 College Grads' }
    ],
    tech: ['React', 'Python', 'Data Pipelines', 'AI Guidance'],
    image: './images/project-nextup.png',
    featured: false,
    highlights: [
      'Tailored for Indian college students navigating tech career shifts.',
      'Dynamic interactive roadmap visualization breaking complex tech stacks into digestible phases.',
      'Integrated honest compensation statistics and AI disruption impact metrics per career trajectory.'
    ],
    githubUrl: 'https://github.com/SanchitKRai'
  },
  {
    id: 'gali-labs',
    title: 'Gali Labs 92 — Premium Footwear Landing Page',
    shortTitle: 'Gali Labs 92',
    category: 'Web UI/UX & Product Design',
    badge: 'E-Commerce / Footwear / Luxury UI',
    tagline: 'Walk different. Always. High-converting luxury digital experience.',
    overview: 'Dark-mode aesthetic, dynamic hero typography layout, 3D exploded view component showcases ("See full construction"), direct CTA positioning, and seamless mobile responsiveness.',
    metrics: [
      { label: 'Visual Style', value: 'Dark Luxury Editorial' },
      { label: 'Conversion Hook', value: '3D Component Explode' },
      { label: 'Deliverable', value: 'Full Landing Experience' }
    ],
    tech: ['Figma UI/UX', 'Tailwind CSS', 'Conversion Architecture', 'Responsive Design'],
    image: './images/project-gali-labs.png',
    featured: true,
    highlights: [
      'Engineered immersive dark-mode aesthetic with olive and lime athletic shoe accents.',
      'Created interactive 3D exploded view breakdown showcasing insole, midsole, and upper textile layers.',
      'Structured conversion-first visual hierarchy with high-contrast call-to-actions and trust signals.'
    ],
    githubUrl: 'https://github.com/SanchitKRai'
  },
  {
    id: 'defender-v8',
    title: 'Defender V8 — Automotive Specs & Configurator UI',
    shortTitle: 'Defender V8',
    category: 'Web UI/UX & Product Design',
    badge: 'Automotive / Luxury UI',
    tagline: 'Built for everywhere. Refined for anywhere.',
    overview: 'Interactive chassis breakdown UI, dark-mode luxury theme, detailed spec tables, and clean navigation tailored for high-ticket automotive products.',
    metrics: [
      { label: 'Interface Type', value: 'Interactive Configurator' },
      { label: 'Aesthetic', value: 'Stealth Matte Luxury' },
      { label: 'Chassis Breakdown', value: '3D Engine & Suspension' }
    ],
    tech: ['Figma Auto-Layout', 'Design Systems', 'Chassis Breakdown UI', 'High-Ticket Sales Flow'],
    image: './images/project-defender.png',
    secondaryImage: './images/project-defender-chassis.png',
    featured: true,
    highlights: [
      'Engineered stealth dark-mode automotive configurator interface with cinematic product spotlighting.',
      'Designed technical chassis sub-assembly breakdown view highlighting powertrain, suspension, and AWD transmission.',
      'Streamlined spec comparisons and bespoke configuration flows for premium buyer persona.'
    ],
    githubUrl: 'https://github.com/SanchitKRai'
  },
  {
    id: 'vedica',
    title: 'Vedica Himalayan Spring Water — FMCG Showcase',
    shortTitle: 'Vedica Spring Water',
    category: 'Web UI/UX & Product Design',
    badge: 'Consumer Goods / FMCG',
    tagline: 'Purity, sealed at the source.',
    overview: 'Clean minimalist aesthetic, glassmorphism overlays, brand storytelling alignment, and streamlined purchase flow.',
    metrics: [
      { label: 'Design Language', value: 'Pristine Glassmorphism' },
      { label: 'Brand Story', value: 'Himalayan Source Trace' },
      { label: 'Optimization', value: 'Streamlined Checkout' }
    ],
    tech: ['Figma', 'Adobe Suite', 'Glassmorphism', 'Brand Architecture'],
    image: './images/project-vedica.png',
    featured: false,
    highlights: [
      'Conveyed mineral purity and natural mountain origin through layered glassmorphism cards.',
      'Designed frictionless 1-click ordering flow with clear nutritional and mineral composition indicators.',
      'Harmonized typography with tranquil natural color palette reflecting Himalayan authenticity.'
    ],
    githubUrl: 'https://github.com/SanchitKRai'
  },
  {
    id: 'voidcult',
    title: 'VØIDCULT — Futuristic Streetwear E-Commerce UI',
    shortTitle: 'VØIDCULT',
    category: 'Web UI/UX & Product Design',
    badge: 'Fashion / E-Commerce',
    tagline: 'Code, Honor, Repeat. Brutalist techwear digital experience.',
    overview: 'Brutalist typography, high-contrast dark aesthetic, scrolling ticker headers, manifesto & lookbook storytelling structure.',
    metrics: [
      { label: 'Style', value: 'Cyber-Brutalist' },
      { label: 'Navigation', value: 'Manifesto + Lookbook' },
      { label: 'Palette', value: 'Monochrome High-Contrast' }
    ],
    tech: ['Brutalist Typography', 'E-Commerce UI', 'Lookbook Systems', 'Figma Auto-Layout'],
    image: './images/project-voidcult.png',
    featured: false,
    highlights: [
      'Crafted unapologetic cyber-brutalist digital storefront tailored for oversized streetwear enthusiasts.',
      'Integrated dynamic ticker headers, vertical rule markers, and immersive lookbook photography grids.',
      'Structured brand manifesto to bridge fashion identity with technical discipline.'
    ],
    githubUrl: 'https://github.com/SanchitKRai'
  }
];

export const services = [
  {
    category: 'Data Science & Machine Learning',
    title: 'For Founders, Biotech & Data Teams',
    description: 'Transforming biological and enterprise data into high-accuracy predictive engines, automated ML pipelines, and production-grade tools.',
    offerings: [
      { title: 'End-to-End ML Pipelines', desc: 'From data cleansing and feature engineering to model training, cross-validation, and deployment with FastAPI or Streamlit.' },
      { title: 'Computational Biology & Chemoinformatics', desc: 'Molecular docking surrogates, RDKit chemical fingerprints, protein-ligand screening, and bioinformatics sequence analysis.' },
      { title: 'Health Signal & Time-Series Modeling', desc: 'Continuous sensor telemetry, digital twin forecasting, and physiological spike risk prediction (XGBoost, ARIMA, Prophet).' },
      { title: 'Explainable AI (XAI) & Interpretability', desc: 'SHAP waterfall attribution and feature importance analyses that make complex model predictions defensible and auditable.' }
    ]
  },
  {
    category: 'Product Design & Frontend Engineering',
    title: 'For Brands, SaaS & Modern Products',
    description: 'Designing high-converting digital products, luxury dark-mode landing pages, and interactive UI systems engineered to sell and inspire.',
    offerings: [
      { title: 'High-Impact Landing Pages', desc: 'Conversion-engineered web architectures with editorial typography, smooth motion, and 3D visual showcases.' },
      { title: 'Interactive Web Applications', desc: 'Modern responsive web applications built with React, Tailwind CSS, Vite, and client-side statistical engines.' },
      { title: 'Design Systems & Figma-to-Code', desc: 'Structured component libraries, token systems, and pixel-perfect implementation with organized layer hierarchies.' },
      { title: 'Conversational AI & Dashboard Interfaces', desc: 'Engaging chatbot frontends, prompt chip ecosystems, and dense telemetry dashboards built for clarity.' }
    ]
  }
];

export const processSteps = [
  {
    number: '01',
    name: 'Discovery',
    title: 'Problem Framing & Data Audit',
    desc: 'Unpacking domain constraints, defining ground-truth success metrics, and auditing dataset quality or user journey requirements.'
  },
  {
    number: '02',
    name: 'Architecture',
    title: 'System & Experience Blueprint',
    desc: 'Structuring model pipelines, selecting algorithms (XGBoost, Random Forest, PyTorch), or drafting wireframes and conversion flow.'
  },
  {
    number: '03',
    name: 'Build',
    title: 'Rapid Engineering & Synthesis',
    desc: 'Writing clean, vectorized Python pipelines or modular React components. Fast iterative sprints with continuous deliverables.'
  },
  {
    number: '04',
    name: 'Iterate',
    title: 'Rigorous Empirical Validation',
    desc: 'Testing generalization with held-out validation sets, cross-validation R² checks, latency stress-testing, and UX audits.'
  },
  {
    number: '05',
    name: 'Launch',
    title: 'Deployment & Knowledge Transfer',
    desc: 'Deploying to cloud endpoints (FastAPI, Streamlit, Vercel), setting up documentation, and ensuring full maintainability.'
  }
];

export const personalityCards = [
  {
    id: 'clean',
    title: 'Anything that’s clean.',
    subtitle: 'Minimal Editorial',
    bg: 'bg-[#121c17] text-[#eae5d9] border-[#223b2c]',
    accent: '#d4a373',
    desc: 'White space as a feature. Razor-sharp typography and intentional restraint where every single pixel serves a communication purpose.'
  },
  {
    id: 'human',
    title: 'Data, made human.',
    subtitle: 'Bio & Cyber Vitality',
    bg: 'bg-[#c5f13b] text-[#0c1a11] border-[#d8fc59]',
    accent: '#0c1a11',
    desc: 'Vibrant, energetic data experiences that turn dense biological sequences and complex models into engaging, palpable stories.'
  },
  {
    id: 'facts',
    title: 'Decisions, from facts.',
    subtitle: 'Evidence-First Rigor',
    bg: 'bg-[#080e0a] text-[#eae5d9] border-[#1a2d21]',
    accent: '#e2a84b',
    desc: 'No vague guesswork. Models with verified R² validation metrics, explainable SHAP attributions, and bulletproof statistical foundations.'
  }
];

export const faqs = [
  {
    q: 'What types of projects do you take on?',
    a: 'I specialize in two complementary areas: (1) Data Science, Machine Learning, and Computational Biology (predictive models, bioinformatics tooling, time-series forecasting, interactive Streamlit/FastAPI apps) and (2) High-impact Product Design & Web Engineering (custom React/Tailwind websites, luxury brand landing pages, and interactive dashboards).'
  },
  {
    q: 'How does your background in Life Sciences enhance your data science work?',
    a: 'Biological data is famously high-dimensional, noisy, and non-linear. Training at the intersection of life sciences and computational algorithms gives me deep intuition for feature engineering, biochemical mechanisms, and rigorous experimental validation—ensuring models generalize instead of overfitting.'
  },
  {
    q: 'Can you help deploy models to live web applications?',
    a: 'Yes! Rather than leaving machine learning code stuck in Jupyter Notebooks, I build production-ready applications with FastAPI backends, Streamlit interactive consoles, and modern React/Tailwind frontends hosted on platforms like Vercel, Streamlit Cloud, or AWS.'
  },
  {
    q: 'What is your typical project timeline and collaboration model?',
    a: 'Timelines vary from 1–2 weeks for focused landing pages or ML proof-of-concepts, to 4–8 weeks for comprehensive end-to-end data products. I work with clear milestone deliverables, weekly syncs, and transparent progress updates.'
  },
  {
    q: 'Are you available for freelance projects or full-time opportunities?',
    a: 'Yes, I am currently available for select freelance contracts, research collaborations, and full-time engineering/data science roles.'
  }
];
