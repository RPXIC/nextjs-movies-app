import Link from 'next/link'
import { StyledContainer } from './StyledContainer'
import { StyledContent } from './StyledContent'
import { StyledLink } from './StyledLink'

export default function Footer() {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledLink href={'/'}>Link 1</StyledLink>
        <StyledLink href={'/'}>Link 2</StyledLink>
        <StyledLink href={'/'}>Link 3</StyledLink>
        <StyledLink href={'/'}>Link 4</StyledLink>
      </StyledContent>
      <StyledContent>
        <StyledLink href={'/'}>Link 5</StyledLink>
        <StyledLink href={'/'}>Link 6</StyledLink>
      </StyledContent>
      <StyledContent>
        <StyledLink href={'/'}>Link 7</StyledLink>
      </StyledContent>
      <StyledContent>
        <StyledLink href={'/'}>Link 8</StyledLink>
      </StyledContent>
    </StyledContainer>
  )
}
