import { CheckIcon } from "@/components/Icons";

interface VerifiedBadgeProps {
  testsCount?: number;
  timeTaken?: string;
  className?: string;
}

export function VerifiedBadge({
  testsCount = 7,
  timeTaken = "10.16s",
  className = "",
}: VerifiedBadgeProps) {
  return (
    <div
      className={`rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 p-5 backdrop-blur-sm shadow-sm ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Status & Title */}
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 text-emerald-600 dark:text-emerald-400 shadow-sm">
            <CheckIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Verified Execution
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono hidden sm:inline">
                Linux kernel eBPF
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mt-0.5">
              {testsCount} / {testsCount} Tests Passed (100%)
            </h3>
          </div>
        </div>

        {/* Right: Telemetry Metrics */}
        <div className="flex items-center gap-3 sm:gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-emerald-500/20">
          <div className="text-left sm:text-right">
            <div className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider">
              Time Taken
            </div>
            <div className="text-sm sm:text-base font-bold text-gray-900 dark:text-white font-mono">
              {timeTaken}
            </div>
          </div>
          <div className="h-7 w-px bg-emerald-500/20" />
          <div className="text-left sm:text-right">
            <div className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider">
              Failures
            </div>
            <div className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono">
              0
            </div>
          </div>
          <div className="h-7 w-px bg-emerald-500/20" />
          <div className="text-left sm:text-right">
            <div className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider">
              Mocks Replayed
            </div>
            <div className="text-sm sm:text-base font-bold text-gray-900 dark:text-white font-mono">
              MongoDB
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-emerald-500/15 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-600 dark:text-gray-400 gap-1.5">
        <p className="flex items-center gap-1.5">
          <span className="text-emerald-500 font-bold">✓</span>
          <span>
            Verified in real Linux x86_64 environment with eBPF probes enabled (Keploy v2.5.2).
          </span>
        </p>
        <span className="text-gray-500 dark:text-gray-400 italic font-mono text-[11px]">
          Captured from actual execution
        </span>
      </div>
    </div>
  );
}
