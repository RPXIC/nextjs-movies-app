export const isAvailableByDate = (date: Date): boolean => {
  const today = new Date()
  const dayToCheck = new Date(date)

  return today > dayToCheck
}
