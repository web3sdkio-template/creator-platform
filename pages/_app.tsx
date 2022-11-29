import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <Web3sdkioProvider
      desiredChainId={ChainId.Goerli}
      authConfig={{
        authUrl: "/api/auth",
        domain: "example.org",
        loginRedirect: "/create",
      }}
    >
      <Component {...pageProps} />
    </Web3sdkioProvider>
  );
};

export default MyApp;
