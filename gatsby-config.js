module.exports = {
  pathPrefix: '/taurikate',
  siteMetadata: {
    title: 'TauriKate',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //     // Puts tracking script in the head instead of the body
    //     // head: false,
    //     // Setting this parameter is optional
    //     // anonymize: true,
    //     // Setting this parameter is also optional
    //     // respectDNT: true,
    //     // Avoids sending pageview hits from custom paths
    //     // exclude: ["/preview/**", "/do-not-track/me/too/"],
    //   },
    // },
  ],
}
