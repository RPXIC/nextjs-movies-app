import styled from 'styled-components'
import { devices } from '@/constants/devices'

export const StlyedFiltersContainer = styled.div`
  margin: 40px 16px 0;
  display: flex;
  gap: 16px;
  overflow: auto;

  @media ${devices.tablet} {
    margin: 40px 16px 0 32px;
  }

  @media ${devices.desktop} {
    margin: 40px 16px 0 120px;
  }

  @media ${devices.ultraDesktop} {
    margin: 40px 16px 0 130px;
  }
`
