import { USE_MOCKS } from '@/toggles'

export const removeToFavs = async ({ token, id }: { token: string; id: string }) => {
  if (USE_MOCKS) {
    return {
      myList: []
    }
  } else {
    const favsResponse = await fetch(`${process.env.nextApiURL}/films/user/list/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    return await favsResponse.json()
  }
}
