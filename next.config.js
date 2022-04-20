const isProd = process.env.NODE_ENV === "production";
const path = require('path')

module.exports = {
  target: 'serverless',
  exportPathMap: () => ({
    "/": {
      page: "/",
    },
  }),
  images: {
    loader: 'imgix',
    domains: ['www.xda-developers.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    scrollRestoration: true,
 },
 eslint: {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: true,
},
}
