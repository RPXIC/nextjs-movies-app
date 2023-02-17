import { signOut, useSession } from 'next-auth/react'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

export default function Movies({ moviesByGenres, highlightedMovies }: any) {
  const { data: session } = useSession()
  console.log({ moviesByGenres, highlightedMovies })

  return (
    <div>
      {session?.user && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}

      <h1>Movies</h1>
      {moviesByGenres.map((genre: any) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
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
