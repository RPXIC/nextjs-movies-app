import Link from 'next/link'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 40px;
  min-width: 200px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.white};
  }
`
