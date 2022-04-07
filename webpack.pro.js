/*
 * Copyright (c)  2022  All Rights Reserved
 * 项目名称:phasertest
 * 文件名称:webpack.pro.js
 * 修改日期:2022/04/07 16:42:22
 * 作者:kerojiang
 */

const base = require('./webpack.dev.js')
const { merge } = require('webpack-merge')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(base, {
  mode: 'production',
  devtool: false,
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
})
