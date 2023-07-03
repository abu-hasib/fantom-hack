import type { AppProps } from "next/app";
import { ThirdwebProvider, metamaskWallet, paperWallet, trustWallet, walletConnect } from "@thirdweb-dev/react";
import {PaperWallet} from "@thirdweb-dev/wallets"
import { FantomTestnet } from "@thirdweb-dev/chains"
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const emailWallet = paperWallet({
  clientId: 'beeeed4c-946a-4a53-b4ba-b952cec3c21e',
})

const wallet = new PaperWallet({
  chain: FantomTestnet,
  clientId: ''
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={ FantomTestnet } supportedWallets={[trustWallet(), metamaskWallet(), walletConnect(), emailWallet]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
