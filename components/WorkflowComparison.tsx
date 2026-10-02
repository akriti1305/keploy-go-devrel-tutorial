export function WorkflowComparison() {
  return (
    <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 overflow-hidden shadow-xs">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800 text-xs">
        {/* Traditional Approach */}
        <div className="p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold uppercase tracking-wider text-[11px] text-gray-500 dark:text-gray-400">
              Traditional Testing
            </span>
            <span className="text-[10px] font-mono text-gray-400">Manual Effort</span>
          </div>
          <ul className="space-y-1.5 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-1.5">
              <span className="text-gray-400 font-bold">•</span>
              <span>Manual test client setup &amp; hardcoded HTTP payloads</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-gray-400 font-bold">•</span>
              <span>Live test MongoDB required, seeded, and wiped per run</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-gray-400 font-bold">•</span>
              <span>Hand-written field assertions (<code>assert.Equal</code>) for every key</span>
            </li>
          </ul>
        </div>

        {/* With Keploy */}
        <div className="p-4 space-y-2.5 bg-orange-500/[0.02] dark:bg-orange-500/[0.04]">
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold uppercase tracking-wider text-[11px] text-orange-600 dark:text-orange-400">
              With Keploy
            </span>
            <span className="text-[10px] font-mono text-orange-600 dark:text-orange-400 font-semibold">Record &amp; Replay</span>
          </div>
          <ul className="space-y-1.5 text-gray-700 dark:text-gray-200">
            <li className="flex items-start gap-1.5">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Records real API traffic directly into test YAMLs</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Auto-captures MongoDB wire mocks — no live DB needed in test replay</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-orange-500 font-bold">✓</span>
              <span>Dynamic fields (<code>body.ts</code>) automatically filtered to prevent false diffs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
