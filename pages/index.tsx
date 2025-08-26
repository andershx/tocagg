import Head from "next/head";
import Link from "next/link";
import StatTicker from "@/components/StatTicker";
import PoolsGrid from "@/components/PoolsGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>CardCast — Collectible Card Raffles</title>
      </Head>
      <section className="container mt-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Win graded cards with transparent, crypto-powered entries.
            </h1>
            <p className="mt-4 text-white/80 max-w-prose">
              This is an original, rebranded demo app showing how you might build a raffle-like experience
              with Solana wallets, a token purchase deep link, live stats, and pool listings.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/pools" className="btn-primary">Browse Pools</Link>
              <a
                className="btn-outline"
                target="_blank"
                rel="noreferrer"
                href={`${process.env.NEXT_PUBLIC_JUP_AG_URL || "https://jup.ag/swap"}?inputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&outputMint=${process.env.NEXT_PUBLIC_TCG_MINT || "ReplaceWithYourTokenMintAddress"}&amount=20`}
              >
                Buy $20 TCG
              </a>
            </div>
            <p className="text-xs text-white/60 mt-3">
              Not affiliated with any grading company or brand. For educational use only.
            </p>
          </div>
          <div className="card p-0 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1603575449292-c9f293c88d2b?q=80&w=1600&auto=format&fit=crop" alt="Cards" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>
      <StatTicker />
      <section className="mt-8">
        <div className="container">
          <h2 className="text-2xl font-semibold">Active Pools</h2>
        </div>
        <PoolsGrid />
      </section>
    </>
  );
}
