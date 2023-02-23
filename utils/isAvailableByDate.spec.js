import { isAvailableByDate } from './isAvailableByDate'

test('should throw error if provided date is not a Date instance', () => {
  expect(() => isAvailableByDate('test')).toThrow()
  expect(() => isAvailableByDate(123)).toThrow()
  expect(() => isAvailableByDate({})).toThrow()
  expect(() => isAvailableByDate([])).toThrow()
  expect(() => isAvailableByDate(null)).toThrow()
  expect(() => isAvailableByDate(undefined)).toThrow()
})

test('should return false if provided date is in the future', () => {
  const date = new Date()
  date.setDate(date.getDate() + 1)
  expect(isAvailableByDate(date)).toBe(false)
})

test('should return true if provided date is in the past', () => {
  const date = new Date()
  date.setDate(date.getDate() - 1)
  expect(isAvailableByDate(date)).toBe(true)
})
