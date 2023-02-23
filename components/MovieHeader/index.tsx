import { StyledHeader } from './StyledHeader'
import UserMenu from '../UserMenu'
import { StyledImage } from './StyledImage'
import { IMovie } from '@/interfaces'

export default function MovieHeader({ movie }: { movie: IMovie }) {
  return (
    <>
      <StyledHeader>
        <UserMenu />
        <StyledImage src={movie.poster} alt={movie.title} sizes='(max-width: 1660px)' fill priority />
      </StyledHeader>
    </>
  )
}
