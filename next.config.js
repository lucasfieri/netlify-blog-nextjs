require('dotenv').config();

const webpack = require('webpack');
const path = require('path');
const withImages = require('next-images');

const env = Object.keys(process.env).reduce((acc, curr) => {
  acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);

  return acc;
}, {});

module.exports = withImages({
  distDir: 'build',
  pageExtensions: ['ts', 'tsx'],
  poweredByHeader: false,
  generateEtags: false,
  webpack: (config, options) => {
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
  }
})
