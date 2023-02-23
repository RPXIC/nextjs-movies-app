import { ReactNode } from 'react'
import { StyledLoginForm } from './StyledLoginForm'

export default function LoginForm({ children }: { children: ReactNode }) {
  return <StyledLoginForm onSubmit={(e) => e.preventDefault()}>{children}</StyledLoginForm>
}
