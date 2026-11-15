import { FlowConfig } from './components/FlowDiagram';

// Flow diagrams shown as tabs on the homepage. Each one is traced from the
// actual source in the project's GitHub repo (graph/crew definitions, node
// files, services) — not just the marketing copy in the project card — so
// the shapes here are a simplified but accurate sketch of what the code
// does, including the real retry/interrupt/consult paths.

const resumeAts: FlowConfig = {
  id: 'resume-ats',
  tabLabel: 'ResumeATS',
  ariaLabel:
    'Diagram of the ResumeATS CrewAI flow: a parser with a one-shot OCR retry, three agents (JD Analyst, Scorer, Gap Analyst) running in parallel, a gap screen, an Advisor and Critic pair, a Rescore step, and a Strategist that decides to stop, retry the Advisor, or re-run gap analysis.',
  viewBox: '0 0 560 600',
  nodes: [
    { id: 'parser', label: 'Parser', x: 260, y: 30 },
    { id: 'jd', label: 'JD Analyst', x: 90, y: 130 },
    { id: 'score', label: 'Scorer', x: 260, y: 130 },
    { id: 'gap', label: 'Gap Analyst', x: 430, y: 130 },
    { id: 'screen', label: 'Screen gaps', x: 260, y: 220 },
    { id: 'advise', label: 'Advisor', x: 180, y: 310 },
    { id: 'critic', label: 'Critic', x: 340, y: 310 },
    { id: 'rescore', label: 'Rescore', x: 260, y: 400 },
    { id: 'strat', label: 'Strategist', x: 260, y: 490 },
    { id: 'report', label: 'Report', x: 260, y: 570 },
  ],
  edges: [
    { id: 'e1', d: 'M260,48 C260,75 90,80 90,112' },
    { id: 'e2', d: 'M260,48 L260,112' },
    { id: 'e3', d: 'M260,48 C260,75 430,80 430,112' },
    { id: 'e4', d: 'M90,148 C90,175 260,185 260,202' },
    { id: 'e5', d: 'M260,148 L260,202' },
    { id: 'e6', d: 'M430,148 C430,175 260,185 260,202' },
    { id: 'e7', d: 'M260,238 C260,260 180,265 180,292' },
    { id: 'e8', d: 'M242,310 L278,310' },
    { id: 'e9', d: 'M340,328 C340,355 260,355 260,382' },
    { id: 'e10', d: 'M260,418 L260,472' },
    { id: 'e11', d: 'M260,508 L260,552' },
    { id: 'retry', d: 'M198,490 C90,490 90,340 160,300' },
    { id: 'regap', d: 'M322,490 C520,490 520,250 440,148' },
  ],
  steps: [
    { nodes: ['parser'], edges: [], caption: 'Transcribe + parse (auto-retries OCR once)' },
    { nodes: ['jd', 'score', 'gap'], edges: ['e1', 'e2', 'e3'], caption: '3 agents run in parallel — JD, Scorer, Gap Analyst' },
    { nodes: ['screen'], edges: ['e4', 'e5', 'e6'], caption: 'Advisor screens each gap for real evidence' },
    { nodes: ['advise'], edges: ['e7'], caption: 'Advisor drafts rewrites (may consult Gap Analyst)' },
    { nodes: ['critic'], edges: ['e8'], caption: 'Critic fact-checks every rewrite against the original' },
    { nodes: ['rescore'], edges: ['e9'], caption: 'Scorer re-scores the candidate resume' },
    { nodes: ['strat'], edges: ['e10'], caption: 'Strategist decides: stop, retry, or re-gap' },
    { nodes: ['report'], edges: ['e11'], caption: 'Final report with a full gap audit trail (≤3 rounds)' },
    { nodes: ['advise', 'strat'], edges: ['retry'], caption: 'Retry: Strategist sends the Advisor sharper feedback' },
    { nodes: ['gap', 'strat'], edges: ['regap'], caption: 'Re-gap: priorities revisited before the next round' },
  ],
  annotations: [
    { x: 40, y: 400, text: 'retry' },
    { x: 526, y: 330, anchor: 'end', text: 're-gap' },
    { x: 10, y: 255, text: '⇄ consult ≤1x' },
  ],
};

