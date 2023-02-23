import Plus from '../Icons/Plus'
import Star from '../Icons/Star'
import { StyledContainer } from './StyledContainer'
import { Props } from './types'

export default function CTAFav({ isFavorite, handleClick, movie }: Props) {
  return (
    <StyledContainer>
      {isFavorite ? <Star onClick={() => handleClick(movie.id, 'delete')} /> : <Plus onClick={() => handleClick(movie.id, 'add')} />}
    </StyledContainer>
  )
}
