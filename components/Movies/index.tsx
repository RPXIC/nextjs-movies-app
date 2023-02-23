import GenreRow from '../GenreRow'
import { Props } from './types'

export default function Movies({ moviesByGenres, filter, commingSoonMovies, favsMovies }: Props) {
  return (
    <>
      {moviesByGenres.map((genre: any) => {
        if (filter && filter !== genre.name) return null
        return <GenreRow key={genre.id} genre={genre} />
      })}
      <GenreRow commingSoonType genre={{ name: 'Comming Soon', movies: commingSoonMovies }} />
      {favsMovies.length > 0 && <GenreRow genre={{ name: 'My List', movies: favsMovies }} />}
    </>
  )
}
