import { devices } from '@/constants/devices'
import styled from 'styled-components'

export const StyledLoginForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 343px;
  height: 394px;
  background-color: ${({ theme }) => theme.colors.black}};
  border-radius: 16px;
  padding: 8px;

  @media ${devices.tablet} {
    position: absolute;
    right: 32px;
  }

  @media ${devices.desktop} {
    position: absolute;
    right: 120px;
  } 

  @media ${devices.ultraDesktop} {
    position: absolute;
    right: 130px;
  } 
`
