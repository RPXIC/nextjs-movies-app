import { StyledContainer } from './StyledContainer'
import { StyledContent } from './StyledContent'
import { StyledLink } from './StyledLink'

export default function Footer() {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledLink href={'/'} scroll={false}>
          Link 1
        </StyledLink>
        <StyledLink href={'/'} scroll={false}>
          Link 2
        </StyledLink>
        <StyledLink href={'/'} scroll={false}>
          Link 3
        </StyledLink>
        <StyledLink href={'/'} scroll={false}>
          Link 4
        </StyledLink>
      </StyledContent>
      <StyledContent>
        <StyledLink href={'/'} scroll={false}>
          Link 5
        </StyledLink>
        <StyledLink href={'/'} scroll={false}>
          Link 6
        </StyledLink>
      </StyledContent>
      <StyledContent>
        <StyledLink href={'/'} scroll={false}>
          Link 7
        </StyledLink>
      </StyledContent>
      <StyledContent>
        <StyledLink href={'/'} scroll={false}>
          Link 8
        </StyledLink>
      </StyledContent>
    </StyledContainer>
  )
}
