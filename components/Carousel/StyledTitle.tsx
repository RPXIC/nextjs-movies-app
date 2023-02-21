import styled from 'styled-components'

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: 54px;
  font-weight: 700;
  margin: 0 0 8px 0;
  line-height: 54px;
  ${({ theme }) => theme.fonts.secondary};
`
