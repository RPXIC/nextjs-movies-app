import Head from 'next/head'
import { getServerSession } from 'next-auth'
import Layout from '@/components/Layout/layout'
import MovieHeader from '@/components/MovieHeader'
import { StyledDescription } from '@/components/Carousel/StyledDescription'
import { StyledTitle } from '@/components/Carousel/StyledTitle'
import MovieDetails from '@/components/MovieDetails'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getMovies } from '@/services/getMovies'
import { getFavs } from '@/services/getFavs'
import { parseMovieName } from '@/utils/parseMovieName'

export default function Movie({ movie, isFavorite }: any) {
  return (
    <Layout>
      <Head>
        <title>Movies App NextJS · {movie.title}</title>
      </Head>
      <MovieHeader movie={movie} />
      <MovieDetails movie={movie} isFavorite={isFavorite} />
      <div style={{ padding: '0 16px' }}>
        <StyledTitle>{movie.title.toUpperCase()}</StyledTitle>
        <StyledDescription>{movie.description}</StyledDescription>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req, res, params }: any) {
  const session: any = await getServerSession(req, res, authOptions)

  if (!session?.user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const allMovies = await getMovies({ session })

  const movie = allMovies.find((movie: any) => parseMovieName(movie.title) === parseMovieName(params.name))

  const favorites = await getFavs({ session })

  return {
    props: {
      movie: movie || null,
      isFavorite: favorites.includes(movie.id)
    }
  }
}

Movie.auth = true
