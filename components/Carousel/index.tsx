import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StyledTitle } from './StledTitle'
import { StyledTextContainer } from './StyledTextContainer'
import { StyledDescription } from './StyledDescription'
import Image from 'next/image'
import { StyledButton } from './StyledButton'

export default function HeaderCarousel({ highlightedMovies }: any) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex)
  }

  const style: any = {
    objectFit: 'cover',
    objectPosition: 'center'
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      {highlightedMovies.map((movie: any) => (
        <Carousel.Item key={movie.id} style={{ height: '600px' }}>
          <Image src={movie.poster} alt='First slide' style={style} fill priority />
          <Carousel.Caption style={{ right: 0, left: 0, top: '144px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0 16px' }}>
            <StyledTextContainer>
              <StyledTitle>{movie.title.toUpperCase()}</StyledTitle>
              <StyledDescription>{movie.description}</StyledDescription>
            </StyledTextContainer>
            <StyledButton>Discover</StyledButton>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
