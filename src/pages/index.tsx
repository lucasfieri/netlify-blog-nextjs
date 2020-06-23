import React from 'react'
import { NextPage } from 'next';
import Head from '../components/Head';
import { importBlogPosts } from '../requests/posts';
import Card from '../components/Card';
import IPost from '../interfaces/IPost';
import DeckCard from '../components/DeckCard';
import ContentWrapper from '../components/ContentWrapper';

type IndexProps = {
  postsList: string
}

const Index: NextPage<IndexProps> = ({ postsList }) => {
  const list: IPost[] = JSON.parse(postsList);
  return (
    <>
      <Head title="Petz Dev Portal" />
      <main>
        <ContentWrapper>
          <DeckCard>
            {list.map((post: IPost) => {
              const { attributes, body, slug } = post
              return (
                <Card key={slug} attributes={attributes} body={body} />
              );
            })}
          </DeckCard>
        </ContentWrapper>
      </main>
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
