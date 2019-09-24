module.exports = {
  presets: [['@babel/preset-env'], ['@babel/preset-react'],["@babel/preset-typescript"]],
  plugins: [
    [
      '@babel/plugin-proposal-pipeline-operator',
      {
        proposal: 'minimal',
      },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-runtime',
      [
        "babel-plugin-styled-components",
        {
          "displayName": true
        }
      ],
      
  ],
};
