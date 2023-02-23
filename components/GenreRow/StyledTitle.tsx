import { devices } from '@/constants/devices'
import styled from 'styled-components'

export const StyledTitle = styled.h2`
  margin: 32px 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 46.88px;
  ${({ theme }) => theme.fonts.secondary};

  @media ${devices.tablet} {
    font-size: 60px;
    line-height: 70.31px;
    // margin: 32px 0 32px 32px;
  }

  @media ${devices.desktop} {
    font-size: 78px;
    line-height: 91.41px;
    // margin: 32px 0 32px 120px;
  }

  // @media ${devices.ultraDesktop} {
  //   margin: 32px 0 32px 130px;
  // }
`
