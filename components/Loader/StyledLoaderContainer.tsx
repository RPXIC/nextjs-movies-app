import styled from 'styled-components'

export const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  & svg {
    & circle {
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`
