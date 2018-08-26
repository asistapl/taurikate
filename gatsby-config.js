module.exports = {
  pathPrefix: '/taurikate',
  siteMetadata: {
    title: 'Kasia Marcinkiewicz – Portfolio',
    description:
      'Kasia Marcinkiewicz is a Polish freelance artist who specializes in cute illustrations.',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //   },
    // },
  ],
}
