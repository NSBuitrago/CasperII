module.exports = {
  siteMetadata: {
    title: `Nicolas Buitrago`,
    description: `Ph.D. Student in Systems, Synthetic, and Physical Biology| Founder and Content Creator of Brain Power`,
    author: `@nsbuitrago`,
  },
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: process.env.API_URL,
        contentApiKey: process.env.CONTENT_API_KEY,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
