import { StyledTitle } from './StyledTitle'
import { StyledTextContainer } from './StyledTextContainer'
import { StyledDescription } from './StyledDescription'
import Image from 'next/image'
import { StyledLink } from './StyledLink'
import { Roboto_Condensed } from '@next/font/google'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { Autoplay } from 'swiper'
import 'swiper/css/bundle'

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function HeaderCarousel({ highlightedMovies }: any) {
  const style: any = {
    objectFit: 'cover',
    objectPosition: 'center'
  }

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
            <Image src={movie.poster} alt='First slide' style={style} sizes='(max-width: 1660px)' fill priority />
            <StyledTextContainer style={{ position: 'absolute', top: '144px', padding: '0 16px' }}>
              <StyledTitle className={robotoCondensed.className}>{movie.title.toUpperCase()}</StyledTitle>
              <StyledDescription>{movie.description}</StyledDescription>
              <StyledLink className={robotoCondensed.className} href={`/movies/${movie.id}`} style={{ position: 'absolute' }}>
                Discover
              </StyledLink>
            </StyledTextContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
