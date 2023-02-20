import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import CTAButton from '@/components/CTAButton'
import FiltersContainer from '@/components/FiltersContainer'
import { useState } from 'react'
import Header from '@/components/Header'
import GenreRow from '@/components/GenreRow'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css/bundle'

export default function Movies({ moviesByGenres, highlightedMovies, allMovies }: any) {
  const [filter, setFilter] = useState('')
  console.log({ moviesByGenres, highlightedMovies, allMovies }, filter)

  const handleClick = (name: any) => {
    if (filter === name) return setFilter('')
    setFilter(name)
  }

  return (
    <div style={{ backgroundColor: '#222222' }}>
      <Header highlightedMovies={highlightedMovies} />
      <FiltersContainer>
        <Swiper spaceBetween={32} slidesPerView='auto' freeMode modules={[FreeMode]} style={{ margin: 0 }}>
          {moviesByGenres.map((genre: any) => (
            <SwiperSlide key={genre.id} style={{ width: '125px' }}>
              <CTAButton filter={filter} key={genre.id} text={genre.name} action={handleClick} />
            </SwiperSlide>
          ))}
        </Swiper>
      </FiltersContainer>
      {moviesByGenres.map((genre: any) => {
        if (filter && filter !== genre.name) return null
        return <GenreRow key={genre.id} genre={genre} />
      })}
    </div>
  )
}

export async function getServerSideProps({ req, res }: any) {
  const session: any = await getServerSession(req, res, authOptions)

  if (!session?.user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const genresResponse = await fetch(`${process.env.API_URL}/films/genres`, {
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      'Content-Type': 'application/json'
    }
  })
  const genres = await genresResponse.json()

  const moviesResponse = await fetch(`${process.env.API_URL}/films/movies`, {
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      'Content-Type': 'application/json'
    }
  })
  const allMovies = await moviesResponse.json()

  const moviesByGenres = genres.map((genre: any) => {
    const movies = allMovies.filter((movie: any) => movie.genre === genre.id)
    return { ...genre, movies }
  })

  const highlightedMovies = allMovies.filter((movie: any) => movie.highlighted === true)

  return {
    props: {
      moviesByGenres,
      highlightedMovies,
      allMovies
    }
  }
}

Movies.auth = true
