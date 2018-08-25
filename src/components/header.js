import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const HeaderWrapper = styled('header')({
  padding: 60,
  backgroundImage: 'linearGradient(to bottom, pink, white)',
})

const Header = () => (
  <HeaderWrapper>
    <h1 style={{ margin: 0 }}>
      <Link to="/">Kasia Marcinkiewicz</Link>
    </h1>
  </HeaderWrapper>
)

export default Header
