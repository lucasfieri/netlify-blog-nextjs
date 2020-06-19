import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Global';

const theme = {
  main: {
    colors: {
      primary: {
        petzYellow: '#FFD400',
        darkBlue: '#16479D',
        mediumBlue: '#007DC6',
        lightBlue: '#00A0E4',
      },
      text: {
        darkGrey: '#262626',
        mediumGrey: '#5A5A5A',
        mediumGreySecondary: '#939393',
        lightGray: '#BABABA'
      }
    },
    fontSizes: {
      small: '1em',
      medium: '2em',
      large: '3em'
    }
  }
}

const Theme: FC = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{ children }</ThemeProvider>
  </>
);

export default Theme;
