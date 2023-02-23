import styled from 'styled-components'
import { Swiper } from 'swiper/react'
import { devices } from '@/constants/devices'

export const StyledSwiper = styled(Swiper)`
  height: 600px;

  @media ${devices.desktop} {
    height: 800px;
  }
`
