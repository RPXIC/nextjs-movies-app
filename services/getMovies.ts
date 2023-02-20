export const getMovies = async ({ session }: any) => {
  const moviesResponse = await fetch(`${process.env.API_URL}/films/movies`, {
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      'Content-Type': 'application/json'
    }
  })
  return await moviesResponse.json()
}
