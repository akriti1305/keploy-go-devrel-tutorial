"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "@/components/Icons";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = "bash", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm max-w-full min-w-0">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          {filename ? (
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400 font-mono">
              {filename}
            </span>
          ) : (
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
          )}
          {language && (
            <span className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider ml-1">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors rounded-md px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {copied ? (
            <>
              <CheckIcon className="w-3.5 h-3.5 text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <pre className="bg-gray-950 dark:bg-gray-950 px-4 py-4 overflow-x-auto text-sm leading-relaxed max-w-full m-0">
        <code className={`language-${language} text-gray-200 whitespace-pre block`}>{code.trim()}</code>
      </pre>
    </div>
  );
}
