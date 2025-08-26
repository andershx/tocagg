import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const WalletMultiButtonDynamic = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="picu home">
          <Image src="/logo.svg" width={128} height={32} alt="picu" priority />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/pools" className="hover:opacity-80">Pools</Link>
          <Link href="/my-wins" className="hover:opacity-80">My Wins</Link>
          <Link href="/terms" className="hover:opacity-80">Terms</Link>
          <Link href="/privacy" className="hover:opacity-80">Privacy</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="btn-outline hidden sm:inline-flex"
            target="_blank"
            rel="noreferrer"
            href={`${process.env.NEXT_PUBLIC_JUP_AG_URL || "https://jup.ag/swap"}?inputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&outputMint=${process.env.NEXT_PUBLIC_TCG_MINT || "ReplaceWithYourTokenMintAddress"}&amount=20`}
          >
            Buy $20 TCG
          </a>
          <WalletMultiButtonDynamic className="btn-primary" />
        </div>
      </div>
    </header>
  );
}
