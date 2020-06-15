import React from 'react'
import { NextPage } from 'next';
import Head from '../../components/Head';

type PostProps = {
  blogpost: any
}

const Post: NextPage<PostProps> = ({ blogpost }) => {
  if (!blogpost) return <div>not found</div>;

  const {
    html,
    attributes: { title, description },
  } = blogpost.default;
  return (
    <>
      <Head title={title} description={description} />
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  )
}
Post.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const blogpost = await import(`../../content/posts/${slug}.md`).catch(_error => null);

  return { blogpost };
}

export default Post
