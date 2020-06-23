import React, { FC } from 'react';
import { DeckCardStyled } from './style';

const DeckCard: FC = ({ children }) => {
  return (
    <DeckCardStyled>
      {children}
    </DeckCardStyled>
  )
}

export default DeckCard
