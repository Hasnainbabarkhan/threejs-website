const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // ✅ Add this line

module.exports = merge(commonConfiguration, {
    mode: 'production',
    devtool: false,
    optimization: {
        splitChunks: {
            chunks: 'all', // ✅ Enables code splitting
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(), // ✅ Add this plugin
    ],
});
