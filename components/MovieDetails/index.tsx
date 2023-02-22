import Plus from '../Icons/Plus'
import EmptyStar from '../Icons/Rating/EmptyStar'
import FilledStar from '../Icons/Rating/FilledStar'
import Star from '../Icons/Star'
import { StyledContainer } from './StyledContainer'
import { StyledLabel } from './StyledLabel'
import { StyledLink } from './StyledLink'
import { StyledLinksContainer } from './StyledLinksContainer'
import { StyledStarsContainer } from './StyledStarsContainer'
import { StyledValue } from './StyledValue'
import { isAvailableByDate } from '@/utils/isAvailableByDate'
import { removeToFavs } from '@/services/removeToFavs'
import { addToFavs } from '@/services/addToFavs'
import { useSession } from 'next-auth/react'

export default function MovieDetails({ movie, isFavorite }: any) {
  const isAvailable = isAvailableByDate(movie.availableDate)
  const { data: session }: any = useSession()

  const handleClick = async (id: string, method: 'delete' | 'add') => {
    if (method === 'delete') return await removeToFavs({ id, token: session?.user?.accessToken })
    if (method === 'add') return await addToFavs({ id, token: session?.user?.accessToken })
  }

  return (
    <StyledContainer>
      <StyledLinksContainer>
        <StyledLink secondary href={`https://www.youtube.com/results?search_query=${movie.title}+trailer`} target='_blank' rel='noopener noreferrer'>
          Trailer
        </StyledLink>
        {isAvailable && (
          <StyledLink href={`https://www.youtube.com/results?search_query=${movie.title}+movie`} target='_blank' rel='noopener noreferrer'>
            Play
          </StyledLink>
        )}
      </StyledLinksContainer>
      <div style={{ margin: '32px 0 16px 25px' }}>
        {isFavorite ? <Star onClick={() => handleClick(movie.id, 'delete')} /> : <Plus onClick={() => handleClick(movie.id, 'add')} />}
      </div>
      <p>
        <StyledLabel>Add to my list</StyledLabel>
      </p>
      {movie.rating && (
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <StyledLabel>Rating: </StyledLabel>
          <StyledStarsContainer>
            {Array.from({ length: movie.rating }, (_, i) => (
              <FilledStar key={i} />
            ))}
            {Array.from({ length: 5 - movie.rating }, (_, i) => (
              <EmptyStar key={i} />
            ))}
          </StyledStarsContainer>
        </p>
      )}
      <p>
        <StyledLabel>Cast: </StyledLabel>
        <StyledValue>{movie.cast}</StyledValue>
      </p>
      <p>
        <StyledLabel>Genre: </StyledLabel>
        <StyledValue>{movie.genre}</StyledValue>
      </p>
    </StyledContainer>
  )
}
