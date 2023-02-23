import { devices } from '@/constants/devices'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    color: ${({ theme }: any) => theme.colors.white};
    background-color: ${({ theme }: any) => theme.colors.backgroundColor};
    ${({ theme }: any) => theme.fonts.primary};
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

    @media ${devices.tablet} {
      width: 90px;
    }
  }
  .swiper-pagination-bullet-active {
    background-color: rgba(255, 255, 255, 0.7) !important;
  }

`

export default GlobalStyle
