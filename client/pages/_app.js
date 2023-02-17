import { TransactionProvider } from "../context/TransactionProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  );
}

export default MyApp;
