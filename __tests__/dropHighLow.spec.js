import { dropHighLow, dropHighLow2, dropHighLow3 } from '../helpers/dropHighLow'

describe('dropHighLow', () => {
  it('drops the high and low values from the data source', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8]
    const expected = [2, 3, 4, 5, 6, 7]

    const result = dropHighLow(input)

    expect(result).toEqual(expected)
  })
})

describe('dropHighLow2', () => {
  it('drops the high and low values from the data source', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8]
    const expected = [2, 3, 4, 5, 6, 7]

    const result = dropHighLow2(input)

    expect(result).toEqual(expected)
  })
})

describe('dropHighLow3', () => {
  it('drops the high and low values from the data source', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8]
    const expected = [2, 3, 4, 5, 6, 7]

    const result = dropHighLow3(input)

    expect(result).toEqual(expected)
  })
})
