export const getSlidesOffsetBeforeByWindowSize = (width?: number) => {
  if (width !== undefined && typeof width !== 'number') throw new Error('width must be a number')

  if (width === undefined) {
    return 0
  }

  if (width < 768) {
    return 16
  }

  if (width < 1440) {
    return 32
  }

  if (width < 1660) {
    return 120
  }

  return 130
}
