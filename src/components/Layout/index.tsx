import React, { FC } from 'react'
import LayoutStyle from './style';
import Theme from '../../styles/ThemeProvider';
import Header from '../Header';
import { GlobalContext } from '../../context/Global';
import SearchBar from '../SearchBar';

const Layout: FC = ({ children }) => (
  <GlobalContext>
    <Theme>
      <LayoutStyle>
        <Header />
        <SearchBar />
        {children}
      </LayoutStyle>
    </Theme>
  </GlobalContext>
)
export default Layout
