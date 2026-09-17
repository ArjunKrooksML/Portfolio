import { Brain, Workflow, Rocket, Camera, Database, Cloud } from 'lucide-react';
import { Skill, Project, Experience } from './types';

// Skills Data
export const skillsData: Skill[] = [
  {
    id: 1,
    title: 'LLM Engineering & Fine-Tuning',
    icon: <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      'Fine-tuned Qwen 8B (LoRA/PEFT via Unsloth, quantized) on Spider & SQL-NLU datasets, lifting Text-to-SQL accuracy by 10%',
      'Evaluation & hallucination testing with RAGAS, G-Eval, and LLM-as-a-Judge frameworks before production rollout',
      'Low-latency model serving with vLLM, Ollama, Hugging Face & Azure ML endpoints',
      'LLM-based guardrails and query validation, improving correctness by 15-20%',
      'Prompt design, structured outputs & few-shot optimisation across GPT-4o, Qwen & Mistral',
    ],
  },
  {
    id: 2,
    title: 'Agentic AI Systems',
    icon: <Workflow className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      'Multi-agent orchestration & delegation with CrewAI, LangGraph & AutoGen',
      "LangGraph state machines with the Send API for parallel task execution",
      'Tool-calling agents via the OpenAI Agents SDK & Amazon Strands SDK',
      'Redis-backed memory & task routing — cut event-scheduling latency by 40%',
      'Human-in-the-loop interrupts and production telemetry for autonomous agents',
    ],
  },
  {
    id: 3,
    title: 'RAG & Retrieval Systems',
    icon: <Rocket className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      'Retrieval-augmented generation pipelines with ChromaDB & Qdrant',
      'Embeddings lifecycle management & semantic chunking for domain corpora',
      'Multi-tenant vector governance, schema design & reranking strategies',
      'LangChain-based RAG orchestration with conversational memory',
      'Redis caching layers to cut redundant LLM calls and latency at scale',
    ],
  },
  {
    id: 4,
    title: 'Computer Vision & NLP',
    icon: <Camera className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      'YOLOv8 detection with DeepSORT tracking — 95% average confidence on UAV imagery',
      'OpenCV & PyTorch pipelines for real-time detection and PPE compliance monitoring',
      'Document AI: OCR (PyTesseract) plus LLM summarisation for invoice & report ingestion',
      'Transformer-based NLP and model training with Hugging Face & TensorFlow',
      'Dataset curation, augmentation & evaluation pipelines',
    ],
  },
  {
    id: 5,
    title: 'Data & Backend Infrastructure',
    icon: <Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      'FastAPI & Flask microservices with async task queues and REST gateways',
      'PostgreSQL, MySQL, MongoDB, Redis & Supabase across AI and transactional workloads',
      'JWT auth, refresh-token rotation & tiered RBAC for multi-tenant systems',
      'Pandas & Scikit-learn for data wrangling, feature engineering & analysis',
      'Realtime analytics and reporting with Power BI and Chart.js',
    ],
  },
  {
    id: 6,
    title: 'Cloud, DevOps & Deployment',
    icon: <Cloud className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    skills: [
      'Dockerized deployments on AWS EC2 with Nginx reverse proxy, SystemD & CloudWatch',
      'Git-based version control and Jira-driven sprint workflows',
      'Frontend/backend hosting via Vercel, Render & Firebase',
      'Environment automation, secrets management & cost-aware infrastructure design',
      'Load testing & observability with Locust, sustaining 120 req/s at 180ms p95 under production traffic',
    ],
  },
];

