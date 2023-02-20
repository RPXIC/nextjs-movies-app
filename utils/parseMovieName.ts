export const parseMovieName = (text: string) => text.replace(/-/g, ' ').replace(/,/g, '').replace(/\./g, '').replace(/:/g, '').replace(/%20/g, '').toLowerCase()