const bloodReportAnalyser: FlowConfig = {
  id: 'blood-report',
  tabLabel: 'Blood Report',
  ariaLabel:
    'Diagram of the Blood Report Analyser LangGraph pipeline: parse, a clarity check that can interrupt for user input, a classifier that detects which panels are present, a dynamic Send-API fan-out of one extractor per panel, a critic with a bounded retry loop, anomaly tagging, a parallel pattern recognizer and trend engine, converging into a briefing generator.',
  viewBox: '0 0 520 620',
  nodes: [
    { id: 'parse', label: 'Parse', x: 260, y: 30 },
    { id: 'clarify', label: 'Clarity check', x: 260, y: 100 },
    { id: 'classify', label: 'Classify panels', x: 260, y: 170 },
    { id: 'extractA', label: 'Panel A', x: 90, y: 250 },
    { id: 'extractB', label: 'Panel B', x: 260, y: 250 },
    { id: 'extractN', label: 'Panel N', x: 430, y: 250 },
    { id: 'critique', label: 'Critic (QA)', x: 260, y: 330 },
    { id: 'tag', label: 'Tag + dedupe', x: 260, y: 410 },
    { id: 'pattern', label: 'Pattern ReAct', x: 150, y: 500 },
    { id: 'trend', label: 'Trend engine', x: 370, y: 500 },
    { id: 'briefing', label: 'Briefing', x: 260, y: 580 },
  ],
  edges: [
    { id: 'e1', d: 'M260,48 L260,82' },
    { id: 'e2', d: 'M260,118 L260,152' },
    { id: 'e3', d: 'M260,188 C260,210 90,215 90,232' },
    { id: 'e4', d: 'M260,188 L260,232' },
    { id: 'e5', d: 'M260,188 C260,210 430,215 430,232' },
    { id: 'e6', d: 'M90,268 C90,290 260,295 260,312' },
    { id: 'e7', d: 'M260,268 L260,312' },
    { id: 'e8', d: 'M430,268 C430,290 260,295 260,312' },
    { id: 'e9', d: 'M260,348 L260,392' },
    { id: 'e10', d: 'M260,428 C260,450 150,460 150,482' },
    { id: 'e11', d: 'M260,428 C260,450 370,460 370,482' },
    { id: 'e12', d: 'M150,518 C150,545 260,545 260,562' },
    { id: 'e13', d: 'M370,518 C370,545 260,545 260,562' },
    { id: 'retry', d: 'M198,330 C80,330 70,290 90,268' },
    { id: 'interrupt', d: 'M322,100 C400,100 420,90 430,85' },
  ],
  steps: [
    { nodes: ['parse'], edges: [], caption: 'OCR + parse raw report text' },
    { nodes: ['clarify'], edges: ['e1'], caption: 'LLM checks legibility; interrupts if unclear' },
    { nodes: ['classify'], edges: ['e2'], caption: 'Classifier detects which panels are present' },
    { nodes: ['extractA', 'extractB', 'extractN'], edges: ['e3', 'e4', 'e5'], caption: 'Send() fans out one extractor per panel' },
    { nodes: ['critique'], edges: ['e6', 'e7', 'e8'], caption: 'Critic flags impossible or garbled values' },
    { nodes: ['tag'], edges: ['e9'], caption: 'Markers deduped and tagged by severity' },
    { nodes: ['pattern', 'trend'], edges: ['e10', 'e11'], caption: 'Pattern recognizer + trend engine, in parallel' },
    { nodes: ['briefing'], edges: ['e12', 'e13'], caption: 'Both converge into a doctor-ready briefing' },
    { nodes: ['extractA', 'extractB', 'extractN', 'critique'], edges: ['retry'], caption: 'Retries extraction up to twice on failure' },
  ],
  annotations: [
    { x: 10, y: 300, text: 'retry ≤2' },
    { x: 436, y: 82, text: 'interrupt → user' },
  ],
};

