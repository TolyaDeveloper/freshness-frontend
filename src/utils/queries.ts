import { ParsedUrlQuery } from 'querystring'

export const parseQueries = (query: ParsedUrlQuery, keyToOmit?: string) => {
  return Object.keys(query)
    .filter(item => item !== keyToOmit)
    .reduce((acc, item) => ({ ...acc, [item]: query[item] }), {})
}

export const parseQueriesIntoString = (query: ParsedUrlQuery) => {
  return Object.keys(query)
    .map(key => key + '=' + query[key])
    .join('&')
}
