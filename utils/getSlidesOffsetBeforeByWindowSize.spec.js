import { getSlidesOffsetBeforeByWindowSize } from './getSlidesOffsetBeforeByWindowSize'

test('should throw error if provided width is not a number', () => {
  expect(() => getSlidesOffsetBeforeByWindowSize('test')).toThrow()
  expect(() => getSlidesOffsetBeforeByWindowSize({})).toThrow()
  expect(() => getSlidesOffsetBeforeByWindowSize([])).toThrow()
  expect(() => getSlidesOffsetBeforeByWindowSize(null)).toThrow()
  expect(() => getSlidesOffsetBeforeByWindowSize(undefined)).not.toThrow()
})

test('should return the correct offset size by provided width', () => {
  expect(getSlidesOffsetBeforeByWindowSize()).toBe(0)
  expect(getSlidesOffsetBeforeByWindowSize(767)).toBe(16)
  expect(getSlidesOffsetBeforeByWindowSize(1439)).toBe(32)
  expect(getSlidesOffsetBeforeByWindowSize(1659)).toBe(120)
  expect(getSlidesOffsetBeforeByWindowSize(1660)).toBe(130)
})
