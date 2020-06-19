import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  *, *::before, *::after {
    box-sizing: border-box;
  };
  a {
    text-decoration: none;
    color: inherit;
    &:link, &:active, &:visited {
      outline:0;
    }
  };
  body {
    font-family: 'Roboto'
  }
`;

export default GlobalStyle;
