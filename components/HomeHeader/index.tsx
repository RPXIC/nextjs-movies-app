import { StyledHeader } from './StyledHeader'
import HeaderCarousel from '../Carousel'
import UserMenu from '../UserMenu'
import { IHighlightedMovies } from '@/interfaces'

export default function HomeHeader({ highlightedMovies }: IHighlightedMovies) {
  return (
    <>
      <StyledHeader>
        <UserMenu />
        <HeaderCarousel highlightedMovies={highlightedMovies} />
      </StyledHeader>
    </>
  )
}
