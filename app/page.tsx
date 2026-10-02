import Link from "next/link";
import { CheckIcon } from "@/components/Icons";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-16 text-center max-w-4xl mx-auto">
      {/* Keploy Logo Icon */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-xl shadow-orange-500/30 mb-6 ring-4 ring-orange-500/10">
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      {/* Tech Identity Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 mb-4">
        <span>ZERO → TEST</span>
        <span className="text-gray-400 dark:text-gray-600">•</span>
        <span>DEVREL QUICKSTART</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight leading-snug">
        API Testing with <span className="text-orange-500">Keploy</span>, Go &amp; MongoDB
      </h1>

      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl leading-relaxed">
        A hands-on, beginner-friendly guide to transparent network interception, auto-generated test cases, and dependency virtualization.
      </p>

      {/* Feature pill */}
      <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-gray-700 dark:text-gray-300 mb-8">
        <span className="flex items-center gap-1.5 text-orange-600 dark:text-orange-400 font-semibold">
          <CheckIcon className="w-3.5 h-3.5" />
          Zero Manual Assertions
        </span>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <span>MongoDB Wire Mocks</span>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <span>Docker / Linux eBPF</span>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/tutorial"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 text-sm font-mono tracking-wide"
        >
          <span>Read the Tutorial</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        <a
          href="https://github.com/keploy/samples-go/tree/main/gin-mongo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors text-sm font-mono"
        >
          <span>View Sample Source</span>
        </a>
      </div>
    </div>
  );
}
