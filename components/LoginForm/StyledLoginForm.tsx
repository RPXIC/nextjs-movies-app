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
`
