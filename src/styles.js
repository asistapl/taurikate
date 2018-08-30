import { injectGlobal } from 'react-emotion'

injectGlobal({
  body: {
    margin: 0,
    fontFamily: "'Nunito', sans-serif",
    paddingBottom: 100,
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  'h1, h2, h3, h4, h5, h6, p, figure': {
    margin: 0,
  },
  img: {
    maxWidth: '100%',
  },
})

export const fancyFont = {
  fontWeight: 'normal',
  fontFamily: "'Amatic SC', sans-serif",
}

export const em = (val, base = 16) =>
  typeof val === 'number' && val !== 0 ? `${val / base}em` : val

export const rem = (val, base = 16) =>
  typeof val === 'number' && val !== 0 ? `${val / base}rem` : val

export const breakpoints = {
  mobile: 1,
  tablet: 600,
  laptop: 1024,
  desktop: 1600,

  mobileSm: 1,
  mobileMd: 375,
  mobileLg: 425,

  tabletSm: 600,
  tabletMd: 768,
  tabletLg: 900,

  laptopSm: 1024,
  laptopMd: 1366,
  laptopLg: 1440,

  desktopSm: 1600,
  desktopMd: 1700,
  desktopLg: 1920,
}

export const media = Object.entries(breakpoints).reduce((acc, [key, val]) => {
  acc[key] = `@media (min-width: ${em(val)})`
  return acc
}, {})

export const min = width => `@media (min-width: ${em(width)})`

export const max = width => `@media (max-width: ${em(width)})`

export const supportsHover = `@media (hover: hover)`

export const isRetina = () =>
  matchMedia('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)')
    .matches

export const isTouchDevice = () => matchMedia('(hover: none)').matches
