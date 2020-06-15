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
  postsList: any[]
}

const Index: NextPage<IndexProps> = ({ postsList }) => {
  return (
    <>
      <Head title="Petz Dev Portal" />
      <div className="blog-list">
        {postsList.map(post => {
          const { thumbnail, title, description, author } = post.attributes
          return (
            <>
              <Link href={`post/${post.slug}`} key={post.slug}>
                <a>
                  <img src={thumbnail} />
                  <h2>{title}</h2>
                </a>
              </Link>
              <p>{description}</p>
              <p>Escrito por - {author}</p>
            </>
          );
        })}
      </div>
    </>
  )
}
Index.getInitialProps = async () => {
  const postsList = await importBlogPosts();
  return { postsList };
}

export default Index
