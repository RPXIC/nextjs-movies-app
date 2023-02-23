export const parseMovieName = (text: string): string => {
  if (typeof text !== 'string') throw new Error('text must be a string')
  return text.replace(/-/g, ' ').replace(/,/g, '').replace(/\./g, '').replace(/:/g, '').replace(/%20/g, '').toLowerCase()
}
