/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://macexo.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  // The three /recruiting/<subteam> routes now redirect to /design/<subteam>;
  // keep redirect sources out of the sitemap.
  exclude: ['/recruiting/electrical', '/recruiting/mechanical', '/recruiting/software'],
};
