"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "@/components/Icons";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  variant?: "command" | "output" | "default";
  badge?: string;
}

export function CodeBlock({
  code,
  language = "bash",
  filename,
  variant = "default",
  badge,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Determine badge label and color scheme
  let displayBadge = badge;
  let badgeClasses = "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700";

  if (variant === "command" || badge === "YOU RUN") {
    displayBadge = displayBadge || "YOU RUN";
    badgeClasses = "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/25";
  } else if (variant === "output" || badge === "KEPLOY RESPONDS") {
    displayBadge = displayBadge || "KEPLOY RESPONDS";
    badgeClasses = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25";
  }

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm max-w-full min-w-0 transition-colors">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100/90 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2.5">
          {filename ? (
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 font-mono">
              {filename}
            </span>
          ) : (
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </div>
          )}

          {displayBadge && (
            <span
              className={`text-[10px] font-bold font-mono tracking-wider uppercase px-2 py-0.5 rounded border ${badgeClasses}`}
            >
              {displayBadge}
            </span>
          )}

          {language && (
            <span className="text-[11px] text-gray-500 dark:text-gray-400 uppercase font-mono tracking-wider ml-0.5">
              {language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors rounded-md px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {copied ? (
            <>
              <CheckIcon className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-medium font-mono text-[11px]">Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-3.5 h-3.5" />
              <span className="font-mono text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <pre className="bg-orange-50/60 dark:bg-gray-950 px-4 py-4 overflow-x-auto text-sm leading-relaxed max-w-full m-0 border-0">
        <code className={`language-${language} text-white dark:text-gray-200 whitespace-pre block font-mono text-[13px]`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  );
}