const dataQuery: FlowConfig = {
  id: 'dataquery',
  tabLabel: 'DataQuery',
  ariaLabel:
    'Diagram of the DataQuery flow: a natural-language question is turned into SQL by a fine-tuned Qwen 8B model while tenant scope resolves in parallel, row-level RBAC filters the result, the query executes, and a Chart.js dashboard renders on demand.',
  viewBox: '0 0 520 450',
  nodes: [
    { id: 'question', label: 'Question', x: 260, y: 30 },
    { id: 'qwen', label: 'Qwen 8B (SQL)', x: 140, y: 120 },
    { id: 'tenant', label: 'Tenant scope', x: 380, y: 120 },
    { id: 'rbac', label: 'RBAC filter', x: 260, y: 210 },
    { id: 'execute', label: 'Execute SQL', x: 260, y: 320 },
    { id: 'dashboard', label: 'Chart.js', x: 260, y: 420 },
  ],
  edges: [
    { id: 'e1', d: 'M260,48 C260,85 140,80 140,102' },
    { id: 'e2', d: 'M260,48 C260,85 380,80 380,102' },
    { id: 'e3', d: 'M140,138 C140,175 260,170 260,192' },
    { id: 'e4', d: 'M380,138 C380,175 260,170 260,192' },
    { id: 'e5', d: 'M260,228 L260,302' },
    { id: 'e6', d: 'M260,338 L260,402' },
  ],
  steps: [
    { nodes: ['question'], edges: [], caption: 'Natural-language question comes in' },
    { nodes: ['qwen', 'tenant'], edges: ['e1', 'e2'], caption: 'Fine-tuned Qwen 8B drafts SQL while tenant scope resolves' },
    { nodes: ['rbac'], edges: ['e3', 'e4'], caption: 'Row-level RBAC filters the query to the caller’s tenant' },
    { nodes: ['execute'], edges: ['e5'], caption: 'SQL executes against the warehouse' },
    { nodes: ['dashboard'], edges: ['e6'], caption: 'Chart.js renders a dashboard on demand' },
  ],
};

const svaas: FlowConfig = {
  id: 'svaas',
  tabLabel: 'SVAAS',
  ariaLabel:
    'Diagram of the SVAAS platform flow: a portal or chat request passes an RBAC gate that resolves the caller to hr, gm, senior or employee, then reaches independently scoped attendance, chatbot and orders services; attendance feeds a payroll calculation of leave and lateness deductions, and the chatbot restates any write and waits for explicit confirmation before it commits.',
  viewBox: '0 0 520 340',
  nodes: [
    { id: 'request', label: 'Request', x: 260, y: 30 },
    { id: 'rbac', label: 'RBAC gate', x: 260, y: 110 },
    { id: 'attendance', label: 'Attendance', x: 100, y: 200 },
    { id: 'chatbot', label: 'Chatbot', x: 260, y: 200 },
    { id: 'orders', label: 'Orders', x: 420, y: 200 },
    { id: 'payroll', label: 'Payroll calc', x: 100, y: 290 },
    { id: 'confirm', label: 'Confirm', x: 260, y: 290 },
  ],
  edges: [
    { id: 'e1', d: 'M260,48 L260,92' },
    { id: 'e2', d: 'M260,128 C260,155 100,160 100,182' },
    { id: 'e3', d: 'M260,128 L260,182' },
    { id: 'e4', d: 'M260,128 C260,155 420,160 420,182' },
    { id: 'e5', d: 'M100,218 L100,272' },
    { id: 'e6', d: 'M260,218 L260,272' },
  ],
  steps: [
    { nodes: ['request'], edges: [], caption: 'Request via either portal, or the chat assistant' },
    { nodes: ['rbac'], edges: ['e1'], caption: 'RBAC gate resolves caller to hr / gm / senior / employee' },
    { nodes: ['attendance', 'chatbot', 'orders'], edges: ['e2', 'e3', 'e4'], caption: 'Attendance, chatbot and orders scoped per role' },
    { nodes: ['payroll'], edges: ['e5'], caption: 'Payroll derives deductions from attendance' },
    { nodes: ['confirm'], edges: ['e6'], caption: 'Chatbot restates writes and waits for confirmation' },
  ],
};

export const flowConfigs: FlowConfig[] = [resumeAts, bloodReportAnalyser, dataQuery, svaas];
