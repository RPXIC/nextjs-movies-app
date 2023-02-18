import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import CTAButton from '@/components/CTAButton'
import FiltersContainer from '@/components/FiltersContainer'
import { useState } from 'react'
import Header from '@/components/Header'

export default function Movies({ moviesByGenres, highlightedMovies }: any) {
  const [filter, setFilter] = useState()
  console.log({ moviesByGenres, highlightedMovies }, filter)

  const handleClick = (name: any) => {
    setFilter(name)
  }

  return (
    <div style={{ backgroundColor: '#222222' }}>
      <Header highlightedMovies={highlightedMovies} />
      <FiltersContainer>
        {moviesByGenres.map((genre: any) => (
          <CTAButton key={genre.id} text={genre.name} action={handleClick} />
        ))}
      </FiltersContainer>
      <p>Selected filter: {filter}</p>
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

  const genresResponse = await fetch('https://kata.conducerevel.com/films/genres', {
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      'Content-Type': 'application/json'
    }
  })
  const genres = await genresResponse.json()

  const moviesResponse = await fetch(`https://kata.conducerevel.com/films/movies`, {
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
      highlightedMovies
    }
  }
}

Movies.auth = true
