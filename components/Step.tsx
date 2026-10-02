import { ReactNode } from "react";

interface StepProps {
  number: number;
  title: string;
  id?: string;
  children: ReactNode;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s*—\s*/g, "-")
    .replace(/\s*–\s*/g, "-")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function Step({ number, title, id, children }: StepProps) {
  const stepId = id || `step-${number}-${slugify(title)}`;
  const isLast = number === 8;

  return (
    <div
      id={stepId}
      className={`relative flex gap-4 sm:gap-6 my-10 scroll-mt-24 ${
        !isLast ? "pb-4" : ""
      }`}
    >
      {/* Visual Timeline Rail (connecting line to next step) */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="absolute left-[18px] top-11 bottom-[-2.5rem] w-[2px] bg-gradient-to-b from-orange-500/40 via-orange-500/20 to-orange-500/5 dark:from-orange-500/30 dark:via-orange-500/15 dark:to-orange-500/5 select-none pointer-events-none"
        />
      )}

      {/* Step number badge */}
      <div className="flex-shrink-0 z-10">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md shadow-orange-500/30 ring-4 ring-orange-500/10 dark:ring-orange-500/20">
          <span className="text-white font-mono font-bold text-sm">{number}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 pt-0.5 pb-2 min-w-0">
        {/* Step Metadata Header */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
            Step 0{number} of 08
          </span>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
            Tutorial Phase
          </span>
        </div>

        <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-4 tracking-tight">
          {title}
        </h3>

        <div className="text-gray-700 dark:text-gray-300 space-y-4 min-w-0 overflow-x-auto text-[15px] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
