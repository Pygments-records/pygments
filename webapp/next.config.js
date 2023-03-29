// @ts-check
const { i18n } = require("./next-i18next.config");
const packageJson = require("./package.json");
const pluginsPresets = [require("./.config/next/css-modules-typings")];

const GIT_COMMIT_SHA_SHORT =
  typeof process.env.GIT_COMMIT_SHA === "string" && process.env.GIT_COMMIT_SHA.substring(0, 8);

console.debug(
  `Building Next with NODE_ENV="${process.env.NODE_ENV}" NEXT_PUBLIC_APP_STAGE="${process.env.NEXT_PUBLIC_APP_STAGE}" using GIT_COMMIT_SHA=${process.env.GIT_COMMIT_SHA} and GIT_COMMIT_REF=${process.env.GIT_COMMIT_REF}`
);

const GIT_COMMIT_TAGS = process.env.GIT_COMMIT_TAGS?.trim() ?? "";
console.debug(
  `Deployment will be tagged automatically, using GIT_COMMIT_TAGS: "${GIT_COMMIT_TAGS}"`
);
const APP_RELEASE_TAG = GIT_COMMIT_TAGS
  ? GIT_COMMIT_TAGS.split(" ").find((tag) => tag.startsWith("v"))
  : `unknown-${GIT_COMMIT_SHA_SHORT || "unknown"}`;
console.debug(`Release version resolved from tags: "${APP_RELEASE_TAG}"`);

/**
 * @see https://nextjs.org/docs/advanced-features/security-headers
 * @see https://blog.vnaik.com/posts/web-attacks.html
 */
const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Content-Security-Policy",
    /** upgrade-insecure-requests: if the website is running on https, force every http
     * request to use https instead (do not used mixed content).
     */
    /** base-uri 'self': every relative link in the webpage is using the same scheme and
     * port as the document it is served from
     */
    value: "upgrade-insecure-requests; base-uri 'self'",
  },
];

/**
 * @type {import('next/dist/server/config').NextConfig}
 **/
module.exports = {
  experimental: {
    outputStandalone: true,
  },
  /**
   * @see https://nextjs.org/docs/advanced-features/i18n-routing
   */
  i18n,
  /**
   * @see https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
   */
  reactStrictMode: true,
  /**
   * @see https://nextjs.org/docs/basic-features/image-optimization#configuration
   */
  images: {
    domains: ["storage.googleapis.com", "thumbs.dreamstime.com"],
  },

  /**
   * @see https://vercel.com/docs/v2/build-step/#providing-environment-variables
   */
  env: {
    NEXT_PUBLIC_APP_NAME: packageJson.name,
    NEXT_PUBLIC_APP_VERSION: APP_RELEASE_TAG,
    GIT_COMMIT_SHA_SHORT,
    GIT_COMMIT_SHA: process.env.GIT_COMMIT_SHA,
  },

  /**
   * @see https://nextjs.org/docs/api-reference/next.config.js/rewrites
   */
  async rewrites() {
    const rewrites = [];

    console.info("Using rewrites:", JSON.stringify(rewrites, null, 2));
    return rewrites;
  },

  /**
   * @see https://nextjs.org/docs/api-reference/next.config.js/redirects
   */
  async redirects() {
    const redirects = [];

    console.info("Using redirects:", JSON.stringify(redirects, null, 2));
    return redirects;
  },
  /**
   * @see https://nextjs.org/docs/api-reference/next.config.js/headers
   */
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  /**
   * @see https://nextjs.org/docs/api-reference/next.config.js/disabling-x-powered-by
   */
  poweredByHeader: false,
  webpack: (config, options) => {
    return pipeWebpackConfig(pluginsPresets, config, options);
  },

  /**
   * @see https://nextjs.org/docs/upgrading#swc-replacing-terser-for-minification
   */
  swcMinify: true,
};

function pipeWebpackConfig(functions, config, options) {
  return functions.reduce((prevConfig, fn) => {
    return fn(prevConfig, options);
  }, config);
}
