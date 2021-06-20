import {
  filterPriceBelow,
  filterPriceAndCategoryBelow
} from '../helpers/filterValueBelow'

describe('filterPriceBelow', () => {
  it('filters prices below', () => {
    const products = [
      { name: 'Jacket', price: 500, category: 'clothes', count: 20 },
      { name: 'Boots', price: 120, category: 'clothes', count: 30 },
      { name: 'Iphone', price: 600, category: 'electronics', count: 5 },
      { name: 'Ipad', price: 300, category: 'electronics', count: 10 }
    ]

    const expected = [
      { name: 'Boots', price: 120, category: 'clothes', count: 30 },
      { name: 'Ipad', price: 300, category: 'electronics', count: 10 }
    ]

    const result = filterPriceBelow(350)(products)

    expect(result).toEqual(expected)
  })
})

describe('filterPriceAndCategoryBelow', () => {
  it('filters clothes prices below', () => {
    const products = [
      { name: 'Jacket', price: 500, category: 'clothes', count: 20 },
      { name: 'Boots', price: 120, category: 'clothes', count: 30 },
      { name: 'Iphone', price: 600, category: 'electronics', count: 5 },
      { name: 'Ipad', price: 300, category: 'electronics', count: 10 }
    ]

    const expected = [
      { name: 'Boots', price: 120, category: 'clothes', count: 30 }
    ]

    const result = filterPriceAndCategoryBelow(200, 'clothes')(products)

    expect(result).toEqual(expected)
  })
})
