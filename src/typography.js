import styled from 'react-emotion'
import Link from 'gatsby-link'
import { fancyFont, min, media } from './styles'

export const NavLink = styled(Link)({
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
    // filter: 'blur(7px)', // there is safari rendering bug so don't use it
  },
  '&:hover::after, &.active::after': {
    opacity: 1,
  },
})

export const HeaderTitle = styled('h1')({
  fontSize: 48,
  [min(420)]: { fontSize: 64 },
  ...fancyFont,
})

export const PageTitle = styled('h1')({
  fontWeight: 700,
  fontSize: 30,
  textAlign: 'center',
  color: '#666',
})

export const Paragraph = styled('p')({
  fontWeight: 300,
  fontSize: 18,
  lineHeight: 1.6,
  color: '#888',
})
