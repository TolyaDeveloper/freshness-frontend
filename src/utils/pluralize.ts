export const pluralize = (count: number, noun: string, suffix = 's') => {
  return `${noun}${count !== 1 ? suffix : ''}`
}
