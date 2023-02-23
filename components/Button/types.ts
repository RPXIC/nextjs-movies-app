import { MouseEvent } from 'react'

export interface Props {
  text: string
  action: (e: MouseEvent<HTMLButtonElement>) => Promise<void>
}
