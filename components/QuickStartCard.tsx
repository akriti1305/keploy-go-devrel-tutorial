interface QuickStep {
  num: number;
  label: string;
  command: string;
  targetId: string;
}

const QUICK_STEPS: QuickStep[] = [
  {
    num: 1,
    label: "Clone",
    command: "git clone samples-go",
    targetId: "step-1-clone-the-project",
  },
  {
    num: 2,
    label: "Start DB",
    command: "docker run mongo",
    targetId: "step-4-start-mongodb",
  },
  {
    num: 3,
    label: "Build",
    command: "docker build gin-app",
    targetId: "step-5-build-the-app-image",
  },
  {
    num: 4,
    label: "Record",
    command: "keploy record -c ...",
    targetId: "step-6-record-test-cases",
  },
  {
    num: 5,
    label: "Replay",
    command: "keploy test -c ...",
    targetId: "step-8-run-the-tests",
  },
];

export function QuickStartCard() {
  return (
    <div className="my-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/40 p-5 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-orange-600 dark:text-orange-400 font-mono">
            Navigation Aid
          </span>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">
            Quick Start Pipeline
          </h3>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Already familiar with Docker? Click any stage to jump directly:
        </span>
      </div>

      {/* Steps Pipeline */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {QUICK_STEPS.map((s) => (
          <a
            key={s.num}
            href={`#${s.targetId}`}
            className="group flex flex-col justify-between p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-orange-500/50 hover:shadow-md hover:shadow-orange-500/5 transition-all text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="w-5 h-5 rounded-md bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 text-xs font-bold font-mono flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {s.num}
              </span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 font-mono uppercase group-hover:text-orange-500 transition-colors">
                Jump →
              </span>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {s.label}
              </div>
              <div className="text-[11px] text-gray-500 dark:text-gray-400 font-mono truncate mt-0.5">
                {s.command}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200/80 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>First time with Keploy? Follow the comprehensive tutorial below.</span>
        <span className="text-orange-500 dark:text-orange-400 font-medium hidden sm:inline">
          Full walkthrough follows ↓
        </span>
      </div>
    </div>
  );
}
