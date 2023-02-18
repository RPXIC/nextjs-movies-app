import Router from 'next/router'
import { SessionProvider, useSession } from 'next-auth/react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globalstyles'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
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
    white: '#ffffff'
    // backgroundColor: '#222222'
  }
}

export default function App({ Component, pageProps: { session, ...pageProps } }: any /*AppProps*/) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main className={roboto.className}>
          <SessionProvider session={session}>
            {Component.auth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </SessionProvider>
        </main>
      </ThemeProvider>
    </>
  )
}

function Auth({ children }: any) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      Router.push('/login')
    }
  })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return children
}
