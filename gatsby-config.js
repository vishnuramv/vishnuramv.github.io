module.exports = {
  siteMetadata: {
    title: `Vishnu Ram - Rookie Dev | Web Developer | Freelancer`,
    description: `Hi I'm Vishnu Ram, A Web developer from India. I learnt Game development as my hobby. I love to create thing and collaborate with other developers. Want to Hire or Collaborate with a web developer? Check out my works and contact me - vishnu.v1902@gmail.com.`,
    author: `@vishnuramv`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        icon: `src/assets/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
