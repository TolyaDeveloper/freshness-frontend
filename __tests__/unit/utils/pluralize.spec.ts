import { pluralize } from '~/utils/pluralize'

describe('[pluralize] util', () => {
  it('[pluralize] util should correctly pluralize given word', () => {
    const pluralizedResult = pluralize(5, 'apple')
    const notPluralized = pluralize(1, 'apple')

    expect(pluralizedResult).toBe('apples')
    expect(notPluralized).toBe('apple')
  })
})
