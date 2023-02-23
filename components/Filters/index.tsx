import { FreeMode } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import CTAButton from '../CTAButton'
import { StlyedFiltersContainer } from './StyledFiltersContainer'
import { Props } from './types'

export default function Filters({ moviesByGenres, handleClick, filter }: Props) {
  return (
    <StlyedFiltersContainer>
      <Swiper spaceBetween={32} slidesPerView='auto' freeMode modules={[FreeMode]} style={{ margin: 0 }}>
        {moviesByGenres.map((genre) => (
          <SwiperSlide key={genre.id} style={{ width: '125px' }}>
            <CTAButton filter={filter} key={genre.id} text={genre.name} action={handleClick} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StlyedFiltersContainer>
  )
}
