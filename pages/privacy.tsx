import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head><title>Privacy — CardCast</title></Head>
      <div className="container mt-10 prose prose-invert">
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> 26 August 2025</p>
        <p>
          This demo does not collect personal information by default. If you self-host and add analytics or email collection,
          update this policy accordingly and disclose cookie usage where required.
        </p>
        <h2>Wallet Information</h2>
        <p>
          Wallet addresses you connect are public on-chain identifiers. Do not consider them private. If you store wallet
          addresses or other data on your server, protect them appropriately.
        </p>
        <h2>Cookies</h2>
        <p>Implement cookie consent where required by law.</p>
      </div>
    </>
  );
}
