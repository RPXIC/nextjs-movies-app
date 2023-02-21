export const getFavs = async ({ session }: any) => {
  const favsResponse = await fetch(`${process.env.API_URL}/films/user/list`, {
    headers: {
      Authorization: `Bearer ${session?.user.accessToken}`,
      'Content-Type': 'application/json'
    }
  })
  const favsIDs = await favsResponse.json()

  return favsIDs
}
