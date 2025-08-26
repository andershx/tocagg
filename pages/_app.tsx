import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { WalletConnectionProvider } from "@/components/WalletConnectionProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </WalletConnectionProvider>
  );
}
