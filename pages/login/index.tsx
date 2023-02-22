import { useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Button from '@/components/Button'
import Input from '@/components/Input'
import LoginContainer from '@/components/LoginContainer'
import LoginForm from '@/components/LoginForm'
import { signIn, useSession } from 'next-auth/react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { data: session } = useSession()

  if (session?.user) Router.push('/')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const res = await signIn('credentials', {
      email: username,
      password,
      redirect: false
    })
    if (res?.error) setError(res.error)
    setLoading(false)
  }

  return (
    <LoginContainer>
      <Head>
        <title>Movies App NextJS - Login</title>
      </Head>
      <LoginForm>
        {error && <p style={{ color: 'white', textAlign: 'center' }}>{error}</p>} <br />
        <Input type='email' value={username} onChange={setUsername} placeholder='Username' />
        <Input type='password' value={password} onChange={setPassword} placeholder='Password' />
        <Button text={loading ? 'Loading' : 'Sign In'} type='button' action={!loading && handleSubmit} />
      </LoginForm>
    </LoginContainer>
  )
}
