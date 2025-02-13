// const pathPrefix = process.env.NODE_ENV === 'production'
//   ? '/fitproject'
//   : '';
//
// module.exports = {
//   reactStrictMode: true,
//   images: {
//     loader: "akamai",
//     path: "/",
//   },
//   basePath: '/fitproject',
//   env: {
//     pathPrefix,
//   },
//   assetPrefix: '/fitproject/',
//   experimental: {
//     // Enables the styled-components SWC transform
//     styledComponents: true,
//   },
//   eslint: {
//     dirs: [
//       "pages",
//       "utils",
//       "common",
//       "components",
//       "containers",
//       "models",
//       "services",
//       "stories",
//     ], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
//   },
// }
module.exports = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  basePath: '/fitproject',
  assetPrefix: '/fitproject',
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  eslint: {
    dirs: [
      "pages",
      "utils",
      "common",
      "components",
      "containers",
      "models",
      "services",
      "stories",
    ], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
