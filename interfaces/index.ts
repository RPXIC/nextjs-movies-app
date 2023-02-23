import { Session } from 'next-auth'

export interface IMovie {
  highlighted: boolean
  rating: number
  poster: string
  cast: string
  thumbnail: string
  description: string
  id: string
  genre: string
  availableDate: Date
  title: string
}

export interface IHighlightedMovies {
  highlightedMovies: IMovie[]
}

export interface IFilter {
  id: string
  name: string
}

export interface IMoviesByGenres {
  id?: string
  name?: string
  movies: IMovie[]
}

export interface ISession extends Session {
  user: {
    name: string
    email: string
    image?: string
    accessToken: string
  }
  expires: string
}

export interface ITheme {
  colors: {
    primary: string
    primaryHover: string
    secondary: string
    black: string
    backgroundInput: string
    borderInput: string
    white: string
    backgroundColor: string
  }
  fonts: {
    primary: {
      fontFamily: string
      fontWeight?: number | undefined
      fontStyle?: string | undefined
    }
    secondary: {
      fontFamily: string
      fontWeight?: number | undefined
      fontStyle?: string | undefined
    }
  }
}
