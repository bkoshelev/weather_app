const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const path = require('path');

module.exports = ({ config }) => {

  config.module.rules = config.module.rules.map(rule => {
    if (rule.test && rule.test.toString().includes('woff')) {
      return {
        ...rule,
        test: /\.(svg|ico|jpg|jpeg|png|gif|webp|cur|ani|pdf)(\?.*)?$/
      }
    }
    return rule
  })

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        }
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });

  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    include: path.resolve(__dirname, '../'),
    use: [
      {
        loader: 'file-loader',
        
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    ]

  })

  config.resolve.alias = {
    components: path.resolve(__dirname, "../src/components"),
    screens: path.resolve(__dirname, '../src/screens/'),
    tabs: path.resolve(__dirname, '../src/tabs/'),
    root: path.resolve(__dirname, '../src/'),
    storybook: path.resolve(__dirname, '../src/storybook'),
  }
  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
  return config;
};