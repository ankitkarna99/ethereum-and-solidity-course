import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

export const getLibrary = (provider) => {
  return new Web3(provider);
};

export const httpProvider = new Web3.providers.HttpProvider(
  "https://goerli.infura.io/v3/305f55128e034436b1b7f057aa6a5c0c"
);

export default function App({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
