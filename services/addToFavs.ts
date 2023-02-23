export const addToFavs = async ({ id, token }: { id: string; token: string }) => {
  const favResponse = await fetch(`${process.env.nextApiURL}/films/user/list`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })
  return await favResponse.json()
}
