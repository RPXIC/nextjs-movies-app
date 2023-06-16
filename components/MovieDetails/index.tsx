import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { StyledContainer } from './StyledContainer'
import { StyledLabel } from './StyledLabel'
import { StyledLink } from './StyledLink'
import { StyledLinksContainer } from './StyledLinksContainer'
import { StyledStarsValue } from './StyledStarsValue'
import { StyledValue } from './StyledValue'
import { StyledStarsContainer } from './StyledStarsContainer'
import CTAFav from '../CTAFav'
import FilledStar from '../Icons/Rating/FilledStar'
import EmptyStar from '../Icons/Rating/EmptyStar'
import { isAvailableByDate } from '@/utils/isAvailableByDate'
import { IMovie } from '@/interfaces'

export default function MovieDetails({ movie, genre }: { movie: IMovie; genre: string }) {
  const [favs, setFavs] = useState<string[]>([])
  const isAvailable = isAvailableByDate(movie.availableDate)
  const { data: session }: any = useSession()
  const isFavorite = favs.includes(movie.id)

  useEffect(() => {
    if (favs.length === 0) {
      ;(async () => {
        const favsResponse = await fetch('/api/getFavs', {
          headers: {
            Authorization: `Bearer ${session?.user?.accessToken}`,
            'Content-Type': 'application/json'
          }
        })
        const favsRes = await favsResponse.json()
        setFavs(favsRes)
      })()
    }
    // eslint-disable-next-line
  }, [])

  const handleClick = async (id: string, method: 'delete' | 'add') => {
    if (method === 'delete') {
      const response = await fetch('/api/removeFav', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, token: session?.user?.accessToken })
      })
      const result = await response.json()
      setFavs(result.myList)
    }
    if (method === 'add') {
      const response = await fetch('/api/addFav', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, token: session?.user?.accessToken })
      })
      const result = await response.json()
      setFavs(result.myList)
    }
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
      <CTAFav isFavorite={isFavorite} handleClick={handleClick} movie={movie} />
      <p>
        <StyledLabel>{isFavorite ? 'Remove from my list' : 'Add to my list'}</StyledLabel>
      </p>
      {movie.rating && (
        <StyledStarsContainer>
          <StyledLabel>Rating: </StyledLabel>
          <StyledStarsValue>
            {Array.from({ length: movie.rating }, (_, i) => (
              <FilledStar key={i} />
            ))}
            {Array.from({ length: 5 - movie.rating }, (_, i) => (
              <EmptyStar key={i} />
            ))}
          </StyledStarsValue>
        </StyledStarsContainer>
      )}
      <p>
        <StyledLabel>Cast: </StyledLabel>
        <StyledValue>{movie.cast}</StyledValue>
      </p>
      <p>
        <StyledLabel>Genre: </StyledLabel>
        <StyledValue>{genre}</StyledValue>
      </p>
    </StyledContainer>
  )
}
