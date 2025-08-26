import useSWR from "swr";
import PoolCard, { Pool } from "./PoolCard";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function PoolsGrid() {
  const { data, error, isLoading } = useSWR<{ pools: Pool[] }>("/api/pools", fetcher, { refreshInterval: 8000 });
  if (isLoading) {
    return <div className="container mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => <div key={i} className="card h-80 animate-pulse"/> )}
    </div>;
  }
  if (error || !data) {
    return <div className="container mt-8 text-white/70">Failed to load pools.</div>;
  }
  return (
    <div className="container mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.pools.map((p) => <PoolCard key={p.id} pool={p} />)}
    </div>
  );
}
