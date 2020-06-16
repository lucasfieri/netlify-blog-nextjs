import React from 'react'
import { NextPage } from 'next';
import Head from '../components/Head';
import Link from 'next/link';
import { importBlogPosts } from '../requests/posts';

type IndexProps = {
  postsList: string
}

const Index: NextPage<IndexProps> = ({ postsList }) => {
  const list = JSON.parse(postsList);
  return (
    <>
      <Head title="Petz Dev Portal" />
      <div className="blog-list">
        {list.map((post:any) => {
          const { thumbnail, title, description, author } = post.attributes
          return (
            <div className="post" key={post.slug}>
              <Link href={`post/${post.slug}`} >
                <a>
                  <img src={thumbnail} />
                  <h2>{title}</h2>
                </a>
              </Link>
              <p>{description}</p>
              <p>Escrito por - {author}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const postsList = await importBlogPosts();
  const serializedPosts = JSON.stringify(postsList)
  return {
    props: {
      postsList: serializedPosts,
    },
  }
}

export default Index
