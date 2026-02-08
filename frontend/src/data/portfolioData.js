// Portfolio Data - Manaswin Manoj
export const personalInfo = {
  name: "Manaswin Manoj",
  title: "AI/ML Engineer",
  tagline: "The AI/ML Engineer Chronicles",
  email: "manaswinmanoj1947@gmail.com",
  phone: "+91 8921198356",
  github: "https://github.com/ManaswinManoj",
  linkedin: "https://linkedin.com/in/manaswin-manoj",
  resumeUrl: "https://drive.google.com/file/d/1KoWDrV1feR4oAG5UKwIJ5EsaZKk9cARE/view?usp=sharing",
  location: "Bangalore, India",
  summary: "Building intelligent systems that solve real-world problems. From architecting production-grade data pipelines at Ushur AI to developing defense-critical ship classification systems at DRDO. Specializing in Deep Learning, Generative AI, and Production-Scale ML Engineering."
};

export const heroStats = [
  { value: "18+", label: "Months Experience" },
  { value: "95.6%", label: "Defense AI Accuracy" },
  { value: "1st", label: "Place IIT Madras" },
  { value: "100K+", label: "Users Impacted" }
];

export const profiles = [
  {
    id: "recruiter",
    name: "Recruiter",
    description: "Hiring managers & talent scouts",
    icon: "Briefcase",
    color: "hsl(199, 89%, 48%)",
    bgClass: "from-sky-500 to-blue-600"
  },
  {
    id: "developer",
    name: "Developer",
    description: "Fellow engineers & tech enthusiasts",
    icon: "Code",
    color: "hsl(0, 0%, 55%)",
    bgClass: "from-gray-500 to-gray-700"
  },
  {
    id: "collaborator",
    name: "Collaborator",
    description: "Potential project partners",
    icon: "Users",
    color: "hsl(0, 84%, 45%)",
    bgClass: "from-red-600 to-red-700"
  },
  {
    id: "explorer",
    name: "Explorer",
    description: "Anyone curious about AI/ML",
    icon: "Sparkles",
    color: "hsl(45, 93%, 47%)",
    bgClass: "from-yellow-500 to-amber-600"
  }
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Professional" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export const experiences = [
  {
    id: "ushur",
    title: "AI Data Engineering & Analytics Intern",
    company: "Ushur AI",
    location: "Bangalore, India",
    dateRange: "Jul 2025 - Jan 2026",
    duration: "7 months",
    type: "Full-time Internship",
    description: "Led the development of production-grade AI infrastructure and analytics platforms, working at the intersection of data engineering, LLM applications, and enterprise AI deployment.",
    achievements: [
      "Architected production-grade data pipelines supporting 100K+ customer interactions, improving reliability by 35% and reducing latency by 40%",
      "Engineered Conversational Analytics using GPT-4 and LangChain with 92% query accuracy, accelerating BI workflows by 3x",
      "Implemented RAG workflows using LangGraph and vector databases, enhancing response accuracy by 28%",
      "Optimized Yellowbrick data warehouse queries by 50% through advanced indexing strategies",
      "Delivered 5+ AI-powered features impacting 50K+ end users"
    ],
    technologies: ["Python", "GPT-4", "LangChain", "LangGraph", "Vector DBs", "Yellowbrick", "PostgreSQL", "Flask", "Docker", "AWS"],
    gradient: "from-blue-500 to-blue-700",
    iconBg: "bg-blue-500",
    metrics: [
      { label: "Daily Interactions", value: "100K+" },
      { label: "Reliability Improvement", value: "35%" },
      { label: "Query Accuracy", value: "92%" },
      { label: "Users Impacted", value: "50K+" }
    ]
  },
  {
    id: "drdo",
    title: "Deep Learning Research Intern",
    company: "DRDO - Defence Research & Development Laboratory",
    location: "Bangalore, India",
    dateRange: "Mar 2025 - May 2025",
    duration: "3 months",
    type: "Research Internship",
    description: "Conducted cutting-edge deep learning research for national defense applications, focusing on computer vision and signal processing for threat detection and classification.",
    achievements: [
      "Developed CNN-based models achieving 95.6% classification accuracy for ship detection from ISAR imagery",
      "Built end-to-end ML pipeline with Flask REST API for automated training and real-time inference",
      "Conducted comprehensive model evaluation using precision-recall analysis and ROC curves",
      "Optimized model architecture reducing inference time by 60% while maintaining 95%+ accuracy"
    ],
    technologies: ["TensorFlow", "Keras", "PyTorch", "CNN", "Computer Vision", "Flask", "Docker", "REST API"],
    gradient: "from-slate-600 to-slate-800",
    iconBg: "bg-red-600",
    metrics: [
      { label: "Classification Accuracy", value: "95.6%" },
      { label: "Inference Time Reduction", value: "60%" },
      { label: "Ship Classifications", value: "10+" },
      { label: "Processing Speed", value: "<100ms" }
    ]
  },
  {
    id: "phoenix",
    title: "Machine Learning Engineering Intern",
    company: "Phoenix Solutions",
    location: "Bangalore, India",
    dateRange: "Jun 2024 - Aug 2024",
    duration: "3 months",
    type: "ML Engineering Internship",
    description: "Designed and deployed predictive maintenance solutions for industrial IoT systems, combining machine learning, time-series analysis, and real-time alerting.",
    achievements: [
      "Designed predictive maintenance system for 50+ industrial machines with 92% failure prediction accuracy",
      "Engineered feature extraction pipeline reducing false positives by 35%",
      "Developed interactive Tableau dashboards for machine health KPIs and risk scores",
      "Deployed Flask-based ML microservice reducing unplanned downtime by 40%"
    ],
    technologies: ["Python", "Scikit-learn", "Random Forest", "XGBoost", "Tableau", "Flask", "Docker", "AWS EC2"],
    gradient: "from-purple-600 to-purple-800",
    iconBg: "bg-purple-500",
    metrics: [
      { label: "Machines Monitored", value: "50+" },
      { label: "Prediction Accuracy", value: "92%" },
      { label: "False Positive Reduction", value: "35%" },
      { label: "Downtime Reduction", value: "40%" }
    ]
  }
];

