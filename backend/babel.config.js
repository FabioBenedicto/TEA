module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@connections': './src/connections',
          '@controllers': './src/controllers',
          '@middlewares': './src/middlewares',
          '@models': './src/models',
        },
      },
    ],
  ],
  ignore: [],
}
