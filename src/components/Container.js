import styled from 'react-emotion'
import { min } from '../styles'

const Container = styled('div')({
  maxWidth: 1000,
  [min(1400)]: { maxWidth: 1200 },
  margin: 'auto',
  paddingLeft: 20,
  paddingRight: 20,
})

export default Container
