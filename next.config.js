/** @type {import("next/dist/lib/config-shared").Header['headers']} */
const securityHeaders = [
  {
    key: "Referrer-Policy",
    value: "same-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

/** @type {import("next/dist/next-server/server/config-shared").NextConfig} */
module.exports = {
  publicRuntimeConfig: {
    apiEndpoint: process.env.API_URL || "https://training-silacak.kemkes.go.id/",
  },
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

  // This config won't be loaded until Netlify supports the `headers` option on `next.config.js`.
  // For now, when you make changes here, also make the necessary changes on `netlify.toml`.
  // https://github.com/netlify/netlify-plugin-nextjs/issues/150
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/tracing",
        permanent: false,
      },
    ];
  },

  // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack(config, { dev, isServer }) {
    // https://github.com/leerob/leerob.io/blob/9adc510cbfb3da88c3b0ad15632eb876ca91b607/next.config.js#L27-L33
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};