// Projects Data
export const projectsData: Project[] = [
  {
    id: 1,
    title: 'DataQuery: Text-to-SQL Visual Analytics',
    description:
      'Fine-tuned and quantized Qwen 8B on the Spider dataset (5,000+ NL-SQL pairs), lifting execution accuracy on multi-join queries by 10% over base. Multi-tenant Next.js and FastAPI stack with row-level RBAC preventing cross-tenant data leakage, plus dynamic Chart.js dashboard generation from natural-language prompts for non-technical self-serve data exploration.',
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
    title: 'Blood Report Analyser: Agentic Reports Hub',
    description:
      "Engineered a 7-node LangGraph pipeline with parallel per-panel extraction (Send API) and a self-critique/retry loop, cutting end-to-end report processing latency by around 50%. A GPT-4o ReAct agent cross-correlates markers across panels to surface multi-marker clinical syndromes invisible to single-panel review, backed by a longitudinal trend engine that projects threshold-crossing dates from patient history and a human-in-the-loop interrupt for unstructured data.",
    image:
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'agentic-ai',
    technologies: ['LangGraph', 'GPT-4o', 'ReAct', 'Send API', 'Python'],
  },
  {
    id: 3,
    title: 'SVAAS Employee Tracking System',
    description:
      'Production HR and operations platform (React/TypeScript, FastAPI, PostgreSQL/Supabase) across two role-scoped portals covering attendance, payroll, tasks, leaves, expenses, procurement, and inventory for a live company. Features JWT auth with refresh-token rotation, 4-tier RBAC, a payroll engine integrating GPS attendance and salary advances, a real-time inventory ledger with server-side validation, an OpenAI chatbot with role-based tool access, and WhatsApp/email notifications.',
    image:
      '/svaashr.png',
    category: 'full-stack',
    technologies: [
      'React',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'Supabase',
      'OpenAI API',
      'Twilio',
    ],
    liveUrl: 'https://admin.svaasinfra.in',
  },
];

// Experience Data
export const experienceData: Experience[] = [
  {
    period: 'August 2026 - Expected 2028',
    role: 'Masters in Data Science',
    organization: 'Stony Brook University',
    description: 'Graduate studies in Data Science, building on production AI/ML engineering experience from industry roles at TechAhead and SVAAS Inframax Solutions.',
  },
  {
    period: 'July 2025 - January 2026',
    role: 'AI/ML Developer (promoted from AI Engineer Intern)',
    organization: 'TechAhead',
    description: 'Promoted from intern to full-time AI/ML Developer after shipping production multi-agent orchestration, fine-tuning, and RAG infrastructure end-to-end.',
    achievements: [
      'Architected multi-agent event-scheduling workflows in CrewAI, LangGraph, and Redis, cutting scheduling turnaround 40% against the manual baseline',
      'Shipped three Dockerized FastAPI microservices to AWS EC2 — video annotation, embedding generation with Qdrant storage, and the core chatbot — sustaining 120 req/s at 180ms p95 under Locust load testing',
      'Cut invalid Text-to-SQL generations 15-20% with an LLM-as-a-Judge evaluation framework, via guardrail-based query validation and Redis caching to remove redundant model API calls',
      'Rebuilt healthcare and fitness advisory flows as tool-calling agents on Amazon Strands and the OpenAI Agents SDK',
    ],
  },
  {
    period: 'January 2025 - May 2025',
    role: 'Data Science Intern',
    organization: 'SVAAS Inframax Solutions',
    description: 'Built internal AI automation and safety compliance solutions across scheduling, document intelligence, and computer vision.',
    achievements: [
      'Built an AI scheduling assistant on Mistral 7B wired to the Google Calendar API, removing manual appointment entries for the operations team',
      'Automated invoice ingestion with a PyTesseract OCR and LLM summarisation pipeline, cutting per-invoice handling from 4 minutes to under 30 seconds',
      'Deployed a YOLOv8 PPE detection system in PyTorch, flagging real-time safety non-compliance on construction sites',
      'Shipped a production, two-portal operations platform used by active employees for attendance, payroll, and inventory tracking',
    ],
  },
  {
    period: 'June 2024 - July 2024',
    role: 'Project Vision Intern',
    organization: 'CSIR - National Aerospace Laboratories',
    description: 'Built a YOLO and VisDrone computer vision proof-of-concept performing spatial 3D object mapping from drone-mounted footage for UAV surveillance applications.',
    achievements: [
      'Designed object detection and tracking workflow for Loitering Munition UAV systems with real-time inference capability',
      'Re-trained YOLOv8 on the VisDrone dataset with DeepSORT tracking, achieving 95% average confidence',
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
