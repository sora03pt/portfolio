const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  // i18nはoutput: exportと併用不可のため削除
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/portfolio/' : '',
  basePath: isProd ? '/portfolio' : '',
  trailingSlash: true,
  output: 'export',
};
