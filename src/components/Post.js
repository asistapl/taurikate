import React from 'react'

import Img from './Img'

import { supportsHover } from '../styles'

const Post = React.forwardRef(
  ({ src, title = '', desc = '', ...rest }, ref) => (
    <figure
      css={{
        position: 'relative',
        cursor: 'zoom-in',
      }}
      {...rest}
      ref={ref}
    >
      <Img
        src={src}
        alt={`${title} - ${desc}`}
        ratio={1}
        css={{
          transition: '.6s',
          [supportsHover]: {
            '*:hover > &': {
              filter: 'contrast(1.3) grayscale(1)',
              opacity: 0.2,
            },
          },
        }}
      />
      <figcaption
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 0,
          top: 0,
          left: 0,
          visibility: 'hidden',
          opacity: 0,
          transitionProperty: 'visibility, opacity',
          transitionDuration: '.6s',
          [supportsHover]: {
            '*:hover > &': {
              visibility: 'visible',
              opacity: 1,
            },
          },
        }}
      >
        <div
          css={{
            marginBottom: 7,
            fontWeight: 800,
            fontSize: 36,
            lineHeight: 1.1,
            textAlign: 'center',
            opacity: 0.7,
          }}
        >
          {title}
        </div>
        <div
          css={{
            fontWeight: 500,
            fontSize: 18,
            textAlign: 'center',
            opacity: 0.7,
          }}
        >
          {desc}
        </div>
      </figcaption>
    </figure>
  )
)

export default Post
