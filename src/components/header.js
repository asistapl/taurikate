import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { fancyFont, min } from '../styles'

const HeaderWrapper = styled('header')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '35px 20px 60px',
  [min(465)]: { paddingTop: '60px' },
  backgroundImage: 'linear-gradient(#FDE5E5, #FFF9F9 72%, #fff 100%)',
  backgroundRepeat: 'no-repeat',
})

const Title = styled('h1')({
  fontSize: 48,
  [min(420)]: { fontSize: 64 },
  ...fancyFont,
})

const Nav = styled('nav')({
  display: 'flex',
  justifyContent: 'space-between',
})

const NavLink = styled(Link)({
  position: 'relative',
  zIndex: 0,
  fontSize: 30,
  ...fancyFont,
  '::after': {
    content: '""',
    display: 'block',
    width: 'calc(100% + 14px)',
    height: '50%',
    position: 'absolute',
    zIndex: -1,
    top: '50%',
    left: '-7px',
    backgroundColor: '#FFD6D6',
    borderRadius: 100,
    opacity: 0,
    transition: '.5s',
    pointerEvents: 'none',
    filter: 'blur(7px)',
  },
  '&:hover::after, &.active::after': {
    opacity: 1,
  },
})

const Header = () => (
  <HeaderWrapper>
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Title css={{ marginBottom: 20 }}>
        <Link to="/">Kasia Marcinkiewicz</Link>
      </Title>
      <Nav>
        <NavLink to="/" exact activeClassName="active">
          Work
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </Nav>
    </div>
  </HeaderWrapper>
)

export default Header
