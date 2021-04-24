const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'ws-common-utils': './lib/index.ts',
  },
  output: {
    filename: '[name].cjs.prod.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'wsCommonUtils',
      type: 'umd', // 支持CommonJS AMD global变量 模式下的包引用
      export: 'default', // 把 default 导出中的内容直接放在库名 wsCommonUtils 下
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};