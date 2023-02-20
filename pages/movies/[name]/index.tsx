import Head from 'next/head'
import { getServerSession } from 'next-auth'
import Layout from '@/components/Layout/layout'
import MovieHeader from '@/components/MovieHeader'
import { StyledDescription } from '@/components/Carousel/StyledDescription'
import { StyledTitle } from '@/components/Carousel/StyledTitle'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getMovies } from '@/services/getMovies'
import { parseMovieName } from '@/utils/parseMovieName'

export default function Movie({ movie }: any) {
  console.log(movie)
  return (
    <Layout>
      <Head>
        <title>Movies App NextJS · {movie.title}</title>
      </Head>
      <MovieHeader movie={movie} />
      <StyledTitle>{movie.title.toUpperCase()}</StyledTitle>
      <StyledDescription>{movie.description}</StyledDescription>
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

  return {
    props: {
      movie: movie || null
    }
  }
}

Movie.auth = true
