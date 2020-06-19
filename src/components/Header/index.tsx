import React, { FC } from 'react'
import HeaderStyle from './style';
import Logo from '../../assets/img/logo.svg';
import { Facebook, Instagram, YouTube } from '@material-ui/icons';

const Header: FC = () => (
  <HeaderStyle>
    <Logo />
    <div className="icons-group">
      <a href="https://pt-br.facebook.com/petzbr">
        <Facebook />
      </a>
      <a href="https://www.instagram.com/petz">
        <Instagram />
      </a>
      <a href="https://www.youtube.com/channel/UCiJ8nuwPUgT3Yx87nJDiplQ">
        <YouTube />
      </a>
    </div>
  </HeaderStyle>
)
export default Header
