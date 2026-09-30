import { TableOfContents } from "@/components/TableOfContents";
import TutorialContent from "@/content/tutorial.mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zero-to-Test: Keploy with Go, Gin & MongoDB | Keploy Tutorial",
  description:
    "Step-by-step tutorial: set up Keploy with a Go Gin + MongoDB URL shortener, record real API test cases, and replay them automatically without a live database.",
};

export default function TutorialPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page hero */}
      <div className="mb-10 pb-8 border-b border-gray-200 dark:border-gray-800">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
            Keploy Quickstart
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Go
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
            Gin
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            MongoDB
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
            Docker
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight">
          Zero-to-Test: API Testing with Keploy, Go & MongoDB
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
          Learn how Keploy automatically captures real API traffic and replays it as integration tests — 
          no assertions written, no mocks maintained, no test database needed.
        </p>

        {/* Meta info row */}
        <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/>
            </svg>
            <span>20 min read</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Beginner-friendly</span>
          </div>
          <a
            href="https://github.com/keploy/samples-go/tree/main/gin-mongo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
            </svg>
            <span>View Sample App on GitHub</span>
          </a>
        </div>
      </div>

      {/* Two-column layout: content + TOC sidebar */}
      <div className="flex gap-12">
        {/* Main content */}
        <article className="flex-1 min-w-0 prose prose-gray dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:scroll-mt-24
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:scroll-mt-24
          prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
          prose-a:text-orange-600 dark:prose-a:text-orange-400 prose-a:no-underline hover:prose-a:underline
          prose-code:text-orange-600 dark:prose-code:text-orange-400 prose-code:bg-orange-50 dark:prose-code:bg-orange-950/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-gray-950 prose-pre:rounded-xl prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700 prose-pre:shadow-sm
          prose-table:w-full prose-th:text-left prose-th:bg-gray-50 dark:prose-th:bg-gray-900 prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2
          prose-blockquote:border-l-4 prose-blockquote:border-orange-400 prose-blockquote:not-italic
          prose-hr:border-gray-200 dark:prose-hr:border-gray-800
          prose-strong:text-gray-900 dark:prose-strong:text-white
          prose-li:text-gray-700 dark:prose-li:text-gray-300">
          <TutorialContent />
        </article>

        {/* Sidebar TOC (hidden on mobile) */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <TableOfContents />
        </aside>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          Built for the{" "}
          <a
            href="https://keploy.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            Keploy
          </a>{" "}
          DevRel Candidate Assignment ·{" "}
          <a
            href="https://github.com/keploy/samples-go"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            Sample Source
          </a>{" "}
          ·{" "}
          <a
            href="https://keploy.io/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            Keploy Docs
          </a>
        </p>
      </footer>
    </div>
  );
}