export const education = [
  {
    id: "btech",
    title: "Bachelor of Technology in Computer Science",
    institution: "Dayananda Sagar University",
    location: "Bangalore, India",
    dateRange: "Aug 2022 - May 2026",
    focus: "Artificial Intelligence & Machine Learning",
    gradient: "from-emerald-500 to-emerald-700",
    icon: "GraduationCap"
  },
  {
    id: "nanodegree",
    title: "Product Management with GenAI & Agentic AI",
    institution: "BITS School of Management",
    location: "Online",
    dateRange: "Jul 2025 - Present",
    focus: "Nano Degree Program",
    gradient: "from-orange-500 to-orange-700",
    icon: "Award"
  }
];

export const projects = [
  {
    id: "sports-analytics",
    title: "AI-Powered Sports Analytics Platform",
    category: "Computer Vision | Real-time Processing",
    shortDescription: "Real-time player detection, tracking, and action recognition system",
    description: "Built computer vision system using YOLOv8 and DeepSORT for real-time player detection, tracking, and action recognition. Reduced manual video analysis time by 80% through automated performance metrics generation.",
    technologies: ["YOLOv8", "DeepSORT", "OpenCV", "PyTorch", "Flask", "React"],
    metrics: [
      { label: "Time Saved", value: "80%" },
      { label: "Detection Accuracy", value: "95%" },
      { label: "Processing Speed", value: "30 FPS" }
    ],
    progress: 100,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    featured: true,
    matchScore: 98
  },
  {
    id: "brain-tumor",
    title: "Medical Image Analysis - Brain Tumor Detection",
    category: "Medical AI | Deep Learning",
    shortDescription: "CNN and U-Net architectures for automated brain tumor detection from MRI scans",
    description: "Implemented CNN and U-Net architectures achieving 94% accuracy on MRI scans. Developed complete diagnostic pipeline with image preprocessing, augmentation, and model interpretability using Grad-CAM.",
    technologies: ["TensorFlow", "Keras", "U-Net", "CNN", "Grad-CAM", "SimpleITK"],
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Dice Coefficient", value: "0.89" },
      { label: "Tumor Types", value: "4" }
    ],
    progress: 94,
    thumbnail: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    featured: true,
    matchScore: 96
  },
  {
    id: "lung-cancer",
    title: "Lung Cancer Detection System",
    category: "Medical AI | Ensemble Learning",
    shortDescription: "High-accuracy ensemble ML system for early lung cancer detection",
    description: "Engineered ensemble ML models (Random Forest, SVM, Neural Networks) achieving 96.5% accuracy. Performed comprehensive feature engineering and hyperparameter optimization using Grid-SearchCV.",
    technologies: ["Scikit-learn", "XGBoost", "Random Forest", "SVM", "TensorFlow", "SHAP"],
    metrics: [
      { label: "Accuracy", value: "96.5%" },
      { label: "AUC-ROC", value: "0.97" },
      { label: "Features Engineered", value: "100+" }
    ],
    progress: 96.5,
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    featured: true,
    matchScore: 95
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection & Risk Analytics",
    category: "Financial AI | Real-time Systems",
    shortDescription: "Production-ready fraud detection with 99% accuracy using XGBoost",
    description: "Built binary classification system with 99% accuracy and 0.98 F1-score using XGBoost. Implemented SMOTE for imbalanced data handling and developed real-time fraud scoring API.",
    technologies: ["XGBoost", "SMOTE", "Flask", "FastAPI", "Redis", "PostgreSQL"],
    metrics: [
      { label: "Accuracy", value: "99%" },
      { label: "F1-Score", value: "0.98" },
      { label: "Inference Time", value: "<50ms" }
    ],
    progress: 99,
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    featured: true,
    matchScore: 99
  }
];

