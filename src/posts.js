import { withPrefix } from 'gatsby-link'

import { isRetina } from './styles'

const posts = [
  {
    title: 'Be kind',
    desc: 'watercolor',
    msrc: withPrefix('/thumbs/thumb1.png'),
    src: withPrefix('/pictures/picture1.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Patrick the builder',
    desc: 'watercolor',
    msrc: withPrefix('/thumbs/thumb2.png'),
    src: withPrefix('/pictures/picture2.png'),
    w: 1932,
    h: 1932,
  },
  {
    title: 'Cliché',
    desc: 'watercolor',
    msrc: withPrefix('/thumbs/thumb3.png'),
    src: withPrefix('/pictures/picture3.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: '„Where you at?”',
    desc: 'watercolor',
    msrc: withPrefix('/thumbs/thumb4.png'),
    src: withPrefix('/pictures/picture4.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Morning coffee',
    desc: 'watercolor',
    msrc: withPrefix('/thumbs/thumb5.png'),
    src: withPrefix('/pictures/picture5.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Conrad Corgi',
    desc: 'colored pencils & ink',
    msrc: withPrefix('/thumbs/thumb6.png'),
    src: withPrefix('/pictures/picture6.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Winter llama',
    desc: 'watercolor & ink',
    msrc: withPrefix('/thumbs/thumb7.png'),
    src: withPrefix('/pictures/picture7.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Judging you',
    desc: 'watercolor',
    msrc: withPrefix('/thumbs/thumb8.png'),
    src: withPrefix('/pictures/picture8.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: '„I mew it!”',
    desc: 'watercolor',
    msrc: withPrefix('/thumbs/thumb9.png'),
    src: withPrefix('/pictures/picture9.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Heat wave',
    desc: 'watercolor & acrylic',
    msrc: withPrefix('/thumbs/thumb11.png'),
    src: withPrefix('/pictures/picture11.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Bedtime',
    desc: 'watercolor',
    msrc: withPrefix('/thumbs/thumb10.png'),
    src: withPrefix('/pictures/picture10.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'High hops',
    desc: 'digital',
    msrc: withPrefix('/thumbs/thumb12.png'),
    src: withPrefix('/pictures/picture12.png'),
    w: 2101,
    h: 2101,
  },
]

posts.map(post => {
  post.w = isRetina() ? post.w / 2 : post.w
  post.h = isRetina() ? post.h / 2 : post.h
  return post
})

export default posts
