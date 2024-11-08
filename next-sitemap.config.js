const BLOG = require('./blog.config')

/**
 * 通常没啥用，sitemap交给 /pages/sitemap.xml.js 动态生成
 */
module.exports = {
  siteUrl: BLOG.LINK,
  changefreq: 'daily',
  priority: 0.7,
  generateRobotsTxt: false,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/page/', '/tag/'] }]
  }
  // ...other options
  // https://github.com/iamvishnusankar/next-sitemap#configuration-options
}
