export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/30">
      <div className="container py-10 text-sm text-white/70">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <div className="font-semibold text-white">CardCast</div>
            <p className="max-w-md mt-2">An original, example raffle-style web app for collectible cards. This codebase is provided for educational and prototyping purposes. Use responsibly and comply with local laws.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-white">App</div>
              <a href="/pools" className="hover:opacity-80 block">Pools</a>
              <a href="/my-wins" className="hover:opacity-80 block">My Wins</a>
            </div>
            <div className="space-y-2">
              <div className="text-white">Legal</div>
              <a href="/terms" className="hover:opacity-80 block">Terms</a>
              <a href="/privacy" className="hover:opacity-80 block">Privacy</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} CardCast. All rights reserved.</div>
      </div>
    </footer>
  );
}
