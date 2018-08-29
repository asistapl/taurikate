import React from 'react'
import { media } from '../styles'
import { withPrefix } from 'gatsby-link'
import Img from '../components/Img'
import { supportsHover } from '../styles'

const thumbnails = [
  {
    title: 'Lady',
    desc: 'watercolor',
    alt: '',
    src: 'thumb10.png',
  },
  {
    title: 'Bird',
    desc: 'watercolor & ink',
    alt: '',
    src: 'thumb1.png',
  },
  {
    title: 'Lady',
    desc: 'watercolor',
    alt: '',
    src: 'thumb11.png',
  },
  {
    title: 'Rabbit',
    desc: 'watercolor',
    alt: '',
    src: 'thumb2.png',
  },
  {
    title: 'Guinea Pig',
    desc: 'watercolor',
    alt: '',
    src: 'thumb5.png',
  },
  {
    title: 'Conrad Corgi',
    desc: 'colored pencils & ink',
    alt: '',
    src: 'thumb9.png',
  },
  {
    title: 'Llama',
    desc: 'watercolor & ink',
    alt: '',
    src: 'thumb6.png',
  },
  {
    title: 'Lady',
    desc: 'watercolor',
    alt: '',
    src: 'thumb4.png',
  },
  {
    title: 'Reading Cat',
    desc: 'watercolor',
    alt: '',
    src: 'thumb8.png',
  },
  {
    title: 'Lady',
    desc: 'watercolor',
    alt: '',
    src: 'thumb7.png',
  },
  {
    title: 'Lady',
    desc: 'watercolor & acrylic',
    alt: '',
    src: 'thumb3.png',
  },
  {
    title: 'Fat Boy',
    desc: 'digital',
    alt: '',
    src: 'thumb12.jpg',
  },
]

const Thumbnail = ({
  src = `http://picsum.photos/560/560?random=${Math.random()}`,
  alt = '',
  title = '',
  desc = '',
}) => (
  <figure
    css={{
      position: 'relative',
      // backgroundColor: '#FFD6D6',
    }}
  >
    <Img
      src={src}
      alt={alt || `${title} - ${desc}`}
      ratio={1}
      css={{
        transition: '.6s',
        [supportsHover]: {
          '*:hover > &': {
            filter: 'contrast(1.3) grayscale(1)',
            opacity: 0.2,
            // mixBlendMode: 'screen',
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
        // '::before': {
        //   content: '""',
        //   display: 'block',
        //   width: '100%',
        //   height: '100%',
        //   position: 'absolute',
        //   zIndex: -1,
        //   top: 0,
        //   left: 0,
        //   backgroundColor: '#FFC5C5',
        //   opacity: 0.85,
        // },
      }}
    >
      <div
        css={{
          marginBottom: 10,
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

const IndexPage = () => (
  <div
    css={{
      display: 'grid',
      gridGap: 20,
      gridTemplateColumns: `repeat(2, 1fr)`,
      [media.tablet]: {
        gridTemplateColumns: `repeat(3, 1fr)`,
      },
    }}
  >
    {thumbnails.map((thumb, i) => (
      <Thumbnail key={i} {...thumb} src={withPrefix(`/thumbs/${thumb.src}`)} />
    ))}
  </div>
)

export default IndexPage
