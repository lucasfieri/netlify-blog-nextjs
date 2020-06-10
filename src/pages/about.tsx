import React, { FC } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Head from '../components/Head';
import { NextPage } from 'next';

type PostLinkProps = {
  title?: string
}
const PostLink: FC<PostLinkProps> = ({ title }) => {
  return (
    <li>
      <Link href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  )
}
const About: NextPage = () => {
  return (
    <>
      <Head title="About Page" />
      <Layout>
        <h1>This is About page ✌</h1>
        <PostLink title="Hello" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
        <Link href="/newPost"><a>Post MD</a></Link>
      </Layout>
    </>
  )
}
export default About
