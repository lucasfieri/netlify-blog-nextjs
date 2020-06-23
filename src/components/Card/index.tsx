import React, { FC } from 'react'
import IPost from '../../interfaces/IPost'
import Link from 'next/link'
import {
  BodyWrapper,
  CardStyled,
  DescriptionStyled,
  FooterStyled,
  ImageHolderStyled,
  InfoHolderStyled,
  HeaderStyled,
  TagItemStyled,
  TagListStyled,
  TitleStyled,
  LinkStyled,
} from './style';

const Card: FC<IPost> = ({ attributes, body }) => {
  const { author, date, thumbnail, title, categories } = attributes
  return (
    <CardStyled>
      <ImageHolderStyled img={thumbnail} />
      <InfoHolderStyled>
        <HeaderStyled>
          <TagListStyled>
            {categories.map(categorie => <TagItemStyled key={date+categorie}>{categorie}</TagItemStyled>)}
          </TagListStyled>
        </HeaderStyled>
        <BodyWrapper>
          <Link href={`/${title}`}>
            <LinkStyled>
              <TitleStyled>{title}</TitleStyled>
            </LinkStyled>
          </Link>
          <DescriptionStyled>{body}</DescriptionStyled>
        </BodyWrapper>
        <FooterStyled>
          {date} - Escrito por
            <Link href={`/${author}`}>
            <LinkStyled>{author}</LinkStyled>
          </Link>
        </FooterStyled>
      </InfoHolderStyled>
    </CardStyled>
  )
}

export default Card
