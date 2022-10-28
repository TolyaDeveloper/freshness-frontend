import { ParsedUrlQuery } from 'querystring'
import { IQueries } from '~/interfaces/queries.interface'

export const parseQueries = (query: ParsedUrlQuery, keyToOmit?: string) => {
  return Object.keys(query)
    .filter(item => item !== keyToOmit)
    .reduce((acc, item) => {
      if (Array.isArray(query[item])) {
        return { ...acc, [item]: [...(query[item] as string[])] }
      }

      return { ...acc, [item]: [query[item]] }
    }, {})
}

export const parseQueriesIntoString = (query: IQueries) => {
  const params = new URLSearchParams()

  Object.entries(query).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(value => params.append(key, value.toString()))
    } else {
      params.append(key, value.toString())
    }
  })

  return params.toString()
}

export const buildQueriesFromArray = (arr: string[]) => {
  return arr.map(item => `productIds=${item}`).join('&')
}

export const defaultQueries: IQueries = {
  biology: [],
  rating: [],
  priceType: [],
  country: [],
  maxPrice: [],
  minPrice: [],
  skip: []
}
