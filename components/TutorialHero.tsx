import { QuickStartCard } from "@/components/QuickStartCard";

export function TutorialHero() {
  return (
    <div className="mb-10 pb-6 border-b border-gray-200 dark:border-gray-800">
      {/* Category Tag & Tech Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          DEVREL GUIDE
        </span>

        {/* Compact Tech Badges */}
        <div className="flex flex-wrap items-center gap-1 font-mono text-[10px] font-medium">
          <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            GO
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            GIN
          </span>
          <span className="px-2 py-0.5 rounded bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
            MONGODB
          </span>
          <span className="px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            DOCKER
          </span>
          <span className="px-2 py-0.5 rounded bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800 font-semibold">
            KEPLOY
          </span>
        </div>
      </div>

      {/* ZERO → TEST Sub-tag & Headline */}
      <div className="mb-3">
        <div className="text-[11px] font-mono tracking-wider uppercase font-bold text-orange-600 dark:text-orange-400 mb-1">
          ZERO → TEST: BUILD • RECORD • REPLAY
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-snug">
          API Testing with Keploy, Go &amp; MongoDB
        </h1>
      </div>

      <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-4">
        A hands-on tutorial explaining how Keploy transparently captures real API traffic and replays it as automated integration tests — with auto-generated test cases, database wire mocks, and zero manual assertions.
      </p>

      {/* Meta info row */}
      <div className="flex flex-wrap items-center gap-5 text-xs text-gray-500 dark:text-gray-400 mb-5 font-mono">
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          </svg>
          <span>20 min read</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Beginner-friendly</span>
        </div>
        <a
          href="https://github.com/keploy/samples-go/tree/main/gin-mongo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          <span>View Sample App</span>
        </a>
      </div>

      {/* Compact Quick Start Navigation Strip */}
      <QuickStartCard />
    </div>
  );
}
