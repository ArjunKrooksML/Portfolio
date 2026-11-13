import { Experience, Project, SkillGroup, Stat } from './types';

// Source of truth: ArjunaaS_Resume.pdf. Keep this file in sync with the resume.

export const profile = {
  name: 'Arjunaa Seshadri',
  location: 'New York',
  email: 'arjunaa2003@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arjunaa-seshadri',
  github: 'https://github.com/ArjunKrooksML',
  site: 'https://www.arjunaaseshadriagentic.fun',
  resume: '/ArjunaaS_Resume.pdf',
  headline: 'I build AI agents that hold up in production.',
  summary:
    'AI Engineer with production experience shipping multi-agent systems, RAG pipelines, and fine-tuned models via LoRA/PEFT. Depth in agentic orchestration (LangGraph, CrewAI), fine-tuning and quantization, and production ML deployment on AWS/Azure. Adept with Distributed Backend frameworks and R/DBMS operations at scale.',
  focus: [
    'Multi-agent orchestration',
    'RAG pipelines',
    'Fine-tuning & quantization',
    'Production ML on AWS/Azure',
    'Distributed backends & DBMS',
  ],
};

export const stats: Stat[] = [
  { to: 120, suffix: ' req/s', label: 'sustained throughput', detail: '3 Dockerized FastAPI services on EC2' },
  { to: 180, suffix: ' ms', label: 'p95 latency', detail: 'under Locust load testing' },
  { to: 40, prefix: '−', suffix: '%', label: 'scheduling turnaround', detail: 'multi-agent workflows vs manual baseline' },
  { from: 240, to: 30, suffix: ' s', label: 'invoice processing', detail: 'down from 4 minutes (OCR + LLM parsing)' },
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'ResumeATS',
    subtitle: 'Multi-agent resume analysis with an audit trail',
    status: 'Latest build',
    featured: true,
    summary:
      'Most ATS analyzers wrap a single prompt. ResumeATS runs a stateful, agent-routed pipeline that scores a resume against a job description, screens every gap, rewrites bullets, fact-checks each rewrite, and re-scores until the result is worth keeping.',
    fourW: {
      what: 'A CrewAI Flow of seven specialised agents (Parser, JD Analyst, Scorer, Gap Analyst, Advisor, Critic, Strategist) that measures resume-to-JD fit and iteratively rewrites bullets to close real gaps, without inventing experience.',
      where:
        'A FastAPI backend (POST /analyze takes a PDF or DOCX plus a job description) with a Streamlit front end. It returns a typed report: requirement coverage matrix, JD credibility check, and a gap-by-gap audit trail.',
      when: 'Every decision point is routed at runtime. OCR retries once if the parse looks unreliable, each gap is screened before the Advisor touches it, and after every round (max 3) the Strategist chooses: stop, retry the Advisor with feedback, or re-run gap analysis.',
      how: 'CrewAI Flows with @start / @listen / @router. JD analysis, scoring and gap analysis fan out in parallel with asyncio.gather over Crew.akickoff. Every agent hand-off is a Pydantic schema, enforced by a guardrail that bounces malformed JSON back to the agent.',
    },
    highlights: [
      {
        title: 'Agent-routed control loop',
        detail:
          'The Strategist reads the score delta and rejection summary, then routes the Flow. It is a reasoning decision, not a for-loop counter, with a hard cap of 3 rounds.',
      },
      {
        title: 'Parallel fan-out',
        detail:
          'JD Analyst, Scorer and Gap Analyst share no dependencies, so they run concurrently via asyncio.gather instead of queueing behind each other.',
      },
      {
        title: 'Grounded rewrites',
        detail:
          'A Gap Screener drops gaps with no real experience behind them before the Advisor runs. The Critic then verifies each rewrite with a verify_in_resume tool call.',
      },
      {
        title: 'Immutable source of truth',
        detail:
          'The original resume text is the Critic’s reference in every round, so a round-1 hallucination can never become round-2 evidence.',
      },
      {
        title: 'Staged commits',
        detail:
          'Approved rewrites and gap closures sit in pending state and are committed only if the Strategist accepts the round. Otherwise they are discarded.',
      },
      {
        title: 'Gap lifecycle audit trail',
        detail:
          'Every gap ends as open, screened, attempted or closed, with the round and the exact rewrite that closed it. You get provenance, not just output.',
      },
      {
        title: 'Bounded agent consultation',
        detail:
          'The Advisor can consult the Gap Analyst or Critic as tools. A ContextVar call chain blocks cycles and each tool is capped at one use per step.',
      },
      {
        title: 'Contract-first and isolated',
        detail:
          'Schema guardrails feed the exact missing fields back for retry, and each Flow builds its own task objects, so concurrent analyses share no mutable state.',
      },
    ],
    metrics: [
      { value: '7', label: 'specialised agents' },
      { value: '3×', label: 'parallel analysis calls' },
      { value: '3', label: 'max refinement rounds' },
      { value: '4', label: 'tracked gap states' },
    ],
    stack: ['CrewAI Flows', 'OpenAI gpt-4o-mini', 'FastAPI', 'Pydantic', 'asyncio', 'Streamlit', 'pdfplumber', 'loguru'],
    githubUrl: 'https://github.com/ArjunKrooksML/ResumeATS',
  },
  {
    id: 2,
    title: 'Blood Report Analyser',
    subtitle: 'Agentic clinical report pipeline',
    status: 'LangGraph · GPT-4o',
    summary:
      'A 7-node LangGraph pipeline that reads blood panels in parallel, critiques its own extraction, and surfaces multi-marker clinical syndromes that single-panel review misses.',
    fourW: {
      what: 'An agentic pipeline that turns raw blood-panel reports into correlated clinical findings and forward-looking trend projections.',
      where:
        'A FastAPI service in front of a LangGraph graph. Panels and patient history go in, and cross-panel findings and projected threshold dates come out.',
      when: 'Panels are extracted in parallel. A self-critique step triggers retries when an extraction fails review, and the graph pauses on a human-in-the-loop interrupt whenever the data is unstructured.',
      how: 'LangGraph Send API for per-panel fan-out, a self-critique/retry loop, a GPT-4o ReAct agent for cross-panel correlation, and a longitudinal trend engine that projects when markers will cross thresholds.',
    },
    highlights: [
      {
        title: 'Parallel extraction + self-critique',
        detail:
          '7-node graph with per-panel extraction via the Send API and a retry loop, cutting end-to-end processing latency by around 50%.',
      },
      {
        title: 'Cross-panel reasoning',
        detail:
          'A GPT-4o ReAct agent cross-correlates markers across panels to surface multi-marker syndromes invisible to single-panel review.',
      },
      {
        title: 'Trends + human in the loop',
        detail:
          'A trend engine projects threshold-crossing dates from patient history, and an interrupt hands unstructured data to a human.',
      },
    ],
    metrics: [
      { value: '~50%', label: 'lower end-to-end latency' },
      { value: '7', label: 'graph nodes' },
    ],
    stack: ['LangGraph', 'GPT-4o', 'FastAPI', 'Send API', 'ReAct'],
    githubUrl: 'https://github.com/ArjunKrooksML/BloodReportAnalyser', // TODO: add repo link
  },
  {
    id: 3,
    title: 'DataQuery',
    subtitle: 'Text-to-SQL analytics platform',
    status: 'Fine-tuned Qwen 8B',
    summary:
      'Ask a question in plain English and get SQL, results and a dashboard. A fine-tuned Qwen 8B sits behind a multi-tenant stack that keeps every customer’s data separate.',
    fourW: {
      what: 'A Text-to-SQL analytics platform that lets non-technical users explore their data and build dashboards without writing SQL.',
      where:
        'A multi-tenant Next.js and FastAPI web app, with a dashboard layer that renders charts straight from natural-language prompts.',
      when: 'At query time: the question becomes SQL through the fine-tuned model, row-level RBAC scopes every request to its tenant, and charts are generated on demand from the prompt.',
      how: 'Qwen 8B fine-tuned and quantized with 4-bit NF4 QLoRA (Unsloth) on Spider’s 5,000+ NL-SQL pairs, served behind FastAPI, with Chart.js dashboards in Next.js.',
    },
    highlights: [
      {
        title: 'Domain-tuned model',
        detail:
          'Qwen 8B fine-tuned with 4-bit NF4 QLoRA precision on Spider (5,000+ NL-SQL pairs), lifting execution accuracy on multi-join queries 10% over base.',
      },
      {
        title: 'Tenant isolation',
        detail: 'Multi-tenant Next.js and FastAPI stack with row-level RBAC preventing cross-tenant data leakage.',
      },
      {
        title: 'Self-serve dashboards',
        detail: 'Dynamic Chart.js dashboards generated from natural-language prompts, with no SQL required.',
      },
    ],
    metrics: [
      { value: '+10%', label: 'multi-join execution accuracy vs base' },
      { value: '5,000+', label: 'NL-SQL training pairs' },
    ],
    stack: ['Qwen 8B', 'Unsloth', 'QLoRA (NF4)', 'Next.js', 'FastAPI', 'Chart.js'],
    githubUrl: 'https://github.com/ArjunKrooksML/DataQuery-Text2SQLDashboard',
  },
  {
    id: 4,
    title: 'SVAAS Employee Tracking System',
    subtitle: 'Production HR & operations platform',
    status: 'Live in production',
    summary:
      'A live, two-portal HR and operations platform used by current SVAAS employees, from GPS-verified attendance to payroll to inventory.',
    fourW: {
      what: 'A production HR and operations platform covering attendance, leave, payroll, salary advances and inventory.',
      where: 'Live at admin.svaasinfra.in, used day to day by the current employees of SVAAS Inframax Solutions through two role-scoped portals.',
      when: 'At write time: the inventory ledger rejects over-issuance on the server, and payroll reconciles GPS-verified attendance, leave policy and salary advances.',
      how: 'React and TypeScript front end, FastAPI and PostgreSQL back end, four-tier RBAC, and a role-scoped 4o-mini ops chatbot.',
    },
    highlights: [
      {
        title: 'Payroll engine',
        detail:
          'Reconciles GPS-verified attendance, leave policy, and salary advances, behind four-tier RBAC.',
      },
      {
        title: 'Server-validated inventory ledger',
        detail: 'Over-issuance is blocked at write time, so the UI can never put stock into an invalid state.',
      },
      {
        title: 'Role-scoped ops chatbot',
        detail: 'A 4o-mini chatbot that only sees what the asking user’s role is allowed to see.',
      },
    ],
    metrics: [
      { value: '2', label: 'role-scoped portals' },
      { value: '4', label: 'RBAC tiers' },
      { value: 'Live', label: 'used by current employees' },
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Supabase'],
    image: '/svaashr.png',
    githubUrl: '', // TODO: add repo link (private? leave empty to hide the button)
    liveUrl: 'https://admin.svaasinfra.in',
  },
];

