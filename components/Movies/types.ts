import { IMovie, IMoviesByGenres } from '@/interfaces'

export interface Props {
  moviesByGenres: IMoviesByGenres[]
  filter: string
  commingSoonMovies: IMovie[]
  favsMovies: IMovie[]
}
