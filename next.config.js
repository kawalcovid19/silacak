/** @type {import("next/dist/next-server/server/config-shared").NextConfig} */
module.exports = {
  // https://github.com/vercel/next.js/blob/v11.0.1/packages/next/next-server/server/config-shared.ts#L42-L65
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
    workerThreads: true,
  },

  // https://nextjs.org/docs/advanced-features/customizing-postcss-config
  future: {
    strictPostcssConfiguration: true,
  },

  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,
};
