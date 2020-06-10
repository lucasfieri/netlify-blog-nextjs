import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head';
import { NextPage } from 'next';

type PostProps = {
  title: string
}
const Post: NextPage<PostProps> = (props) => {
  return (
    <>
      <Head title={props.title} />
      <Layout>
        <h1>{props.title}</h1>
        <p>This is the blog post content.</p>
      </Layout>
    </>
  )
}

Post.getInitialProps = async (ctx: any) => {
  const { title } = ctx.query
  return { title }
}
export default Post
