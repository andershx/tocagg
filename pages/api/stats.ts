import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: { bodyParser: false },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders?.();

  const send = () => {
    const volume = (10000 + Math.random() * 5000).toFixed(0);
    const pools = (5 + Math.floor(Math.random() * 5)).toString();
    const winners = (100 + Math.floor(Math.random() * 50)).toString();
    const payload = JSON.stringify({
      stats: [
        { label: "24h Volume", value: `$${Number(volume).toLocaleString()}` },
        { label: "Active Pools", value: pools },
        { label: "Winners", value: winners },
      ],
    });
    res.write(`data: ${payload}\n\n`);
  };

  const interval = setInterval(send, 1500);
  send();

  req.on("close", () => {
    clearInterval(interval);
    res.end();
  });
}
