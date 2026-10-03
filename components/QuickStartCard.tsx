interface QuickStep {
  num: number;
  label: string;
  targetId: string;
}

const QUICK_STEPS: QuickStep[] = [
  { num: 2, label: "Install", targetId: "step-2-install-keploy" },
  { num: 4, label: "Start DB", targetId: "step-4-start-mongodb" },
  { num: 5, label: "Build", targetId: "step-5-build-the-app-image" },
  { num: 6, label: "Record", targetId: "step-6-record-test-cases" },
  { num: 8, label: "Run tests", targetId: "step-8-run-the-tests" },
];


export function QuickStartCard() {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/40 px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
          Quick Start:
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        {QUICK_STEPS.map((s, idx) => (
          <div key={s.num} className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={`#${s.targetId}`}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-mono bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-orange-500/50 hover:text-orange-600 dark:hover:text-orange-400 transition-colors shadow-xs"
            >
              <span className="text-gray-400 dark:text-gray-500 font-semibold">{s.num}.</span>
              <span className="font-medium text-gray-800 dark:text-gray-200">{s.label}</span>
            </a>
            {idx < QUICK_STEPS.length - 1 && (
              <span className="text-gray-300 dark:text-gray-700 text-xs select-none">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
