import Link from 'next/link'
import styled from 'styled-components'

interface LinkProps {
  readonly secondary?: boolean
}

export const StyledLink = styled.a<LinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 57px;
  max-width: 343px;
  background-color: ${(props) => (props.secondary ? ({ theme }) => theme.colors.white : ({ theme }) => theme.colors.primary)}};
  color: ${(props) => (props.secondary ? ({ theme }) => theme.colors.black : ({ theme }) => theme.colors.white)}};

  // background-color:  ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
  ${({ theme }) => theme.fonts.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`
