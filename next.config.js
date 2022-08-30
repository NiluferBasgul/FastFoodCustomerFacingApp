const withSvgr = require("next-svgr");
const nextTranslate = require('next-translate')

module.exports = nextTranslate(withSvgr({
  webpack(config) {
    return config;
  },
  env: {
    API_KEY: 'some-dummy-key'
  },
  poweredByHeader: false,
  experimental: {
    scrollRestoration: false
  },
  i18n: {
    locales: ['en', 'tr', 'mk', 'al'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}));
