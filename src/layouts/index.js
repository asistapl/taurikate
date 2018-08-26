import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { min } from '../styles'
import { HeaderTitle, NavLink } from '../typography'
import Container from '../components/Container'

import favicon from '../favicon.png'

const Header = () => (
  <header
    css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '35px 20px 60px',
      [min(465)]: { paddingTop: '60px' },
      backgroundImage: 'linear-gradient(#FDE5E5, #FFF9F9 72%, #fff 100%)',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <HeaderTitle css={{ marginBottom: 20 }}>
        <Link to="/">Kasia Marcinkiewicz</Link>
      </HeaderTitle>
      <nav
        css={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NavLink to="/" exact activeClassName="active">
          Work
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </nav>
    </div>
  </header>
)

const Layout = ({ children, data }) => (
  <Fragment>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <link
        href="https://fonts.googleapis.com/css?family=Amatic+SC|Nunito:300,400,600,700,800"
        rel="stylesheet"
      />
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header />
    <Container>{children()}</Container>
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
        description
      }
    }
  }
`
