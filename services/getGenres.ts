import MOVIES_BY_GENRES from '@/data/moviesByGenres.json'
import { USE_MOCKS } from '@/toggles'
import { IFilter, ISession } from '@/interfaces'

export const getGenres = async ({ session }: { session: ISession }): Promise<IFilter[]> => {
  let genres: IFilter[]

  if (USE_MOCKS) {
    genres = MOVIES_BY_GENRES
  } else {
    const genresResponse = await fetch(`${process.env.API_URL}/films/genres`, {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
        'Content-Type': 'application/json'
      }
    })
    genres = await genresResponse.json()
  }

  const sortedGenres = genres.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  return sortedGenres
}
