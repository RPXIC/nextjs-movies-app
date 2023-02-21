import GenreRow from '../GenreRow'

export default function Movies({ moviesByGenres, filter, commingSoonMovies, favsMovies }: any) {
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
