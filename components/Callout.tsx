import { InfoIcon, WarningIcon, TipIcon, CheckIcon } from "@/components/Icons";
import { ReactNode } from "react";

type CalloutType = "info" | "warning" | "tip" | "success";

const styles: Record<
  CalloutType,
  { container: string; icon: string; title: string; IconComponent: React.FC<{ className?: string }> }
> = {
  info: {
    container:
      "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30",
    icon: "text-blue-500 dark:text-blue-400",
    title: "text-blue-800 dark:text-blue-200",
    IconComponent: InfoIcon,
  },
  warning: {
    container:
      "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30",
    icon: "text-amber-500 dark:text-amber-400",
    title: "text-amber-800 dark:text-amber-200",
    IconComponent: WarningIcon,
  },
  tip: {
    container:
      "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950/30",
    icon: "text-purple-500 dark:text-purple-400",
    title: "text-purple-800 dark:text-purple-200",
    IconComponent: TipIcon,
  },
  success: {
    container:
      "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30",
    icon: "text-green-500 dark:text-green-400",
    title: "text-green-800 dark:text-green-200",
    IconComponent: CheckIcon,
  },
};

const labels: Record<CalloutType, string> = {
  info: "Note",
  warning: "Warning",
  tip: "Pro Tip",
  success: "Success",
};

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const s = styles[type];
  const { IconComponent } = s;
  const displayTitle = title ?? labels[type];

  return (
    <div
      className={`my-6 flex gap-3 rounded-xl border p-4 max-w-full overflow-hidden ${s.container}`}
      role="note"
    >
      <div className={`mt-0.5 flex-shrink-0 ${s.icon}`}>
        <IconComponent className="w-5 h-5" />
      </div>
      <div className="min-w-0 flex-1 overflow-hidden">
        <p className={`font-semibold text-sm mb-1 ${s.title}`}>{displayTitle}</p>
        <div className="text-sm text-gray-700 dark:text-gray-300 [&>p]:m-0 [&>ul]:mt-1 min-w-0 overflow-x-auto max-w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
