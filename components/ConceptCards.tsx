interface Concept {
  badge: string;
  badgeColor: string;
  title: string;
  summary: string;
  takeaway: string;
}

const CONCEPTS: Concept[] = [
  {
    badge: "Go + Gin",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    title: "URL Shortener Service",
    summary: "Exposes POST /url and GET /:hash using Gin with SHA-256 + Base58 deterministic URL hashing.",
    takeaway: "Deterministic output ensures identical inputs produce repeatable hashes (e.g. Lhr4BWAi).",
  },
  {
    badge: "Docker Network",
    badgeColor: "bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    title: "Multi-Container Isolation",
    summary: "Creates keploy-network bridge so the Go app container can resolve MongoDB by hostname (mongoDb:27017).",
    takeaway: "Shared bridge network allows Keploy's container proxy to intercept inter-service network packets.",
  },
  {
    badge: "MongoDB",
    badgeColor: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300 border-green-200 dark:border-green-800",
    title: "Binary Wire Mocks",
    summary: "Stores URL mappings in the url-shortener database with collections and master commands.",
    takeaway: "Keploy intercepts TCP wire protocol packets, letting you mock MongoDB without writing mock code.",
  },
  {
    badge: "Keploy eBPF",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300 border-orange-200 dark:border-orange-800",
    title: "Record & Replay Testing",
    summary: "Watches running applications, generates test YAMLs, and replays tests against clean application binaries.",
    takeaway: "Automatic noise detection ignores dynamic timestamps (body.ts) to guarantee zero false positives.",
  },
];

export function ConceptCards() {
  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      {CONCEPTS.map((c) => (
        <div
          key={c.title}
          className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 hover:border-gray-300 dark:hover:border-gray-700 transition-colors shadow-xs flex flex-col justify-between"
        >
          <div>
            <span
              className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase tracking-wider border mb-2 ${c.badgeColor}`}
            >
              {c.badge}
            </span>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1.5">
              {c.title}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              {c.summary}
            </p>
          </div>
          <div className="pt-2.5 border-t border-gray-100 dark:border-gray-800/80 text-[11px] font-mono text-gray-500 dark:text-gray-400">
            <span className="text-orange-600 dark:text-orange-400 font-semibold">Key: </span>
            {c.takeaway}
          </div>
        </div>
      ))}
    </div>
  );
}
