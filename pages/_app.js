import Cursor from "../Components/Cursor/Cursor";
import GlobalStyle from "../styles/GlobalStyles";

const MyApp = ({Component, pageProps}) => {
  return (
    <>
      <Cursor />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
