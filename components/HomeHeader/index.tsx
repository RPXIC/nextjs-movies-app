import { StyledHeader } from './StyledHeader'
import HeaderCarousel from '../Carousel'
import UserMenu from '../UserMenu'

export default function HomeHeader({ highlightedMovies }: any) {
  return (
    <>
      <StyledHeader>
        <UserMenu />
        <HeaderCarousel highlightedMovies={highlightedMovies} />
      </StyledHeader>
    </>
  )
}
