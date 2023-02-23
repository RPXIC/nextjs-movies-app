import styled from 'styled-components'

export const StyledContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 49px 16px 40px;
  margin: 29px 0 0 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 32px;
`
