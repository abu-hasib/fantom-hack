import type { AppProps } from "next/app";
import { ThirdwebProvider, Web3Button, metamaskWallet, paperWallet, trustWallet, useAddress, walletConnect } from "@thirdweb-dev/react";
import {PaperWallet} from "@thirdweb-dev/wallets"
import { FantomTestnet } from "@thirdweb-dev/chains"
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const emailWallet = paperWallet({
  clientId: process.env.NEXT_PUBLIC_PAPER_CLIENT_ID as string,
})

const wallet = new PaperWallet({
  chain: FantomTestnet,
  clientId: ''
})

function MyApp({ Component, pageProps }: AppProps) {
  const address = useAddress()
  console.log({address})
  return (
    <ThirdwebProvider activeChain={ FantomTestnet } supportedWallets={[trustWallet(), metamaskWallet(), emailWallet]}>
      <Component {...pageProps} />
      {/* <Web3Button /> */}
    </ThirdwebProvider>
  );
}

export default MyApp;
