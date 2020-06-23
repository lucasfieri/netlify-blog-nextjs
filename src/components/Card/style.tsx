import styled from 'styled-components';
import { media } from '../../styles/Media';

interface DivProps {
  img: any;
}

export const ImageHolderStyled = styled.div<DivProps>`
  background-image: url(${props => props.img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
`


export const InfoHolderStyled = styled.div`
  width: 100%;
  padding: 1em;
  * {
    padding: 0;
    margin: 0;
  };
`

export const HeaderStyled = styled.header`
`

export const TagListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const TagItemStyled = styled.li`
  display: inline;

`

export const BodyWrapper = styled.section`
`

export const TitleStyled = styled.h4`
  color: ${props => props.theme.main.colors.primary.darkBlue};
  line-height: 25px;
  font-size: 22px;
`

export const DescriptionStyled = styled.p`
  color: ${props => props.theme.main.colors.text.mediumGrey};
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const FooterStyled = styled.footer`
  color: ${props => props.theme.main.colors.text.mediumGrey};
  font-size: 16px;
`

export const LinkStyled = styled.a`
  color: ${props => props.theme.main.colors.primary.darkBlue};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

export const CardStyled = styled.article`
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => `0px 0px 15px 0px ${props.theme.main.colors.text.shadowGray}`};
  &:first-child {
    ${TitleStyled} {
      font-size: 36px;
      line-height: 36px;
    };
    ${DescriptionStyled} {
      -webkit-line-clamp: 2;
      font-size: 20px;
    };
    ${FooterStyled} {
      font-size: 20px;
    }
  }
  @media ${media.tablet} {
    &:first-child {
        grid-column: 1/3;
        grid-row: 1/1;
    }
  }
  @media ${media.desktop} {
    &:first-child {
      grid-column: 1/4;
      grid-row: 1/4;
      ${InfoHolderStyled} {
        width: 60%;
      }
      ${ImageHolderStyled} {
        width: 40%;
      }
    }
  }

`
