/* eslint-disable no-undef */
// next.config.js
require('dotenv').config();
const withStyles = require('@webdeb/next-styles');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = withStyles({
    trailingSlash: true, // Fix redirections after refresh screen. More info: https://nextjs.org/docs/api-reference/next.config.js/trailing-slash
    sass: true, // use .scss files
    modules: true, // style.(m|module).css & style.(m|module).scss for module files
    webpack: function (config, { dev, isServer }) {
        // Added resources
        config.module.rules.push({
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    outputPath: 'static/',
                    limit: 100000,
                    name: '[name].[ext]',
                },
            },
        });

        // Font Family
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    outputPath: 'static/chunks/',
                    publicPath: './',
                    limit: 100000,
                    name: '[name].[ext]',
                },
            },
        });

        // Analize plugins, run `ANALYZE=true yarn build`
        if (process.env.ANALYZE) {
            config.plugins.push(
                new BundleAnalyzerPlugin({
                    analyzerMode: 'server',
                    analyzerPort: isServer ? 8888 : 8889,
                    openAnalyzer: true,
                })
            );
        }

        return config;
    },
    env: {
        REACT_APP_PROJECT_NAME: process.env.REACT_APP_PROJECT_NAME,
        REACT_APP_PROJECT_DESCRIPTION: process.env.REACT_APP_PROJECT_DESCRIPTION,
        FULLPAGE_LICENSE_KEY: process.env.FULLPAGE_LICENSE_KEY,
    },
});
