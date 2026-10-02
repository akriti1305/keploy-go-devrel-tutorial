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

  return (
    <div id={stepId} className="relative flex gap-4 my-8 scroll-mt-24">
      {/* Step number badge */}
      <div className="flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md shadow-orange-500/25">
          <span className="text-white font-bold text-sm">{number}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-1 pb-2 min-w-0">
        <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-3">
          {title}
        </h3>
        <div className="text-gray-700 dark:text-gray-300 space-y-3 min-w-0 overflow-x-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
