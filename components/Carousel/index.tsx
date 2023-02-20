import Image from 'next/image'
import { Autoplay } from 'swiper'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Roboto_Condensed } from '@next/font/google'
import { StyledTitle } from './StyledTitle'
import { StyledTextContainer } from './StyledTextContainer'
import { StyledEllipsisDescription } from './StyledEllipsisDescription'
import { StyledLink } from './StyledLink'
import { parseMovieNameToURL } from '@/utils/parseMovieNameToURL'
import 'swiper/css/bundle'

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin']
})

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
              <StyledTitle className={robotoCondensed.className}>{movie.title.toUpperCase()}</StyledTitle>
              <StyledEllipsisDescription>{movie.description}</StyledEllipsisDescription>
              <StyledLink className={robotoCondensed.className} href={`/movies/${parseMovieNameToURL(movie.title)}`} style={{ position: 'absolute' }}>
                Discover
              </StyledLink>
            </StyledTextContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
