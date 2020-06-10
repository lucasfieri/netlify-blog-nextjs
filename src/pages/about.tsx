import React, { FC } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

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
const About: FC = () => {
  return (
    <Layout title="About">
      <h1>This is About page ✌</h1>
      <PostLink title="Hello" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </Layout>
  )
}
export default About
