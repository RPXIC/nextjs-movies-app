import { signOut, useSession } from 'next-auth/react'
import { StlyedSignOutButton } from './StyledSignOutButton'

export default function SignOutButton() {
  const { data: session } = useSession()

  return session?.user ? <StlyedSignOutButton onClick={() => signOut()}>Sign out</StlyedSignOutButton> : null
}
