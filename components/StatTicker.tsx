import React, { useEffect, useState } from "react";

type Stat = { label: string; value: string };

export default function StatTicker() {
  const [stats, setStats] = useState<Stat[]>([
    { label: "24h Volume", value: "$0" },
    { label: "Active Pools", value: "0" },
    { label: "Winners", value: "0" },
  ]);

  useEffect(() => {
    const es = new EventSource("/api/stats");
    es.onmessage = (evt) => {
      try {
        const data = JSON.parse(evt.data);
        setStats(data.stats);
      } catch {}
    };
    return () => es.close();
  }, []);

  return (
    <div className="container mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="card p-5">
          <div className="text-white/60 text-sm">{s.label}</div>
          <div className="text-2xl font-semibold mt-1">{s.value}</div>
        </div>
      ))}
    </div>
  );
}
