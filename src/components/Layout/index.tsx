import React, { FC } from 'react'
import LayoutStyle from './style';
import Theme from '../../styles/ThemeProvider';
import Header from '../Header';

const Layout: FC = ({ children }) => (
  <Theme>
    <LayoutStyle>
      <Header />
      {children}
    </LayoutStyle>

  </Theme>
)
export default Layout
