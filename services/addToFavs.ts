export const addToFavs = async ({ id, token }: any) => {
  const favResponse = await fetch(`${process.env.nextApiURL}/films/user/list`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })
  const result = await favResponse.json()
  console.log(result)
  return result
}
