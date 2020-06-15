require('dotenv').config();

const webpack = require('webpack');
const path = require('path');
const withImages = require('next-images');
const fs = require('fs');
const blogPostsFolder = './src/content/posts';

const env = Object.keys(process.env).reduce((acc, curr) => {
  acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);

  return acc;
}, {});

const getPathsForPosts = () => {
  return fs
    .readdirSync(blogPostsFolder)
    .map(blogName => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        [`/post/${trimmedName}`]: {
          page: '/post/[slug]',
          query: {
            slug: trimmedName,
          },
        },
      };
    })
    .reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});
};

module.exports = withImages({
  pageExtensions: ['ts', 'tsx'],
  poweredByHeader: false,
  generateEtags: false,
  webpack: (config, _) => {
    config.node = { fs: 'empty' }

    config.resolve.modules.push(path.resolve(__dirname, 'src'))

    config.plugins.push(new webpack.EnvironmentPlugin(process.env))

    config.module.rules.push({
      test: /\.(ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    )
    config.plugins.push(new webpack.DefinePlugin(env));

    return config
  },
    async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      ...getPathsForPosts(),
    };
  },
})
