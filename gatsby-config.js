/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        stylesConfig: {
          disableAutoprefixing: true,
          disableMinification: true,
        },
      }
    },
  ],
}
