import React from 'react'
import styled from 'react-emotion'

import { media, min } from '../styles'

const ContactIcon = styled.svg(({ width }) => ({
  display: 'block',
  width: 35,
  height: 35,
  marginBottom: 13,
  fill: 'none',
  strokeWidth: 0.8,
  stroke: '#FFD6D6',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  transition: 'stroke 1s ease-out',
  [media.laptop]: {
    width: 60,
    height: 60,
    marginBottom: 20,
    strokeWidth: 0.5,
  },
  [media.laptopLg]: {
    width: 75,
    height: 75,
    marginBottom: 25,
  },
  '.HoverContactItem:hover &': {
    stroke: 'transparent',
  },
  '.draw': {
    strokeWidth: 0.3,
    stroke: 'rgba(0, 0, 0, 1)',
    strokeDasharray: width,
    strokeDashoffset: width,
    transition: `stroke-dashoffset ${width * 0.015}s ease-in-out`,
    '.HoverContactItem:hover &': {
      strokeDashoffset: 0,
    },
  },
}))

export const ContactLink = styled('a')({
  fontWeight: 800,
  fontSize: 18,
  lineHeight: 1.6,
  transition: '.3s',
  opacity: 0.6,
  ':hover': { opacity: 1 },
})

const ContactParagraph = styled('p')({
  maxWidth: '20em',
  marginTop: 10,
  fontWeight: 300,
  fontSize: 18,
  lineHeight: 1.6,
  color: '#888',
  [media.laptop]: {
    marginTop: 20,
    fontSize: 16,
  },
  [media.laptopLg]: {
    marginTop: 25,
    fontSize: 18,
  },
})

const ContactPage = () => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '> *': {
        marginBottom: 30,
      },
      [media.laptop]: {
        flexDirection: 'row',
        alignItems: 'stretch',
        margin: '0 -30px',
        '> *': {
          marginBottom: 0,
          padding: '0 30px',
          flexBasis: '33.333%',
        },
      },
    }}
  >
    <div className="HoverContactItem">
      <ContactIcon viewBox="0 0 24 24" width={79}>
        <path d="M2,3.5h20c0.8,0,1.5,0.7,1.5,1.5v14c0,0.8-0.7,1.5-1.5,1.5H2c-0.8,0-1.5-0.7-1.5-1.5V5C0.5,4.2,1.2,3.5,2,3.5z M21.5,3.5l-9.5,7l-9.5-7 M3.5,20.5V8.2l8.5,6.3L23.5,6M20.5,8.2v12.3" />
        <path
          className="draw"
          d="M2,3.5h20c0.8,0,1.5,0.7,1.5,1.5v14c0,0.8-0.7,1.5-1.5,1.5H2c-0.8,0-1.5-0.7-1.5-1.5V5C0.5,4.2,1.2,3.5,2,3.5z M21.5,3.5l-9.5,7l-9.5-7 M3.5,20.5V8.2l8.5,6.3L23.5,6M20.5,8.2v12.3"
        />
      </ContactIcon>
      <ContactLink href="mailto:k.e.marcinkiewicz@gmail.com">
        k.e.marcinkiewicz@gmail.com
      </ContactLink>
      <ContactParagraph>
        You need a&nbsp;children's book illustration? Maybe a&nbsp;portrait of
        your significant other? Tell me about your idea. Together we can make
        some amazing art!
      </ContactParagraph>
    </div>
    <div className="HoverContactItem">
      <ContactIcon viewBox="0 0 24 24" width={76}>
        <path d="M7,1.5h10c3,0,5.5,2.5,5.5,5.5v10c0,3-2.5,5.5-5.5,5.5H7c-3,0-5.5-2.5-5.5-5.5V7C1.5,4,4,1.5,7,1.5z M12,6.5c3,0,5.5,2.5,5.5,5.5S15,17.5,12,17.5S6.5,15,6.5,12S9,6.5,12,6.5z M18,4.5c0.3,0,0.5,0.2,0.5,0.5S18.3,5.5,18,5.5S17.5,5.3,17.5,5S17.7,4.5,18,4.5z" />
        <path
          className="draw"
          d="M7,1.5h10c3,0,5.5,2.5,5.5,5.5v10c0,3-2.5,5.5-5.5,5.5H7c-3,0-5.5-2.5-5.5-5.5V7C1.5,4,4,1.5,7,1.5z M12,6.5c3,0,5.5,2.5,5.5,5.5S15,17.5,12,17.5S6.5,15,6.5,12S9,6.5,12,6.5z M18,4.5c0.3,0,0.5,0.2,0.5,0.5S18.3,5.5,18,5.5S17.5,5.3,17.5,5S17.7,4.5,18,4.5z"
        />
      </ContactIcon>
      <ContactLink href="http://instagram.com/taurikate">
        instagram.com/taurikate
      </ContactLink>
      <ContactParagraph>
        It's where I&nbsp;post most of my artworks from time to time. Follow me
        to never miss one!
      </ContactParagraph>
    </div>
    <div className="HoverContactItem">
      <ContactIcon viewBox="0 0 24 24" width={73}>
        <path d="M12,0.5L12,0.5c0.7,0,1.3,0.2,1.8,0.5l8.8,5.8c0.6,0.4,0.9,1,0.9,1.7v6.9c0,0.7-0.3,1.3-0.9,1.7l-8.8,5.9c-0.5,0.4-1.2,0.6-1.8,0.6l0,0c-0.7,0-1.3-0.2-1.8-0.5l-8.8-5.9c-0.6-0.4-0.9-1-0.9-1.7V8.6c0-0.7,0.3-1.3,0.9-1.7l8.8-5.8C10.7,0.7,11.3,0.5,12,0.5z M10.5,3.5v5l-3,2L3.5,8L10.5,3.5z M13.5,3.5v5l3,2l4-2.5L13.5,3.5z M13.5,20.5v-5l3-2l4,2.5L13.5,20.5z M10.5,20.5v-5l-3-2l-4,2.5L10.5,20.5z M2.5,10.5L5,12l-2.5,1.5V10.5zM21.5,13.5L19,12l2.5-1.5V13.5z M12,10l-3,2l3,2l3-2L12,10z" />
        <path
          className="draw"
          d="M12,0.5L12,0.5c0.7,0,1.3,0.2,1.8,0.5l8.8,5.8c0.6,0.4,0.9,1,0.9,1.7v6.9c0,0.7-0.3,1.3-0.9,1.7l-8.8,5.9c-0.5,0.4-1.2,0.6-1.8,0.6l0,0c-0.7,0-1.3-0.2-1.8-0.5l-8.8-5.9c-0.6-0.4-0.9-1-0.9-1.7V8.6c0-0.7,0.3-1.3,0.9-1.7l8.8-5.8C10.7,0.7,11.3,0.5,12,0.5z M10.5,3.5v5l-3,2L3.5,8L10.5,3.5z M13.5,3.5v5l3,2l4-2.5L13.5,3.5z M13.5,20.5v-5l3-2l4,2.5L13.5,20.5z M10.5,20.5v-5l-3-2l-4,2.5L10.5,20.5z M2.5,10.5L5,12l-2.5,1.5V10.5zM21.5,13.5L19,12l2.5-1.5V13.5z M12,10l-3,2l3,2l3-2L12,10z"
        />
      </ContactIcon>
      <ContactLink href="http://codepen.io/KazikM">
        codepen.io/KazikM
      </ContactLink>
      <ContactParagraph>
        You may be interested in some interactive animations for your website.
        Here's my code “sketchbook”.
      </ContactParagraph>
    </div>
  </div>
)

export default ContactPage
