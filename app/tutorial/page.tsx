import { TableOfContents } from "@/components/TableOfContents";
import { TutorialHero } from "@/components/TutorialHero";
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
      {/* Redesigned Technical Hero */}
      <TutorialHero />

      {/* Two-column layout: content + TOC sidebar */}
      <div className="flex gap-12">
        {/* Main content */}
        <article className="flex-1 min-w-0 prose prose-gray dark:prose-invert max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:scroll-mt-24
          prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2 prose-h3:scroll-mt-24
          prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
          prose-a:text-orange-600 dark:prose-a:text-orange-400 prose-a:no-underline hover:prose-a:underline
          prose-code:text-orange-600 dark:prose-code:text-orange-400 prose-code:bg-orange-50 dark:prose-code:bg-orange-950/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs sm:prose-code:text-[13px] prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-gray-950 prose-pre:rounded-xl prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700 prose-pre:shadow-xs
          prose-table:w-full prose-table:text-xs sm:prose-table:text-sm prose-th:text-left prose-th:bg-gray-50 dark:prose-th:bg-gray-900 prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2
          prose-blockquote:border-l-4 prose-blockquote:border-orange-400 prose-blockquote:not-italic
          prose-hr:border-gray-200 dark:border-gray-800
          prose-strong:text-gray-900 dark:prose-strong:text-white
          prose-li:text-[15px] prose-li:text-gray-700 dark:prose-li:text-gray-300">
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
