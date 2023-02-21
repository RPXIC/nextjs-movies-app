import Image from 'next/image'
import { Autoplay } from 'swiper'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { StyledTitle } from './StyledTitle'
import { StyledTextContainer } from './StyledTextContainer'
import { StyledEllipsisDescription } from './StyledEllipsisDescription'
import { StyledLink } from './StyledLink'
import { parseMovieNameToURL } from '@/utils/parseMovieNameToURL'
import 'swiper/css/bundle'

export default function HeaderCarousel({ highlightedMovies }: any) {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={1000}
        loop
        modules={[Pagination, Autoplay]}
        style={{ height: '600px' }}>
        {highlightedMovies.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <Image src={movie.poster} alt={movie.title} style={{ objectFit: 'cover', objectPosition: 'center' }} sizes='(max-width: 1660px)' fill priority />
            <StyledTextContainer>
              <StyledTitle>{movie.title.toUpperCase()}</StyledTitle>
              <StyledEllipsisDescription>{movie.description}</StyledEllipsisDescription>
              <StyledLink href={`/movies/${parseMovieNameToURL(movie.title)}`} style={{ position: 'absolute' }}>
                Discover
              </StyledLink>
            </StyledTextContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
