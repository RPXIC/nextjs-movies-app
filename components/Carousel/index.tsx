import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function HeaderCarousel({ highlightedMovies }: any) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex)
  }

  const style: any = {
    height: '600px',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      {highlightedMovies.map((movie: any) => (
        <Carousel.Item key={movie.id} style={{ height: '600px' }}>
          <img src={movie.poster} alt='First slide' style={style} />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
