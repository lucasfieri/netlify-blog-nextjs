import React, { FC } from 'react'
import Link from 'next/link'
import LayoutStyle from './style';

const Layout: FC = ({ children }) => (
  <LayoutStyle>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
    {children}
  </LayoutStyle>
)
export default Layout
