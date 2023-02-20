import Footer from '../Footer'
import { StyledContainer } from './StyledContainer'

export default function Layout({ children }: any) {
  return (
    <StyledContainer>
      <main>{children}</main>
      <Footer />
    </StyledContainer>
  )
}
