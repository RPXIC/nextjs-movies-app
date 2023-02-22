export const removeToFavs = async ({ token, id }: any) => {
  const favsResponse = await fetch(`${process.env.nextApiURL}/films/user/list/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  return await favsResponse.json()
}
