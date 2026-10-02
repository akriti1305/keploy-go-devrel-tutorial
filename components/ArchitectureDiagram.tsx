export function ArchitectureDiagram() {
  return (
    <div className="my-6 space-y-4 text-xs font-mono">
      {/* RECORD MODE */}
      <div className="rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/20 p-4">
        <div className="flex items-center justify-between mb-3 text-[11px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
          <span>1. Record Mode (Traffic Interception)</span>
          <span className="font-normal normal-case text-gray-500 dark:text-gray-400">eBPF Syscall Capture</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-gray-800 dark:text-gray-200">
          <div className="p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-[10px] text-gray-400">Client</div>
            <div className="font-bold text-xs mt-0.5">curl :8080</div>
          </div>
          <div className="p-2.5 rounded-lg bg-blue-100/70 dark:bg-blue-950/60 border border-blue-300 dark:border-blue-800 text-blue-900 dark:text-blue-200">
            <div className="text-[10px] text-blue-600 dark:text-blue-400">Keploy Proxy</div>
            <div className="font-bold text-xs mt-0.5">Intercepts &amp; Logs</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-[10px] text-gray-400">Application</div>
            <div className="font-bold text-xs mt-0.5">Go + Gin (:8080)</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-[10px] text-gray-400">Database</div>
            <div className="font-bold text-xs mt-0.5">MongoDB (:27017)</div>
          </div>
        </div>

        <div className="mt-2.5 pt-2 border-t border-blue-200/60 dark:border-blue-900/40 text-[11px] text-gray-600 dark:text-gray-400 flex items-center justify-between">
          <span>Output: Writes <code>test-*.yaml</code> (HTTP) &amp; <code>mocks.yaml</code> (Mongo wire protocol)</span>
        </div>
      </div>

      {/* TEST MODE */}
      <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20 p-4">
        <div className="flex items-center justify-between mb-3 text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
          <span>2. Test Replay Mode (Zero Database Dependency)</span>
          <span className="font-normal normal-case text-emerald-600 dark:text-emerald-400 font-semibold">No MongoDB Required</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-gray-800 dark:text-gray-200">
          <div className="p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-[10px] text-gray-400">Keploy Runner</div>
            <div className="font-bold text-xs mt-0.5">Replays test-*.yaml</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-[10px] text-gray-400">Fresh App</div>
            <div className="font-bold text-xs mt-0.5">Go + Gin Instance</div>
          </div>
          <div className="p-2.5 rounded-lg bg-emerald-100/70 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400">Keploy Mock Engine</div>
            <div className="font-bold text-xs mt-0.5">Serves mocks.yaml</div>
          </div>
          <div className="p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-[10px] text-gray-400">Diff Engine</div>
            <div className="font-bold text-xs mt-0.5">Noise-Aware Check</div>
          </div>
        </div>

        <div className="mt-2.5 pt-2 border-t border-emerald-200/60 dark:border-emerald-900/40 text-[11px] text-gray-600 dark:text-gray-400 flex items-center justify-between">
          <span>Validates status, headers &amp; body while ignoring dynamic fields (<code>assertions.noise</code>)</span>
        </div>
      </div>
    </div>
  );
}
