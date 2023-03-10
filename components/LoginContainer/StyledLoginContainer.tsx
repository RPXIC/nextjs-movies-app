import styled from 'styled-components'

export const StyledLoginContainer = styled.main`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px;

  & > img {
    position: absolute;
    object-fit: cover;
    object-position: center;
    z-index: -1;
  }
`
