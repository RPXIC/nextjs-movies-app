import Button from '@/components/Button'
import Input from '@/components/Input'
import LoginContainer from '@/components/LoginContainer'
import LoginForm from '@/components/LoginForm'
import { signIn, signOut, useSession } from 'next-auth/react'
import Router from 'next/router'
import { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { data: session } = useSession()

  if (session?.user) Router.push('/')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      email: username,
      password,
      redirect: false
    })
    if (res?.error) setError(res.error)
  }

  return (
    <LoginContainer>
      {error && <p>{error}</p>} <br />
      <LoginForm>
        <Input type='email' value={username} onChange={setUsername} placeholder='Username' />
        <Input type='password' value={password} onChange={setPassword} placeholder='Password' />
        <Button text='Sign In' type='button' action={handleSubmit} />
      </LoginForm>
    </LoginContainer>
  )
}
