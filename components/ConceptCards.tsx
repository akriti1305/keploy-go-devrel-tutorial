interface Concept {
  badge: string;
  badgeColor: string;
  role: string;
}

const CONCEPTS: Concept[] = [
  {
    badge: "Go + Gin",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    role: "The application under test — exposes POST /url and GET /:hash with deterministic SHA-256 URL hashing.",
  },
  {
    badge: "Docker Network",
    badgeColor: "bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    role: "Provides keploy-network bridge so the Go container can resolve MongoDB by hostname (mongoDb:27017).",
  },
  {
    badge: "MongoDB",
    badgeColor: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300 border-green-200 dark:border-green-800",
    role: "The downstream database — its TCP wire protocol packets are recorded during recording and virtualized during replay.",
  },
  {
    badge: "Keploy CLI",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300 border-orange-200 dark:border-orange-800",
    role: "The test engine — intercepts network calls, writes YAML tests and wire mocks, and replays them automatically.",
  },
];

export function ConceptCards() {
  return (
    <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {CONCEPTS.map((c) => (
        <div
          key={c.badge}
          className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 text-xs shadow-xs"
        >
          <span
            className={`inline-block px-1.5 py-0.2 rounded text-[10px] font-bold font-mono uppercase tracking-wider border mb-1.5 ${c.badgeColor}`}
          >
            {c.badge}
          </span>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[12px]">
            {c.role}
          </p>
        </div>
      ))}
    </div>
  );
}
