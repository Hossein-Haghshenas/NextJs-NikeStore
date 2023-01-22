import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import { Provider } from "react-redux";
import Store from "../components/app/store";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], style: ["normal", "italic"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      <section className={poppins.className}>
        <Component {...pageProps} />
      </section>
    </Provider>
  );
}

export default MyApp;
