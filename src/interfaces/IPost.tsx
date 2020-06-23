export default interface IPost {
  attributes: {
    thumbnail: string,
    title: string,
    description: string,
    author: string,
    date: string,
    categories: string[]
  },
  body: string,
  html?: string,
  slug?: string,
  principal?: boolean,
}
