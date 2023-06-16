import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { getFavs } from '@/services/getFavs'

const cors = Cors({
  methods: ['GET', 'HEAD']
})

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: Cors.CorsRequest) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors)

  const token = req.headers.authorization
  const parsedToken = token?.split(' ')[1]

  const response = await getFavs({ token: parsedToken })

  res.json(response)
}
