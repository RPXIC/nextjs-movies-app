export const getGenres = async ({ session }: any) => {
  const genresResponse = await fetch(`${process.env.API_URL}/films/genres`, {
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      'Content-Type': 'application/json'
    }
  })
  const genres = await genresResponse.json()

  const sortedGenres = genres.sort((a: any, b: any) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  return sortedGenres
}
