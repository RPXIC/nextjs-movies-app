export interface Props {
  text?: string
  action: (name: string | undefined) => void
  filter: string | undefined
}
