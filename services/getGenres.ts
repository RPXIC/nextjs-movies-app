export const getGenres = async ({ session }: any) => {
  const genresResponse = await fetch(`${process.env.API_URL}/films/genres`, {
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      'Content-Type': 'application/json'
    }
  })
  return await genresResponse.json()
}
