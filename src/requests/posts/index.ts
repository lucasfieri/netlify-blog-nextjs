import textVersion from 'textversionjs';

export const importBlogPosts = async () => {
  const markdownFiles = require
    .context('../../content/posts', true, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../../content/posts/${path}`);
      const body = textVersion(markdown.html);
      return { ...markdown, body, slug: path.substring(0, path.length - 3) };
    })
  );
};
