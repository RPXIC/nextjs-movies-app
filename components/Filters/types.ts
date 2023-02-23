import { IMoviesByGenres } from '@/interfaces'

export interface Props {
  moviesByGenres: IMoviesByGenres[]
  handleClick: (name: string | undefined) => void
  filter: string | undefined
}
