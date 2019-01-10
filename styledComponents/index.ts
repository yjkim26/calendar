import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import theme, { IThemeProps } from "./theme";
import reset from "styled-reset";

const { createGlobalStyle } = styledComponents as ThemedStyledComponentsModule<
  IThemeProps
>;

const GlobalStyles = createGlobalStyle`
${reset}
*, *:before, *:after {
  box-sizing: border-box;
}
html, body {
  font-family: ${theme.font.family};
  font-weight: 400;
  color: ${theme.color.black};
}
body {
  background-color: ${theme.color.background};
  font-size: ${theme.font.base};
}
body, input, textarea, select, button {
  font-synthesis: none;
  font-feature-settings: 'kern';
  -moz-font-feature-settings: 'kern';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  direction: ltr;
  text-align: left;
  color: ${theme.color.black};
  letter-spacing: -0.5px;
  outline: 0;
  border: 0;
}
img {
  vertical-align: bottom;
}
button, input {
  padding: 0;
  border: 0;
}
button,
input[type="text"],
input[type="tel"],
input[type="number"] {
  appearance: none;
}
button {
  background-color: transparent;
  cursor: pointer;
  outline: none;
}
a {
  color: ${theme.color.black};
  text-decoration: none;
  cursor: pointer;
}
.body-no-scroll {
  overflow: hidden;
}
`;

export { GlobalStyles, theme };
