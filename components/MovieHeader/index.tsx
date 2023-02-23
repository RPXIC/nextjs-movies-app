import Image from 'next/image'
import { StyledHeader } from './StyledHeader'
import UserMenu from '../UserMenu'
import { StyledImage } from './StyledImage'
import { StyledBackButton } from './StyledBackButton'
import { IMovie } from '@/interfaces'
import BackArrow from '../../public/back-arrow.svg'

export default function MovieHeader({ movie }: { movie: IMovie }) {
  return (
    <>
      <StyledHeader>
        <StyledBackButton href={'/'}>
          <Image src={BackArrow} height={30} width={30} alt='back_arrow' />
        </StyledBackButton>
        <UserMenu />
        <StyledImage src={movie.poster} alt={movie.title} sizes='(max-width: 1660px)' fill priority />
      </StyledHeader>
    </>
  )
}
