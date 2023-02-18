import { StyledHeader } from './StyledHeader'
import HeaderCarousel from '../Carousel'
import UserMenu from '../UserMenu'

export default function Header({ highlightedMovies }: any) {
  return (
    <>
      <StyledHeader>
        <UserMenu />
        <HeaderCarousel highlightedMovies={highlightedMovies} />
      </StyledHeader>
    </>
  )
}
