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
      'Retrieval-augmented generation with Chroma & Pinecone',
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
      'LangChain, LangSmith & LangServe integrations',
      'Prompt templating, evaluation harnesses & guardrails',
      'Bedrock, Azure OpenAI & OpenAI API orchestration',
      'Vector-store governance & schema design best practices',
      'Automation with Airflow, Prefect & serverless triggers',
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
      'AWS (EC2, S3, Lambda) & GCP for AI workloads',
      'CI/CD pipelines with GitHub Actions & Docker',
      'Infrastructure-as-code & environment automation',
      'Model serving with FastAPI, BentoML & serverless endpoints',
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
      'AWS Bedrock',
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
      'data:image/jpeg;base64,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',
    category: 'rag-system',
    technologies: [
      'Llama 3.1 8B',
      'LangChain',
      'Chroma DB',
      'FastAPI',
      'Next.js',
      'MiniLM Embeddings',
    ],
    githubUrl: 'https://github.com/ArjunKrooksML/Restaurant_Recommender-Llama3.1-8B-',
    
  },
];

// Experience Data
export const experienceData: Experience[] = [
  {
    period: 'September 2025 - Present',
    role: 'AI/ML Developer',
    organization: 'TechAhead',
    description: 'Full-Time conversion, working on AI based Backend Solutions',
    achievements: [
      'Working on FastAPI based Backend solutions for AI',
      'Automated Event scheduling and Communication',
      'Making healthy contributions to the CI/CD pipelines',      
    ],
  },
  {
    period: 'July 2025 - September 2025',
    role: 'Machine Learning Intern',
    organization: 'TechAhead',
    description: 'Worked on Generative and Agentic solutions for Data Analysis and Visualization.',
    achievements: [
      'Text 2 SQL agent with Redis caching',
      'Visualization achieved using Chart.js',
      'Working chat history models and authentication',      
    ],
  },
  {
    period: 'January 2025 - May 2025',
    role: 'Data Science Intern',
    organization: 'SVAAS Inframax Solutions',
    description: 'Data Science Intern with internal automation and compliance solutions.',
    achievements: [
      'Mistral 7B LLM and Google Calendar API with OAuth 2.0 for automated event scheduling.',
      'YOLOv8 PPE Detection System in PyTorch for real-time safety compliance OH-SAS in construction sites.',
      'Worked on rebuilding the Company Website',
      'PyTesseract and LLM summarization to extract insights from scanned company invoices and reports.',
    ],
  },
  {
    period: '2021 - 2025',
    role: 'B.Tech in Computer Science & Engineering (AI & ML)',
    organization: 'Jain University',
    description: 'Undergraduate studies with specialization in Artificial Intelligence and Machine Learning.',
  },
  {
    period: '2005 - 2021',
    role: 'Student',
    organization: 'Billabong High International School, Noida',
    description: 'Completed high school education with focus on Mathematics, Physics, and Computer Science.',
  },
];