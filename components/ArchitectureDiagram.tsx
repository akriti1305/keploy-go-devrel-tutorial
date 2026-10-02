export function ArchitectureDiagram() {
  return (
    <div className="my-8 space-y-6">
      {/* RECORD MODE DIAGRAM */}
      <div className="rounded-2xl border border-blue-500/30 bg-blue-50/20 dark:bg-blue-950/10 p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-blue-200 dark:border-blue-900/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 font-mono">
              Phase 1: Record Mode (Traffic Interception)
            </h4>
          </div>
          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
            eBPF Network Syscall Capture
          </span>
        </div>

        {/* Record Mode Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          {/* Step 1: Client */}
          <div className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-center shadow-xs">
            <div className="text-[10px] uppercase font-mono text-gray-400 font-semibold">Incoming Request</div>
            <div className="text-sm font-bold text-gray-900 dark:text-white mt-1">HTTP Client</div>
            <div className="text-xs text-gray-500 font-mono mt-0.5">curl POST /url</div>
          </div>

          {/* Step 2: Keploy eBPF Proxy */}
          <div className="p-3.5 rounded-xl border border-blue-400/50 dark:border-blue-500/40 bg-blue-50/80 dark:bg-blue-950/40 text-center shadow-xs relative">
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded text-[9px] font-bold font-mono uppercase bg-blue-600 text-white">
              Intercept
            </span>
            <div className="text-[10px] uppercase font-mono text-blue-700 dark:text-blue-300 font-semibold">Proxy & DNS</div>
            <div className="text-sm font-bold text-blue-900 dark:text-blue-200 mt-1">Keploy Engine</div>
            <div className="text-xs text-blue-700 dark:text-blue-300 font-mono mt-0.5">:16789 & :26789</div>
          </div>

          {/* Step 3: Go App */}
          <div className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-center shadow-xs">
            <div className="text-[10px] uppercase font-mono text-gray-400 font-semibold">Service Container</div>
            <div className="text-sm font-bold text-gray-900 dark:text-white mt-1">Go + Gin App</div>
            <div className="text-xs text-gray-500 font-mono mt-0.5">:8080 (SHA-256)</div>
          </div>

          {/* Step 4: MongoDB */}
          <div className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-center shadow-xs">
            <div className="text-[10px] uppercase font-mono text-gray-400 font-semibold">Live Database</div>
            <div className="text-sm font-bold text-gray-900 dark:text-white mt-1">MongoDB</div>
            <div className="text-xs text-gray-500 font-mono mt-0.5">mongoDb:27017</div>
          </div>
        </div>

        {/* Output Arrow & Artifact Storage */}
        <div className="mt-4 pt-3 border-t border-blue-200/60 dark:border-blue-900/40 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-700 dark:text-gray-300 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-bold font-mono">Generated on disk:</span>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800">
              keploy/test-set-0/tests/test-*.yaml
            </span>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800">
              keploy/test-set-0/mocks.yaml
            </span>
          </div>
          <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
            Captures HTTP request/response & DB wire packets
          </span>
        </div>
      </div>

      {/* TEST MODE DIAGRAM */}
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/10 p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-200 dark:border-emerald-900/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 font-mono">
              Phase 2: Test Replay Mode (Zero Database Dependency)
            </h4>
          </div>
          <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
            No MongoDB Instance Required!
          </span>
        </div>

        {/* Test Mode Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          {/* Step 1: Replayer */}
          <div className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-center shadow-xs">
            <div className="text-[10px] uppercase font-mono text-gray-400 font-semibold">Test Runner</div>
            <div className="text-sm font-bold text-gray-900 dark:text-white mt-1">Keploy Replayer</div>
            <div className="text-xs text-gray-500 font-mono mt-0.5">Reads test-*.yaml</div>
          </div>

          {/* Step 2: Fresh Go App */}
          <div className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-center shadow-xs">
            <div className="text-[10px] uppercase font-mono text-gray-400 font-semibold">Under Test</div>
            <div className="text-sm font-bold text-gray-900 dark:text-white mt-1">Fresh App Instance</div>
            <div className="text-xs text-gray-500 font-mono mt-0.5">Clean container boot</div>
          </div>

          {/* Step 3: Mock Server */}
          <div className="p-3.5 rounded-xl border border-emerald-400/50 dark:border-emerald-500/40 bg-emerald-50/80 dark:bg-emerald-950/40 text-center shadow-xs relative">
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded text-[9px] font-bold font-mono uppercase bg-emerald-600 text-white">
              Virtual DB
            </span>
            <div className="text-[10px] uppercase font-mono text-emerald-700 dark:text-emerald-300 font-semibold">Virtualizes Mongo</div>
            <div className="text-sm font-bold text-emerald-900 dark:text-emerald-200 mt-1">Keploy Mock Engine</div>
            <div className="text-xs text-emerald-700 dark:text-emerald-300 font-mono mt-0.5">Serves mocks.yaml</div>
          </div>

          {/* Step 4: Assertion Result */}
          <div className="p-3.5 rounded-xl border border-emerald-500 bg-emerald-500/10 text-center shadow-xs">
            <div className="text-[10px] uppercase font-mono text-emerald-600 dark:text-emerald-400 font-bold">Diff Engine</div>
            <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300 mt-1">Noise-Aware Diff</div>
            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">7 / 7 PASSED ✓</div>
          </div>
        </div>

        {/* Verification Summary */}
        <div className="mt-4 pt-3 border-t border-emerald-200/60 dark:border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-700 dark:text-gray-300 gap-2">
          <span>
            <strong>Deterministic Validation:</strong> Keploy compares status code, headers, and body while ignoring dynamic fields configured under <code>assertions.noise</code>.
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
            Execution time: 10.16s
          </span>
        </div>
      </div>
    </div>
  );
}
