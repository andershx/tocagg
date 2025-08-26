import { formatDistanceToNow } from "date-fns";

export type Pool = {
  id: string;
  title: string;
  grade: string;
  image: string;
  entries: number;
  endsAt: string; // ISO
  priceTCG: number;
  status: "open" | "closed";
};

export default function PoolCard({ pool }: { pool: Pool }) {
  const remaining = formatDistanceToNow(new Date(pool.endsAt), { addSuffix: true });
  return (
    <div className="card overflow-hidden">
      <img src={pool.image} alt={pool.title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-white/60">{pool.grade}</div>
            <div className="text-lg font-semibold">{pool.title}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-white/60">Entry</div>
            <div className="text-xl font-semibold">{pool.priceTCG} TCG</div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 text-sm text-white/70">
          <span>{pool.entries} entries</span>
          <span>{pool.status === "open" ? `Ends ${remaining}` : "Closed"}</span>
        </div>
        <div className="mt-4 flex gap-3">
          <button className="btn-primary flex-1">Enter Pool</button>
          <a
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            href={`${process.env.NEXT_PUBLIC_JUP_AG_URL || "https://jup.ag/swap"}?inputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&outputMint=${process.env.NEXT_PUBLIC_TCG_MINT || "ReplaceWithYourTokenMintAddress"}&amount=20`}
          >
            Buy TCG
          </a>
        </div>
      </div>
    </div>
  );
}
