import styled from 'styled-components'
import { devices } from '@/constants/devices'

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: 54px;
  font-weight: 700;
  margin: 0 0 8px 0;
  line-height: 54px;
  ${({ theme }) => theme.fonts.secondary};

  @media ${devices.tablet} {
    font-size: 76px;
    line-height: 75px;
  }

  @media ${devices.desktop} {
    font-size: 128px;
    line-height: 130px;
  }
`
