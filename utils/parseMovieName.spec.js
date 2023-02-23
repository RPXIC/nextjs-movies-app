import { parseMovieName } from './parseMovieName'

test('should throw error if provided text is not a string', () => {
  expect(() => parseMovieName(123)).toThrow()
  expect(() => parseMovieName({})).toThrow()
  expect(() => parseMovieName([])).toThrow()
  expect(() => parseMovieName(null)).toThrow()
  expect(() => parseMovieName(undefined)).toThrow()
})

test('should return parsed name by provided text', () => {
  expect(parseMovieName('te%20s:T.')).toBe('test')
})
