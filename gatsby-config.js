module.exports = {
  siteMetadata: {
    title: `Vishnu Ram - Rookie Dev | Web Developer | Freelancer`,
    description: `Hi I'm Vishnu Ram, I'm A Rookie Dev and A Passionate Web developer from India. I love to create thing and collaborate with other developers. Want to Hire or Collaborate with a web developer? Check out my works and contact me - vishnu.v1902@gmail.com.`,
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
    `gatsby-plugin-styled-components`,
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
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAD6micc26TN0Gtw_4h-CjAv8-po75C3MI",
          authDomain: "vishnuram-v.firebaseapp.com",
          projectId: "vishnuram-v",
          storageBucket: "vishnuram-v.appspot.com",
          messagingSenderId: "77016838732",
          appId: "1:77016838732:web:9bbcb520ed7df7e7eabae9",
          measurementId: "G-HJW1D6HBFF"
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
