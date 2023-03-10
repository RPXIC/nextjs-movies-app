import styled from 'styled-components'

export const StlyedButton = styled.button`
  border-style: none;
  border-radius: 16px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    cursor: pointer;
  }
`
