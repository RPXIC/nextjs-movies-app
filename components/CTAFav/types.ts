import { IMovie } from '@/interfaces'

export interface Props {
  isFavorite: boolean
  handleClick: (movieId: string, action: 'add' | 'delete') => void
  movie: IMovie
}
