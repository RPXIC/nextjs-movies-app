import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import { Roboto_Condensed } from '@next/font/google'
import { StyledTitle } from './StyledTitle'
import { StyledContainer } from './StyledContainer'
import { parseMovieNameToURL } from '@/utils/parseMovieNameToURL'
import 'swiper/css/bundle'

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function GenreRow({ genre }: any) {
  return (
    <StyledContainer key={genre.id}>
      <StyledTitle className={robotoCondensed.className}>{genre.name}</StyledTitle>
      <Swiper spaceBetween={32} slidesPerView='auto' freeMode modules={[FreeMode]}>
        {genre.movies.map((movie: any) => (
          <SwiperSlide key={movie.id} style={{ width: '261px' }}>
            <Link href={`/movies/${parseMovieNameToURL(movie.title)}`}>
              <Image src={movie.thumbnail} alt={movie.title} width={261} height={386} style={{ borderRadius: '16px' }} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledContainer>
  )
}
