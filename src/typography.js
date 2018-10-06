import styled from 'react-emotion'
import Link from 'gatsby-link'
import { media, fancyFont, min, supportsHover } from './styles'

export const NavLink = styled(Link)({
  position: 'relative',
  zIndex: 0,
  fontSize: 30,
  ...fancyFont,
  transitionProperty: 'transform',
  transitionDuration: '.2s',
  [supportsHover]: {
    ':hover:not(.active)': {
      transform: 'translateY(-1px)',
    },
  },
})

NavLink.Scratch = styled('svg')({
  fill: 'none',
  position: 'absolute',
  zIndex: -1,
  top: 0,
  left: 0,
  path: {
    transition: 'stroke-dashoffset .9s ease-in-out',
  },
  '*.active > & > path': {
    strokeDashoffset: 0,
  },
})

export const HeaderTitle = styled('h1')({
  fontSize: 48,
  [min(420)]: { fontSize: 64 },
  ...fancyFont,
})

export const PageTitle = styled('h1')({
  fontWeight: 800,
  fontSize: 28,
  textAlign: 'center',
  opacity: 0.6,
})

export const PostTitle = styled('div')({
  fontWeight: 800,
  fontSize: 18,
  lineHeight: 1.1,
  textAlign: 'center',
  opacity: 0.7,
  [media.tabletMd]: {
    fontSize: 36,
  },
})

export const PostDesc = styled('p')({
  fontWeight: 500,
  fontSize: 18,
  textAlign: 'center',
  opacity: 0.7,
})

export const Paragraph = styled('p')({
  fontWeight: 300,
  fontSize: 18,
  lineHeight: 1.6,
  color: '#888',
})

export const ContactLink = styled('a')({
  fontWeight: 800,
  fontSize: 18,
  lineHeight: 1.6,
  transition: '.3s',
  opacity: 0.6,
  ':hover': { opacity: 1 },
})
