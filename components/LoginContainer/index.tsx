import { ReactNode } from 'react'
import Image from 'next/image'
import { StyledLoginContainer } from './StyledLoginContainer'
import BackgroundImage from '../../public/login-background.svg'

export default function LoginContainer({ children }: { children: ReactNode }) {
  return (
    <StyledLoginContainer>
      <Image alt='bgImage' src={BackgroundImage} fill priority quality={30} />
      {children}
    </StyledLoginContainer>
  )
}
