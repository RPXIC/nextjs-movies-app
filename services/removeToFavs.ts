export const removeToFavs = async ({ token, id }: any) => {
  const favsResponse = await fetch(`${process.env.nextApiURL}/films/user/list`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })
  const favsIDs = await favsResponse.json()
  console.log(favsIDs)
  return favsIDs
}
