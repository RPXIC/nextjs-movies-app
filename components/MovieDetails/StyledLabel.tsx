import styled from 'styled-components'

export const StyledLabel = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 18.75px;
  ${({ theme }) => theme.fonts.secondary};
`
