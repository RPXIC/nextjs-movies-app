import { StyledHeader } from './StyledHeader'
import UserMenu from '../UserMenu'
import Image from 'next/image'

export default function MovieHeader({ movie }: any) {
  return (
    <>
      <StyledHeader>
        <UserMenu />
        <Image src={movie.poster} alt={movie.title} style={{ objectFit: 'cover', objectPosition: 'center' }} sizes='(max-width: 1660px)' fill priority />
      </StyledHeader>
    </>
  )
}
