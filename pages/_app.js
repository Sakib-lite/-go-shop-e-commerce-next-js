import "../styles/index.css";
import { Context } from "../components/context/State";
import { Provider } from "react-redux";
import store from "../components/store/redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Context>
        <Component {...pageProps} />
      </Context>
    </Provider>
  );
}

export default MyApp;
