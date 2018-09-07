import React, { Component, Fragment } from 'react'
import { injectGlobal } from 'emotion'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { isTouchDevice } from '../styles'

injectGlobal({
  '.pswp__bg': {
    background: '#fff !important',
  },
  '.pswp__top-bar, .pswp__caption, .pswp__button--arrow--left:before, .pswp__button--arrow--right:before': {
    backgroundColor: '#ffd6d6 !important',
  },
})

class Gallery extends Component {
  __refs = []

  saveRef = ref => this.__refs.push(ref)

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
        const rect = this.__refs[index].getBoundingClientRect()

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
        {this.props.children({
          saveRef: this.saveRef,
          openGallery: this.openGallery,
        })}
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

export default Gallery
