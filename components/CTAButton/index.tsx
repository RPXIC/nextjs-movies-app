// @ts-nocheck
import { StlyedCTAButton } from './StyledCTAButton'

export default function CTAButton({ text, action, filter }: any) {
  return (
    <StlyedCTAButton filter={filter} text={text} onClick={() => action(text)}>
      {text}
    </StlyedCTAButton>
  )
}
