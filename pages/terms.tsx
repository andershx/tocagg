import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head><title>Terms — CardCast</title></Head>
      <div className="container mt-10 prose prose-invert">
        <h1>Terms of Use</h1>
        <p><strong>Last updated:</strong> 26 August 2025</p>
        <p>
          CardCast is a demonstration project. If you deploy this or a derivative, you are solely responsible for complying with
          all applicable laws and regulations in your jurisdiction, including but not limited to sweepstakes, promotions, and
          consumer protection laws.
        </p>
        <h2>Eligibility</h2>
        <p>You must be at least 18 years old (or the age of majority in your jurisdiction) to use this application.</p>
        <h2>On-Chain Transactions</h2>
        <p>Cryptocurrency transactions are final and irreversible. You are responsible for gas/fees and wallet security.</p>
        <h2>Disclaimer</h2>
        <p>This software is provided “as is,” without warranties of any kind. Use at your own risk.</p>
      </div>
    </>
  );
}
