import styled from 'styled-components'
import Image from 'next/image'
import { devices } from '@/constants/devices'

export const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;

  @media ${devices.desktop} {
    height: 800px;
  }
`
