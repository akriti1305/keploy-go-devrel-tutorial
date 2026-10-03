export function ArtifactsVisual() {
  return (
    <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-950 p-4 font-mono text-xs text-gray-200 shadow-xs">
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-gray-800 text-[11px] text-gray-400 uppercase tracking-wider">
        <span>Generated Artifacts Directory</span>
        <span className="text-orange-400 font-semibold lowercase">keploy/test-set-0/</span>
      </div>

      <div className="space-y-1 leading-relaxed text-[12px] whitespace-pre overflow-x-auto">
        <div>
          <span className="text-orange-400 font-bold">keploy/</span>
        </div>
        <div className="text-gray-300">
          └── <span className="text-orange-300">test-set-0/</span>
        </div>
        <div className="text-gray-300">
          {"    ├── "}<span className="text-blue-300">tests/</span>
        </div>
        <div className="space-y-0.5 text-gray-400">
          <div>
            {"    │   ├── "}post-url-1.yaml <span className="text-emerald-400 text-[11px] font-sans"># POST /url (HTTP request + response)</span>
          </div>
          <div>
            {"    │   └── "}get-lhr4bwai-1.yaml <span className="text-emerald-400 text-[11px] font-sans"># GET /:hash (303 redirect)</span>
          </div>
        </div>
        <div className="text-gray-300 pt-0.5">
          {"    └── "}<span className="text-purple-300 font-semibold">mocks.yaml</span>{" "}
          <span className="text-purple-400 text-[11px] font-sans"># MongoDB wire-protocol binary interactions</span>
        </div>
      </div>
    </div>
  );
}