export const experienceData: Experience[] = [
  {
    kind: 'education',
    period: 'August 2026 – May 2028',
    role: 'M.S. in Data Science',
    organization: 'Stony Brook University',
    location: 'Stony Brook, NY',
    current: true,
    note: 'Graduate study, building on production AI/ML engineering experience from TechAhead and SVAAS Inframax.',
  },
  {
    kind: 'work',
    period: 'July 2025 – January 2026',
    role: 'AI/ML Developer',
    organization: 'TechAhead',
    location: 'Noida, India',
    note: 'Promoted from AI Engineer Intern.',
    bullets: [
      {
        text: 'Architected multi-agent event scheduling workflows in CrewAI, LangGraph, and Redis, cutting scheduling turnaround against the manual baseline.',
        metric: '−40% turnaround',
      },
      {
        text: 'Shipped three Dockerized FastAPI microservices to AWS EC2 (video annotation, embedding generation with Qdrant storage, and the core chatbot), sustained under Locust load testing.',
        metric: '120 req/s · 180 ms p95',
      },
      {
        text: 'Reduced invalid Text-to-SQL outputs using LLM-as-a-Judge evals, deterministic schema validation, and Redis caching to eliminate redundant inference calls.',
        metric: '−20% invalid SQL',
      },
      {
        text: 'Rebuilt healthcare and fitness advisory flows as tool-calling agents on Amazon Strands and the OpenAI Agents SDK.',
      },
    ],
  },
  {
    kind: 'work',
    period: 'January 2025 – May 2025',
    role: 'Data Science Intern',
    organization: 'SVAAS Inframax Solutions',
    location: 'Noida, India',
    bullets: [
      {
        text: 'Built an AI scheduling assistant on Mistral 7B HF Inference, wired to the Google Calendar API, removing manual appointment entries for the operations team.',
      },
      {
        text: 'Built an unstructured document ETL pipeline via PyTesseract OCR and LLM parsing, slashing invoice processing time.',
        metric: '4 min → 30 s',
      },
      {
        text: 'Deployed a YOLOv8 PPE detection system in PyTorch flagging real-time safety non-compliance at the sites.',
      },
    ],
  },
  {
    kind: 'work',
    period: 'June 2024 – July 2024',
    role: 'Project Vision Intern',
    organization: 'CSIR - National Aerospace Laboratories',
    location: 'Bengaluru, India',
    bullets: [
      {
        text: 'Built a YOLO + VisDrone computer vision POC performing spatial 3D object mapping from drone-mounted footage for UAV surveillance applications.',
      },
    ],
  },
  {
    kind: 'education',
    period: 'August 2021 – May 2025',
    role: 'B.Tech, Computer Science (AI & ML)',
    organization: 'Jain University',
    location: 'Bengaluru, India',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'LLM & Agentic',
    items: ['LangGraph', 'LangChain', 'CrewAI', 'Strands SDK', 'Hugging Face', 'Unsloth', 'vLLM', 'Qdrant', 'RAGAS Eval'],
  },
  {
    title: 'Languages & Frameworks',
    items: [
      'Python',
      'C',
      'C++',
      'TypeScript',
      'PostgreSQL',
      'MongoDB',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'FastAPI',
      'DataBricks',
      'Spark',
    ],
  },
  {
    title: 'Infrastructure',
    items: ['AWS (EC2, Lambda)', 'Docker', 'Kubernetes', 'Redis', 'Supabase', 'Git', 'Vercel'],
  },
];

export const certifications = ['IBM RAG & Agentic AI', 'Microsoft Certified: Azure AI Fundamentals'];
