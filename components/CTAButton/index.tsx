import { StlyedCTAButton } from './StyledCTAButton'

export default function CTAButton({ text, action }: any) {
  return <StlyedCTAButton onClick={() => action(text)}>{text}</StlyedCTAButton>
}
