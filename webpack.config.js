const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');

const bundleDir = './build';
const bundleFile = 'testquality-sdk.js';
const bundleGlobalName = 'TestQualitySDK'; 

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, bundleDir),
    filename: bundleFile,
    library: bundleGlobalName,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.webpack.json'
        }
      }
    ]
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [bundleDir],
      },
      after: {
        root: bundleDir,
        test: [
          {
            folder: '.',
            method: () => true,
            recursive: true
          }
        ],
        exclude: [bundleFile],
      },
    })
  ]
};
