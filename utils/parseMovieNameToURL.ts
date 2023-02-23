export const parseMovieNameToURL = (text: string) => {
  if (typeof text !== 'string') throw new Error('text must be a string')
  return text.replace(/\ /g, '-').replace(/:/g, '').replace(/,/g, '').replace(/\./g, '').toLowerCase()
}
