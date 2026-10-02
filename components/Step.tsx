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
      className={`relative flex gap-3.5 sm:gap-4 my-8 scroll-mt-24 ${
        !isLast ? "pb-2" : ""
      }`}
    >
      {/* Visual Timeline Rail */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="absolute left-[14px] top-9 bottom-[-1.5rem] w-[1.5px] bg-gradient-to-b from-orange-500/30 to-orange-500/5 select-none pointer-events-none"
        />
      )}

      {/* Step number badge */}
      <div className="flex-shrink-0 z-10">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xs">
          <span className="text-white font-mono font-bold text-xs">{number}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 pt-0.5 pb-1 min-w-0">
        {/* Step Metadata Header */}
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
            Step 0{number}
          </span>
          <span className="text-gray-300 dark:text-gray-700 text-xs">•</span>
          <span className="text-[10px] font-mono text-gray-400">
            Hands-on
          </span>
        </div>

        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3 tracking-tight">
          {title}
        </h3>

        <div className="text-gray-700 dark:text-gray-300 space-y-3 min-w-0 overflow-x-auto text-[14.5px] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
