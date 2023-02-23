import { Autoplay } from 'swiper'
import { Pagination } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import { StyledTitle } from './StyledTitle'
import { StyledTextContainer } from './StyledTextContainer'
import { StyledEllipsisDescription } from './StyledEllipsisDescription'
import { StyledLink } from './StyledLink'
import { StyledImage } from './StyledImage'
import { StyledSwiper } from './StyledSwiper'
import { parseMovieNameToURL } from '@/utils/parseMovieNameToURL'
import { IHighlightedMovies } from '@/interfaces'
import 'swiper/css/bundle'

export default function HeaderCarousel({ highlightedMovies }: IHighlightedMovies) {
  return (
    <>
      <StyledSwiper pagination={{ clickable: true }} autoplay={{ delay: 1000, disableOnInteraction: false }} speed={1000} loop modules={[Pagination, Autoplay]}>
        {highlightedMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <StyledImage src={movie.poster} alt={movie.title} sizes='(max-width: 1660px)' fill priority />
            <StyledTextContainer>
              <StyledTitle>{movie.title.toUpperCase()}</StyledTitle>
              <StyledEllipsisDescription>{movie.description}</StyledEllipsisDescription>
              <StyledLink href={`/movies/${parseMovieNameToURL(movie.title)}`}>Discover</StyledLink>
            </StyledTextContainer>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </>
  )
}
