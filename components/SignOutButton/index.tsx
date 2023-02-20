import { signOut, useSession } from 'next-auth/react'
import { StlyedSignOutButton } from './StyledSignOutButton'
import { Roboto_Condensed } from '@next/font/google'

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function SignOutButton() {
  const { data: session } = useSession()

  return session?.user ? (
    <StlyedSignOutButton className={robotoCondensed.className} onClick={() => signOut()}>
      Sign out
    </StlyedSignOutButton>
  ) : null
}
