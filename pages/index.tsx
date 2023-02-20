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
import 'swiper/css/bundle'

export default function Home({ moviesByGenres, highlightedMovies, allMovies }: any) {
  const [filter, setFilter] = useState('')
  console.log({ moviesByGenres, highlightedMovies, allMovies }, filter)

  const handleClick = (name: any) => {
    if (filter === name) return setFilter('')
    setFilter(name)
  }

  return (
    <Layout>
      <Head>
        <title>Movies App NextJS · Home</title>
      </Head>
      <HomeHeader highlightedMovies={highlightedMovies} />
      <Filters moviesByGenres={moviesByGenres} handleClick={handleClick} filter={filter} />
      <Movies moviesByGenres={moviesByGenres} filter={filter} />
    </Layout>
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

  const genres = await getGenres({ session })

  const allMovies = await getMovies({ session })

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

Home.auth = true
