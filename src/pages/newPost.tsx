import React from 'react'
import Head from '../components/Head';
import { NextPage } from 'next';
import { attributes, react as HomeContent } from '../content/home.md';


const Post: NextPage = () => {
  let { title, cats } = attributes;

  return (
    <>
      <Head title={title} >
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat: any, k: number) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default Post
