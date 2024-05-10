// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // deviceSizes: [
    //   375, 430, 640, 750, 992, 1080, 1200, 1480, 1600, 1920, 2048, 2600,
    // ],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 360],
    formats: ['image/webp'],
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [{protocol: 'https', hostname: '**'}],
  },
  // compiler: {
  //   removeConsole: true,
  // },
  reactStrictMode: false,
  staticPageGenerationTimeout: 5000,
  // experimental: {
  //   // nextScriptWorkers: true,
  //   optimizePackageImports: [
  //     'sharp',
  //     'swiper',
  //     'zod',
  //     'sonner',
  //     'next-auth',
  //     'cmdk',
  //   ],
  // },
  devIndicators: {
    buildActivityPosition: 'bottom-left',
  },
  // onDemandEntries: {
  //   maxInactiveAge: 600 * 1000,
  //   pagesBufferLength: 10,
  // },
}

// module.exports = withBundleAnalyzer(nextConfig)
module.exports = nextConfig
