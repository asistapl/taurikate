import Link from 'gatsby-link'
import styled from 'react-emotion'
import { fancyFont, min } from '../styles'

export const HeaderWrapper = styled('header')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '35px 20px 60px',
  [min(465)]: { paddingTop: '60px' },
  backgroundImage: 'linear-gradient(#FDE5E5, #FFF9F9 72%, #fff 100%)',
  backgroundRepeat: 'no-repeat',
})

export const Nav = styled('nav')({
  display: 'flex',
  justifyContent: 'space-between',
})
