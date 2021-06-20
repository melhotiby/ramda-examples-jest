import { groupByIdWithCount } from '../helpers/groupByIdWithCount'

describe('groupByIdWithCount', () => {
  it('groups by id and name with sum', () => {
    const products = [
      { id: 1, name: 'Nike shoes', cost: 30 },
      { id: 1, name: 'Nike shoes', cost: 30 },
      { id: 1, name: 'Nike shoes', cost: 30 },
      { id: 2, name: 'watch', cost: 320 },
      { id: 3, name: 'Tshirt', cost: 20 },
      { id: 3, name: 'Tshirt', cost: 20 }
    ]

    const expected = [
      { id: 1, name: 'Nike shoes', total: 90, count: 3 },
      { id: 2, name: 'watch', total: 320, count: 1 },
      { id: 3, name: 'Tshirt', total: 40, count: 2 }
    ]

    const result = groupByIdWithCount(products)

    expect(result).toEqual(expected)
  })
})
