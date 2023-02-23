import { StlyedButton } from './StyledButton'
import { Props } from './types'

export default function Button({ text, action }: Props) {
  return <StlyedButton onClick={(e) => action(e)}>{text}</StlyedButton>
}
