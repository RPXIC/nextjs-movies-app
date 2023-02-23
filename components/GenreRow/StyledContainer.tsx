import { devices } from '@/constants/devices'
import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin: 0 0 0 16px;

  @media ${devices.tablet} {
    font-size: 60px;
    line-height: 70.31px;
    margin: 0 0 0 32px;
  }

  @media ${devices.desktop} {
    font-size: 78px;
    line-height: 91.41px;
    margin: 0 0 0 120px;
  }

  @media ${devices.ultraDesktop} {
    margin: 0 0 0 130px;
  }
`
