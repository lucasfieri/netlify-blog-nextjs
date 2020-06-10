import React, { FC } from 'react'
import { withRouter } from 'next/router'
import Layout from '../components/Layout'
type PostProps = {
  router?: any
}
const Post: FC<PostProps> = ({ router }) => {
  const { title } = router.query
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  )
}
export default withRouter(Post)
