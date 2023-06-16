import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { removeToFavs } from '@/services/removeToFavs'

const cors = Cors({
  methods: ['HEAD', 'DELETE']
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

  const { id, token } = req.body

  const response = await removeToFavs({ id, token })

  res.json(response)
}
