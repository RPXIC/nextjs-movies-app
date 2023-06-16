export const isAvailableByDate = (date: Date | string): boolean => {
  if (!(new Date(date) instanceof Date)) throw new Error('Date is not a valid date')

  const today = new Date()
  const dayToCheck = new Date(date)

  return today > dayToCheck
}
