# CardCast — Original, rebranded raffle-style demo (Solana + Next.js)

**This is not a clone of any specific site’s code or content.** It’s an original, clean-room implementation that
demonstrates a similar feature set with a distinct brand and color system.

## What’s inside
- Next.js (Pages router) + React + TypeScript
- Tailwind CSS (custom brand palette: blue → purple with aqua accent)
- Solana wallet connect (Phantom; easy to add more adapters)
- Jupiter deep link button to buy a placeholder “TCG” token (configurable)
- Live stats via SSE (`/api/stats`)
- Pools listing fed by `/api/pools` (mock data)
- “My Wins”, Terms, Privacy pages (original templates)

> ⚠️ **Legal & compliance:** Raffles/sweepstakes are regulated. This code is for educational/prototyping use only.

## Quick start
```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_TCG_MINT to your token mint
npm run dev
```

- Visit http://localhost:3000
- Connect Phantom (or disable autoConnect in the provider to test without a wallet)

## Configure token + Jupiter
Edit `.env.local`:
```
NEXT_PUBLIC_SOLANA_RPC=https://api.mainnet-beta.solana.com
NEXT_PUBLIC_TCG_MINT=YourTokenMintAddress
NEXT_PUBLIC_JUP_AG_URL=https://jup.ag/swap
```

The “Buy $20 TCG” links use the USDC mint on Solana and your output mint.

## Notes
- Replace images and text with your own assets.
- To implement real entries and winner selection, write an on-chain program or a secure backend with verifiable randomness.
- Don’t ship with the mock `/api/pools` and `/api/stats` — replace them with your real sources.

## License
MIT for the code in this repo. Do not copy third‑party content or trademarks.
