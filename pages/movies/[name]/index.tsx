import Head from 'next/head'
import { getServerSession } from 'next-auth'
import Layout from '@/components/Layout/layout'
import MovieHeader from '@/components/MovieHeader'
import { StyledDescription } from '@/components/Carousel/StyledDescription'
import { StyledTitle } from '@/components/Carousel/StyledTitle'
import MovieDetails from '@/components/MovieDetails'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getMovies } from '@/services/getMovies'
import { parseMovieName } from '@/utils/parseMovieName'
import { getGenres } from '@/services/getGenres'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { IMovie, ISession } from '@/interfaces'

export default function Movie({ movie, genre }: { movie: IMovie; genre: string }) {
  if (!movie) return <div>Movie not found</div>

  return (
    <Layout>
      <Head>
        <title>Movies App NextJS · {movie.title}</title>
        <meta name='description' content='Movies App NextJS' />
      </Head>
      <MovieHeader movie={movie} />
      <MovieDetails movie={movie} genre={genre} />
      <div style={{ padding: '0 16px' }}>
        <StyledTitle>{movie.title.toUpperCase()}</StyledTitle>
        <StyledDescription>{movie.description}</StyledDescription>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req, res, params } = context
  const session: ISession | null = await getServerSession(req, res, authOptions)

  if (!session?.user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const [genres, allMovies] = await Promise.all([getGenres({ session }), getMovies({ session })])

  const movie: IMovie | undefined = allMovies.find((movie: IMovie) => parseMovieName(movie.title) === parseMovieName(params?.name as string))

  const genre: string | undefined = genres.find((genre) => genre.id === movie?.genre)?.name

  return {
    props: {
      movie: movie || null,
      genre: genre || null
    }
  }
}

Movie.auth = true
