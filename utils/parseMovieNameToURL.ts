export const parseMovieNameToURL = (text: string) => text.replace(/\ /g, '-').replace(/:/g, '').toLowerCase()
