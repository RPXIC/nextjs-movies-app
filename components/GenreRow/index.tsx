import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import { StyledTitle } from './StyledTitle'
import { StyledContainer } from './StyledContainer'
import { parseMovieNameToURL } from '@/utils/parseMovieNameToURL'
import { Props } from './types'
import 'swiper/css/bundle'

export default function GenreRow({ genre, commingSoonType }: Props) {
  return (
    <StyledContainer key={genre.id}>
      <StyledTitle>{genre.name}</StyledTitle>
      <Swiper spaceBetween={32} slidesPerView='auto' freeMode modules={[FreeMode]}>
        {genre.movies.map((movie) => (
          <SwiperSlide key={movie.id} style={{ width: commingSoonType ? 400 : 261 }}>
            <Link href={`/movies/${parseMovieNameToURL(movie.title)}`}>
              <Image
                src={commingSoonType ? movie.poster : movie.thumbnail}
                alt={movie.title}
                width={commingSoonType ? 400 : 261}
                height={commingSoonType ? 260 : 386}
                style={{ borderRadius: '16px' }}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledContainer>
  )
}
