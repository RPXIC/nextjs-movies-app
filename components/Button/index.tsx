import { StlyedButton } from './StyledButton'

export default function Button({ text, action, type }: any) {
  return (
    <StlyedButton type={type} onClick={(e) => action(e)}>
      {text}
    </StlyedButton>
  )
}
