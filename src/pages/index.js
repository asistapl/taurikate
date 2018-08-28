import React from 'react'
import { media } from '../styles'
import { withPrefix } from 'gatsby-link'
import Img from '../components/Img'

const thumbnails = [
  {
    title: 'Lama',
    desc: 'watercolor & ink',
    alt: '',
    src: 'thumb01.jpg',
  },
  {
    title: 'Lama',
    desc: 'watercolor & ink',
    alt: '',
    src: 'thumb02.jpg',
  },
  {
    title: 'Lama',
    desc: 'watercolor & ink',
    alt: '',
    src: 'thumb03.jpg',
  },
  {
    title: 'Lama',
    desc: 'watercolor & ink',
    alt: '',
    src: 'thumb04.jpg',
  },
  {
    title: 'Lama',
    desc: 'watercolor & ink',
    alt: '',
    src: 'thumb05.jpg',
  },
  {
    title: 'Lama',
    desc: 'watercolor & ink',
    alt: '',
    src: 'thumb06.jpg',
  },
  {
    title: 'Lama',
    desc: 'watercolor & ink',
    alt: '',
    src: 'thumb07.jpg',
  },
  {
    title: 'Lama',
    desc: 'watercolor & ink',
    alt: '',
    src: 'thumb08.jpg',
  },
  {
    title: 'Lama',
    desc: 'watercolor & ink',
    alt: '',
    src: 'thumb09.jpg',
  },
  {
    title: 'Lama',
    desc: 'watercolor & ink',
    alt: '',
    src: 'thumb10.jpg',
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
      backgroundColor: '#FFD6D6',
    }}
  >
    <Img
      src={src}
      alt={alt || `${title} - ${desc}`}
      ratio={1}
      css={{
        transition: 'filter .6s',
        '*:hover > &': {
          filter: 'contrast(1.6) grayscale(1)',
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
        '*:hover > &': {
          visibility: 'visible',
          opacity: 1,
        },
        '::before': {
          content: '""',
          display: 'block',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          backgroundColor: '#FFC5C5',
          opacity: 0.85,
        },
      }}
    >
      <div
        css={{
          fontWeight: 800,
          fontSize: 36,
          opacity: 0.7,
        }}
      >
        {title}
      </div>
      <div
        css={{
          fontWeight: 500,
          fontSize: 18,
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
      <Thumbnail
        key={i}
        {...thumb}
        src={withPrefix(`/thumbnails/${thumb.src}`)}
      />
    ))}
  </div>
)

export default IndexPage
