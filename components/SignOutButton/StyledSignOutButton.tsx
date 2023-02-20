import styled from 'styled-components'

export const StlyedSignOutButton = styled.button`
  border-style: none;
  border-radius: 16px;
  height: 40px;
  width: 343px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    cursor: pointer;
  }
`
