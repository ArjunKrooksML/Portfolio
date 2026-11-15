import React, { useState } from 'react';
import FlowDiagram from './FlowDiagram';
import { flowConfigs } from '../flows';

/** Window-chrome card with a tab per project, each driving the shared FlowDiagram. */
const PipelineTabs: React.FC = () => {
  const [activeId, setActiveId] = useState(flowConfigs[0].id);
  const active = flowConfigs.find((flow) => flow.id === activeId) ?? flowConfigs[0];

  return (
    <div className="card overflow-hidden shadow-xl shadow-zinc-900/5 dark:shadow-black/40">
      <div className="flex items-center gap-2 overflow-x-auto border-b border-zinc-200 px-3 py-2.5 dark:border-zinc-800">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <div className="ml-1 flex gap-1" role="tablist" aria-label="Project flow diagrams">
          {flowConfigs.map((flow) => (
            <button
              key={flow.id}
              type="button"
              role="tab"
              aria-selected={flow.id === activeId}
              onClick={() => setActiveId(flow.id)}
              className={`shrink-0 rounded-md px-2.5 py-1 font-mono text-xs transition ${
                flow.id === activeId
                  ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                  : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300'
              }`}
            >
              {flow.tabLabel}
            </button>
          ))}
        </div>
      </div>

      {/* key resets the animation to step 0 whenever the active tab changes */}
      <FlowDiagram key={active.id} config={active} />
    </div>
  );
};

export default PipelineTabs;
