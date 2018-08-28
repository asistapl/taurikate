import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link, { withPrefix } from 'gatsby-link'
import { min } from '../styles'
import { HeaderTitle, NavLink } from '../typography'
import Container from '../components/Container'

const Header = () => (
  <header
    css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '35px 20px 60px',
      [min(465)]: { paddingTop: '60px' },
      backgroundImage: 'linear-gradient(#FDE5E5, #FFF9F9 72%, #fff 100%)',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <HeaderTitle css={{ marginBottom: 20 }}>
        <Link to="/">Kasia Marcinkiewicz</Link>
      </HeaderTitle>
      <nav
        css={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NavLink to="/" exact activeClassName="active">
          Work
          <NavLink.Scratch
            width="82"
            height="49"
            style={{ left: -14, top: -6 }}
            viewBox="0 0 82 49"
          >
            <path
              d="M4.50001 16.5C18.8531 13.6018 32.3915 7.54678 46.4722 3.58332C49.3798 2.7649 57.9003 -0.0541764 55.2778 1.44443C49.8718 4.53356 43.5938 6.52553 37.9167 9.05554C30.4704 12.374 22.8999 15.6245 15.7778 19.6111C10.9149 22.3331 19.7434 19.4411 20.1945 19.2778C31.7468 15.0934 65.7298 0.789618 54.4167 5.58332C37.5796 12.7177 19.708 19.3447 3.97223 28.75C-10.2991 37.28 35.5836 18.3343 50.9445 11.9722C56.0059 9.87585 70.7403 2.87767 66.2778 6.05554C58.7582 11.4104 49.3299 14.9352 41 18.6944C37.5344 20.2584 29.2731 23.8832 25.5 25.6111C22.7316 26.8789 18.4147 28.3906 16 30.5555C12.3494 33.8285 25.5606 28.2546 30.1389 26.5C34.9607 24.6521 39.7755 22.773 44.5833 20.8889C50.4385 18.5943 38.276 23.4285 38.1111 23.5C35.8244 24.4907 31.9672 26.1977 29.6667 27.2778C27.8097 28.1496 24.2752 29.3159 22.8611 31.0278C22.4983 31.4669 23.9975 31.3645 24.5556 31.25C28.1116 30.5205 31.5854 29.1963 35 28C37.1444 27.2487 40.7866 25.9278 42.9445 25.1111C43.9946 24.7136 45.0401 24.304 46.0833 23.8889C47.1204 23.4762 50.165 23.0825 49.1667 22.5833C47.9715 21.9857 46.6594 23.5089 45.4167 24C41.2379 25.6513 37.0471 27.3195 33 29.2778C32.6946 29.4256 28.9564 31.2868 28.3333 31.9444C26.6004 33.7736 33.3896 31.6141 35.8333 31C40.2807 29.8824 43.4605 28.9479 47.8333 27.5555C49.5632 27.0048 51.2789 26.4107 53 25.8333C54.5826 25.3024 58.731 22.963 57.7778 24.3333C56.4867 26.1893 53.7566 26.4024 51.7222 27.3889C46.5192 29.912 41.2391 32.328 36.1667 35.1111C28.8298 39.1366 42.2996 35.1524 43.0556 34.9444C46.3281 34.044 50.7374 32.7472 54.0556 31.8889C55.6911 31.4658 60.4192 30.2158 59.0833 31.25C54.5379 34.769 48.6134 36.5209 43.8889 39.8889C43.6062 40.0904 40.7834 42.1597 40.5556 43.1111C40.1409 44.8428 44.1271 43.6753 45.8889 43.4166C46.5637 43.3176 55.5724 41.5039 55.1111 42.5555C54.6796 43.5393 50.4305 46.5856 52.8056 47.3611C54.4784 47.9073 56.9031 47.6188 58.4445 47.4444C66.0798 46.5809 73.4881 44.5183 81 43"
              stroke="#FFD6D6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="605"
              strokeDashoffset="605"
            />
          </NavLink.Scratch>
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
          <NavLink.Scratch
            width="67"
            height="54"
            style={{ left: -8, top: -6 }}
            viewBox="0 0 67 54"
          >
            <path
              d="M10.1537 30.9736C10.0452 31.0137 5.18646 32.7126 5.21801 32.4602C5.56061 29.7194 13.3954 25.0713 15.1787 23.6889C25.9089 15.3709 37.1893 6.26435 49.818 1.00238C50.0818 0.892482 46.0822 4.62595 45.6851 4.95691C36.0858 12.9563 25.7194 20.0356 15.6841 27.465C11.6903 30.4218 7.66994 33.3804 3.85027 36.5634C2.86828 37.3818 0.0537794 39.5999 1.32294 39.4476C3.73061 39.1587 7.05813 36.4999 8.90494 35.3146C13.6165 32.2908 18.1806 29.0339 22.7904 25.8594C32.9847 18.8394 63.4004 -2.45434 53.0887 4.39198C42.6963 11.2919 32.4171 18.3952 22.166 25.5026C17.6611 28.626 13.0999 31.7308 8.84547 35.1957C7.65246 36.1673 4.45261 38.8452 5.99107 38.8232C7.04987 38.8081 10.0611 37.352 10.57 37.0986C15.4275 34.6805 20.0912 31.7954 24.7231 28.9814C35.2506 22.5857 45.2942 15.4245 56.0025 9.32771C57.2055 8.6428 58.4181 7.9749 59.63 7.30585C60.5926 6.77441 61.5827 5.22572 62.5439 5.75971C62.7767 5.88904 62.1769 6.14649 61.9789 6.32465C61.1734 7.04962 56.9182 10.683 56.8351 10.7549C47.9315 18.4572 39.1252 26.2709 30.2237 33.9766C28.5224 35.4495 25.4857 38.0537 23.7716 39.7449C22.9313 40.574 21.1705 43.1101 22.3444 42.9858C24.979 42.7069 28.0415 40.3914 30.1345 39.061C34.3737 36.3666 38.4203 33.3806 42.4441 30.3789C47.633 26.5081 53.1649 22.7601 57.9649 18.3964C62.6607 14.1275 47.6044 25.731 42.5333 29.5464C33.6886 36.201 24.4395 42.3078 15.6247 48.992C14.3444 49.9628 10.8352 52.9883 12.3837 52.56C16.5646 51.4036 21.0025 47.7397 24.4852 45.424C34.4334 38.8092 43.8551 31.4837 53.4455 24.3728C55.2455 23.0382 57.0268 21.5735 58.9164 20.3588C60.1771 19.5484 56.603 22.265 55.4673 23.2429C48.4255 29.3067 41.5242 35.6184 34.8027 42.0344C33.8851 42.9103 32.9649 43.7853 32.0969 44.7104C31.3934 45.4601 29.8246 46.3974 30.3724 47.2674C30.5264 47.512 30.9624 47.275 31.2347 47.1782C32.7463 46.6408 34.9416 45.1791 36.0812 44.413C43.6744 39.3084 50.2891 33.0265 57.5189 27.465C62.1283 23.9194 53.935 30.8736 53.2671 31.5682C51.7996 33.0945 46.3407 37.63 46.4879 40.1314C46.5175 40.6349 56.1663 33.9552 56.954 33.4117C60.6707 30.8475 58.6908 33.5429 60.2841 35.1362C61.4259 36.278 64.3597 35.7904 65.8145 35.7904"
              stroke="#FFD6D6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="650"
              strokeDashoffset="650"
            />
          </NavLink.Scratch>
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
          <NavLink.Scratch
            width="110"
            height="51"
            style={{ left: -20, top: -10 }}
            viewBox="0 0 110 51"
          >
            <path
              d="M1 30.25C4.69151 30.6267 9.11434 28.27 12.5 27.1805C26.5488 22.6596 40.6475 18.2944 54.75 13.9444C67.3761 10.0499 80.0627 6.37656 92.7639 2.7361C93.7899 2.44202 96.8587 1.66962 95.7917 1.69443C91.9537 1.78369 87.6426 3.48636 84.0417 4.51388C68.6722 8.8995 53.6904 14.4431 38.6944 19.9444C31.3808 22.6275 24.0449 25.2714 16.8333 28.2222C16.1747 28.4917 8.77849 30.8733 8.86111 32.2778C8.87522 32.5176 9.27532 32.5549 9.51389 32.5833C10.8492 32.7423 12.9829 32.2905 14.1111 32.0694C21.4706 30.6276 28.7416 28.7039 36.0833 27.1667C53.6563 23.4871 71.3724 19.8874 89.2083 17.7083C90.0914 17.6004 90.9739 17.4821 91.8611 17.4167C92.5049 17.3691 94.073 17.1203 93.7778 17.6944C93.2698 18.6822 91.8929 18.8945 90.8611 19.3055C88.8018 20.1259 85.8454 21.0222 83.7778 21.6111C67.6107 26.2156 51.1895 29.6946 35.2917 35.2639C30.4035 36.9763 25.5785 38.9003 20.9444 41.2222C20.2564 41.567 17.2319 43.1794 16.3889 43.8611C15.5187 44.5648 16.0274 44.783 16.9444 44.75C23.2817 44.522 29.8155 42.1689 35.9167 40.6944C46.3006 38.185 56.7447 36.1146 67.2778 34.3333C80.1377 32.1586 93.507 29.3055 106.625 29.3055C109.661 29.3055 107.772 30.0989 105.972 30.6805C98.7435 33.0171 91.3197 34.7963 83.9861 36.7639C81.4062 37.4561 48.7837 46.6431 50 48.9722C50.5426 50.0112 52.3001 49.5305 53.4722 49.5278C55.9089 49.5221 59.4556 49.1805 61.7778 48.9167C67.9414 48.2164 74.1008 47.3199 80.25 46.5"
              stroke="#FFD6D6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="549"
              strokeDashoffset="549"
            />
          </NavLink.Scratch>
        </NavLink>
      </nav>
    </div>
  </header>
)

const Layout = ({ children, data }) => (
  <Fragment>
    <Helmet>
      <html lang="en" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="theme-color" content="#FFD6D6" />
      <link
        href="https://fonts.googleapis.com/css?family=Amatic+SC|Nunito:300,400,600,700,800"
        rel="stylesheet"
      />
      <link rel="manifest" href={withPrefix('/manifest.json')} />
      <link rel="icon" href={withPrefix('/favicon.png')} />
    </Helmet>
    <Header />
    <Container>{children()}</Container>
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`