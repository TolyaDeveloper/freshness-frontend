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

// export const parseQueriesIntoString = (query: IQueries) => {}

export const defaultQueries: IQueries = {
  biology: [],
  brands: [],
  rating: [],
  priceType: [],
  country: [],
  maxPrice: [],
  minPrice: []
}

// {
//   biology: ['Farm', 'Bio']
//   rating: [2, 4]
// }

// should be: biology=Farm&biology=Bio&rating=2&rating=4
