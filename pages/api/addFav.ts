import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { addToFavs } from '@/services/addToFavs'

const cors = Cors({
  methods: ['POST', 'HEAD']
})

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
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

  const x = await addToFavs({ id, token })

  res.json(x)
}
