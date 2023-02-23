import { parseMovieNameToURL } from './parseMovieNameToURL'

test('should throw error if provided text is not a string', () => {
  expect(() => parseMovieNameToURL(123)).toThrow()
  expect(() => parseMovieNameToURL({})).toThrow()
  expect(() => parseMovieNameToURL([])).toThrow()
  expect(() => parseMovieNameToURL(null)).toThrow()
  expect(() => parseMovieNameToURL(undefined)).toThrow()
})

test('should return parsed name by provided text', () => {
  expect(parseMovieNameToURL('t e,s:T.')).toBe('t-est')
})
