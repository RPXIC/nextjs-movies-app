// @ts-nocheck
import { StlyedCTAButton } from './StyledCTAButton'
import { Roboto_Condensed } from '@next/font/google'

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function CTAButton({ text, action, filter }: any) {
  return (
    <StlyedCTAButton filter={filter} text={text} className={robotoCondensed.className} onClick={() => action(text)}>
      {text}
    </StlyedCTAButton>
  )
}
