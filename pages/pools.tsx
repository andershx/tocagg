import Head from "next/head";
import PoolsGrid from "@/components/PoolsGrid";

export default function PoolsPage() {
  return (
    <>
      <Head><title>Pools — CardCast</title></Head>
      <div className="container mt-10">
        <h1 className="text-3xl font-bold">Pools</h1>
        <p className="text-white/80 mt-2">Enter any active pool using your connected wallet. Values here are demo data.</p>
      </div>
      <PoolsGrid />
    </>
  );
}
