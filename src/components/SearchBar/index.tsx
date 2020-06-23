import React, { FC } from 'react';
import menus from '../../../utils/menus';
import { ListStyled, NavStyled, ItemListStyled } from './style';
import Link from 'next/link';
import { Search } from '@material-ui/icons';

const SearchBar: FC = () => {
  return (
  <NavStyled>
    <ListStyled>
      {menus.map(menuText => (
        <Link href="/" key={menuText}>
          <ItemListStyled key={menuText}>{menuText}</ItemListStyled>
        </Link>
      ))}
    </ListStyled>
    <Search/>
  </NavStyled>
)
}

export default SearchBar
