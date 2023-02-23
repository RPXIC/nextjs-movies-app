import { IMovie, ISession } from '@/interfaces'

export const getMovies = async ({ session }: { session: ISession }): Promise<IMovie[]> => {
  const moviesResponse = await fetch(`${process.env.API_URL}/films/movies`, {
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      'Content-Type': 'application/json'
    }
  })
  return await moviesResponse.json()
}
