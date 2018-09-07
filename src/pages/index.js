import React from 'react'

import Gallery from '../components/Gallery'
import Post from '../components/Post'

import { supportsGrid, media } from '../styles'
import posts from '../posts'

const IndexPage = () => (
  <div
    css={{
      display: 'flex',
      flexWrap: 'wrap',
      '> *': { width: '33.333%' },
      [supportsGrid]: {
        '> *': { width: '100%' },
        display: 'grid',
        gridGap: 20,
        gridTemplateColumns: `repeat(var(--cols, 2), 1fr)`,
        [media.tablet]: { '--cols': 3 },
      },
    }}
  >
    <Gallery items={posts}>
      {({ saveRef, openGallery }) =>
        posts.map(({ msrc, title, desc }, i) => (
          <Post
            key={i}
            src={msrc}
            title={title}
            desc={desc}
            ref={saveRef}
            onClick={() => openGallery(i)}
          />
        ))
      }
    </Gallery>
  </div>
)

export default IndexPage
