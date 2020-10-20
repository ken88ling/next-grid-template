const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts')

const plugins = [[withCSS({cssModules: false})], [withSass],[withFonts]];

/* CONFIGURATION */
const NextAppConfig = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    // staticFolder: '/static',
    APP_NAME: 'Gls Networking',
    API_DEVELOPMENT: 'http://localhost:5000',
    API_PRODUCTION: 'http://production.com',
    PRODUCTION: false,
  },
  cssLoaderOptions: {
    url: false,
  },
  webpack: (config) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    config.resolve.alias['styles'] = path.join(__dirname, 'styles');
    return config;
  },
};

/* EXPORT DECLARATION */
module.exports = withPlugins(plugins, NextAppConfig);
