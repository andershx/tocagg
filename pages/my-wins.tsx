import Head from "next/head";

export default function MyWins() {
  return (
    <>
      <Head><title>My Wins — CardCast</title></Head>
      <div className="container mt-10">
        <h1 className="text-3xl font-bold">My Wins</h1>
        <p className="text-white/80 mt-2">
          This is a placeholder page. In a production app, you'd query your backend or program to list any pools you
          won, along with shipping collection UX.
        </p>
        <div className="card p-6 mt-6">
          <p className="text-white/70">No wins yet.</p>
        </div>
      </div>
    </>
  );
}
