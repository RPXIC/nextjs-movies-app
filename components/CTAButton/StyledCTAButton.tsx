import styled from 'styled-components'

export const StlyedCTAButton = styled.button`
  border-style: none;
  border-radius: 16px;
  height: 46px;
  min-width: 125px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    cursor: pointer;
  }
`
