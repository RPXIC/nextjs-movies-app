import styled from 'styled-components'

export const StlyedInput = styled.input`
  -webkit-appearance: none;
  border-style: none;
  border-radius: 8px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  color: ${({ theme }) => theme.colors.white};
  padding: 13px 16.35px 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderInput};
  font-size: 16px;
  font-weight: 700;
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`
