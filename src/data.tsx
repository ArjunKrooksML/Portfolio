import { Brain, Workflow, Rocket, Camera, Database, Cloud } from 'lucide-react';
import { Skill, Project, Experience } from './types';

// Skills Data
export const skillsData: Skill[] = [
  {
    id: 1,
    title: 'LLM Engineering',
    icon: <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      'Prompt design, evaluation & guardrailing (RAGAS, G-Eval)',
      'Fine-tuning Qwen, Llama & Mistral model families',
      'Retrieval-augmented generation with Chroma & Qdrant',
      'Latency-aware inference with vLLM, Ollama & Azure AI',
      'Safety, moderation & hallucination mitigation blueprints',
    ],
  },
  {
    id: 2,
    title: 'Agentic AI Systems',
    icon: <Workflow className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      'CrewAI multi-agent orchestration & delegation',
      'LangGraph state machines and tool-calling strategies',
      'Event-driven A2A workflows with FastAPI toolchains',
      'Memory, planning & task routing for autonomous agents',
      'Production telemetry, monitoring & feedback loops',
    ],
  },
  {
    id: 3,
    title: 'Generative AI Tooling',
    icon: <Rocket className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      'LangChain & LangGraph integrations',
      'Prompt templating, evaluation harnesses & guardrails',
      'Amazon Strands SDK & OpenAI API orchestration',
      'Vector-store governance & schema design best practices',
      'Hugging Face, Unsloth & vLLM for model serving',
    ],
  },
  {
    id: 4,
    title: 'Computer Vision & NLP',
    icon: <Camera className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      'YOLOv8 detection and DeepSORT multi-object tracking',
      'Document AI with OCR, summarisation & insight extraction',
      'Transformer-based NLP (BERT, MiniLM, Instructor)',
      'Multimodal fusion & structured output generation',
      'Dataset curation, augmentation & evaluation pipelines',
    ],
  },
  {
    id: 5,
    title: 'Data & Analytics Infrastructure',
    icon: <Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      'PostgreSQL, MongoDB & Redis for AI-centric workloads',
      'Feature stores, embeddings lifecycle & vector governance',
      'FastAPI microservices, REST gateways & async task queues',
      'Secure RBAC, multi-tenant architectures & API observability',
      'Realtime analytics surfaces with Power BI & Chart.js',
    ],
  },
  {
    id: 6,
    title: 'Cloud & MLOps',
    icon: <Cloud className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      'AWS (EC2, CloudWatch) & GCP for AI workloads',
      'CI/CD pipelines with GitHub Actions & Docker',
      'Nginx reverse proxy, SystemD & environment automation',
      'Model serving with FastAPI & serverless endpoints',
      'Security, compliance & cost optimisation for AI systems',
    ],
  },
];

// Projects Data
export const projectsData: Project[] = [
  {
    id: 1,
    title: 'DataQuery: Text-to-SQL Visual Analytics',
    description:
      'Natural language to SQL system that delivers governed dashboards, role-based access, and analytical insights for business teams.',
    image:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'agentic-ai',
    technologies: [
      'Qwen 8B',
      'LangChain',
      'FastAPI',
      'PostgreSQL',
      'Next.js',
      'Chart.js',
    ],
    githubUrl: 'https://github.com/ArjunKrooksML/DataQuery-Text2SQLDashboard',
  },
  {
    id: 2,
    title: 'Restaurant RAG Recommender Agent',
    description:
      'LLM concierge that curates Bengaluru dining recommendations using retrieval augmented generation and conversational planning.',
    image:
      'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'rag-system',
    technologies: [
      'Llama 3.1 8B',
      'LangChain',
      'ChromaDB',
      'FastAPI',
      'MiniLM Embeddings',
    ],
    githubUrl: 'https://github.com/ArjunKrooksML/Restaurant_Recommender-Llama3.1-8B-',
  },
  {
    id: 3,
    title: 'SVAAS Employee Tracking System',
    description:
      'Production HR and payroll platform with dual portals (admin & employee) actively used by SVAAS Inframax Solutions. Features JWT auth with refresh token rotation, 4-tier RBAC, GPS attendance, automated PDF payslips, Kanban task board, and WhatsApp alerts.',
    image:
      '/svaashr.png',
    category: 'full-stack',
    technologies: [
      'React',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'Supabase',
      'Twilio',
      'dnd-kit',
    ],
    liveUrl: 'https://admin.svaasinfra.in',
  },
];

// Experience Data
export const experienceData: Experience[] = [
  {
    period: 'August 2025 - January 2026',
    role: 'AI/ML Developer',
    organization: 'TechAhead',
    description: 'Converted from intern to full-time AI/ML Developer by delivering production-ready AI microservices.',
    achievements: [
      'Architected multi-agent CrewAI and LangGraph workflow with Redis caching, improving event scheduling efficiency by 40%',
      'Deployed Dockerized FastAPI microservices on AWS EC2 with Nginx reverse proxy, SystemD services, and CloudWatch monitoring',
      'Built a model-first agentic system using Amazon Strands SDK for healthcare and fitness workflows',
    ],
  },
  {
    period: 'July 2025 - August 2025',
    role: 'AI Engineer Intern',
    organization: 'TechAhead',
    description: 'Worked on Generative and Agentic solutions for data analysis and visualization.',
    achievements: [
      'Fine-tuned Qwen 8B using Unsloth on XlangAI SQL-NLU dataset, improving text-to-SQL accuracy by 10% with optimised Postgres integration',
      'Implemented LLM-based SQL query validation with rule constraints, improving correctness by 15-20% and reducing API calls via Redis caching',
      'Engineered multi-agent orchestration workflow for a low/no-code automation platform using LangChain tools and embeddings',
    ],
  },
  {
    period: 'January 2025 - May 2025',
    role: 'Data Science Intern',
    organization: 'SVAAS Inframax Solutions',
    description: 'Built internal AI automation and safety compliance solutions across scheduling, document intelligence, and computer vision.',
    achievements: [
      'Developed AI scheduling assistant using Mistral 7B with Google Calendar API and OAuth2 for automated event management',
      'Built OCR and LLM summarisation pipeline using PyTesseract and Sentence Transformers for invoice and report analysis',
      'Implemented YOLOv8 PPE detection system in PyTorch for real-time construction site safety compliance monitoring',
    ],
  },
  {
    period: 'June 2024 - July 2024',
    role: 'Project Intern',
    organization: 'CSIR - National Aerospace Laboratories',
    description: 'Designed and validated real-time object detection and tracking systems for UAV applications.',
    achievements: [
      'Designed object detection and tracking workflow for Loitering Munition UAV systems with real-time inference capability',
      'Re-trained YOLOv8 on VisDrone Dataset with DeepSORT tracking, achieving 95% average confidence',
      'Validated model outputs on an embedded flight controller for UAV integration',
    ],
  },
  {
    period: 'August 2021 - May 2025',
    role: 'B.Tech in Computer Science & Engineering (AI & ML)',
    organization: 'Jain University, Faculty of Engineering and Technology',
    description: 'Undergraduate studies with specialisation in Artificial Intelligence and Machine Learning. CGPA: 8.0/10.',
  },
];
