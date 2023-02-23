import styled from 'styled-components'
import { devices } from '@/constants/devices'

export const StyledEllipsisDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  line-height: 18.75px;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;

  @media ${devices.tablet} {
    font-size: 24px;
    line-height: 28.13px;
  }
`
