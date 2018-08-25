import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../styles'

import Header from '../components/header'

const Layout = ({ children, data }) => (
  <Fragment>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Amatic+SC|Nunito:300,400,600,700,800"
        rel="stylesheet"
      />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
