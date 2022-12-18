import {createGlobalStyle} from "styled-components";
import THEME from "./Theme";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
background-image: url(https://marketifythemes.net/html/foliox//img/hero/1.jpg);
  font-family: ${THEME.fonts.fontFamilyMain};
  color: ${THEME.colors.mainColor};
  cursor: auto !important;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  cursor: pointer !important;
}
#root, #__next {
  isolation: isolate;
}

`;

export default GlobalStyle;
