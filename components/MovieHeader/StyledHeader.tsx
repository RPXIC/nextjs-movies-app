import styled from 'styled-components'
import { devices } from '@/constants/devices'

export const StyledHeader = styled.header`
  position: relative;
  height: 600px;

  @media ${devices.desktop} {
    height: 800px;
  }
`
