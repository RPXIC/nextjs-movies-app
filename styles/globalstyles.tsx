import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }: any) => theme.colors.black};
    padding: 0;
    margin: 0;
    backgroundColor: ${({ theme }: any) => theme.colors.backgroundColor}
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
