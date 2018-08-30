import React, { Component, Fragment } from 'react'
import { media } from '../styles'
import { withPrefix } from 'gatsby-link'
import Img from '../components/Img'
import { injectGlobal } from 'emotion'
import { supportsHover, isRetina, isTouchDevice } from '../styles'

import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

injectGlobal({
  '.pswp__bg': {
    background: '#fff !important',
  },
  '.pswp__top-bar, .pswp__caption, .pswp__button--arrow--left:before, .pswp__button--arrow--right:before': {
    backgroundColor: '#ffd6d6 !important',
  },
})

class Gallery extends Component {
  openGallery = index => {
    const options = {
      history: false,
      captionEl: false,
      shareEl: false,
      counterEl: false,
      bgOpacity: 1,
      showHideOpacity: !isTouchDevice(),
      index: index,
      getThumbBoundsFn: index => {
        const pageYScroll =
          window.pageYOffset || document.documentElement.scrollTop
        const rect = this.props.items[index].ref.getBoundingClientRect()

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
      },
    }

    this.gallery = new PhotoSwipe(
      this.pswpElement,
      PhotoSwipeUI_Default,
      this.props.items,
      options
    )
    this.gallery.init()
  }

  render() {
    return (
      <Fragment>
        {this.props.children({ openGallery: this.openGallery })}
        <div
          ref={ref => (this.pswpElement = ref)}
          className="pswp"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <button
                  className="pswp__button pswp__button--close"
                  title="Close (Esc)"
                />
                <button
                  className="pswp__button pswp__button--fs"
                  title="Toggle fullscreen"
                />
                <button
                  className="pswp__button pswp__button--zoom"
                  title="Zoom in/out"
                />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="pswp__button pswp__button--arrow--left"
                title="Previous (arrow left)"
              />
              <button
                className="pswp__button pswp__button--arrow--right"
                title="Next (arrow right)"
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const posts = [
  {
    title: 'Lady',
    desc: 'watercolor',
    alt: '',
    msrc: withPrefix('/thumbs/thumb10.png'),
    src: withPrefix('/pictures/picture10.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Bird',
    desc: 'watercolor & ink',
    alt: '',
    msrc: withPrefix('/thumbs/thumb1.png'),
    src: withPrefix('/pictures/picture1.png'),
    w: 1807,
    h: 1807,
  },
  {
    title: 'Lady',
    desc: 'watercolor',
    alt: '',
    msrc: withPrefix('/thumbs/thumb11.png'),
    src: withPrefix('/pictures/picture11.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Rabbit',
    desc: 'watercolor',
    alt: '',
    msrc: withPrefix('/thumbs/thumb2.png'),
    src: withPrefix('/pictures/picture2.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Guinea Pig',
    desc: 'watercolor',
    alt: '',
    msrc: withPrefix('/thumbs/thumb5.png'),
    src: withPrefix('/pictures/picture5.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Conrad Corgi',
    desc: 'colored pencils & ink',
    alt: '',
    msrc: withPrefix('/thumbs/thumb9.png'),
    src: withPrefix('/pictures/picture9.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Llama',
    desc: 'watercolor & ink',
    alt: '',
    msrc: withPrefix('/thumbs/thumb6.png'),
    src: withPrefix('/pictures/picture6.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Lady',
    desc: 'watercolor',
    alt: '',
    msrc: withPrefix('/thumbs/thumb4.png'),
    src: withPrefix('/pictures/picture4.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Reading Cat',
    desc: 'watercolor',
    alt: '',
    msrc: withPrefix('/thumbs/thumb8.png'),
    src: withPrefix('/pictures/picture8.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Lady',
    desc: 'watercolor',
    alt: '',
    msrc: withPrefix('/thumbs/thumb7.png'),
    src: withPrefix('/pictures/picture7.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Lady',
    desc: 'watercolor & acrylic',
    alt: '',
    msrc: withPrefix('/thumbs/thumb3.png'),
    src: withPrefix('/pictures/picture3.png'),
    w: 2101,
    h: 2101,
  },
  {
    title: 'Fat Boy',
    desc: 'digital',
    alt: '',
    msrc: withPrefix('/thumbs/thumb12.png'),
    src: withPrefix('/pictures/picture12.png'),
    w: 2101,
    h: 2101,
  },
].map(post => {
  post.w = isRetina() ? post.w / 2 : post.w
  post.h = isRetina() ? post.h / 2 : post.h
  return post
})

const Thumbnail = React.forwardRef(
  ({ src, alt = '', title = '', desc = '', ...rest }, ref) => (
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
    <Gallery items={posts}>
      {({ openGallery }) =>
        posts.map(({ msrc, alt, title, desc }, i) => (
          <Thumbnail
            key={i}
            src={msrc}
            alt={alt}
            title={title}
            desc={desc}
            ref={ref => (posts[i].ref = ref)}
            onClick={() => openGallery(i)}
          />
        ))
      }
    </Gallery>
  </div>
)

export default IndexPage
