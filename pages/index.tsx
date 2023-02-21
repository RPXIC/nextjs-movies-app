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
import 'swiper/css/bundle'

export default function Home({ moviesByGenres, highlightedMovies, allMovies, commingSoonMovies, favsMovies }: any) {
  const [filter, setFilter] = useState('')
  console.log({ moviesByGenres, highlightedMovies, allMovies, commingSoonMovies, favsMovies })

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
      <Movies moviesByGenres={moviesByGenres} commingSoonMovies={commingSoonMovies} favsMovies={favsMovies} filter={filter} />
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

  const favsIDs = await getFavs({ session })

  const moviesByGenres = genres.map((genre: any) => {
    const movies = allMovies.filter((movie: any) => movie.genre === genre.id)
    return { ...genre, movies }
  })

  const highlightedMovies = allMovies.filter((movie: any) => movie.highlighted === true)

  const commingSoonMovies = allMovies.filter((movie: any) => isAvailableByDate(movie.availableDate) === false)

  const favsMovies = allMovies.filter((movie: any) => favsIDs.includes(movie.id))

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
