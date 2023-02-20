import GenreRow from '../GenreRow'

export default function Movies({ moviesByGenres, filter }: any) {
  return (
    <>
      {moviesByGenres.map((genre: any) => {
        if (filter && filter !== genre.name) return null
        return <GenreRow key={genre.id} genre={genre} />
      })}
    </>
  )
}
