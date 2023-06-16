import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import type { NextAuthOptions } from 'next-auth'
import { USE_MOCKS } from '@/toggles'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'email@example.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req): Promise<any> {
        if (USE_MOCKS) {
          return {
            name: credentials?.email,
            email: credentials?.email,
            image: null,
            token: 'token'
          }
        } else {
          const res = await fetch(`${process.env.API_URL}/films/auth/sign-in`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' }
          })
          const token = await res.json()
          if (res.ok && token) {
            return {
              name: credentials?.email,
              email: credentials?.email,
              image: null,
              token: token.token
            }
          }
          if (!res.ok) {
            throw new Error(token.message)
          }
          return null
        }
      }
    })
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user.accessToken = token.accessToken
      return session
    },
    async jwt({ token, user, account }: any) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.token
        }
      }
      return token
    }
  }
}
export default NextAuth(authOptions)