export const skills = [
  {
    id: "programming",
    category: "Programming Languages",
    icon: "Code2",
    gradient: "from-blue-500 to-blue-700",
    items: [
      { name: "Python", proficiency: 5 },
      { name: "SQL", proficiency: 5 },
      { name: "C++", proficiency: 4 },
      { name: "JavaScript", proficiency: 3 }
    ]
  },
  {
    id: "ai-ml",
    category: "AI/ML Frameworks",
    icon: "Brain",
    gradient: "from-purple-500 to-purple-700",
    items: [
      { name: "TensorFlow", proficiency: 5 },
      { name: "PyTorch", proficiency: 5 },
      { name: "Scikit-learn", proficiency: 5 },
      { name: "Keras", proficiency: 5 },
      { name: "XGBoost", proficiency: 4 },
      { name: "LangChain", proficiency: 4 }
    ]
  },
  {
    id: "gen-ai",
    category: "Generative AI & LLMs",
    icon: "Sparkles",
    gradient: "from-emerald-500 to-emerald-700",
    items: [
      { name: "GPT-4", proficiency: 5 },
      { name: "Claude", proficiency: 4 },
      { name: "RAG Architecture", proficiency: 5 },
      { name: "Prompt Engineering", proficiency: 5 },
      { name: "Vector DBs", proficiency: 4 },
      { name: "Agentic AI", proficiency: 4 }
    ]
  },
  {
    id: "data-science",
    category: "Data Science & Analytics",
    icon: "BarChart3",
    gradient: "from-orange-500 to-orange-700",
    items: [
      { name: "Pandas", proficiency: 5 },
      { name: "NumPy", proficiency: 5 },
      { name: "Matplotlib", proficiency: 4 },
      { name: "Seaborn", proficiency: 4 },
      { name: "Statistical Modeling", proficiency: 4 },
      { name: "A/B Testing", proficiency: 4 }
    ]
  },
  {
    id: "cloud-devops",
    category: "Cloud & DevOps",
    icon: "Cloud",
    gradient: "from-cyan-500 to-cyan-700",
    items: [
      { name: "AWS (EC2, S3, Lambda)", proficiency: 4 },
      { name: "Docker", proficiency: 5 },
      { name: "Git", proficiency: 5 },
      { name: "CI/CD", proficiency: 4 },
      { name: "REST APIs", proficiency: 5 }
    ]
  },
  {
    id: "tools",
    category: "Tools & Platforms",
    icon: "Wrench",
    gradient: "from-red-500 to-red-700",
    items: [
      { name: "Jupyter", proficiency: 5 },
      { name: "VS Code", proficiency: 5 },
      { name: "Tableau", proficiency: 4 },
      { name: "Power BI", proficiency: 4 },
      { name: "Jira", proficiency: 4 },
      { name: "Confluence", proficiency: 4 }
    ]
  }
];

