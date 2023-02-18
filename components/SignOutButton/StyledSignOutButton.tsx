import styled from 'styled-components'

export const StlyedSignOutButton = styled.button`
  border-style: none;
  border-radius: 16px;
  height: 57px;
  width: 343px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    cursor: pointer;
  }
`
