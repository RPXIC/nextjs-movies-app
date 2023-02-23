import { useState } from 'react'
import Head from 'next/head'
import { getServerSession } from 'next-auth/next'
import Layout from '@/components/Layout/layout'
import HomeHeader from '@/components/HomeHeader'
import Filters from '@/components/Filters'
import Movies from '@/components/Movies'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getMovies } from '@/services/getMovies'
import { getGenres } from '@/services/getGenres'
import { getFavs } from '@/services/getFavs'
import { isAvailableByDate } from '@/utils/isAvailableByDate'
import { IMoviesByGenres, IMovie, ISession } from '@/interfaces'
import { GetServerSideProps } from 'next'
import 'swiper/css/bundle'

interface Props {
  moviesByGenres: IMoviesByGenres[]
  highlightedMovies: IMovie[]
  commingSoonMovies: IMovie[]
  favsMovies: IMovie[]
}

export default function Home({ moviesByGenres, highlightedMovies, commingSoonMovies, favsMovies }: Props) {
  const [filter, setFilter] = useState('')

  const handleClick = (name: string = '') => {
    if (filter === name) return setFilter('')
    setFilter(name)
  }

  return (
    <Layout>
      <Head>
        <title>Movies App NextJS · Home</title>
        <meta name='description' content='Movies App NextJS' />
      </Head>
      <HomeHeader highlightedMovies={highlightedMovies} />
      <Filters moviesByGenres={moviesByGenres} handleClick={handleClick} filter={filter} />
      <Movies moviesByGenres={moviesByGenres} commingSoonMovies={commingSoonMovies} favsMovies={favsMovies} filter={filter} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session: ISession | null = await getServerSession(req, res, authOptions)

  if (!session?.user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const [genres, allMovies, favsIDs] = await Promise.all([getGenres({ session }), getMovies({ session }), getFavs({ session })])

  const moviesByGenres = genres.map((genre) => {
    const movies = allMovies.filter((movie) => movie.genre === genre.id)
    return { ...genre, movies }
  })

  const highlightedMovies = allMovies.filter((movie) => movie.highlighted === true)

  const commingSoonMovies = allMovies.filter((movie) => isAvailableByDate(movie.availableDate) === false)

  const favsMovies = allMovies.filter((movie) => favsIDs.includes(movie.id))

  return {
    props: {
      moviesByGenres,
      highlightedMovies,
      allMovies,
      commingSoonMovies,
      favsMovies
    }
  }
}

Home.auth = true
