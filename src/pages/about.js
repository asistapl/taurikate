import React from 'react'
import { PageTitle, Paragraph } from '../typography'
import { media } from '../styles'
import Img from '../components/Img'
import portrait from '../portrait.jpg'

const AboutPage = () => (
  <div
    css={{
      [media.tabletMd]: {
        display: 'flex',
        alignItems: 'flex-start',
      },
    }}
  >
    <Img
      src={portrait}
      alt="Kasia Marcinkiewicz"
      ratio={2599 / 2072}
      color="#fde9ea"
      css={{
        width: '100%',
        '&, img': { borderRadius: 8 },
        [media.tabletMd]: { width: '40%' },
      }}
    />
    <div
      css={{
        marginTop: 40,
        [media.tabletMd]: { width: '60%', paddingLeft: 50, marginTop: 0 },
      }}
    >
      <PageTitle
        css={{
          marginBottom: 15,
          [media.tabletMd]: { marginBottom: 20 },
          textAlign: 'left',
        }}
      >
        Hi! My name is Kasia
      </PageTitle>
      <Paragraph>
        I'm a 24-year-old illustrator from Poland. I admire everything that's
        cute and I try to express it in my art. I love to share joy so I'd be
        happy to illustrate (especially children's) books or anything related.
      </Paragraph>
      <Paragraph>
        I'm also a coder, vector animator and casual Hearthstone player.
      </Paragraph>
      <div
        css={{
          marginTop: 20,
          p: { color: '#ccc', transition: 'color .3s' },
          ':hover p': { color: '#888' },
        }}
      >
        <Paragraph>
          Cześć! Mam na imię Kasia i jestem 24-letnią ilustratorką z Polski.
          Uwielbiam wszystko co urocze, co staram się wyrazić w swojej
          twórczości. Kocham szerzyć radość, więc z przyjemnością zilustruję
          książki (zwłaszcza dziecięce).
        </Paragraph>
        <Paragraph>
          Oprócz tego koduję, animuję wektory i grywam w Hearthstone'a.
        </Paragraph>
      </div>
    </div>
  </div>
)

export default AboutPage
