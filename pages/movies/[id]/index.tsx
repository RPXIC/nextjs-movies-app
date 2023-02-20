import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default function Movie({ movie }: any) {
  console.log(movie)
  return <div>Movie</div>
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

  const movieResponse = await fetch(`${process.env.API_URL}/films/movies/${params.id}`, {
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      'Content-Type': 'application/json'
    }
  })
  const movie = await movieResponse.json()

  return {
    props: {
      movie
    }
  }
}

Movie.auth = true
