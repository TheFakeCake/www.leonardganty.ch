const withTM = require('next-transpile-modules')(['ol']);

module.exports = withTM({
  images: {
    deviceSizes: [640, 767, 828, 1080, 1200, 1920, 2048, 3840],
  },
  reactStrictMode: true,
});
