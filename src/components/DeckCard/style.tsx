import styled from 'styled-components';
import { media } from '../../styles/Media';

export const DeckCardStyled = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 0 1em;
  @media ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`
