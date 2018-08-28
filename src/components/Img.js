import React from 'react'
import styled from 'react-emotion'

const Img = styled(
  ({ src, alt, css, ratio, width, height, color, ...props }) => (
    <div {...props}>
      <img src={src} alt={alt} />
    </div>
  )
)(({ ratio = 2 / 3, width, height, color }) => ({
  width,
  height,
  position: 'relative',
  backgroundColor: color,

  '&::after': {
    content: '""',
    display: 'block',
    paddingTop: `${ratio * 100}%`,
  },

  '> img': {
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    objectFit: 'cover',
  },
}))

export default Img
