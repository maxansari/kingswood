const sitemap = {
  siteUrl: 'http://localhost:3000', // Replace with your site's URL
  generateRobotsTxt: true,          // Generate a robots.txt file
  changefreq: 'daily',              // Update frequency of the pages
  priority: 0.7,                    // Default priority of the pages
  exclude: [],                      // Pages to exclude (if any)
  sitemapSize: 5000,                // Limit of URLs per sitemap file
  additionalPaths: async (config) => {
    return [
      { loc: '/about', changefreq: 'weekly', priority: 0.8 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.7 },
      { loc: '/gallery', changefreq: 'daily', priority: 0.9 },
    ];
  },
};

export default sitemap;
