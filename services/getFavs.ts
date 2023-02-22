export const getFavs = async ({ session, token }: any) => {
  const favsResponse = await fetch(`${process.env.API_URL}/films/user/list`, {
    headers: {
      Authorization: `Bearer ${session?.user?.accessToken || token}`,
      'Content-Type': 'application/json'
    }
  })
  return await favsResponse.json()
}
