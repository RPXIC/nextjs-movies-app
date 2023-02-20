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

  .swiper-pagination-bullet{
    width: 50px;
    height: 6px;
    border-radius: 8px;
  }
  .swiper-pagination-bullet-active {
    background-color: rgba(255, 255, 255, 0.7) !important;
  }
`

export default GlobalStyle
