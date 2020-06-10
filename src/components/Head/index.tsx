import React, { FC } from 'react'
import NextHead from 'next/head'

const { PUBLIC_URL } = process.env
const baseURL = PUBLIC_URL || '' // @TODO: Fix this later

type HeadProps = {
  title: string;
  description?: string;
  url?: string;
  path?: string;
  ogImage?: string;
}

const Head: FC<HeadProps> = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="theme-color" content="#246" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" sizes="192x192" href="/touch-icon.png" />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:url" content={props.url! + props.path!} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta name="twitter:site" content={props.url! + props.path!} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage} />
    <meta property="og:image" content={props.ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="canonical" href={props.url! + props.path!} />
  </NextHead>
)
Head.defaultProps = {
  title: 'Petz Dev Portal',
  description: '',
  url: baseURL,
  path: '',
  ogImage: '',
}

export default Head
