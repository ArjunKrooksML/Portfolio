import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

type NodeDef = { id: string; label: string; x: number; y: number };
type EdgeDef = { id: string; d: string };

const NODES: NodeDef[] = [
  { id: 'parse', label: 'Parser', x: 260, y: 30 },
  { id: 'jd', label: 'JD Analyst', x: 90, y: 110 },
  { id: 'score', label: 'Scorer', x: 260, y: 110 },
  { id: 'gap', label: 'Gap Analyst', x: 430, y: 110 },
  { id: 'screen', label: 'Gap Screener', x: 260, y: 190 },
  { id: 'advise', label: 'Advisor', x: 260, y: 270 },
  { id: 'critic', label: 'Critic', x: 260, y: 350 },
  { id: 'strat', label: 'Strategist', x: 260, y: 420 },
];

const EDGES: EdgeDef[] = [
  { id: 'e1', d: 'M260,48 C260,80 90,70 90,92' },
  { id: 'e2', d: 'M260,48 L260,92' },
  { id: 'e3', d: 'M260,48 C260,80 430,70 430,92' },
  { id: 'e4', d: 'M90,128 C90,160 260,150 260,172' },
  { id: 'e5', d: 'M260,128 L260,172' },
  { id: 'e6', d: 'M430,128 C430,160 260,150 260,172' },
  { id: 'e7', d: 'M260,208 L260,252' },
  { id: 'e8', d: 'M260,288 L260,332' },
  { id: 'e9', d: 'M260,368 L260,402' },
  { id: 'retry', d: 'M200,420 C60,420 60,270 200,270' },
  { id: 'regap', d: 'M320,420 C500,420 500,230 440,128' },
];

// Which nodes / edges light up at each step of the animation.
const STEPS: { nodes: string[]; edges: string[]; caption: string }[] = [
  { nodes: ['parse'], edges: [], caption: 'Transcribe + parse resume' },
  { nodes: ['jd', 'score', 'gap'], edges: ['e1', 'e2', 'e3'], caption: '3 agents run in parallel' },
  { nodes: ['screen'], edges: ['e4', 'e5', 'e6'], caption: 'Screen each gap for real evidence' },
  { nodes: ['advise'], edges: ['e7'], caption: 'Rewrite bullets for actionable gaps' },
  { nodes: ['critic'], edges: ['e8'], caption: 'Fact-check against the original resume' },
  { nodes: ['strat'], edges: ['e9'], caption: 'Strategist routes: stop, retry or re-gap' },
  { nodes: ['advise', 'strat'], edges: ['retry'], caption: 'Retry the Advisor with feedback' },
];

const NODE_W = 124;
const NODE_H = 36;

const PipelineGraphic: React.FC = () => {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(reduced ? 3 : 0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % STEPS.length), 1300);
    return () => window.clearInterval(id);
  }, [reduced]);

  const current = STEPS[step];

  return (
    <div className="card overflow-hidden shadow-xl shadow-zinc-900/5 dark:shadow-black/40">
      <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="ml-2 font-mono text-xs text-zinc-500">ResumeATS / flow</span>
      </div>

      <svg
        viewBox="0 0 520 450"
        className="block w-full"
        role="img"
        aria-label="Diagram of the ResumeATS multi-agent flow: parser, three parallel analysts, gap screener, advisor, critic and strategist, with retry loops."
      >
        {EDGES.map((edge) => {
          const active = current.edges.includes(edge.id);
          return (
            <path
              key={edge.id}
              d={edge.d}
              fill="none"
              strokeWidth={active ? 2 : 1.5}
              className={`transition-all duration-500 ${
                active ? 'flow-dash stroke-emerald-500' : 'stroke-zinc-300 dark:stroke-zinc-700'
              }`}
            />
          );
        })}

        {NODES.map((node) => {
          const active = current.nodes.includes(node.id);
          return (
            <g key={node.id} transform={`translate(${node.x - NODE_W / 2} ${node.y - NODE_H / 2})`}>
              <rect
                width={NODE_W}
                height={NODE_H}
                rx={9}
                strokeWidth={1.5}
                className={`transition-all duration-500 ${
                  active
                    ? 'fill-emerald-500/15 stroke-emerald-500'
                    : 'fill-white stroke-zinc-300 dark:fill-zinc-900 dark:stroke-zinc-700'
                }`}
              />
              <text
                x={NODE_W / 2}
                y={NODE_H / 2 + 4}
                textAnchor="middle"
                className={`font-mono text-[11px] transition-colors duration-500 ${
                  active ? 'fill-emerald-700 dark:fill-emerald-300' : 'fill-zinc-600 dark:fill-zinc-400'
                }`}
              >
                {node.label}
              </text>
            </g>
          );
        })}

        <text x={26} y={348} className="fill-zinc-400 font-mono text-[10px] dark:fill-zinc-600">
          retry
        </text>
        <text x={466} y={300} textAnchor="end" className="fill-zinc-400 font-mono text-[10px] dark:fill-zinc-600">
          re-gap
        </text>
      </svg>

      <div className="flex items-center gap-2 border-t border-zinc-200 px-4 py-3 dark:border-zinc-800" aria-live="off">
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 rounded-full bg-emerald-500 [animation:ping-soft_1.6s_ease-out_infinite]" />
          <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400">{current.caption}</span>
      </div>
    </div>
  );
};

export default PipelineGraphic;
