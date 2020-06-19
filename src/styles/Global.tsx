import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  a {
    text-decoration: none;
    color: inherit;
    &:link, &:active, &:visited {
      outline:0;
    }
  };
  body {
    font-family: 'Roboto, sans-serif'
  }
`;

export default GlobalStyle;
