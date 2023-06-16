import { ISession } from '@/interfaces'
import { USE_MOCKS } from '@/toggles'

export const getFavs = async ({ session, token }: { session?: ISession; token?: string }): Promise<string[]> => {
  if (USE_MOCKS) {
    return []
  } else {
    const favsResponse = await fetch(`${process.env.API_URL}/films/user/list`, {
      headers: {
        Authorization: `Bearer ${session?.user?.accessToken || token}`,
        'Content-Type': 'application/json'
      }
    })
    return await favsResponse.json()
  }
}
