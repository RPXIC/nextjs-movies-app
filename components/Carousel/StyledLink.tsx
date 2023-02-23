import Link from 'next/link'
import styled from 'styled-components'
import { devices } from '@/constants/devices'

export const StyledLink = styled(Link)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 40px;
  min-width: 200px;
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
  ${({ theme }) => theme.fonts.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  @media ${devices.desktop} {
    min-width: 343px;
    height: 57px;
  }
`
