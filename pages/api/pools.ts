import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const now = Date.now();
  const hour = 1000 * 60 * 60;
  const sample = [
    {
      id: "pool-1",
      title: "Charizard Holo",
      grade: "PSA 10",
      image: "https://images.unsplash.com/photo-1603575449292-c9f293c88d2b?q=80&w=1600&auto=format&fit=crop",
      entries: 482,
      endsAt: new Date(now + 6 * hour).toISOString(),
      priceTCG: 2,
      status: "open",
    },
    {
      id: "pool-2",
      title: "Pikachu Promo",
      grade: "BGS 9.5",
      image: "https://images.unsplash.com/photo-1603575219790-05f9b0ce3fda?q=80&w=1600&auto=format&fit=crop",
      entries: 231,
      endsAt: new Date(now + 12 * hour).toISOString(),
      priceTCG: 1,
      status: "open",
    },
    {
      id: "pool-3",
      title: "Mewtwo Holo",
      grade: "CGC 9",
      image: "https://images.unsplash.com/photo-1603575203955-4b9b1a969d4c?q=80&w=1600&auto=format&fit=crop",
      entries: 876,
      endsAt: new Date(now + 2 * hour).toISOString(),
      priceTCG: 3,
      status: "open",
    },
  ];
  res.status(200).json({ pools: sample });
}
