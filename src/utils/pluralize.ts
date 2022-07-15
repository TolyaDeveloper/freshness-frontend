export const pluralize = (count: number, word: string, suffix = 's') => {
  return `${word}${count !== 1 ? suffix : ''}`
}