export const achievements = [
  {
    id: "iit-madras",
    title: "1st Place - ICON '26",
    subtitle: "IIT Madras Research Park",
    description: "Published research on Autonomous Supply Chain Optimization using Proximal Policy Optimization (PPO) and digital twin technology",
    badge: "WINNER",
    badgeColor: "bg-yellow-500",
    metrics: ["80% variance reduction", "25% cost optimization", "Top 1/160 teams"],
    gradient: "from-yellow-500 to-amber-600",
    icon: "Trophy"
  },
  {
    id: "drdo-excellence",
    title: "95.6% Accuracy Achievement",
    subtitle: "DRDO Defense AI Model",
    description: "Developed state-of-the-art ship classification system from ISAR imagery for defense intelligence",
    badge: "EXCELLENCE",
    badgeColor: "bg-emerald-500",
    metrics: ["60% faster inference", "Real-time processing", "10+ classifications"],
    gradient: "from-slate-600 to-slate-800",
    icon: "Target"
  },
  {
    id: "production-scale",
    title: "100,000+ Users Impacted",
    subtitle: "Ushur AI Enterprise Platform",
    description: "Production AI features at scale impacting enterprise customers",
    badge: "IMPACT",
    badgeColor: "bg-blue-500",
    metrics: ["5+ features", "50K+ end users", "35% reliability boost"],
    gradient: "from-blue-500 to-blue-700",
    icon: "Users"
  },
  {
    id: "performance",
    title: "60% Faster Inference",
    subtitle: "Model Optimization",
    description: "Real-time threat assessment enabled through optimized architectures",
    badge: "PERFORMANCE",
    badgeColor: "bg-red-500",
    metrics: ["95%+ accuracy maintained", "<100ms inference", "Production deployed"],
    gradient: "from-red-500 to-red-700",
    icon: "Zap"
  }
];

export const certifications = [
  {
    id: "deep-learning",
    title: "Deep Learning Specialization",
    provider: "Coursera - Andrew Ng",
    icon: "Award",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "ibm-ml",
    title: "Machine Learning with Python",
    provider: "IBM",
    icon: "Award",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    id: "aws",
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    icon: "Cloud",
    gradient: "from-orange-500 to-orange-700"
  },
  {
    id: "sql",
    title: "Advanced SQL for Data Analytics",
    provider: "DataCamp",
    icon: "Database",
    gradient: "from-emerald-500 to-emerald-700"
  }
];

export const topPicks = [
  {
    id: "impact",
    title: "100K+ Users Impacted",
    subtitle: "Production-Grade AI Features",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
    type: "highlight"
  },
  {
    id: "accuracy",
    title: "95.6% Accuracy",
    subtitle: "DRDO Defense AI Model",
    thumbnail: "https://images.unsplash.com/photo-1645839078449-124db8a049fd?w=400&h=225&fit=crop",
    type: "highlight"
  },
  {
    id: "winner",
    title: "1st Place - IIT Madras",
    subtitle: "Supply Chain Optimization",
    thumbnail: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=225&fit=crop",
    type: "achievement"
  },
  {
    id: "experience",
    title: "18+ Months Experience",
    subtitle: "3 Companies • Production AI",
    thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=225&fit=crop",
    type: "highlight"
  },
  {
    id: "genai",
    title: "GPT-4 & RAG Systems",
    subtitle: "92% Query Accuracy",
    thumbnail: "https://images.unsplash.com/photo-1677442135968-6054a2f76875?w=400&h=225&fit=crop",
    type: "skill"
  }
];

// Images for hero and backgrounds
export const images = {
  hero: "https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?w=1920&h=1080&fit=crop",
  heroAlt: "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1920&h=1080&fit=crop",
  network: "https://images.unsplash.com/photo-1645839078449-124db8a049fd?w=1920&h=1080&fit=crop"
};
