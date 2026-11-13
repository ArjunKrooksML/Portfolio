import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export type FlowNode = { id: string; label: string; x: number; y: number };
export type FlowEdge = { id: string; d: string };
export type FlowStep = { nodes: string[]; edges: string[]; caption: string };
export type FlowAnnotation = { x: number; y: number; anchor?: 'start' | 'middle' | 'end'; text: string };

export type FlowConfig = {
  id: string;
  /** Short label shown on the tab button, e.g. "ResumeATS". */
  tabLabel: string;
  /** Accessible description of the whole diagram. */
  ariaLabel: string;
  /** SVG viewBox, e.g. "0 0 520 450". */
  viewBox: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
  steps: FlowStep[];
  /** Static, non-animated labels (e.g. "retry", "interrupt"). */
  annotations?: FlowAnnotation[];
  /** Milliseconds between animation steps. Defaults to 1300. */
  intervalMs?: number;
};

const NODE_W = 124;
const NODE_H = 36;

/**
 * Renders an animated node/edge flow diagram cycling through `config.steps`.
 * Pure presentation — all content (nodes, edges, captions) comes from `config`,
 * so the same component drives a different diagram per project/tab.
 */
const FlowDiagram: React.FC<{ config: FlowConfig }> = ({ config }) => {
  const reduced = useReducedMotion();
  const lastStep = config.steps.length - 1;
  const [step, setStep] = useState(reduced ? lastStep : 0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(
      () => setStep((s) => (s + 1) % config.steps.length),
      config.intervalMs ?? 1300,
    );
    return () => window.clearInterval(id);
  }, [reduced, config]);

  const current = config.steps[step] ?? config.steps[0];

  return (
    <>
      <svg viewBox={config.viewBox} className="block w-full" role="img" aria-label={config.ariaLabel}>
        {config.edges.map((edge) => {
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

        {config.nodes.map((node) => {
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

        {config.annotations?.map((a) => (
          <text
            key={`${a.x}-${a.y}-${a.text}`}
            x={a.x}
            y={a.y}
            textAnchor={a.anchor ?? 'start'}
            className="fill-zinc-400 font-mono text-[10px] dark:fill-zinc-600"
          >
            {a.text}
          </text>
        ))}
      </svg>

      <div className="flex items-center gap-2 border-t border-zinc-200 px-4 py-3 dark:border-zinc-800" aria-live="off">
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 rounded-full bg-emerald-500 [animation:ping-soft_1.6s_ease-out_infinite]" />
          <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400">{current.caption}</span>
      </div>
    </>
  );
};

export default FlowDiagram;
