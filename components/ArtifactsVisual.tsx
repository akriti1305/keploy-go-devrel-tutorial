export function ArtifactsVisual() {
  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-5 py-3.5 bg-gray-100/70 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 font-mono">
            Generated Artifact Architecture
          </span>
        </div>
        <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
          7 Test Cases + 1 Wire Mock
        </span>
      </div>

      <div className="p-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left column: Visual File Tree */}
        <div className="lg:col-span-5 p-4 rounded-xl bg-gray-950 text-gray-200 font-mono text-xs leading-relaxed border border-gray-800">
          <div className="text-gray-400 text-[11px] mb-2 pb-1.5 border-b border-gray-800 uppercase tracking-wider">
            File Tree on Disk
          </div>
          <div className="text-orange-400 font-bold">keploy/</div>
          <div className="pl-3 text-gray-300">
            └── <span className="text-orange-300">test-set-0/</span>
          </div>
          <div className="pl-6 text-gray-300">
            ├── <span className="text-blue-300">tests/</span>
          </div>
          <div className="pl-9 text-gray-400 space-y-0.5">
            <div>├── test-1.yaml <span className="text-emerald-400 text-[10px]"># POST /url</span></div>
            <div>├── test-2.yaml <span className="text-emerald-400 text-[10px]"># GET /:hash</span></div>
            <div>├── test-3.yaml <span className="text-gray-500 text-[10px]">...</span></div>
            <div>└── test-7.yaml <span className="text-emerald-400 text-[10px]"># 7 HTTP tests</span></div>
          </div>
          <div className="pl-6 text-gray-300 mt-1">
            └── <span className="text-purple-300 font-semibold">mocks.yaml</span>{" "}
            <span className="text-purple-400 text-[10px]">(29 KB wire mock)</span>
          </div>
        </div>

        {/* Right column: Artifact Anatomy Cards */}
        <div className="lg:col-span-7 space-y-3">
          {/* Card 1: Test Cases */}
          <div className="p-3.5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-blue-900 dark:text-blue-200 font-mono uppercase text-[11px]">
                1. Test YAML Files (`test-*.yaml`)
              </span>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono">
                Kind: Http
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[11px]">
              Captures full HTTP request metadata (URL, headers, request body) and expected response (status code, headers, body) for automated playback.
            </p>
          </div>

          {/* Card 2: MongoDB Mocks */}
          <div className="p-3.5 rounded-xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/40 dark:bg-purple-950/20 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-purple-900 dark:text-purple-200 font-mono uppercase text-[11px]">
                2. Wire Mocks (`mocks.yaml`)
              </span>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-mono">
                Kind: Mongo
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[11px]">
              Stores raw MongoDB wire-protocol binary opcodes (e.g. <code>Opcode: 2004</code> and <code>isMaster</code> handshakes). Keploy intercepts the Go MongoDB driver and replays these exact bytes.
            </p>
          </div>

          {/* Card 3: Noise Assertions */}
          <div className="p-3.5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-amber-900 dark:text-amber-200 font-mono uppercase text-[11px]">
                3. Noise Fields (`assertions.noise`)
              </span>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 font-mono">
                Deduplication
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[11px]">
              Dynamic values like Unix timestamp (<code>body.ts</code>) and HTTP <code>Date</code> header change on every execution. Keploy excludes them during test diffing to prevent false test failures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
