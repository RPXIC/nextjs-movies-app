import { HTMLInputTypeAttribute } from 'react'

export interface Props {
  type: HTMLInputTypeAttribute
  value: string
  onChange: (value: string) => void
  placeholder: string
}
