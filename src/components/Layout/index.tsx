import React, { FC } from 'react'
import Link from 'next/link'
import Head from '../Head';
import LayoutStyle from './style';

type LayoutProps = {
  title: string
}

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <>
    <Head title={title} />
    <LayoutStyle>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>
      {children}
    </LayoutStyle>
  </>
)
export default Layout
