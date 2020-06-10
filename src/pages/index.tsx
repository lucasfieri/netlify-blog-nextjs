import React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next';
import Head from '../components/Head';

const Index: NextPage = () => {
  return (
    <>
      <Head title="Petz Dev Portal" />
      <Layout>
        <h1>Welcome to Petz Dev Portal</h1>
      </Layout>
    </>
  )
}
export default Index
