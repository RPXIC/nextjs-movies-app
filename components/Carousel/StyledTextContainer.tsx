import styled from 'styled-components'
import { devices } from '@/constants/devices'

export const StyledTextContainer = styled.div`
  width: 100%;
  text-align: start;
  margin: 0 0 8px 0;
  position: absolute;
  top: 144px;
  margin: 0 16px;
  max-width: 343px;

  @media ${devices.tablet} {
    max-width: 563px;
    margin: 0 0 0 32px;
  }

  @media ${devices.desktop} {
    margin: 0 0 0 120px;
  }

  @media ${devices.ultraDesktop} {
    margin: 0 0 0 130px;
  }
`
