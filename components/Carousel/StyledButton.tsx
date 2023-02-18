import styled from 'styled-components'

export const StyledButton = styled.button`
  border-style: none;
  border-radius: 16px;
  height: 40px;
  min-width: 200px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    cursor: pointer;
  }
`
