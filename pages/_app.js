import Cursor from "../Components/Cursor/Cursor";
import GlobalStyle from "../styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";

const MyApp = ({Component, pageProps}) => {
  return (
    <AnimatePresence>
      <Cursor />
      <GlobalStyle />
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
