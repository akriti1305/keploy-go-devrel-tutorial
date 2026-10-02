"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
  isStep?: boolean;
}

const TOC_ITEMS: TocItem[] = [
  { id: "what-is-keploy", text: "What is Keploy?", level: 2 },
  { id: "what-we-are-building", text: "What We Are Building", level: 2 },
  { id: "prerequisites", text: "Prerequisites", level: 2 },
  { id: "understanding-the-app", text: "Understanding the App", level: 2 },
  { id: "step-1-clone-the-project", text: "Step 1 — Clone the Project", level: 2, isStep: true },
  { id: "step-2-install-keploy", text: "Step 2 — Install Keploy", level: 2, isStep: true },
  { id: "step-3-set-up-docker-network", text: "Step 3 — Docker Network", level: 2, isStep: true },
  { id: "step-4-start-mongodb", text: "Step 4 — Start MongoDB", level: 2, isStep: true },
  { id: "step-5-build-the-app-image", text: "Step 5 — Build the App", level: 2, isStep: true },
  { id: "step-6-record-test-cases", text: "Step 6 — Record Tests", level: 2, isStep: true },
  { id: "step-7-make-api-calls", text: "Step 7 — Make API Calls", level: 2, isStep: true },
  { id: "what-keploy-generated", text: "What Keploy Generated", level: 2 },
  { id: "step-8-run-the-tests", text: "Step 8 — Run the Tests", level: 2, isStep: true },
  { id: "understanding-noise-fields", text: "Noise Fields", level: 2 },
  { id: "what-keploy-is-doing-behind-the-scenes", text: "How It Works", level: 2 },
  { id: "troubleshooting", text: "Troubleshooting", level: 2 },
  { id: "conclusion", text: "Conclusion", level: 2 },
];

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Check if there is an initial hash in URL
    if (typeof window !== "undefined" && window.location.hash) {
      const initialId = window.location.hash.replace("#", "");
      const target = document.getElementById(initialId);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
          setActiveId(initialId);
        }, 150);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: 0.1 }
    );

    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2"
    >
      <div className="flex items-center justify-between mb-3 px-2">
        <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 font-mono">
          On This Page
        </p>
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
          17 Topics
        </span>
      </div>

      <ul className="space-y-0.5 border-l border-gray-200 dark:border-gray-800 pl-2">
        {TOC_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", `#${item.id}`);
                    setActiveId(item.id);
                  }
                }}
                className={`group flex items-center justify-between text-xs py-1.5 px-2.5 rounded-md transition-all duration-150 relative ${
                  isActive
                    ? "text-orange-600 dark:text-orange-400 bg-orange-50/80 dark:bg-orange-950/40 font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100/70 dark:hover:bg-gray-800/60"
                }`}
              >
                {/* Active Indicator Bar on the Left */}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -left-[9px] top-1 bottom-1 w-[2px] rounded-full bg-orange-500 shadow-sm"
                  />
                )}

                <span className="truncate">{item.text}</span>

                {item.isStep && (
                  <span
                    className={`ml-1 text-[9px] font-mono px-1 py-0.2 rounded ${
                      isActive
                        ? "bg-orange-200/60 dark:bg-orange-900/60 text-orange-800 dark:text-orange-300"
                        : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                    }`}
                  >
                    step
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
