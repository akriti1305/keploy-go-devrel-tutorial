export function WorkflowComparison() {
  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 overflow-hidden shadow-sm">
      {/* Header bar */}
      <div className="px-5 py-3 bg-gray-100/70 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 font-mono">
            Workflow Architecture Comparison
          </span>
        </div>
        <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
          Integration Testing Evolution
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800">
        {/* Before: Traditional Testing */}
        <div className="p-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-mono">
                Traditional Approach
              </span>
              <span className="text-xs text-gray-500">Manual Engineering</span>
            </div>

            <ol className="space-y-2.5 text-xs text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="font-mono text-gray-400 font-semibold mt-0.5">1.</span>
                <span>
                  <strong>Write HTTP Clients:</strong> Craft repetitive test suites by hand with <code>http.NewRequest</code> and status checks.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-gray-400 font-semibold mt-0.5">2.</span>
                <span>
                  <strong>Spin Up Test DB:</strong> Manage dockerized MongoDB instances, seed data scripts, and teardown logic between test runs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-gray-400 font-semibold mt-0.5">3.</span>
                <span>
                  <strong>Hand-Craft Mocks:</strong> Write interface mocks for downstream dependencies; maintain them whenever schemas evolve.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-gray-400 font-semibold mt-0.5">4.</span>
                <span>
                  <strong>Field Assertions:</strong> Manually compare dozens of JSON payload fields with <code>assert.Equal</code>.
                </span>
              </li>
            </ol>
          </div>

          <div className="p-3 rounded-xl bg-gray-100/60 dark:bg-gray-800/40 text-[11px] text-gray-600 dark:text-gray-400 font-mono border border-gray-200 dark:border-gray-800">
            Pain point: Writing & maintaining tests often takes longer than building the feature itself.
          </div>
        </div>

        {/* After: With Keploy */}
        <div className="p-5 flex flex-col justify-between space-y-4 bg-orange-500/[0.02] dark:bg-orange-500/[0.04]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 font-mono border border-orange-200 dark:border-orange-800">
                With Keploy
              </span>
              <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                Record & Replay
              </span>
            </div>

            <ol className="space-y-2.5 text-xs text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="font-mono text-orange-500 font-semibold mt-0.5">1.</span>
                <span>
                  <strong>Record Live Traffic:</strong> Keploy eBPF hooks into socket syscalls, capturing real HTTP requests & responses.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-orange-500 font-semibold mt-0.5">2.</span>
                <span>
                  <strong>Auto-Mock Wire Protocol:</strong> Outgoing MongoDB packets are intercepted and saved as replayable binary wire mocks.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-orange-500 font-semibold mt-0.5">3.</span>
                <span>
                  <strong>Automatic Noise Filtering:</strong> Dynamic fields like <code>body.ts</code> and <code>Date</code> are detected and excluded from diffs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-orange-500 font-semibold mt-0.5">4.</span>
                <span>
                  <strong>Replay Anywhere in Seconds:</strong> Tests run against fresh application binaries without requiring live MongoDB in CI.
                </span>
              </li>
            </ol>
          </div>

          <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/30 text-[11px] text-orange-800 dark:text-orange-300 font-mono border border-orange-200 dark:border-orange-900/50">
            Advantage: Integration tests auto-generated from real interactions, committed to git, replayed anywhere.
          </div>
        </div>
      </div>
    </div>
  );
}
