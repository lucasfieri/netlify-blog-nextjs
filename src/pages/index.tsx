import React from 'react'
import { NextPage } from 'next';
import Head from '../components/Head';
import Link from 'next/link';

const importBlogPosts = async () => {
  const markdownFiles = require
    .context('../content/posts', true, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/posts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

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
  const teste = JSON.stringify(postsList)
  return {
    props: {
      postsList: teste,
    },
  }
}

export default Index
