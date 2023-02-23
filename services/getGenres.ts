import { IFilter, ISession } from '@/interfaces'

export const getGenres = async ({ session }: { session: ISession }): Promise<IFilter[]> => {
  const genresResponse = await fetch(`${process.env.API_URL}/films/genres`, {
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      'Content-Type': 'application/json'
    }
  })
  const genres: IFilter[] = await genresResponse.json()

  const sortedGenres = genres.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  return sortedGenres
}
