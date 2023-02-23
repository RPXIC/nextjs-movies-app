import styled from 'styled-components'
import { devices } from '@/constants/devices'

export const StyledLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: flex-end;
    position: absolute;
    top: 711px;
    right: 120px;
    width: 100%;
  }
`
