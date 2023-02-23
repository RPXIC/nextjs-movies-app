import Router from 'next/router'
import { SessionProvider, useSession } from 'next-auth/react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globalstyles'
import { Roboto, Roboto_Condensed } from '@next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin']
})

const theme: DefaultTheme = {
  colors: {
    primary: '#751B5C',
    primaryHover: '#911870',
    secondary: '#0070f3',
    black: '#000000',
    backgroundInput: 'rgba(255, 255, 255, 0.1)',
    borderInput: '#751B5C',
    white: '#ffffff',
    backgroundColor: '#222222'
  },
  fonts: {
    primary: roboto.style,
    secondary: robotoCondensed.style
  }
}

export default function App({ Component, pageProps }: { Component: any } & AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SessionProvider session={pageProps.session}>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}

function Auth({ children }: { children: ReactNode }): JSX.Element {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      Router.push('/login')
    }
  })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return <>{children}</>
}
