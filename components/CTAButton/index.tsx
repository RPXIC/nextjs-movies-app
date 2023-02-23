import { StlyedCTAButton } from './StyledCTAButton'
import { Props } from './types'

export default function CTAButton({ text, action, filter }: Props) {
  return (
    <StlyedCTAButton filter={filter} text={text} onClick={() => action(text)}>
      {text}
    </StlyedCTAButton>
  )
}
